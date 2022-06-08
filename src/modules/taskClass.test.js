jest.mock('./taskClass.js');
const List = require('./taskClass.js');
const list = new List();

// add
describe('testing add task function', () => {
  test('adding a task', () => {
    expect(list.addTask('take a shower',1,true)).toBe(list.tasks[0]);
    expect(list.addTask('eat',2,false)).toBe(list.tasks[1]);
    expect(list.addTask('play videogames',3,true)).toBe(list.tasks[2]);
    expect(list.addTask('eat more',4,false)).toBe(list.tasks[3]);
  });
});

//remove

// add li
// remove li