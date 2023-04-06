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
        console.log('something went wrong !!!')
    }
    let output = boxen(chalk.bold.yellowBright(data), {
        padding: 1,
        margin: 1,
        borderStyle: 'double',
        borderColor: 'yellowBright',
    })
    console.log(output);
    console.log(`${chalk.bgCyanBright.red.bold('Author : MUAAZ NASIR')}\t\t\t${chalk.bgGray.bold('PIAIC Project Calculator')}\n\n`)
})
)

setTimeout(async () => {
    /*            asking user to start                */
    let start = await inquirer.prompt({
        name: 'start',
        type: 'confirm',
        message: `${chalk.whiteBright.bold.underline('Do You Want To Start The CALCULATOR ??')}`
    })

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
                }
            ])

            /*                LOGIC                 */

            const { firstNo, secondNo, operation} = inputs;

            let result: number = 0;

            // checking that the input is number or not
            if (!(Number.isNaN(firstNo) || Number.isNaN(secondNo))) {

/* Addition */  if (operation === '+') {
                    result = firstNo + secondNo;

                    if (Number.isNaN(result)) {
                        console.log(chalk.red.bold('invalid inputs !!'))
                    } else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).plus((new BigNumber(secondNo)))}"`)
                        } catch (err) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
                        }
                    }
                }
/*Subtraction*/ else if (operation === '-') {
                    result = firstNo - secondNo;

                    if (Number.isNaN(result)) {
                        console.log(chalk.red.bold('invalid inputs !!'))
                    } else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).minus((new BigNumber(secondNo)))}"`)
                        } catch (err) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
                        }
                    }
                }
/*Multiply*/    else if (operation === '*') {
                    result = firstNo * secondNo;

                    if (Number.isNaN(result)) {
                        console.log(chalk.red.bold('invalid inputs !!'))
                    } else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).multipliedBy((new BigNumber(secondNo)))}"`)
                        } catch (err) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
                        }
                    }
                }
/*Division*/    else if (operation === '/') {
                    result = firstNo / secondNo;

                    if (Number.isNaN(result) || !Number.isFinite(result)) {
                        console.log(chalk.red.bold('invalid inputs !!'))
                    } else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).dividedBy((new BigNumber(secondNo)))}"`)
                        } catch (err) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
                        }
                    }
                }
/*Exponent*/    else if (operation === '^') {
                    result = firstNo ** secondNo;

                    if (Number.isNaN(result)) {
                        console.log(chalk.red.bold('invalid inputs !!'))
                    } else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).pow((new BigNumber(secondNo)))}"`)
                        } catch (err) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
                        }
                    }
                }
/*Modulus*/     else if (operation === '%') {
                    result = firstNo % secondNo;

                    if (Number.isNaN(result)) {
                        console.log(chalk.red.bold('invalid inputs !!'))
                    } else {
                        try {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${(new BigNumber(firstNo)).mod((new BigNumber(secondNo)))}"`)
                        } catch (err) {
                            console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
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
            })
            // if user says no
            if (!end.end) {
                console.log(chalk.red('\nCALCULATOR ended'))
                break;
            };


        }
        while (start.start)
    }
    // if user says no
    else {
        console.log(chalk.red('\nCALCULATOR ended'))
    }
}, 100)

