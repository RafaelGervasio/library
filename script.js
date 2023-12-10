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

function closeModal(){
    modal.close()
}

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
    const display_books_section = document.querySelector(".display_books")
    display_books_section.innerHTML = '';

    myLibrary.forEach( book => {
        const book_container = document.createElement('div')
        book_index_in_library = myLibrary.indexOf(book).toString()

        book_container.classList.add('book_container')
        book_container.classList.add(book_index_in_library)


        const title_paragraph = document.createElement('p')
        title_paragraph.textContent = `📖 ${book.title}`
        title_paragraph.classList.add('title_paragraph')

        const author_paragraph = document.createElement('p')
        author_paragraph.textContent = `by ${book.author}`
        author_paragraph.classList.add('author_paragraph')

        const pages_paragraph = document.createElement('p')
        pages_paragraph.textContent = `Number of pages: ${book.pages}`
        pages_paragraph.classList.add('pages_paragraph')

        const read_button = document.createElement('button')
        read_button.textContent = `Read: ${book.read}`
        read_button.classList.add('read_book_button')

        const remove_book_button = document.createElement('button')
        remove_book_button.textContent = 'Remove book'
        remove_book_button.classList.add('remove_book_button')

        const buttons_container = document.createElement('div')
        buttons_container.classList.add('buttons_container')
        buttons_container.appendChild(read_button)
        buttons_container.appendChild(remove_book_button)


        read_button.addEventListener('click', () => {
            (book.read === true) ? book.read = false : book.read = true
            displayAllBooks()
        })

        remove_book_button.addEventListener('click', () => {
            book_index_in_library = +(book_container.classList.item(1))
            myLibrary.splice(book_index_in_library, 1)
            displayAllBooks()
        })

        book_container.appendChild(title_paragraph)
        book_container.appendChild(author_paragraph)
        book_container.appendChild(pages_paragraph)
        book_container.appendChild(buttons_container)

        display_books_section.appendChild(book_container)
    })
}

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").checked

    let new_book = new Book(title, author, pages, read)

    addBookToLibrary(new_book)
    closeModal()
    displayAllBooks()
})

displayAllBooks()




// // TODO Refactoring the code

// // TODO Displaying the books

// // TODO Remove books

// // TODO Buttont to change 'read' status

// // TODO Styling the page
