/*
parseInt() : 왼쪽부터 바꿀 수 있는 부분까지만 변환하여 반환
parseFloat() : 왼쪽부터 바꿀 수 있는 부분까지만 변환하여 반환
Number() : 문자열에 숫자 이외의 문자가 있으면 NaN을 반환
*/

var won = '1000원';
var dollar = '1.5$';

console.log(Number(won) + ", " + Number(dollar)); // NaN, NaN
console.log(parseInt(won) + ", " + parseInt(dollar)); // 1000, 1
console.log(parseFloat(won) + ", " + parseFloat(dollar)); // 1000, 1.5

