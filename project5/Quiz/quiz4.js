// Q4. 사람의 정보를 입력받아 출력하는 함수를 정의하세요.

function printPerson(a, b, ...c) {
  let ff = c.join(", ");
  console.log(
    a + "의 나이는" + b + "이고," + "취미는 " + ff + "입니다."
  );
}

printPerson("맹구", 5 , "축구", "독서", "영화 감상");
printPerson("유리", 5, "소꿉놀이");

// 정답
function printPerson(name, age, ...hobbies) {
  console.log(
    `${name}의 나이는 ${age}살이고, 취미는 ${hobbies.join(", ")}입니다.`
  );
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
//"맹구의 나이는 5살이고, 취미는 축구, 독서, 영화 감상입니다." 출력

printPerson("유리", 5, "소꼽놀이");
//"유리의 나이는 5살이고, 취미는 소꼽놀이입니다." 출력