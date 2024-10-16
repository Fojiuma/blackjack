let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let cards;
let message = "";
let CardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.getElementById("message-el");
let start = document.getElementById("start-el")

let player = {
   name: "Fojiuma",
 chips: "145"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +player.chips

console.log(cards);

function getRandomCard() {
  let randomNmunber = Math.floor(Math.random() * 13) + 1;
  if (randomNmunber > 10) {
    return 10;
  } else if (randomNmunber === 1) {
    return 11;
  } else {
    return randomNmunber;
  }
}

function startGame() {
  isAlive = true;
  let firstcard = getRandomCard();
  let secondcard = getRandomCard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}
function renderGame() {
  CardsEl.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    CardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got black jack";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "YOU ARE OUT OF THE GAME!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
  sum = sum + card;
  cards.push(card);
  renderGame();
      }
}

// let hasSolvedChallenge = false
// let hasHintLeft = false

// if(hasSolvedChallenge === false && hasHintLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

// let randomnumber =
// console.log(randomnumber)

// function rollDice() {
//     let flooredNumber = Math.floor(Math.random() * 7 ) + 1
//     return flooredNumber
// }

// console.log(rollDice())

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     }else if(player1Time > player2Time){
//         return  player2Time
//     }else{
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// function totalRaceTime() {
//     return player1Time +player2Time
// }

// let totaltime = totalRaceTime()
// console.log(totaltime)

// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }

// for (let i = 10; i < 101;i += 10){
// console.log (i)
// }

//  let messages = [
//     "hey hows it going",
//     "im great",
//     "oya na we go word later",

//  ]
// //  i < length ensures that everything within the array is logged out to the console including newly added elements
// for (let i = 0; i < length; i += 1){
//     // console.log(messages[i])

// }
// let cards = [7, 3, 9]
// for (i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }

// let sentence = ["hello ", "my ", "name ", "is ", "fojiuma"]
// let greetingEl = document.getElementById("greeting-el")

// for (i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " ";
// }

// let firstname = "FOJIUMA"
// let lastname = " LANGAYA"
// let fullName = lastname + firstname;

// console.log(fullName);
// let mypoints = 3

// function add3points() {
// mypoints += 3
// }

// function remove1point() {
//     mypoints -= 1
// }

// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()

// console.log(mypoints)

// let errorEl = document.getElementById(error)

// function error() {
//      errorEl.textContent = "Something went wrong, please try again"
// }
// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// let sumEl = document.getElementById("sum-el");

//  function add() {
//      let result = num1 +num2;
//      sumEl.textContent = "Sum: " + result;
//  }

//  function subtract() {
//     let result = num1 - num2;
//     sumEl.textContent = "subtraction: " + result
//  }

//  function divide() {
//     let result = num1 / num2;
//     sumEl.textContent = "division: " + result;
//  }

//  function multiply() {
//     let result = num1 * num2;
//     sumEl.textContent = "Multiplication: " + result;
//  }

// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")

// let count = 0;

// function increment() {
//     count += 1;
//     countEl.innerText= count

// }
// // text content makes it easier to read than innerText
// function save() {
//     let counter = count + " - "
//     saveEl.textContent += counter
//     countEl.textContent = 0;
//     console.log(count);
//     count = 0;
// }

// function number() {
// console.log(42)
// }

// number()

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function logtime() {
//     totaltime = lap1 + lap2 +lap3;
//     console.log(totaltime)
//     or
//     console.log(lap1 + lap2 + lap3)
// }
// logtime()

// function incrementLap() {
//     lapscompleted = lapscompleted + 1;

// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapscompleted)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "LANGAYA FOJIUMA"
// let greeting = "Welcome back "

// welcomeEl.innerHTML = greeting + name;
