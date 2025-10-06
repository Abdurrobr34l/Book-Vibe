import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Listed Books", path: "/listed-books" },
    { id: 3, name: "Pages to Read", path: "/pages-to-read" },
  ];

  // Tailwind classes for active and normal links
  const activeClass = "text-[#23BE0A] border-1 border-[#23BE0A] bg-transparent";
  const normalClass = "text-[#131313] hover:text-[#23BE0A]";

  return (
    <header className="navbar py-5 px-0">
      <div className="flex flex-1 flex-row-reverse items-center justify-between lg:flex-1">
        {/* Dropdown Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn-ghost pr-5 lg:hidden">
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-5 gap-3 bg-white rounded-box z-1 mt-5 w-52"
          >
            {navigationData.map((route) => (
              <li key={route.id}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}

            <li className="lg:hidden">
              <a className="btn bg-[#23BE0A] shadow-none border-none">
                Sign In
              </a>
            </li>
            <li className="lg:hidden">
              <a className="btn bg-[#59C6D2] shadow-none border-none">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to={"/"} className="btn-ghost text-[28px] font-bold">
          Book Vibe
        </Link>
      </div>

      {/* Nav Menu */}
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5">
          {navigationData.map((route) => (
            <li key={route.id}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Buttons */}
      <div className="navbar-end gap-5 hidden lg:flex lg:flex-1">
        <a className="btn bg-[#23BE0A] shadow-none border-none">Sign In</a>
        <a className="btn bg-[#59C6D2] shadow-none border-none">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
