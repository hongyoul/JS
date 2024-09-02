// 1. 사용자가 입력한 D-Day를 가져오는 함수
function getDday () {
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
};

// 2. 남은 시간을 계산하고 화면에 표시하는 함수
function count() {

  // 디데이 가져오기
  const dday = getDday();

  console.log("D-day: ", dday);


  // 남은시간 계산: 디데이 - 현재시간

  // 현재시간 가져오기, Date()사용
  const now = new Date();

  // 문자열을 Date객체로 만들기
  
  // 목표 날짜
  // const target = new Date(dday); 
  // console.log(target.toLocaleString());

  // 목표날짜를 자정으로(00:00:00) 설정
  const target = new Date(dday).setHours(0, 0, 0, 0);
  // console.log(target.toLocaleString());

  // 남은 시간: 목표시간 - 현재시간
  // 1s -> 1000ms
  const remaining = (target - now)/1000;
  console.log('남은시간: ', remaining);


}