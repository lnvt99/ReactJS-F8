import { useState, createContext } from "react";
import Content from "./Content";

export const ThemeContext = createContext()
/*
1. Create context
2. Provider
3. Consumer
*/
function UseContext() {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark'? 'light':'dark');
    }

    return (
        <ThemeContext.Provider value = {theme}>
        <div style={{ padding: 20 }}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content/>
        </div>
        </ThemeContext.Provider>
    )
}

export default UseContext;