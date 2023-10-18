//destructuring+rest on array
const [a, ...b] = ['a', 'b', 'c', 'd']
console.log(a) //'a'
console.log(b) //[ 'b', 'c', 'd' ]
//destructuring +rest on object
const { id: studentId, ...n } = { id: 1, title: 'js', authors: 'Jame Smiths' }
console.log(studentId) //1
console.log(n) //{ id: 1, title: 'js', authors: 'Jame Smiths' }

//unpacking elements
{
//unpacking elements of function => array parameter
{
function arrayAdd1([ , , x1 ], [ , , y1 ]){
    return x1 + y1
}
function arrayAdd2([ x1, y1 ], [ x2, y2 ]){
    return x1 + x2 + y1 + y2
}
function arrayAdd3([ x1, y1 ], [ x2, y2 ]){
    return [ x1 + x2, y1 + y2 ]
}
const arr1=[ 5, 8 ]
const arr2=[ 2, 7 ]
const arr3=[ 5, 8, 4 ]
const arr4=[ 2, 7, 7 ]
console.log(arrayAdd1(arr1, arr2))//NaN
console.log(arrayAdd1(arr3, arr4))//11
console.log(arrayAdd2(arr1, arr2))//22
console.log(arrayAdd3(arr1, arr2))//[ 7, 15 ]
}
//unpacking elements of function => object paremeter
{
const student = { id:105, name:'James' }

const { id : studentID } = student
let { name : studentName } = student
studentName = "John"
console.log(studentName)//John
console.log(student.name)//James

function doSmth({ id : studentIID }){
    return studentIID
}
console.log(doSmth(student))//105
}

}