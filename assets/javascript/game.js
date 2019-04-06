// An array of objects representing the characters
var characters = [
  {
    name: "MasterChief",
    healthpoints: 130,
    attack: 8,
    counterattack: 5,
    imgURL: "assets/images/masterchief.png"
  },
  {
    name: "Arbiter",
    healthpoints: 100,
    attack: 12,
    counterattack: 5,
    imgURL: "assets/images/arbiter.png"
  },
  {
    name: "Johnson",
    healthpoints: 150,
    attack: 4,
    counterattack: 20,
    imgURL: "assets/images/johnson.jpg"
  },
  {
    name: "Tartarus",
    healthpoints: 125,
    attack: 8,
    counterattack: 30,
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
var baseAttack = 0;
var gameActive = true;

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
  $("#defender").find(".healthpoints").html("<p>" + defender.healthpoints + "</p>");
  $("#yourCharacter").find(".healthpoints").html("<p>" + attacker.healthpoints + "</p>");
}

function battleOutcome() {
  if (defenderChosen.healthpoints <= 0) {
    defenderDead = true;
  }
  if (characterChosen.healthpoints <= 0) {
    characterDead = true;
  }
  $("#you-attacked").text('You attacked ' + defenderChosen.name + ' for ' + characterChosen.attack + ' damage. '
    + defenderChosen.name + ' attacked you back for ' + defenderChosen.counterattack + ' damage.')

}
function allDefendersDead() {
  // checks if anyone is left in enemies available div..returns true if noone is left
  if ($(".enemiesAvailable").children().length == 0) {
    return true;
  }
  else {
    return false;
  }
}

//When you click a character card the following runs to decide if it's your char or an enemy
$(".characterCard").on("click", function () {
  var name = $(this).attr('id');
  gameActive = true;
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
      defenderChosen = false;
      defenderDead = false;
      $("#you-attacked").text('');
      if (allDefendersDead()) {
        alert("You win!");
        gameActive = false;
        // set a timeout to reset the game
      } else if (characterDead) {
        alert("You died!");
        $("#main-page").hide();
        gameActive = false;
        // set a timeout to reset the game
      }
    } else if (characterDead) {
      alert("You died!")
      $("#main-page").hide();
    }
  } else {
    alert("You need to select an enemy to attack!");
  }
})


//TO-DO
// 1. Create a game reset function. Will make use of gameActive variable.
// 2. Do a timeout function for the game reset function. 
// 3. Wins and losses on page!!
 