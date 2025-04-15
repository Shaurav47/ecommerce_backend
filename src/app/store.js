import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/product/productApi";
import { blogApi } from "../features/blog/blogApi";



export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    //extra features  caching / invalidation / polling
    productApi.middleware,
    blogApi.middleware
  ])
});