const { Todo } = require('./myLibs/Todo.js')
const tm = require('./TodoManagement.js')
const td1 = new Todo('Sleeping') //Todo { id: 1, description: 'sleeping' }
console.log(td1.getTodo()) //Todo { id: 1, description: 'sleeping' }

const { addTodo, getTodo } = tm()
//'Play games' store in TodoManagement but sharing id with Todo becasue id is generate by Todo class
console.log(addTodo('Play games')) //1
console.log(getTodo()) //[ Todo { id: 2, description: 'Play games' } ]

const td2 = new Todo('Running') //Todo { id: 3, description: 'Running' }
console.log(td2) //Todo { id: 3, description: 'Running' }
