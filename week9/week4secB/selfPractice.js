const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeEvenNumbers(array) {
  const evenNumbers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array.splice(i, 1)[0])
    }
  }
  return evenNumbers
}
const evenNumbers = removeEvenNumbers(myArray)
// evenNumbers will now contain the array [2, 4, 6, 8, 10]
// myArray will now contain the array [1, 3, 5, 7, 9]

console.log(evenNumbers)
console.log(myArray)
