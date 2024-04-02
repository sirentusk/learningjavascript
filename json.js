// JavaScript Object Notation (JSON) //

// JSON //
const favbooks = {
  "Animal_Farm":{
    "title":"Animal Farm",
    "author":"George Orwell",
    "year":"1945",
    "blurb":"A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible. When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.",
    "categories":[
      "Fiction",
      "Dystopian"
      ],
    "audio duration":"3 hrs and 11 mins"
  }
}

// Print full JSON raw //
console.log(favbooks);

// Print part of JSON //
console.log(favbooks.Animal_Farm.title);
console.log(favbooks.Animal_Farm.author);
console.log(favbooks.Animal_Farm.year);

// Create Animal_Farm as an object //
let Animal_Farm = favbooks.Animal_Farm.title + " by " + favbooks.Animal_Farm.author + " in " + favbooks.Animal_Farm.year + ".";
printBook(Animal_Farm);

// Print concatenated Animal Farm details //
function printBook(Animal_Farm) {
    console.log(`This book is ${Animal_Farm}`);
}
