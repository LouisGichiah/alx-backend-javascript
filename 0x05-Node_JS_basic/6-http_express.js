const express = require('express');

const app = express();
const Port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(Port, () => {
  console.log(`Server listening on Port ${Port}`);
});

module.exports = app;