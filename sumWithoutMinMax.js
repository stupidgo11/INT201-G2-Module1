function sumArray(array) {
  // Check for invalid inputs
  if (!array || !Array.isArray(array) || array.length <= 1) {
    return 0
  }
  // Sum all the numbers except the highest and lowest
  const sum = array.reduce(
    (acc, num) => acc + (num === Math.max(...array) ? 0 : num === Math.min(...array) ? 0 : num),
    0
  )

  return sum
}

// Example usage:

console.log(sumArray([6, 0, 1, 10, 10]))
