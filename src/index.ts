import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const lines:string[] = [];

console.log('Enter multiple lines of input (type "exit" or an empty line to finish):');

rl.on('line', (input) => {
   
         if (input.trim() === '' || input.trim().toLowerCase() === 'exit') {
        // Stop reading and close the interface
        rl.close();
    } else {
        // Store the line in the array
        lines.push(input.trim());
    }
});

rl.on('close', () => {
    console.log('You entered:');
    console.log(lines.join('\n'));
});