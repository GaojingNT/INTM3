// import { todoManagement } from '../lib/todoManagement.js'
// import { todoUserInterface } from '../UI/todoList.js'
// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoUserInterface()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos,
//   clearTodo
// } = todoManagement()

const todoManagement = require('../lib/todoManagement.js')
const todoUserInterface = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos,
  clearTodo
} = todoManagement()

const addTodoHandler = () => {
 
  
}
const addButtonHandler = () => {
  document
    .getElementById(todoId)
    .children[1].addEventListener('click', notDoneButtonHandler)
  document
    .getElementById(todoId)
    .children[2].addEventListener('click', removeButtonHandler)
  document.querySelector('input').value = ''
}

const notDoneButtonHandler = () => {
 
}

const setdoneStyle = (doneButtonFire) => {
  doneButtonFire.textContent = 'Done'
  doneButtonFire.style = 'background-color: green;color: white'
}

const removeButtonHandler = () => {
  
}

const beforeUnloadHandler = (event) => {
  event.preventDefault()
  localStorage.setItem('todos', JSON.stringify(getTodos()))
  clearTodo()
}

const loadHandler = () => {
  
}

// export {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler,
//   beforeUnloadHandler,
//   loadHandler
// }

module.exports = {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  beforeUnloadHandler,
  loadHandler
}
