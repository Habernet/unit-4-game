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
var gameActive = false;


var createCharDiv = function(character){
  var characterContainer = $('<div class="characterCard">');
  // add an id based on the object name
  characterContainer.attr('id', character.name);
  var characterTitle = $("<h3>");
  characterTitle.text(character.name);
  var characterImage = $("<img>");
  characterImage.attr("src", character.imgURL);
  var characterHealthPoints = $("<p>");
  characterHealthPoints.text(character.healthpoints);
  characterContainer.append(characterTitle, characterImage, characterHealthPoints);
  $("#startingCharacters").append(characterContainer);
}

// create a loop to create each characterCard based on the array of objects
for (let i = 0; i < characters.length; i++){
  createCharDiv(characters[i]);
}

$(".characterCard").on("click", function(event){
  name = $(event.target).attr('id');
  console.log(name);
  if(gameActive === false){
    gameActive = true;
    
    
    // move chosen character to yourCharacter div
    }



})



// Global functions
