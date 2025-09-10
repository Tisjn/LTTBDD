import type { Vehicle } from "./Vehicle";

export class Bike implements Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`${this.brand} bike is starting`);
  }

  stop(): void {
    console.log(`${this.brand} bike is stopping`);
  }
}
