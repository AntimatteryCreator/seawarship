import { Ship } from "./Ship.mjs";

export class ThreeShip extends Ship {
    constructor(options) {
        super(options);
        this.size = 3;
    }

    checkRadius() {
        return super.checkRadius(this.getVector(), this.getSize());
    }
}