const numbers = [55,66,77,88,99];

numbers.forEach(function(item, index){
  console.log('index: ' + index + ' value: ' + item);
});
/*
index: 0 value: 55
index: 1 value: 66
index: 2 value: 77
index: 3 value: 88
index: 4 value: 99
*/

numbers.forEach(function(a,b){
  console.log(a + " " + b);
});
/*
55 0
66 1
77 2
88 3
99 4
*/

numbers.forEach(function(item){
  console.log(item);
});
/*
1
2
3
4
5
*/

const arr = [5,4,2,100,3];
arr.forEach(function(item){
  console.log(item);
});
/*
5
4
2
100
3
*/

/*
결론
forEach문을 사용할 때 콜백함수의 매개변수
- 첫번째 매개변수 : 배열의 값
- 두번째 매개변수 : 배열의 인덱스
*/