const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', showName);

function showName(event) {
  const nameInputTrimmed = nameInput.value.trim();

  nameOutput.textContent =
    nameInputTrimmed === '' ? 'Anonymous' : nameInputTrimmed;
}
