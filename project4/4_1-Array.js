// toString : 배열을 문자열로 반환
let fruits = ["바나나","오렌지","사과","망고"]; // var, let 둘 다 사용 가능
console.log(fruits.toString()); //바나나,오렌지, 사과, 망고

//join:배열요소를 지정한 구분자로 연결
console.log(fruits.join(" * ")); //바나나*오렌지*사과*망고

//pop: 마지막 요소를 제거하고 반환
let x = fruits.pop(); // x = "망고"    // var, let 둘 다 사용 가능
console.log(x);

//push: 끝에 새로운 요소를 추가
fruits.push("키위"); //"키위"를 fruits 배열에 추가
console.log(fruits);

//shift: 첫번째 요소를 제거하고 반환
let f = fruits.shift(); //바나나
console.log(f);
console.log(fruits);

//unshift: 배열 맨앞에 새로운 요소를 추가, 배열의 길이 반환
let len = fruits.unshift("레몬");
console.log(len);
console.log(fruits);

//첫번째 요소를 "체리"로 변경
fruits[0] = "체리";
console.log(fruits);

// 세번째 요소를 "수박"로 변경
fruits[2] = "수박";
console.log(fruits);

// splice: 특정 위치에 새로운 요소를 추가 또는 삭제
// 새로운 요소를 추가할 인덱스 번호,
// 추가하기 전에 삭제할 요소 수, 나머지: 추가할 요소

// 2번째 인덱스에 "딸기" "메론" 추가
fruits.splice(2, 0, "딸기", "메론"); //splice(시작위치, 요소를 삭제갯수 , "추가index","추가index","추가index"~~~)
// fruits.splice(2, 1, "딸기", "메론");

//[체리, 오렌지, 딸기, 메론, 사과, 키위]
// => [ '체리', '오렌지', '딸기', '메론', '수박', '키위' ]
console.log(fruits);

// slice: 배열의 일부를 잘라내서 새로운 배열을 반환
// 시작인덱스(마지막 인덱스 생략 시 마지막까지)
console.log(fruits.splice(3)); // [메론, 수박, 키위]
// 시작인덱스, 마지막 인덱스
// 1번부터 3번 직전까지( 마지막 인덱스는 포함 안함(X) )
console.log(fruits.splice(1,3)); // [오렌지 딸기] 

// concat: 여러 배열을 하나로 합치기
let arr1 = ["토마토", "오이"];
let arr2 = ["당근", "감자", "양파"];
let arr3 = ["호박", "배추"];
let vegetable = arr1.concat(arr2, arr3); // n개 사용가능
console.log(vegetable);

// forEach: 배열의 각 요소에 대해 반복적인 작업 실행
// 인자: 함수
vegetable.forEach( // 재사용 가능 java에서 사용한 스트림과 동일하지 않음

// 배열의 요소와 인덱스
function (item, index) { // function (item = 인덱스데이터, index = 인덱스 번호)
  console.log("야채 " + index + ": " + item);
  }
);

vegetable.forEach( 
function (a, c) { 
  console.log("야채 " + a + ": " + c);
  }
);