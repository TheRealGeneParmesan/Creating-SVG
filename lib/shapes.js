// Packages needed for applications
const inquirer = require('inquirer');
const fs = require('fs');

// Define the Shape class with a constructor that takes the parameters of color and characters as well as introduce the createSVG method.
class Shape {
    constructor(color, characters) {
        this.color = color;
        this.characters = characters;
    }

    createSVG() {
        return '';
    }

}

// The Circle subclass of Shape returns a circle with the user input for color and characters. 
class Circle extends Shape {
    createSVG(characters) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="70" fill="${this.color}"/> <text x ="50%" y = "50%" text-anchor = "middle" fill = "white"> ${characters}</text></svg>`;
    }
}

// The Triangle subclass of Shape returns a circle with the user input for color and characters. Triangle is not read by SVG so we use polygon. 
class Triangle extends Shape {
    createSVG(characters) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill ="${this.color}"/> <text x ="150" y="110" text-anchor="middle" fill = "white"> ${characters}</text></svg>`;
    }
}
// The Square subclass of Shape returns a square with the user input for color and characters. Square is not read by SVG so we use rect. 
class Square extends Shape {
    createSVG(characters) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}"/> <text x = "50%" y = "50%" text-anchor="middle" fill= "white"> ${characters}</text></svg>`;
    }
}

// We create our function to generate the SVG file as well as our imagePrompt object that will be prompted to display. 

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
            'circle': Circle,
            'triangle': Triangle,
            'square': Square
        };

        // Here we create a new instance of the shape based on the user input
        const shapeProperties = new (shapeConstruct[shape])(color);

        // We call the createSVG method on the shapeProperties object to create an SVG for the shape with the particular color and characters and assign it to the svgFile variable.

        const svgFile = shapeProperties.createSVG(character);

        // We write the generated SVG code to logo.svg and log an error if it fails or `Generated logo.svg if it succeeds`

        fs.writeFile('../examples/logo.svg', svgFile, (err) => {
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