class Todo {
  static nextId = 1
  constructor(description) {
    this.id = Todo.nextId++
    this.description = description
  }
  getTodo() {
    return this
    // return { id: this.id, description: this.description }
  }
  setDescription(newDescription) {
    this.description = newDescription
  }
}
module.exports = { Todo }
