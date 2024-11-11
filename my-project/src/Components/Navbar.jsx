import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex justify-between items-center p-4 ">
      <div className="text-blue-600 text-2xl font-bold">Healix</div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-blue-600 relative z-40 focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Slide-in menu for mobile */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-20 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <ul className="flex flex-col items-start p-6 gap-4">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              to="/"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              to="/symptom-check"
              onClick={toggleMenu}
            >
              Symptom Checker
            </NavLink>
          </li>

          {/* Login button inside the mobile menu */}
          <button className="relative mt-4 inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 w-full">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 w-full text-center">
              Login
            </span>
          </button>
        </ul>
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex gap-4 md:gap-7 items-center">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            to="/symptom-check"
          >
            Symptom Checker
          </NavLink>
        </li>
      </ul>

      {/* Login button - visible in desktop view */}
      <button className="hidden md:inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Login
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
