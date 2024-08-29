// 33. 문자열 "banaanaa"에서 'a' 문자가 하나 이상 연속된 부분을 모두 찾아 배열로 반환하세요.
// 문자열: "banana"
// 결과: [ 'a', 'aa', 'aa' ]

str1 = "banaanaa";

//문자가 하나 이상은 연속된부분은 + 기호 사용
let patt = /a+/g;

console.log(str1.match(patt));

// 34. 문자열 "abc123ABC"에서 대소문자 구분 없이 'abc'를 찾아 결과를 배열로 반환하세요.
// 문자열: "abc123ABC"
// 결과: ["abc", "ABC"]

str2 = "abc123ABC";

patt = /[abc]/gi;

let egn = str2.match(patt);

console.log(egn);
