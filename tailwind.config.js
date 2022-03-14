const colors = {
  "blue-300": "#93c5fd",
  "blue-700": "#1d4ed8",
  "blue-500": "#3b82f6",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: colors["blue-700"],
        primaryDarkColor: colors["blue-300"],
        hoverColor: colors["blue-500"],
        secondaryColor: colors["blue-500"],
        secondaryDarkColor: colors["blue-500"],
      },
      spacing: {
        "85vh": "85vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
