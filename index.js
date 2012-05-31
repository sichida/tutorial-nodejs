// Declaring server instance of server module
var server = require('./server');
// Declaring router instance of router module
var router = require('./router');

// Starting server by passing the rooter instance
server.start(router.route);
