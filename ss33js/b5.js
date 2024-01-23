function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
}
  
Book.prototype.borrow = function() {
    if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`Sách "${this.title}" đã được mượn.`);
    } else {
        console.log(`Sách "${this.title}" đã được mượn trước đó.`);
    }
};
  
Book.prototype.returnBook = function() {
    if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`Sách "${this.title}" đã được trả.`);
    } else {
        console.log(`Sách "${this.title}" đã có sẵn, không cần trả.`);
    }
};
  
function Library() {
    this.books = [];
}
Library.prototype.isBookAvailable = function(bookTitle) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title === bookTitle) {
            return this.books[i].isAvailable;
        }
    }
    return false; 
};
  
let book1 = new Book("Book1", "Author1", 2020);
let book2 = new Book("Book2", "Author2", 2018);
let book3 = new Book("Book3", "Author3", 2022);
  
let library = new Library();
library.books.push(book1, book2, book3);
  
console.log("Trạng thái sách trước khi mượn:");
console.log("Book1:", library.isBookAvailable("Book1"));
console.log("Book2:", library.isBookAvailable("Book2"));
console.log("Book3:", library.isBookAvailable("Book3"));
  
book1.borrow();
book2.borrow();
book2.returnBook();
  
console.log("\nTrạng thái sách sau khi mượn/trả sách:");
console.log("Book1:", library.isBookAvailable("Book1"));
console.log("Book2:", library.isBookAvailable("Book2"));
console.log("Book3:", library.isBookAvailable("Book3"));
  