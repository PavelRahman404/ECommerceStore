import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkmode,setDarkMode]=useState(false);
  const paletteType = darkmode ? 'dark': 'light';
  const theme= createTheme({
    palette:{
      mode: paletteType,
      background:{
        default: paletteType ==='light' ? '#eaeaea': '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkmode)
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline/>
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Outlet />
      </Container>
     

    </ThemeProvider>
  )
}

export default App
