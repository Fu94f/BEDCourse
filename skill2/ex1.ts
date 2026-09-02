// INTERFACE AND TYPES ALIASES

// BOOK INTERFACE

interface Book {
    title:string;
    pages:number;
}

const book: Book = {
    title:"Dune",
    pages:412,
};

const describeBook = (book : Book) =>{
    return `The book ${book.title} has ${book.pages} pages.`
}

console.log(describeBook(book));