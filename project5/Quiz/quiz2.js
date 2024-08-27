// Q2. 학생의 영어, 수학, 국어 점수를 입력받아 평균점수를 출력하는 함수를 정의하세요.
function calcuateGrade1(a,b,c=0,d=0) {
  
  var sum = (b+c+d)/3;
  
  console.log(a + "님의 평균 성적은 " + sum.toFixed(2) + "점 입니다.") 
  // toFixed() 사용해서 원하는 자리수 추출
}

calcuateGrade1("철수",85,90,78);
calcuateGrade1("훈이",80)

// 정답
function calculateGrade(name, eng = 0, math = 0, kor = 0) {
  // 평균 점수 계산
  const sum = eng + math + kor;
  const avg = sum / 3;

  // 평균 점수는 소수점 2번째 자리까지만 출력
  console.log(`${name}님의 평균 성적은 ${avg.toFixed(2)}점입니다.`);
}

calculateGrade("철수", 85, 90, 78); //"철수님의 평균 성적은 84.33점입니다." 출력
calculateGrade("훈이", 80); //"훈이님의 평균 성적은 26.67점입니다." 출력