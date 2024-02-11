function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text = `I can't believe life's so complex
When I just wanna sit here and watch you undress
I can't believe life's so complex
When I just wanna sit here and watch you undress
This is love, this is love that I'm feelin'
This is love, this is love that I'm feelin'
This is love, love, love that I'm feelin'
Does it have to be a life full of dread?
Wanna chase you 'round the table, wanna touch your head
Does it have to be a life full of dread?
Wanna chase you 'round the table, wanna touch your head

This is love, this is love that I'm feelin'
This is love, this is love that I'm feelin'
This is love, love, love, love that I'm feelin'

I can't believe that the axis turns
On suffering when you taste so good
I can't believe that the axis turns
On suffering when my head it burns

Now, love, love, love that I'm feelin'
This is love, this is love that I'm feelin'
This is love, love, love, love that I'm feelin'

Even in the summer, even in the spring
You'll never get too much of a wonderful thing

You're the only story that I've never told
You're my dirty little secret, wanna keep you so
You're the only story that I've never been told
You're my dirty little secret, wanna keep you so

Come on out, come on over, help me forget
Keep the walls from falling as they're tumbling in
Come on out, come on over, help me forget
Keep the walls from falling on me tumbling in
Keep the walls from falling as they're tumbling in

This is love, this is love that I'm feelin'
This is love, this is love that I'm feelin'
This is love, this is love that I'm feelin'
This is love, love, love, love that I'm feelin'

This is love, love, love that I'm feelin'
This is love, love, love that I'm feelin'
This is love, love, love, love that I'm feelin'
This is love, this is love that I'm feelin'
`;
console.log(text);

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

  let i = 0;
  let subString = '';
  for (
    let size = 30, fontSize = 4;
    i < amount;
    size += 10, fontSize += 1, i++
  ) {
    let color = getRandomHexColor();
    subString += `<div style= "font-size: ${fontSize}px; text-align: center; background-color: ${color}; width : ${size}px ; height: ${size}px ; ">
       I can't believe life's so complex
    </div>`;
    console.log(subString);
  }
  let string = `<div  style = " margin: 10px; display: flex; flex-wrap: wrap;"> ${subString}</div>`;
  console.log(string);
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
