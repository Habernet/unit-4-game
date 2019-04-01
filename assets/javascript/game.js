// Objects representing the characters
var masterChief = {
  name: "Master Chief",
  healthpoints: 200,
  attack: 5,
  counterattack: 8,
  increaseAttack: function() {
    this.attack += this.attack;
  },
  isDead: function() {
    if (this.healthpoints <= 0) {
      return true;
    }
  }
};

var arbiter = {
  name: "Arbiter",
  healthpoints: 150,
  attack: 7,
  counterattack: 8,
  increaseAttack: function() {
    this.attack += this.attack;
  },
  isDead: function() {
    if (this.healthpoints <= 0) {
      return true;
    }
  }
};

var majorJohnson = {
  name: "Major Johnson",
  healthpoints: 130,
  attack: 10,
  counterattack: 12,
  increaseAttack: function() {
    this.attack += this.attack;
  },
  isDead: function() {
    if (this.healthpoints <= 0) {
      return true;
    }
  }
};

var tartarus = {
  name: "Tartarus",
  healthpoints: 180,
  attack: 8,
  counterattack: 7.5,
  increaseAttack: function() {
    this.attack += this.attack;
  },
  isDead: function() {
    if (this.healthpoints <= 0) {
      return true;
    }
  }
};

// Global variables
var yourCharacter = null;
var defender = null;

// Grab elements on the page

var youAttackedText = $("#you-attacked");
var attackedYouText = $("#attacked-you");

// Global functions
function chooseCharacter() {
  // if (div's ID = masterChief){
  //    move masterChief to "Your Character" div
  //    set yourCharacter to the masterChief obj
  // }else if( div's ID = arbiter ){
  //     move arbiter to "Your Character" div
  //     set yourCharacter to the arbiter obj
  // }else if(div's ID = tartarus){
  //      move tartarus to "Your Character" div
  //      set yourCharacter to tartarus obj
  //}else{
  //          move majorJohnson to "Your Character" div
  //          set yourCharacter to majorJohnson obj
  //}
}
function chooseDefender() {
  // code will match the div's ID to the name of the character
  // moves it to the defender div
  // sets defender to chosen defender's obj
  // may require if else
}

function isCharacterChosen() {
  if (yourCharacter != null) {
    return true;
  } else {
    return false;
  }
}
function isDefenderChosen() {
  if (defender != null) {
    return true;
  } else {
    return false;
  }
}

// function isDefenderDead() {
//   if (defender.healthpoints <= 0) {
//     return true;
//   }
// }
/// MIGHT NOT NEED THIS^^^

function attack() {
  // the yourCharacter object will have it's healthpoints decremented by the value of the counterattack of the defender object
  yourCharacter.healthpoints =
    yourCharacter.healthpoints - defender.counterattack;
  // the defender object will have it's healthpoints decemremented by the value of the attack of the yourCharacter object
  defender.healthpoints = defender.healthpoints - yourCharacter.attack;
  // displays Text in #you-attacked and # attacked-you
  youAttackedText.textcontent =
    "You attacked " +
    defender.name +
    "for" +
    yourCharacter.attack +
    "damage." +
    defender.name +
    "retaliated with" +
    defender.counterattack +
    "damage.";

  // the yourCharacter object will have it's attack incremented by the method increaseAttack()
  yourCharacter.increaseAttack();
}

// Main program logic
$(document).ready(function() {
  // This defines what happens when you click on a .character div!
  $(".character").on("click", function() {
    if (isCharacterChosen()) {
      if (isDefenderChosen()) {
        alert("You have to fight the current defender!");
      } else {
        chooseDefender();
      }
    } else {
      chooseCharacter();
    }
  });

  $("#attack").on("click", function() {
    // calls attack function and then displays updated stats on the page
    attack();
    if (isDefenderDead()) {
      // move defender to dead area
      // restore health of yourCharacter ???
    }

    // may need a function to display updated stats?
  });
});
