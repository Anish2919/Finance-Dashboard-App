import FlexBetween from "@/components/FlexBetween"
import { Box, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import PixIcon from '@mui/icons-material/Pix';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const {palette} = useTheme();
  const [selected, setSelected] = useState('dashboard'); 

  // activating the navitem according the url 
  const location = useLocation(); 
  if(location.pathname.startsWith('/dashboard') || location.pathname.endsWith('/')) {
    selected !== 'dashboard' && setSelected('dashboard');  
  } else { 
    selected !== 'predictions' && setSelected('predictions'); 
  }

  return (
    <>
      <FlexBetween 
        mb="0.2rem" 
        p="0.5rem 0rem"
        color={palette.grey[300]} 
        borderBottom="1px solid white"
      >
        {/* LEFT SIDE */}
        <FlexBetween gap="0.75rem">
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
            <PixIcon fontSize="medium" sx={{ fontSize: "26px" }}/>
          </Link>
          <Typography variant="h4">
            <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>Finanseer</Link>
          </Typography>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem" fontSize="1rem">
          <Box sx={{ "&:hover": {color: palette.grey[100]} }} >
            <Link  
              to="/dashboard"
              onClick={() => setSelected("dashboard")}
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700], 
                textDecoration: "inherit",
              }} >dashboard</Link>
          </Box>
          <Box sx={{ "&:hover": {color: palette.grey[100]} }}>
            <Link  
              to="/predictions"
              onClick={() => setSelected("predictions")}
              style={{
                color: selected === "predictions" ? "inherit" : palette.grey[700], 
                textDecoration: "inherit"
              }} >predictions</Link>
          </Box>
        </FlexBetween>

      </FlexBetween>
    </>
  )
}
export default Navbar
