import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../APIs/productApi";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addCoffee } from "../features/cartSlice";
import Loader from "../components/Loader";



const Home = () => {
  const [category, setCategory] = useState("all")
  const searchString = useSelector(state => state.search.searchText)
  const { data, isError, isFetching, isLoading } = useGetProductsQuery({
    category
  });
  const dispatch= useDispatch()
  useEffect(() => {
    const coffee = data?.find((item) => item.name === "Coffee");
    dispatch(addCoffee(coffee))
  },[data, isLoading, isFetching, isError])
  
  
  const activeClass =
    "rounded-11xl bg-limegreen-200 shadow-[5px_5px_20px_rgba(181,_181,_181,_0.2)] box-border w-[100px] md:w-[188px] h-[30px] md:h-[59px] border-[1px] border-solid border-silver-100 flex justify-center items-center cursor-pointer md:text-5xl m-3 text-white";
  const inActiveClass="rounded-11xl bg-white shadow-[5px_5px_20px_rgba(181,_181,_181,_0.2)] box-border w-[100px] md:w-[188px] h-[30px] md:h-[59px] border-[1px] border-solid border-silver-100 flex justify-center items-center cursor-pointer md:text-5xl m-3 hover:bg-slate-50 hover:shadow-md"
  let AllData = null;
  if (isLoading || isFetching) {
    AllData = (
      <>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  } else if (isError) {
    AllData=<p>Something Went Wrong !!</p>
  } else if (!data.length) {AllData=<p>Data not found</p>} else if (data && !isLoading && !isError) {
    AllData = (
      <>
        {data?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
       
      </>
    );
  }
  // See more functionality for description 
  return (
    <div className="space-y-8 mx-10 my-10">
      {/* Filter */}
      <div className="flex md:flex-row flex-wrap justify-center md:justify-start items-center">
        {/* All Items */}
        <button
          onClick={() => setCategory("all")}
          className={`${category === "all" ? activeClass : inActiveClass}`}
        >
          All items
        </button>
        {/* Drinks */}
        <button
          onClick={() => setCategory("drinks")}
          className={`${
            category === "drinks" ? activeClass : inActiveClass
          }`}
        >
          Drinks
        </button>
        {/* Fruits */}
        <button
          onClick={() => setCategory("fruit")}
          className={`${
            category === "fruit" ? activeClass : inActiveClass
          }`}
        >
          Fruits
        </button>
        {/* Bakery */}
        <button
          onClick={() => setCategory("bakery")}
          className={`${category === "bakery" ? activeClass : inActiveClass}`}
        >
          Bakery
        </button>
      </div>
      <h1 className="t text-darkslategray text-[32px] ">Trending Items</h1>
      {/* Product Card */}
      <div className="py-5 grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5">
        {AllData}
      </div>
    </div>
  );
}

export default Home