const inquirer = require('inquirer');
const fs = require('fs');
class Shape {
    constructor(color) {
        this.color = color;
    }

    createSVG(characters) {
        return '';
    }

}

class Circle extends Shape {
    createSVG(characters) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="70" fill="${this.color}"/> <text x ="50%" y = "50%" text-anchor = "middle" fill = "white"> ${characters}</text></svg>`;
    }
}

class Triangle extends Shape {
    createSVG(characters) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill ="${this.color}"/> <text x ="150" y="110" text-anchor="middle" fill = "white"> ${characters}</text></svg>`;
    }
}

class Square extends Shape {
    createSVG(characters) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}"/> <text x = "50%" y = "50%" text-anchor="middle" fill= "white"> ${characters}</text></svg>`;
    }
}

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


    inquirer.prompt(imagePrompt).then((answers) => {
        const { character, shape, color } = answers;
        let shapeInstance;
        switch (shape) {
            case 'circle':
                shapeInstance = new Circle(color);
                break;
            case 'triangle':
                shapeInstance = new Triangle(color);
                break;
            case 'square':
                shapeInstance = new Square(color);
                break;
            default:
                break;
        }
        const svgFile = shapeInstance.createSVG(character);

        fs.writeFile('../examples/logo.svg', svgFile, (err) => {
            if (err) {
                console.log("Error writing SVG file", err);
            } else {
                console.log(`Generated logo.svg`);
            }
        });
    });

}

generateSVG()