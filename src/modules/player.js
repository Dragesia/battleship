import { checkPosition } from './gameboard.js';

export default function createPlayer(gameboard) {
    return {
        game: gameboard,
        playRandom: (enemy) => {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            while (!enemy.game.gameboard[x][y].isAvailable) {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            }
            enemy.game.receiveAttack(x, y);
            enemy.game.renderGameboard('user');
        },
        placeRandom() {
            let randomArr = [];
            let shipLength = 5;
            let x, y;
            while (shipLength) {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
                let axis = Math.floor(Math.random() * 2) ? 'horizontal' : 'vertical';
                while (randomArr.includes([x, y]) || !checkPosition(this.game.gameboard, x, y, axis, shipLength)) {
                    x = Math.floor(Math.random() * 10);
                    y = Math.floor(Math.random() * 10);
                }
                this.game.placeShip(x, y, axis, shipLength--);
                randomArr.push([x, y]);
            }
            this.game.renderGameboard('computer');
        }
    }
}