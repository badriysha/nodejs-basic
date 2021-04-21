class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 200);
    }

    growl() {
        console.log('grrrrr!')
    }
}

module.exports = Tiger;