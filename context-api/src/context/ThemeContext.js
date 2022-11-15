import {createContext} from "react"

const ThemeContext = createContext(
    {
        background: "",
        foreground: ""
    }  
);

export const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value={{background: "orange", foreground: "blue"}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext