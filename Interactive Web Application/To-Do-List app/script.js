function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.innerHTML = '<span class="task-text">' + taskText + '</span> <button class="delete-button" onclick="deleteTask(this)">X</button>';
    taskList.appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}
