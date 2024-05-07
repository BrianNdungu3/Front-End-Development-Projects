const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearTasksBtn = document.getElementById('clear-tasks');

// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event
taskForm.addEventListener('submit', addTask);

// Remove task event
taskList.addEventListener('click', removeTask);

// Clear tasks event
clearTasksBtn.addEventListener('click', clearTasks);

// Add task
function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Please add a task');
        return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.href = '#';
    link.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = '';
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.tagName === 'LI') {
        if (confirm('Are you sure you want to delete this task?')) {
            e.target.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement);
        }
    }
}

// Clear tasks
function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}
