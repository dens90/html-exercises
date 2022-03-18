const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const map = Object.values(person).map((item) => {
  console.log(item);
});
// console.log(Object.values(person).join(' '));
// Print values of person using Object.values
