const fs = require('fs');
const path = require('path');
const http = require('http');
const ejs = require('ejs');

//index.ejs에 넘겨줄 data
const index = {
  name: 'YHW',
  here: '한국'
};

// const food1 = "쿠키";
// const food2 = "훠궈";
// const food3 = "초밥";

const food = ["쿠키", "훠궈", "초밥"];

const server = http.createServer(function(req, res){
  console.log(req.url);
  
  res.setHeader('Content-type', 'text/html');
  if(req.url == '/') {
    //renderFile(ejs대상경로, ejs에 넘겨줄 데이터)
    ejs.renderFile(path.join(__dirname, 'template', './index.ejs'), 
    {name: index.name, here: index.here})
    .then((data) => res.end(data)); //데이터를 넘겨받은 ejs 코드(data)를 클라이언트에게 보낸다.
    
  }
  else if(req.url == '/food') {
    ejs.renderFile(path.join(__dirname, 'template', './food.ejs'),
    {food})
    .then((data) => res.end(data));
  }
  else {
    fs.createReadStream(path.join(__dirname, 'html', './404.html')).pipe(res);
  }

});

server.listen(3333);