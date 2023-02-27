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
        const svgFile = createSVG(character, color, shape);


        fs.writeFile('./examples/logo.svg', svgFile, (err) => {
            if (err)
                console.log("error")
            else (console.log(`Generated logo.svg`))
        });

        // I was able to get most of the formatting for the SVG formatting below from the mozilla tutorial. 

        // The createSVG function below creates an SVG image taking the shape, color and 3 letter text that the user inputs and returns a string containing the elements required to draw the shape as well as the viewbox attribute, which scales the SVG element to have a width of 300 and a height of 200 (Mozilla viewBox documentation).

        function createSVG(characters, color, shape) {
            let svgString = '';
            if (shape === 'circle') {
                svgString = svgString.concat(`<circle cx="150" cy="100" r="70" fill="${color}"/> <text x ="50%" y = "50%" text-anchor = "middle" fill = "white"> ${characters}</text>`);
            } else if (shape === 'triangle') {
                svgString = svgString.concat(`<polygon points="150, 18 244, 182 56, 182" fill ="${color}"/> <text x ="150" y="110" text-anchor="middle" fill = "white"> ${characters}</text>`);
            } else if (shape === 'square') {
                svgString = svgString.concat(`<rect x="90" y="40" width="120" height="120" fill="${color}"/> <text x = "50%" y = "50%" text-anchor="middle" fill= "white"> ${characters}</text>`);
            }
            return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${svgString}</svg>`;
        }
    })
}

init()
