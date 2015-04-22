// Init Hapi
var Hapi = require('hapi')

// Create a server with a host and port
var server = new Hapi.Server()

server.connection({
    port: process.env.PORT || 8080
});

// Add the route
server.route({
  method: 'GET',
  path:'/{params*}',
  handler: {
    directory: {
      path: './',
      index: true
    }
  }
});

console.log('Serving /index.html with hapi')

// Start the server
server.start();