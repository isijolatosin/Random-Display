const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  const person = data.results[0];
  const { phone, email } = person;
  const {
    name: { first, last },
  } = person;
  const {
    dob: { age },
  } = person;
  const {
    login: { password },
  } = person;
  const {
    picture: { large: image },
  } = person;
  const {
    location: {
      street: { number, name },
    },
  } = person;
  return {
    phone: phone,
    email: email,
    age: age,
    password: password,
    image: image,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
