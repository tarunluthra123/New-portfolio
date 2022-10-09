export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

export function setTheme(theme = "light") {
  document.documentElement.classList.remove(LIGHT_THEME, DARK_THEME);
  document.documentElement.classList.add(theme);
}

export function getTheme() {
  if (typeof document === 'undefined') {
    return LIGHT_THEME;
  }
  // Default theme - Light
  const currentTheme = document?.documentElement.classList[0];
  return currentTheme || LIGHT_THEME;
}

export function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  setTheme(newTheme);
  return newTheme;
}
