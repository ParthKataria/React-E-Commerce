import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "../../API_KEYS";
const ItemsApi = createApi({
  reducerPath: "items",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
  }),
  endpoints(builder) {
    return {
      fetchItems: builder.query({
        query: (categories) => {
          return {
            url: "/",
            params: {
              country: "in",
              lang: "en",
              currentpage: "0",
              pagesize: "30",
              categories: categories,
            },
            headers: headers,
          };
        },
      }),
    };
  },
});
export const { useFetchItemsQuery } = ItemsApi;
export { ItemsApi };
