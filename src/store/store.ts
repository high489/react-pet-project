import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postsApi } from "./services/PostsService";
import { usersApi } from "./services/UsersService";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        postsApi.middleware, 
        usersApi.middleware,
      )
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']