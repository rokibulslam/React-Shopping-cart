import smallLove from '../assets/small-love.png'

const Loader = () => {
  return (
    <div className="w-[400px] h-[300px] md:w-[518px] md:h-[327px] text-darkslategray shadow-[5px_5px_20px_rgba(133,_133,_133,_0.2)] rounded-11xl grid grid-cols-2 items-center justify-center animate-pulse">
      {/* Image Div */}
      <div>
        <svg
          className="w-[200px] h-[200px] text-gray-200 dark:text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      {/* Content */}
      <div className="h-full">
        {/* header */}
        <h3 className="font-bold text-xl my-5 md:my-10"></h3>
        {/* paragraph */}
        <p className="text-base mb-20"></p>
        {/* Quantity */}
        <div className="w-[98px] h-6 text-sm text-white mb-8">
          <div className="rounded-3xs bg-coral-100 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-50 flex justify-center items-center gap-x-[3px] text-[14px]">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* cart */}
        <div className="flex">
          {/* Price */}
          <div className="flex-1">
            <b className="text-xl"></b>
          </div>
          {/* Cart */}
          <div className="mr-10 space-x-4">
            <img className="w-[28] h-[26] cursor-pointer" src="" alt="" />
            {/* Favourite */}
            <img
              className="w-[28] h-[26] cursor-pointer"
              src={smallLove}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader