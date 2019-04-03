// An array of objects representing the characters
var characters = [
  {
    name: "Master Chief",
    healthpoints: 200,
    attack: 5,
    counterattack: 8,
    imgURL: "assets/images/masterchief.png"
  },
  {
    name: "Arbiter",
    healthpoints: 200,
    attack: 7,
    counterattack: 9,
    imgURL: "assets/images/arbiter.png"
  },
  {
    name: "Johnson",
    healthpoints: 150,
    attack: 5,
    counterattack: 10,
    imgURL: "assets/images/johnson.jpg"
  },
  {
    name: "Tartarus",
    healthpoints: 250,
    attack: 10,
    counterattack: 15,
    imgURL: "assets/images/tartarus.jpg"
  }
]



var createCharDiv = function(character){
  // create a variable representing a div
  var characterContainer = $('<div class="characterCard">');
  // create a variable representing an h3
  var characterTitle = $("<h3>");
  //  update the h3 with the character oject's name
  characterTitle.text(character.name);
  // make an img element
  var characterImage = $("<img>");
  //update the characterimage with the object's image
  characterImage.attr("src", character.imgURL);
  // create a variable representing a p
  var characterHealthPoints = $("<p>");
  // update the p with the object's healthpoints
  characterHealthPoints.text(character.healthpoints);
  // append the title to the container
  characterContainer.append(characterTitle, characterImage, characterHealthPoints);
  //
  // grab the div on the page and append the whole thing
  $("#startingCharacters").append(characterContainer);
}

// create a loop to create each characterCard based on the array of objects
for (let i = 0; i < characters.length; i++){
  createCharDiv(characters[i]);
}



// Global functions
// for (let i = 0; i < 4; i++){
  
// }



// function isCharacterChosen() {
//   if (yourCharacter != null) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isDefenderChosen() {
//   if (defender != null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function attack() {
//   // the yourCharacter object will have it's healthpoints decremented by the value of the counterattack of the defender object
  
// }




// Main program logic
// $(document).ready(function() {
//   // This defines what happens when you click on a .character div!
//   $(".character").on("click", function() {
  
//   });
// });
