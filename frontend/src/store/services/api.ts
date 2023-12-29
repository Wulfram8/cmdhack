import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../';
import { Client } from '@root/dto';

const API_URL = 'http://10.1.1.154:8000';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Token ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = baseQuery;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Restaurant', 'Order', 'Ingredient', 'Meal', 'Category'],
  endpoints: (build) => ({
    login: build.mutation<
      { token: string; client: Client },
      { username: string; password: string }
    >({
      query: (body) => ({
        body,
        url: '/auth/',
        method: 'POST',
      }),
    }),
    register: build.mutation<
      { token: string; client: Client },
      { username: string; password: string; first_name: string; last_name: string }
    >({
      query: (body) => ({
        body,
        url: '/register/',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = api;
