import gameboard from "./modules/gameboard.js";
import createPlayer from "./modules/player.js";

const player = createPlayer(gameboard());
player.game.startPlacement();

const computer = createPlayer(gameboard());
computer.game.makeAttackable();

const start = document.querySelector('.start');
start.onclick = () => {
    if (player.game.isAllPlaced) {
        const modal = document.querySelector('.modal-container');
        modal.style.display = 'none';
    }     
}


