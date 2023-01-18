import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "../../API_KEYS";
const categoryApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  }),
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        query: () => {
          return {
            url: "/categories/list",
            params: { lang: "en", country: "us" },
            headers: headers,
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchCategoriesQuery } = categoryApi;
export { categoryApi };
