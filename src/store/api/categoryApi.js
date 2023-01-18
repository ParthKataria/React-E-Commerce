import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
            headers: {
              "X-RapidAPI-Key":
                "4c9125aad4msh4987f593ab36d6ep1298acjsnf4fa651a01bb",
              "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            },
            method: "GET",
          };
        },
      }),
    };
  },
});
export const { useFetchCategoriesQuery } = categoryApi;
export { categoryApi };
