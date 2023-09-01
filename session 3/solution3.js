// 1. We shouldn't let anyone to change balance (they can use deposit and withdraw methods which we have some validation on them!)
// 2. When we create a new account, the balance should be 0
// 3. No one should be able to change dailyLimit, interestRate and wage as well!
// 4. We need a general withdraw function which only validates the request and deduct the amount. all child classes should use this base withdraw based on their conditions.
//    with this structure, we can track all withdrawals from the base Account class.
// 5. I called validateWithdraw in baseWithdraw AND in all child withdraw functions. why?
//    - because all child classes should validate withdraw before executing.
//    - if a child class forgot to do that (or intentionally does't validate the transaction [fraud]), it's the base class's responsibility to make sure no incorrect transaction is being executed

// Base Account class
class Account {
  #balance;
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.#balance = 0;
  }

  getInfo() {
    return `${this.__proto__.constructor.name} ${this.accountNumber} ${this.accountHolder} `;
  }

  get getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount < 0)
      return console.log(
        "Please use withdraw methods to decrease the balance."
      );

    this.#balance += amount;
    console.log("Balance increased by ", amount);
  }

  validateWithdraw(amount) {
    if (amount < 0) {
      console.log("Please use deposit methods to increase the balance.");
      return false;
    }

    if (this.#balance < amount) {
      console.log("No enough funds to withdraw");
      return false;
    }

    return true;
  }

  baseWithdraw(amount) {
    if (this.validateWithdraw(amount)) this.#balance -= amount;
  }

  static isAccount(obj) {
    return obj instanceof Account;
  }
}

// Normal Account class
class NormalAccount extends Account {
  #dailyLimit;
  constructor(accountNumber, accountHolder, dailyLimit) {
    super(accountNumber, accountHolder);
    this.#dailyLimit = dailyLimit;
  }

  getDailyLimit() {
    return this.#dailyLimit;
  }

  withdraw(amount) {
    const isValidWithdraw = this.validateWithdraw(amount);
    if (isValidWithdraw) {
      this.baseWithdraw(amount);
      console.log(`${amount} decreased successfully`);
    }
  }

  static isNormalAccount(obj) {
    return obj instanceof NormalAccount;
  }
}

// Saving Account class
class SavingAccount extends Account {
  #interestRate;
  #wage;
  constructor(accountNumber, accountHolder, interestRate, wage) {
    super(accountNumber, accountHolder);
    this.#interestRate = interestRate;
    this.#wage = wage;
  }

  getInterest() {
    const currentInterest = this.#interestRate * this.getBalance;
    return currentInterest;
  }

  withdraw(amount) {
    const isValidWithdraw = this.validateWithdraw(amount + this.#wage);
    if (isValidWithdraw) {
      this.baseWithdraw(this.#wage);
      console.log(`${this.#wage} as wage decreased successfully`);
      this.baseWithdraw(amount);
      console.log(`${amount} decreased successfully`);
    }
  }

  static isSavingAccount(obj) {
    return obj instanceof SavingAccount;
  }
}

// normal account sample
const normalAccount = new NormalAccount(111111, "Ali", 50);
console.log(normalAccount.getInfo(), "Balance: ", normalAccount.getBalance);
// depositing 100
normalAccount.deposit(100);

// checking limit
console.log("Daily limit: ", normalAccount.getDailyLimit());

// withdrawing 20
normalAccount.withdraw(20);
console.log("Current Balance: ", normalAccount.getBalance);

// withdrawing 90 (more than current balance)
normalAccount.withdraw(90);

// withdrawing -10 (invalid)
normalAccount.withdraw(-10);

//
//
// saving account sample
console.log("\n\n\n\n");
const savingAccount = new SavingAccount(222222, "Saeed", 0.05, 3); // 5% interest rate, transaction wage: 3
console.log(savingAccount.getInfo(), "Balance: ", savingAccount.getBalance);

// depositing 100
savingAccount.deposit(100);

// checking current interest
console.log("Current interest amount: ", savingAccount.getInterest());

// withdrawing 20
savingAccount.withdraw(20);
console.log("Current Balance: ", savingAccount.getBalance);

// withdrawing 75 (total amount = 78, higher than current balance which is 77)
savingAccount.withdraw(75);
