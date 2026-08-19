let tasks = [];
const inputField = document.getElementById('todo-input');
const tasksList = document.getElementById('todo-container');


function renderTasks() {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('p');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${index + 1}. ${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        tasksList.appendChild(taskItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks();
    saveTasks();
}

function addTask() {
    const taskText = inputField.value.trim();
    if (!taskText) {
        alert('Please enter a task.');
        return;
    }
    if (taskText) {
        tasks.push(taskText);
        inputField.value = '';
        renderTasks();
        saveTasks();
    }
}
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('add-button').addEventListener('click', addTask);

renderTasks()