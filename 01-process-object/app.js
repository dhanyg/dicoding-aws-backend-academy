const memoryInformation = process.memoryUsage();
console.log(memoryInformation);

const firstName = process.argv[2] ?? 'First Name';
const lastName = process.argv[3] ?? 'Second Name';
console.log(`Hello ${firstName} ${lastName}`);

const http = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello, World!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}`);
});
