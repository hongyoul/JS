// Q26. 배열을 분해하여 모든 요소를 변수에 저장하세요.
// 배열: ["red", "green", "blue"];
// 출력: “red” “green” “blue”
let arr1 = ["red", "green", "blue"];
let [a, b, c] = arr1

console.log(a);
console.log(b);
console.log(c);
console.log(a , b, c);

console.log();

// Q27. 배열을 분해하여 첫번째와 네번째 요소만를 변수에 저장하세요.
// 배열: ["사과", "바나나", "오렌지", "키위"];
// 출력: “사과” “키위”

let fruit = ["사과", "바나나", "오렌지", "키위"];

let [n1, , , n4] = fruit;

console.log(n1);
console.log(n4);
console.log(n1, n4);

console.log();

// Q28. 함수에서 배열을 입력받고, 배열의 첫 번째와 세 번째 요소를 출력하세요.
// 배열: ["사과", "바나나", "오렌지", "키위"];
// 출력: “사과와 오렌지”

let fruit2 = ["사과", "바나나", "오렌지", "키위"];

let [x1, , x3, ] = fruit2;

console.log(`${x1}와 ${x3}`);