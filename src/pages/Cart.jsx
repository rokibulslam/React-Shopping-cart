import React from 'react'

const Cart = () => {
  return (
    <div className="h-[113px] grid grid-cols-4 items-start">
      <div className='flex justify-center items-center space-x-5'>
        {/* Image */}
        <img className="w-[80px] h-[80px]" src="/src/assets/mango.jpg" alt="" />
        {/* Food */}
        <div className="text-darkslategray space-y-3">
          {/* Name */}
          <h1 className="text-xl font-bold">Sweetest® Mango</h1>
          {/* Code */}
          <p className="text-base font-light">Product code: 239JU13</p>
        </div>
      </div>
      {/* Quantity */}
      <div className="flex flex-col justify-center items-center space-y-3">
        {/* plus */}
        <div className="flex justify-center items-center space-x-3">
          {" "}
          <img
            className="w-[24px] h-[24px]"
            src="/src/assets/Minus.png"
            alt=""
          />
          {/* Quantity  */}
          <p>2</p>
          {/* Minus */}
          <img
            className="w-[24px] h-[24px]"
            src="/src/assets/Plus.png"
            alt=""
          />
        </div>
        {/* Remainning */}
        <div>
          <div className=" w-[98px] h-6 text-sm text-white mb-8">
            <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px]">
              <span>Only</span>
              <span>{` 5 `}</span>
              <span>left</span>
            </div>
          </div>
        </div>
      </div>
      <p>Price</p>
      {/* delete  */}
      <img className="w-[24px] h-[24px]" src="/src/assets/delete.png" alt="" />
    </div>
  );
}

export default Cart