import { createContext } from "react";
export const themes = {
  light: {
    color: '#000000',
    background: '#fff',
  },
  dark: {
    color: '#ffffff',
    background: '#000',
  },
};
export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});