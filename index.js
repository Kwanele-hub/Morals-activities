const students = [{name:"Ziphozonke", mark:"25"}, {name:"Siphelele", mark:"34"},
 {name:"Thembelani", mark:"28"},{name:"Kwanele", mark:"40"}, {name:"Yandisa", mark:"45"}]

function displayStudents(students){
let names = students.map((student)=>student.name)
return names
}
console.log(displayStudents(students))
// 
const grades = [25, 34, 28, 40, 45];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
};
// 
const average = getAvg(grades);
console.log(average);

function topAchieve(students){
  let names = students.map((student) =>student.name)
  return 
}
console.log(topAchieve(students))