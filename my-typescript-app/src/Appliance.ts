export abstract class Appliance {
  constructor(public brand: string) {}

  abstract turnOn(): void
}

export class Fan extends Appliance {
  turnOn(): void {
    console.log(`${this.brand} fan is turning on`)
  }
}

export class AirConditioner extends Appliance {
  turnOn(): void {
    console.log(`${this.brand} air conditioner is turning on`)
  }
}
