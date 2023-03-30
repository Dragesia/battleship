import createGameboard from "./modules/gameboard.js";

const gb = document.querySelector('.gameboard');
const gameboard = createGameboard();

gameboard.renderPlayerGameboard();


