//push() return array length after adding element at array[array.length] to array
//pop() return array length after delete element at array[array.length] to array
//unshift() return array length after adding element at array[0] to array
//shift() return array length after delete element at array[0] to array
//fill() change elements
//fill(newElement, start, end)

//splice() return new array contains remove elements of array and can add new elements to array
//splice(start, deleteCount, addNewElement)
const fruits = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
//splice with remove
const deleteFruits = fruits.splice(1, 2)
console.log(fruits) //[ 'apple', 'pineapple', 'banana', 'grape' ]
console.log(deleteFruits) //[ 'mango', 'orange' ]

//splice with add
const deleteFruitsAdd = fruits.splice(2, 0, 'mango', 'rambutant')
console.log(fruits) //[ 'apple', 'pineapple', 'mango', 'rambutant', 'banana', 'grape' ]
console.log(deleteFruitsAdd) //[]

//splice with replace
const deleteFruitsReplace = fruits.splice(2, 1, 'mangosteen')
console.log(fruits) //[ 'apple', 'pineapple', 'mangosteen', 'rambutant', 'banana', 'grape' ]
console.log(deleteFruitsReplace) //[ 'mango' ]

//slice() return new array of slicing element
//slice(start), slice(start, stop)
//if start is negative => start at end of array and reverse
//if stop is negative =>
const newFruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
const citrus = newFruits.slice(2, -1)
console.log(citrus) //[ 'Lemon', 'Apple' ]

//includes()
const animals = ['ant', 'dogs', 'cats', 'Bird', 'Birds']
const message = 'Practice make perfect'
//string includes check substrings >> casesensitive
console.log(message.includes('ice')) //true
console.log(message.includes('make')) //true
//array includes check string in array elements >> casesensitive
console.log(animals.includes('ats')) //false
console.log(animals.includes('cats')) //true

//reverse() no return but edit an original array
animals.reverse()
console.log(animals) //[ 'Birds', 'Bird', 'cats', 'dogs', 'ant' ]

//sort() no return but edit an original array
//defalut:sort by string text(ASCII code) UPPER > lower
animals.sort()
console.log(animals) //[ 'Bird', 'Birds', 'ant', 'cats', 'dogs' ]

const nums = [5, 1, 20, 1000, 2, 3, 50]
console.log(nums.sort()) //[1, 1000, 2, 20, 3, 5, 50]

//sort(num1, num2) if expression return positive its will swaping value position otherwise no swaping
console.log(nums.sort((a, b) => a - b)) // ascendent [1, 2, 3, 5, 20, 50, 1000 ]
console.log(nums.sort((a, b) => b - a)) // descendent [1000, 50, 20, 5, 3, 2, 1 ]

const persons = [
  { id: 1, fullname: 'Susan Jo' },
  { id: 3, fullname: 'John Lee' },
  { id: 2, fullname: 'ann Smith' }
]
//HOMEWORK
//return sorted array by fullname (ascending order and ignore case)

persons.sort((a, b) => {
  return a.fullname.localeCompare(b.fullname)
})

persons.sort((a, b) => {
  if (a.fullname.toLocaleLowerCase() < b.fullname.toLocaleLowerCase())
    return 1 //swap
  else return 0 //no swap
})

//localeCompare is same like toCompare in JAVA
console.log(persons)