import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

function EventCard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event details from Django API
    fetch('http://127.0.0.1:8000/api/events/')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EventCard;
