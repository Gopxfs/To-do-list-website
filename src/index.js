// import _ from 'lodash';
import './style.css';
import Task from './modules/taskClass';

// Dinamic creation of the list HTML elements
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

// Creating an array of tasks and updating with localStorage
// tasksList elements properties: description, isCompleted, index
let tasksList = new Task();
if (localStorage.getItem('tasksData')) {
  tasksList.tasks = JSON.parse(localStorage.getItem('tasksData'));
  console.log(tasksList.tasks);
  for (let i = 0; i < tasksList.tasks.length; i += 1) {
    const newLi = tasksList.addLi(tasksList.tasks[i]);
    tasksDiv.append(newLi);
    newLi.lastChild.addEventListener('click', () => {
      tasksList.remove(tasksList.tasks[i]);
      tasksDiv.removeChild(newLi);
      console.log(tasksList.tasks);
      localStorage.setItem('tasksData', JSON.stringify(tasksList.tasks));
    });
  };
};

// When click the enter button, create a new task and a new task LI
enterTask.addEventListener('click', () => {
  const newTask = tasksList.add(addTask.value);
  const newLi = tasksList.addLi(newTask);
  console.log(tasksList.tasks);
  localStorage.setItem('tasksData', JSON.stringify(tasksList.tasks));
  tasksDiv.append(newLi);
  // When click in the remove button, remove the task from tasksList and disappend LI
  newLi.lastChild.addEventListener('click', () => {
    tasksList.remove(newTask);
    tasksDiv.removeChild(newLi);
    console.log(tasksList.tasks);
    localStorage.setItem('tasksData', JSON.stringify(tasksList.tasks));
  });
});