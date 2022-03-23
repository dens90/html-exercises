class BankAccount {
  constructor(found) {
    this.found = found;
  }
  deposit(value) {
    return (this.found += value);
  }
  withdraw(value) {
    return (this.found -= value);
  }
  view() {
    console.log(this.found);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(100);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.withdraw(500);
bankAccount.view();
