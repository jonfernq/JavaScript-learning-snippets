const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an input string: ', (inputString) => {
  const characterCount = inputString.length;
  console.log(`The input string is: ${inputString}`);
  console.log(`The character count is: ${characterCount}`);
  rl.close();
});
