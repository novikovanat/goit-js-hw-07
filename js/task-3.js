const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', showName);

function showName(event) {
  const nameInputTrimmed = nameInput.value.trim();

  nameInputTrimmed === ''
    ? console.log('this is empty string')
    : (nameOutput.textContent = nameInputTrimmed);
}
nameInput.addEventListener('blur', () => (nameInput.value = ''));
