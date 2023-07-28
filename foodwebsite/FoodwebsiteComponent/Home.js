import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2020/07/healthy-restaurants-nyc-divya.jpg?fit=728%2C524" alt="Delicious Food" style={{ width: '70%', borderRadius: 8 }} />
      </Box>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Food Paradise
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Indulge in the finest and most delicious food from around the world.
      </Typography>

      {/* Featured Content */}
      <Box sx={{ marginTop: 4 }}>
        <Paper elevation={2} sx={{ padding: 2 }}>
          <Typography variant="h4" sx={{textAlign:'center'}} gutterBottom>
            Featured Dishes
          </Typography>
          {/* Place your featured dishes content here */}
        </Paper>
      </Box>

      {/* Call-to-Action */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Button component={Link} to="/contact" variant="contained" color="primary">
         orderNow
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
