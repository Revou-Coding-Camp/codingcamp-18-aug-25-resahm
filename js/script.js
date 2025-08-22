console.log("Todo List App Loaded");

let listTodo = [];

/// Validate Form Inputs
function validateForm() {
    /// DOM Form Elements
    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date-input");

    if (taskInput.value.trim() === '' || dueDateInput.value.trim() === '') {
        alert("Please enter a task and select a due date.");
    } else {
        addTodo(taskInput.value, dueDateInput.value);

        // Clear input setelah tambah
        taskInput.value = '';
        dueDateInput.value = '';
    }
}

/// Add a new Todo
function addTodo(task, dueDate) {
    listTodo.push({
        task: task,
        dueDate: dueDate
    });

    renderTodoList();
}

/// Render the Todo List
function renderTodoList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';

    if (listTodo.length === 0) {
        taskList.innerHTML = `<li class="text-gray-500 italic">No tasks yet</li>`;
        return;
    }

    for (let i = 0; i < listTodo.length; i++) {
        taskList.innerHTML += `
            <li class="flex justify-between items-center border-b py-2">
                <span>${listTodo[i].task} <span class="text-sm text-gray-500">(Due: ${listTodo[i].dueDate})</span></span>
                <button onclick="deleteTodo(${i})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm">Delete</button>
            </li>`;
    }
}

/// Delete specific Todo
function deleteTodo(index) {
    listTodo.splice(index, 1);
    renderTodoList();
}

/// Delete all Todos
function deleteAll() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        listTodo = [];
        renderTodoList();
    }
}

// Initial render
renderTodoList();
