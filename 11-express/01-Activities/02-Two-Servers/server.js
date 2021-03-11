// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT = 7000;
const PORT2 = 7500;

// Create a generic function to handle requests and responses
const handleRequestOne = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`You rock`);
};

const handleRequestTwo = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`sometimes`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});

serverTwo.listen(PORT2, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT2}`);
  });
