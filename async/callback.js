const numbers = [55,66,77,88,99];

numbers.forEach((item, index) => {
  console.log('index: ' + index + ' value: ' + item);
});

numbers.forEach(function(item, index) {
  console.log('index: ' + index + ' value: ' + item);
});

/*
위 두가지 문법은 콜백함수를 호출하는 방법이다. 둘 중 아무거나 쓰면 됨
*/