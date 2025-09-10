export class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  work(): void {
    console.log(`${this.name} is working`)
  }
}

export class Manager extends Employee {
  constructor(
    name: string,
    salary: number,
    public department: string,
  ) {
    super(name, salary)
  }

  manage(): void {
    console.log(`${this.name} is managing ${this.department} department`)
  }
}

export class Developer extends Employee {
  constructor(
    name: string,
    salary: number,
    public programmingLanguage: string,
  ) {
    super(name, salary)
  }

  code(): void {
    console.log(`${this.name} is coding in ${this.programmingLanguage}`)
  }
}
