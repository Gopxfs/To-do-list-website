const getTaskIndex = (index) => {
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].index === index) {
      return listItems[i];
    }
  }
  return null;
};

export default getTaskIndex;