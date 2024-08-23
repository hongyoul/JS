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

