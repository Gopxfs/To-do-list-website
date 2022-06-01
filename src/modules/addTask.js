const createTask = (description, index) => {
  const task = {
    description: description,
    isCompleted: false,
    index: index,
  };
  return task;
};

export default createTask;