// Create web server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage')
});

// Get a comment
app.get('/comments', (req, res) => {
  res.send('GET request to the homepage')
});

// Update a comment
app.put('/comments', (req, res) => {
  res.send('PUT request to the homepage')
});

// Delete a comment
app.delete('/comments', (req, res) => {
  res.send('DELETE request to the homepage')
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});