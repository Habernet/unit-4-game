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
var characterChosen;
var defenderChosen;
var characterDead = false;
var defenderDead = false;
var gameActive = false;
var baseAttack = 0;

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
  defender.healthpoints -= attacker.attack;
  attacker.healthpoints -= defender.counterattack;
  console.log("defender healthpoints " + defender.healthpoints);
  console.log("attacker healthpoints " + attacker.healthpoints);
  attacker.attack = attacker.attack + baseAttack;

  // update the attacker healthpoints and the defender healthpoints on the page

  // $("#yourDefenderCard").$("p").text(defender.healthpoints);
  $("#yourDefenderCard").remove(".healthpoints").append('<p class="healthpoints">' + defender.healthpoints + '</p>');
  // update the text on the very bottom of the page to tell the player what is going on
  // the above doesn't work!! ^^^

}

function battleOutcome() {
  if (defenderChosen.healthpoints <= 0) {
    defenderDead = true;
  }
  if (characterChosen.healthpoints <= 0) {
    characterDead = true;
  }
}
// function allDefendersDead() {
//   // checks if anyone is left in enemies available div..returns true if noone is left
//   if(//enemies available div is empty){
//     return true;
//   } else {
//     return false;
//   }
// }

//When you click a character card the following runs to decide if it's your char or an enemy
$(".characterCard").on("click", function () {
  gameActive = true;
  var name = $(this).attr('id');
  if (!characterChosen) {
    for (let i = 0; i < characters.length; i++) {
      if (name === characters[i].name) {
        $("#startingText").remove();
        $("#yourCharacter").append($(this));
        $(this).attr('id', 'yourCharacterCard');
        $(this).attr('class', 'yourCharacterCard');
        characterChosen = characters[i];
        baseAttack = characterChosen.attack;
        $(".enemiesAvailable").append($(".characterCard"));
      }
    }
  } else {
    if (!defenderChosen) {
      for (let i = 0; i < characters.length; i++) {
        if (name === characters[i].name) {
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
      $("#yourDefenderCard").remove();
      console.log("HE DEAD");
      defenderChosen = false;
      defenderDead = false;
      if (allDefendersDead()) {
        alert("You win!");
        gameActive = false;
        // set a timeout to reset the game
      } else if (characterDead) {
        alert("You died!");
        gameActive = false;
        // set a timeout to reset the game
      }
    }
  } else{
    alert("You need to select an enemy to attack!");
  }
})