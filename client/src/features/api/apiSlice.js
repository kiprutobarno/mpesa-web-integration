import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    makePayment: builder.mutation({
      query: (paymentDetails) => ({
        url: "/payment",
        method: "POST",
        body: paymentDetails,
      }),
    }),
  }),
});

export const { useMakePaymentMutation } = apiSlice;
