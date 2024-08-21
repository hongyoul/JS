// Q11. 배열을 입력 받아, 모두 같은 자료형으로 이루어져 있는지 확인하는 함수를 만드세요.
// 입력: [“a", “b", “c"]
// 반환: true

function Type(arr2) {

  // 배열이 비어 있는 경우
  if (arr2.length === 0) {
      return true;
  }

  // 첫 번째 요소의 자료형을 기준으로 삼습니다.
  const firstType = typeof arr2[0];
  
  // 배열의 나머지 요소들을 확인합니다.
  for (let i = 1; i < arr2.length; i++) {
      if (typeof arr2[i] == firstType) {
          continue;
      } else{
        return false;
      }
  }

  return true;
}

// 함수 사용 예제
const inputArray1 = ["a", "b", "c"];
const result5 = Type(inputArray1);

// 최종 출력
console.log(result5); 

// 정답
function func(arr) {
  //첫번째 요소의 자료형을 기준으로 설정
  let firstType = typeof arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== firstType) {
      return false; //하나라도 다른 자료형이 있으면 false
      // 반환
    }
  }
  return true; //모두 동일한 자료형이면 true 반환
}
console.log(func([1,2,3])); //true
console.log(func([1, "2", 3])); // false
console.log(func(["a", "b", "c"])); // true
console.log(func([true, false, true])); // true
console.log() // 한칸 띄어쓰기