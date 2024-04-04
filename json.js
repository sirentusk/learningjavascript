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

const fs = require("fs");
function printFile (err, data) {
console.log(data.toString());
}

fs.readFile("[filename].txt", printFile);

async function [function name] ([arguments]) {
    ...
    let [variable name] = await [promise object];
    ...
}

// Get JSON files

fetch('./flights.json') // Get the JSON file data
  .then(response => response.json()) // Give a promise from the file
    if (!response.ok) { // Guard Clause (if 404/500 error message, stop the function)
      console.log('Problem'); // Print the error in console
      return; // Stop the function if false
  }
  
  .then (data => { // Parse the data
    console.log(data); // Print the data in console
  });

  .catch(error => { // Check for errors
    console.log(error); // Print errors in console
  })

fetch('./airports.json') // Get the JSON file data
  .then(response => response.json()) // Give a promise from the file
    if (!response.ok) { // Guard Clause (if 404/500 error message, stop the function)
      console.log('Problem'); // Print the error in console
      return; // Stop the function if false
  }
  
  .then (data => { // Parse the data
    console.log(data); // Print the data in console
  });

  .catch(error => { // Check for errors
    console.log(error); // Print errors in console
  })
