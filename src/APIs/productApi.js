import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category }) => ({
        url: `/s?category=${category}`,
      }),
    }),
    productList: builder.query({
      query: () => ({
        url: "/s?category=all",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useProductListQuery} = productApi;