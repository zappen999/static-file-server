/**
 * Minimal node.js server for serving static files (front-ends).
 */

var port = 9009;

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, function() {
  console.log('Serving static contents on port ', port);
});
