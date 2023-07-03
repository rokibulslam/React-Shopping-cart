import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: {},
  coke: {},
  cart: [],
  subTotal: 0,
  discountedProduct: [],
  discountForCocacola: 0,
  discountedCoffee: 0,
  cartTotal: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
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
          return (
            accu +
            parseFloat(product.price.substring(1)) * parseInt(product.quantity)
          );
        }, 0);
        state.cartTotal = cartTotal;
        state.subTotal =
          state.cartTotal + state.discountedCoffee + state.discountForCocacola;
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
        state.subTotal =
          state.cartTotal + state.discountedCoffee + state.discountForCocacola;
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
        const coke = state.products.find((item) => item.name === "Coca-Cola");
        const existCoke = state.discountedProduct.find(
          (item) => item.id === coke.id
        );
        const newCoke = { ...coke, quantity: quotientOfquantity };
        if (!existCoke && quotientOfquantity > 0) {
          state.discountedProduct.push(newCoke);
        } else if (existCoke && quotientOfquantity > 0) {
          state.discountedProduct = [
            ...state.discountedProduct.filter((item) => item.id !== coke.id),
            newCoke,
          ];
        }
      }
      // Offer for buy 3  & get 1 free coffee
      // check product Croissants must exist in cart
      if (selectedProduct && selectedProduct.name === "Croissants") {
        // Calculation for discounted coffee
        const quotientOfquantity = Math.floor(selectedProduct.quantity / 3);
        const discount =
          quotientOfquantity * parseFloat(state.coffee.price.substring(1));
        state.discountedCoffee = discount;
        state.subTotal =
          state.cartTotal + state.discountedCoffee + state.discountForCocacola;
        // insert coffee with updated quantity into discountedProducts Array
        // Check coffee existence in discountedProduct array
        const existCoffee = state.discountedProduct.find(
          (product) => product.id === state.coffee.id
        );
        const coffeeFromApi = state.products.find(
          (item) => item.name === "Coffee"
        );
        const coffeeOnCart = state.cart.find((item) => item.name === "Coffee");
        const coffeeQuantity =
          coffeeFromApi.available -
          (existCoffee?.quantity ?? 0) -
          (coffeeOnCart?.quantity ?? 0);
        // if not exist push the updated coffee
        if (quotientOfquantity > 0 && !existCoffee) {
          if (coffeeQuantity <= 0) {
            return;
          } else if (coffeeQuantity >= quotientOfquantity) {
            const coffee = { ...state.coffee, quantity: quotientOfquantity };
            state.discountedProduct.push(coffee);
          }
        }
        // if exist modify the coffee quantity
        if (quotientOfquantity > 0 && existCoffee) {
          if (coffeeQuantity <= 0) {
            return;
          } else if (coffeeQuantity >= quotientOfquantity) {
            const coffee = { ...state.coffee, quantity: quotientOfquantity };
            state.discountedProduct = [
              ...state.discountedProduct.filter(
                (item) => item.id !== coffee.id
              ),
              coffee,
            ];
          }
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
        state.subTotal =
          state.cartTotal + state.discountedCoffee + state.discountForCocacola;
        // Offer for buy 6 cocacola & get 1 free
        // Check product existence in the cart
        const selectedProduct = state.cart.find(
          (product) => product.id === action.payload.id
        );
        // selected product must be Coca-Cola
        if (selectedProduct && selectedProduct.name === "Coca-Cola") {
          // Discount of Cocacola
          const quotientOfquantity = Math.floor(selectedProduct.quantity / 6);
          const discount =
            quotientOfquantity * parseFloat(selectedProduct.price.substring(1));
          state.discountForCocacola = discount;
          const coke = state.products.find((item) => item.name === "Coca-Cola");
          const newCoke = { ...coke, quantity: quotientOfquantity };
          if (quotientOfquantity > 0) {
            state.discountedProduct = [
              ...state.discountedProduct.filter((item) => item.id !== coke.id),
              newCoke,
            ];
          } else if (quotientOfquantity === 0) {
            state.discountedProduct = [
              ...state.discountedProduct.filter((item) => item.id !== coke.id),
            ];
            state.discountForCocacola = 0;
          }
        }
        // Offer for buy 3  & get 1 free coffee
        // selected product must be Croissants
        if (selectedProduct && selectedProduct.name === "Croissants") {
          const quotientOfquantity = Math.floor(selectedProduct.quantity / 3);
          // Discount calculation for coffee
          const discount =
            quotientOfquantity * parseFloat(state.coffee.price.substring(1));
          state.discountedCoffee = discount;
          const coffee = { ...state.coffee, quantity: quotientOfquantity };
          const coffeeFromApi = state.products.find(
            (item) => item.name === "Coffee"
          );
          const coffeeOnCart = state.cart.find(
            (item) => item.name === "Coffee"
          );
          const existCoffee = state.discountedProduct.find(
            (product) => product.id === state.coffee.id
          );
          const coffeeQuantity =
            coffeeFromApi.available -
            (existCoffee?.quantity ?? 0) -
            (coffeeOnCart?.quantity ?? 0);
          // set quotientOfquantity as coffee quantity or remove if 0
          if (quotientOfquantity > 0) {
            if (coffeeQuantity >= quotientOfquantity) {
              state.discountedProduct = [
                ...state.discountedProduct.filter(
                  (item) => item.id !== coffee.id
                ),
                coffee,
              ];
            }
          } else if (quotientOfquantity === 0) {
            state.discountedProduct = [
              ...state.discountedProduct.filter(
                (item) => item.id !== coffee.id
              ),
            ];
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
        state.subTotal =
          state.cartTotal + state.discountedCoffee + state.discountForCocacola;
      }
    },
    deleteFromCart: (state, action) => {
      // remove the product from cart
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      // For Cocacola modify discount
      if (action.payload.name === "Coca-Cola") {
        const coke = state.discountedProduct.find(
          (item) => item.name === "Coca-Cola"
        );
        state.discountedProduct = [
          ...state.discountedProduct.filter((item) => item.id !== coke.id),
        ];
        state.discountForCocacola = 0;
      }
      // For Croissants empty the discounted product array
      if (action.payload.name === "Croissants") {
        const coffee = state.discountedProduct.find(
          (item) => item.name === "Coffee"
        );
        state.discountedProduct = [
          ...state.discountedProduct.filter((item) => item.id !== coffee.id),
        ];
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
      state.subTotal =
        state.cartTotal + state.discountedCoffee + state.discountForCocacola;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addCoffee,
  deleteFromCart,
  addProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
