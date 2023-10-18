const students = [
  {
    name: 'James',
    attendance: [true, false, true, true],
    testScores: [78, 54, 90, 89]
  },
  {
    name: 'Earn',
    attendance: [true, false, false, true],
    testScores: [32, 54, 45, 68]
  },
  {
    name: 'Book',
    attendance: [true, true, true, true],
    testScores: [78, 54, 90, 89]
  }
]

const getAttendanceRate = (student) => {
  let check = 0
  student.attendance.forEach((x) => {
    if (x) {
      check++
    }
  })
  return (check / student.attendance.length) * 100
}

const getAvgScore = (student) => {
  let total = 0
  student.testScores.forEach((current) => {
    total += current
  })
  return total / student.testScores.length
}

const underPerformStudents = (students) => {
  const underPerform = []
  students
    .filter(
      (student) => getAttendanceRate(student) < 80 && getAvgScore(student) < 70
    )
    .forEach((filterStd) => {
      underPerform.push({
        name: filterStd.name,
        attendanceRate: getAttendanceRate(filterStd),
        avgScore: getAvgScore(filterStd)
      })
    })
  return underPerform
}

console.log(underPerformStudents(students))

