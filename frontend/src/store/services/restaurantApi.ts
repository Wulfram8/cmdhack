import { Restaurant } from '@root/dto';
import { api } from './api';

export const restaurantApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRestaurants: build.query<Restaurant[], void>({
      query: () => ({
        url: '/restaurant',
      }),
      providesTags: ['Restaurant'],
    }),
    getRestaurantById: build.query<Restaurant, number>({
      query: (id) => ({
        url: `restaurants/${id}`,
      }),
      providesTags: ['Restaurant'],
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = restaurantApi;
