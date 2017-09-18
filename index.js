var inquirer = require('inquirer');

const chalk = require('chalk');


console.log('Welcome To My Super Awesome Pizza Co')
    // let questions = [size = "What size pizza?", cheese = "Extra cheese?", sauce = "What kind of sauce?", Toppings = "Which toppings?", cut = "How do you want it cut?"]


// let questions = {

//     type: "list",
//     name: "size ",
//     message: "What size pizza? ",
//     choices: ["Small", "Medium", "large"]

// }

// let quest = {
//     type: "rawlist",
//     name: "cheese",
//     message: "Extra cheese? ",
//     choices: ["Yes", "No"],
//     when: "size",
// }

// inquirer.prompt(questions).then(function(answers) {})
// inquirer.prompt(quest).then(function(answe) {})


inquirer.prompt([{
    name: 'Size',
    type: "list",
    message: "What size pizza? ",
    choices: ["Small", "Medium", "large"],

}, {
    name: 'Cheese',
    type: "rawlist",
    message: "Extra cheese? ",
    choices: ["Yes", "No"],

}, {
    name: 'Sauce',
    type: "checkbox",
    message: "Sauce? ",
    choices: ["Yes", "No"]
}], function(answers) {});