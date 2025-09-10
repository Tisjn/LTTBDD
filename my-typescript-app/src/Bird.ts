import type { Flyable } from "./Flyable";

export class Bird implements Flyable {
  constructor(public name: string) {}

  fly(): void {
    console.log(`${this.name} is flying`);
  }
}
