const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve images from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Home route
app.get('/', (req, res) => {
  res.send('Hello, this is your image server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
