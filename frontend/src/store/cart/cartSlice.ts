import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../';
import { Meal } from '@root/dto';

type CartState = {
  products: {
    meal: Meal;
    quantity: number;
    notes: string[];
  }[];
};

const initialState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
