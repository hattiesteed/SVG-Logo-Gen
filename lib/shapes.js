// Shape is the parent class to square, circle, and triangle
class shape {
    constructor() {
        this.color = ``;
    }
    setColor(colorValue) {
    this.color = colorValue;
    }
}

// child to the shape class
class square extends shape {
    render () {
        return `<rect x="73" y="40" width="160" height="160" fill="purple"/>`;
    }
}

class triangle extends shape {
    render () {
        return `<polygon points="150, 40 73, 200 227,200" fill="green"/>`;
    }
}

class circle extends shape {
    render () {
        return '<circle cx="150" cy="150" r="80" fill="pink"/>';
    }
}

module.exports = {square, triangle, circle};
