// 35. 문자열 "Hello, World! How are you today?"에서 대문자를 모두 찾아 배열로 반환하세요.
// 문자열: "Hello, World! How are you today?"
// 결과: ["H", "W", "H"]

str = "Hello, World! How are you today?";

patt = /[A-Z]/g;

let hello = str.match(patt);

console.log(hello);


// 36. 문자열 "2024-08-27"에서 연도, 월, 일을 각각 나누어 추출하세요.
// 문자열: "2024-08-27"
// 결과: ["2024-08-27", "2024", "08", "27"]

let str2 = "2024-08-27";

// \d: 숫자
//{숫자}: 앞에 패턴이 지정된 횟수만큼 반복됨
// (): 캡처 그룹으로, 일치하는 부분만 문자열로 묶어서 추출
//(\d{4}): 첫번째 그룹 (연도)
//(\d{2}): 두번째 그룹 (월)
//(\d{2}): 셋번째 그룹 (일)

let dateParts = str2.match(/(\d{4})-(\d{2})-(\d{2})/);
// 숫자 4개 - 숫자2개 - 숫자2개

console.log(dateParts); // ["2024-08-27", "2024", "08", "27"]
// 전체 문자열, 첫번째 그룹, 두번째 그룸, 세번째 그룹

// 일만 꺼내세요.
console.log(dateParts[3]);