// Q16. 방문 기록을 관리하는 프로그램을 만들어 주세요.
// 1) 방문 기록 배열을 만드세요.
// 2) 방문 날짜를 기준으로 배열을 오름차순으로 정렬하세요.
// 3) 방문 목적이 "회의"인 기록만 필터링하세요.
// 4) 필터링된 기록의 날짜를 연도, 월, 일로 변환하여 객체를 반환하세요.

const visits = [
  {name: "김철수", date: "2024-08-20", purpose: "회의"},
  {name: "이영희", date: "2024-08-18", purpose: "상담"},
  {name: "박지훈", date: "2024-08-21", purpose: "회의"},
  {name: "최유리", date: "2024-08-19", purpose: "교육"},
  {name: "정민호", date: "2024-08-17", purpose: "상담"},
];

// 2) 방문 날짜를 기준으로 배열을 오름차순으로 정렬하세요.
visits.sort(
  function (a, b) {
    return new Date(a.date) - new Date(b.date);
  }
);
// 정답: 방문 날짜 기준으로 오름차순 정렬하기
visits.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("정렬된 방문 기록:", visits);

console.log("정렬된 방문 기록: ", visits);

// 3) 방문 목적이 "회의"인 기록만 필터링하세요.
// 정답: 방문 목적 기준으로 필터링하기
// 방문 목적이 "회의"인 방문 기록만 포함
const filteredVisits = visits.filter((visit) => visit.purpose === "회의");
console.log("회의 목적의 방문 기록:", filteredVisits);

//버전2
const meeting = visits.filter(
  function (mt) {
    return mt.purpose == "회의";
  }
);

console.log("회의 목적의 방문 기록: ",meeting);


// 4) 필터링된 기록의 날짜를 연도, 월, 일로 변환하여 객체를 반환하세요.
// 정답: 방문 기록 객체 변환하기
const formattedVisits = filteredVisits.map((visit) => {
  const dateObj = new Date(visit.date); // Date 객체로 변환

  return {
    name: visit.name,
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
    purpose: visit.purpose,
  };
});
console.log("형식이 변환된 방문 기록:", formattedVisits);

//버전2
const koreanDate = meeting.map (
  function (kd) {
    const dateObj = new Date(kd.date); // Date 객체로 변환

    return{
      name: kd.name,
      year: dateObj.getFullYear(),
      month: dateObj.getMonth() + 1,
      day: dateObj.getDate(),
      purpose: kd.purpose,
    };
  }
);

console.log("형식이 변환된 방문 기록:",koreanDate);
