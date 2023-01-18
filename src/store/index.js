import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoryApi } from "./api/categoryApi";
import { ItemsApi } from "./api/ItemsApi";
import { ItemDetailsApi } from "./api/ItemDetailsApi";
import {
  searchFieldReducer,
  changeSearchField,
} from "./slices/searchFieldSlice";
const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [ItemsApi.reducerPath]: ItemsApi.reducer,
    [ItemDetailsApi.reducerPath]: ItemDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(ItemsApi.middleware)
      .concat(ItemDetailsApi.middleware);
  },
});
setupListeners(store.dispatch);
export { useFetchCategoriesQuery } from "./api/categoryApi";
export { useFetchItemsQuery } from "./api/ItemsApi";
export { useFetchItemDetailsQuery } from "./api/ItemDetailsApi";
export { store, changeSearchField };
