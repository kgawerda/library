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

function addBookToLibrary(title, author, pages, read, library){
    let book=new Book(title, author, pages, read);
    library.push(book);
}

let myLibrary=[];
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false, myLibrary);


//let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary[0].read = true;
console.log(myLibrary[0].info());
