export class BaseAnimal {
  constructor(public name: string) {}

  protected makeSound(): void {
    console.log(`${this.name} makes a sound`)
  }
}

export class Dog extends BaseAnimal {
  bark(): void {
    console.log(`${this.name} barks: Woof!`)
  }

  protected makeSound(): void {
    this.bark()
  }
}

export class Cat extends BaseAnimal {
  meow(): void {
    console.log(`${this.name} meows: Meow!`)
  }

  protected makeSound(): void {
    this.meow()
  }
}
