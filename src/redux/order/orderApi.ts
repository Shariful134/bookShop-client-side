/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (orderInfo) => ({
        url: `/order/create-order`,
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["order"],
    }),

    verifyOrder: builder.query({
      query: (order_id) => ({
        url: `/order?order_id${order_id}`,
        method: "GET",
      }),
    }),

    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/update-order/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/delete-order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    // getAllUser: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TqueryParams) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }
    //     return {
    //       url: "/admin//get-users",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   providesTags: ["users"],

    //   transformResponse: (response: TResponseRedux<any>) => ({
    //     data: response?.data,
    //     meta: response?.meta,
    //   }),
    // }),
  }),
});
export const {
  useAddOrderMutation,
  useVerifyOrderQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
