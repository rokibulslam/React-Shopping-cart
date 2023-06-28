import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { toast } from 'react-hot-toast';

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()
  return (
    <div className="w-[400px] h-[300px] md:w-[518px] md:h-[327px] text-darkslategray shadow-[5px_5px_20px_rgba(133,_133,_133,_0.2)] rounded-11xl grid grid-cols-2 items-center justify-center">
      {/* Image Div */}
      <div>
        <img
          className="h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
          src={item.img}
          alt=""
        />
      </div>
      {/* Content */}
      <div className="h-full">
        {/* header */}
        <h3 className="font-bold text-xl my-5 md:my-10">{item.name}</h3>
        {/* paragraph */}
        <p className="text-base mb-20">
          {item.description.split(/\s+/).slice(0, 10).join(" ")}
        </p>
        {/* Quantity */}
        <div className=" w-[98px] h-6 text-sm text-white mb-8">
          {item.available < 10 ? (
            <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px]">
              <span>Only</span>
              <span>{item.available}</span>
              <span>left</span>
            </div>
          ) : (
            <div className=" rounded-3xs bg-limegreen-200 shadow-[5px_5px_20px_rgba(196,_255,_202,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-limegreen-100 flex justify-center items-center gap-x-[3px] text-[14px]">
              <span>{`Available`}</span>
            </div>
          )}
        </div>
        {/* cart */}
        <div className="flex">
          {/* Price */}
          <div className="flex-1">
            <b className="text-xl">{item.price}</b>
          </div>
          {/* Cart */}
          <div className="mr-10 space-x-4">
            <img
              onClick={() => { dispatch(addToCart(item)); toast.success("Added To Cart")}}
              className="w-[28] h-[26] cursor-pointer"
              src="/src/assets/small-cart.png"
              alt=""
            />
            {/* Favourite */}
            <img
              className="w-[28] h-[26] cursor-pointer"
              src="/src/assets/small-love.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard