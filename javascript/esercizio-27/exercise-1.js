const person = {
  firstName: "John",
  lastName: "Doe",
};

// let address;
// let city;
// let fullName;
console.log(person.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName?.(address, city)); // Argh! Cannot read property 'fullName()' of undefined
