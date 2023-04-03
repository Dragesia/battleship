import gameboard from "./modules/gameboard.js";
import createPlayer from "./modules/player.js";

const player = createPlayer(gameboard());
player.game.startPlacement();

const start = document.querySelector('.start');
start.onclick = () => {
    if (player.game.isAllPlaced) {
        const modal = document.querySelector('.modal-container');
        modal.style.display = 'none';
    }     
}

const computer = createPlayer(gameboard());
computer.game.makeAttackable();
computer.placeRandom();

let enemyWaters = document.querySelectorAll('.computer-board > .water');
enemyWaters.forEach(enemyWater => {
    let index = [...enemyWater.parentElement.children].indexOf(enemyWater);
    let x = Math.floor(index/10);
    let y = index % 10;
    enemyWater.onclick = () => {
        if (!computer.game.gameboard[x][y].isAvailable) return;
        computer.game.receiveAttack(x, y);
        computer.game.renderGameboard('computer');
        if (computer.game.isAllSunk()) console.log('You win!');
        computer.playRandom(player);
        if (player.game.isAllSunk()) console.log('You lost!');
    }
});

