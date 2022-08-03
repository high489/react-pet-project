import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "./query-services/posts.api";
import { commentsApi } from "./query-services/comments.api";
import { usersApi } from "./query-services/users.api";
import { todosApi } from "./query-services/todos.api";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware, 
      usersApi.middleware,
      todosApi.middleware,
    ),
})