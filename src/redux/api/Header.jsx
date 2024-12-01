import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      <header className="bg-white shadow-md sticky top-0 z-50 h-16 flex items-center px-4">
        <button
          onClick={openSidebar}
          className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <IoMenu className="h-6 w-6" />
        </button>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '300px' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1"></div>

          <div className="p-4 border-t border-gray-700 flex justify-end">
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed top-0 left-[300px] right-0 bottom-0 bg-transparent z-40"
        ></div>
      )}
    </div>
  );
};

export default Header;

