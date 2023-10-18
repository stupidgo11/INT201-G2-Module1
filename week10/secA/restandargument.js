function ops(n1 = 0, n2, ...n3) {
  // console.log(n1, n2, n3)
  console.log('length:', arguments.length)
  for (const ar of arguments) {
    console.log(ar)
  }
}