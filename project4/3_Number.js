// Number 객체: 숫자를 생성하고 조작하는 함수

// 숫자를 문자로 변환하는 함수
let num1 = 123;
let str = num1.toString(); // "123"

// typeof: 값의 타입을 확인하는 연산자
console.log(typeof num1); // "number"
console.log(typeof str); // "string"


// 소수점 몇번째자리까지 보여줄지 결정하는 함수
// 해당 위치에서 반올림한 값을 반환
// 인자: 자리수 (소수점 밑자리만 선택)
let num2 = 10.65645;

console.log(num2.toFixed(0)); // 11 , (0)은 정수부분 출력
console.log(num2.toFixed(1)); // 10.7, (1)소수점 첫번째 자리 출력 
console.log(num2.toFixed(2)); // 10.66
console.log(num2.toFixed(3)); // 10.656
console.log(num2.toFixed(4)); // 10.6564
console.log(num2.toFixed(5)); // 10.65645

// 정수와 소수를 포함해서 몇번째 자리까지 보여줄지 결정
console.log(num2.toPrecision());  // 10.65645 (그대로(원본) 출력)
console.log(num2.toPrecision(1)); // 1e+1 (엄청나게 큰값) 입력이 안되는값??
console.log(num2.toPrecision(2)); // 11
console.log(num2.toPrecision(3)); // 10.7
console.log(num2.toPrecision(4)); // 10.66
console.log(num2.toPrecision(5)); // 10.656

// 문자열을 숫가로 변환하는 함수 (문자열 -> 숫자열 로 변경)
console.log(parseInt("-10"), typeof parseInt("-10")); // -10 number
console.log(parseInt("12.33")); // 12
console.log(parseInt("10 years")); // 10 (시작하는 부분에 숫자가 있으면 변환 가능)
console.log(parseInt("years 10")); // NaN (잘못된 계산)

//isNaN: 문자열이 숫자로 변환가능한지 확인하는 함수
console.log(isNaN("aa")); // true -> 변환 X (불가능)
console.log(isNaN("10")); // false -> 변환 O (가능)

// 문자열 실수로 변환하는 함수
console.log(parseFloat("12.33")); // 12.33 (소수점을 잃지 않고 정확하게 출력)