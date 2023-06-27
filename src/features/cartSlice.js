import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  subTotal:0,
  discount: 0,
  total:0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!selectedProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product.id !== selectedProduct.id)
          .push(selectedProduct);
      }
       if (selectedProduct && selectedProduct.name === "Coca-Cola") {
         const discount =
           Math.floor(selectedProduct.quantity / 6) *
           parseFloat(selectedProduct.price.substring(1));
         state.discount = state.discount + discount;
       }
    },
    removeFromCart: (state, action) => {
      if (action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        state.cart.push(product);
      } else {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

