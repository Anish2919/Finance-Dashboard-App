// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline } from "@mui/material";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []); 
   return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <h1>hi</h1>
    </ThemeProvider>
  )
}

export default App
