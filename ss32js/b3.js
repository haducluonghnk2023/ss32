function Student(id, name) {
    this.id = id;
    this.name = name;
}
const numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
 let students = [];
for (let i = 0; i < numberOfStudents; i++) {
const id = prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
const name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");
const student = new Student(id, name);
students.push(student);
}
console.log("Danh sách sinh viên:");
for (let i = 0; i < students.length; i++) {
console.log("Sinh viên thứ " + (i + 1) + " - ID: " + students[i].id + ", Tên: " + students[i].name);
}
  