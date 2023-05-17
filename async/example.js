function fetchItems() {
  return new Promise(function(resolve, reject) {
    var items = [1,2,3];
    resolve(items);
  });
}

async function logItems() {
  var resultItems = await fetchItems(); // await를 없애면 [1,2,3]부터 호출되고 그 다음 종료! 가 호출됨
  console.log(resultItems); // [1,2,3]
}

logItems();
console.log("종료!");

/*
실행결과
종료!
[1,2,3]

*/