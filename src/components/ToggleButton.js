import React from "react";
import { toggleTheme } from "../../utils/theme";

const ToggleButton = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex items-center justify-center">
      <label for="toggle-button" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle-button"
            className="sr-only"
            onClick={(e) => {
              setChecked(e.target.checked);
              toggleTheme();
            }}
          />
          <div className="block bg-gray-600 md:w-14 w-10 h-6 md:h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 md:h-6 md:w-6 rounded-full transition"></div>
        </div>
        <div className="hidden md:block  ml-3 text-gray-700 font-medium">
          Toggle Me!
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
