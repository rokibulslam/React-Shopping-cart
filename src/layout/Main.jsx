import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="px-5 md:px-20">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main