function addTask () {
  const inputField = document.getElementById("list-add");
  // 입력된 덱스트 가져오기
  const taskText = inputField.value.trim();

  // 입력필드에 빈칸일 시  alert창(경고 메시지)을 생성한다.
  if (taskText === "") {
    alert("입력필드을 작성해주세요");
    return;
  }

  // 입력필드작성시 HTML폴더 ul태그 안에 li 태그 만드는 식
  const newElement = document.createElement('li');

  // 단순히 텍스트만 추가되는 코드 newElement.textContent = taskText;
  newElement.textContent = taskText;

  // 완료/미완료 상태 토글 기능 추가(클릭 이벤트)
  // 토글(toggle): 하나의 설정 값에서 다른 값으로 변경하는 것을 의미
  newElement.addEventListener('click', ()=>{
    newElement.classList.toggle('completed');
    updateCounts(); // // 완료 및 총 개수 업데이트
  });




  // <ul> 태그에 새로 생성한  <li>을 지식으로 추가
  const ul = document.getElementById('addList');
  ul.appendChild(newElement);

    // 입력 필드 초기화
    inputField.value = '';
    updateCounts(); // 완료 및 총 개수 업데이트
}



// 완료 개수와 총 개수 업데이트 부분
function updateCounts() {
  
  //총 개수 엘리먼트 설정
  const totalCountElement = document.getElementById('total-count');

  // 완료개수 엘리먼트 설정
  const completedCountElement = document.getElementById('completed-count');


  // querySelectorAll 함수란
  // 기능: CSS 선택자 #addList li를 사용하여 
  //       id가 'addList'인 <ul> 요소 안에 있는 모든 <li> 요소를 선택합니다.
  // 용도: 할 일 목록에 있는 모든 항목을 선택하기 위해 사용됩니다. 
  //       이 메서드는 NodeList를 반환합니다.
  const tasks = document.querySelectorAll('#addList li');
  const totalTasks = tasks.length;
  const completedTasks = document.querySelectorAll('#addList li.completed').length;

  totalCountElement.textContent = totalTasks;
  completedCountElement.textContent = completedTasks;
}

// 전체 삭제 기능
function deleteAllTasks() {
  const ul = document.getElementById('addList');
  ul.innerHTML = ''; // 모든 <li> 요소 제거
  updateCounts(); // 완료 및 총 개수 업데이트
}


// 이벤트 리스너 등록 부분

    // plus-button 버튼을 클릭하면 addTask 함수가 호출되어 할 일이 추가하는 코드부분
    document.getElementById('plus-button').addEventListener('click', addTask);

      // *설명*
        // addTask와 deleteAllTasks는 이벤트 리스너를 통해 호출되는 함수
        // addTask함수 : 사용자가 새로운 할 일을 추가하는 기능을 수행
        //              addTask 함수는 사용자가 입력 필드에 작성한 할 일 텍스트를 읽어와서, 이를 목록에 새로운 항목으로 추가

    // allDelete 버튼을 클릭하면 deleteAllTasks 함수가 호출되어 모든 할 일이 삭제(즉, 전체 삭제)
    document.getElementById('allDelete').addEventListener('click', deleteAllTasks);