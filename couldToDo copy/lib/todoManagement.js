// import { Todo } from './todo.js'
const Todo = require('./todo.js')
function todoManagement() {
  let todos = []
  function addTodo(id, desc, done) {
    todos.push(new Todo(id, desc, done))
    return todos.id
  }
  function clearTodo() {

  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {

  }
  function getNumberOfNotDone() {

  }
  function setItemToDone() {
     }
  function loadTodos() {
   
  }
  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone,
    loadTodos,
    clearTodo
  }
}
// export { todoManagement }
module.exports = todoManagement
