// fetch: 서버와 데이터를 주고 받기 위한 API 호출 함수

// 인자: 서버주소(URL), HTTP 메소드, 전송할 데이터 등
// EGT방식은 생략가능

//fetch함수의 인자:
//첫번째인자: 서버의 주소(URL)
//두번째인자: 전송할 데이터와 HTTP 메소드 등을 포함하는 객체

//GET - 1번 게시물 조회

// fetch함수는 자체적으로 promise객체를 생성하여 반환하기 때문에
// 뒤에 then 또는 chtch함수를 이어서 사용할 수 있다.
fetch("http://192.168.0.67:8080/board/read?no=1")
.then( (response) => response.json() ) // 응답데이터를 객체로 변환
.then( (json) => {console.log(json)} ); // 변환한 데이터 출력

// // POST - 새로운 게시물 생성
fetch("http://192.168.0.67:8080/board/register", {
  method: "POST",
  body:  JSON.stringify(  
  {
    title: "가입인사",
    content: "안녕하세요~",
    writer: "user",
  }), // 전송할 데이터,

  headers: {
    "content-type": "application/json; charset=UTF-8" //JSON = application/json과 application/xml은 약속이다
  } // {전송할 데이터의 타입과 인코딩체계}
})
.then( (response) => response.text() ) // 응답이 단순한 덱스트일 때
.then( (text) => console.log(text) );

// PUT - 본인이 작성한 게시물 수정
fetch("http://192.168.0.67:8080/board/modify", {

  method: "PUT",
  body:  JSON.stringify(  
  {
    no: 21,
    title: "가입인사",
    content: "지연쌤 에어컨 줄여주세요!",
    writer: "핵간지남성민",
  }), // 전송할 데이터,

  headers: {
    "content-type": "application/json; charset=UTF-8"
  }
} )
.then( (response) => console.log(response.status));

// DELETE - 본인의 게시물 삭제
fetch("http://192.168.0.67:8080/board/remove?no=47", {
  method: "DELETE"
})
.then( (response) => console.log(response.status) );
  