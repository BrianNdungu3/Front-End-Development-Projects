document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const subjectInput = document.getElementById('subjectInput').value.trim();
    const hoursInput = parseFloat(document.getElementById('hoursInput').value);

    if (subjectInput === '' || isNaN(hoursInput) || hoursInput <= 0) {
        alert('Please enter valid task details.');
        return;
    }

    const task = { subject: subjectInput, hours: hoursInput };
    saveTask(task);
    displayTasks();
}

function saveTask(task) {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.subject} - ${task.hours} hours</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
