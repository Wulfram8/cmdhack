import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../';
import { Meal } from '@root/dto';

export type CartProduct = {
  meal: Meal;
  quantity: number;
};

export type CartState = {
  products: CartProduct[];
};

const LOCAL_STORAGE_CART_KEY: string = 'cart';
const state = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
const initialState: CartState = state ? (JSON.parse(state) as CartState) : { products: [] };

const updateStorage = (products: CartState) => {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(products));
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: (state, action: PayloadAction<CartProduct>) => {
      state.products.push(action.payload);
    },
    increment: (state, action: PayloadAction<number>) => {
      const meal = state.products.find((product) => product.meal.id === action.payload);
      if (meal?.quantity) {
        meal.quantity++;
      }
      updateStorage(state);
    },
    decrement: (state, action: PayloadAction<number>) => {
      const meal = state.products.find((product) => product.meal.id === action.payload);
      if (meal?.quantity) {
        meal.quantity--;
        if (meal.quantity === 0) {
          state.products = state.products.filter((product) => product.meal.id !== action.payload);
        }
        updateStorage(state);
      }
    },
    removeCartProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.meal.id !== action.payload);
      updateStorage(state);
    },
  },
});

export const { addCartProduct, increment, decrement, removeCartProduct } = cartSlice.actions;

export const updateTheCart = (state: RootState) => state.cart.isUpdated;
export const selectCartProducets = (state: RootState) => state.cart.products;
export const selectCartTotalPrice = (state: RootState) =>
  state.cart.products.reduce((amount, product) => {
    return amount + product.meal.price * product.quantity;
  }, 0);
