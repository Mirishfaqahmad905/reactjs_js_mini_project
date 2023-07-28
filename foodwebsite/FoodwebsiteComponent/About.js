import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';
const About = () => {
  return (
 <>
  <div className='box-card-mu'>
     

 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://t3.ftcdn.net/jpg/06/11/54/96/360_F_611549681_y7C8iO7jNbZERBYeiULaeh1KyLBzpiRs.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/id/1133734645/photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-in-national.jpg?s=612x612&w=0&k=20&c=E_sp7mf_P6Vg3-X_IxRmypDFuMa-0VNJdjVsGWYzMVo="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://t4.ftcdn.net/jpg/05/81/17/89/360_F_581178980_9VHzfOrhErrG2gVlpqfvAMU8FDjIH0og.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </div>
     <div className='devider'>
     <Box sx={{ padding: 2 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Our Food Website
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are passionate about bringing you the most delicious and mouthwatering dishes from around the world.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Featured Dishes
        </Typography>

        <div className='box-card-mu'>
          {/* Existing Card components with images and descriptions */}
        </div>

        {/* Call-to-Action Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Button size="large"  variant="contained" color="primary" href="/contact">
             OrderNow
          </Button>
        </Box>

        {/* Testimonials Section */}
        <Typography variant="h4" gutterBottom mt={5}>
          Customer Testimonials
        </Typography>
        <Divider />
        <div className="testimonial-slider">
          {/* Implement a testimonial carousel/slider here */}
        </div>

        {/* Special Offers Section */}
        <Typography variant="h4" gutterBottom mt={5}>
          Special Offers
        </Typography>
        <Divider />
        <div className="special-offers">
          {/* Display ongoing special offers or promotions here */}
        </div>

        {/* Chef's Specials Section */}
        <Typography variant="h4" gutterBottom mt={5}>
          Chef's Specials
        </Typography>
        <Divider />
        <div className="chef-specials">
          {/* Display chef's specials with images and descriptions here */}
        </div>

        {/* Social Media Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          {/* Add social media icons and links here */}
        </Box>
      </Box>
     </div>
 </>
  )
}

export default About;