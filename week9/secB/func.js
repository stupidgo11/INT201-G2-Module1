const op1 = (fn) => fn()
const op2 = (fn) => fn
const greeting = () => 'Hello'
const goodbye = () => 'Bye Bye'

//function to test
const test = (op1, op2, fn1, fn2) => {
  const result1 = op1(fn1)
  console.log(typeof result1) //string
  console.log(result1) //'Hello'
  const result2 = op1(fn2)
  console.log(typeof result2) //string
  console.log(result2) //'Bye Bye'
  const result3 = op2(fn1)
  console.log(typeof result3) //function
  console.log(result3) //Function : greeting
  const result4 = op2(fn2)
  console.log(typeof result4) //function
  console.log(result4) //Function : goodbye
}
test(op1, op2, greeting, goodbye)

const a = greeting
const b = greeting()
console.log(a) //Funtion : greeting
console.log(b) //'Hello'
console.log(a()) //'Hello'
