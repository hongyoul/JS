// Q12. 문자열 배열과 특정 문자열을 입력 받아, 특정값이 있는지 확인하고 있으면 true 없으면 false를
// 반환하는 함수를 만드세요.
// 입력: ["apple", "banana", "cherry"], "banana"
// 반환: true
const access = ["apple", "banana", "cherry"]
const access2 = ["apple", "banana", "cherry"]
const access3 = ["apple", "banana", "cherry"]
const access4 = ["apple", "banana", "cherry"]


function fun(arr,value) {
  return arr.includes(value);
}
console.log(fun(["apple", "banana", "cherry"], "banana")); // true
console.log(fun(["apple", "banana", "cherry"], "grape")); // false

console.log() // 한칸 띄어쓰기


