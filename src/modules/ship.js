export default function createShip(length) {
    return {
        length: length,
        hit: 0,
        isSunk: () => length == hit ? true : false,
    }
}