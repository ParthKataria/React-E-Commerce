import { createSlice } from "@reduxjs/toolkit";
// const userSlice = createSlice({
//   name: "user",
//   initialState: null,
//   reducers: {
//     changeUser(state, action) {
//       // Expecting User Object
//       //   console.log(action.payload);
//       return action.payload;
//     },
//   },
// });
// export const { changeUser } = userSlice.actions;
// export const userReducer = userSlice.reducer;
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
