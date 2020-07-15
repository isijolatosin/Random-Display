import get from './getElement.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.map((button) => button.classList.remove('active'));
  btns[0].classList.add('active');

  btns.map(function (button) {
    const label = button.dataset.label;
    button.addEventListener('mouseover', function (e) {
      value.textContent = person[label];
      title.textContent = `My ${label} is`;

      btns.map((button) => button.classList.remove('active'));
      button.classList.add('active');
    });
  });
};

export default displayUser;
