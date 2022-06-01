const getTaskIndex = (index, tasksList) => {
  for (let i = 0; i < tasksList.length; i += 1) {
    if (tasksList[i].index === index) {
      return i;
    }
  }
  return null;
};

export default getTaskIndex;