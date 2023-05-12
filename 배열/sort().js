/* 
sort() : 배열의 요소를 오름차순 or 내림차순으로 정렬 가능
<default>
- 오름차순
<동작방식>
- 배열 요소를 문자열로 캐스팅한 후 !변환된 문자열을 비교! 하여 순서 결정
- 배열의 요소가 undefined인 경우 문자열로 변환되지 않음
- 배열의 요소가 undefined인 경우 배열의 맨 끝으로 정렬
*/ 
var numbers = [1,10,2,20,3,30];
numbers.sort();
console.log(numbers); // [1,10,2,20,3,30] -> 문자열로 비교하므로 "10"과 "2"를 비교시 "1" < "2"이므로 10 이 2보다 앞에 세팅됨


/*
위 문제를 해결하기 위해 비교 함수를 sort()에 전달한다.
sort()의 비교함수
- 두 개의 인수를 전달받으며 정렬 순서를 결정하는 값을 반환
*/
var numbers = [1,10,2,20,3,30];
numbers.sort(function compare(a, b){ // 오름차순 정렬
  // if(a > b) return 1;  -> return value > 0이므로 a는 b 뒤에 옴
  // if(a < b) return -1; -> return value < 0 이므로 a는 b 앞에 옴
  // return 0;            -> a 와 b의 정렬을 유지
  return a - b; // 이렇게 간단하게도 비교함수 작성 가능
});
console.log(numbers); // [ 1, 2, 3, 10, 20, 30 ]

