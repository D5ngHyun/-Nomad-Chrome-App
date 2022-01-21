const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.addEventListener("click", deleteTodo);

  li.setAttribute("id", newTodo.id);
  button.innerText = "X";
  span.innerText = newTodo.text;

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function deleteTodo(e) {
  const { parentNode } = e.target;
  parentNode.remove();

  toDos = toDos.filter((todo) => todo.id !== parseInt(parentNode.id));

  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;

  parsedTodos.forEach((parse) => {
    paintTodo(parse);
    saveToDos();
  });
}
