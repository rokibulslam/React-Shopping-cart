import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../APIs/productApi";
import searchSlice from "../features/searchSlice";
import cartSlice from "../features/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import cartCounterMiddleware from "../middilware/cartCounterMiddleware";

// Persist for cart slice
const cartPersistConfig = {
  key: "cart",
  storage,
};
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
// Configure store 
const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    search: searchSlice,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware).concat(cartCounterMiddleware),
});

const persistedStore = persistStore(store);
export { store, persistedStore };