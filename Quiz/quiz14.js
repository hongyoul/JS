// Q14. 다양한 값으로 구성된 배열을 입력 받아, 그 중에서 문자열만 골라서 새로운 배열로 반환하는 함수를 만드세요
// 입력: [1, "apple", true, "banana", 42, "cherry"]
// 반환: ["apple", "banana", "cherry"]

// 함수 사용 예제
const inputArray2 = [1, "apple", true, "banana", 42, "cherry"];
const arr5 = nameNamer(inputArray2);


//함수선언
function nameNamer(arr4) {

  // 결과값 설정
  let arr5 = [];

  // 배열을 하나씩 꺼내는 식
  for (let i = 0; i <= arr4.length; i++) {
    if (typeof arr4[i] === 'String') {
    
      // 하나씩 꺼낸것을 확인하고 arr5[]에 함수값 넣기
      arr4.push(arr5[i]);
    }
  }
  // 문자열만 포함된 새로운 배열을 반환
  return arr5;
}

// 최종 출력: ["apple", "banana", "cherry"]
console.log(arr5);  

// 정답
// 함수
// 다양한 값으로 구성된 배열을 입력 받아, 그 중에서 문자열만 골라서 새로운 배열로 반환하는 함수를 만드세요

function func(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(func([1, "apple", true, "banana", 42, "cherry"])); // ["apple", "banana", "cherry"]
console.log(func([true, false, "yes", 0, "no"])); // ["yes", "no"]
