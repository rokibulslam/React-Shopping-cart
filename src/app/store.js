import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../APIs/productApi";
import searchSlice from "../features/searchSlice";



const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    search:searchSlice
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware),
});

export default store;