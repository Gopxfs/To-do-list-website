// import _ from 'lodash';
import './style.css';

// Dinamic creation of the list
const tasksDiv = document.getElementById('to-do-list');
const listTitleDiv = document.createElement('div');
const listTitle = document.createElement('INPUT');
const listRefresh = document.createElement('button');
const addTaskDiv = document.createElement('div');
const addTask = document.createElement('INPUT');
const enterTask = document.createElement('button');
const clearCompleted = document.createElement('button');
listTitle.setAttribute('type', 'text');
addTask.setAttribute('type', 'text');
listTitle.value = 'Today\'s To Do';
addTask.setAttribute('placeholder', 'Add to your list...');
tasksDiv.append(listTitleDiv, addTaskDiv);
listTitleDiv.append(listTitle, listRefresh);
addTaskDiv.append(addTask, enterTask);
clearCompleted.innerHTML = 'Clear all completed';
clearCompleted.setAttribute('id', 'clearCompleted');

// description isCompleted index
const listItems = [
  {
    description: '6546541asaass',
    isCompleted: false,
    index: 0,
  },
];

const getTaskIndex = (index) => {
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].index === index) {
      return listItems[i];
    }
  }
  return null;
};

const createLi = (task) => {
  const newLi = document.createElement('li');
  const checkbox = document.createElement('INPUT');
  const taskName = document.createElement('INPUT');
  const taskButton = document.createElement('button');
  checkbox.setAttribute('type', 'checkbox');
  taskName.setAttribute('type', 'text');
  tasksDiv.append(newLi);
  newLi.append(checkbox, taskName, taskButton);
  taskName.value = task.description;
  checkbox.checked = task.isCompleted;
};

const createTask = (description) => {
  const task = {
    description: description,
    isCompleted: false,
    index: listItems.length,
  };
  return task;
};

const populateTasks = () => {
  for (let i = 0; i < listItems.length; i += 1) {
    createLi(listItems[i]);
  }
};
populateTasks();
tasksDiv.append(clearCompleted);
enterTask.addEventListener('click', () => {
  const newTask = createTask(addTask.value);
  createLi(newTask);
});