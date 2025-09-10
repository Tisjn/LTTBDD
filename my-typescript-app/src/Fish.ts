import type { Swimmable } from "./Flyable";

export class Fish implements Swimmable {
  constructor(public name: string) {}

  swim(): void {
    console.log(`${this.name} is swimming`);
  }
}
