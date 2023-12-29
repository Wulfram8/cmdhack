import { Category } from '@root/dto';
import { api } from './api';

export const categoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: '/categories',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
