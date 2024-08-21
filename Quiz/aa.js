// Q11. 배열을 입력 받아, 모두 같은 자료형으로 이루어져 있는지 확인하는 함수를 만드세요.
// 입력: [“a", “b", “c"]
// 반환: true
const arr2 = ["a", "b", "c"];

// console.log(typeof(arr2[0]));
// console.log(typeof(arr2[1]));
// console.log(typeof(arr2[2]));
function str(arr2) {
  // 결과
  let result = true;

  // 배열의 요소를 하나씩 꺼내서 타입을 확인한다
  // 그리고 타입 string이면 
  for (let i = 0; i <= arr2.length; i++){
    if (typeof arr2[i] === 'string'){
      
    }
  }

  // 모든 요소를 다 확인한 후에, 결과를 출력한다.
  console.log(arr2);

}
// 최종 결과값을 확인한다
str(arr2);