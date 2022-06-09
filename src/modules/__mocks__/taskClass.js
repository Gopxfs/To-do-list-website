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
    // this.setData();
    return newTask;
  };

  addLi = (task) => {
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    const input = document.createElement('INPUT');
    const button = document.createElement('button');
    const drag = document.createElement('img');
    button.classList.add('hidden');
    drag.classList.add('dots');
    drag.setAttribute('id', `drag${task.id}`);
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
    this.tasks.splice(task.index - 1, 1);
    return this.tasks.length;
  };

  removeDiv = (task) => {
    const index = this.getTaskIndex(task.index);
    this.removeTask(task);
    for (let i = index - 1; i < this.tasks.length; i += 1) {
      this.tasks[i].index -= 1;
    }
  };

  clearCompleted = (task) => {
    if (task.isCompleted === true) {
      this.removeTask(task);
      return false;
    }
    return true;
  };

  highlightTask = (task) => {
    this.removeHighlight();
    const input = document.getElementById(`input${task.id}`);
    const removeButton = document.getElementById(`button${task.id}`);
    const drag = document.getElementById(`drag${task.id}`);
    input.classList.add('highlight');
    drag.classList.add('hidden');
    removeButton.classList.remove('hidden');
  };

  removeHighlight = () => {
    const id = this.findHighlight();
    if (id >= 0) {
      const input = document.getElementById(`input${id}`);
      const drag = document.getElementById(`drag${id}`);
      const removeButton = document.getElementById(`button${id}`);
      input.classList.remove('highlight');
      drag.classList.remove('hidden');
      removeButton.classList.add('hidden');
    }
  };

  findHighlight = () => {
    for (let i = 0; i < this.tasks.length; i += 1) {
      const { id } = this.tasks[i];
      const input = document.getElementById(`input${id}`);
      if (input.classList.contains('highlight')) {
        return id;
      }
    }
    return -1;
  };

  updateDescription = (description, task) => {
    task.description = description;
    // this.setData();
  };

  updateCheckbox = (task) => {
    task.isCompleted = !task.isCompleted;
    // this.setData();
  };

  checkTask = (id) => {
    const description = document.getElementById(`input${id}`);
    description.toggleAttribute('disabled');
    description.classList.toggle('done');
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
module.exports = List;