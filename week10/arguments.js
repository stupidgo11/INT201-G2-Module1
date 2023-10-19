//parameters = arguments array-like object => {0:parameters[0],1:parameters[1],2:parameters[2]}
{
  //formal parameters(n1, n2, ...n3)
  function ops(n1, n2, n3) {
    console.log(arguments) //special objects
    console.log('arguments length:', arguments.length) //6
    for (const a of arguments) {
      console.log(a)
    }
  }
  ops(1, undefined, 'james', true, false, 10.5) //actual parameters, arguments object stores colloection at actual parameters
  console.log('---------------------')
}

//set default for argument(parameter)
{
  function ops(n1 = 0, n2 = false, n3 = 'unknown') {
    console.log(n1, n2, n3)
  }
  //default use when function receive undefined parameter or doesn't receive that parameter
  ops(1, undefined, 'james') //1 false james
  ops(undefined, undefined, undefined) //0 false unknown
  ops() //0 false unknown
  ops(555, true, 'js') //555 true js
  console.log('---------------------')
}

//rest arguments
{
  //formal parameters(n1, n2, ...n3)
  function ops3(n1, n2, ...n3) {
    console.log('arguments length:', arguments.length)
    for (const argu of arguments) {
      console.log(argu)
    }
    console.log('n3:', n3) //n3: [ 'xyz', 10.5, 100 ]
  }
  ops3(1, true, 'xyz', 10.5, 100) //actual parameters, arguments object stores collections at actual parameters
  console.log('---------------------')
  function sum(...nums) {
    return nums.reduce((total, current) => total + current, 0)
  }
  console.log(sum(1, 2, 3))
  console.log(sum(1, 2, 3, 4, 5))
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
  console.log('---------------------')
}
