class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  constructor(amount) {
    super(amount);
  }
  deposit(amount){
    if(amount >= 1000){
      amount += (amount *= 3 / 100)
    }
    
    amount += super.deposit(amount);
    return amount
     
  
  }
}



// DEVO TROVARE IL VALORE DA PASSARE ALLA FUNZIONE CALCINTEREST


 const bankAccountVip = new BankAccountVip(1000);
// bankAccountVip.calcInterest(1000)
// console.log(bankAccountVip.calcInterest())

//HO INSERITO QUESTA FUNZIONE QUI SOPRA
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
