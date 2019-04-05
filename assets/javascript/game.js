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
/// FOUND THIS ON THE HOMEWORK IT WILL BE HELPFUL HERE!!
// function displayImage() {
//   $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
// }


// Global Variables
// var gameActive = false;
var characterChosen;
var defenderChosen;
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
  var characterHealthPoints = $('<p class="healthpoints">');
  characterHealthPoints.text(character.healthpoints);
  characterContainer.append(characterTitle, characterImage, characterHealthPoints);
  $("#startingCharacters").append(characterContainer);
}

// Loop to add each character card on screen
for (let i = 0; i < characters.length; i++) {
  createCharDiv(characters[i]);
}

// Attack button function
function attack(attacker, defender) {
  console.log("defender " + defender);
  console.log("attacker " + attacker);
  defender.healthpoints -= attacker.attack;
  attacker.healthpoints -= defender.counterattack;
  console.log("defender healthpoints " + defender.healthpoints);
  console.log("attacker healthpoints " + attacker.healthpoints);
  // increase attack of the attacker THIS MAY NEED WORK HERE
  var attackIncrementer = attacker.attack;
  console.log("Attack is " + attacker.attack);
  attacker.attack = attacker.attack + attackIncrementer;
  console.log("Attack is now " + attacker.attack);

  // update the attacker healthpoints and the defender healthpoints on the page
  $(".p")
}

function battleOutcome() {
  if (defenderChosen.healthpoints <= 0) {
    defenderDead = true;
  }
  if (characterChosen.healthpoints <= 0) {
    characterDead = true;
  }
}


//When you click a character card the following runs to decide if it's your char or an enemy
$(".characterCard").on("click", function () {
  var name = $(this).attr('id');
  if (!characterChosen) {
    for (let i = 0; i < characters.length; i++) {
      if (name === characters[i].name) {
        console.log(this);
        $("#yourCharacter").append($(this));
        $(this).attr('id', 'yourCharacterCard');
        $(this).attr('class', 'yourCharacterCard');
        characterChosen = characters[i];
      }
    }
  } else {
    if (!defenderChosen) {
      for (let i = 0; i < characters.length; i++) {
        if (name === characters[i].name) {
          console.log(this);
          $("#defender").append($(this));
          $(this).attr('id', 'yourDefenderCard');
          $(this).attr('class', 'yourDefenderCard');
          defenderChosen = characters[i];
        }
      }
    }
  }
})

// When you click the attack button, the following runs
$("#attack").on("click", function () {
  if (characterChosen && defenderChosen) {
    attack(characterChosen, defenderChosen);
    battleOutcome();
    if (defenderDead) {
      // remove him from the page
      // his class needs to be changed when moved to defender position so this is easy
    } else if (characterDead) {
      alert("You lose!");
      // gameactive = false, reset game
    }
  }
})