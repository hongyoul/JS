// async/await: 비동기함수 API를 호출이 완료될 때까지 기다리는 방법

async function func1() {

  // await: 응답이 올때까지 대기
  const response = await fetch("https:jsonplaceholder.typicode.com/posts/1"); // async+await가 세트임

  // 응답메세지에 담긴 결과데이터를 json객체로 반환
  const resJson = await response.json();

  console.log(resJson); // 변환된 데이터 출력
}

func1();