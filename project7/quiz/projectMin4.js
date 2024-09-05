
    // 데이터 저장 함수
    function saveToLocalStorage() {
      const tasks = document.querySelectorAll('#addList .task-item');
      const taskData = Array.from(tasks).map(task => ({
        text: task.querySelector('.task-text').value,
        checked: task.querySelector('.task-checkbox').checked
      }));
      
      const totalTasks = tasks.length;
      const completedTasks = document.querySelectorAll('#addList .task-item .task-checkbox:checked').length;

      localStorage.setItem('tasks', JSON.stringify(taskData));
      localStorage.setItem('totalCount', totalTasks);
      localStorage.setItem('completedCount', completedTasks);
    }

    // 데이터 로드 함수
    function loadFromLocalStorage() {
      const tasksData = JSON.parse(localStorage.getItem('tasks')) || [];
      const totalTasks = parseInt(localStorage.getItem('totalCount'), 10) || 0;
      const completedTasks = parseInt(localStorage.getItem('completedCount'), 10) || 0;

      tasksData.forEach(taskData => {
        const newElement = document.createElement('div');
        newElement.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = taskData.checked;

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = taskData.text;
        textInput.className = 'task-text';
        textInput.disabled = true;

        const editButton = document.createElement('button');
        editButton.textContent = '수정';
        editButton.className = 'edit-button';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.className = 'delete-button';

        newElement.appendChild(checkbox);
        newElement.appendChild(textInput);
        newElement.appendChild(editButton);
        newElement.appendChild(deleteButton);

        document.getElementById('addList').appendChild(newElement);

        checkbox.addEventListener('change', () => {
          newElement.classList.toggle('completed', checkbox.checked);
          updateCounts();
        });

        editButton.addEventListener('click', () => {
          if (editButton.textContent === '수정') {
            textInput.disabled = false;
            textInput.focus();
            editButton.textContent = '저장';
          } else if (editButton.textContent === '저장') {
            const newText = textInput.value.trim();
            if (newText !== "") {
              textInput.value = newText;
              textInput.disabled = true;
              editButton.textContent = '수정';
            }
          }
        });

        deleteButton.addEventListener('click', () => {
          newElement.remove();
          updateCounts();
        });
      });

      document.getElementById('total-count').textContent = totalTasks;
      document.getElementById('completed-count').textContent = completedTasks;
    }

    // addTask 함수 수정
    function addTask() {
      const inputField = document.getElementById("list-add");
      const taskText = inputField.value.trim();

      if (taskText === "") {
        alert("입력필드를 작성해주세요");
        return;
      }

      const newElement = document.createElement('div');
      newElement.className = 'task-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';

      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.value = taskText;
      textInput.className = 'task-text';
      textInput.disabled = true;

      const editButton = document.createElement('button');
      editButton.textContent = '수정';
      editButton.className = 'edit-button';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.className = 'delete-button';

      newElement.appendChild(checkbox);
      newElement.appendChild(textInput);
      newElement.appendChild(editButton);
      newElement.appendChild(deleteButton);

      const ul = document.getElementById('addList');
      ul.appendChild(newElement);

      inputField.value = '';
      updateCounts();
      saveToLocalStorage(); // 데이터 저장
    }

    // deleteAllTasks 함수 수정
    function deleteAllTasks() {
      const ul = document.getElementById('addList');
      ul.innerHTML = '';
      updateCounts();
      saveToLocalStorage(); // 데이터 저장
    }

    // 완료 개수와 총 개수 업데이트 부분
    function updateCounts() {
      const totalCountElement = document.getElementById('total-count');
      const completedCountElement = document.getElementById('completed-count');

      const tasks = document.querySelectorAll('#addList .task-item');
      const totalTasks = tasks.length;
      const completedTasks = document.querySelectorAll('#addList .task-item .task-checkbox:checked').length;

      totalCountElement.textContent = totalTasks;
      completedCountElement.textContent = completedTasks;

      saveToLocalStorage(); // 데이터 저장
    }

    // 페이지 로드 시 데이터 로드
    window.addEventListener('load', loadFromLocalStorage);

    // 이벤트 리스너 등록 부분
    document.getElementById('plus-button').addEventListener('click', addTask);
    document.getElementById('allDelete').addEventListener('click', deleteAllTasks);