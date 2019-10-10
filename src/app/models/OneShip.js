import { Ship } from "./Ship.mjs";

export class OneShip extends Ship {
    constructor(options) {
        super(options);
        this.size = 1;
    }

    checkRadius(){
        return super.checkRadius(this.getVector(), this.getSize());
    }
}   