// Q10. 숫자 배열을 입력 받아, 배열에서 가장 큰 숫자를 반환하는 함수를 만드세요.
// 입력: [ -1, 5, 10, -3 ]
// 반환: 10
// const arr = [ -1, 5, 10, -3 ];
// const maxNumber = Math.max(...arr);
// console.log("Max:", maxNumber);

const arr1 = [ -1, 5, 10, -3 ];

  function arrayMax(arr1) {

    // 배열의 요소가 무조건 존재할 경우 max = arr[0]로 변경 가능
    var len = arr1.length, max = -Infinity;
    while (len--) {
      if (arr1[len] > max) {
        max = arr1[len];
      }
    }
    return max;
  };
  
  var array = [ -1, 5, 10, -3 ];
  
  console.log("Max:",  arrayMax(array));

  //정답
  function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      // -1 5
      // max vs arr[i]

      // 현재 max값을 배열의 요소로 교체(대입연산자 사용)
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  let result3 =  [ -1, 5, 10, -3 ];
  console.log(result3);
