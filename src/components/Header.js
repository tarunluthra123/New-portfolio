import React from "react";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header
      className="w-full
      px-5 md:px-10 lg:px-16 py-5 h-16
       text-primaryColor dark:text-blue-100
      transition-all duration-100"
    >
      {/* Light/Dark Mode toggle */}
      <ToggleButton />
    </header>
  );
};

export default Header;
