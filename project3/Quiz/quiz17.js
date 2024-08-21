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