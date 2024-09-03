
// 타이머 실행시 생성되는 interval ID 저장 배열
let intervalIdArr = [];

// 스토리지에 저장된 디데이 꺼내기
let savedDate = localStorage.getItem("saved-date");

// 브라우저가 처음 로드 할때, 저장된 날짜가 있다면  바로 타이머 시작하기!

// 1. 기본식
// if (typeof savedDate != "undefined") {
//   console.log(savedDate); 
//   //  있으면 스토리지에 '2024-9-3'같은 형식으로 나옴
// } else {
//   console.log("저장된 날짜가 없습니다.");
//   // 없다면 스토리지에 'undefined'가 나옴
// }

// 2. typeof savedDate가 obj이고 빈값이 null이면 
if (savedDate != "null") {
  console.log(savedDate); 
  // 이전에 설정한 디데이를 전달하여 타이머 시작!
  start(savedDate);
} else {
  console.log("저장된 날짜가 없습니다.");
}


// 1. 사용자가 입력한 D-Day를 가져오는 함수
function getDday () {
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
};

// 2. 남은 시간을 계산하고 화면에 표시하는 함수
function count(dday) {

  /* 나중에 dday 매개변수로 가져오고 디데이 가져오기 지우기*/
  // 디데이 가져오기
  // const dday = getDday();

  // console.log("D-day: ", dday);


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
  const remaining = (target - now)/1000; // remaining은 남은시간
  // console.log('남은시간: ', remaining); 

  // 사용자가 잘못된 날짜를 입력했으면 함수를 강제로 종료
  // 디데이가 현재 날짜보다 빠른 경우 or 올바른 날짜가 아닌 경우
  if (remaining <=0 || isNaN(remaining)) {
    console.log("잘못된 날짜가 들어왔습니다..");
    return;
  }

  // 남은 시간을 (일, 시간, 분, 초)로 계산하기
  const remainObj = { // floor은 소수점 자리를 제거하는 함수
    date: Math.floor(remaining / 3600 / 24),
    hour: Math.floor(remaining / 3600) % 24, //하루를 초과하는 나머지 시간
    min: Math.floor(remaining / 60) % 60, //1시간을 초과한 나머지 분
    sec: Math.floor(remaining) % 60, //1분을 초과한 나머지 초
  }
  // console.log(remainObj.date, remainObj.hour, remainObj.min, remainObj.sec);

  // 남은시간을 화면에 표시
  // document.getElementById("").textContent = 남은시간;
  document.getElementById("day").textContent = remainObj.date;
  document.getElementById("hour").textContent = remainObj.hour;
  document.getElementById("min").textContent = remainObj.min;
  document.getElementById("sec").textContent = remainObj.sec;

};

// 타이머 시작하는 함수

// 함수 호출시 전달받은 인자에 따라 분기문으로 처리
// 전달받은 인자가 있다면? 브라우저 로드 시 타이머가 실행된 것
// 없으면? 사용자가 새로운 D-Day를 입력한 후 실행된 것


function start(prevDate) {

  /* 나중에 추가 부분(start) */
  let dday = null;

  // 사용자가 디데이를 입력하고 시작 버튼 클릭
  if (prevDate == undefined) {

    dday = getDday();

    // 새로운 디데이를 스토리지에 설정
    localStorage.setItem('saved-date', dday);

  } else {
    // 브라우저 로드 시 실행
    dday =prevDate;

  }

  /* 나중에 추가 부분(end) */




    //사용자가 입력한 디데이 가져오기
    // let dday = getDday();

    // 새로운 디데이를 스토리지에 설정
    // localStorage.setItem('saved-date', dday);

    // 반복문으로 남은 시간 변경하기
    // for (let i = 0; i < 10; i++) {
    //   count();
    // } => 시간이 실실간으로 변화지 않음

    // setInterval 함수를 사용하여 1초(1000ms) 간격으로 타이머 설정
    // setInterval(반복적으로 처리할 함수, 반복주기);

    // 타이머  ID값 반환
    const intervalId = setInterval(()=>{
      count(dday);
      /*여기도 나중에 count(); ->  count(dday); 변경*/
    }, 1000);

    console.log('타이머아이디', intervalId);

    // 생성된 타이머 아이디를 배열에 추가
    intervalIdArr.push(intervalId);
  }


  // 타이머를 중지하는 함수
  function stop() {
    // 모든 타이머 중지
    for(let i = 0; i < intervalIdArr.length; i++) {

     // 타이머를 종료하는 함수
      let id = intervalIdArr[i];
      clearInterval(id);
    }
    // 배열 비우기
    intervalIdArr = [];
  }


  // 타이머를 초기화하는 함수
  function reset() {

    // 모든 타이머 삭제
    stop();

    // 남은 시간을 0으로 초기화
    document.getElementById("day").textContent = "0";
    document.getElementById("hour").textContent = "0";
    document.getElementById("min").textContent = "0";
    document.getElementById("sec").textContent = "0";

    // 스토리지에서 날짜 삭제
    localStorage.removeItem('saved-date');
  }