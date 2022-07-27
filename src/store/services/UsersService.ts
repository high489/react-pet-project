import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../../models/IUser";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    
    getUsers: build.query<IUser[], any>({
      query: (limit: any = '') => ({
        url: `/users?${limit && `_limit=${limit}`}`,
      }),
      providesTags: (result) => result
      ? [...result.map(({ id }) => ({ type: 'Users' as const, id })),
        { type: 'Users', id: 'LIST' },]
      : [{ type: 'Users', id: 'LIST' }],
    }),
  }),
})

export const { useGetUsersQuery } = usersApi;