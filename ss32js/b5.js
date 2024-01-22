function Book(author, name) {
    this.author = author;
    this.name = name;
}
const books = [
    new Book("Author1", "Book1"),
    new Book("Author2", "Book2"),
    new Book("Author3", "Book3"),
];
const inputAuthor = prompt("Nhập tên tác giả:");
let foundBooks = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].author.toLowerCase() === inputAuthor.toLowerCase()) {
        foundBooks.push(books[i]);
    }
}
if (foundBooks.length > 0) {
    console.log("Sách của tác giả " + inputAuthor + ":");
    for (let i = 0; i < foundBooks.length; i++) {
      console.log("Tên sách: " + foundBooks[i].name);
    }
} else {
    console.log("Không tìm thấy sách của tác giả " + inputAuthor);
}
  