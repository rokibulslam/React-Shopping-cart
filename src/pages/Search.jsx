import React from 'react'
import { useSelector } from 'react-redux'
import {  useProductListQuery } from '../APIs/productApi';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const Search = () => {
  const searchString = useSelector(state => state.search.searchText)
  const { data, isError, isFetching, isLoading } = useProductListQuery();
  // Search Functionalities
  let filteredData = data;
  if (searchString) {
    filteredData = filteredData.filter((item) => {
      const itemName = item.name.toLowerCase();
      const itemPrice = item.price.toLowerCase();
      const itemDescription = item.description.toLowerCase();
      const searchInput = searchString.toLowerCase();
      return (
        itemName.includes(searchInput) ||
        itemPrice.includes(searchInput) ||
        itemDescription.includes(searchInput)
      );
    });
  }

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
  } else if (!filteredData.length) {AllData=<p>Data not found</p>} else if (data && !isLoading && !isError) {
    AllData = (
      <>
        {filteredData?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </>
    );
  }
  return (
    <div className="space-y-8 mx-10 my-10">
      <h1 className="t text-darkslategray text-[32px] ">Search Data</h1>
      {/* Product Card */}
      <div className="py-5 grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5">
        {AllData}
      </div>
    </div>
  )
}

export default Search