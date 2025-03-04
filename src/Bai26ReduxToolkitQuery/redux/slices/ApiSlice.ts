import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // đặt tên - path
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/", // baseUrl
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts", // path = /posts
    }), // full path = https://jsonplaceholder.typicode.com/posts
  }),
});

// Export const apiSlice ==> tên khác = useGetPostsQuery
export const { useGetPostsQuery } = apiSlice;
