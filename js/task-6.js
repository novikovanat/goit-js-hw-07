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
numberStr.addEventListener('blur', wipe);

let amount;
function getANumber() {
  let number = parseInt(numberStr.value);
  if (number > 0 && number <= 100) {
    amount = number;
  } else {
    console.log('Insert number between 1 and 100');
  }
}

function wipe() {
  numberStr.value = '';
}

function createHandler() {
  if (amount < 1) {
  } else {
    createBoxes(amount);
    amount = 0;
  }
}

function createBoxes(amount) {
  let i = 0;
  let subString = '';
  for (let size = 30; i < amount; size += 10, i++) {
    let color = getRandomHexColor();
    subString += `<div style= "background-color: ${color}; width : ${size}px ; height: ${size}px ; ">
    </div>`;
  }
  let string = `<div class ="container"> ${subString}</div>`;
  boxes.innerHTML = string;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
