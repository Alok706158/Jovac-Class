const students = [
  { id: 1, name: "Rahul", marks: 85, city: "Delhi" },
  { id: 2, name: "Aman", marks: 45, city: "Mumbai" },
  { id: 3, name: "Priya", marks: 92, city: "Pune" },
  { id: 4, name: "Neha", marks: 76, city: "Delhi" },
  { id: 5, name: "Rohit", marks: 39, city: "Jaipur" }
];

// 1:
const studentNames = students.map(student => student.name);
console.log(studentNames);

// 2:
const studentsAbove50 = students.filter(student => student.marks > 50);
console.log(studentsAbove50);

// 3:
const studentWithId3 = students.find(student => student.id === 3);
console.log(studentWithId3);

// 4:
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log(totalMarks);

// 5:
const averageMarks = totalMarks / students.length;
console.log(averageMarks);

// 6:
const hasFailedStudent = students.some(student => student.marks < 50);
console.log(hasFailedStudent);

// 7:
const allStudentsPassed = students.every(student => student.marks >= 50);
console.log(allStudentsPassed);

// 8:
const studentsAscending = [...students].sort((a, b) => a.marks - b.marks);
console.log(studentsAscending);

// 9:
const studentsDescending = [...students].sort((a, b) => b.marks - a.marks);
console.log(studentsDescending);

// 10:
const cityNames = students.map(student => student.city);
console.log(cityNames);