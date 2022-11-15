import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import React from 'react'

export default function Header() {
    const theme = useContext(ThemeContext);
    
    

  return (
    <div>
      <button style={{background: theme.background, color: theme.foreground}}>Change Theme</button>
    </div>
  )
}
