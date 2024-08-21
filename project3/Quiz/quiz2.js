// Q4-1. 변수 x가 10보다 크고 20보다 작을 때 x를 출력하는 조건식을 작성하세요
const x = 12;
if (x > 10 && x < 20) {
  console.log(x);
}

// Q4-2. 문자열 str의 길이가 5보다 길면 str을 출력하는 조건식을 작성하세요
const str = "안녕하세요.";
if (str.length > 5) {
  console.log(str);
}


// Q4-3. 객체 person의 나이가 20살 미만이고 성별이 남자이면, "남학생입니다"를 출력하는 조건식을 작성하세요
const person = 18;

if (person < 20) {
  console.log("남학생입니다");
}

// Q4-4. 배열에 숫자 10이 포함되어 있으면 "배열에 10이 있습니다"를 출력하고,
// 없으면 "10이 배열에 없습니다"를 출력하는 조건식을 작성하세요

const num = [1,2,3,4];

if (num.includes(10)) {
  console.log( "배열에 10이 있습니다");
} else {
  console.log("10이 배열에 없습니다");
}



// Q5-1. 반복문을 사용하여 1부터 10까지 수 중에서 짝수만 출력하세요
// 결과: 2 4 6 8 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


// Q5-2. 반복문을 사용하여 1부터 10까지 수 중에서 홀수만 큰수부터 출력하세요
// 결과: 9 7 5 3 1

for (let i = 10; i >= 1; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}


// Q5-3. 반복문을 사용하여 1부터 10까지 수의 합을 출력하세요
// 결과: 55
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum+=i;
}

console.log(sum);

// Q5-4. 반복문을 사용하여 1부터 20까지 수 중에서 3의 배수 또는 5의 배수의 합을 구하세요
// 결과: 98
let sum1 = 0;

for(let i = 1; i <= 20; i++) {
  if(i%3 == 0 || i%5 == 0 ) {
  sum1+=i;  
      }
    }    

    console.log(sum1);

// Q6. 배열에 있는 모든 숫자를 더해서 합을 구하세요.
let sum3 = 0;

const arr = [1,'aa', true, 5, 10];

for (let i = 0; i <= arr.length; i++) {
  if (typeof arr[i] === 'number') {
  sum3 += arr[i];
  }
}
  console.log(sum3);

  // Q7-1. 5 X 3 크기의 사각형을 별(*)로 출력하세요.
  // 너비가 5이고 높이가 3입니다.
  for (let i = 1; i <=3; i++) {
    let x ="";
    for (let j = 1; j <= 5; j++) {
      x += "*";
    }
    console.log(x);
  }  


  // Q7-2. 5 X 5 크기의 삼각형을 별(*)로 출력하세요.

  for(let i = 1; i <= 5; i++)  {  // 층
    let x ="";
    for(let j = 1; j <= i; j++) { // 층의 별 개수
      x += "*";
    }
    console.log(x);
  }

