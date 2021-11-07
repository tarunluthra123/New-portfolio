import React from "react";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header className="flex w-full justify-between px-5 md:px-10 lg:px-16 py-5 h-16 item-center font-bold text-purple-700 dark:text-purple-300 transition-all duration-100">
      {/* Logo */}
      <span className="cursor-pointer">Tarun</span>

      {/* Navs */}
      <ul className="flex justify-between w-52  md:w-1/4">
        <li className="cursor-pointer hover:text-purple-400 ">Projects</li>
        <li className="cursor-pointer hover:text-purple-400">Blogs</li>
        <li className="cursor-pointer hover:text-purple-400">Contact</li>
      </ul>

      {/* Light/Dark Mode toggle */}
      <ToggleButton />
    </header>
  );
};

export default Header;
