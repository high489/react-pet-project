import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../../models/IPost'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
  tagTypes: ['Posts'],
  endpoints: (build) => ({

    getPosts: build.query<IPost[], any>({
      query: (limit: any = '') => ({
        url: `/posts?${limit && `_limit=${limit}`}`,
      }),
      providesTags: (result) => result
      ? [...result.map(({ id }) => ({ type: 'Posts' as const, id })),
        { type: 'Posts', id: 'LIST' },]
      : [{ type: 'Posts', id: 'LIST' }],
    }),

    getOnePost: build.query<IPost, any>({
      query: (id: any) => ({
        url: `/posts/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Posts', id: 'LIST' }],
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts']
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Posts']
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Posts']
    }),
  })
})

export const { 
  useGetPostsQuery,
  useGetOnePostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;