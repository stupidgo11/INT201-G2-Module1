// //interpreter translater
// function greeting(someone){
//     return 'hello, ' + someone
// }
// let $myName = 'Yada Jenrungrodsakul'
// $myName = 10 //wealy and dynamic data stype
// console.log('starting....')
// //asynchronous programming
// setTimeout(()=>{
//     console.log("doing more complex task finish...")
// }, 10000)
// setTimeout(()=>{
//     console.log("doing simple task finish...")
// }, 2000)//งานนี้เสร็จก่อนก็เข้าคิวก่อน ถึงจะมาทีหลัง
// console.log(greeting($myName))
// console.log('Good bye...')
// let msg = "I'm a student"
// let msg2 = 'I"m a student'
// console.log(msg)
// console.log(msg2)

let a = null
console.log(a)
let total
console.log(total)
if(total === undefined) console.log('varible does not have initial value')
if(a===null) console.log('variable has null value')
if('2'==2) console.log(`'2'==2' : ${'2' == 2}`)
if('2'===2) console.log(`'2'===2' : ${'2' === 2}`)

//object sample
const obj={id:1001, name: 'pen',price:100}
const obj2 = {id:2001}
//obj = obj2 //obj cannot change referance value
obj.id = 999 //but obj can update its propoties