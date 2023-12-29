import { Client } from '@root/dto';
import { api } from './api';

export const clientApi = api.injectEndpoints({
  endpoints: (build) => ({
    getClients: build.query<Client[], void>({
      query: () => ({
        url: '/clients',
      }),
      providesTags: ['Client'],
    }),
  }),
});

export const { useGetClientsQuery } = clientApi;
