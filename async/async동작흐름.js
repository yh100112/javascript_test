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
*/