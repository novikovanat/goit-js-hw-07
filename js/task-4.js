const form = document.querySelector('.login-form');

form.addEventListener('submit', checkAndSubmit);

let credentials = {};
function checkAndSubmit(event) {
  event.preventDefault();
  const login = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (password.trim() === '' || login.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    credentials.login = login;
    credentials.password = password;
    console.log(credentials);
  }

  form.reset();
}
