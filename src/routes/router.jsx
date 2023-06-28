import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Search from "../pages/Search";
import Notefound from "../components/Notefound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  {
    path: "*",
    element:<Notefound />
  },
]);

export default router;
