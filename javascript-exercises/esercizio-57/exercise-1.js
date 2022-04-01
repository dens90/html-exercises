const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    let findId = persons.find(person => person.id === id);
    resolve(findId);
  })
}

fetchPersonById(4).then((idTrovato) => {
  console.log(idTrovato)
})
