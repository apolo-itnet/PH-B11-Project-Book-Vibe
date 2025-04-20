import React from "react";
import { Link } from "react-router";

const Navbar = () => {

  const links = <>
        
        <div className="flex gap-2 text-base font-semibold">
          <Link><li className="m-2 btn bg-white border-none shadow-md">Home</li></Link>
          <Link to='/listedBooks'> <li className="m-2 btn bg-white border-none shadow-md">Listed Books</li> </Link>
          <Link to='/pagesToRead'> <li className="m-2 btn bg-white border-none shadow-md">Pages to Read</li> </Link>
        </div>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <div className="border">
              {links}
             </div>
            </ul>
          </div>
          <a className="btn bg-white border-none text-xl font-bold shadow-none">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn rounded-md px-6 py-5 bg-green-600 text-white border-none shadow-none">Sign in</a>
          <a className="btn rounded-md px-6 py-5 bg-cyan-600 text-white border-none shadow-none">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
