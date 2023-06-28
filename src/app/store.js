import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../APIs/productApi";
import searchSlice from "../features/searchSlice";
import cartSlice from "../features/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    search: searchSlice,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

const persistedStore = persistStore(store);
export { store, persistedStore };