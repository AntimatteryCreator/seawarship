import {Ship} from './Ship.mjs';

export class FourShip extends Ship {
    constructor(options) {
        super(options);
        this.size = 4;
    }

    checkRadius() {
        return super.checkRadius(this.getVector(), this.getSize());
    }
}