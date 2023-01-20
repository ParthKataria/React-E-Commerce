import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    modifyElement(state, action) {
      //
    },
  },
});
export const { addToCart } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
