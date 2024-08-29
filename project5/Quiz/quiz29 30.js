// 29. 문자열 "I have 2 apples and 3 oranges."에서 숫자(0-9)를 모두 찾아 배열로 반환하세요.
// 문자열: "I have 2 apples and 3 oranges."
// 결과: ["2", "3"]

let str = "I have 2 apples and 3 oranges.";

patt = /\d/g;

let result = str.match(patt);

console.log(result);


// 30. 문자열 "Hello, JavaScript is fun!"에서 소문자 'a', 'e', 'i', 'o', 'u' 중 하나라도 포함된 문자를 모두 찾아 배열로 반환하세요.
// 문자열: "Hello, JavaScript is fun!";
// 결과: ["e", "o", "a", "a", "i", "i", "u"]

let str2 = "Hello, JavaScript is fun!";

patt = /[aeiou]/g;

let hrll = str2.match(patt);

console.log(hrll);
