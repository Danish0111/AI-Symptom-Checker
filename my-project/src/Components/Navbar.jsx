import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center p-4">
      <div className="logo text-blue-600 text-2xl font-bold">Healix</div>
      <ul className="flex gap-4 md:gap-7 mt-2 md:mt-0">
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
      <button className="relative mt-2 md:mt-0 inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Login
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
