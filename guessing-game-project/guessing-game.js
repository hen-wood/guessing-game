const colors = require('colors')
const art = require('ascii-art')
const readline = require("readline");
const { stdout } = require("process");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let seceretNumber;
let range = [0, 0];
let remainingGuesses;
function checkGuess(num) {
    if (seceretNumber < num) {
        return [false, 'high']
    } else if (seceretNumber > num) {
        return [false, 'low']
    } else if (seceretNumber == num) {
        return [true]
    }
}

function winnerFunction() {
    let winnerMessage = '......................my god\n..............you\'ve done it\n........you absolute mad lad\n\n\n\n██╗   ██╗ ██████╗ ██╗   ██╗\n╚██╗ ██╔╝██╔═══██╗██║   ██║\n ╚████╔╝ ██║   ██║██║   ██║\n  ╚██╔╝  ██║   ██║██║   ██║\n   ██║   ╚██████╔╝╚██████╔╝\n   ╚═╝    ╚═════╝  ╚═════╝ \n██╗    ██╗██╗███╗   ██╗██╗ \n██║    ██║██║████╗  ██║██║ \n██║ █╗ ██║██║██╔██╗ ██║██║ \n██║███╗██║██║██║╚██╗██║╚═╝ \n╚███╔███╔╝██║██║ ╚████║██╗ \n ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝\n\n\n\n'.green
    messageCrawl(winnerMessage, 10)
    rl.close()
}

function gameOver() {
    let loserMessage = '\n\n\nSorry, but it appears.........\n\n\n\n▓██   ██▓ ▒█████   █    ██                \n ▒██  ██▒▒██▒  ██▒ ██  ▓██▒               \n  ▒██ ██░▒██░  ██▒▓██  ▒██░               \n  ░ ▐██▓░▒██   ██░▓▓█  ░██░               \n  ░ ██▒▓░░ ████▓▒░▒▒█████▓                \n   ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒                \n ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░                \n ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░                \n ░ ░         ░ ░     ░                    \n ░ ░                                      \n ▄▄▄       ██▀███  ▓█████                 \n▒████▄    ▓██ ▒ ██▒▓█   ▀                 \n▒██  ▀█▄  ▓██ ░▄█ ▒▒███                   \n░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄                 \n ▓█   ▓██▒░██▓ ▒██▒░▒████▒                \n ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░                \n  ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░                \n  ░   ▒     ░░   ░    ░                   \n      ░  ░   ░        ░  ░                \n                                          \n ▄▄▄                                      \n▒████▄                                    \n▒██  ▀█▄                                  \n░██▄▄▄▄██                                 \n ▓█   ▓██▒                                \n ▒▒   ▓▒█░                                \n  ▒   ▒▒ ░                                \n  ░   ▒                                   \n      ░  ░                                \n                                          \n ██▓     ▒█████    ██████ ▓█████  ██▀███  \n▓██▒    ▒██▒  ██▒▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒\n▒██░    ▒██░  ██▒░ ▓██▄   ▒███   ▓██ ░▄█ ▒\n▒██░    ▒██   ██░  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄  \n░██████▒░ ████▓▒░▒██████▒▒░▒████▒░██▓ ▒██▒\n░ ▒░▓  ░░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░\n░ ░ ▒  ░  ░ ▒ ▒░ ░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░\n  ░ ░   ░ ░ ░ ▒  ░  ░  ░     ░     ░░   ░ \n    ░  ░    ░ ░        ░     ░  ░   ░     \n\n\n\n'.red
    messageCrawl(loserMessage, 5)
    rl.close();
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function askRange() {

    let enterMinimum = (str) => rl.question('', answer => {

        if (Number(answer) >= 0) {
            range[0] = Number(answer)
            let enterMaximum = (str) => rl.question('', answer => {
                if (Number(answer) > range[0]) {
                    range[1] = Number(answer)
                    seceretNumber = randomInRange(...range)
                    return askGuessCount()
                } else {
                    enterMaximum(`Number must be greater than ${range[0].toString().green}. Try again: `.red)
                }
            }, messageCrawl(str))
            enterMaximum(`Enter a maximum number greater than ${range[0].toString().green}: `.blue)
        } else {
            enterMinimum('Number must be greater or equal to zero. Try again: '.red)
        }
    }, messageCrawl(str));
    enterMinimum('Enter a minimum number greater than or equal to zero: '.blue)
}

function messageCrawl(inputString, speed = 40) {
    let index = 0
    let printer = setInterval(() => {
        process.stdout.write(inputString[index])
        index++
        if (index === inputString.length) {
            clearInterval(printer)
        }
    }, speed)
}

function askGuessCount() {
    let enterGuesses = (str) => rl.question('', answer => {
        if (Number(answer) > 0) {
            remainingGuesses = Number(answer)
            return askGuess()
        } else {
            enterGuesses('Must be a number greater than zero! Try again: '.red)
        }
    }, messageCrawl(str))
    enterGuesses('Enter number of guesses you would like: '.blue)
}

function pluralGuess() {
    if (remainingGuesses === 1) {
        return ''
    } else {
        return 'es'
    }
}

function askGuess() {

    let enterGuess = (str) => rl.question('', answer => {
        if (checkGuess(Number(answer))[0]) {
            winnerFunction()
        } else if (remainingGuesses === 1) {
            gameOver()
        } else {
            remainingGuesses--
            enterGuess(`Too ${checkGuess(Number(answer))[1]}. You have ${remainingGuesses.toString().red} guess${pluralGuess()} left. Try again: `)
        };
    }, messageCrawl(str));
    enterGuess('Enter a guess: '.blue)
}

askRange()
