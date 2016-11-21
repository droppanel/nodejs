var http    = require('http');
var path    = require('path');
var express = require('express');

var app     = express();
var server  = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;
var ip = process.env.IP || '0.0.0.0';

server.listen(port, ip, function() {
  console.log("Server running at " + ip + ":" + port);
});
