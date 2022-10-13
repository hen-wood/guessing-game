const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const seceretNumber = randomInRange;
/*
// ask the user a question
rl.question("What's up, doc? ", answer => {
    // print their response
    console.log("you responded: " + answer);
    // close the interface
    rl.close();
  });

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
*/

/*
to do:

function settings() {
    rl.question("How many guesses would you like?", guesses => {
        
    })
}

check for negative input numbers
*/


function checkGuess(num) {
    if (seceretNumber < num) {
        console.log('Too High.');
        return false
    }else if(seceretNumber > num){
        console.log('Too Low.')
        return false
    }else if(seceretNumber == num){
        console.log('Correct!');
        return true;
    }
}
function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function askRange() {
    
}
function askGuess() {

    rl.question("Enter a guess ", answer => {
        if (checkGuess(Number(answer))) {
            console.log('You Win!')
            rl.close();
        } else {
            askGuess()
        };
        
    });
}

// askGuess()