export class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number,
  ) {}

  displayBook(): void {
    console.log(`"${this.title}" by ${this.author} (${this.year})`)
  }
}
