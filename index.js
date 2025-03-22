let player1Dice = getRandomNumber();
let player2Dice = getRandomNumber();
let heading = document.querySelector("h1");

heading.innerHTML = "Refresh Me!";

function getRandomNumber() {
  let number = Math.floor(Math.random() * 6) + 1;
  return number;
}

function changeDiceLooksPlayer1(number) {
  let dice1 = document.querySelector(".img1");
  dice1.setAttribute("src", `images/dice${number}.png`);
}

function changeDiceLooksPlayer2(number) {
  let dice2 = document.querySelector(".img2");
  dice2.setAttribute("src", `images/dice${number}.png`);
}

changeDiceLooksPlayer1(player1Dice);
changeDiceLooksPlayer2(player2Dice);
getWinner(player1Dice, player2Dice);

function getWinner(player1Dice, player2Dice) {
  if (player1Dice > player2Dice) {
    heading.innerHTML = "🚩 Player 1 wins!";
  } else if (player1Dice < player2Dice) {
    heading.innerHTML = "Player 2 wins!🚩";
  } else {
    heading.innerHTML = "Draw!";
  }
}
