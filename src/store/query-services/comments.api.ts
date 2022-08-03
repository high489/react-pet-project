import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment } from '../../models/IComment'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
  tagTypes: ['Comments'],
  endpoints: (build) => ({

    getCommentsByPostId: build.query<IComment[], any>({
      query: (postId: any = '') => ({
        url: `/comments?${postId && `postId=${postId}`}`,
      }),
      providesTags: (result) => result
      ? [...result.map(({ id }) => ({ type: 'Comments' as const, id })),
        { type: 'Comments', id: 'LIST' },]
      : [{ type: 'Comments', id: 'LIST' }],
    }),

  })
})

export const { useGetCommentsByPostIdQuery } = commentsApi