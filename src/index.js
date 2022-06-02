// import _ from 'lodash';
import './style.css';
import List from './modules/taskClass';

const addTask = document.getElementById('addTask');
const addDescription = document.getElementById('addDescription');
const listTitle = document.getElementById('listTitle');
let idData = 0;
if (localStorage.getItem('idData')) {
  idData = localStorage.getItem('idData');
};
let list = new List(idData);
list.tasks = list.getData();

if (localStorage.getItem('listName')) {
  listTitle.value = localStorage.getItem('listName');
};
listTitle.addEventListener ('input', () => {
  list.setListName(listTitle.value);
});

// Populating data
for (let i = 0; i < list.tasks.length; i += 1) {
  const newTask = list.tasks[i];
  list.addLi(newTask);
  const description = document.getElementById(`input${newTask.id}`);
  const checkbox = document.getElementById(`checkbox${newTask.id}`);
  const removeButton = document.getElementById(`button${newTask.id}`);
  addDescription.value ="";
  // event listeners:
  removeButton.addEventListener ('click', () => {
   list.removeTask(newTask);
  });
  description.addEventListener ('input', () => {
    list.updateDescription(description.value, newTask);
  });
  checkbox.addEventListener ('change', () => {
    list.updateCheckbox(newTask);
  });
};

addTask.addEventListener('submit', () => {
  const newTask = list.addTask(addDescription.value);
  list.addLi(list.tasks[list.tasks.length-1]);
  const description = document.getElementById(`input${list.taskID-1}`);
  const checkbox = document.getElementById(`checkbox${list.taskID-1}`);
  const removeButton = document.getElementById(`button${list.taskID-1}`);
  addDescription.value = "";
  // event listeners:
  removeButton.addEventListener ('click', () => {
   list.removeTask(newTask);
  });
  description.addEventListener ('input', () => {
    list.updateDescription(description.value, newTask);
  });
  checkbox.addEventListener ('change', () => {
    list.updateCheckbox(newTask);
  });
});
