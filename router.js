// Defining routing function for pathname
function route(handle, pathname) {
    console.log("About to route request for " + pathname);
    // Checking if action is mapped with given pathname
    if (typeof handle[pathname] == "function") {
        // Calling action
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}

// Exporting the module
exports.route = route;