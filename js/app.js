// Cached Elements
// const toDoInput = document.getElementById('todo-input')
// const submitButton = document.getElementById("submit-button")
// const toDoList = document.getElementById("todo-list")

const toDoInput = document.getElementById('todo-input')
const submitButton = document.querySelector("#submit-button")
const toDoList = document.querySelector("#todo-list")

// New To Do
submitButton.addEventListener('click', function() {
  const newToDo = document.createElement('li')
  if (toDoInput.value !== "") {
    newToDo.textContent = toDoInput.value
    toDoInput.value = ""
    toDoList.appendChild(newToDo)
  }
})


// # Level Ups 🚀

// ## Don’t Allow Empty Items to be Added to the To-do List
// Right now, if a user clicks the `button` element without any text in the `input` field, an empty bullet point is created. Prevent this from happening.

// ## Reset Button
// Add a Reset button. After the Reset button is clicked all items in the to-do list should be removed. The input field should also be cleared so that it doesn’t hold any text.

// ## Delete an Item on Click
// We’ll learn a better way to manage the state in our applications tomorrow, but for now, add an event listener to an existing cached element reference and manipulate the DOM to remove individual items from the to-do list when we click on them.


// ## Research
// Do some research into the `form` element and the `submit` event tied to the `form` element. Then, optionally integrate it into this app (this is not shown in the solution code).