let mid = 5
let final = 10
//nested function => function inside function
//closure function => keep variable after execute
//nested function, closure function
const layer1 = () => {
  let mid = 10
  let final = 20
  const layer2 = () => {
    return mid + final
  }
    return layer2
    //return function => closure function
}
const last= layer1()
console.log(last())
