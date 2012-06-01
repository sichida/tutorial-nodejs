var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

// Handler for start
function start(response, postData) {
    console.log("Request handler 'start' was called.");
    
    var client = new Db('tutorial-nodejs', new Server('ds031617.mongolab.com', 31617, {auto_reconnect: true}, {}));
    
    var insertData = function(err, collection) {
        collection.insert({name: "Kristiono Setyadi"});
        collection.insert({name: "Meghan Gill"});
        collection.insert({name: "Spiderman"});
        // you can add as many object as you want into the database
    }
    
    var removeData = function(err, collection) {
        collection.remove({name: "Spiderman"});
    }
    
    var updateData = function(err, collection) {
        collection.update({name: "Kristiono Setyadi"}, {name: "Kristiono Setyadi", sex: "Male"});
    }
    
    var listAllData = function(err, collection) {
        collection.find().toArray(function(err, results) {
            console.log(results);
        });
    }
    
    client.open(function(err, data) {
        if (data) {
            data.authenticate('devel', 'blah', function(error, oData) {
                if (oData) {
                    console.log("Database opened");
                    client.collection('test_insert', insertData);
                    client.collection('test_insert', listAllData);
                    // client.collection('test_insert', removeData);
                } else {
                    console.log(error);
                }
            });
        } else {
            console.log(err);
        }
    });
    
   /* client.open(function(err, pClient) {
        client.collection('stats', listAllData);
    });
    
    client.open(function(err, pClient) {
        client.collection('test_insert', insertData);
        client.collection('test_insert', removeData);
        // etc.
    }); */
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello Start");
    response.end();
    /*
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
    */
}

// Declaring querystring instance of querystring module
var querystring = require("querystring");

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
