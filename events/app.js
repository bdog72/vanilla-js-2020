//
//

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];

const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
  console.log('KEY DOWN');
});

input.addEventListener('keyup', function(e) {
  console.log('KEY UP');
});

input.addEventListener('keypress', function(e) {
  console.log('KEY PRESS');
});

const addItemInput = document.querySelector('#add-item');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.append(newItem);
    this.value = '';
  }
});

// const h1 = document.querySelector('h1');
// const changeColor = function(evt) {
//   // console.log(evt);

//   h1.style.color = this.style.backgroundColor;
// };

// const container = document.querySelector('#boxes');

// for (let color of colors) {
//   const box = document.createElement('div');
//   box.style.backgroundColor = color;
//   box.classList.add('box');
//   container.append(box);
//   box.addEventListener('click', changeColor);
// }

// document.body.addEventListener('keypress', function(e) {
//   console.log(e);
// });
