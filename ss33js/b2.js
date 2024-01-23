let phoneBook = [
    { name: "John Doe", phoneNumber: "123-456-7890", email: "john.doe@example.com" },
    { name: "Jane Smith", phoneNumber: "987-654-3210", email: "jane.smith@example.com" },
];
console.log("Danh bạ điện thoại:");
for (let i = 0; i < phoneBook.length; i++) {
    console.log(`Liên lạc ${i + 1}:`);
    console.log("Tên:", phoneBook[i].name);
    console.log("Số điện thoại:", phoneBook[i].phoneNumber);
    console.log("Email:", phoneBook[i].email);
    console.log("------------------------");
}
  