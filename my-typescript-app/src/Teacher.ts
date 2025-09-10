import { Person } from "./Person"

export class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    public subject: string,
  ) {
    super(name, age)
  }

  introduce(): void {
    console.log(`Hello, I'm ${this.name}, I teach ${this.subject}`)
  }
}
