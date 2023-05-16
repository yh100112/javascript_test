console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve('Promise').then(res => console.log(res));

console.log('end');
/*
실행결과
start
end
Promise
timeout

Promise -> MicroTask Queue에 적재되어 Callback Queue(MicroTask Queue, Task Queue)에서 제일 먼저 호출된다.
setTimeout -> Task Queue에 적재되어 MicroTask Queue가 빌 때까지 기다렸다가 비면 그 다음 처리된다.
*/