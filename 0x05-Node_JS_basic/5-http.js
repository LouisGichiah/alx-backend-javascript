const http = require('http');
const fs = require('fs');

// Function to read the database file asynchronously
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      resolve(data);
    });
  });
}

// Create the HTTP server
const app = http.createServer(async (request, response) => {
  // Set the status code to 200 (OK)
  response.statusCode = 200;

  // Set the content type to plain text
  response.setHeader('Content-Type', 'text/plain');

  // Determine the URL path
  const url = request.url;

  if (url === '/') {
    // Display "Hello Holberton School!" for the root path
    response.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // Read the database file
    try {
      const data = await readDatabase('database.csv');

      // Split the data into rows
      const rows = data.trim().split('\n');

      // Initialize an object to store counts for each field
      const counts = {};

      // Loop through each row
      for (const row of rows) {
        // Split the row into fields
        const fields = row.split(',');

        // Skip empty lines
        if (fields.length === 0 || fields[0] === '') {
          continue;
        }

        // Increment the count for each field
        for (let i = 0; i < fields.length; i++) {
          const field = fields[i].trim();
          if (!counts[field]) {
            counts[field] = [];
          }
          counts[field].push(fields[0]);
        }
      }

      // Log the number of students in each field
      for (const field in counts) {
        const numStudents = counts[field].length;
        const studentList = counts[field].join(', ');
        response.write(`Number of students in ${field}: ${numStudents}. List: ${studentList}\n`);
      }

      // Log the total number of students
      const totalStudents = rows.length - 1; // Exclude header row
      response.end(`Number of students: ${totalStudents}`);
    } catch (error) {
      // Handle error if database file is not available
      response.end(error.message);
    }
  } else {
    // Display "404 Not Found" for unknown paths
    response.statusCode = 404;
    response.end('404 Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
