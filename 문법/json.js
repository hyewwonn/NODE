const a = '{"result":true, "count":42}'
console.log(a);         //문자열


//JSON을 문자열로
const obj = JSON.parse(a);
console.log(obj.count);
console.log(obj["result"]);

//문자열을 JSON으로
b = JSON.stringify({x:5,y:6});
console.log(b);