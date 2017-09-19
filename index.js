var inquirer = require('inquirer');

const chalk = require('chalk');


console.log('Welcome To My Super Awesome Pizza Co')
    // let questions = [size = "What size pizza?", 
    //cheese = "Extra cheese?", 
    //sauce = "What kind of sauce?", Toppings = "Which toppings?", cut = "How do you want it cut?"]



//inquirer.prompt(questions).then(function(answers) {})
// inquirer.prompt(quest).then(function(answe) {})

var questions = [{
        type: "list",
        name: "size ",
        message: "What size pizza?",
        choices: ["Small", "Medium", "Large"]
    }, {
        type: "list",
        name: "cheese",
        message: "Extra cheese?",
        choices: ["Yes", "No"],

    }, {
        name: 'sauce',
        message: 'What kind of sauce?',
        type: 'list',
        choices: ['Pizza Sauce', 'Alfredo Sauce', ],
    },
    {
        name: 'toppings',
        message: 'Which toppings?',
        type: 'checkbox',
        choices: ['Pepperoni', 'Mushroom', 'Sausage', 'Bacon', 'Green Peppers'],
    },
    {
        name: 'cut',
        message: 'How do you want the pizza cut?',
        type: 'list',
        choices: ['Triangles', 'Square', ],
    }
]

inquirer.prompt(questions).then(function(answers) {})



// inquirer.prompt([{
//     name: 'Size',
//     type: "list",
//     message: "What size pizza? ",
//     choices: ["Small", "Medium", "large"],


// }, {
//     name: 'Cheese',
//     type: "rawlist",
//     message: "Extra cheese? ",
//     choices: ["Yes", "No"],

// }, {
//     name: 'Sauce',
//     type: "checkbox",
//     message: "Sauce? ",
//     choices: ["Yes", "No"]
// }], function(answers) { });