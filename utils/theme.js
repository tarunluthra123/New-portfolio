const TOKEN = "dJwtzfsKxi";
export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

export function setTheme(theme = "light") {
  localStorage.setItem(TOKEN, theme);
  document.documentElement.classList.remove(LIGHT_THEME, DARK_THEME);
  document.documentElement.classList.add(theme);
}

export function getTheme() {
  // Default theme - Light
  const theme = localStorage.getItem(TOKEN);
  return theme || LIGHT_THEME;
}

export function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  setTheme(newTheme);
  return newTheme;
}
