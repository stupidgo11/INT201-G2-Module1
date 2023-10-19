const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]

const getAttendanceRate = (student) =>
  (student.attendance.filter(Boolean).length / student.attendance.length) * 100

const getAvgScore = (student) =>
  student.testScores.reduce((total, current) => (total += current)) /
  student.testScores.length

const underPerformStudents = (students) => {
  const underPerform = []
  students.forEach((student) => {
    if (getAttendanceRate(student) < 80 && getAvgScore(student) < 70) {
      underPerform.push({
        name: student.name,
        attendanceRate: getAttendanceRate(student),
        avgScore: getAvgScore(student)
      })
    }
  })
  return underPerform
}
console.log(underPerformStudents(students))
