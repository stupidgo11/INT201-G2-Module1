//constructor function
function Person (id, fn, ln) {
    this.id = id,
    this.firstname = fn,
    this.lastname = ln
}

const p1 = new Person(1001, 'Adam', 'Jo')
const p2 = new Person(1002, 'Henry', 'Moore')
const p3 = new Person(1003, 'Eva', 'Wilson')

console.log(p1)
console.log(p2)
console.log(p3)
//can  add a new one, update or delete existing property
p1.email = "adma@gmail.com"
console.log(p1)
//Object prototype<-Person prototype<-p1
//create object with constructor function its will create a new prototype of Object
//but create with object literals its not create a new prototype
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))