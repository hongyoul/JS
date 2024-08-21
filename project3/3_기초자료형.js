/* 기초 자료형 */

// String (문자열)
// 문자열은 " " '' 로 표기할 것 (둘다 사용가능, 구분X)
const myName = "둘리";
const email = 'user@naver.com';

// 문자열 안에 변수를 포함할 때는 백틱 ${변수}을 사용할 것
const hello = 'Hello ${myName}';
console.log(hello);

// Nuber(숫자)
const Number = 123; // 정수
const opacit=0.57; // 실수

// Boolean (~여부, 논리형)
let checked = true;
let isShow = false;

// underfined (아무것도 정의되지 않은 상태)
// 값을 대입하지 않으면 underfined가 자동으로 할당됨
let undef;
console.log(undef);

//null(값이 비어있음을 의미)
//underfined와 달리 개발자가 직접 값을 대입해야함
let name = null;
console.log(name);
