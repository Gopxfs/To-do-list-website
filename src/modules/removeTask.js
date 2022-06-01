import getTaskIndex from "./getTaskIndex";

const removeTask = (task, tasksList) => {
  tasksList.splice(getTaskIndex(task.index, tasksList), 1);
};

export default removeTask;