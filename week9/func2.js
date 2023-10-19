const add = (n1, n2) => n1 + n2
const subtrack = (n1, n2) => n1 - n2
const doSmth1 = (n1, n2, fn) => fn(n1, n2)
const doSmth2 = (fn) => fn

const result1 = doSmth1(5, 10, add)
console.log(result1) //15
console.log(typeof result1) //number
const result2 = doSmth2(add)
console.log(result2) //function
console.log(typeof result2) //function
const result3 = doSmth2(subtrack)
console.log(result3) //function
console.log(typeof result3) //function
const result4 = doSmth2(1)
console.log(result4) //1
console.log(typeof result4) //number
const result5 = doSmth2('AAAA')
console.log(result5) //AAAA
console.log(typeof result5) //string
