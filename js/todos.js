const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = document.querySelector('#todo');

let todos = [];

if(localStorage.getItem("todos") !== null){
    const parseTodo = JSON.parse(localStorage.getItem("todos"));
    todos = parseTodo;
    todos.forEach(paintToDo); // forEach 함수는 이 paintToDo 함수를 todos 각 배열의 요소마다 실행한다. todos의 각 요소를 paintToDo 파라미터로 넘겨줌.
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
    // event.target은 이벤트가 일어난 곳, 즉 여기서는 버튼을 가리키고, 
    // event.target.parentElement는 이벤트가 일어난 태그의 부모, 즉 여기서는 해당 버튼이 속한 li 태그를 가리킨다.
    const li = event.target.parentElement;
    todos = todos.filter(item => item.id != li.id);
    li.remove();
    saveTodo();
}

function paintToDo(newTodoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    li.id = newTodoObj.id;
    span.style.marginRight = "50px"
    span.innerHTML = newTodoObj.todo;
    
    delBtn.className = "delBtn";
    delBtn.innerHTML = 'delete';
    delBtn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        id: Date.now(),
        todo: newTodo
    }

    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodo();    
}

toDoForm.addEventListener("submit", handleToDoSubmit);