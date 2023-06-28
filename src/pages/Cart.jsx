import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../features/cartSlice";


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const discountedProducts = useSelector(
    (state) => state.cart.discountedProduct
  );
  // const subTotal = useSelector((state) => state.cart.subTotal);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const discountCoffee = useSelector((state) => state.cart.discountedCoffee);
  const subTotalWithDeci = parseFloat(cartTotal) + parseFloat(discountCoffee);
  const subTotal = parseFloat(subTotalWithDeci).toFixed(2);
  const discount = useSelector(
    (state) => state.cart.discountForCocacola
  );
  const totalWithDeci = parseFloat(subTotal) - parseFloat(discount)
  const total=parseFloat(totalWithDeci).toFixed(2)
  return (
    <div>
      {/* Cart Items */}
      {cart.map((item, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 items-start"
        >
          <div className="flex justify-center items-start space-x-5 flex-1">
            {/* Image */}
            <img
              className="w-[80px] h-[80px]"
              src="/src/assets/mango.jpg"
              alt=""
            />
            {/* Food */}
            <div className="text-darkslategray space-y-3">
              {/* Name */}
              <h1 className="text-xl font-bold">{item.name}</h1>
              {/* Code */}
              <p className="text-base font-light pt-3">
                Product Code: {item.id}
              </p>
            </div>
          </div>
          <div className="flex justify-around">
            {/* Quantity */}
            <div className="flex flex-col justify-center items-center space-y-3">
              {/* Minus */}
              <div className="flex justify-center items-center space-x-3">
                {" "}
                <img
                  onClick={() => dispatch(removeFromCart(item))}
                  className="w-[24px] h-[24px] cursor-pointer"
                  src="/src/assets/Minus.png"
                  alt=""
                />
                {/* Quantity  */}
                <p>{item.quantity}</p>
                {/* Plus */}
                <img
                  onClick={() => dispatch(addToCart(item))}
                  className="w-[24px] h-[24px] cursor-pointer"
                  src="/src/assets/Plus.png"
                  alt=""
                />
              </div>
              {/* Remainning */}
              <div>
                <div className=" w-[98px] h-6 text-sm text-white mb-8">
                  <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px]">
                    <span>Only</span>
                    <span>{item.available}</span>
                    <span>left</span>
                  </div>
                </div>
              </div>
            </div>
            <p>{item.price}</p>
            {/* delete  */}
            <img
              onClick={() => dispatch(deleteFromCart(item))}
              className="w-[24px] h-[24px]"
              src="/src/assets/delete.png"
              alt=""
            />
          </div>
        </div>
      ))}
      {/* Cart for Discounted Items */}
      {discountedProducts.map((item, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 items-start"
        >
          <div className="flex justify-center items-start space-x-5 flex-1">
            {/* Image */}
            <img
              className="w-[80px] h-[80px]"
              src="/src/assets/mango.jpg"
              alt=""
            />
            {/* Food */}
            <div className="text-darkslategray space-y-3">
              {/* Name */}
              <h1 className="text-xl font-bold">{item.name}</h1>
              {/* Code */}
              <p className="text-base font-light pt-3">{item.id}</p>
            </div>
          </div>
          <div className="flex justify-around">
            {/* Quantity */}
            <div className="flex flex-col justify-center items-center space-y-3">
              {/* Minus */}
              <div className="flex justify-center items-center space-x-3">
                {" "}
                <img
                  // onClick={() => dispatch(removeFromCart(item))}
                  className="w-[24px] h-[24px] cursor-pointer"
                  src="/src/assets/Minus.png"
                  alt=""
                />
                {/* Quantity  */}
                <p>{item.quantity}</p>
                {/* Plus */}
                <img
                  // onClick={() => dispatch(addToCart(item))}
                  className="w-[24px] h-[24px] cursor-pointer"
                  src="/src/assets/Plus.png"
                  alt=""
                />
              </div>
              {/* Remainning */}
              <div>
                <div className=" w-[98px] h-6 text-sm text-white mb-8">
                  <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px]">
                    <span>Only</span>
                    <span>{item.available}</span>
                    <span>left</span>
                  </div>
                </div>
              </div>
            </div>
            <p>{item.price}</p>
            {/* delete  */}
            <img
              className="w-[24px] h-[24px]"
              src="/src/assets/delete.png"
              alt=""
            />
          </div>
        </div>
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