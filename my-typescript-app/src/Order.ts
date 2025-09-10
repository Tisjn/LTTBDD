import type { Product } from "./Product"

export class Order {
  private products: Product[] = []

  addProduct(product: Product): void {
    this.products.push(product)
  }

  calculateTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0)
  }

  getProducts(): Product[] {
    return this.products
  }
}
