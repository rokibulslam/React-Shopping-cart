import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { toast } from 'react-hot-toast';
import smallCart from '../assets/small-cart.png'
import smallLove from '../assets/small-love.png'
const ProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const product = cart?.find((cartItem) => cartItem.id === item.id); 
  const handleAddToCart = () => {
    if (item.available - product?.quantity < 0) {
      toast.error("You Dont have enough Product");
      return
    } else {
      dispatch(addToCart(item));
      toast.success("Added To Cart");
    }
  }
  useEffect(() => {
    setQuantity(item.available - product?.quantity);
  },[cart, item])
  return (
    <div className="w-[300px] h-[240px] md:w-[518px] md:h-[327px] text-darkslategray shadow-[5px_5px_20px_rgba(133,_133,_133,_0.2)] rounded-11xl grid grid-cols-2 items-center justify-center px-5">
      {/* Image Div */}
      <div>
        <img
          className="h-[100px] w-[100px] md:h-[200px] md:w-[200px]"
          src={item.img}
          alt=""
        />
      </div>
      {/* Content */}
      <div className="flex flex-col items-stretch">
        {/* header */}
        <h3 className="font-bold text-xl my-5 md:my-10">{item.name}</h3>
        {/* paragraph */}
        <p className="text-base mb-5 lg:mb-20">
          {item.description.split(/\s+/).slice(0, 10).join(" ")}
        </p>
        {/* Quantity */}
        <div className=" w-[98px] h-6 text-sm text-white mb-8">
          {quantity < 10 ? (
            <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px] text-white">
              <span>Only</span>
              <span>{quantity}</span>
              <span>left</span>
            </div>
          ) : (
            <div className=" rounded-3xs bg-limegreen-200 shadow-[5px_5px_20px_rgba(196,_255,_202,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-limegreen-100 flex justify-center items-center gap-x-[3px] text-[14px] text-white">
              <span>{`Available`}</span>
            </div>
          )}
        </div>
        {/* cart */}
        <div className="flex">
          {/* Price */}
          <div className="md:flex-1">
            <b className="md:text-xl mr-5 md:mr-0">{item.price}</b>
          </div>
          {/* Cart */}
          <div className="md:mr-10 space-x-4">
            <img
              onClick={() => {
                handleAddToCart()
                }}
              className="w-[18px] md:w-[28px] h-[18px] md:h-[26px] cursor-pointer"
              src={smallCart}
              alt=""
            />
            {/* Favourite */}
            <img
              className="w-[18px]md:w-[28px] h-[18px] md:h-[26px] cursor-pointer"
              src={smallLove}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard