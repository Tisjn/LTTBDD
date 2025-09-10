import type { Vehicle } from "./Vehicle";

export class VehicleCar implements Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`${this.brand} car is starting`);
  }

  stop(): void {
    console.log(`${this.brand} car is stopping`);
  }
}
