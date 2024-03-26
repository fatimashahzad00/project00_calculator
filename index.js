#!/usr/bin/node
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
console.log(figlet.textSync('CLI Calculator'));
async function calc() {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "NumberOne",
            message: chalk.cyan.italic("Enter first number:"),
        },
        {
            type: "number",
            name: "NumberTwo",
            message: chalk.cyan.italic("Enter Second number:"),
        },
        {
            type: "list",
            name: "Operator",
            message: chalk.magenta("Select an Operator"),
            choices: ["+", "-", "*", "/"],
        },
    ]);
    let result = 0;
    const { Operator } = answers;
    switch (Operator) {
        case "+":
            result = answers.NumberOne + answers.NumberTwo;
            break;
        case "-":
            result = answers.NumberOne - answers.NumberTwo;
            break;
        case "*":
            result = answers.NumberOne * answers.NumberTwo;
            break;
        case "/":
            result = answers.NumberOne / answers.NumberTwo;
            break;
        default:
            console.log(chalk.yellowBright("Please enter valid input"));
            break;
    }
    console.log(chalk.green.bold(`The Result is ${result} `));
}
async function main() {
    do {
        await calc();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.yellow.italic("Again Calculating....Select Y or N"),
            },
        ]);
    } while (again.restart === "Y" || again.restart === "y");
}
main();
