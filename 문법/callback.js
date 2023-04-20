function somefunc(callback) {
  console.log("somefunc 실행");

  //somefunc의 기능을 수행하고 난 후에
  //callback()가 실행된다.
  callback();
}

// function cb() {
//   console.log("콜백함수 실행");
// }

somefunc(function () {console.log("콜백함수 실행");}); //익명함수를 somefunc에 매개변수로 넘긴 것.

//비동기 : 순서대로 실행되지 않는 것. 자바스크립트는 비동기 방식으로 실행된다.
//콜백 함수 : 자바스크립트에서 순서대로 실행되어야 하는 부분이 있는 경우 콜백 함수 사용.

