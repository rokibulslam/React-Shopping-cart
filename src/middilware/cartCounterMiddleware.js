const cartCounterMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  const cart = state.cart.cart;

  if (action.type === "cart/addToCart") {
    const newAction = {
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    };

    return next(newAction);
  }

  return next(action);
};

export default cartCounterMiddleware;
