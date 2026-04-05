class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
}

class Member {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrow(book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book);
      console.log(`${this.name} borrowed ${book.title}`);
    } else {
      console.log(`${book.title} is not available`);
    }
  }

  return(book) {
    book.isAvailable = true;
    this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    console.log(`${this.name} returned ${book.title}`);
  }
}

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(book) { this.books.push(book); }
  addMember(member) { this.members.push(member); }
}

// Demo
const library = new Library();
const book1 = new Book("Things Fall Apart", "Chinua Achebe");
const member1 = new Member("Ugwu");

library.addBook(book1);
library.addMember(member1);

member1.borrow(book1);
member1.return(book1);
