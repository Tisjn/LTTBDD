export class PolymorphicAnimal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound`)
  }
}

export class PolymorphicDog extends PolymorphicAnimal {
  makeSound(): void {
    console.log(`${this.name} barks: Woof!`)
  }
}

export class PolymorphicCat extends PolymorphicAnimal {
  makeSound(): void {
    console.log(`${this.name} meows: Meow!`)
  }
}
