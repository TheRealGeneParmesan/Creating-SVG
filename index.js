//Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes')

function generateSVG() {
    const imagePrompt = [{
        type: 'input',
        name: 'character',
        message: "Please enter three characters:",
        validate: (input) => input.length <= 3,
    },

    {
        type: 'input',
        name: 'color',
        message: "Please enter the color for your shape (can use color keyword or hexadecimal):",
    },

    {
        type: 'list',
        name: 'shape',
        message: "Which shape do you want to choose?",
        choices: ['circle', 'triangle', 'square'],
    }];

    // We display the prompt to the user and store the answers in the answers object 
    inquirer.prompt(imagePrompt).then((answers) => {

        // We destructure the answers object to get the character, shape and color attributes
        const { character, shape, color } = answers;

        // We map the name of each shape to its respective class
        const shapeConstruct = {
            'shape': Shape,
            'circle': Circle,
            'triangle': Triangle,
            'square': Square
        };

        // Here we create a new instance of the shape based on the user input
        const shapeProperties = new (shapeConstruct[shape])(color);

        // We call the createSVG method on the shapeProperties object to create an SVG for the shape with the particular color and characters and assign it to the svgFile variable.

        const svgFile = shapeProperties.createSVG(character);

        // We write the generated SVG code to logo.svg and log an error if it fails or `Generated logo.svg if it succeeds`

        fs.writeFile('./examples/logo.svg', svgFile, (err) => {
            if (err) {
                console.log("Error writing SVG file", err);
            } else {
                console.log(`Generated logo.svg`);
            }
        });
    });

}
// Starts the script
generateSVG()