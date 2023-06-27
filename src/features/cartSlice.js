import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  subTotal:0,
  discountForCocacola: 0,
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
      // Offer for buy 6 cocacola & get 1 free
       if (selectedProduct && selectedProduct.name === "Coca-Cola") {
         const quotientOfquantity = Math.floor(selectedProduct.quantity / 6)
         const discount =
            quotientOfquantity *
           parseFloat(selectedProduct.price.substring(1));
         state.discountForCocacola = discount;
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
        // Offer for buy 6 cocacola & get 1 free
        const selectedProduct = state.cart.find(
          (product) => product.id === action.payload.id
        );
        if (selectedProduct && selectedProduct.name === "Coca-Cola") {
          console.log(Math.floor(selectedProduct.quantity / 6));
          const discount =
            Math.floor(selectedProduct.quantity / 6) *
            parseFloat(selectedProduct.price.substring(1));
          
          state.discountForCocacola = discount;
        }
      } else {
        state.discountForCocacola = 0;
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

