/* while문 (조건이 포괄적일 때) */

// 숫자 1~10 출력하기!
let i = 1; //초기화식

while (i <= 10) { //조건식
  console.log(i);
  i++; //증감식
}

// 동전 교환기에 지페를 넣고 교환하기!

let inputPrice = 7000; //사용자가 넣은 지폐 금액
let coinUnit = 500;
let coinCount = 0; //동전 개수

while (inputPrice > 0) {
  inputPrice = inputPrice - coinUnit;
  coinCount++;
}

console.log("7000원을 동전 " + coinCount + "개로 변경함..");

/* for문 (조건이 명확할 때) */
// 초기화식, 조건식, 증감식
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 배열의 요소를 하나씩 꺼내기
let brands = ["애플","구글","페이스북","아마존", "삼성전자"];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

for (let index = 0; index < 5; index++) {
  console.log(brands[index]);
}

let productList = [
  { name :"솔의눈", print: 700},
  { name :"커피", print: 700},
  { name :"파워에이드", print: 1200},
  { name :"오렌지", print: 1000},
  { name :"보리차", print: 1200},
  { name :"밀키스", print: 800},
];

// 800원으로 구매할 수 있는 음료수 찾기
let inputCoin = 800;
let outputList = [];

for (let i = 0; i < productList.length; i++) {
  // 800원으로 살수 있는 물건 찾기
  if (productList[i].print <= inputCoin) {
    outputList.push(productList[i]);
  }
}

console.log(outputList);


/* for-in문 */

let arr = [3,4,5];

// 배열을 순회하면서 'in = index'를 꺼냄
for (let i in arr) { // 변수 in 배열(in = index)
  console,log(i + ", " + arr[i]);
}

/* for-of문 */
for(let v of arr) {
  // 배열을 순회하면서 값을 꺼냄
  console.log(v);
}