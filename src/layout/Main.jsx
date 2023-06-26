import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="px-10">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main