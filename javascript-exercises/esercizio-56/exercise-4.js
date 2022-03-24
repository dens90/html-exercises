function sum(...args) {
  let num = 0;
  args.forEach((arg) => {
    num += arg;
  });
  return num;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
