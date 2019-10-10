import { Ship } from "./Ship.mjs";

export class TwoShip extends Ship {
    constructor(option) {
        super(option);
        this.size = 2;
    }

    checkRadius() {
        return super.checkRadius(this.getVector(), this.getSize());
    }
}