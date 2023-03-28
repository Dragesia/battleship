export default function createPlayer(game) {
    return {
        playRandom: () => {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            console.log(x, y);
            if (game.gameboard[x][y].isAvailable) {
                game.receiveAttack(x, y);
                return true;
            }
            return false;
        }
    }
}