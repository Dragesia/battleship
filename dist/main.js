(()=>{"use strict";function e(){let e=[...Array(10)].map((e=>Array(10)));for(let i=0;i<10;i++)for(let r=0;r<10;r++)e[i][r]={ship:"undefined",isAvailable:!0};return e}function i(){return{allShips:[],gameboard:e(),missed:[],placeShip(e,i,r,t){if(0==t)return;if(!function(e,i,r,t,a){if("vertical"==t){r+a>10&&(r=10-a);for(let t=r;t<r+a;t++){if(t+1<=9&&"undefined"!=e[i][t+1].ship)return!1;if(t-1>=0&&"undefined"!=e[i][t-1].ship)return!1;if(i-1>=0&&"undefined"!=e[i-1][t].ship)return!1;if(i+1<=9&&"undefined"!=e[i+1][t].ship)return!1}}else if("horizontal"==t){i+a>10&&(i=10-a);for(let t=i;t<i+a;t++){if(t+1<=9&&"undefined"!=e[t+1][r].ship)return!1;if(t-1>=0&&"undefined"!=e[t-1][r].ship)return!1;if(r-1>=0&&"undefined"!=e[t][r-1].ship)return!1;if(r+1<=9&&"undefined"!=e[t][r+1].ship)return!1}}return!0}(this.gameboard,e,i,r,t))return!1;let a={length:s=t,hit:0,isSunk:()=>s==hit};var s;if(this.allShips.push(a),"vertical"==r){i+t>10&&(i=10-t);for(let r=i;r<i+t;r++)this.gameboard[e][r].ship=a;return!0}if("horizontal"==r){e+t>10&&(e=10-t);for(let r=e;r<e+t;r++)this.gameboard[r][i].ship=a;return!0}},receiveAttack(e,i){"undefined"!=this.gameboard[e][i].ship?this.gameboard[e][i].hit++:this.missed.includes([e,i])||this.missed.push([e,i]),this.gameboard[e][i].isAvailable=!1},isAllSunk(){return this.allShips.forEach((e=>{if(!e.isSunk())return!1})),!0},startPlacement(){const e=document.querySelector(".switch > input");let i=document.querySelectorAll(".water"),r=5;i.forEach((i=>{i.onclick=()=>{let t=e.checked?"horizontal":"vertical",a=[...i.parentElement.children].indexOf(i),s=Math.floor(a/10),n=a%10;this.placeShip(s,n,t,r)&&r--,this.renderPlayerGameboard()}}))},renderPlayerGameboard(){console.log(1),document.querySelectorAll(".water").forEach((e=>{let i=[...e.parentElement.children].indexOf(e),r=Math.floor(i/10),t=i%10;e.classList="",e.classList.add("water"),"undefined"==this.gameboard[r][t].ship&&this.gameboard[r][t].isAvailable?e.classList.add("free-water"):"undefined"!=this.gameboard[r][t].ship||this.gameboard[r][t].isAvailable?this.gameboard[r][t].isAvailable?e.classList.add("ship"):this.gameboard[r][t].isAvailable||e.classList.add("ship-hit"):e.classList.add("water-hit")}))}}}i(),document.querySelector(".gameboard"),i().startPlacement()})();