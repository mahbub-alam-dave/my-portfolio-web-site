import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext()

const ContextProvider = ({children}) => {

    const [mode, setMode] = useState(localStorage.getItem("theme") === "dark")

    useEffect(() => {
        if(mode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [mode])

    const value ={
        mode, setMode
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ContextProvider;