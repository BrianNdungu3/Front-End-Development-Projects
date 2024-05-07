function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerText = taskInput.value;
        li.onclick = function() {
            this.classList.toggle("completed");
        };

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function(event) {
            event.stopPropagation();
            this.parentNode.remove();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
