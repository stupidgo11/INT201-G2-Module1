function getPassingNames(students) {
  return students
    .filter((students) => students.score >= 70)
    .map((filterStudents) => filterStudents.name.toUpperCase())
}

const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]
const passingNames = getPassingNames(studentScores)
console.log(passingNames)// all name of who scores >= 70
