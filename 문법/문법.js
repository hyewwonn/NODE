/*
  JavaScript에서 false로 처리되는 값들
  null, NaN, 0, 빈 문자열()
*/

//a를 상수처리
const a = 30;
console.log(a);  //30
//a = 10;  // 에러 const는 값을 바꿀 수 없다.


//함수
function add(n1, n2) {
  return n1+n2;
}

result = add(1,2)
console.log(result);  //3

plus = add;           //plus도 add()의 역할을 할 수 있음
result = plus(3,4);
console.log(result);  //7

sub = (n1,n2) => n1-n2;   //함수 body가 return 하나일 때

result = sub(3,2);
console.log(result);  //1

square = num => num*num;

result = square(3);
console.log(result);  //9