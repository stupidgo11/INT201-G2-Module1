//import JS Module
//const displayMessage = require('./myLibs/doSmth.js')
// const {doHi, doSomething } = require('./myLibs/doSmth.js')
// console.log(doSomething("hello"))//hello
// console.log(doHi("james"))//Hi james

//import ES Module
import echo from './myLibs/doSmth.js'
const TodoManagement = () =>{
    const todos = []
    let todoId = 1
    const addTodo = (desc) => {
        todos.push({ id:todoId++, description:desc })
        return todos.length
    }
    const findTodo = (searchId) => todos.find(todo=>todo.id===searchId)
    const findIndexTodo = (searchId) => todos.findIndex(todo=>todo.id===searchId)
    const removeTodo = (removeId) => todos.splice(findIndexTodo(removeId),1)
    const getTodo = () => todos

    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodo }
}

const tdm = TodoManagement()
console.log(tdm.addTodo('reading')) //1
console.log(tdm.addTodo('swimming')) //2
console.log(tdm.getTodo())
//[
//     Todo { id: 1, description: 'reading' },
//     Todo { id: 2, description: 'swimming' }
//   ]
console.log(tdm.findTodo(1)) //Todo { id: 1, description: 'reading' }
console.log(tdm.findIndexTodo(2)) //1
tdm.removeTodo(2)
console.log(tdm.getTodo()) //[ Todo { id: 1, description: 'reading' } ]
