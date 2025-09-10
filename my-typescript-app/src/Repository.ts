export class Repository<T> {
  private items: T[] = []

  add(item: T): void {
    this.items.push(item)
  }

  getAll(): T[] {
    return this.items
  }

  getById(index: number): T | undefined {
    return this.items[index]
  }
}
