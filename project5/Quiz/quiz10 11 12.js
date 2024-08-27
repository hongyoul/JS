// Q10. 다음의 익명 함수를 화살표 함수로 변환하세요.

const multiplyAndAdd = (a, b, c) => {
const temp = a * b;
const result = temp + c;
return result;
};


// Q11. map에서 사용한 익명 함수를 화살표 함수로 변환하세요.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2 );

// Q12. filter에서 사용한 익명 함수를 화살표 함수로 변환하세요.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter((number) => number % 2 == 0);