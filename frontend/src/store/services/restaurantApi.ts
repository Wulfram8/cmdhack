import { Restaurant } from '@root/dto';
import { api } from './api';

export const restaurantApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRestaurants: build.query<Restaurant[], void>({
      query: () => ({
        url: '/restaurants/',
      }),
      providesTags: ['Restaurant'],
    }),
    getFilteredRestaurants: build.query<Restaurant[], number>({
      query: (id) => ({
        url: `/restaurants/?categories=${id}`,
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

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery, useGetFilteredRestaurantsQuery } =
  restaurantApi;
