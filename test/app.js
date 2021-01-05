const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('unesi');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    taskList.appendChild(li);
    li.appendChild(link);
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}