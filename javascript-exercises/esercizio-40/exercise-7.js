class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get _firstName() {
    return this.firstName;
  }
  set _firstName(val) {
    this.firstName = val;
  }
  get _lastName() {
    return this.lastName;
  }
  set _lastName(val) {
    this.lastName = val;
  }
  get _age() {
    return this.age;
  }
  set _age(val) {
    this.age = val;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
