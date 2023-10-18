function counter() {
  let count = 1
  function increment() {
    return ++count //+ before return
  }
  function decrement() {
    return --count //- before return
  }
  function getCount() {
    return count
  }
  return { increment, decrement, getCount } // 3 function shares count
}

const { increment, decrement, getCount } = counter()

console.log(increment())
console.log(increment())
console.log(getCount())
console.log(decrement())
console.log(decrement())
