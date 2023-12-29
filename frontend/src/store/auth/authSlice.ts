import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../';
import { api } from '../services/api';
import { Client } from '@root/dto';

export const SESSION_KEY = 'session';

export type AuthState = {
  client: Client | null;
  token: string | null;
  isAuthenticated: boolean;
};

const state = localStorage.getItem(SESSION_KEY);

const getInitialState = (): AuthState =>
  state
    ? JSON.parse(state)
    : {
        client: null,
        isAuthenticated: false,
        token: null,
      };

export const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    logout: () => {
      localStorage.removeItem(SESSION_KEY);
      return {
        client: null,
        isAuthenticated: false,
        token: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.client = action.payload.client;
      state.isAuthenticated = true;
      localStorage.setItem(SESSION_KEY, JSON.stringify(state));
    });
    builder.addMatcher(api.endpoints.register.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.client = action.payload.client;
      state.isAuthenticated = true;
      localStorage.setItem(SESSION_KEY, JSON.stringify(state));
    });
  },
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectClient = (state: RootState) => state.auth.client;
