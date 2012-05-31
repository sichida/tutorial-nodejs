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

// Handler for upload
function json(response) {
    
    function replacer(key, value) {
        if (typeof value === 'number' && !isFinite(value)) {
            return String(value);
        }
        return value;
    }

    console.log("Request handler 'json' was called.");
    response.writeHead(200, {"Content-Type": "application/json"});
    var resp = {
                    test: "blah",
                    array: [
                        {one: 1},
                        {two: 2},
                        {three: "three"}
                        ]
                    };
    var myJSONText = JSON.stringify(resp, replacer);
    response.write(myJSONText);
    response.end();
}

// Exporting the module
exports.start = start;
// Exporting the module
exports.upload = upload;
// Exporting the module
exports.json = json;
