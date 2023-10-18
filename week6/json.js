//how to check empty object
const obj1 = {}
const obj2 = { id: 1, name:'Somchai' }
const obj3 = { ...obj2 } //spread operator copy only property content not structure
const obj4 = { ...obj2, id: 2 } //can be replace values
//wrong way to check
if(obj1 === {}) console.log(`object is an empty`)
else console.log(`object is not empty`)

//first way check with json
function isEmptyJSON(obj) {
    if(JSON.stringify(obj) === `{}`) return `object is an empty`
    else return `object is not empty`
}
console.log('==========')
console.log(isEmptyJSON(obj1))
console.log(isEmptyJSON(obj2))

//second way check with Object.keys
function isEmpty(obj) {
    if(Object.keys(obj).length === 0) return `object is an empty`
    else return `object is not empty`
}
console.log('==========')
console.log(isEmpty(obj1))
console.log(isEmpty(obj2))
