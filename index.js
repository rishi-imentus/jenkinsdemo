// Load the http module to create an HTTP server
const http = require('http');

// Create an HTTP server that responds with "Hello World"
const server = http.createServer((req, res) => {
  res.statusCode = 200;  // Set the response HTTP status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain');  // Set the Content-Type to plain text
  res.end('Hello World\n');  // Send the response body as "Hello World"
});

// Define the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
