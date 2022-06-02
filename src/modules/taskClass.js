import dots from '../images/dots.png';

class List {
  constructor(taskID) {
    this.tasks = [];
    this.taskID = Number(taskID);
  }

  addTask = (description, index, isCompleted) => {
    const newTask = {
      description: description ?? 'description',
      isCompleted: isCompleted ?? false,
      index: index ?? this.tasks.length,
      id: this.taskID,
    };
    newTask.index += 1;
    this.tasks.push(newTask);
    this.taskID += 1;
    this.setData();
    return newTask;
  };

  addLi = (task) => {
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    const input = document.createElement('INPUT');
    const button = document.createElement('button');
    const drag = document.createElement('img');
    drag.classList.add('dots', 'hidden');
    drag.setAttribute('src', dots)
    button.innerHTML = 'remove';
    li.setAttribute('id', `li${task.id}`);
    checkbox.setAttribute('id', `checkbox${task.id}`);
    input.setAttribute('id', `input${task.id}`);
    button.setAttribute('id', `button${task.id}`);
    checkbox.setAttribute('type', 'checkbox');
    input.setAttribute('type', 'text');
    checkbox.checked = task.isCompleted;
    input.value = task.description;
    li.append(checkbox, input, button, drag);
    ul.append(li);
  };

  removeTask = (task) => {
    const ul = document.getElementById('tasks');
    const index = this.getTaskIndex(task.id);
    const li = document.getElementById(`li${task.id}`);
    this.tasks.splice(index, 1);
    ul.removeChild(li);
    for (let i = index; i < this.tasks.length; i += 1) {
      this.tasks[i].index -= 1;
    }
    this.setData();
  };

  removeDiv = (task) => {
    const ul = document.getElementById('tasks');
    const index = this.getTaskIndex(task.id);
    const li = document.getElementById(`li${task.id}`);
    ul.removeChild(li);
    for (let i = index; i < this.tasks.length; i += 1) {
      this.tasks[i].index -= 1;
    }
  };

  clearCompleted = (task) => {
    if (task.isCompleted === true)  { 
      this.removeDiv(task);
      return false;
    }
    return true;
  };

  highlightTask = (task) => {
    this.removeHighlight();
    const input = document.getElementById(`input${task.id}`);
    input.setAttribute('class', 'highlight');
  };

  removeHighlight = () => {
    const id = this.findHighlight();
    if (id) {
    const input = document.getElementById(`input${id}`);
    input.classList.remove('highlight');
    }
    // remove highlight from inputid
    // add hidden to trash button

  };

  findHighlight = () => {
    for (let i = 0; i < this.tasks.length; i += 1) { 
      const id = this.tasks[i].id;
      const input = document.getElementById(`input${id}`);
      if (input.classList.contains('highlight')){
        return id;
      }
    }
  };

  updateDescription = (description, task) => {
    task.description = description;
    this.setData();
  };

  updateCheckbox = (task) => {
    task.isCompleted = !task.isCompleted;
    this.setData();
  };

  setData = () => {
    localStorage.setItem('tasksData', JSON.stringify(this.tasks));
    localStorage.setItem('idData', this.taskID);
  };

  getData = () => {
    if (localStorage.getItem('tasksData')) {
      return JSON.parse(localStorage.getItem('tasksData'));
    }
    return [];
  };

  getTaskIndex = (id) => {
    let i = 0;
    while (this.tasks[i].id !== id) {
      i += 1;
    }
    return i;
  };

  setListName = (newTitle) => {
    localStorage.setItem('listName', newTitle);
  };
}

export default List;