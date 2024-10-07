import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function BusinessDirectoryPage() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/businesses/')
      .then((response) => response.json())
      .then((data) => setBusinesses(data));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Business Directory
      </Typography>
      <List>
        {businesses.map((business) => (
          <ListItem key={business.id}>
            <ListItemText primary={business.name} secondary={business.description} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" href="/add-business">
        Add Your Business
      </Button>
    </Box>
  );
}

export default BusinessDirectoryPage;
