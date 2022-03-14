import React from "react";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header
      className="flex w-full justify-between
      px-5 md:px-10 lg:px-16 py-5 h-16 item-center font-bold
       text-primaryColor dark:text-primaryDarkColor
      transition-all duration-100"
    >
      {/* Logo */}
      <span className="cursor-pointer">Tarun</span>

      {/* Navs */}
      <ul className="flex justify-between w-52  md:w-1/4">
        <li className="cursor-pointer hover:text-hoverColor">Projects</li>
        <li className="cursor-pointer hover:text-hoverColor">
          <a
            href="https://blog.tarunluthra.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li className="cursor-pointer hover:text-secondaryColor">Contact</li>
      </ul>

      {/* Light/Dark Mode toggle */}
      <ToggleButton />
    </header>
  );
};

export default Header;
