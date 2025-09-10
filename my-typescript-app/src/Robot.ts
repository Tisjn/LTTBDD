import type { Movable } from "./Movable";

export class Robot implements Movable {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} robot is moving`);
  }
}
