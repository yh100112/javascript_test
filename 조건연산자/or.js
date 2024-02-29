
// 피연산자가 true false인 경우
console.log(true || false); // true
console.log(false || false); // false

/*
자바스크립트에서만 제공하는 논리연산자 OR의 추가기능
< 피연산자가 true, false가 아닌 경우 >
- 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자 평가
- 각 피연산자를 불린형으로 변환한 후 그 값이 "true이면 연산을 멈추고 해당 피연산자의 값을 반환"
- 모든 피연산자가 false로 평가된 경우 마지막 피연산자 값 반환
*/
let a = "" || "" || "바이올렛";
console.log(a); // 바이올렛

let c = "" || "" || null;
console.log(c); // null -> 마지막 피연산자 반환 ( 모두 false 이므로)

let b = 10 || 1;
console.log(b); // 10 -> 첫 피연산자 10이 불린형으로 반환하면 true이므로 변환 전 값인 10을 반환하고 종료
    
console.log(-1 || 0); // -1 -> javascript에서는 0이 아닌 모든 수는 true

if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' ); 
// &가 |보다 우선순위 높음
// null || -1 && 1 -> null || 1 -> 1