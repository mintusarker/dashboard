import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar relative lg:px-10 md:px-6 mx-auto bg-gradient-to-t to-gray-600 from-blue-900 text-white justify-between lg:hidden md:hidden">
        <div className="navbar-start">
          <div className="dropdown">
          <label
          htmlFor="my-drawer-2"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
           
          </div>
          <p className="font-semibold text-xl">DashBoard</p>
        </div>
        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base capitalize items-center"></ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
