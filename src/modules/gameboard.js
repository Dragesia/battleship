import createShip from './ship.js';
import createWater from './water.js';
import createPlayer from './player.js';

function createGbArr() {
    let arr = [...Array(10)].map(e => Array(10));
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            arr[i][j] = createWater();
        }
    }
    return arr;
}

export default function createGameboard() {
    return {
        allShips: [],
        gameboard: createGbArr(),
        missed: [],
        placeShip(x, y, axis, shipLength) {
            let ship = createShip(shipLength);
            this.allShips.push(ship);
            if (axis == 'vertical') {
                if (y + shipLength > 10) y = 10 - shipLength;
                for (let i = y; i < y + shipLength; i++) {
                    this.gameboard[x][i].ship = ship;
                }
            } else if (axis == 'horizontal') {
                if (x + shipLength > 10) x = 10 - shipLength;
                for (let i = x; i < x + shipLength; i++) {
                    this.gameboard[i][y].ship = ship;
                }
            }
        },
        receiveAttack(x, y) {
            if (this.gameboard[x][y].ship != 'undefined') this.gameboard[x][y].hit++;
            else if (!this.missed.includes([x, y])) this.missed.push([x, y]);
            this.gameboard[x][y].isAvailable = false;
        },
        isAllSunk() {
            this.allShips.forEach(s => {
                if (!s.isSunk()) return false;
            });
            return true;
        }
    }
}
let game = createGameboard()
let player = createPlayer(game);

game.placeShip(1, 9, 'vertical', 4);

player.playRandom();

console.log(game.gameboard);