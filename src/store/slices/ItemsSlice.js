import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "../api/fetchItems";
const ItemsSlice = createSlice({
  name: "ItemsSliceList",
  initialState: {
    data: [],
    isFetching: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
  },
});
export const ItemsReducer = ItemsSlice.reducer;
