class Todo {
  static runningId = 1

  static setRunningId(loadingId) {
    Todo.runningId = loadingId
  }

  constructor(id, description) {
    this.id = id 
    // console.log(this.id)
    this.description = description
    
  }

  getTodo() {
    // return { id: this.id, description: this.description, done: this.done }
    return this
  }
  setDescription(newDescription) {
    this.description = newDescription
  }

}

// export { Todo }
module.exports = Todo
