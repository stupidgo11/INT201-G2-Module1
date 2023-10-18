const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'DAVID', score: 79 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
  { name: 'david', score: 85 }
]
//incasesensitive
// find first david who have socre > 80
const findFirstDavid = studentScores.find(
  (students) => students.name.toLowerCase() === 'david' && students.score > 80
)
console.log(findFirstDavid)
//incasesensitive
// find all david who have socre > 80
const findAllDavid = studentScores.filter(
  (students) => students.name.toLowerCase() === 'david' && students.score > 80
)
console.log(findAllDavid)
