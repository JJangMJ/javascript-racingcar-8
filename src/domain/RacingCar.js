const MOVE_THRESHOLD = 4;
const MOVE_DISTANCE = 1;

class RacingCar {
    #name;
    #position;

    constructor(name) {
        this.#name = name;
        this.#position = 0; 
    }

    move(randomValue) {
        if (this.#canMove(randomValue)) {
            this.#position += MOVE_DISTANCE;
        }
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }

    #canMove(randomValue) {
        return randomValue >= MOVE_THRESHOLD;
    }
}

export default RacingCar;