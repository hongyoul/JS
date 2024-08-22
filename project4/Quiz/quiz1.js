// Q1. 이메일의 도메인을 확인하세요.
// 이메일: user@naver.com
// 도메인: naver.com
let email = "user@naver.com";
if (email.endsWith("naver.com")) {
  console.log("naver.com 이메일이 맞습니다!")
} else {
  console.log("naver.com 이메일이 아닙니다..")
}

// 정답
// 이메일 주소에서 "@"뒤에 오는
//1.
const emailDomain1 = email.split("@")[1];
console.log(emailDomain1);
//2.
const arr= email.split("@");
const emailDomain2 = arr[1];
console.log(emailDomain2);


// Q2. 다음 메시지에 금지어가 있으면 XXX로 변경하여 출력하고, 없으면 그대로 출력하세요.
// 금지어: “나쁜, 더러운”
// 메시지: “저 친구는 나쁜 친구야. 정말 더러운 사람 같아”
// 결과: “저 친구는 XX 친구야. 정말 XXX 사람 같아”
let forbiddenWords = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";
console.log(forbiddenWords.replace("나쁜", "xx").replace("더러운", "xx"));


// 정답
const forbiddenWords2 = ["나쁜", "더러운"];
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";

for (let word of forbiddenWords2) {
  //금지어를 "XX"로 대체
  // repeat: x의 길이를 유동적으로 변경
  message = message.replace(word, "X".repeat(word.length));
  }
  console.log(message)


// Q3. 파일의 확장자가 ‘.jpg’ ‘.png’ ‘.gif’ 이 아니라면 “지원되지 않는 파일 형식입니다”라는 메시지를 출력하세요
// 파일명: “사과.txt”
// 결과: “지원되지 않는 파일 형식입니다”
let txt1 = "사과.txt";
if (txt1.endsWith(".jpg")) {
  console.log("jpg 파일이 맞습니다!")

} else if (txt1.endsWith(".png")) {
  console.log("png 파일이 맞습니다!")

} else if (txt1.endsWith(".gif")){
  console.log("gif 파일이 맞습니다!")
} else {
  console.log("지원되지 않는 파일 형식입니다")
}


// 정답
const allowedExtensions = ['.jpg', '.png', '.gif'];

const filename = "사과.txt"

// 파일의 확장자 추출
const index = filename.lastIndexOf("."); // 2
const extension = filename.slice(index); //.txt(2번부터 끝까지)

// 확장자가 지원되지 않는 경우 메시지 출력
if (allowedExtensions.includes(extension)) {
  console.log("지원되지 않는 파일 형식입니다");
} else {
  console.log("지원되는 파일 형식 입니다.");
}


// Q4. 문자열의 모든 자리수를 더해서 합을 구하세요.
// 문자열: “0112233“
// 결과: 12
let str2 = "0112233";
let sum1 = 0;

// s: "0" "1" "1" "2" "2" "3" "3"
for (let s of str2) {
  let num = parseInt(s); // "0" steing
  console.log(typeof num, num); // "0" -> 0
  sum1 = sum1 + num;
  // 두항이 모두 숫자이기 때문에
  // + 기호는 더하기 연산자!
}

console.log(sum1); //합계

  //잘못된 코드~!
    // let result = 0;
    // for (let s of str) {
    //   result = result + s // +: 문자열 결합연산자가 된다.
    // }
    // console.log(result); //합계


// Q5. 배열의 요소들 중 숫자로 취급할 수 있는 값들을 모두 더한 합을 출력하세요.
// 단, 배열에는 다양한 자료형이 포함될 수 있습니다.
// isNaN: 문자열이 숫자로 변환가능한지 확인하는 함수
// 배열: [1,”aa”, true, “5”, 10]
// 결과: 17
// trun = 1, false = 0의 값을 가진다. 


const arr1 = [1, "aa", true, "5", 10];

let sum = 0;

// v: 1, "aa", true, "5", 10 
for (let v of arr1) {

  // 배열의 요소를 숫자로 변환할 수 있는지 확인
  if (!isNaN(v)) {
    // console.log(v, "변환가능");
    if(typeof v == "number" || typeof v == "boolean"){ //1, true(1), 10
      sum = sum + v; 
    } else if (typeof v == "string") {  //"5"
      sum = sum + parseInt(v); 
    } 
  }

}

console.log(sum); //합계




// Q6. 주어진 문자열에서 연속된 동일한 문자들이 몇 번 반복되는지 세고, 이를 “문자+숫자” 형식으로 압축하세요.
// 문자열: aaabbc
// 결과: a3b2c1

//주어진 문자열에서 연속된 동일한 문자들이 몇 번 반복되는지 세고, 이를 “문자+숫자” 형식으로 압축하세요.

const str = "aaabbc";
let compressed = ""; //압축된 문자(결과을 담을 문자열 함수와)
let count = 1; //현재 문자가 몇번 반복되었는지 카운트 (결과을 담을 숫자형 함수를 생성한다 )

for (let i = 0; i < str.length; i++) {
  //현재 문자가 다음문자와 같은지 비교
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    // 같지 않으면 카운트 종료. 압축된 문자 추가
    compressed = compressed + str[i] + count; //compressed의 연결
    // 카운트 초기화
    count = 1;
  }
}

console.log(compressed); // 출력: a3b2c1

// 풀이과정 해석
// 초기 상태:
// str = "aaabbc"
// compressed = "" (빈 문자열) 
// count = 1

// i = 0: <- 인덱스번호
// str[0] = 'a'
// count = 2로 증가 (다음 문자도 'a'라서)
// compressed: "" (변경 없음)

// i = 1:
// str[1] = 'a'
// count = 3로 증가 (다음 문자도 'a'라서)
// compressed: "" (변경 없음)

// i = 2:
// str[2] = 'a'
// count = 1로 초기화 (다음 문자가 'b'로 바뀜)
// compressed: "a3"

// i = 3:
// str[3] = 'b'
// count = 2로 증가 (다음 문자도 'b'라서)
// compressed: "a3" (변경 없음)

// i = 4:
// str[4] = 'b'
// count = 1로 초기화 (다음 문자가 'c'로 바뀜)
// compressed: "a3b2"

// i = 5:
// str[5] = 'c' (마지막문자)
// compressed = "a3b2c1"

// 최종 상태:
// compressed = "a3b2c1"