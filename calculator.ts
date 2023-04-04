import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

/*     BANNER        */

figlet('\n\nCALCULATOR', function (err, data) {
    if (err) {
        console.log('something went wrong !!!')
    }
    console.log(data);
    console.log(`${chalk.bgCyanBright.red.bold('Author : MUAAZ NASIR')}\t\t\t${chalk.bgGray.bold('PIAIC Project Calculator')}\n\n`)
})



setTimeout(async () => {
    /*            asking user to start                */
    let start = await inquirer.prompt({
        name: 'start',
        type: 'confirm',
        message: `${chalk.bold.underline.whiteBright('want to Start the CALCULATOR ??')}`
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

            const { firstNo, secondNo, operation } = inputs;

            let result = 0;

            // checking that the input is number or not
            if (!(Number.isNaN(firstNo) || Number.isNaN(secondNo))) {

/* Addition */  if (operation === '+') {
                    result = firstNo + secondNo;
                    console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`);
                }
/*Subtraction*/ else if (operation === '-') {
                    result = firstNo - secondNo;
                    console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`);
                }
/*Multiply*/    else if (operation === '*') {
                    result = firstNo * secondNo;
                    console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`);
                }
/*Division*/    else if (operation === '/') {
                    result = firstNo / secondNo;

        // checking that divisor is '0' or not            
                    if (secondNo === 0) {
                        console.log('\n0 is not valid as divisor');
                    } else {
                        console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`);
                    }
                }
/*Exponent*/    else if (operation === '^') {
                    result = firstNo ** secondNo;
        // checking for infinity
                    if (result === Infinity) {
                        console.log('\nplz try some short Numbers');
                    } else {
                        console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`)
                    };
                }
/*Modulus*/     else if (operation === '%') {
                    result = firstNo % secondNo;
                    console.log(`\nthe result of '${firstNo} ${operation} ${secondNo}' is "${result}"`);
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
    else{
        console.log(chalk.red('\nCALCULATOR ended'))
    }
}, 100)


