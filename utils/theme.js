const TOKEN = "dark-theme-toggle";

export function setTheme(theme = "light") {
  localStorage.setItem(TOKEN, theme);
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

export function getTheme() {
  const theme = localStorage.getItem(TOKEN);
  return theme || "light";
}

export function toggleTheme() {
  const theme = localStorage.getItem(TOKEN) || "light";
  const newTheme = theme == "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
}
