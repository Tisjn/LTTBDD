import { Person } from "./Person"

export class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age)
  }

  displayAllInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
  }
}
