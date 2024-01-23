let phoneBook = [
    { name: "John Doe", phoneNumber: "123-456-7890", email: "john.doe@example.com", showFullInfo },
    { name: "Jane Smith", phoneNumber: "987-654-3210", email: "jane.smith@example.com", showFullInfo },
];
function showFullInfo() {
    console.log("Tên:", this.name);
    console.log("Số điện thoại:", this.phoneNumber);
    console.log("Email:", this.email);
    console.log("------------------------");
}
console.log("Danh bạ điện thoại với đầy đủ thông tin:");
for (let i = 0; i < phoneBook.length; i++) {
    phoneBook[i].showFullInfo();
}
  