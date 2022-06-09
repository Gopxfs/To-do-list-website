jest.mock('./taskClass.js');
import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
const List = require('./taskClass.js');
const list = new List();
const tasks = [
  {
    description:'task one',
    isCompleted: false,
    index: 1,
    id: 0,
  },
  {
    description:'task two',
    isCompleted: true,
    index: 2,
    id: 1,
  },
  {
    description:'task three',
    isCompleted: true,
    index: 3,
    id: 2,
  },
  {
    description:'task four',
    isCompleted: false,
    index: 4,
    id: 3,
  },
];
list.tasks = tasks;

const ul = dom.window.document.createElement('ul');
ul.setAttribute('id', 'fakeTasks');
function fakeLI (task) {
const li = dom.window.document.createElement('li');
const checkbox = dom.window.document.createElement('INPUT');
const input = dom.window.document.createElement('INPUT');
const button = dom.window.document.createElement('button');
const drag = dom.window.document.createElement('img');
button.classList.add('hidden');
drag.classList.add('dots');
drag.setAttribute('id', `drag${task.id}`);
li.setAttribute('id', `li${task.id}`);
checkbox.setAttribute('id', `checkbox${task.id}`);
input.setAttribute('id', `input${task.id}`);
button.setAttribute('id', `button${task.id}`);
checkbox.setAttribute('type', 'checkbox');
input.setAttribute('type', 'text');
checkbox.checked = task.isCompleted;
input.value = task.description;
li.append(checkbox, input, button, drag);
ul.append(li);
}
for (let i = 0; i < 4; i +=1) {
  fakeLI(tasks[i]);
}
describe('testing clear all button', () => {
  test('removing all checked tasks', () => {
    list.tasks = list.tasks.filter(list.clearCompleted);
    expect(list.tasks.length).toBe(2);
  });
});


describe('testing add task function', () => {
  test('adding a task', () => {
    expect(list.addTask('take a shower', 1, true)).toBe(list.tasks[2]);
    expect(list.addTask('eat', 2, false)).toBe(list.tasks[3]);
    expect(list.addTask('play videogames', 3, true)).toBe(list.tasks[4]);
    expect(list.addTask('eat more', 4, false)).toBe(list.tasks[5]);
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
    expect(list.removeTask(newTask)).toBe(5);
  });
});

describe('testing "checked items" function', () => {
  test('checking an item', () => {
    let status = list.tasks[1].isCompleted;
    list.updateCheckbox(list.tasks[1]);
    expect(status).toBe(!list.tasks[1].isCompleted);
  })
})

describe('testing "update description" function', () => {
  test('updating an item', () => {
    list.updateDescription('Argentina wins against Brazil', list.tasks[1]);
    expect(list.tasks[1].description).toBe('Argentina wins against Brazil');
  });
});
