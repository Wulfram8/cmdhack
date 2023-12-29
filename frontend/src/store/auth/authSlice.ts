import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../';
import { api } from '../services/api';

export const TOKEN_KEY = 'token';

export type AuthState = {
  user: object | null;
  token: string | null;
  isAuthenticated: boolean;
};

const getInitialState = (): AuthState => ({
  token: localStorage.getItem(TOKEN_KEY) || null,
  user: null,
  isAuthenticated: Boolean(localStorage.getItem(TOKEN_KEY)),
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);
      return getInitialState();
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem(TOKEN_KEY, action.payload.token);
    });
  },
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
