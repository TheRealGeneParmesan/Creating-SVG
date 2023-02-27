//Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

const imagePrompt = [{
    type: 'input',
    name: 'character',
    message: "Please enter three characters:",
    validate: (input) => input.length <= 3,
},

{
    type: 'input',
    name: 'color',
    message: "Please enter the color for your shape (can use color keyword or hexadecimal):"
},

{
    type: 'list',
    name: 'shape',
    message: "Which shape do you want to choose?",
    choices: ['circle', 'triangle', 'square'],
},


];
