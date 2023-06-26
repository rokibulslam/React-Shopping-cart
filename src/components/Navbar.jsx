import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" mx-auto flex flex-wrap flex-col md:flex-row items-center py-10">
      {/* Name */}
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        GROCERIES
      </a>
      {/* Search */}
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center h-[40px] border-gray-900">
        <input className="outline-0" placeholder="Search" type="text" />
      </div>

      {/* Icons */}
      <ul className="flex items-center justify-center space-x-10 list-none">
        <li className="relative">
          <img
            className="w-[51px] h-[43px]"
            src="/src/assets/Icon.png"
            alt=""
          />
          <span className="absolute right-[-15px] top-[-30px] h-[24px] w-[24px] bg-red-400 rounded-[100%] text-sm flex justify-center items-center">
            8
          </span>
        </li>
        <li className="relative">
          <img
            className="w-[51px] h-[51px]"
            src="/src/assets/Avatar.png"
            alt=""
          />
        </li>
        <li className="relative">
          <img
            className="w-[51px] h-[43px]"
            src="/src/assets/cart.png"
            alt=""
          />
          <span className="absolute right-[-15px] top-[-30px] h-[24px] w-[24px] bg-red-400 rounded-[100%] text-sm flex justify-center items-center">
            8
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar