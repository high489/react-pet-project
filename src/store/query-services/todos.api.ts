import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../../models/ITodo';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos'], 
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000'}),
  endpoints: (build) => ({

    getTodos: build.query<ITodo[], any>({
      query: (limit: any = '') => ({
        url: `/todos?${limit && `_limit=${limit}`}`,  
      }),
      providesTags: (result) => result
      ? [...result.map(({ id }) => ({ type: 'Todos' as const, id })),
        { type: 'Todos', id: 'LIST' },]
      : [{ type: 'Todos', id: 'LIST' }],
    }),

    createTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `todos`,
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}],
    }),

    updateTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),

    deleteTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
        body: todo,
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),
  }),
});

export const { 
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;