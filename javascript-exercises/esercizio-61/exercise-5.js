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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

let person = function fetchPersonById(id){
  return new Promise((resolve) => {
    setTimeout(() => {
      const findPerson = persons.find(person => person.id === id);
      resolve(findPerson);
    },1000)
  })
}

let job = function fetchJobById(id){
  return new Promise((resolve) => {
    setTimeout(() => {
      const findJob = jobs.find(job => job.id === id);
      resolve(findJob)
    },500)
  })
}

Promise.all([person(1),job(1)]).then((values) => {
console.log(values)
})

