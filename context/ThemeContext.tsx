import React, { createContext, useContext, useState } from "react";
import ThemeProps from "./lib/theme";

const defaultTheme: ThemeProps = {
    primary: "slate",
    darkMode: false,
}

const ThemeContext = createContext<{
    theme: ThemeProps;
    toggleDarkMode: () => void
}>({
    theme: defaultTheme,
    toggleDarkMode: () => { }
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState<ThemeProps>(defaultTheme);

    const toggleDarkMode = () => {
        setTheme((prev) => ({
            ...prev,
            darkMode: !prev.darkMode
        }));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )

}

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeContext debe usarse dentro de un ThemeProvider");
    }

    return context;
}