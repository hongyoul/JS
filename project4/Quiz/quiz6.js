// Q13. 현재 날짜와 시간를 다음과 같이 출력하세요.

//정답
const now1 = new Date();
const date =
    now1.getFullYear() + "-" + (now1.getMonth() + 1) + "-" + now1.getDate();
const time1 = now1.getHours() + ":" + now1.getMinutes() + ":" + now1.getSeconds();

console.log("현재 날짜와 시간:", date + " " + time1);



// 첫번째 시도
let now = new Date();
console.log("현재 날짜와 시간: ", now.toLocaleString());




// Q14. 2024월 1월 1일 부터 10일 후의 날짜를 계산하세요.

// 정답
const  Day10 = new Date ("2024-01-01");
const add = 10;

// 날짜 계산
Day10.setDate(Day10.getDate() + add);
console.log("10일 후 날짜:", Day10.toLocaleString());



// 첫번째 시도
var date1 = new Date ("january 1, 2024 9:00:00");
var date2 = new Date ("january 2, 2024 9:00:00");
var date3 = new Date ("january 3, 2024 9:00:00");
var date4 = new Date ("january 4, 2024 9:00:00");
var date5 = new Date ("january 5, 2024 9:00:00");
var date6 = new Date ("january 6, 2024 9:00:00");
var date7 = new Date ("january 7, 2024 9:00:00");
var date8 = new Date ("january 8, 2024 9:00:00");
var date9 = new Date ("january 9, 2024 9:00:00");
var date10 = new Date ("january 10, 2024 9:00:00");

console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
console.log(date6.toLocaleString());
console.log(date7.toLocaleString());
console.log(date8.toLocaleString());
console.log(date9.toLocaleString());
console.log(date10.toLocaleString());


// Q15. 현재 시간에서 1시간 30분 후의 시간을 출력하세요.

//정답
const currentTime = new Date();

// 1시간 30분 더하기
currentTime.setHours(currentTime.getHours() + 1);
currentTime.setMinutes(currentTime.getMinutes() + 30);

console.log("1시간 30분 후의 시간:", currentTime.toLocaleString());


// 첫번째 시도
let time = new Date();
time.setHours(16);
time.setMinutes(46);
console.log(time.toLocaleString());