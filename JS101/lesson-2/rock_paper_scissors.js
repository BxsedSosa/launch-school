const readline = require('readline-sync');
const VALID_CHOICE = ['rock', 'paper', 'scissors'];

function main() {
  while (true) {

    let playerMove = getPlayerChoice();
    let cpuMove = getCpuMove();

    printWinner(playerMove, cpuMove);
    prompt(`You chose ${playerMove}, Computer chose ${cpuMove}`); return tryAgain();

  }
}

main();

function getPlayerChoice() {
  prompt(`Choose one: ${VALID_CHOICE.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICE.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return choice;
}

function getCpuMove() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICE.length);
  let cpuMove = VALID_CHOICE[randomIndex];

  return cpuMove;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function printWinner(choice, computerChoise) {
  if ((choice === 'rock' && computerChoise === 'scissors') ||
      (choice === 'paper' && computerChoise === 'rock') ||
      (choice === 'scissors' && computerChoise === 'paper')
  ) {
    prompt('You Win!');
  } else if ((choice === 'rock' && computerChoise === 'paper') ||
            (choice === 'paper' && computerChoise === 'scissors') ||
            (choice === 'scissors' && computerChoise === 'rock')
  ) {
    prompt('Computer Wins!');
  } else {
    prompt("It's a tie!");
  }
}

function tryAgain() {
  prompt('Would you like to play again?: 1) Yes 2) No');
  let answer = Number(readline.question());

  if (answer === 1) {
    main();
  } else if (answer === 2) {
    return false;
  } else {
    while (!answer === 1 || 2) {
      prompt('Please choose 1 or 2!');
      answer = Number(readline.question());
      if (answer === 1) {
        main();
      } else if (answer === 2) {
        return false;
      }
    }
  }
}