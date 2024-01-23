function Job(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
}
  
let jobs = [];
  
function addJob() {
    let id = prompt("Nhập ID công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Công việc đã hoàn thành? (true/false)");
  
    completed = (completed.toLowerCase() === 'true');
  
    let newJob = new Job(id, title, description, completed);
    jobs.push(newJob);
  
    console.log("Công việc đã được thêm vào danh sách.");
}
  
function displayJobs() {
    console.log("Danh sách công việc:");
    for (let i = 0; i < jobs.length; i++) {
        console.log(`ID: ${jobs[i].id}, Title: ${jobs[i].title}, Description: ${jobs[i].description}, Completed: ${jobs[i].completed}`);
    }
}
  
function searchJobById() {
    let searchId = prompt("Nhập ID công việc cần tìm:");
    let foundJob = jobs.find(job => job.id === searchId);
  
    if (foundJob) {
      console.log(`Công việc có ID ${searchId}:`);
      console.log(`Title: ${foundJob.title}, Description: ${foundJob.description}, Completed: ${foundJob.completed}`);
    } else {
      console.log("Không tìm thấy công việc với ID đã nhập.");
    }
}
  
while (true) {
    console.log("\nMenu:");
    console.log("1. Thêm mới công việc");
    console.log("2. Hiển thị danh sách công việc");
    console.log("3. Tìm kiếm công việc theo ID");
    console.log("4. Thoát chương trình");
  
    let choice = prompt("Nhập lựa chọn:");
  
    switch (choice) {
        case '1':
            addJob();
            break;
        case '2':
            displayJobs();
            break;
        case '3':
            searchJobById();
            break;
        case '4':
            console.log("Chương trình đã kết thúc.");
            process.exit();
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}