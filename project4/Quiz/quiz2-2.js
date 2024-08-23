
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
var newText = "";

for ( let word of arr4) {
  // 각 단어를 순회하면서 단어의 첫글자만 대문자로 변경
  // 한글자씩 새로운 텍스트에 연결
  for ( let i in word) {
    if(i==0) {
      // 첫글자를 대문자로 변경하여 연결
      newText =newText + woed[i].toUpperCase();
    } else {
    //첫글자가 아닌경우 원래 문자 그대로 연결
    newText =newText+word[i];
  }
}
  // 단어와 단어 사이에 공백  추가
  newText = newText + " ";
}
console.log(newText);
