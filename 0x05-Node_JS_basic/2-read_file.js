const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

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
      console.log(`Number of students in ${field}: ${numStudents}. List: ${studentList}`);
    }

    // Log the total number of students
    const totalStudents = rows.length - 1; // Exclude header row
    console.log(`Number of students: ${totalStudents}`);
  } catch (error) {
    // Handle error if database file is not available
    console.error('Cannot load the database');
  }
}

// Usage: node 2-read_file.js database.csv
const path = process.argv[2];
countStudents(path);
