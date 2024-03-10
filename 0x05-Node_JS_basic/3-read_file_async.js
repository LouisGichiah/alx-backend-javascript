const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

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

      resolve();
    });
  });
}

// Usage: node 3-read_file_async.js database.csv
const path = process.argv[2];
countStudents(path)
  .catch(error => console.error(error.message));
