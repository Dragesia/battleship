export default function createPlayer(gameboard) {
    return {
        game: gameboard,
        playRandom: (enemy) => {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            console.log(x, y);
            if (enemy.gameboard[x][y].isAvailable) {
                enemy.receiveAttack(x, y);
                return true;
            }
            return false;
        }
    }
}