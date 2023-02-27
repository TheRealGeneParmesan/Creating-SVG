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

function init() {
    inquirer.prompt(imagePrompt).then((answers) => {
        const { character, color, shape } = answers;
        const svgFile = svgTemplate(character, color, shape);


        fs.writeFile('./examples/logo.svg', svgFile, (err) => {
            if (err)
                console.log("error")
            else (console.log(`Generated logo.svg`))
        });
    }
    )
}

init()