function sum(...otherArgs) {
  let num = 0;
  otherArgs.forEach((args) => {
    num += args;
  });
  return num;
}

console.log(sum(1, 2, 3, 4, 5));
