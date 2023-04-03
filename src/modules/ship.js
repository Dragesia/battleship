export default function createShip(shipLength) {
    return {
        shipLength: shipLength,
        hit: 0,
        isSunk() { return this.shipLength == this.hit }
    }
}