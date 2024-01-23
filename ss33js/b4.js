function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}
Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Published Year: ${this.publishedYear}`);
    console.log("------------------------");
}; 
function Library() {
    this.books = [];
}
Library.prototype.addBook = function(book) {
    this.books.push(book);
};
Library.prototype.displayLibrary = function() {
    console.log("Danh sách sách trong thư viện:");
    for (let i = 0; i < this.books.length; i++) {
        this.books[i].displayInfo();
    }
};
let book1 = new Book("Book1", "Author1", 2020);
let book2 = new Book("Book2", "Author2", 2018);
let book3 = new Book("Book3", "Author3", 2022);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibrary();
  