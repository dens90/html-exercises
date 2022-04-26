const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];


function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
      setTimeout(()=> {
          const findPerson = persons.find((person) => person.id === id)
          findPerson ? resolve(findPerson) : reject(new Error('id non trovato'))
      },1000)
  });
}

function fetchByJob(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const findJob = jobs.find((job) => job.id === id);
          findJob ? resolve(findJob) : reject(new Error('id non trovato'));
      },2000)
  });
}
try {
  Promise.all([fetchPersonById(1),fetchByJob(1)]).then((values) => {
      console.log(values)
  })
} catch (err) {
  console.log(err.message)
}