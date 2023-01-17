import { createSlice } from "@reduxjs/toolkit";
const searchFieldSlice = createSlice({
  name: "searchfeild",
  initialState: "",
  reducers: {
    changeSearchField(state, action) {
      return action.payload;
    },
  },
});
export const { changeSearchField } = searchFieldSlice.actions;
export const searchFieldReducer = searchFieldSlice.reducer;
