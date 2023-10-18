//every(),some() return boolean
//every() => every elements must be pass the test to return true
//some() => some elements must be pass the test to return true

const fruits = ['apple', 'mango', 'orange', 'pineapple']
//return boolean to check wheter all fruits start with vowel characters [a,e,i,o,u]
const vowelFruits = fruits.every((fruit) =>
  fruit.toLowerCase().startsWith('a' || 'e' || 'i' || 'o' || 'u')
)
const vowelIncludesFruits = fruits.some((fruit) =>
  ['a', 'e', 'i', 'o', 'u'].includes(fruit[0].toLowerCase())
)
console.log(vowelFruits) //false
console.log(vowelIncludesFruits) //true
