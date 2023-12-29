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

const initialState: CartState = {
  products: [
    {
      meal: {
        id: 1,
        ingredients: [],
        name: '123',
        image: '',
        description:
          'Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто',
        price: 20,
        category: [],
      },
      quantity: 1,
    },
    {
      meal: {
        id: 2,
        ingredients: [],
        name: '123',
        image: '',
        description:
          'Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто',
        price: 30,
        category: [],
      },
      quantity: 1,
    },
  ],
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
    },
    decrement: (state, action: PayloadAction<number>) => {
      const meal = state.products.find((product) => product.meal.id === action.payload);
      if (meal?.quantity) {
        meal.quantity--;
        if (meal.quantity === 0) {
          state.products = state.products.filter((product) => product.meal.id !== action.payload);
        }
      }
    },
    removeCartProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.meal.id !== action.payload);
    },
  },
});

export const { addCartProduct, increment, decrement, removeCartProduct } = cartSlice.actions;

export const updateTheCart = (state: RootState) => state.cart.isUpdated;
export const selectCartProducets = (state: RootState) => state.cart.products;
