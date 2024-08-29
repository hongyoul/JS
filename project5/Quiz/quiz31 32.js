// 31. 문자열 "Welcome to the world of coding!"에 'coding'라는 단어가 포함되어 있는지 확인하세요.
// 문자열: "Welcome to the world of coding!"
// 결과: true

let str = "Welcome to the world of coding!";

const regex = /coding/; 

console.log(regex.test(str));

// 32. 문자열 "JavaScript is powerful"에서 'is'라는 단어가 처음으로 등장하는 위치의 인덱스를 반환하세요.
// 문자열: "JavaScript is powerful"
// 결과: 11

let str2 = "JavaScript is powerful"

console.log(str2.search("is"));