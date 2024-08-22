let userList = [
  {
    firsName: "재석",
    lastName: "유",
    email: "yu@gmail.com",
  },
  {
    firsName: "종국",
    lastName: "김",
    email: "kim@gmail.com",
  },
  {
    firsName: "세찬",
    lastName: "양",
    email: "yang@gmail.com",
  },
  {
    firsName: "석진",
    lastName: "지",
    email: "ji@gmail.com",
  },
];

//map() 함수 : 배열의 각 요소를 변환하여 새 배열 생성
// 각 요소(user)를 새로운 객체로 변환

let newList = userList.map(
  function(user) {

    // 새로운 객체 (fullName 속성 추가)
    return{
      fullName: user.lastName +user.firsName,
      email: user.email
    };
  }
);

console.log(newList);

// 계산 과정
// 1. 
// 전) user = { firstName: "재석", lastName: "유", email: "yu@gmail.com" }
// 후) 변환 결과: { fullName: "유재석", email: "yu@gmail.com" }
// 2. 
// 전) user = { firstName: "종국", lastName: "김", email: "kim@gmail.com" }
// 후) 변환 결과: { fullName: "김종국", email: "kim@gmail.com" }
// 3. 
// 전) user = { firstName: "세찬", lastName: "양", email: "yang@gmail.com" }
// 후) 변환 결과: { fullName: "양세찬", email: "yang@gmail.com" }
// 4. 
// 전) user = { firstName: "석진", lastName: "지", email: "ji@gmail.com" }
// 후) 변환 결과: { fullName: "지석진", email: "ji@gmail.com" }