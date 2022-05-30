// Cached Elements
const toDoInput = document.getElementById('todo-input')
const submitButton = document.querySelector("#submit-button")
const toDoList = document.querySelector("#todo-list")

// 2. Add an event listener to the button that listens to click events. When the button is clicked, we need to:

//     - Create a new `li` element.

//     - Set the text of the newly created `li` element to the text that the user has entered into the `input` element.

//     - Reset the text in the `input` field to an empty string.

//     - Add the new `li` element to the page, inside the `ul` element.







// # Level Ups 🚀

// ## Don’t Allow Empty Items to be Added to the To-do List
// Right now, if a user clicks the `button` element without any text in the `input` field, an empty bullet point is created. Prevent this from happening.

// ## Reset Button
// Add a Reset button. After the Reset button is clicked all items in the to-do list should be removed. The input field should also be cleared so that it doesn’t hold any text.

// ## Delete an Item on Click
// We’ll learn a better way to manage the state in our applications tomorrow, but for now, add an event listener to an existing cached element reference and manipulate the DOM to remove individual items from the to-do list when we click on them.

// ## Center All the Items on the Page
// This will take some research! Make a `css` directory in your project and a `style.css` file in that directory. Link this new file in your HTML. In this file, add styling that centers everything we’ve built on the page, both horizontally and vertically. Also, add a `div` element to your HTML so that the `input` element and `button(s)` are on the same line.

// ## Research
// Do some research into the `form` element and the `submit` event tied to the `form` element. Then, optionally integrate it into this app (this is not shown in the solution code).