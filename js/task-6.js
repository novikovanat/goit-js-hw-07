function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const number = document.querySelector('input[type="number"]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
number.addEventListener('input', getANumber);
number.addEventListener('blur', wipe);

function wipe() {
  number.value = '';
}

function getANumber() {
  let numberString = number.value;
  let amount = Number(numberString);
  console.log(amount);
  if (Number(amount) > 0 && Number(amount) < 100) {
    return Number(amount);
  } else {
    console.log('Insert number between 1 and 100');
    return (amount = 0);
  }
}

console.log(getANumber());
function createBoxes(amount) {}

function destroyBoxes() {}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const number = document.querySelector('input[type="number"]');
// const boxes = document.getElementById('boxes');

// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);
// number.addEventListener('input', getANumber);
// number.addEventListener('blur', wipe);

// function wipe() {
//   number.value = '';
// }

// function getANumber() {
//   let amount = number.value;
//   if (Number(amount) > 0 && Number(amount) < 100) {
//     return Number(amount);
//   } else {
//     console.log('Please insert a number between 1 and 100');
//     return 0;
//   }
// }

// console.log(getANumber());

// function createBoxes(amount) {
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i++) {
//     const size = 30 + i * 10;
//     const div = document.createElement('div');
//     div.style.backgroundColor = getRandomHexColor();
//     div.style.width = `${size}px`;
//     div.style.height = `${size}px`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//  boxes.innerHTML = '';
//}
