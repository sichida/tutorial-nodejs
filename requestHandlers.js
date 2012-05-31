// Declaring querystring instance of querystring module
var querystring = require("querystring");

// Handler for start
function start(response, postData) {
    console.log("Request handler 'start' was called.");
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

// Handler for upload
function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + querystring.parse(postData).text);
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
