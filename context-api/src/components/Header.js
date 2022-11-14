import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import React from 'react'

export default function Header() {
    const theme = useContext(ThemeContext);
    
    const themeStyle = {
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: "10px",
        textAlign: "center"
    };

  return (
    <div>
      <h1 style={themeStyle}>Context API Theme</h1>
    </div>
  )
}
