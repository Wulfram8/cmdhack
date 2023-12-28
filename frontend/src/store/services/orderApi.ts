import { Order } from '@root/dto';
import { api } from './api';

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<Order[], void>({
      query: () => ({
        url: '/orders',
      }),
      providesTags: ['Order'],
    }),
  }),
});

export const { useGetOrdersQuery } = orderApi;
