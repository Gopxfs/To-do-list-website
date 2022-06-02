// import _ from 'lodash';
import './style.css';
import List from './modules/taskClass';
import { remove } from 'lodash';
import { LineSegments } from 'three';

const ul = document.getElementById('tasks');
const addTask = document.getElementById('addTask');
const addDescription = document.getElementById('addDescription');
const addButton = document.getElementById('addButton');
let idData = 0;
if (localStorage.getItem('idData')) {
  idData = localStorage.getItem('idData');
};
let list = new List(idData);
list.tasks = list.getData();
console.log(list.taskID);

for (let i = 0; i < list.tasks.length; i += 1) {
  const newTask = list.tasks[i];
  list.addLi(newTask);
  const removeButton = document.getElementById(`button${newTask.id}`);
  removeButton.addEventListener ('click', () => {
   list.removeTask(newTask);
  });
};

addTask.addEventListener('submit', () => {
  const newTask = list.addTask(addDescription.value);
  list.addLi(list.tasks[list.tasks.length-1]);
  const removeButton = document.getElementById(`button${list.taskID-1}`);
  removeButton.addEventListener ('click', () => {
   list.removeTask(newTask);
  });
});