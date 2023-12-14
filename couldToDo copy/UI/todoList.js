function todoUserInterface() {
  // const todosDiv = document.getElementById('todos')

  function showTodoItem(newId, newDescription) {
    const listTodoDIv = document.getElementById('listTodo')

    const  todoItemDiv =document.createElement('div')
    todoItemDiv.className= 'todoItem'
    todoItemDiv.setAttribute=('id',newId)

    const DesP = document.createElement('p')
    DesP.textContent ='newDescription'
    todoItemDiv.appendChild(DesP)

     const notDButton = document.createElement('button')
     notDButton.textContent= 'Not Done '
     todoItemDiv.appendChild(notDButton)

    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    todoItemDiv.appendChild(removeButton)

    listTodoDIv.appendChild(todoItemDiv)
  }

  
  function showNumberOfDone(numberOfDone) {
    const numberDone =document.getElementById('done')
    numberDone.textContent=`>Number of Done:${numberOfDone}`
    
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const numberNotDone =document.getElemenyId('notDone')
    numberDone.textContent=`>Number of not   Done:${numberNotDone}`
     }
  function removeTodoItem(removeId) {
    const removeItem  = document.getElementById(removeId)
    removeItem.parentElement.removeChild(removeItem)
    
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}
export { todoUserInterface }
// module.exports = todoUserInterface
