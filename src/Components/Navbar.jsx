import React from "react";
import { Link } from "react-router-dom";
import Sidebarbtn from "./Sidebarbtn";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-neutral-100 p-4 flex md:justify-around justify-between px-12 md:px-0 fixed z-40 items-center w-full shadow-md">
        <button className="font-bold md:text-3xl text-xl font-serif text-teal-900">
          <Link to="/">KEV COLLEGE</Link>
        </button>

        {/* <Sidebarbtn /> */}
        
        <div className="hidden md:block text-sm">
          <a href="#" className="mr-6">
            Home
          </a>
          <a href="" className="mr-6">
            About
          </a>
          <a href="" className="">
            Admissions
          </a>
        </div>
        <div className="flex items-center">
          <p className="hidden md:block text-sm">Need help? Call:</p>
          <a href="" className="text-blue-700 text-sm">
            +2348091084333
          </a>
        </div>

        {/* <div className="border flex gap-4">
          <button className="border border-slate-400 hover:bg-slate-500 hover:text-white px-4 py-2 items-center rounded-lg cursor-pointer text-sm">
            <Link to="/signin">Sign In</Link>
          </button>
          <button className="border border-slate-400  hover:bg-slate-700 bg-slate-600 text-white hover:text-white px-6 py-2 items-center rounded-lg cursor-pointer text-sm">
            <Link to="/signup"> Sign Up</Link>
          </button>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
