'use client';
import { useStore } from '@/shared/store/stores';

const Navbar = () => {
  const { isAuth, setIsAuth } = useStore(state => state.auth);

  return (
    <nav className="w-full sticky top-0 z-10 border bg-white">
      {/* Logo Section */}
      <div className="w-[92%] m-auto flex items-center justify-between my-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">HOME</span>
        </div>
        {/* Buttons Section */}
        {/* text-white bg-blue-500 */}
        <div className="flex items-center space-x-2">
          <button className="px-4 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
            onClick={()=>setIsAuth(true)}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar