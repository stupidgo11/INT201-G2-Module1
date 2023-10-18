function doSomething(msg){
    return msg
}
function doHi(name){
    return `Hi ${name}`
}
//export JS Module
// module.exports = doSomething
// module.exports = { doSomething, doHi }

//export ES Module
export default { doSomething, doHi }