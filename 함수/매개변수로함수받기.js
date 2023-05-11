// 자바스크립트에서는 함수도 하나의 변수이므로 매개변수로 함수를 전달하는 것이 가능하다
// 함수의 매개변수로는 함수, 객체, 배열을 받을 수 있다.

function callFunctionTenTimes(other){
  for (var i = 0; i < 10; i++) { // 매개변수로 받아온 함수를 10번 호출
    other();
  }
}

function helloFunction() {
  console.log("hello world!");
}

callFunctionTenTimes(helloFunction);