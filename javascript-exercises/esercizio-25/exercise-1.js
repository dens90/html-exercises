const person = {
  firstName: "",
  lastName: "",
  get firstName() {
    return this._firstName;
  },
  get lastName() {
    return this._lastName; // il carattere _ rende pubblica la proprietà
  },
  set firstName(value) {
    this._firstName = value;
  },
  set lastName(value) {
    this._lastName = value;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";
simon.firstName = "Simon";
simon.lastName = "Collins";
console.log(john.fullName());
console.log(simon.fullName());
