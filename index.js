var inquirer = require('inquirer');

const chalk = require('chalk');


console.log('Welcome To My Super Awesome Pizza Co')

var questions = [{
        type: "list",
        name: "size",
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
        //choices: ['Pepperoni', 'Mushroom', 'Sausage', 'Bacon', 'Green Peppers'],
        choices: [
            { name: 'Pepperoni', short: 'pep', value: 1, checked: false },
            { name: 'Mushroom', short: 'mush', value: 2, checked: false },
            { name: 'Sausage', short: 's', value: 3, checked: false },
            { name: 'Bacon', short: 'b', value: 4, checked: false },
            { name: 'Green Peppers', short: 'gp', value: 5, checked: false },
        ]
    },
    {
        name: 'cut',
        message: 'How do you want the pizza cut?',
        type: 'list',
        choices: ['Triangles', 'Square', ],
    },
    {
        name: 'order',
        when: function(answers) {

            if (answers.size == "Large") {
                console.log("You want " + "Large")
            }

            if (answers.size == "Small") {
                console.log("You want " + "small")
            }
            if (answers.size == "Medium") {
                console.log("You want " + "medium")
            }
            if (answers.cheese == "Yes") {
                console.log("With  " + "extra cheese")
            }
            if (answers.sauce == "Pizza Sauce") {
                console.log("And  " + "Pizza Sauce")
            }
            if (answers.sauce == "Alfredo Sauce") {
                console.log("And  " + "Alfredo Sauce")
            }
            if (answers.toppings == 1) {
                console.log("with   " + "pepperoni")
            }
            if (answers.toppings == 2) {
                console.log("with   " + "mush")
            }
            // if (answers.toppings == 3) {
            //     console.log("with   " + "sausage")
            // }
            // if (answers.toppings == 4) {
            //     console.log("with   " + "bacon")
            // }
            // if (answers.toppings == 5) {
            //     console.log("with   " + "Green pepper")
            // }

        }

    }
]

inquirer.prompt(questions).then(function(answers) {})