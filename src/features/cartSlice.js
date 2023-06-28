import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: {},
  cart: [],
  subTotal: 0,
  discountedProduct: [],
  discountForCocacola: 0,
  discountedCoffee: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCoffee: (state, action) => {
      state.coffee = action.payload;
    },
    addToCart: (state, action) => {
      // Check the product is exist or not in cart array & if exist get the product
      const selectedProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      // if product not exist in cart array
      if (!selectedProduct) {
        // add quantity property to the product object
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
        // Set Cart Total
        const cartTotal = state.cart.reduce((accu, product) => {
          return accu + (parseFloat(product.price.substring(1)) * parseInt(product.quantity));
        }, 0);
        state.cartTotal = cartTotal;
        state.subTotal=state.cartTotal+ state.discountedCoffee
        // if product exist first add quantity to selectedProduct
        // then remove existing product
        // push new updated selected product
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product.id !== selectedProduct.id)
          .push(selectedProduct);
        // Set cart Total
        const cartTotal = state.cart.reduce((accu, product) => {
          return (
            accu +
            parseFloat(product.price.substring(1)) * parseInt(product.quantity)
          );
        }, 0);
        state.cartTotal = cartTotal;
        state.subTotal = state.cartTotal + state.discountedCoffee;
      }
      // Offer for buy 6 cocacola & get 1 free   Croissants
      // check product exist in array(must)
      // product name need to be matched
      if (selectedProduct && selectedProduct.name === "Coca-Cola") {
        const quotientOfquantity = Math.floor(selectedProduct.quantity / 6);
        // discount of the free cocacola & assign discount value
        const discount =
          quotientOfquantity * parseFloat(selectedProduct.price.substring(1));
        state.discountForCocacola = discount;
      }
      // Offer for buy 3  & get 1 free coffee
      // check product Croissants must exist in cart
      if (selectedProduct && selectedProduct.name === "Croissants") {
        // Calculation for discounted coffee
        const quotientOfquantity = Math.floor(selectedProduct.quantity / 3);
        const discount =
          quotientOfquantity * parseFloat(state.coffee.price.substring(1));
        state.discountedCoffee = discount;
        state.subTotal = state.cartTotal + state.discountedCoffee
        // insert coffee with updated quantity into discountedProducts Array
        // Check coffee existence in discountedProduct array
        const existCoffee = state.discountedProduct.find(
          (product) => product.id === state.coffee.id
        );
        // if not exist push the updated coffee
        if (quotientOfquantity > 0 && !existCoffee) {
          const coffee = { ...state.coffee, quantity: quotientOfquantity };
          state.discountedProduct.push(coffee);
        }
        // if exist modify the coffee quantity
        if (quotientOfquantity > 0 && existCoffee) {
          const coffee = { ...state.coffee, quantity: quotientOfquantity };
          console.log(coffee);
          state.discountedProduct[0].quantity = quotientOfquantity;
        }
      }
    },
    removeFromCart: (state, action) => {
      // Check quantity for handling negative issue
      // if quantity is greater than 1, modify quantity
      if (action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        state.cart.push(product);
        // Set Cart Total
        const cartTotal = state.cart.reduce((accu, product) => {
          return (
            accu +
            parseFloat(product.price.substring(1)) * parseInt(product.quantity)
          );
        }, 0);
        state.cartTotal = cartTotal;
        state.subTotal = state.cartTotal + state.discountedCoffee;
        // Offer for buy 6 cocacola & get 1 free
        // Check product existence in the cart
        const selectedProduct = state.cart.find(
          (product) => product.id === action.payload.id
        );
        // selected product must be Coca-Cola
        if (selectedProduct && selectedProduct.name === "Coca-Cola") {
          // Discount of Cocacola
          const discount =
            Math.floor(selectedProduct.quantity / 6) *
            parseFloat(selectedProduct.price.substring(1));
          state.discountForCocacola = discount;
        }
        // Offer for buy 3  & get 1 free coffee
        // selected product must be Croissants
        if (selectedProduct && selectedProduct.name === "Croissants") {
          const quotientOfquantity = Math.floor(selectedProduct.quantity / 3);
          // Discount calculation for coffee
          const discount =
            quotientOfquantity * parseFloat(state.coffee.price.substring(1));
          state.discountedCoffee = discount;
          // set quotientOfquantity as coffee quantity or remove if 0
          if (quotientOfquantity > 0) {
            state.discountedProduct[0].quantity = quotientOfquantity;
          } else if (quotientOfquantity === 0) {
            state.discountedProduct = [];
            state.discountedCoffee = 0;
          }
        }
      } else {
        // if quantity is not greater than 1 remove the product
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        const cartTotal = state.cart.reduce((accu, product) => {
          return (
            accu +
            parseFloat(product.price.substring(1)) * parseInt(product.quantity)
          );
        }, 0);
        state.cartTotal = cartTotal;
        state.subTotal = state.cartTotal + state.discountedCoffee;
      }
    },
    deleteFromCart: (state, action) => {
      // remove the product from cart
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      // For Cocacola modify discount
      if (action.payload.name === "Coca-Cola") {
        state.discountForCocacola = 0;
      }
      // For Croissants empty the discounted product array
      if (action.payload.name === "Croissants") {
        state.discountedProduct = [];
        state.discountedCoffee = 0;
      }
      // Cart Total
      // Set Cart Total
      const cartTotal = state.cart.reduce((accu, product) => {
        return (
          accu +
          parseFloat(product.price.substring(1)) * parseInt(product.quantity)
        );
      }, 0);
      state.cartTotal = cartTotal;
      state.subTotal = state.cartTotal + state.discountedCoffee;
    },
  },
});

export const { addToCart, removeFromCart, addCoffee, deleteFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
