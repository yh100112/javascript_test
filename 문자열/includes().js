let stores = "1,2,3";
console.log(stores.includes('1'));

if (stores.includes('1')){
  console.log("문자열 1이 존재합니다");
}

if (stores.includes('2')){
  console.log("문자열 2이 존재합니다");
}


if (stores.includes('3')){
  console.log("문자열 3이 존재합니다");
}


if (stores.includes('4')){
  console.log("문자열 4이 존재합니다");
}
else {
  console.log("문자열 4가 존재하지 않습니다!");
}