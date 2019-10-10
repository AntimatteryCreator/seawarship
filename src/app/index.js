import {Battleground} from './models/Battleground.mjs';
import { OneShip } from './models/OneShip.js';
import { TwoShip } from './models/TwoShip.js';
import { ThreeShip } from './models/ThreeShip.js';
import { FourShip } from './models/FourShip.js';
import '../public/style/style.css';

//Initial variables
let randNumber = 99; 
let player = new Battleground();
let computer = new Battleground();
let playerBattleground = document.getElementById('player');
let computerBattleground = document.getElementById('computer');
let playerShipsArray = [];
let computerShipsArray = [];
let ships = {
    'OneShip': 4,
    'TwoShip': 3,
    'ThreeShip': 2,
    'FourShip': 1
};
console.log('game executed');

//Function inition game
function init(startgame) {
    console.log('Init()');

    computer.getBattlegroundArray().forEach(element => {
        let field = document.createElement('div');
        field.setAttribute('class', 'computer field');
        field.setAttribute('id', element.id);
        field.setAttribute('isLast', element.isLast);
        field.setAttribute('state', element.state);
        if (element.isLast == true) {
            field.setAttribute('class', ' computer field last');
        }
        field.innerText = element.id;
        computerBattleground.append(field);
    });

    generateShips(computerShipsArray);
    computer.setShips(computerShipsArray);
    shipPlacer(computerShipsArray);

    computer.getBattlegroundArray().forEach(function(field) {
        field = document.getElementById(field.id);
        let fieldClass = field.getAttribute('class');
        if (field.getAttribute('class').match(/ship/) == 'ship') {
            field.setAttribute('style', 'background: white'); 
        }
    });

    
    player.getBattlegroundArray().forEach(element => {
        let field = document.createElement('div');
        field.setAttribute('class', ' player field');
        field.setAttribute('id', element.id);
        field.setAttribute('isLast', element.isLast);
        field.setAttribute('state', element.state);
        if (element.isLast == true) {
            field.setAttribute('class', ' player field last');
        }
        field.innerText = element.id;
        playerBattleground.append(field);
    });

    generateShips(playerShipsArray);
    player.setShips(playerShipsArray);
    shipPlacer(playerShipsArray);

    startgame();

}

function draw(ship) {
    ship.forEach(function(element) {
        let shipField = document.getElementById(element.getAttribute('id'));
        let shipFieldClass = shipField.getAttribute('class');
        shipField.setAttribute('class', shipFieldClass + ' ship');
    }); 
}

//Placigs ships

function shipPlacer(shipsArray) {
    console.log('start shipPlacer()');
    shipsArray.forEach(ship => {
        let flag = false;
        while (!flag) {
            if (ship.getVector() == 1) {
                ship.setVector(0);
                flag = ship.checkRadius();
            } else {    
                ship.setCoordinates(getRandom());
                ship.setVector(1);
                flag = ship.checkRadius();
            }
        }
        draw(ship.getShipFieldsArray());    
    });
}

function generateShips(shipsArray) {
    console.log('start generateShip()');
    Object.keys(ships).forEach(element => {
        for (let i = 0; i < ships[element]; i++) {
            let ship = createShip(element);
            shipsArray.push(ship);
        }
    });
}

function getRandom() {
    console.log('Start getRandom()');
    let rand = (Math.random() * randNumber).toFixed(0);
    if (rand.length == 1) {
        rand = '0' + rand;
    }
    return rand;
}

function createShip(shipType) {    
    let rand = getRandom();

    let options = {
        coordinates: rand,
        shipType: shipType,
    };
    if (shipType == 'OneShip') {
        return new OneShip(options);
    }
    if (shipType == 'TwoShip') {
        return new TwoShip(options);
    }
    if (shipType == 'ThreeShip') {
        return new ThreeShip(options);
    }
    if (shipType == 'FourShip') {
        return new FourShip(options);
    }
}

function startGame() {
    let game = true;
    console.log('startGame()');
    // flag game loop while game=true
    // if player break computer's ship, then player goal
    // if player miss, then computer next
    // while (game) {
        
    // }
}

init(function() {
    console.log('startGame init()');
    startGame();
});

