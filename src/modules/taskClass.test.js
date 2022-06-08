jest.mock('./taskClass.js');
const List = require('./taskClass.js');

const list = new List();

describe('testing add task function', () => {
  test('adding a task', () => {
    expect(list.addTask('take a shower', 1, true)).toBe(list.tasks[0]);
    expect(list.addTask('eat', 2, false)).toBe(list.tasks[1]);
    expect(list.addTask('play videogames', 3, true)).toBe(list.tasks[2]);
    expect(list.addTask('eat more', 4, false)).toBe(list.tasks[3]);
  });
});

const newTask = {
  description: 'play videogames',
  isCompleted: true,
  index: 3,
  id: 2,
};
describe('testing remove task function', () => {
  test('removing a task', () => {
    expect(list.removeTask(newTask)).toBe(3);
  });
});