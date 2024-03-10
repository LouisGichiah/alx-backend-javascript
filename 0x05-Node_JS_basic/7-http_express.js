const express = require('express');
const fs = require('fs').promises;

// Create the Express application
const app = express();

// Define a route for the endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the endpoint /students
app.get('/students', async (req, res) => {
  try {
    // Read the database file asynchronously
    const data = await fs.readFile('database.csv', 'utf8');
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
      console.log(`Number of students in ${field}: ${numStudents}. List: ${studentList}`);
    }

    // Log the total number of students
    const totalStudents = rows.length - 1; // Exclude header row
    console.log(`Number of students: ${totalStudents}`);

    // Send the response with the counts
    res.send(`Number of students: ${totalStudents}\n${Object.entries(counts).map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`).join('\n')}`);
  } catch (error) {
    // Handle error if database file is not available
    res.status(500).send('Cannot load the database');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
