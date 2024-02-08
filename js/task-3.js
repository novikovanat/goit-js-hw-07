const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
console.log(nameInput);
console.log(nameOutput);

nameInput.addEventListener('input', showName);

function showName(event) {
  console.log(event);
  const nameInputTrimmed = nameInput.value.trim();
  console.log(`this is full string "${nameInput.value}"`);
  console.log(`this is trimmed string "${nameInputTrimmed}"`);
  console.log(nameInputTrimmed === '');
  nameInputTrimmed === ''
    ? console.log('this is empty string')
    : (nameOutput.textContent = nameInputTrimmed);
}
nameInput.addEventListener('blur', () => (nameInput.value = ''));
