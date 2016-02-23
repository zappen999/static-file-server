/**
 * Minimal node.js server for serving static files (front-ends).
 */

var express = require('express');
var app = express();
var sites = require('./sites').sites;

for (var i = 0; i < sites.length; i++) {
  console.log("Serving static files from", sites[i].dir, ' on ', sites[i].url);
  app.use(sites[i].url, express.static(sites[i].dir));
}

app.listen(9050, function () {
  console.log('Serving static contents on port 9050');
});
