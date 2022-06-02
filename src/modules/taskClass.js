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
    button.innerHTML = 'remove';
    li.setAttribute('id', `li${task.id}`);
    checkbox.setAttribute('id', `checkbox${task.id}`);
    input.setAttribute('id', `input${task.id}`);
    button.setAttribute('id', `button${task.id}`);
    checkbox.setAttribute('type', 'checkbox');
    input.setAttribute('type', 'text');
    checkbox.checked = task.isCompleted;
    input.value = task.description;
    li.append(checkbox, input, button);
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