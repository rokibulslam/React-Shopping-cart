import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../APIs/productApi";
import searchSlice from "../features/searchSlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    search: searchSlice,
    cart:cartSlice
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware),
});

export default store;