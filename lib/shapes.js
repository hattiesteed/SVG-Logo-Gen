class shape {
    constructor() {
        this.color = ``;
    }
    setColor(colorValue) {
    this.color = colorValue;
    }
}

class square extends shape {
    render () {
        return '<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>';
    }
}
module.exports = square