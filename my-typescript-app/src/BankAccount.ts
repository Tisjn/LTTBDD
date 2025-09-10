export class BankAccount {
  constructor(private balance = 0) {}

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount
      console.log(`Deposited $${amount}. New balance: $${this.balance}`)
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`)
    } else {
      console.log("Insufficient funds")
    }
  }

  getBalance(): number {
    return this.balance
  }
}
