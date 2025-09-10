import type { Payment } from "./Payment";

export class CardPayment implements Payment {
  constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(
      `Paid $${amount} with card ending in ${this.cardNumber.slice(-4)}`
    );
  }
}
