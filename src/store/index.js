import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoryApi } from "./api/categoryApi";
import { ItemsApi } from "./api/ItemsApi";
import { ItemDetailsApi } from "./api/ItemDetailsApi";
import { SliderImages } from "./api/SliderImages";
import { ItemsReducer } from "./slices/ItemsSlice";
import {
  searchFieldReducer,
  changeSearchField,
} from "./slices/searchFieldSlice";
import { userReducer, changeUser } from "./slices/userSlice";
import {
  cartReducer,
  addToCart,
  modifyElement,
  removeElement,
} from "./slices/CartSlice";
import { wishlistReducer, addToWishlist } from "./slices/WishlistSlice";
const store = configureStore({
  reducer: {
    searchField: searchFieldReducer,
    user: userReducer,
    cart: cartReducer,
    itemslist: ItemsReducer,
    wishlist: wishlistReducer,

    [categoryApi.reducerPath]: categoryApi.reducer,
    [ItemsApi.reducerPath]: ItemsApi.reducer,
    [ItemDetailsApi.reducerPath]: ItemDetailsApi.reducer,
    [SliderImages.reducerPath]: SliderImages.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(ItemsApi.middleware)
      .concat(ItemDetailsApi.middleware)
      .concat(SliderImages.middleware);
  },
});
setupListeners(store.dispatch);
export { useFetchImagesQuery } from "./api/SliderImages";
export { useFetchCategoriesQuery } from "./api/categoryApi";
export { useFetchItemsQuery } from "./api/ItemsApi";
export { useFetchItemDetailsQuery } from "./api/ItemDetailsApi";
export {
  store,
  changeSearchField,
  changeUser,
  addToCart,
  addToWishlist,
  modifyElement,
  removeElement,
};
export * from "./api/fetchItems";
