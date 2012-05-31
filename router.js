// Defining routing function for pathname
function route(handle, pathname, response) {
    console.log("About to route request for " + pathname);
    // Checking if action is mapped with given pathname
    if (typeof handle[pathname] == "function") {
        // Calling action
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        // Writing a 404 error page
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

// Exporting the module
exports.route = route;