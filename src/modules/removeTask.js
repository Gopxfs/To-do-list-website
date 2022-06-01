import getTaskIndex from "./getTaskIndex";
import updateTasksIndex from "./updateTasksIndex";

const removeTask = (task, tasksList) => {
  tasksList.splice(getTaskIndex(task.index, tasksList), 1);
  updateTasksIndex(task.index, tasksList);
};

export default removeTask;