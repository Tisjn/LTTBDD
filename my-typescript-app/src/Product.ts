export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  static filterExpensiveProducts(products: Product[]): Product[] {
    return products.filter((product) => product.price > 100)
  }
}
