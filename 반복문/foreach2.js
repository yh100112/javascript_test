const obj = [
  {"uid": 100, "보상": 1000, "보상종류": 1},
  {"uid": 200, "보상": 2000, "보상종류": 2},
  {"uid": 300, "보상": 3000, "보상종류": 3}
];

obj.forEach((item, index) => {
  console.log(item.uid, item['보상'], item['보상종류']); // value
  console.log(index); // index
});

/*
결론
forEach는 배열뿐 아니라 객체에서도 사용 가능
*/