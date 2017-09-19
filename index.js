var inquirer = require('inquirer');

const chalk = require('chalk');


console.log('Welcome To Kevins Super Awesome Pizza Co')

var questions = [{
        type: "list",
        name: "size",
        message: "What size pizza?",
        choices: ["Small", "Medium", "Large"]
    }, {
        type: "list",
        name: "cheese",
        message: "Extra cheese?",
        choices: ["Extra Cheese", "No Extra Cheese"],

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
        choices: ['Triangles', 'Squares', ],
    },
    {
        name: 'order',
        when: function(answers) {

            var txt = "";
            for (i = 0; i < answers.size.length; i++) {
                if (answers.size[i]) {
                    txt = txt + answers.size[i].value + " ";
                }
            }
            for (i = 0; i < answers.cheese.length; i++) {
                if (answers.cheese[i]) {
                    txt = txt + answers.cheese[i].value + " ";
                }
            }
            for (i = 0; i < answers.sauce.length; i++) {
                if (answers.sauce[i]) {
                    txt = txt + answers.sauce[i].value + " ";
                }
            }
            for (i = 0; i < answers.toppings.length; i++) {
                if (answers.toppings[i]) {
                    txt = txt + answers.toppings[i].value + " ";
                }
            }
            for (i = 0; i < answers.cut.length; i++) {
                if (answers.cut[i]) {
                    txt = txt + answers.cut[i].value + " ";
                }
            }
            console.log(" You want " + answers.size + " with  " + answers.cheese + " and " + answers.sauce + " with: " + answers.toppings + " cut into " + answers.cut + ".")

        }

    }, {
        name: 'confirm',
        message: 'Is your order correct?',
        type: 'list',
        choices: ['Yes', 'No', ],

    },
    {
        name: 'process',
        when: function(answers) {
            if (answers.confirm == 'Yes') {
                console.log("Ok Your pizza is on it's way!")
            }
            if (answers.confirm == 'No') {
                console.log("Sorry for the inconvenience")
            }

        }

    }
]

inquirer.prompt(questions).then(function(answers) {})