var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

var htmlfromfile = fs.readFileSync("index.html");

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    response.send(htmlfromfile.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
