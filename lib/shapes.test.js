const { Shape, Circle, Square, Triangle } = require('../lib/shapes.js')

// Test the Triangle class. createSVG replaces the render method from the example.

test('can we set the new triangle class to blue and output the expected SVG', () => {
    const shape = new Triangle("blue"
        , "abc");
    expect(shape.createSVG()).toEqual(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill ="blue"/> <text x ="150" y="110" text-anchor="middle" fill = "white">abc</text></svg>`)
});

// Test the Shape class and expect it to return an empty string. 

test('testing the shape class and are expecting an empty string', () => {
    const shape = new Shape("black", "def");
    expect(shape.createSVG()).toEqual(``);
});

// Test the Circle class. 

test('can we set the new circle class to black and output the expected SVG', () => {
    const shape = new Circle("black", "bdf");
    expect(shape.createSVG()).toEqual(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="70" fill="black"/> <text x ="50%" y = "50%" text-anchor = "middle" fill = "white">bdf</text></svg>`)
})

// Test the Square class.

test('can we set the new square class to purple and output the expected SVG', () => {
    const shape = new Square("purple", "wow");
    expect(shape.createSVG()).toEqual(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="purple"/> <text x = "50%" y = "50%" text-anchor="middle" fill= "white">wow</text></svg>`)
})