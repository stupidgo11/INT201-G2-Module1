//nested function
//ex1
{
  let x, y, z
  function A(m) {
    let a, b
    //A() can access x, y, z, m, a, b
    function B(n) {
      let c, d
      //B() can access x, y, z, m, a, b, n, c, d
      function C(o) {
        let e, f
        //C() can access x, y, z, m, a, b, n, c, d, e, f
      }
    }
  }
}
//ex2
{
  let a = 1
  function x(m) {
    let a = 555
    let b = 2
    function y(n) {
      let c = 3
      console.log(
        `Function y can access => a: ${a},b: ${b},m: ${m},n: ${n},c: ${c}`
      )
      function z(o) {
        let d = 4
        console.log(
          `Function can access z => a: ${a},b: ${b},m: ${m},n: ${n},c: ${c},o: ${o},d: ${d}`
        )
      }
      return z //for outside of function can call z() pass y()
    }
    console.log(`Function x can access => a: ${a},b: ${b},m: ${m}`)
    return y //for outside of function can call y() pass x()
  }
  console.log(`Global scope => a: ${a}`)

  const fny = x(100)
  const fnz = fny(888)
  fnz(999)
}
