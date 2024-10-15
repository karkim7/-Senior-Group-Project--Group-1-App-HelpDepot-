import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Fetch businesses from Django API
    fetch('http://127.0.0.1:8000/api/businesses/')
      .then((response) => response.json())
      .then((data) => setBusinesses(data))
      .catch((error) => console.error('Error fetching businesses:', error));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Business Directory
      </Typography>
      <List>
        {businesses.map((business) => (
          <ListItem key={business.id}>
            <ListItemText
              primary={business.name}
              secondary={business.description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BusinessList;
