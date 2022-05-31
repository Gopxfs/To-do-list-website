import _ from 'lodash';
import './style.css';

const tasksDiv = document.getElementById('to-do-list');

const listItems = [
  {
    description: 'description1',
    isCompleted: false,
    index: 0,
  },
  {
    description: 'description2',
    isCompleted: false,
    index: 3,
  },
  {
    description: 'description3',
    isCompleted: true,
    index: 2,
  },
  {
    description: 'description4',
    isCompleted: true,
    index: 1,
  },
];

const getTaskIndex = (index) => {
  for (let i = 0; i <listItems.length; i += 1) {
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
    taskName.value = currentTask.description
    checkbox.checked = currentTask.isCompleted;
  }
};
populateTasks();
