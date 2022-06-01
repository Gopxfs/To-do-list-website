const createLi = (task) => {
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

export default createLi;