

const Home = () => {
  return (
    <div className="space-y-8 mx-10">
      {/* Filter */}
      <div className="flex md:flex-row flex-col justify-center md:justify-start items-center">
        {/* All Items */}
        <button className="rounded-11xl bg-white shadow-[5px_5px_20px_rgba(181,_181,_181,_0.2)] box-border w-[100px] md:w-[188px] h-[30px] md:h-[59px] border-[1px] border-solid border-silver-100 flex justify-center items-center cursor-pointer md:text-5xl m-3">
          All items
        </button>
        {/* Drinks */}
        <button className="rounded-11xl bg-white shadow-[5px_5px_20px_rgba(181,_181,_181,_0.2)] box-border w-[100px] md:w-[188px] h-[30px] md:h-[59px] border-[1px] border-solid border-silver-100 flex justify-center items-center cursor-pointer md:text-5xl m-3">
          Drinks
        </button>
        {/* Fruits */}
        <button className="rounded-11xl bg-white shadow-[5px_5px_20px_rgba(181,_181,_181,_0.2)] box-border w-[100px] md:w-[188px] h-[30px] md:h-[59px] border-[1px] border-solid border-silver-100 flex justify-center items-center cursor-pointer md:text-5xl m-3">
          Fruits
        </button>
        {/* Bakery */}
        <button className="rounded-11xl bg-white shadow-[5px_5px_20px_rgba(181,_181,_181,_0.2)] box-border w-[100px] md:w-[188px] h-[30px] md:h-[59px] border-[1px] border-solid border-silver-100 flex justify-center items-center cursor-pointer md:text-5xl m-3">
          Bakery
        </button>
      </div>
      <h1 className="t text-darkslategray text-[32px] ">Trending Items</h1>
      {/* Product Card */}
      <div className="py-5">
        <div className="w-[518px] h-[327px] text-darkslategray shadow-[5px_5px_20px_rgba(133,_133,_133,_0.2)] rounded-11xl grid grid-cols-2 items-center justify-center">
          {/* Image Div */}
          <div>
            <img src="/src/assets/mango.jpg" alt="" />
          </div>
          {/* Content */}
          <div className="h-full">
            {/* header */}
            <h3 className="font-bold text-xl my-10">Sweetest® Mango</h3>
            {/* paragraph */}
            <p className="text-base mb-20">
              It’s mango season again... who doesn’t love that!
            </p>
            {/* Quantity */}
            <div className=" w-[98px] h-6 text-sm text-white mb-8">
              <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px]">
                <span>Only</span>
                <span>{` 5 `}</span>
                <span>left</span>
              </div>
            </div>
            {/* cart */}
            <div className="flex">
              {/* Price */}
              <div className="flex-1">
                <b className="text-xl">{`85`}</b>
                <b className="text-xl">p</b>
              </div>
              {/* Cart */}
              <div className="mr-10 space-x-4">
                <img
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
      </div>
    </div>
  );
}

export default Home