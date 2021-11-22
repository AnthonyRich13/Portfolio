var {app} = require('../app');
const port = process.env.PORT || 5000;
var http = require('http');

var server = http.createServer(app);

server.listen(port);