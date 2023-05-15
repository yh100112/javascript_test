async function f() {
  let promise = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  console.log("완료");
}

f();