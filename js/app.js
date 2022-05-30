// Cached Elements
// const toDoInput = document.getElementById('todo-input')
// const submitButton = document.getElementById("submit-button")
// const toDoList = document.getElementById("todo-list")

const toDoInput = document.getElementById('todo-input')
const submitButton = document.querySelector("#submit-button")
const toDoList = document.querySelector("#todo-list")
const resetButton = document.querySelector("#reset-button")

// New To Do
submitButton.addEventListener('click', function() {
  const newToDo = document.createElement('li')
  // Don’t Allow Empty Items to be Added to the To-do List
  if (toDoInput.value !== "") {
    newToDo.textContent = toDoInput.value
    newToDo.className = 'todo-item'
    toDoInput.value = ""
    toDoList.appendChild(newToDo)
  }
})


// Reset Button
// https://stackoverflow.com/questions/3387427/remove-element-by-id
resetButton.addEventListener('click', function() {
  toDoInput.value = ""
  const allToDos = document.querySelectorAll('.todo-item')
  console.dir(allToDos)
  allToDos.forEach(task => task.remove())
})


// # Level Ups 🚀

// ## Delete an Item on Click
// We’ll learn a better way to manage the state in our applications tomorrow, but for now, add an event listener to an existing cached element reference and manipulate the DOM to remove individual items from the to-do list when we click on them.


// ## Research
// Do some research into the `form` element and the `submit` event tied to the `form` element. Then, optionally integrate it into this app (this is not shown in the solution code).