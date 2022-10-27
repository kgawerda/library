let myLibrary=[];

const form  = document.getElementById('addBookForm');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    if (this.read) var string = this.title + " by " + this.author + ", " + this.pages + " pages, read";
    else var string = this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
    return string;
}

function addBookToLibrary(){
    const title=form.elements['title'].value;
    const author=form.elements['author'].value;
    const pages=form.elements['pages'].value;
    const read=form.elements['read'].checked;
    let book=new Book(title, author, pages, read);
    myLibrary.push(book);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    form.reset();
});
