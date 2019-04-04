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
var characterDead = false;
var defenderDead = false;

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

// Attack button function





// Function to move chosen character to yourCharacter div
// var chooseCharacter = function(){
//   $("#yourCharacter").append($(????))
// }
// Ask a TA!! Not currently necessary


//When you click a character card the following runs
$(".characterCard").on("click", function () {
  var name = $(this).attr('id');
  console.log(name);
  if (characterChosen === false) {
    if (name === "Tartarus") {
      $("#yourCharacter").append($(this));
      $(this).attr('id', 'yourCharacterCard');
      $(this).attr('class', 'yourCharacterCard');
      characterChosen = characters[3];
      console.log(characterChosen);
    } else if (name === "Johnson") {
      $("#yourCharacter").append($(this));
      $(this).attr('id', 'yourCharacterCard');
      $(this).attr('class', 'yourCharacterCard');
      characterChosen = characters[2];
      console.log(characterChosen);
    } else if (name === "MasterChief") {
      $("#yourCharacter").append($(this));
      $(this).attr('id', 'yourCharacterCard');
      $(this).attr('class', 'yourCharacterCard');
      characterChosen = characters[0];
      console.log(characterChosen);
    } else if (name === "Arbiter") {
      $("#yourCharacter").append($(this));
      $(this).attr('id', 'yourCharacterCard');
      $(this).attr('class', 'yourCharacterCard');
      characterChosen = characters[1];
      console.log(characterChosen);
    }
  } else {
    if (defenderChosen === false) {
      if (name === "Tartarus") {
        $("#defender").append($(this));
        defenderChosen = characters[3];
        console.log(defenderChosen);
      } else if (name === "Johnson") {
        $("#defender").append($(this));
        defenderChosen = characters[2];
        console.log(defenderChosen);
      } else if (name === "MasterChief") {
        $("#defender").append($(this));
        defenderChosen = characters[0];
        console.log(defenderChosen);
      } else if (name === "Arbiter") {
        $("#defender").append($(this));
        defenderChosen = characters[1];
        console.log(defenderChosen);
      }
    }
  }
})

// When you click the attack button, the following runs
$("#attack").on("click", function () {
  console.log("I got here");
  var attack = function (characterChosen, defenderChosen) {
    // defender's healthpoints will decrease by characters attack
    // character's healthpoints will decrease by the defenders counterattack
    defenderChosen.healthpoints = defenderChosen.healthpoints - characterChosen.attack;
    characterChosen.healthpoints -= defenderChosen.counterattack;
    console.log(defenderChosen.healthpoints);
    console.log(characterChosen.healthpoints);
  }
  if (characterChosen === true && defenderChosen === true) {
    // attack function 
    attack(characterChosen, defenderChosen);
  }
})

