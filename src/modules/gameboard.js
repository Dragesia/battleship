import createShip from './ship.js';

export default function createGameboard() {
    return {
        gameboard: [[0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0]],
        placeShip(x, y, axis, shipLength) {
            let ship = createShip(shipLength);
            if (axis == 'vertical') {
                for (let i = y; i < y + shipLength; i++) {
                    this.gameboard[x][i] = ship;
                }
            } else if (axis == 'horizontal') {
                for (let i = x; i < x + shipLength; i++) {
                    this.gameboard[i][y] = ship;
                }
            }
        }
    }
}

let player = createGameboard();

player.placeShip(1, 2, 'horizontal', 4);
console.log(player.gameboard);