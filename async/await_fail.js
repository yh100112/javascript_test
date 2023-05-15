async function f() {
  let promise = await setTimeout(() => {}, 1000);

  console.log("hello"); // "완료!"
}

f();

/*
async, await을 사용하면 동기적으로 실행을 하게 할 수 있지만 setTimeout은 Promise를 반환하지 않기 때문에
async,await을 적용해도 제대로 동작하지 않는다.
그래서 Promise를 반환하게 만들어줘야 한다.
*/