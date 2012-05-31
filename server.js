// Declaring http instance of http module
var http = require("http");
// Declaring url instance of url module
var url = require("url");

// This function start a server with a router
function start(route, handle) {
    // This function will be called at every requests
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        // Routing the pathname
        route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    
    // Creating the server with call back function
    // Using process.env.C9_PORT as port number in order to be compliant with Cloud9IDE
    http.createServer(onRequest).listen(process.env.C9_PORT);
    console.log("Server has started.");
}

// Exporting the module
exports.start = start;