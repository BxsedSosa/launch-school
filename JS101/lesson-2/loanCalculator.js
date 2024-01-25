const readline = require('readline-sync');
const MESSAGE = require('./loanCalulator.json')

function loanCalculator() {

  while(true) {
    console.log();
    prompt(MESSAGE.welcomeMessage);
    console.log(MESSAGE.space);
  
    prompt(MESSAGE.amountMessage);
    let loanAmount = readline.question();
  
    while (Number(loanAmount) === 0 || !Number(loanAmount)) {
      prompt(MESSAGE.error);
      loanAmount = readline.question();
    }
  
    prompt(MESSAGE.aprMessage);
    prompt('(Enter whole number) \n');
    let loanApr = parseInt(readline.question());
  
    while (!Number(loanApr)) {
      if (loanApr === 0) {
        break;
      } else {
        prompt(MESSAGE.error);
        loanApr = parseInt(readline.question());  
      }
    }
  
    prompt(MESSAGE.durationMessage);
    prompt('(Enter duration in years) \n');
    let loanDuration = readline.question();
  
    while (Number(loanDuration) === 0 || !Number(loanDuration)) {
      prompt(MESSAGE.error);
      loanDuration = parseInt(readline.question());
    }

    let monthlyApr = (loanApr * 0.01) / 12;
    monthlyApr.toFixed(4);
    let monthlyDuration = loanDuration * 12;
    let monthlyPayment =  loanAmount * (monthlyApr / (1 - Math.pow((1 + monthlyApr), (-monthlyDuration))));

    let noAprMonthly = (loanAmount / monthlyDuration);

    if (loanApr === 0) {
      console.log(`Your Monthly Payments will be $${noAprMonthly.toFixed(2)} \n`);
    } else {
      console.log(`Your Monthly payments will be $${monthlyPayment.toFixed(2)} \n`);
    }
    tryAgain();
    break;
  }
}

function tryAgain() {
  console.log(MESSAGE.againMessage);
  let answer = Number(readline.question());
  if (answer === 1) {
    loanCalculator();
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

loanCalculator();