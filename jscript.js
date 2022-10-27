let myLibrary = [];

const form = document.getElementById('addBookForm');
const grid = document.getElementById('bookGrid');

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

function addBookToLibrary() {
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    const read = form.elements['read'].checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function addBookCard() {
    const titleVal = form.elements['title'].value;
    const authorVal = form.elements['author'].value;
    const pagesVal = form.elements['pages'].value;
    const readVal = form.elements['read'].checked;

    const bookcard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const rmButton = document.createElement('button');

    bookcard.classList.add('book-card');
    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');




    title.textContent = "~" + titleVal + "~";
    author.textContent = authorVal;
    pages.textContent = pagesVal + " pages";
    rmButton.textContent = "Remove";

    rmButton.setAttribute('id','rmButton')

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
    bookcard.dataset.arrayid = myLibrary.length;

}

function removeBook(id) {
    myLibrary.slice(id);
    const bookCard = document.querySelector('[data-arrayid="' + id + '"]');
    bookCard.remove();
    var collection = document.getElementsByClassName('book-card');
    for (var i = 0; i < collection.length; i++) { //reassigns proper data-arrayid
        collection[i].dataset.arrayid = i;
    };
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookCard();
    addBookToLibrary();
    form.reset();
});

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'rmButton'){
        removeBook(e.target.parentNode.dataset.arrayid);
     }
 });
