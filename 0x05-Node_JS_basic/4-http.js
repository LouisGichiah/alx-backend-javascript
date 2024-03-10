const http = require('http');

// Create the HTTP server
const app = http.createServer((request, response) => {
  // Set the status code to 200 (OK)
  response.statusCode = 200;
  
  // Set the content type to plain text
  response.setHeader('Content-Type', 'text/plain');

  // Send the response body
  response.end('Hello Holberton School!\n');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
