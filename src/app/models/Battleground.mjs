import {Field} from './Field.mjs';

export class Battleground {
    constructor() {
        this.size = 10; 
        this.battleground = [];
        this.ships = [];
        this.generateBattleground();
        
        console.log('End Battleground');
    }

    generateBattleground() {
        console.log('Start generate battleground');
        for (let i = 0; i < this.size; i++) {
            for (let k = 0; k < this.size; k++) {
                let field = new Field({
                    id: `${i}${k}`,
                    state: 'empty',
                    isLast: false,
                });
                if (i == 0 || i == 9) {
                    if (i == 0) {
                        field.isLast = true;
                    }
                    else {
                        field.isLast = true;
                    }
                }
                if (k == 0 || k == 9) {
                    if (k == 0) {
                        field.isLast = true;
                    }
                    else {
                        field.isLast = true;
                    }
                }
            this.battleground.push(field);
            }
        }
        console.log('End generate battleground');
    }
    getBattlegroundArray() {
        return this.battleground;
    }

    setShips(shipsArray) {
        this.ships = shipsArray;
    }
}