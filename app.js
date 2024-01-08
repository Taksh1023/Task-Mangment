document.addEventListener('DOMContentLoaded', function () {
    
const workButton = document.getElementById('workButton');
const familyButton = document.getElementById('familyButton');
const holidayButton = document.getElementById('holidayButton');

// Add click event listeners to each button
workButton.addEventListener('click', () => setActiveSituation('Work'));
familyButton.addEventListener('click', () => setActiveSituation('Family'));
holidayButton.addEventListener('click', () => setActiveSituation('Holiday'));

// Function to set the active situation and update UI
function setActiveSituation(situation) {
    // Remove 'active' class from all buttons
    workButton.classList.remove('active');
    familyButton.classList.remove('active');
    holidayButton.classList.remove('active');

    // Add 'active' class to the clicked button
    if (situation === 'Work') {
        workButton.classList.add('active');
    } else if (situation === 'Family') {
        familyButton.classList.add('active');
    } else if (situation === 'Holiday') {
        holidayButton.classList.add('active');
    }
     
    

    // Update the displayed situation or perform other actions as needed
    // For example, you can update the tasks based on the selected situation
    updateTasksBasedOnSituation(situation);
}

// Function to update tasks based on the selected situation
function updateTasksBasedOnSituation(situation) {
    // You can implement logic to fetch and display tasks for the selected situation
    // This can include making API calls or updating the UI based on the selected situation
}
    
    // Fetch today's date
    const currentDateElement = document.getElementById('currentDate');
    const currentDayElement = document.getElementById('currentDay');

    // Function to update the date and day
    function updateDateAndDay() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateElement.innerText = currentDate.toLocaleDateString('en-US', options);
        currentDayElement.innerText = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    }

    // Initial update of date and day
    updateDateAndDay();

    // Sample to-do list data
    let sampleTasks = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        // Add more tasks as needed
    ];

    const taskList = document.getElementById('taskList');

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        sampleTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.id = `task-${task.id}`;

            // Create a div for the task content
            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');
            taskContent.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span>${task.text}</span>
                <button class="edit-button">✏️</button>
                <button class="delete-button">🗑️</button>
            `;

            // Create a div for the completed label
            const completedLabel = document.createElement('div');
            completedLabel.classList.add('completed-label');
            completedLabel.innerText = 'Completed';

            // Append the task content and completed label to the list item
            listItem.appendChild(taskContent);
            listItem.appendChild(completedLabel);

            // Toggle the display of the completed label based on task completion
            completedLabel.style.display = task.completed ? 'block' : 'none';

            taskList.appendChild(listItem);
        });
    }

    // Event listener for changing the task status (completed or not)
    taskList.addEventListener('change', function (event) {
        if (event.target.type === 'checkbox') {
            const listItem = event.target.closest('.todo-item');
            const taskId = parseInt(listItem.id.split('-')[1]);

            // Update the task status in the sampleTasks array
            const task = sampleTasks.find(task => task.id === taskId);
            if (task) {
                task.completed = event.target.checked;
                renderTasks();
            }
        }
    });

    // Initial rendering of tasks
    renderTasks();

    // Event listener for edit buttons
    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-button')) {
            const listItem = event.target.closest('.todo-item');
            const taskText = listItem.querySelector('span').innerText;
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null) {
                // Implement functionality to update the task
                // For example, update the task in the sampleTasks array
                // and then re-render the tasks
                const taskId = parseInt(listItem.id.split('-')[1]); // Extract the task ID
                sampleTasks = sampleTasks.map(task =>
                    task.id === taskId ? { ...task, text: newTaskText } : task
                );
                renderTasks();
            }
        }

        // Event listener for delete buttons
        if (event.target.classList.contains('delete-button')) {
            const listItem = event.target.closest('.todo-item');
            const taskId = parseInt(listItem.id.split('-')[1]); // Extract the task ID
            // Implementing functionality to delete the task
            // For example, update the sampleTasks array and then re-render the tasks
            sampleTasks = sampleTasks.filter(task => task.id !== taskId);
            renderTasks();
        }
    });

    // Event listener for adding tasks using the button
    const addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.addEventListener('click', function () {
        const taskTitle = prompt('Enter task title:');
        if (taskTitle !== null) {
            const reminderDateTimeString = prompt('Enter reminder date and time (YYYY-MM-DD HH:MM):');
            let reminderDateTime = null;

            if (reminderDateTimeString) {
                reminderDateTime = new Date(reminderDateTimeString);
            }

            // Add the task to the sampleTasks array
            const newTask = {
                id: sampleTasks.length + 1,
                text: taskTitle,
                completed: false,
                reminderDateTime: reminderDateTime,
            };

            sampleTasks.push(newTask);

            // Re-render tasks
            renderTasks();
        }
    });

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        sampleTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.id = `task-${task.id}`;

            // Create a div for the task content
            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');
            taskContent.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span>${task.text}</span>
                <button class="edit-button">✏️</button>
                <button class="delete-button">🗑️</button>
            `;

            // Create a div for the completed label
            const completedLabel = document.createElement('div');
            completedLabel.classList.add('completed-label');
            completedLabel.innerText = 'Completed';

            // Append the task content and completed label to the list item
            listItem.appendChild(taskContent);
            listItem.appendChild(completedLabel);

            // Toggle the display of the completed label based on task completion
            completedLabel.style.display = task.completed ? 'block' : 'none';

            taskList.appendChild(listItem);
        });
    }

    // Event listener for changing situation options
    const situationOptions = document.querySelectorAll('.situation-option');
    situationOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Implementing functionality to change the situation
            // You can add logic based on the selected option
            // For example, filter tasks based on the selected situation
            renderTasks();
        });
    });


    // Event listener for updating date and day every minute
    setInterval(updateDateAndDay, 60000);
});
