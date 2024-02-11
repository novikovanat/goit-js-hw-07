function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const numberStr = document.querySelector('input[type="number"]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createHandler);
destroyBtn.addEventListener('click', destroyBoxes);
numberStr.addEventListener('change', getANumber);
// number.addEventListener('blur', wipe);

function wipe() {
  number.value = '';
}

function createHandler() {
  console.log(createBoxes(amount));
  amount = 0;
}

let amount;
function getANumber() {
  let number = parseInt(numberStr.value);
  numberStr.value = '';
  if (number > 0 && number < 100) {
    amount = number;
  } else {
    console.log('Insert number between 1 and 100');
  }
}
// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

function createBoxes(amount) {
  console.log(`I'm create boxes ${amount}`);

  let string = `<div class = 'container' slyle = "width = 200px" ><div style = "background-color: red; width :30px ; height: 30px ; "> this is empty div</div></div>`;
  boxes.insertAdjacentHTML('beforeend', string);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

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
