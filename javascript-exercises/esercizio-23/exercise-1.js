const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let key = Object.keys(person);
let value = Object.values(person);
 console.log(key[0] + ':' + value[0] + ' ' + key[1] + ':' + value[1] + ' ' + key[2] + ':' + value[2]);
// Print values of person using Object.keys