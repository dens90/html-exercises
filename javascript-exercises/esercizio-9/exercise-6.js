function getKeys(obj) {
  let keys = [];
  for (let key in person) {
    keys.push(key);
  }
  return keys;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
