// Q11. 학생의 성적을 관리하는 프로그램을 만들어 주세요.
// 1) 학생 목록 배열을 생성하세요.
// 2) 성적에 따라 학생에게 "A", "B", "C" 등급을 추가하세요.
// 3) 학생들을 성적을 기준으로 내림차순 정렬하세요.
// 4) 1학년 학생 중에서 등급이 "B"인 학생들을 찾아
// 점수 총합을 계산하세요.

const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년"},
  { name: "이영희", score: 92, gradeLevel: "2학년"},
  { name: "박지훈", score: 76, gradeLevel: "3학년"},
  { name: "최유리", score: 88, gradeLevel: "1학년"},
  { name: "정민호", score: 54, gradeLevel: "1학년"},
  { name: "한서연", score: 63, gradeLevel: "2학년"},
  { name: "장동건", score: 71, gradeLevel: "3학년"},
  { name: "오지호", score: 80, gradeLevel: "3학년"},
  ];

  let stud = students.map(
    function (se) {
      if (se.score >= 90 || se.score < 1000) {
        console.log(se, "grade: ", "A");
        
      } else if (se.score >= 70 || se.score < 90) {
        console.log(se, "grade: ", "B");
       
      } else if (se.score < 69) {
        console.log("grade: ", "C");
      }
      return {
        grade : se.
      }
    }
  );


  console.log(sexual);