//need info from user
  //loan amount
  // APR
  // loan duration

//Break down info from user
  // make apr convert down to monthly interest rate
  //break down loan duration in months

let readline = require('readline-sync');


function loanCalculator() {
  console.log('')
  prompt('Welcome to Loan Calculator!');
  console.log('--------------------------------------------------------- \n');

  prompt('What is your loan amount?: \n');
  let loanAmount = readline.question();

  while (!Number(loanAmount)) {
    prompt('Enter a number value!: \n');
    loanAmount = readline.question();
  }

  prompt('What is your loan APR?: ');
  prompt('(Enter whole number) \n');
  let loanApr = parseInt(readline.question());

  while (!Number(loanApr)) {
    prompt('Enter a number value!: \n');
    loanApr = parseInt(readline.question());
  }

  prompt('What is the loan duration?: ');
  prompt('(Enter duration in years) \n');
  let loanDuration = readline.question();

  let monthlyApr = (loanApr * 0.01) / 12;
  monthlyApr.toFixed(4);
  let monthlyDuration = loanDuration * 12;
  
  let monthlyPayment =  loanAmount * (monthlyApr / (1 - Math.pow((1 + monthlyApr), (-monthlyDuration))));

  console.log(`Your Monthly payments will be $${monthlyPayment.toFixed(2)}`);
}

function prompt(message) {
  console.log(`=> ${message}`)
}

loanCalculator()