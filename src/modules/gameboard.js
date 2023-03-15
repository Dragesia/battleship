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
        missed: [],
        placeShip(x, y, axis, shipLength) {
            let ship = createShip(shipLength);
            if (axis == 'vertical') {
                if (y + shipLength > 10) y = 10 - shipLength;
                for (let i = y; i < y + shipLength; i++) {
                    this.gameboard[x][i] = ship;
                }
            } else if (axis == 'horizontal') {
                if (x + shipLength > 10) x = 10 - shipLength;
                for (let i = x; i < x + shipLength; i++) {
                    this.gameboard[i][y] = ship;
                }
            }
        },
        receiveAttack(x, y) {
            if (this.gameboard[x][y] != 0) this.gameboard[x][y].hit++;
            else if (!this.missed.includes([x, y])) this.missed.push([x, y]);
        }
    }
}

let player = createGameboard();

player.placeShip(1, 9, 'vertical', 4);

console.log(player.gameboard);