const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = 
      "flex justify-between items-center bg-white p-3 rounded shadow";

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.className = `flex-1 cursor-pointer ${
        todo.completed ? "line-through test-gray-400" : ""
      }`;

      span.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        renderTodos();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.className = "ml-3 hover:scale-110 transition";

      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        renderTodos();
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);

  });
}

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") return;
 
  todos.push({
    text: text,
    completed: false,
  });

  todoInput.value = "";
  renderTodos();  
}

addBtn.addEventListener("click", addTodo);
