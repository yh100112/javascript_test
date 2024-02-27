console.log(true && true); // true
console.log(false && true); // false

// 첫 번째 false를 찾는 and 연산
// < 피연산자가 true, false가 아닌 경우 >
// - 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자 평가
// - 각 피연산자를 불린형으로 변환한 후 그 값이 false이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
// - 피연산자 모두를 평가한 경우(모든 피연산자가 true로 평가된 경우) 마지막 피연산자 값 반환
value1 = "";
value2 = "bye";
value3 = "hello";
result = value2 && value1 && value3;
console.log(result); // value1 반환 - 첫 번째 false이므로

console.log(1 && 2 && 3); // 3 - 마지막 피연산자 3 반환 ( 모두 true이므로 )