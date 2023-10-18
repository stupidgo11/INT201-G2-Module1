class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
  }

  getFullName() {
    return `${this.lastName}, ${this.firstName}`
  }

  getAge() {
    let currentDateMilli = Date.now()
    let birthDateMilli = this.dateOfBirth.getTime()
    let diffMilli = currentDateMilli - birthDateMilli
    let diffDate = new Date(diffMilli)
    return diffDate.getFullYear() - 1970 //date fucntion is start at 1970
  }
  
  getAgeEZ() {
    let currentDate = new Date(Date.now())
    return currentDate.getFullYear() - this.dateOfBirth.getFullYear()
  }

  isEqual(anotherPerson) {
    return (
      this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
      this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
    )
  }

  toString() {
    return `${this.getFullName()} ${this.getAge()}`
  }
}

const p1 = new Person('Natthaphol', 'Nira', new Date(2004, 2, 19))
const p2 = new Person('Yada', 'Jenr', new Date(2004, 4, 23))
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p1.isEqual(p2))
console.log(p1.isEqual(p1))
console.log(p1.toString())
console.log(p2.toString())
