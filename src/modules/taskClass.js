class Task {
  constructor (tasks = []) {
    this.tasks = tasks;
  }

  add = (description) => {
    const task = {
      description: description,
      isCompleted: false,
      index: this.tasks.length,
    };
    this.tasks.push(task);
    return task;
  };

  addLi = (task) => {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    const taskName = document.createElement('INPUT');
    const taskButton = document.createElement('button');
    const removeTaskButton = document.createElement('button');
    checkbox.setAttribute('type', 'checkbox');
    taskName.setAttribute('type', 'text');
    newLi.append(checkbox, taskName, taskButton, removeTaskButton);
    taskName.value = task.description;
    checkbox.checked = task.isCompleted;
    return newLi;
  };

  remove = (task) => {
    const taskPosition = this.getPositionInArray(task.index);
    this.tasks.splice(taskPosition, 1);
    this.updateIndexes(task.index);
  };

  getPositionInArray = (index) => {
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].index === index) {
        return i; // position in array
      }
    }
    return null;
  };

  updateIndexes = (removedIndex) => {
    for (let i= 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].index > removedIndex) {
        this.tasks[i].index -= 1;
      }
    }
  };
};
  
export default Task;