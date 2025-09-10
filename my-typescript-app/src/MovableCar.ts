import type { Movable } from "./Movable";

export class MovableCar implements Movable {
  constructor(public brand: string) {}

  move(): void {
    console.log(`${this.brand} car is moving`);
  }
}
