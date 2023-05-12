var arr = ["JavaScript"]; // 요소가 하나뿐인 배열을 생성함
var element = arr[0];     // 배열의 첫 번째 요소를 읽어서 대입함.

arr[1] = 10;      // 배열의 두 번째 요소에 숫자 10을 대입함. 배열의 길이는 1에서 2로 늘어남.
arr[2] = element; // 배열의 세 번째 요소에 변수 element의 값을 대입함. 배열의 길이는 2에서 3으로 늘어남.
 
delete arr[2];    // 배열의 세 번째 요소를 삭제함. 하지만 배열의 길이는 변하지 않음.

console.log(arr); // [ 'JavaScript', 10, <1 empty item> ]
console.log(arr.length); // 3

arr.pop(); // pop을 하면 배열의 길이가 바뀜
console.log(arr.length); // 2