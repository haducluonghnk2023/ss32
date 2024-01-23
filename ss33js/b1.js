let person = {
    name: "John",
    age: 25,
    address: "123 tran duy hung",
};
console.log("Thông tin ban đầu:");
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
person.birthdate = "1999-01-01";
delete person.age;
console.log("\nThông tin sau khi thêm và xóa thuộc tính:");
console.log("Tên:", person.name);
console.log("Ngày sinh:", person.birthdate);
console.log("Địa chỉ:", person.address);
  