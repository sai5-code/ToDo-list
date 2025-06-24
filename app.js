// app.js
document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create the new task element
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        // Append the span and delete button to the list item
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        // Add the list item to the task list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});
