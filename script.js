const modal = document.querySelector(".modal")
const open_modal = document.querySelector('.open_modal')
const close_modal = document.querySelector(".close_modal")
const form = document.querySelector(".form")

open_modal.addEventListener("click", () =>{
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
    let number_of_pages = document.querySelector("#number_of_pages").value
    let read_the_book = document.querySelector("#read_the_book").checked

    let new_book = new Book(title, author, number_of_pages, read_the_book)

    addBookToLibrary(new_book)
})
