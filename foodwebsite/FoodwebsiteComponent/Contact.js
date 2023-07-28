import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, TextField, Button } from '@mui/material';

const MyForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [foodPrice, setFoodPrice] = useState('');

  const handleSubmit = () => {
    // Process the form data, e.g., send it to a server or store it in state
    console.log({
      name,
      location,
      foodPreference,
      phoneNumber,
      foodPrice,
    });
    // You can reset the form fields after submission if needed
    setName('');
    setLocation('');
    setFoodPreference('');
    setPhoneNumber('');
    setFoodPrice('');
  };

  return (
    <form>
      <List>
        <ListItem>
          <ListItemText primary="Name" />
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Location" />
          <TextField
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Food Preference" />
          <TextField
            variant="outlined"
            value={foodPreference}
            onChange={(e) => setFoodPreference(e.target.value)}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Phone Number" />
          <TextField
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Food Price" />
          <TextField
            variant="outlined"
            value={foodPrice}
            onChange={(e) => setFoodPrice(e.target.value)}
          />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
