const one = () => Promise.resolve('One!');

async function myFunc(){
	console.log('In function!');
	const res = await one();
	console.log(res);
}

console.log('Before Function!');
myFunc();
console.log('After Function!');

/*
before function
in function
after function
one!

call stack에 코드를 넣다가 promise 객체를 만나면 해당 함수는 callback queue로 넣고 나머지 call stack을 처리해서 다 비운다.
call stack이 다 비워지면 그 후 callback queue에 있는 promise 함수를 호출하여 call stack에 넣고 호출한다.

$.get()같이 url에서 데이터를 다 읽어올 동안 다음 동작을 하지 않게 하는것도 await이다.
하지만 이 경우가 아닌 실제 동작은 저렇게 된다. -> 애매모호해서 확실히 이부분 정리해야 할듯
*/