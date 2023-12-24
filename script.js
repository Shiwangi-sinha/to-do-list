document.addEventListener("DOMContentLoaded", function(){
const AddTask = document.getElementById("AddTask");//input field
const taskList = document.getElementById("taskList");//button
function addTask() {
    var taskInput = prompt('Enter your task:');
    if (taskInput) {
        // Create a new list item
        var listItem = document.createElement('li');

        // Set the text content of the list item
        listItem.textContent = taskInput;
        
        // Create a delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            listItem.remove();
        };

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        var taskList = document.getElementById('taskList');
        taskList.appendChild(listItem);
    }
}

setInterval(addTask, 5000);
});