// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import {  useMemo } from "react"
import { themeSettings } from "./theme"
import { Box, CssBaseline} from "@mui/material";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"; 
import Layout from "./components/common/Layout";
import PageNotFound from "./scenes/errors/PageNotFound";
import Predictions from "./scenes/predictions";
import Dashboard from "./scenes/dashboard";
import { useGetPokemonByNameQuery } from "./state/api";


const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<><Layout /></>}>
      <Route index element={<Dashboard />} /> 
      <Route path="dashboard" element={<Dashboard />} /> 
      <Route path="predictions" element={<Predictions />} /> 
      <Route path="*" element={<PageNotFound />} /> 
    </Route>
  </>
)

const router = createBrowserRouter(routes); 


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []); 

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur'); 

  data ? console.log('data: ', data.abilities) : console.log('no data: '); 

   return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem"> 
          <RouterProvider router={router} /> 
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
 