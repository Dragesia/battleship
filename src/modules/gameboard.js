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

function checkPosition(gbArr, x, y, axis, shipLength) {
    if (axis == 'vertical') {
        if (y + shipLength > 10) y = 10 - shipLength;
        for (let i = y; i < y + shipLength; i++) {
            if (i+1 <= 9) {
                if (gbArr[x][i+1].ship != 'undefined') return false; 
            }
            if (i-1 >= 0) {
                if (gbArr[x][i-1].ship != 'undefined') return false;
            }
            if (x-1 >= 0) {
                if (gbArr[x-1][i].ship != 'undefined') return false;
            }
            if (x+1 <= 9) {
                if (gbArr[x+1][i].ship != 'undefined') return false;
            } 
        }
    } else if (axis == 'horizontal') {
        if (x + shipLength > 10) x = 10 - shipLength;
        for (let i = x; i < x + shipLength; i++) {
            if (i+1 <= 9) {
                if (gbArr[i+1][y].ship != 'undefined') return false;
            }
            if (i-1 >= 0) {
                if (gbArr[i-1][y].ship != 'undefined') return false;
            }
            if (y-1 >= 0) {
                if (gbArr[i][y-1].ship != 'undefined') return false;
            }
            if (y+1 <= 9) {
                if (gbArr[i][y+1].ship != 'undefined') return false;
            }   
        }
    } return true;
}

export default function gameboard() {
    return {
        allShips: [],
        gameboard: createGbArr(),
        missed: [],
        placeShip(x, y, axis, shipLength) {
            if (shipLength == 0) return;
            if (!checkPosition(this.gameboard, x, y, axis, shipLength)) return false;
            let ship = createShip(shipLength);
            this.allShips.push(ship);
            if (axis == 'vertical') {
                if (y + shipLength > 10) y = 10 - shipLength;
                for (let i = y; i < y + shipLength; i++) {
                    this.gameboard[x][i].ship = ship;
                }
                return true;
            } else if (axis == 'horizontal') {
                if (x + shipLength > 10) x = 10 - shipLength;
                for (let i = x; i < x + shipLength; i++) {
                    this.gameboard[i][y].ship = ship;
                }
                return true;
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
        },
        startPlacement() {
            const axisSwitch = document.querySelector('.switch > input');
            let waterArr = document.querySelectorAll('.water');
            let len = 5;
            waterArr.forEach(water => {
                water.onclick = () => {
                    let axis = axisSwitch.checked ? 'horizontal' : 'vertical';
                    let index = [...water.parentElement.children].indexOf(water);
                    let x = Math.floor(index/10);
                    let y = index % 10;
                    if (this.placeShip(x, y, axis, len)) len--; // fix this
                    this.renderPlayerGameboard();
                }
            });
        },
        renderPlayerGameboard() {
            console.log(1);
            let waterArr = document.querySelectorAll('.water');
            waterArr.forEach(water => {
                let index = [...water.parentElement.children].indexOf(water);
                let i = Math.floor(index/10);
                let j = index % 10;
                water.classList = '';
                water.classList.add('water');
                if (this.gameboard[i][j].ship == 'undefined' && this.gameboard[i][j].isAvailable) water.classList.add('free-water');
                else if (this.gameboard[i][j].ship == 'undefined' && !this.gameboard[i][j].isAvailable) water.classList.add('water-hit');
                else if (this.gameboard[i][j].isAvailable) water.classList.add('ship');
                else if (!this.gameboard[i][j].isAvailable) water.classList.add('ship-hit'); 
            });
            // water.onclick = () => {
            //     let index = [...water.parentElement.children].indexOf(water);
            //     let x = Math.floor(index/10);
            //     let y = index % 10;
            //     this.placeShip(x, y, 'vertical', 5); // fix this
            //     this.renderPlayerGameboard();
            // }
        }
    }
}

let game = gameboard()
let player = createPlayer(game);

