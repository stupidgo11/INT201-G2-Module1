//create object with object literals
const st1 = {
    studentId: 65130500105, 
    firstname: 'Natthaphol',
    lastname: 'Nirattisaikul',
    studentId: 1 //dont be use same name of property because it will replace value
}
console.log(typeof st1)
console.log(st1)
const st2 = {} //empty object
console.log(Object.prototype.isPrototypeOf(st2))
console.log(typeof st2)

console.log(Object.keys(st1)) //array of property key
console.log(Object.values(st1)) //array of property value

const st3 = {
    firstname: 'Yada', 
    lastname: 'Jenrungrodsakul', 
    studentId: 65130500017
}
console.log(st3)

//conposite object : address is nested in st4 object
const st4 = {
    firstname: 'Pasit', 
    lastname: 'Winyan', 
    studentId: 65130500124,
    address: {province: 'Bangkok', country: 'Thailand'},
    //property value can store function
    // getFullname: function () {
    //     return `${this.firstname} ${this.lastname}`
    // },

    //shortcut property function (remove :function)
    getFullname () {
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st4.getFullname()) //Pasit Winyan
//get property 1) objectname.property 2) objectname["propertykey"]
console.log(st4.firstname)
console.log(st4['lastname']) //dynamic key (useful in loop)

//dynamic property: add a new one, update or delete existing property
st4.email = 'Pasit.winy@kmutt.ac.th' //add property email to st4
st4.lastname = 'Winy' //update property email to st4
console.log(st4)
delete st4.email //delete property email to st4
console.log(st4)
st4.getAddress = function () {
    //add a new property that stores function
    return this.address
}
console.log(st4.getAddress())
console.log(Object.prototype.isPrototypeOf(st4))
console.log(Date.prototype.isPrototypeOf(st4))

//get values of nested property
console.log(st4.address.country)
console.log(st4['address']['country'])
