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
        return `<circle cx="150" cy="100" r="70" fill="${this.color}"/> <text x ="50%" y = "50%" text-anchor = "middle" fill = "white"> ${characters}</text>`;
    }
}

class Triangle extends Shape {
    createSVG(characters) {
        return `<polygon points="150, 18 244, 182 56, 182" fill ="${this.color}"/> <text x ="150" y="110" text-anchor="middle" fill = "white"> ${characters}</text>`;
    }
}

class Square extends Shape {
    createSVG(characters) {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/> <text x = "50%" y = "50%" text-anchor="middle" fill= "white"> ${characters}</text>`;
    }
}

function generateLogoSVG() {
    const imagePrompt = [{
        type: 'input',
        name: 'character',
        message: "Please enter three characters:",
        validate: (input) => input.length <= 3,
    },

    {
        type: 'list',
        name: 'shape',
        message: "Which shape do you want to choose?",
        choices: ['circle', 'triangle', 'square'],
    },

    {
        type: 'input',
        name: 'color',
        message: "Please enter the color for your shape (can use color keyword or hexadecimal):",
    }];


    inquirer.prompt(imagePrompt).then((answers) => {
        const { character, shape, color } = answers;
        const svgFile = this.createSVG(character);

        fs.writeFile('./examples/logo.svg', svgFile, (err) => {
            if (err) {
                console.log("error");
            } else {
                console.log(`Generated logo.svg`);
            }
        });
    });

}

generateLogoSVG()