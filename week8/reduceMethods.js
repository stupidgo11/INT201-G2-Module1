//top 3 method most important
//reduce() mean reduce all elements to only one element
const fruits = ['apple', 'mango', 'orange', 'pineapple']
//'amop'
const result = fruits.reduce(
  (firstChars, fruit) => firstChars.concat(fruit[0]),
  ' '
)
console.log(result)//'amop'

const nums = [1, 2, 3, 4, 5]
const mulResult = nums.reduce((total, current) => total * current)
console.log(mulResult)

const sellProducts = [
  { id: 1, price: 100, sell: 5 },
  { id: 2, price: 50, sell: 2 },
  { id: 3, price: 25, sell: 10 }
]
const sellTotal = sellProducts.reduce(
  (total, product) => total + product.price * product.sell,
  0
)
console.log(sellTotal)//850
