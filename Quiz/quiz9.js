// Q9. 두 개의 정수를 입력 받아, 그 사이의 모든 숫자의 합을 반환하는 함수를 만드세요.
// 입력: 3, 5
// 반환: 12 (3 + 4 + 5)

function solution(a, b) {
  if (a === b) {
      return a
  }

  let addNum = 0;
  if (a < b) {
      for(let i=a; i<b+1; i++){
          addNum += i;
        }
        return addNum;
      } else {
        for(let i=b; i<a+1; i++){
          addNum += i;
        }
        return addNum;
      }
    }
    const result2 = solution(3,5);
    console.log(result2);

