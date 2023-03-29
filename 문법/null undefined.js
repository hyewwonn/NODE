
// null 존재하지 않거나 유효하지 않은 object
//      비어있음을 표현

// undefined 값이 명시되지 않은 변수

let foo;
console.log(foo); // undefined

const obj = {};
console.log(obj.prop); // undefined

// console.log(bar);  //error(선언 x)

let bar = null;
console.log(bar); // null


console.log(typeof null); //object
console.log(typeof undefined);  //undefined