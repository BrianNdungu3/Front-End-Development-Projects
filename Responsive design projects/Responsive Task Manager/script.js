const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});

function addTask(taskContent) {
    const li = document.createElement('li');
    li.textContent = taskContent;
    taskList.appendChild(li);
}

// Remove task
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
