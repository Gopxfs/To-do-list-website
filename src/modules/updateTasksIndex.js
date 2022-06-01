const updateTasksIndex = (removedIndex, tasksList) => {
  for (let i= 0; i < tasksList.length; i += 1) {
    if (tasksList[i].index > removedIndex) {
      tasksList[i].index -= 1;
    }
  }
};

export default updateTasksIndex;