import { Link } from 'react-router-dom';
import { search } from '../features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import searchPic from '../assets/search.png'
import iconPic from "../assets/Icon.png";
import avator from "../assets/Avatar.png";
import cartPic from "../assets/cart.png";
const Navbar = () => {
  const cart = useSelector(state => state.cart.cart)
  const searchText = useSelector((state) => state.search.searchText);
  console.log(searchText)
  const dispatch=useDispatch()
  return (
    <nav className=" mx-auto flex flex-col md:flex-row items-center py-10 justify-center">
      {/* Name */}
      <Link
        to="/"
        className="flex  items-center mb-4 md:mb-0 no-underline text-5xl text-darkslategray"
      >
        <h1>GROCERIES</h1>
      </Link>
      {/* Search */}
      <div className="flex items-center text-base justify-between h-[60px] border-gray-900 lg:w-4/6 rounded-2xl shadow-[5px_5px_20px_rgba(133,_133,_133,_0.2)]  mx-10">
        <input
          required
          onKeyUp={(e) => dispatch(search(e.target.value))}
          className="h-full w-4/6   border-0 outline-0 ms-5 text-5xl font-light"
          placeholder="Search"
          type="text"
        />

        <Link to="/search">
          <img
            className="w-[20px] mr-3 cursor-pointer p-3 rounded-full hover:bg-slate-100 hover:shadow-lg"
            src={searchPic}
            alt=""
          />
        </Link>
      </div>

      {/* Icons */}
      <ul className="flex items-center justify-center space-x-10 list-none mt-[50px] md:mt-0">
        {/* Favourite */}
        <li className="relative">
          <img
            className="w-[25px] h-[25px] md:w-[51px] md:h-[43px]"
            src={iconPic}
            alt=""
          />
          <span className="absolute right-[-15px] top-[-15px] md:top-[-30px] w-[12px] h-[12px] md:h-[24px] md:w-[24px] bg-red-400 rounded-[100%] md:text-sm text-[10px] flex justify-center items-center text-white">
            0
          </span>
        </li>
        {/* Profile */}
        <li className="relative">
          <img
            className="w-[25px] h-[25px] md:w-[51px] md:h-[43px]"
            src={avator}
            alt=""
          />
        </li>
        {/* Cart */}
        <li className="relative">
          <Link to="/cart">
            <img
              className="w-[25px] h-[25px] md:w-[51px] md:h-[43px] text-dodgerblue"
              src={cartPic}
              alt=""
            />
            <span className="absolute right-[-15px] top-[-15px] md:top-[-30px] w-[12px] h-[12px] md:h-[24px] md:w-[24px] bg-dodgerblue rounded-[100%] md:text-sm text-[10px] flex justify-center items-center text-white">
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar