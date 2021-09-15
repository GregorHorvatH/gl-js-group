console.log('QA 8');

const link = document.querySelector('#link');

link.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('go to google :)');
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const login = e.target.elements.login.value;
  const password = e.target.elements.password.value;

  console.log('login:', login);
  console.log('password:', password);
});

const goods = document.querySelector('#goods');

goods.addEventListener(
  'input',
  _.throttle((e) => {
    console.log(e.target.value);
  }, 500),
);
