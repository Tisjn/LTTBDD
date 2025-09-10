import type { Book } from "./Book"
import type { User } from "./User"

export class Library {
  private books: Book[] = []
  private users: User[] = []

  addBook(book: Book): void {
    this.books.push(book)
    console.log(`Added book: ${book.title}`)
  }

  addUser(user: User): void {
    this.users.push(user)
    console.log(`Added user: ${user.name}`)
  }

  getBooks(): Book[] {
    return this.books
  }

  getUsers(): User[] {
    return this.users
  }
}
