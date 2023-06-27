import { Link } from 'react-router-dom';
import { search } from '../features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const cart=useSelector(state=>state.cart.cart)
  const dispatch=useDispatch()
  return (
    <nav className=" mx-auto flex flex-wrap flex-col md:flex-row items-center py-10">
      {/* Name */}
      <Link
        to="/"
        className="flex title-font items-center text-gray-900 mb-4 md:mb-0 no-underline text-black font-bold"
      >
        GROCERIES
      </Link>
      {/* Search */}
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center h-[40px] border-gray-900">
        <input
          onKeyUp={(e) => dispatch(search(e.target.value))}
          className="outline-0"
          placeholder="Search"
          type="text"
        />
      </div>

      {/* Icons */}
      <ul className="flex items-center justify-center space-x-10 list-none">
        {/* Favourite */}
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
        {/* Profile */}
        <li className="relative">
          <img
            className="w-[51px] h-[51px]"
            src="/src/assets/Avatar.png"
            alt=""
          />
        </li>
        {/* Cart */}
        <li className="relative">
          <Link to="/cart">
            <img
              className="w-[51px] h-[43px]"
              src="/src/assets/cart.png"
              alt=""
            />
            <span className="absolute right-[-15px] top-[-30px] h-[24px] w-[24px] bg-red-400 rounded-[100%] text-sm flex justify-center items-center">
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar