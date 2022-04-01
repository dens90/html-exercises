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
    const personFind = persons.find((person) => person.id === id);
    resolve(personFind);
  });
}

fetchPersonById(1).then((personFind) => {
  console.log(personFind.firstName);
  return personFind;
});

function fetchByJob(id) {
  return new Promise((resolve, reject) => {
    const findJob = jobs.find((job) => job.id === id);
    resolve(findJob);
  });
}

fetchByJob(1).then((findJob) => {
  console.log(findJob.jobTitle);
  return findJob;
});
