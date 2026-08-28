//BOOK INTERFACE

interface Book {
    title:string;
    author: string;
    pages: number;
};

const currentReading : Book = {
    title: "The Lamb",
    author: "Lucy Rose",
    pages: 336,
};

console.log(currentReading.title);
