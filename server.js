// Serve static content via Node (source: https://medium.com/shovel-apps/simple-node-js-server-on-heroku-210ec24f485)
const static = require('node-static');
var file = new static.Server('./public');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);