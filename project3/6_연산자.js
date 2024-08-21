// 대입연산자
let x =1; //x에 1을 저장

//비교연산자
console.log(1 == 2); //값이 같으면 참
console.log(1 != 2); //값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);


console.log(1 == "1"); // 자료형에 상관없이 값만 비교
console.log(1 === "1"); // 자료형과 값을 모두 비교

// 산술연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// 문자열 결합연산자
console.log("좋은 " + "하루 되세요!");

// 부호연산자
console.log(-x); // 부호를 반대로 변경하여 음수를 출력
console.log(x); // 원본데이터에는 영향이 없음

// 증감연산자
console.log(++x); // 시작하는 처음부터 1를 더해서 나옴 2
console.log(x++); // 처음부터 더하지 않고 후에 더함 2
console.log(--x); // 시작하는 처음부터 1를 감소해서 나옴 2
console.log(x--); // 처음부터 빼지 않고 후에 빼야함 2

// 논리 연산자
//&& : 논리곱. 두항이 모두 참이면 참
// || : 논리합. 두항 중 하나라도 참이면 참
// ! : 부정. 값이 반대로 변경
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(!true);

// 삼항연산자
let point = 82;
//점수가 90점이상이면 pass 아니면 fail
let grade = point >= 90 ? "pass" : "fail";
console.log(grade);

//typeof연산자: 값의 타입을 확인하는 연산자
  // 기초타입
console.log(typeof "42"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolesn'
  // 함수
console.log(typeof function () {}); // 'function'
console.log(typeof undefined); // 'undefined'
  //object타입
console.log(typeof null); //'object'
console.log(typeof {}); //'object'
console.log(typeof []); //'object'


