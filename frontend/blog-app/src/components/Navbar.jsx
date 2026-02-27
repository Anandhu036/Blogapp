import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Link to={"/"}> <Button sx={{color:"white"}} color="inherit">Home</Button> </Link>
          {!token && <Link to={"/login"}> <Button sx={{color:"white"}} color="inherit">Login</Button> </Link>}
          {token && <Link to={"/add"}> <Button sx={{color:"white"}} color="inherit">Add</Button></Link>}
           {token && <Button sx={{color:"white"}} color="inherit" onClick={handleLogout}>Logout</Button> } 
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar