const { Shape, Circle, Square, Triangle } = require('../lib/shapes.js')

test('can we set the new triangle class to blue and output the expected SVG', () => {
    const shape = new Triangle("blue"
        , "abc");
    expect(shape.createSVG()).toEqual(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill ="blue"/> <text x ="150" y="110" text-anchor="middle" fill = "white">abc</text></svg>`)
});

test('testing the shape class and are expecting an empty string', () => {
    const shape = new Shape("black", "def");
    expect(shape.createSVG()).toEqual(``);
});


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });