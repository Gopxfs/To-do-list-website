// import _ from 'lodash';
import './style.css';

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
listTitle.value = `Today's To Do`;
addTask.setAttribute('placeholder', 'Add to your list...');
tasksDiv.append(listTitleDiv, addTaskDiv);
listTitleDiv.append(listTitle, listRefresh);
addTaskDiv.append(addTask, enterTask);
clearCompleted.innerHTML = 'Clear all completed';
clearCompleted.setAttribute ('id','clearCompleted');

const listItems = [
  {
    description: 'Task 1',
    isCompleted: false,
    index: 0,
  },
  {
    description: 'Task 2',
    isCompleted: false,
    index: 3,
  },
  {
    description: 'Task 3',
    isCompleted: true,
    index: 2,
  },
  {
    description: 'Task 4',
    isCompleted: true,
    index: 1,
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

const populateTasks = () => {
  for (let i = 0; i < listItems.length; i += 1) { 
    const currentTask = getTaskIndex(i);
    const newLi = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    const taskName = document.createElement('INPUT');
    const taskButton = document.createElement('button');
    checkbox.setAttribute('type', 'checkbox');
    taskName.setAttribute('type', 'text');
    tasksDiv.append(newLi);
    newLi.append(checkbox, taskName, taskButton);
    taskName.value = currentTask.description;
    checkbox.checked = currentTask.isCompleted;
  }
};
populateTasks();
tasksDiv.append(clearCompleted);