let rootNode = document.getElementById('root');

const inputTask = document.getElementById('input-task');
const addButton = document.getElementById('add');
const deleteIcon = '<i class="material-icons delete">delete</i>';
const editIcon = '<i class="material-icons edit">edit</i>';
const saveIcon = '<i class="material-icons save">save</i>';
let ul = document.querySelector('.list');
let message = document.querySelector('.message');
let maxTask = 10;
let dragged;

function createTaskFromInput() {
    let inputText = document.getElementById('input-task').value;
    let span = document.createElement('span');
    span.className = 'task';
    span.innerText = inputText;
    return span;
}

function createListItem(task) {
    let newLi = document.createElement('li');
    newLi.className = 'list-item';
    newLi.setAttribute('draggable', 'true');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.appendChild(checkbox);
    newLi.appendChild(task);
    newLi.innerHTML += editIcon;
    newLi.innerHTML += deleteIcon;
    return newLi;
}

function createTask() {
    let ListItems = document.querySelectorAll('.list-item');
    if (ListItems.length < maxTask && document.getElementById('input-task').value !== '') {
        let task = createTaskFromInput();
        let newLi = createListItem(task);
        ul.appendChild(newLi);
        document.getElementById('input-task').value = '';
        addButton.style.color = '#999';
    } else if (document.getElementById('input-task').value === '') {
        return false;
    } else {
        message.innerText = 'Maximum item per list are created';
        document.getElementById('input-task').value = '';
        addButton.style.color = '#999';
    }
}

inputTask.addEventListener('input', () => {
    let inputText = document.getElementById('input-task').value;
    if (inputText !== '') {
        addButton.style.color = '#00A9EB';
    }
});

function deleteTask(e) {
    let eventItem = e.target;
    if (eventItem.className === 'material-icons delete') {
        let li = eventItem.parentNode;
        li.parentNode.removeChild(li);
        if (document.querySelectorAll('.list-item').length < maxTask) {
            message.innerText = ''
        }
    }
    e.stopPropagation();
}

function editTask(e) {
    let eventItem = e.target;
    if (eventItem.className === 'material-icons edit') {
        let li = eventItem.parentNode;
        let liBuffer = li;
        let newLi = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'text';
        input.className = 'replace-task';
        newLi.appendChild(input);
        newLi.innerHTML += saveIcon;
        li.parentNode.replaceChild(newLi, li);
        let saveButton = document.querySelector('.save');
        saveButton.addEventListener('click', () => {
            let newTask = document.querySelector('.replace-task').value;
            if (newTask !== '') {
                liBuffer.children[1].innerText = newTask;
                newLi.parentNode.replaceChild(liBuffer, newLi);
            }
        });
    }
    e.stopPropagation();
}

function changeTask(e) {
    deleteTask(e);
    editTask(e);
}
function checkedDisable(e) {
    let check = e.target;
    if (check.checked) {
        check.setAttribute('disabled', 'disabled');
    }
}

function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    if (e.target.className === 'list-item') {
        dragged = e.target;
    }
}

function dropEnd(e) {
    e.preventDefault();
    dragged.parentNode.removeChild(dragged);
    let parent = e.target.parentNode;
    if (parent.tagName === 'UL' && e.target !== parent.lastChild && e.target.className === 'list-item') {
        parent.insertBefore(dragged, e.target);
    } else {
        if (parent.tagName === 'UL' && e.target.className === 'list-item') {
            parent.insertBefore(dragged, e.target.nextSibling);
        }
    }
}

function setMoveCursore (e){
    event.preventDefault();
    if (e.target.className === 'list-item' && e.target.className !== 'task') {
        e.target.style.cursor = 'move';
    } else {
        if (e.target.className === 'task') {
            e.target.style.cursor = 'default';
        }
    }
}

addButton.addEventListener('click', createTask);
ul.addEventListener('click', changeTask);
ul.addEventListener('change', checkedDisable);
ul.addEventListener('drag', dragStart);
ul.addEventListener('dragover', function (event) {
    event.preventDefault();
});
ul.addEventListener('drop', dropEnd);
ul.addEventListener('mouseover', setMoveCursore);
