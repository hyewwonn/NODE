const fs = require('fs');

//__dirname : 현재 디렉토리의 절대경로(Node의 전역변수)
//console.log(__dirname);

//해당
const files = fs.readdirSync(__dirname);
console.log(files);

