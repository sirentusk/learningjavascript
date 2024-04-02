// Functions //

function greeting() {
    console.log("Hello Siren!");
}

greeting();

function greeting(text) {    
    console.log(text);
}

greeting("Salutations, Siren!");

function greeting(text = "Hi Siren!") {    
    console.log(text);    
    return text.length;
}

greeting();

function Book(title, author, year, blurb, genres, audioduration){
this.title = title,
this.author = author,
this.year = year,
this.blurb = blurb,
this.genres = genres,
this.audioduration = audioduration
this.printout = function(){console.log(`This book is ${this.title} by ${this.author} from ${this.year}. It's genre is ${this.genres} and it's audio duration is ${this.audioduration}.`)}
};

const book1 = new Book("Animal Farm", "George Orwell", "1945", "blurb", "Fiction", "3 hours");
const book2 = new Book("Animal Farm2", "George Orwell2", "1942", "blurb2", "Fiction2", "3 hour2s");

book1.printout();
book2.printout();
