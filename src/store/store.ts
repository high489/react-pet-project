import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "./services/PostsService";
import { usersApi } from "./services/UsersService";
import { todosApi } from "./services/TodosService";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      postsApi.middleware, 
      usersApi.middleware,
      todosApi.middleware,
    ),
})