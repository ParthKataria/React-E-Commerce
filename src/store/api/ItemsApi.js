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
        query: (category) => {
          return {
            url: "/",
            params: {
              country: "us",
              lang: "en",
              currentpage: "0",
              pagesize: "30",
              categories: category,
              concepts: "H&M MAN",
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
