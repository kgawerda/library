const form = document.getElementById('addBookForm');
const grid = document.getElementById('bookGrid');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        if (this.read) var string = this.title + " by " + this.author + ", " + this.pages + " pages, read";
        else var string = this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
        return string;
    }
    toggleRead() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.library = [];
    }
    addBookToLibrary() {
        const title = form.elements['title'].value;
        const author = form.elements['author'].value;
        const pages = form.elements['pages'].value;
        const read = form.elements['read'].checked;
        let book = new Book(title, author, pages, read);
        this.library.push(book);
    }
    addBookCard() {
        const titleVal = form.elements['title'].value;
        const authorVal = form.elements['author'].value;
        const pagesVal = form.elements['pages'].value;
        const readVal = form.elements['read'].checked;

        const bookcard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('button');
        const rmButton = document.createElement('button');

        bookcard.classList.add('book-card');
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');

        title.textContent = "~" + titleVal + "~";
        author.textContent = authorVal;
        pages.textContent = pagesVal + " pages";
        rmButton.textContent = "Remove";

        rmButton.setAttribute('id', 'rmButton')
        read.setAttribute('id', 'readButton')

        if (readVal) {
            read.classList.add('read');
            read.textContent = "Read";
        }
        else {
            read.classList.add('not-read');
            read.textContent = "Not read";
        }
        bookcard.appendChild(title);
        bookcard.appendChild(author);
        bookcard.appendChild(pages);
        bookcard.appendChild(read);
        bookcard.appendChild(rmButton);
        grid.appendChild(bookcard);
        bookcard.dataset.arrayid = this.library.length;
    }
    removeBook(id) {
        this.library.slice(id);
        const bookCard = document.querySelector('[data-arrayid="' + id + '"]');
        bookCard.remove();
        var collection = document.getElementsByClassName('book-card');
        for (var i = 0; i < collection.length; i++) { //reassigns proper data-arrayid
            collection[i].dataset.arrayid = i;
        };
    }
}


let myLibrary = new Library();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    myLibrary.addBookCard();
    myLibrary.addBookToLibrary();
    form.reset();
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'rmButton') {
        myLibrary.removeBook(e.target.parentNode.dataset.arrayid);
    }
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'readButton') {
        myLibrary.library[e.target.parentNode.dataset.arrayid].toggleRead();
        if (e.target.classList.contains('not-read')) {
            e.target.classList.remove('not-read');
            e.target.classList.add('read');
            e.target.textContent = "Read";
        }
        else {
            e.target.classList.remove('read');
            e.target.classList.add('not-read');
            e.target.textContent = "Not read";
        }
    }
});
