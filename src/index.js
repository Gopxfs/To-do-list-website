// import _ from 'lodash';
import './style.css';
import createTask from './modules/addTask';
import createLi from './modules/addLi';
import getTaskIndex from './modules/getTaskIndex';

// Dinamic creation of the list
const toDoList = document.getElementById('to-do-div'); //main div
const tasksDiv = document.getElementById('to-do-list'); //ul
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
toDoList.append(listTitleDiv, addTaskDiv, tasksDiv, clearCompleted);
listTitleDiv.append(listTitle, listRefresh);
addTaskDiv.append(addTask, enterTask);
clearCompleted.innerHTML = 'Clear all completed';
clearCompleted.setAttribute('id', 'clearCompleted');

// description isCompleted index
const listItems = [];
// if there is something stored, then listItems = stored
// after every addition / removal, update the localstorage

const populateTasks = () => {
  for (let i = 0; i < listItems.length; i += 1) {
   const newLi = createLi(listItems[i]);
   tasksDiv.append(newLi);
  }
};
populateTasks();

enterTask.addEventListener('click', () => {
  const newTask = createTask(addTask.value, listItems.length);
  const newLi = createLi(newTask);
  tasksDiv.append(newLi);
});