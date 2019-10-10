export class Ship {
    constructor(options) {
        this.coordinates = options.coordinates;
        this.fully = true;
        this.vector = 1;
        this.shipType = options.shipType;
    }

    //state = [full, broken]
    broke() {
        this.fully = false;
    }

    placer() {
    }

    checkRadius() {
        // fasle if in radius near ship have a field with 'ship' class
        let shipFieldCoordinatesI = parseInt(this.getCoordinates()[0]);
        let shipFieldCoordinatesJ = parseInt(this.getCoordinates()[1]);

        if (!(this.checkShip())) {
            return false;
        } else {
            //radius check
        if(this.getVector() == 1) {
            for (let i = shipFieldCoordinatesI - 1; i <= shipFieldCoordinatesI + this.getSize(); i++) {
                for (let j = shipFieldCoordinatesJ - 1; j <= shipFieldCoordinatesJ + 1; j ++) {
                    let radius = document.getElementById(`${i}${j}`);
                    if (radius != null) {
                        let radiusClass = radius.getAttribute('class');
                        if (radiusClass.match(/ship/) == 'ship') {
                            return false;
                        }
                    }
                }
            }
            return true;
        } else {
            for (let i = shipFieldCoordinatesI - 1; i <= shipFieldCoordinatesI + 1; i++) {
                for (let j = shipFieldCoordinatesJ - 1; j <= shipFieldCoordinatesJ + this.getSize(); j ++) {
                    let radius = document.getElementById(`${i}${j}`);
                    if (radius != null) {
                        let radiusClass = radius.getAttribute('class');
                        if (radiusClass.match(/ship/) == 'ship') {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        }
    }

    drawShip() {

    }

    checkShip() {
        let shipFieldCoordinatesI = parseInt(this.getCoordinates()[0]);
        let shipFieldCoordinatesJ = parseInt(this.getCoordinates()[1]);

        // i = const = shipFieldCoordinatesI
        if (this.getVector() == 1) {
            for (let i = shipFieldCoordinatesI; i < shipFieldCoordinatesI + this.size; ++i) {
                let currentField = document.getElementById(`${i}${shipFieldCoordinatesJ}`);
                if (currentField == null) {
                    return false;
                }
            }
            return true;
        } else {
            for (let j = shipFieldCoordinatesJ; j < shipFieldCoordinatesJ + this.size; ++j) {
                let currentField = document.getElementById(`${shipFieldCoordinatesI}${j}`);
                if (currentField == null) {
                    return false;
                }
            }
            return true;
        }
    }

    getShipFieldsArray() {
        let shipFieldCoordinatesI = parseInt(this.getCoordinates()[0]);
        let shipFieldCoordinatesJ = parseInt(this.getCoordinates()[1]);
        let shipFields = [];

        if (this.getVector() == 1) {
            for (let i = shipFieldCoordinatesI; i < shipFieldCoordinatesI + this.getSize(); i++) {
                for (let j = shipFieldCoordinatesJ; j <= shipFieldCoordinatesJ; j++) {
                    let shipField = document.getElementById(`${i}${j}`);
                    shipFields.push(shipField);
                }
            }
            return shipFields;
        } else {
            for (let i = shipFieldCoordinatesI; i <= shipFieldCoordinatesI; i++) {
                for (let j = shipFieldCoordinatesJ; j < shipFieldCoordinatesJ + this.getSize(); j++) {
                    let shipField = document.getElementById(`${i}${j}`);
                    shipFields.push(shipField);
                }
            }
            return shipFields;
        }
    }

    getRadius() {
        let shipFieldCoordinatesI = parseInt(this.getCoordinates()[0]);
        let shipFieldCoordinatesJ = parseInt(this.getCoordinates()[1]);
        let radiusFields = [];

        if (this.getVector() == 1) {
            for (let i = shipFieldCoordinatesI - 1; i <= shipFieldCoordinatesI + this.getSize(); i++) {
                for (let j = shipFieldCoordinatesJ - 1; j <= shipFieldCoordinatesJ + 1; j ++) {
                    let radiusField = document.getElementById(`${i}${j}`);
                    if (radiusField) {
                        if (radiusField != 1) {

                        }
                        radiusFields.push(radiusField);
                    }
                }
            }
        } else {
            for (let i = shipFieldCoordinatesI - 1; i <= shipFieldCoordinatesI + this.getSize(); i++) {
                for (let j = shipFieldCoordinatesJ - 1; j <= shipFieldCoordinatesJ + 1; j ++) {
                    let radiusField = document.getElementById(`${i}${j}`);
                    if (radiusField) {
                        radiusFields.push(radiusField);
                    }
                }
            }
        }
        
    }

    getCoordinates() {
        return this.coordinates;
    }

    setCoordinates(coordinates) {
        this.coordinates = coordinates;
    }

    setVector(vector) {
        this.vector = vector;
    }

    getVector() {
        return this.vector;
    }

    getSize() {
        return this.size;
    }

    setState(state) {
        this.state = state;
    }

    getShip() {
        return {
            getSize,
            setVector,
            getVector,
            setState,
            checkRadius,
            setCoordinates,
        };
    }
}