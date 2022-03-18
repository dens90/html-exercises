function calculate() {
  return {
    value: 0,
    add(num) {
      this.value += num;
      return this;
    },
    multiply(num) {
      this.value *= num;
      return this;
    },
    sub(num) {
      this.value -= num;
      return this;
    },
    divide(num) {
      this.value /= num;
      return this;
    },
    printResult() {
      return this.value;
    },
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(calculator);
