import React from 'react'

const ThemeContext = React.createContext()

const THEME_MODE = { light: "light", dark: "dark" };

function ThemeProvider(props) {
    const [theme, setTheme] = React.useState(THEME_MODE.light)
    const value = [theme, setTheme]

    React.useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme])

    return <ThemeContext.Provider value={ value } { ...props } />
}

function useTheme() {
    const theme = React.useContext(ThemeContext);
    return theme;
}

export { ThemeProvider, useTheme, THEME_MODE };