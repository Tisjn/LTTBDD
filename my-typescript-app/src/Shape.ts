export abstract class Shape {
  abstract area(): number;

  static describe(): void {
    console.log("Shape is a geometric figure");
  }
}

export class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

export class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
