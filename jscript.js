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

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
hobbit.read = true;
console.log(hobbit.info());
