function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector('.color');
const body = document.querySelector('body');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.innerText = body.style.backgroundColor;
}
