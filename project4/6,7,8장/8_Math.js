//Math 객체: 산술연산, 삼각함수, 로그함수 등 다양한 수학적 기능 제공

//round: 정수로 반올림
console.log(Math.round(4.9)); //5
console.log(Math.round(4.4)); //4

//ceil: 정수로 올림
console.log(Math.ceil(4.9)); //5
console.log(Math.ceil(4.4)); //5

//floor: 정수로 내림
console.log(Math.floor(4.9)); //4
console.log(Math.floor(4.4)); //4

//trunc: 소수 부분 버리고 정수 부분만 반환
console.log(Math.trunc(4.9)); //4
console.log(Math.trunc(4.4)); //4

//sign: 부호 확인. 양수면 1, 음수면 -1, 0이면 0을 반환
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1

//pow(x,y): x의 y 제곱값 반환 (8에 2승)
console.log(Math.pow(8, 2)); // 64

//sqrt: 제곱근(루트)
console.log(Math.sqrt(64)); // 8

//abs: 절대값
console.log(Math.abs(-4.7)); // 4.7

//min: 주어진 값들(n개) 중에서 가장 작은 값 반환
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200

//max: 주어진 값들(n개) 중에서 가장 큰 값 반환
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

//random: 0과 1사이의 랜덤한 숫자 반환(0이상 1미만)
console.log(Math.random()); // 예: 0.123456789

//여기에 10을 곱하면, 0에서 9사이의 랜덤한 숫자 반환
//예: Math.random()이 0.345일 때 => Math.random() * 10은 3.45
//   Math.floor(Math.random() * 10) => 3 (.floor로 소수부분 삭제)
console.log(Math.floor(Math.random() * 10 ));

//여기에 1을 더해주면, 1에서 10 사이의 랜덤한 숫자 반환
console.log(Math.floor(Math.random() * 10) + 1);



