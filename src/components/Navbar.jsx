import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        GROCERIES
      </a>
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center h-[40px] border-1 border-gray-900">
        <input className="o outline-0" placeholder="Search" type="text" />
      </div>
      <ul className="flex items-center justify-center space-x-10">
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
            className="w-[51px] h-[43px]"
            src="/src/assets/Avatar.png"
            alt=""
          />
          <span className="absolute right-[-15px] top-[-30px] h-[24px] w-[24px] bg-red-400 rounded-[100%] text-sm flex justify-center items-center">
            8
          </span>
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