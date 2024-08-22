// String 객체: 문자열을 생성하고 조작하는 함수를 제공\

// length: 문자열의 길이
let txt = "ABCDE";
console.log(txt.length);

let str = "안녕하세요 저는 둘리입니다.";

//indexOf: 특정 문자열이 존재하는지 확인하고, index(위치)를 반환
let result = str.indexOf("둘리");
console.log(result);
console.log(str.indexOf("또치")); // 못 찾으면 -1 반환

// lastIndexOf: 찾고가 하는 문자열이 둘 이상 발견되면,
// 제일 마지막에 발견된 문자열의 index(위치)를 반환
let dooli = "둘리 둘리 둘리";
console.log(dooli.lastIndexOf("둘리"));
console.log(dooli.lastIndexOf("또치"));

// slice(start, end): 문자열에서 해당부분을 잘라서 반환
let fruit = "사과, 바나나, 키위";
console.log(fruit.slice(9,11)); // 9번부터 11번 직전까지 (키=9번, 위=10번임으로 마지막 위치에 +1를 해야함)
console.log(fruit.slice(9)); // 9번부터 끝까지 반환 (end는 생략가능)

//substring(start, end): slice랑 비슷
console.log(fruit.substring(9, 11));
console.log(fruit.substring(11, 9));
// start와 end가 자동으로 바뀌며, 교환해서 처리

// replace: 특정 문자열을 다른 문자열로 교체하는 함수
console.log(fruit.replace("바나나", "딸기"));
//"사과, 바나나, 키위" -> "사과, 딸기, 키위"

// toUpperCase: 문자열을 모두 대문자로 변경하는 함수
// toLocaleLowerCase: 문자열을 모두 소문자로 변경하는 함수
let hello = "Hello World";
console.log(hello.toLocaleUpperCase()); // HELLO WORLD
console.log(hello.toLocaleLowerCase()); // hello world

//2개이상의 문자열을 연결하는 함수
let str1 ="Hello";
let str2 = "World";
let newStr = str1.concat(" ", str2); // ,로 추가
console.log(newStr); // Hello World

// trim(): 앞, 뒤 공백을 제거하는 함수(중간에 있는 공백은 제거가 안됨 X)
console.log("  Hello World  ".trim()); // Hello World

// 지정된 문자를 지정된 길이만큼 추가하는 함수
let number = "5";
console.log(number.padStart(4,0)); // 0005
console.log(number.padEnd(4,1)); // 5111

// 특정 인덱스에 있는 문자 하나를 반환하는 함수
console.log("Hello World".charAt(8)); // r

// 구분자를 기준으로 문자열을 쪼개는 함수
let birthday = "1997-06-12";
console.log(birthday.split("-")); // ['1997', '06', '12']

let nameMan = "철수, 훈이, 맹구, 치타";
console.log(nameMan.split(",")); // [ '철수', ' 훈이', ' 맹구', ' 치타' ]

// startsWith: 문자열이 특정 값으로 시작되는지 확인하는 함수 
//             (포함이 아니라 시작이기때문에 포함된것은 확인이 불가)
let url = "http://website.com";
if(url.startsWith("http://")) {
  console.log("올바른 형식의 사이트 주소입니다.")
} else {
  console.log("잘못된 형식의 사이트 주소입니다.")
}

// endsWith: 문자열이 특정 값으로 끝나는지 확인하는 함수
//           (포함이 아니라 시작이기때문에 포함된것은 확인이 불가)
let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  console.log("pdf 파일이 맞습니다!")
} else {
  console.log("pdf 형식의 파일이 아닙니다..")
}


// 문자열은 배열처럼 사용 가능. 인덱스 사용가능
let string = "Hello";
console.log(string[0]); // "H"
console.log(string[1]); // "e"

for(let str of string) { // 하나씩 전부 인덱스로 추출하려면 let 추출명(설정) of 변수명을 작성
  console.log(str);
}
// "H" "e" "l" "l" "o"

let love = "love my life";
for ( let lov of love) {
  console.log(lov);
}


// 추가
// repeat: x의 길이를 유동적으로 변경