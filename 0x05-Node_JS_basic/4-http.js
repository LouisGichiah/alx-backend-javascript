const http = require('http');

const Port = 1245;
const Host = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(Port, Host, () => {
  process.stdout.write(`Server listening at -> http://${Host}:${Port}\n`);
});

module.exports = app;