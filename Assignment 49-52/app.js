// Question 1

// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var formData = new FormData(event.target);
//     var formValues = Object.fromEntries(formData.entries());
//     displayFormData(formValues);
//     event.target.reset();
//   });

//   function displayFormData(data) {
//     var formDataDiv = document.getElementById("formData");
//     let html = "<h3>Form Data:</h3>";
//     html += "<p><strong>Name:</strong> " + data.name + "</p>";
//     html += "<p><strong>Email:</strong> " + data.email + "</p>";
//     html += "<p><strong>Password:</strong> " + data.password + "</p>";
//     formDataDiv.innerHTML = html;
// }


// Question 2

// function toggleDetails(itemIndex) {
//     var details = document.getElementsByClassName("details")[itemIndex];
//     var btnn = document.getElementsByClassName("btn")[itemIndex];

//     if (details.style.display === "none") {
//         details.style.display = "inline";
//         btnn.textContent = "Read Less";
//     } else {
//         details.style.display = "none";
//         btnn.textContent = "Read More";
//     }
// }


// Question 3

// var studentData = [];
// var tableBody = document.querySelector("#studentTable tbody");
// var form = document.querySelector("#studentForm");

// function addStudent() {
//     var name = document.querySelector("#name").value;
//     var age = document.querySelector("#age").value;
//     var grade = document.querySelector("#grade").value;

//     var student = {
//     id: Date.now(),
//     name: name,
//     age: age,
//     grade: grade
// };
//     studentData.push(student);
//     displayStudents();
//     clearForm();
// }

// function displayStudents() {
//     tableBody.innerHTML = "";

//     studentData.forEach(function (student) {
//         var row = document.createElement("tr");

//         var nameCell = document.createElement("td");
//         nameCell.textContent = student.name;
//         row.appendChild(nameCell);

//         var ageCell = document.createElement("td");
//         ageCell.textContent = student.age;
//         row.appendChild(ageCell);

//         var gradeCell = document.createElement("td");
//         gradeCell.textContent = student.grade;
//         row.appendChild(gradeCell);

//         var editCell = document.createElement("td");
//         var editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.addEventListener("click", function () {
//             editStudent(student);
//         });
//         editCell.appendChild(editButton);
//         row.appendChild(editCell);

//         var deleteCell = document.createElement("td");
//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function () {
//             deleteStudent(student);
//             });
//         deleteCell.appendChild(deleteButton);
//         row.appendChild(deleteCell);

//         tableBody.appendChild(row);
//     });
// }

// function editStudent(student) {
//     form.style.display = "block";
//     document.querySelector("#studentId").value = student.id;
//     document.querySelector("#name").value = student.name;
//     document.querySelector("#age").value = student.age;
//     document.querySelector("#grade").value = student.grade;
// }

// function cancelEdit() {
//     form.style.display = "none";
//     clearForm();
// }

// function updateStudent() {
//     var studentId = document.querySelector("#studentId").value;
//     var name = document.querySelector("#name").value;
//     var age = document.querySelector("#age").value;
//     var grade = document.querySelector("#grade").value;

//     var studentIndex = studentData.findIndex(function (student) {
//         return student.id === parseInt(studentId);
//     });

//     if (studentIndex > -1) {
//                 studentData[studentIndex].name = name;
//         studentData[studentIndex].age = age;
//         studentData[studentIndex].grade = grade;
//         displayStudents();
//         clearForm();
//     }
// }

// function deleteStudent(student) {
//     var confirmation = confirm("Are you sure you want to delete this student?");
//     if (confirmation) {
//     var studentIndex = studentData.findIndex(function (s) {
//     return s.id === student.id;
// });

// if (studentIndex > -1) {
//     studentData.splice(studentIndex, 1);
//     displayStudents();
//     }
//     }
// }

// function clearForm() {
//     document.querySelector("#studentId").value = "";
//     document.querySelector("#name").value = "";
//     document.querySelector("#age").value = "";
//     document.querySelector("#grade").value = "";
// }
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     if (document.querySelector("#studentId").value) {
//         updateStudent();
//     } else {
//         addStudent();
//     }
// });