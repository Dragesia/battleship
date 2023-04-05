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

const enemyWaters = document.querySelectorAll('.computer-board > .water');
const winner = document.querySelector('.winner-container');
const result = document.querySelector('.result');
const playAgain = document.querySelector('.play-again');
// const totalShots = document.querySelector('.total-shots');
// const missedShots = document.querySelector('.missed-shots');
// const accuracy = document.querySelector('.accuracy');
playAgain.onclick = () => window.location.reload();
enemyWaters.forEach(enemyWater => {
    let index = [...enemyWater.parentElement.children].indexOf(enemyWater);
    let x = Math.floor(index/10);
    let y = index % 10;
    enemyWater.onclick = () => {
        if (!computer.game.gameboard[x][y].isAvailable) return;
        computer.game.receiveAttack(x, y);
        computer.game.renderGameboard('computer');
        if (computer.game.isAllSunk()) {
            winner.style.display = 'flex';
            result.innerHTML = 'win';
            result.style.color = 'darkgreen';

            console.log('You win!');
        }
        computer.playRandom(player);
        if (player.game.isAllSunk()) {
            winner.style.display = 'flex';
            result.innerHTML = 'lost';
            result.style.color = 'darkred';

            console.log('You lost!');
        }
    }
});

