const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const values = Object.entries(person);
const filter = values.filter(([key, value]) => typeof value === "number");

const obj = Object.fromEntries(filter);
const json = JSON.stringify(obj);

console.log(json);
