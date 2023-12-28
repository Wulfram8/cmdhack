import { Ingredient } from '@root/dto';
import { api } from './api';

export const ingreidentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getIngredients: build.query<Ingredient[], void>({
      query: () => ({
        url: '/ingredients',
      }),
      providesTags: ['Ingredient'],
    }),
  }),
});

export const { useGetIngredientsQuery } = ingreidentApi;
