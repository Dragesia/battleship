export default function DOM() {
    const axisSwitch = document.querySelector('.switch > input');
    let waterArr = document.querySelectorAll('.water');
    waterArr.forEach(water => {
        water.onclick = () => {
            let axis = axisSwitch.checked ? 'vertical' : 'horizontal';
            let index = [...water.parentElement.children].indexOf(water);
            let x = Math.floor(index/10);
            let y = index % 10;
            this.placeShip(x, y, axis, 5); // fix this
            this.renderPlayerGameboard();
        }
    });
}