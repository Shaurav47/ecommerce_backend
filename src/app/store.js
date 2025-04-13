import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/product/productApi";



export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    //extra features  caching / invalidation / polling
    productApi.middleware
  ])
});