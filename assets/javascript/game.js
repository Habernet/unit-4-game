// An array of objects representing the characters
var characters = [
  {
    name: "MasterChief",
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
// Global Variables
// var gameActive = false;
var characterChosen = false;
var defenderChosen = false;

// Function to create the character cards
var createCharDiv = function (character) {
  var characterContainer = $('<div class="characterCard">');
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

// Loop to add each character card on screen
for (let i = 0; i < characters.length; i++) {
  createCharDiv(characters[i]);
}

// Function to move chosen character to yourCharacter div
// var chooseCharacter = function(){
//   $("#yourCharacter").append($(????))
// }
// Ask a TA!! Not currently necessary

$(".characterCard").on("click", function (event) {
  var name = $(event.target).attr('id');
  console.log(name);
  if (characterChosen === false) {
    if (name === "Tartarus") {
      console.log("Tart");
      $("#yourCharacter").append($("#Tartarus"));
      console.log("I got tart to be a character");
      characterChosen = "Tartarus";
    } else if (name === "Johnson") {
      console.log("John");
      $("#yourCharacter").append($("#Johnson"));
      console.log("I got Johnny to be a character");
      characterChosen = "Johnson";
    } else if (name === "MasterChief") {
      console.log("Chief");
      $("#yourCharacter").append($("#MasterChief"));
      console.log("I got chief to be a character");
      characterChosen = "MasterChief";
    } else {
      console.log("Arby");
      $("#yourCharacter").append($("#Arbiter"));
      console.log("I got Arby to be a character");
      characterChosen = "Arbiter";
    }
  } else {
    // whatever you clicked's name will be an enemy.
    // move that enemy to the enemy div.
    if (defenderChosen === false) {
      if (name === "Tartarus") {
        console.log("tart is enemy");
        $("#defender").append($("#Tartarus"));
        console.log("I got tart to be an enemy!");
        defenderChosen = "Tartarus";
      } else if (name === "Johnson") {
        console.log("John is an enemy");
        $("#defender").append($("#Johnson"));
        console.log("I got Johnny to be an enemy!");
        defenderChosen = "Johnson";
      } else if (name === "MasterChief") {
        console.log("Chief is an enemy");
        $("#defender").append($("#MasterChief"));
        console.log("I got Chief to be an enemy!");
        defenderChosen = "MasterChief";
      } else {
        console.log("Arby is an enemy");
        $("#defender").append($("#Arbiter"));
        console.log("I got Arby to be an enemy!");
        defenderChosen = "Arbiter";
      }
    }
  }
})
