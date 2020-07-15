import getUser from './utils/getUser.js';
import get from './utils/getElement.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

// const showUser = () => {
//   //get user from api
//   getUser().then((data) => console.log(data));
//   //display user
// };
//OR
const showUser = async () => {
  //get user from api
  const person = await getUser();
  // console.log(person);

  //display user
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
