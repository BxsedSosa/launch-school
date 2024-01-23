let readline = require('readline-sync');


function loanCalculator() {

  while(true) {

    console.log('')
    prompt('Welcome to Loan Calculator!');
    console.log('--------------------------------------------------------- \n');
  
    prompt('What is your loan amount?: \n');
    let loanAmount = readline.question();
  
    while (Number(loanAmount) === 0 || !Number(loanAmount)) {
      prompt('Enter a number value or number bigger than 0!: \n');
      loanAmount = readline.question();
    }
  
    prompt('What is your loan APR?: ');
    prompt('(Enter whole number) \n');
    let loanApr = parseInt(readline.question());
  
    while (!Number(loanApr)) {
      if (loanApr === 0) {
        break;
      } else {
        prompt('Enter a number value or number bigger than 0!: \n');
        loanApr = parseInt(readline.question());  
      }
    }
  
    prompt('What is the loan duration?: ');
    prompt('(Enter duration in years) \n');
    let loanDuration = readline.question();
  
    while (Number(loanDuration) === 0 || !Number(loanDuration)) {
      prompt('Enter a number value or number bigger than 0!: \n');
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
  

    tryAgain()
    
    break;
  }
}

function tryAgain() {
  console.log('Would you like to try again? 1) Yes or 2) No: \n');
  let answer = Number(readline.question());
  if (answer === 1) {
    loanCalculator();
  } else {
    return;
  }
}

function prompt(message) {
  console.log(`=> ${message}`)
}

loanCalculator()