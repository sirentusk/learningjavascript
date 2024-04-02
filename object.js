// Objects //

let book1 = {    
    title: "Animal Farm",    
    author: "George Orwell",    
    year: 1945
}

function printBook(book1) {
    console.log(`This book is ${book1}`);
}

let Book1 = book1.title + " by " + book1.author + " in " + book1.year + ".";
printBook(Book1);
