import { ThemeContext, type ThemeType, LOCAL_STORAGE_THEME_KEY, Theme } from "@/shared/config"
import { useEffect, useState } from "react"


interface ThemeProviderProps {
    children: React.ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || Theme.PINK
export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    useEffect(() => {
        document.body.className = `${theme}`
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}