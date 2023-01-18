import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
export const { useFetchItemsQuery } = ItemsApi;
export { ItemsApi };
