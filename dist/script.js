// Store tasks in an array
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

// Function to render tasks in the UI
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", task.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      toggleTaskCompletion(task.id);
    });

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

// Function to toggle task completion
function toggleTaskCompletion(taskId) {
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }
  });

  renderTasks();
}

// Function to delete a task
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}
