import { configureStore } from "@reduxjs/toolkit";
import {
  searchFieldReducer,
  changeSearchField,
} from "./slices/searchFieldSlice";
const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
  },
});
export { store, changeSearchField };
