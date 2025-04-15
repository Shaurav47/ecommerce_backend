import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67f1efe1c733555e24ae5ba7.mockapi.io' }),

  endpoints: (builder) => ({

    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET'
      }),
      providesTags: ['Blog']
    }),


    addBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        body: data,
        method: 'POST'
      }),
      invalidatesTags: ['Blog']
    }),


    removeBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Blog']
    })



  })

});

export const { useGetBlogsQuery, useAddBlogMutation, useRemoveBlogMutation } = blogApi;