// Q15. 숫자를 입력 받아, 팩토리얼을 계산하여 반환하는 함수를 만드세요
// 입력: 5
// 반환: 120 (1*2*3*4*5)

// 함수 사용 예제
const inputNumber = 5;
const result9 = factorial(inputNumber);

function sum2(n) {
  // 0 또는 1일 경우 팩토리얼은 1
  if (n == 0 || n == 1) {
    return 1;
  }
  
  // 결과를 저장할 변수
  let result9 = 1;
  
  // 1부터 n까지 반복하여 결과를 계산
  for (let i = 1; i <= n; i++) {
    result9 *= i;
  }
  
  // 계산된 팩토리얼을 반환
  return result9;
}

// 최종 출력
console.log(result9);  

// 정답
// 함수
// 숫자를 입력 받아, 팩토리얼을 계산하여 반환하는 함수를 만드세요

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//5!
let result4 = factorial(5);
console.log(result4);

// 함수 호출 순서
// factorial(5)
// 5*factorial(4)
// factorial(3)
// factorial(2)
// factorial(1)

//함수 완료 순서
// factorial(1)
// factorial(2)
// factorial(3)
// factorial(4)
// factorial(5)
