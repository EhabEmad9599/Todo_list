// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const alert = document.querySelector('.alert');
const filter = document.querySelector('.filter-todo');

// Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck );
filter.addEventListener('click', filterOption);

// Functions

// add button 
function addTodo(event) {
  // Prevent form from submiting
  event.preventDefault();

  // To Do div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create List item
  const list = document.createElement('li');
  list.innerText = todoInput.value;
  list.classList.add('todo-item');
  todoDiv.appendChild(list);

  // Check mark button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn')
  todoDiv.appendChild(completeButton);

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  //Apend list
  if (todoInput.value === "") {
    alert.classList.add('show');
  } else {
    alert.classList.remove('show');
    todoList.appendChild(todoDiv);
  }
  // Clear input value
  todoInput.value = "";
}

// Delete & Check function
function deleteCheck(e) {
  const item = e.target;
  const todo = item.parentElement;
  // Delete todo
  if(item.classList[0] === 'delete-btn') {
    todo.classList.add('fade-out')
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }

  // check todo
  if(item.classList[0] === 'complete-btn') {
    todo.classList.toggle('completed')
  }  
}

// filter function
function filterOption(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch(e.target.value) {
      case 'all' :
        todo.style.display  = 'flex';
        break;
      case 'completed' :
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted' :
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;        
    }
  })
}
