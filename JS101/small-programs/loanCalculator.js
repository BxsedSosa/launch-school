//need info from user
  //loan amount
  // APR
  // loan duration

//Break down info from user
  // make apr convert down to monthly interest rate
  //break down loan duration in months

let readline = require('readline-sync');


function loanCalculator() {
  let loanAmount = readline.question('=> What is your loan amount?: \n');
  let loanApr = readline.question('=> What is your loan APR?: \n');
  let loanDuration = readline.question('=> What is the loan duration? (in years): \n');

  let monthlyApr = (loanApr * 0.01) / 12;
  monthlyApr.toFixed(4);
  let monthlyDuration = loanDuration * 12
  
  let monthlyPayment =  loanAmount * (monthlyApr / (1 - Math.pow((1 + monthlyApr), (-monthlyDuration))));

  console.log(`Your Monthly payments will be $${monthlyPayment.toFixed(2)}`)
}

loanCalculator()