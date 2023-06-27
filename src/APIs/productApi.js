import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category }) => ({
        url: `/s?category=${category}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery} = productApi;