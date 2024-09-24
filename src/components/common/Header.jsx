import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png"

const Header = () => {
  return (
    <nav className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
      <Link
        to={"/"}
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="logo text-2xl font-semibold whitespace-nowrap dark:text-white">
          Dashboard
        </span>
      </Link>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span className="sr-only"> user</span>
          <img className="w-8 h-8 rounded-full" src={avatar} alt="user photo" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
