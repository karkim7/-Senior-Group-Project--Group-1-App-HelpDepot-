import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function ForumPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/forums/')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Forum Discussions
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={`By: ${post.author}`} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" href="/create-post">
        Create New Post
      </Button>
    </Box>
  );
}

export default ForumPage;
