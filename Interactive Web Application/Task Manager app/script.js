document.addEventListener('DOMContentLoaded', () => {
    displayTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();

    taskInput.value = '';
}

function toggleTaskCompletion(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    const allTasksList = document.getElementById('allTasks');
    const completedTasksList = document.getElementById('completedTasks');
    allTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.classList.add('task');
        if (task.completed) {
            li.classList.add('completed');
            completedTasksList.appendChild(li);
        } else {
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Complete';
            toggleButton.classList.add('complete-button');
            toggleButton.onclick = () => toggleTaskCompletion(task.id);
            li.appendChild(toggleButton);
            allTasksList.appendChild(li);
        }
    });
}
