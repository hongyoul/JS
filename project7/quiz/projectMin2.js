// addTask 함수: 사용자가 입력 필드에 입력한 작업을 목록에 추가하는 기능을 수행합니다. 
//               각 작업 항목에는 체크박스, 텍스트, 수정 버튼, 삭제 버튼이 포함

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


  // 텍스트를 체크박스, 수정 버튼, 삭제 버튼이 포함으로 변경코드
    // 체크박스 생성
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    // updateCounts 함수가 호출되어 완료 개수가 업데이트 함
    // 즉, 현재 목록의 총 항목 수와 완료된 항목 수를 계산하여 화면에 표시하는 함수
    checkbox.addEventListener('change', updateCounts); // 현재 코드에서는 체크박스 상태 변경 시 완료 개수 업데이트
  
    // 텍스트 노드 생성
    const textNode = document.createTextNode(taskText);
  
    // 수정 버튼 생성
    const editButton = document.createElement('button');
    editButton.textContent = '수정';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', (event) => {

      // event.stopPropagation()을 사용하여 클릭 이벤트가 <li> 요소로 전파되지 않도록 방지
      event.stopPropagation();

      // prompt 함수: 창이 표시되어 사용자가 새 텍스트를 입력하도록 요구
      const newText = prompt('수정할 내용을 입력하세요:', textNode.textContent);
      if (newText !== null) {
        textNode.textContent = newText;
      }
    });
  
    // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      newElement.remove();
      // updateCounts 함수를 호출하여 완료 및 총 개수를 업데이트
      updateCounts(); 
    });
  
    // <li> 요소에 체크박스, 텍스트 노드, 수정 버튼, 삭제 버튼 추가
    newElement.appendChild(checkbox);
    newElement.appendChild(textNode);
    newElement.appendChild(editButton);
    newElement.appendChild(deleteButton);
  


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

  // 총 개수 업데이트: 
  // #addList li를 사용하여 모든 작업 항목을 선택하고, 그 개수를 totalCountElement에 표시
  const tasks = document.querySelectorAll('#addList li');
  const totalTasks = tasks.length;

  // 완료 개수 업데이트: 
  // #addList li .task-checkbox:checked를 사용하여 완료된 항목의 체크박스를 선택하고, 그 개수를 completedCountElement에 표시
  const completedTasks = document.querySelectorAll('#addList li .task-checkbox:checked').length;

  totalCountElement.textContent = totalTasks;
  completedCountElement.textContent = completedTasks;
}

// 전체 삭제 기능

// deleteAllTasks 함수: 목록의 모든 작업 항목을 제거하고, 개수 정보를 업데이트
function deleteAllTasks() {
  const ul = document.getElementById('addList');
  ul.innerHTML = ''; // 모든 <li> 요소 제거
  updateCounts(); // 완료 및 총 개수 업데이트
}


// 이벤트 리스너 등록 부분

    // plus-button 클릭 시 addTask 호출: 사용자가 plus-button을 클릭하면 addTask 함수가 호출되어 새로운 작업이 목록에 추가
    document.getElementById('plus-button').addEventListener('click', addTask);

    // allDelete 클릭 시 deleteAllTasks 호출: 사용자가 allDelete 버튼을 클릭하면 deleteAllTasks 함수가 호출되어 목록의 모든 작업이 삭제
    document.getElementById('allDelete').addEventListener('click', deleteAllTasks);