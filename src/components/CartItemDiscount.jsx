import React from 'react'

const CartItemDiscount = ({item}) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 items-start md:justify-items-start pt-5">
      <div className="flex justify-between md:justify-center items-start flex-1 gap-x-10 px-14">
        {/* Image */}
        <img className="w-[80px] h-[80px]" src="/src/assets/mango.jpg" alt="" />
        {/* Food */}
        <div className="text-darkslategray space-y-3">
          {/* Name */}
          <h1 className="text-xl font-bold">{item.name}</h1>
          {/* Code */}
          <p className="text-base font-light pt-3">Product Code: {item.id}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 items-start gap-x-5 w-full">
        {/* Quantity */}
        <div className="flex flex-col justify-center items-center space-y-3">
          {/* Minus */}
          <div className="flex justify-center items-center space-x-3">
            <p>{item.quantity}</p>
          </div>
          {/* Remainning */}
          <div>
            {item.available < 10 ? (
              <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px] text-white">
                <span>Only</span>
                <span>{item.available}</span>
                <span>left</span>
              </div>
            ) : (
              <div className=" rounded-3xs bg-limegreen-200 shadow-[5px_5px_20px_rgba(196,_255,_202,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-limegreen-100 flex justify-center items-center gap-x-[3px] text-[14px] text-white">
                <span>{`Available`}</span>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-end'>
          <p>{item.price}</p>
        </div>
        {/* delete  */}
        <div className='flex justify-center'>
          <p className="bg-dodgerblue text-white px-3 py-1 rounded-2xl text-center w-10">
            free
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemDiscount