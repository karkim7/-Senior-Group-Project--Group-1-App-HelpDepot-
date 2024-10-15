import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function EventCalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Event Calendar
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
                <Button variant="outlined" href={`/events/${event.id}`} sx={{ mt: 2 }}>
                  View Event Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EventCalendarPage;
