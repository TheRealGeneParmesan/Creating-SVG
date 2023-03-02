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
    constructor(color, characters) {
        super(color, characters)
    }
    createSVG() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="70" fill="${this.color}"/> <text x ="50%" y = "50%" text-anchor = "middle" fill = "white">${this.characters}</text></svg>`;
    }
}

// The Triangle subclass of Shape returns a circle with the user input for color and characters. Triangle is not read by SVG so we use polygon. 
class Triangle extends Shape {
    constructor(color, characters) {
        super(color, characters)
    }
    createSVG() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill ="${this.color}"/> <text x ="150" y="110" text-anchor="middle" fill = "white">${this.characters}</text></svg>`;
    }
}
// The Square subclass of Shape returns a square with the user input for color and characters. Square is not read by SVG so we use rect. 
class Square extends Shape {
    constructor(color, characters) {
        super(color, characters)
    }
    createSVG() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}"/> <text x = "50%" y = "50%" text-anchor="middle" fill= "white">${this.characters}</text></svg>`;
    }
}

module.exports = { Shape, Circle, Triangle, Square }