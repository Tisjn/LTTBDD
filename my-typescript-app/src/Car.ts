export class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
  ) {}

  showCarInfo(): void {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`)
  }
}
