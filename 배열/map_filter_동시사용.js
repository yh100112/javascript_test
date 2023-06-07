let numbers = [273, 52, 103, 32, 57]

let versions = numbers.map(String).filter(item => !isNaN(item));
// 숫자를 문자열로 바꾸고, numbers의 값이 NaN이 아닌 것만 versions에 새로운 배열의 값으로 넣음

console.log(versions);

/*
실행결과
[ '273', '52', '103', '32', '57' ]
*/