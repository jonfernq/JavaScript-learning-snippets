// hello.js - 
// how to use 'readline' 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Please enter your name:");

readline.on('line', (name) => {
  console.log(`\n\n----------------------------------`);
  console.log(`\nHi ${name}! Nice to meet you.`);
  console.log(`\n----------------------------------\n\n`);
  readline.close();
});

/*

This program uses the readline module to get input from 
the user and the console.log function to print output to 
the console. The readline.on function is used to listen 
for a 'line' event, which is triggered whenever the user 
enters a line of input and hits the enter key. When the 
event is triggered, the callback function is executed with 
the user's input (in this case, their name) as an argument. 
The console.log function is then used to print out the header 
and the user's name. Finally, the readline.close function 
is called to close the readline interface.

The readline module is a built-in Node.js module that provides 
an interface for reading data from a Readable stream 
(such as process.stdin) one line at a time. 

The createInterface method is used to create a readline 
interface that allows the program to read input 
from the command line.

The createInterface method takes an options object 
as an argument, which can have the following properties:

input: The Readable stream to listen to. By default, 
this is process.stdin.

output: The Writable stream to write output to. 
By default, this is process.stdout.

completer: A function that is called with the 
current line of input and a callback function as 
arguments, and that returns an array 
of completions for the current line.

terminal: A boolean value indicating whether the 
output stream should be treated as a terminal.

historySize: The number of history items to store.
In the example code, the input option is set to 
process.stdin and the output option is set 
to process.stdout, which means that the readline 
interface will read input from process.stdin 
(i.e., standard input) and write output to 
process.stdout (i.e., standard output).

The resulting readline interface is stored 
in the readline constant. This interface 
provides several methods that can be used
to read input from the command line and
write output to the console, such as question, 
prompt, and on.

*/
