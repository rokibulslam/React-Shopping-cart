import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: {},
  cart: [],
  subTotal: 0,
  discountedProduct: [],
  discountForCocacola: 0,
  discountedCoffe: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCoffee: (state, action) => {
      state.coffee = action.payload;
    },
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
      // Offer for buy 6 cocacola & get 1 free   Croissants
      if (selectedProduct && selectedProduct.name === "Coca-Cola") {
        const quotientOfquantity = Math.floor(selectedProduct.quantity / 6);
        const discount =
          quotientOfquantity * parseFloat(selectedProduct.price.substring(1));
        state.discountForCocacola = discount;
      }
      // Offer for buy 3  & get 1 free coffee
      if (selectedProduct && selectedProduct.name === "Croissants") {
        // Calculation for discount
        const quotientOfquantity = Math.floor(selectedProduct.quantity / 3);
        const discount =
          quotientOfquantity * parseFloat(selectedProduct.price.substring(1));
        state.discountedCoffe = discount;
        // insert coffee with updated quantity into discountedProducts Array

        const existCoffee = state.discountedProduct.find(
          (product) => product.id === state.coffee.id
        );
        console.log(existCoffee);
        if (quotientOfquantity > 0 && !existCoffee) {
          const coffee = { ...state.coffee, quantity: quotientOfquantity };
          console.log(coffee);
          state.discountedProduct.push(coffee);
        }
        if (quotientOfquantity > 0 && existCoffee) {
          const coffee = { ...state.coffee, quantity: quotientOfquantity };
          console.log(coffee);
          state.discountedProduct[0].quantity = quotientOfquantity;
        }
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
        // Offer for buy 3  & get 1 free coffee
        if (selectedProduct && selectedProduct.name === "Croissants") {
          const quotientOfquantity = Math.floor(selectedProduct.quantity / 3);
          const discount =
            quotientOfquantity * parseFloat(selectedProduct.price.substring(1));
          state.discountedCoffe = discount;
          const existCoffee = state.discountedProduct.find(
            (product) => product.id === state.coffee.id
          );
          console.log(existCoffee);
          if (quotientOfquantity > 0) {
            const coffee = { ...state.coffee, quantity: quotientOfquantity };
            console.log(coffee);
            state.discountedProduct[0].quantity = quotientOfquantity;
          } else if (quotientOfquantity === 0) {
            state.discountedProduct = [];
          }
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

export const { addToCart, removeFromCart, addCoffee } = cartSlice.actions;
export default cartSlice.reducer;
