const express = require('express');

// Create the Express application
const app = express();

// Define a route for the endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
