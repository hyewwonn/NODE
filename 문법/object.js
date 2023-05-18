// object
const cathy = {
  "name" : "cathy",
  "age" : 3,
  "skills" : ["자바스크립트", "인공지능", "자바", "리액트", "코볼"]
};

console.log(cathy); //{name: 'cathy', age: 3, skills: Array(5)}
console.log(cathy.name); //cathy

cathy["name"] = "만복이";
console.log(cathy.name); //만복이

// JavaScript는 기존에 없던 속성도 추가할 수 있다
cathy["sex"] = "female";
console.log(cathy.sex); //female

cathy.school = "mirim";
console.log(cathy.school); //female

console.log(cathy);