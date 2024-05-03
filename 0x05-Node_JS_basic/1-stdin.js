// 1-stdin.js

const readline = require('readline');

function handleInput(input) {
    console.log(`Your name is: ${input}`);
    if (!process.stdin.isTTY) {
        console.log('This important software is now closing');
    }
    process.exit(0);
}

module.exports = handleInput;

// The rest of the code remains the same

