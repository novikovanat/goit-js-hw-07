function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const numberInput = document.querySelector('input[type="number"]');

createBtn.addEventListener('click', createBoxes());
destroyBtn.addEventListener('click', destroyBoxes());
numberInput.addEventListener('change', getANumber);

let number;
function getANumber() {
  numberInput.value > 0 && numberInput.value < 100
    ? (number = numberInput.value)
    : alert('Insert number between 1 and 100');
  console.log(number);
}
function createBoxes(amount) {}
function destroyBoxes() {}
