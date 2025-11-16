import { useContext } from "react";
import React from "react";
import { Theme, LOCAL_STORAGE_THEME_KEY,ThemeContext,type ThemeType } from "./ThemeContext";

interface useThemeResult {
    toggleTheme: () => void;
    theme: ThemeType;
}
export const useTheme = (): useThemeResult => {
    const {theme, setTheme} = React.useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = ( theme === Theme.PINK ? Theme.BLUE : Theme.PINK);
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

    }
    return {theme, toggleTheme}
}