import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { api } from './services/api';
import { authSlice } from './auth/authSlice';
import { cartSlice } from './cart/cartSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      [authSlice.reducerPath]: authSlice.reducer,
      [cartSlice.reducerPath]: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
