/**
 * Minimal node.js server for serving static files
 */

var port = 9009;

var morgan = require('morgan');
var express = require('express');
var fs = require('fs');
var app = express();

// Always log to file
app.use(morgan('common', {
  stream: fs.createWriteStream(__dirname + '/access.log', {
    flags: 'a'
  })
}));

// Log to console
app.use(morgan('dev'));

// Serve static content from the static directory
app.use(express.static(__dirname + '/static'));

// Load default index.html file if no file matched in the static dir,
// This is good for SPA
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, '127.0.0.1');
app.on('listening', function() {
  console.log('Serving static contents on port ', port);
});
