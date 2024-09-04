

function addTask () {
  const inputField = document.getElementById("list-add");
  // 입력된 덱스트 가져오기
  const taskText = inputField.value.trim();

  // 입력필드에 빈칸일 시  alert창(경고 메시지)을 생성한다.
  if (taskText === "") {
    alert("입력필드을 작성해주세요");
    return;
  }

  // 입력필드작성시 HTML폴더 ul태그 안에 div 태그 만드는 식
  // 새로운 task item을 생성
  const newElement = document.createElement('div');
  newElement.className = 'task-item';



  // ↓↓텍스트를 체크박스, 수정 버튼, 삭제 버튼이 포함으로 변경코드 부분↓↓

  // 체크박스 생성
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

  // updateCounts 함수가 호출되어 완료 개수가 업데이트 함
  // 즉, 현재 목록의 총 항목 수와 완료된 항목 수를 계산하여 화면에 표시하는 함수
    checkbox.addEventListener('change', ()=>{
      newElement.classList.toggle('completed', checkbox.checked);
      updateCounts();
    }); 
  
  // 텍스트 입력 필드 생성
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = taskText;
    textInput.className = 'task-text';
    textInput.disabled = true;



  // 수정 버튼 생성
    const editButton = document.createElement('button');
    editButton.textContent = '수정';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', () => {

      if (editButton.textContent === '수정') {
        // 텍스트 필드를 수정 가능 상태로 전환
        textInput.disabled = false;
        textInput.focus();
        editButton.textContent = '저장';

    } else if (editButton.textContent === '저장') {
      // 텍스트 필드를 수정 불가능 상태로 전환
        const newText = textInput.value.trim();
        if (newText !== "") {
        textInput.value = newText;
        textInput.disabled = true;
        editButton.textContent = '수정';
      }
    }
  });


  
  // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => { 
      newElement.remove();
      // updateCounts 함수를 호출하여 완료 및 총 개수를 업데이트
      updateCounts(); 
    });
  
    // <li> 요소에 체크박스, 텍스트 노드, 수정 버튼, 삭제 버튼 추가
    newElement.appendChild(checkbox);
    // 텍스트 노드: textNode를 textInput으로 수정하여 올바른 변수명을 사용해야 함
    newElement.appendChild(textInput);
    newElement.appendChild(editButton);
    newElement.appendChild(deleteButton);
  


  // ul에 새로운 항목 추가
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
  const tasks = document.querySelectorAll('#addList .task-item');
  const totalTasks = tasks.length;

  // 완료 개수 업데이트: 
  // updateCounts 함수: #addList li를 #addList .task-item으로 변경하여 올바른 요소를 선택하도록 수정
  const completedTasks = document.querySelectorAll('#addList .task-item .task-checkbox:checked').length;

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