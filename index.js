const students = [{name:"Ziphozonke", mark:"25"}, {name:"Siphelele", mark:"34"},
 {name:"Thembelani", mark:"28"},{name:"Kwanele", mark:"40"}, {name:"Yandisa", mark:"45"}]

function displayStudents(students){
let names = students.map((student)=>student.name)
return names
// const marks = [];

// function getAvg(grades) {
//   const total = grades.reduce((acc, c) => acc + c, 0);
//   return total / grades.length;
// }

// const average = getAvg(grades)};
// console.log(grades);
// 
}
console.log(displayStudents(students))