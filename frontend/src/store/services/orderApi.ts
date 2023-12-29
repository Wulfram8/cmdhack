import { Order } from '@root/dto';
import { api } from './api';

export type CreateOrderBody = {
  client_id: number;
  to_whom_id: number;
  is_delivery: boolean;
  is_present: boolean;
  address: string;
  note: string;
  payment_method: string;
  payment_status: string;
  delivery_time: string;
  products: [
    {
      meal_id: number;
      quantity: number;
      notes: string[];
    },
  ];
};

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<Order[], void>({
      query: () => ({
        url: '/orders',
      }),
      providesTags: ['Order'],
    }),
    createOrder: build.mutation<unknown, CreateOrderBody>({
      query: (body) => ({
        url: '/orders/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;
