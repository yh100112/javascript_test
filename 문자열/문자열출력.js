var strKor = "한글";
console.log(strKor.length); // 2

let str = `이 문자열은 아주 긴 문자열입니다.\
따라서 몇 번에 걸친 줄 나누기가 필요합니다.\
자바스크립트에서는 역슬래시와 문자 결합 연산자를 사용하여 줄을 나눌 수 있습니다.`;

console.log(str); // 줄바꿈 없이 출력

let str2 = `이 문자열은 아주 긴 문자열입니다.
따라서 몇 번에 걸친 줄 나누기가 필요합니다.
자바스크립트에서는 역슬래시와 문자 결합 연산자를 사용하여 줄을 나눌 수 있습니다.`;

console.log(str2); // enter가 줄바꿈으로 되어 출력

let str11 = "JavaScript";
let str22 = "JavaScript"; 
let strObj = new String("JavaScript");
console.log(str11 == strObj);  // 문자열 값이 같으므로, true를 반환함.
console.log(str11 === strObj); // 문자열 값은 같지만 타입이 다르므로, false를 반환함.
console.log(str11 === str22); // true -> 음? 이 두개는 완전히 같은 객체이네?