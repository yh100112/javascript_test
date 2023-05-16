async function f() {
  let promise = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('타이머 끝났습니다~');
    }, 1000);
  });

  let res = promise;

  console.log(res);  
  console.log("완료");
}

f();
console.log("ddd");

/*
실행결과
ddd
타이머 끝났습니다~
완료
*/