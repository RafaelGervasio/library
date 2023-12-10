const modal = document.querySelector(".modal")
const open_modal = document.querySelector('.open_modal')
const close_modal = document.querySelector(".close_modal")
const form = document.querySelector(".form")

open_modal.addEventListener("click", () => {
    modal.showModal()  
})

close_modal.addEventListener ("click", () => {
    modal.close()
})

const myLibrary = [] // holds all the books

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function displayAllBooks(){
    myLibrary.forEach(display_book)
}

function display_book(book){
    console.log(book)
  }

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").checked

    let new_book = new Book(title, author, pages, read)

    addBookToLibrary(new_book)
})




//TODO Refactoring the code

//TODO Displaying the books
// Once a new book is created / removed, call display_books
//display_books
    //Iterate trough myLib until all books covered
    //Create a div in the DOM
    // fill out the div with info from the book

//TODO Remove books

//TODO Buttont to change 'read' status

//TODO Styling the page
