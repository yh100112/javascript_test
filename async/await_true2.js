async function f() {
  let promise = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("dddd");
    }, 1000);
  });

  let result = promise; // 프로미스가 이행된 후 결과값 dddd를 받음

  console.log(result);
}

f();