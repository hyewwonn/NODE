const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer(function(req, res){
  console.log(req.url);
  res.setHeader('Content-type', 'text/html');
  if(req.url == '/') {
    fs.createReadStream(path.join(__dirname, 'html', './index.html')).pipe(res);
  }
  else if(req.url == '/food') {
    fs.createReadStream(path.join(__dirname, 'html', './food.html')).pipe(res);
  }
  else {
    fs.createReadStream(path.join(__dirname, 'html', './404.html')).pipe(res);
  }
});

server.listen(3333);