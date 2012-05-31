// Declaring server instance of server module
var server = require('./server');
// Declaring router instance of router module
var router = require('./router');
// Declaring requestHandlers instance of requestHandlers module
var requestHandlers = require('./requestHandlers');

// Mapping all known urls with actions
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/json"] = requestHandlers.json;

// Starting server by passing the rooter instance
server.start(router.route, handle);
