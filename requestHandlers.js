// Handler for start
function start(response) {
    console.log("Request handler 'start' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello start");
    response.end();
}

// Handler for upload
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

// Exporting the module
exports.start = start;
// Exporting the module
exports.upload = upload;
