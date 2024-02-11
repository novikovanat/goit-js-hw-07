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
PJ Harvey - This Is Love'`;

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
  console.log(createBoxes(amount));
  amount = 0;
}

function createBoxes(amount) {
  console.log(`I'm create boxes ${amount}`);
  let textArray = text.split('\n');
  let i = 0;
  let subString = '';
  for (
    let size = 30, fontSize = 4;
    i < amount;
    size += 10, fontSize += 1, i++
  ) {
    let song;
    if (textArray.length - 1 < i) {
      song = textArray[textArray.length - 1];
    } else {
      song = textArray[i];
    }
    console.log(song);

    console.log(textArray.length - 1);

    let color = getRandomHexColor();
    let textColor = getRandomHexColor();
    subString += `<div style= " color:${textColor}; font-size: ${fontSize}px; text-align: center; background-color: ${color}; width : ${size}px ; height: ${size}px ; ">
       ${song}
    </div>`;
  }
  let string = `<div  style = " margin: 10px; display: flex; flex-wrap: wrap;"> ${subString}</div>`;
  boxes.innerHTML = string;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
