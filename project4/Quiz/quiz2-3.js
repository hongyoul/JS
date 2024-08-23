
// Q9. 배열에서 문자열의 길이가 5보다 긴 요소만 찾아 대문자로 변환하세요.
// 배열: ["apple", "banana", "grape", "kiwi", "watermelon"]
// 결과: ["BANANA", "WATERMELON"]
var arr2 =  ["apple", "banana", "grape", "kiwi", "watermelon"];

// 문자열의 길이가 5보다 긴 배열 찾기
var five = arr2.filter(
  function (fi) {
    return fi.length > 5;
  }
);
console.log(five);

// 배열을 대문자로 변환하기 위해 스트링으로 변환
var str = five.toString();
console.log(str.toLocaleUpperCase());

var str2 = str.toLocaleUpperCase()

// 스트링을 배열로 다시 변환
var arr3 = str2.split(",");
console.log(arr3);

// 정답
//배열에서 문자열의 길이가 5보다 긴 요소만 찾아 대문자로 변환하세요.

var fruits = ["apple", "banana", "grape", "kiwi", "watermelon"];

// 길이가 5보다 긴 문자열을 대문자로 변환하여 새 배열에 저장
var longFruits = fruits
  .filter((fruit) => fruit.length > 5)
  .map((fruit) => fruit.toUpperCase());

  // => 익명함수를 화살표로 변경된것

console.log(longFruits); // ["BANANA", "WATERMELON"]

// 버전1
var fruits = ["apple", "banana", "grape", "kiwi", "watermelon"];
console.log("원본 배열: " , fruits);

// 문자열의 길이가 5보다 요소만 필터링하여 새로운 배열 생성
var newarr1 = fruits.filter((fruits) => fruits.length > 5);
console.log("필터링된 배열: ", newarr1);

// 필터링된 배열의 각 요소를 대문자로 변경하여 새로운 배열 생성
var newarr2 = newarr1.map(function(fruit) {return fruit.toUpperCase()});
console.log("변환된 배열: ", newarr2);

//버전2

// 필터링과 맵핑을 연속적으로 체인으로 처리
var longFruits = fruits
  .filter((fruit) => fruit.length > 5)
  .map((fruit) => fruit.toUpperCase());

  console.log();
  console.log("최종 결과: ", longFruits);