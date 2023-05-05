const {square, triangle, circle} = require(`./shapes.js`)

// test for square
describe(`square test`, () => {
    test(`square with purple background`, () => {
        const shape = new square();
        shape.setColor(`purple`);
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="purple"/>`
        );
    });
});

// test for triangle w/green background
describe(`triangle test`, () => {
    test(`triangle with green background`, () => {
        const shape = new triangle();
        shape.setColor(`green`);
        expect(shape.render()).toEqual(
            `<polygon points="150, 40 73, 200 227,200" fill="green"/>`
        );
    });
});


// test for circle w/pink background
describe(`circle test`, () => {
    test(`circle with pink background`, () => {
        const shape = new circle();
        shape.setColor(`pink`);
        expect(shape.render()).toEqual(
         `<circle cx="150" cy="150" r="80" fill="pink"/>`
        );
    });
});