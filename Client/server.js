const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || 'http://your-api-url';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/*', (req, res) => {
  // Proxy API requests to the API_URL
  res.redirect(`${API_URL}${req.path}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});