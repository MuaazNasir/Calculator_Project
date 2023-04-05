#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { BigNumber } from 'bignumber.js';
import boxen from "boxen";
/*  clearing the terminal */
console.clear();
/*     BANNER        */
chalk.bgBlue(figlet('\n\nCALCULATOR', "Big Money-ne", function (err, data) {
    if (err) {
        console.log('something went wrong !!!');
    }
    let output = boxen(chalk.bold.yellowBright(data), {
        padding: 1,
        margin: 1,
        borderStyle: 'double',
        borderColor: 'yellowBright',
    });
    console.log(output);
    console.log(`${chalk.bgCyanBright.red.bold('Author : MUAAZ NASIR')}\t\t\t${chalk.bgGray.bold('PIAIC Project Calculator')}\n\n`);
}));
setTimeout(async () => {
    /*            asking user to start                */
    let start = await inquirer.prompt({
        name: 'start',
        type: 'confirm',
        message: `${chalk.whiteBright.bold.underline('Do You Want To Start The CALCULATOR ??')}`
    });
    if (start.start) { // <- it will execute if user says yes to start 
        // using do-while loop to use the loop infinitely
        do {
            /*  TAKING INPUTS    */
            const inputs = await inquirer.prompt([
                {
                    name: 'firstNo',
                    type: 'number',
                    message: chalk.greenBright('kindly enter a number : ')
                },
                {
                    name: 'secondNo',
                    type: 'number',
                    message: chalk.greenBright('kindly enter another number : ')
                },
                {
                    name: 'operation',
                    type: 'list',
                    choices: ['+', '-', '*', '/', '^', '%'],
                    message: chalk.yellow('now choose an operator : ')
                },
                {
                    name: 'power',
                    type: 'confirm',
                    message: 'Power : normal(y) , hard(n)',
                }
            ]);
            /*                LOGIC                 */
            const { firstNo, secondNo, operation, power } = inputs;
            let result = 0;
            // checking that the input is number or not
            if (!(Number.isNaN(firstNo) || Number.isNaN(secondNo))) {
                /* Addition */ if (operation === '+') {
                    if (power) {
                        console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${firstNo + secondNo}"`);
                    }
                    else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).plus((new BigNumber(secondNo)))}"`);
                        }
                        catch (err) {
                            console.log('error occured , please try changing mode ,  error is ', chalk.red(err));
                        }
                    }
                }
                /*Subtraction*/ else if (operation === '-') {
                    if (power) {
                        console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${firstNo - secondNo}"`);
                    }
                    else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).minus((new BigNumber(secondNo)))}"`);
                        }
                        catch (err) {
                            console.log('error occured , please try changing mode ,  error is ', chalk.red(err));
                        }
                    }
                }
                /*Multiply*/ else if (operation === '*') {
                    if (power) {
                        console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${firstNo * secondNo}"`);
                    }
                    else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).multipliedBy((new BigNumber(secondNo)))}"`);
                        }
                        catch (err) {
                            console.log('error occured , please try changing mode ,  error is ', chalk.red(err));
                        }
                    }
                }
                /*Division*/ else if (operation === '/') {
                    // checking that divisor is '0' or not            
                    if (secondNo === 0) {
                        console.log('\n0 is not valid as divisor');
                    }
                    else {
                        if (power) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${firstNo / secondNo}"`);
                        }
                        else {
                            try {
                                console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).dividedBy((new BigNumber(secondNo)))}"`);
                            }
                            catch (err) {
                                console.log('error occured , please try changing mode ,  error is ', chalk.red(err));
                            }
                        }
                    }
                }
                /*Exponent*/ else if (operation === '^') {
                    if (power) {
                        if (firstNo ** secondNo === Infinity) {
                            console.log('too long numbers ... you can choose hard level to see result');
                        }
                        else {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${firstNo ** secondNo}"`);
                        }
                    }
                    else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).pow((new BigNumber(secondNo)))}"`);
                        }
                        catch (err) {
                            console.log('error occured , please try changing mode ,  error is ', chalk.red(err));
                        }
                    }
                }
                /*Modulus*/ else if (operation === '%') {
                    if (secondNo === 0) {
                        console.log(chalk.red('0 is not valid'));
                    }
                    else {
                        if (power) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${firstNo % secondNo}"`);
                        }
                        else {
                            try {
                                console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).mod((new BigNumber(secondNo)))}"`);
                            }
                            catch (err) {
                                console.log('error occured , please try changing mode ,  error is ', chalk.red(err));
                            }
                        }
                    }
                }
            }
            // if inputs are not valid    
            else {
                console.log(chalk.redBright(`\nplease enter VALID numbers`));
            }
            /*   ASKING USER TO CONTINUE     */
            const end = await inquirer.prompt({
                name: 'end',
                type: 'confirm',
                message: 'want to continue?',
            });
            // if user says no
            if (!end.end) {
                console.log(chalk.red('\nCALCULATOR ended'));
                break;
            }
            ;
        } while (start.start);
    }
    // if user says no
    else {
        console.log(chalk.red('\nCALCULATOR ended'));
    }
}, 100);
