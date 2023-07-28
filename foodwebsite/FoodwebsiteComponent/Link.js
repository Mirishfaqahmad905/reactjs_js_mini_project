import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  '../Style/Style.css';
import { Link, Link as RouterLink } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { fontGrid } from '@mui/material/styles/cssUtils';
import Paper from '@mui/material/Paper';
const MyComponent = () => {
  return (
    <>
<Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <RestaurantIcon/>
          </Typography>

          <ul className='ul_list'>
        <li>
     <Link to={'/'}>Home</Link>
        </li>
         <li>
         <Link to={'/about'}>about</Link>
            </li>
            <li>
         <Link to={'/contact'}>contact</Link>
            </li>
      </ul>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        
        },
      }}
    >
 
    </Box>
   

    </>
  );
}

export default MyComponent;
