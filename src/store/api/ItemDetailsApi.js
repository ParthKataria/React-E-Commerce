import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const ItemDetailsApi = createApi({
  reducerPath: "item-details",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
  }),
  endpoints(builder) {
    return {
      fetchItemDetails: builder.query({
        query: (code) => {
          return {
            url: "/",
            params: { lang: "en", country: "us", productcode: code },
            headers: {
              "X-RapidAPI-Key":
                "4c9125aad4msh4987f593ab36d6ep1298acjsnf4fa651a01bb",
              "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            },
          };
        },
      }),
    };
  },
});
export const { useFetchItemDetailsQuery } = ItemDetailsApi;
export { ItemDetailsApi };
