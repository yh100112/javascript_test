let numbers = [273, 52, 103, 32, 57]

numbers = numbers.map(function(value, index, array) {
	return value * value;
});

numbers.forEach(console.log); // 매개변수로 console.log 메소드 자체를 넘김

/*
실행결과
74529 0 [ 74529, 2704, 10609, 1024, 3249 ]
2704 1 [ 74529, 2704, 10609, 1024, 3249 ]
10609 2 [ 74529, 2704, 10609, 1024, 3249 ]
1024 3 [ 74529, 2704, 10609, 1024, 3249 ]
3249 4 [ 74529, 2704, 10609, 1024, 3249 ]
*/