// Declaring http instance of http module
var http = require("http");
// Declaring url instance of url module
var url = require("url");

// This function start a server with a router
function start(route, handle) {
    // This function will be called at every requests
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        // Set default encoding to UTF-8
        request.setEncoding("utf8");
        // Add listener for callback data when POST data is hudge
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });
        
        // Add listener for callback data when all POST data has been received
        request.addListener("end", function() {
            // Routing the pathname and giving the response
            route(handle, pathname, response, postData);
        });
    }
    
    // Creating the server with call back function
    // Using process.env.C9_PORT as port number in order to be compliant with Cloud9IDE
    http.createServer(onRequest).listen(process.env.PORT || process.env.VCAP_APP_PORT);
    console.log("Server has started.");
}

// Exporting the module
exports.start = start;