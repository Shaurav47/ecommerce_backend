import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),

  endpoints: (builder) => ({



    getAllProducts: builder.query({
      query: (q) => ({
        url: '/products',
        method: 'GET'
      })
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      })
    }),






  })

});