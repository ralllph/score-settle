import { createContext, useState } from "react";

const themeContextObject = createContext()

const ThemeContext  = (props)=>{
//state managing theme
const [theme, setTheme] = useState("light")


//toggle theme function
const toggleTheme = ()=>{
    setTheme(
        (prevTheme)=>  prevTheme === "light" ? "dark" : "light"
     )
}
return(
    <themeContextObject.Provider value={{theme,toggleTheme}}>
        {props.children}
    </themeContextObject.Provider>
)
}

export {ThemeContext, themeContextObject}