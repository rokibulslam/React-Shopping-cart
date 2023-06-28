import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../features/cartSlice";
import CartItem from "../components/CartItem";
import CartItemDiscount from "../components/CartItemDiscount";



const Cart = () => {
  const dispatch = useDispatch()
  // Cart Slice Query
  const cart = useSelector(state => state.cart.cart)
  const discountedProducts = useSelector(
    (state) => state.cart.discountedProduct
  );
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const discountCoffee = useSelector((state) => state.cart.discountedCoffee);
  const discountForCocaCola = useSelector(
    (state) => state.cart.discountForCocacola
  );
  // toFixed(2)
  const subTotalWithDeci = parseFloat(cartTotal) + parseFloat(discountCoffee);
  const discountWithDeci = discountForCocaCola + discountCoffee;
  const subTotal = parseFloat(subTotalWithDeci).toFixed(2);
  const discount = parseFloat(discountWithDeci).toFixed(2);
  const totalWithDeci = parseFloat(subTotal) - parseFloat(discount);
    // Cart Calculation
  
  const total=parseFloat(totalWithDeci).toFixed(2)
  return (
    <div className="flex flex-col  gap-5 md:ms-[100px]">
      {/* Cart Items */}
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      {/* Cart for Discounted Items */}
      {discountedProducts.map((item, index) => (
        <CartItemDiscount key={index} item={item} />
      ))}
      {/* Cart Calculation  */}
      {/* Subtotal  */}
      <div>
        <div className="grid grid-cols-4 py-10 border-[#E6E6EB] border-x-0 border-y-[1px] border-solid ">
          <p></p>
          <p className="font-bold text-xl ">Subtotal</p>
          <p className="text-lightGray font-bold">
            <span>£</span>
            <span>{subTotal}</span>
          </p>
        </div>
        {/* Discount */}
        <div className="grid grid-cols-4 py-10 border-[#E6E6EB] border-x-0 border-y-[1px] border-solid ">
          <p></p>
          <p className="font-bold text-xl ">Discount</p>
          <p className="text-lightGray font-bold">
            <span>£</span>
            <span>{discount}</span>
          </p>
        </div>
        {/* Total */}
        <div className="grid grid-cols-4 py-10 border-[#E6E6EB] border-x-0 border-y-[1px] border-solid ">
          <p></p>
          <p className="font-bold text-xl ">Total</p>
          <p className="text-lightGray font-bold">
            <span>£</span>
            <span>{total}</span>
          </p>
          <button className="h-[25px] md:h-[50px] w-[100px] md:w-[187px] rounded-lg border-0 bg-[#7FD287] text-white font-bold md:text-base">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart