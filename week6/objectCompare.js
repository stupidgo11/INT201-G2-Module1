// === compare reference address between two objects
const st1 = {
    studentId: 65130500105, 
    firstname: 'Natthaphol',
    lastname: 'Nirattisaikul',
    studentId: 1 //dont be use same name of property because it will replace value
}
const st2 = st1
const st3 = {
    firstname: 'Yada', 
    lastname: 'Jenrungrodsakul', 
    studentId: 65130500017
}
const st4 = {
    firstname: 'Yada', 
    lastname: 'Jenrungrodsakul', 
    studentId: 65130500017
}
console.log('=====Compare by reference=====')
console.log(st1 === st3) //false
console.log(st1 === st2) //true 
console.log(st3 === st4) //false

//create compare function to compare two students
function compareStudent(s1, s2) {
    return s1.studentId === s2.studentId
}
console.log('=====Compare by function to check values=====')
console.log(compareStudent(st1,st2))
console.log(compareStudent(st3,st4))

