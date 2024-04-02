// Loops //

// Create a class to create 0bjects //
class Book {
  constructor(Title, Author, Year, Description, Genres, Audio_Duration) {
    this.title = Title;
    this.author = Author;
    this.year = Year;
    this.description = Description;
    this.genres = Genres,
    this.audio_duration = Audio_Duration
  }
}

// Fill in the Class //
const book1 = new Book("Animal Farm", "George Orwell", "1945", "blurb", "Fiction", "3 hours");
const book2 = new Book("Animal Farm2", "George Orwell2", "1942", "blurb2", "Fiction2", "3 hour2s");
const book3 = new Book("Animal Farm2", "George Orwell2", "1942", "blurb2", "Fiction2", "3 hour2s");
const book4 = new Book("Animal Farm2", "George Orwell2", "1942", "blurb2", "Fiction2", "3 hour2s");
const book5 = new Book("Animal Farm2", "George Orwell2", "1942", "blurb2", "Fiction2", "3 hour2s");

// Create Array //
const books = [book1, book2, book3, book4, book5];

// Loop all within Class //
for (const book of books) {
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
  }
  console.log("--------");
}
