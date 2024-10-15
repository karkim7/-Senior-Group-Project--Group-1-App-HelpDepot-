import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch forum posts from Django API
    fetch('http://127.0.0.1:8000/api/forums/')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Forum Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={`By: ${post.author}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PostList;
