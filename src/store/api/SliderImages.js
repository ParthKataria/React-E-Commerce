import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const SliderImages = createApi({
  reducerPath: "sliderImages",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/search/photos",
  }),
  endpoints(builder) {
    return {
      fetchImages: builder.query({
        query: (category) => {
          return {
            url: "/",
            headers: {
              Authorization:
                "Client-ID tVyT5iFLB3qmTQYHB1UImyIzEfR2eG0bFKce-Ky5FhA",
            },
            params: { query: category },
          };
        },
      }),
    };
  },
});
export const { useFetchImagesQuery } = SliderImages;
export { SliderImages };
