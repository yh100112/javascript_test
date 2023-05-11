/*
보통의 프로그래밍 언어는 매개변수의 개수가 맞지 않으면 오류가 발생한다.
하지만 자바스크립트는 초과된 매개변수는 그냥 무시한 채 진행한다. 
또한 원래 지정된 매개 변수보다 적게 입력했을 경우 undefined가 입력된다.

가변인자 함수
- 매개변수의 갯수에 따라 다른 기능을 하도록 구현된 함수 ex) Array()
*/

var array1 = Array(); // 빈 배열 생성
var array2 = Array(10); // 크기 10의 배열 생성
var array3 = Array(1,2,3,4,5); // 1,2,3,4,5로 크기 5의 배열을 만듬

console.log(array2.length); // 10
console.log(array3.length); // 5


/*
자바스크립ㄹ트의 모든 함수는 변수 arguments 라는 인자를 자동으로 갖는다.
arguments
- 매개변수의 배열
- 이를 사용하면 Array() 함수처럼 인자 개수에 따라 다른 기능을 하도록 구현할 수 있다.
*/

function sumAll() {
  var sum = 0;
  for(var i in arguments) { // argument 사용
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10)); // 55

function myFunc() {
  var length = arguments.length; // 매개변수의 개수를 가져옴
  if (length === 0){
    // 매개변수가 없을 때
  }
  else if (length === 1){
    // 매개변수가 1개일 때
  }
  else {
    // 매개변수가 2개 or 그 이상일 때
  }
}