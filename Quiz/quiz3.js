/* ==============================================================================================================*/
// Q10. 숫자 배열을 입력 받아, 배열에서 가장 큰 숫자를 반환하는 함수를 만드세요.
// 입력: [ -1, 5, 10, -3 ]
// 반환: 10
// const arr = [ -1, 5, 10, -3 ];
// const maxNumber = Math.max(...arr);
// console.log("Max:", maxNumber);

const arr1 = [ -1, 5, 10, -3 ];

  function arrayMax(arr1) {

    // 배열의 요소가 무조건 존재할 경우 max = arr[0]로 변경 가능
    var len = arr1.length, max = -Infinity;
    while (len--) {
      if (arr1[len] > max) {
        max = arr1[len];
      }
    }
    return max;
  };
  
  var array = [ -1, 5, 10, -3 ];
  
  console.log("Max:",  arrayMax(array));

  //정답
  function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      // -1 5
      // max vs arr[i]

      // 현재 max값을 배열의 요소로 교체(대입연산자 사용)
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  let result3 =  [ -1, 5, 10, -3 ];
  console.log(result3);

/* ==============================================================================================================*/
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

/* ==============================================================================================================*/
// Q12. 문자열 배열과 특정 문자열을 입력 받아, 특정값이 있는지 확인하고 있으면 true 없으면 false를
// 반환하는 함수를 만드세요.
// 입력: ["apple", "banana", "cherry"], "banana"
// 반환: true
const access = ["apple", "banana", "cherry"]
const access2 = ["apple", "banana", "cherry"]
const access3 = ["apple", "banana", "cherry"]
const access4 = ["apple", "banana", "cherry"]


function fun(arr,value) {
  return arr.includes(value);
}
console.log(fun(["apple", "banana", "cherry"], "banana")); // true
console.log(fun(["apple", "banana", "cherry"], "grape")); // false

console.log() // 한칸 띄어쓰기


/* ==============================================================================================================*/
// Q13. 정수를 입력 받아, 그 숫자의 구구단을 출력하는 함수를 만드세요
// 입력: 2
const number = 2
for (let i = 1; i <= 9; i++) {
  console.log(number, "*", i,"=",(number*i));
}

console.log() // 한칸 띄어쓰기


/* ==============================================================================================================*/
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



/* ==============================================================================================================*/
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


/* ==============================================================================================================*/
// Q16. 학생 객체 배열을 입력 받아, 특정 과목의 평균 점수를 반환하는 함수를 만드세요
// 입력: students, ‘math’
// 반환: 80

// 함수
// 학생 객체 배열을 입력 받아, 특정 과목의 평균 점수를 출력하는 함수를 만드세요

function calculateScore(students, subject) {
  // 총 점수
  let totalScore = 0;
  // 학생 수
  let length = students.length;

  // 학생 배열을 순회
  for (const student of students) {
    // 학생 객체에서 특정 과목의 점수를 가져옴
    totalScore = totalScore + student[subject];
  }

  // 평균 계산
  return totalScore / length;
}

const students = [
  { name: "둘리", math: 90, english: 85 },
  { name: "또치", math: 80, english: 95 },
  { name: "도우너", math: 70, english: 75 },
];

let result12 = calculateScore(students, "math");
console.log(result12);


/* ==============================================================================================================*/
// Q17. 직원 객체 배열을 입력 받아, 특정 직급의 평균 월급을 반환하는 함수를 만드세요
// 입력: employees, ‘사원’
// 반환: 240
// 함수

function calculateAvgSalary(employees, position) {
  let total = 0;
  let count = 0;

  for (const employee of employees) {
    if (employee.position === position) {
      total = total + employee.salary;
      count++;
    }
  }

  return total / count;
}

const employees = [
  { name: "짱구", position: "부장", salary: 500 },
  { name: "철수", position: "차장", salary: 380 },
  { name: "훈이", position: "사원", salary: 260 },
  { name: "맹구", position: "차장", salary: 420 },
  { name: "유리", position: "사원", salary: 220 },
];

console.log(calculateAvgSalary(employees, "부장"));
console.log(calculateAvgSalary(employees, "차장"));
console.log(calculateAvgSalary(employees, "사원"));