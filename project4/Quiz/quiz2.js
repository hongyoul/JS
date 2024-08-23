// Q7. 배열의 요소 중에서 20보다 큰 숫자를 찾고, 각 요소에 2를 곱한 결과를 만드세요.
// 배열: [10, 15, 20, 25, 30]
// 결과: [50, 60]
let arr = [10, 15, 20, 25, 30];

let psaa = arr.filter (

function (pss) {
  return pss > 20;
  }
);
console.log(psaa);

let multiply = psaa.map(
  function (mp) {
    return mp * 2
  }
);

console.log(multiply);


// Q8. 주어진 문자열에서 각 단어의 첫 글자를 대문자로 변환하세요.
// 문자열: “hello world welcome to programming”
// 새로운 문자열: “Hello World Welcome To Programming”
// let hello = "hello world welcome to programming"

// let strUp = hello.split(" ");

// let he1 = strUp.slice(0,1)
// let he1to = he1.toUpperCase();
// let he2 = strUp.slice(1);

// let wo1 = strUp.slice(6,7);
// let wo1to = wo1.toUpperCase();
// let wo2 = strUp.slice(7,12);

// let we1 = strUp.slice(0,1).toUpperCase();
// let we1to = we1.toUpperCase();
// let we2 = strUp.slice(1);
// let to1 = strUp.slice(20,21).toUpperCase();
// let to2 = strUp.slice(1);
// let pr1 = strUp.slice(23,24).toUpperCase();
// let pr2 = strUp.slice(1);

// let strAdd = he1to.concat(" ", he2);
// console.log = (strAdd);


//문자열에서 각 단어의 첫 글자를 대문자로 변환하세요.

// 정답
// 버전1
var text = "hello world welcome to programming";

// 공백을 기준으로 분할하여 배열로 변환
var arr4 = text.split(" ");
var newArr = [];

// 각 단어의 첫글자만 대문자로 변경하고, 다시 새로운 배열에 추가
for (let word of arr4) {
  newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
}

// 새로운 배열을 공백을 구분자로 문자열로 합치기
var newText = newArr.join(" ");
console.log(newText);

//버전2
for ( let word of arr4) {
  // 각 단어를 순회하면서 단어의 첫글자만 대문자로 변경
  // 한글자씩 새로운 텍스트에 연결
  for ( let i in word) {
    if(i==0) {
      // 첫글자를 대문자로 변경하여 연결
      newText =newText + woed[i].toUpperCase();
    } else{
    //첫글자가 아닌경우 원래 문자 그대로 연결
    newText =newText+word[i];
  }
}
  // 단어와 단어 사이에 공백  추가
  newText = newText + " ";
}
console.log(newText);

// Q9. 배열에서 문자열의 길이가 5보다 긴 요소만 찾아 대문자로 변환하세요.
// 배열: ["apple", "banana", "grape", "kiwi", "watermelon"]
// 결과: ["BANANA", "WATERMELON"]
var arr2 =  ["apple", "banana", "grape", "kiwi", "watermelon"];

// 문자열의 길이가 5보다 긴 배열 찾기
var five = arr2.filter(
  function (fi) {
    return fi.length > 5;
  }
);
console.log(five);

// 배열을 대문자로 변환하기 위해 스트링으로 변환
var str = five.toString();
console.log(str.toLocaleUpperCase());

var str2 = str.toLocaleUpperCase()

// 스트링을 배열로 다시 변환
var arr3 = str2.split(",");
console.log(arr3);