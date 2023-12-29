import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterValue: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilterValue } = filterSlice.actions;
