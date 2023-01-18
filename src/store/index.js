import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoryApi } from "./api/categoryApi";
import {
  searchFieldReducer,
  changeSearchField,
} from "./slices/searchFieldSlice";
const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(categoryApi.middleware);
  },
});
setupListeners(store.dispatch);
export { useFetchCategoriesQuery } from "./api/categoryApi";
export { store, changeSearchField };
