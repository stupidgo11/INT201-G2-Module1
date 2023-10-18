//Object.create()
function Person (id, fn, ln) {
    this.id = id,
    this.firstname = fn,
    this.lastname = ln
}
const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)
console.log(pp1) //dont have own structure but copy other structure
//copy entries(keys and values) of based object(p1)
console.log(pp1.id) 
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1))
console.log(Person.prototype.isPrototypeOf(pp1))

//add new one property that owner
pp1.hobbie = ['reading', 'shopping']
console.log(pp1) //log show only own property
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))