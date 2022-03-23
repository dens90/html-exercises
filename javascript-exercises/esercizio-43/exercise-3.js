class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = "amount must be positive";
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(message, name) {
    super(message);
    this.name = "insufficent funds";
  }
}

class BankAccount {
  #amount = 0;
  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("amount must be positive"); // Use custom Error class
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("amount must be positive"); // Use custom Error class
    }
    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError("you don't have enought money"); // Use custom Error class
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  if (e instanceof NegativeAmountError) {
    console.log(`${e.name}: ${e.message}`);
  } else if (e instanceof WithdrawNotPermittedError) {
    console.log(`${e.name}: ${e.message}`);
  } else {
    console.log(e);
  }
}
