import React, { useState } from "react";
import { DARK_THEME, getTheme, toggleTheme } from "utils/theme";

const ToggleButton = () => {
  const [checked, setChecked] = useState(getTheme() === DARK_THEME);

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="toggle-button"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle-button"
            className="sr-only"
            onChange={(e) => {
              toggleTheme();
              setChecked((prev) => !prev);
            }}
            checked={checked}
          />
          <div className="block bg-gray-600 md:w-14 w-10 h-6 md:h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 md:h-6 md:w-6 rounded-full transition"></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
