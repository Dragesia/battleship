(()=>{"use strict";function e(){let e=[...Array(10)].map((e=>Array(10)));for(let i=0;i<10;i++)for(let r=0;r<10;r++)e[i][r]={ship:"undefined",isAvailable:!0};return e}function i(){return{allShips:[],gameboard:e(),missed:[],placeShip(e,i,r,a){if(0==a)return;if(!function(e,i,r,a,t){if("vertical"==a){r+t>10&&(r=10-t);for(let a=r;a<r+t;a++){if(console.log(i,a),a+1<=9&&"undefined"!=e[i][a+1].ship)return!1;if(a-1>=0&&"undefined"!=e[i][a-1].ship)return!1;if(i-1>=0&&"undefined"!=e[i-1][a].ship)return!1;if(i+1<=9&&"undefined"!=e[i+1][a].ship)return!1}}else if("horizontal"==a){i+t>10&&(i=10-t);for(let a=i;a<i+t;a++){if("undefined"!=e[a+1][r+1].ship)return!1;if("undefined"!=e[a+1][r-1].ship)return!1;if("undefined"!=e[a-1][r+1].ship)return!1;if("undefined"!=e[a-1][r-1].ship)return!1}}return!0}(this.gameboard,e,i,r,a))return;let t={length:s=a,hit:0,isSunk:()=>s==hit};var s;if(this.allShips.push(t),"vertical"==r){i+a>10&&(i=10-a);for(let r=i;r<i+a;r++)this.gameboard[e][r].ship=t}else if("horizontal"==r){e+a>10&&(e=10-a);for(let r=e;r<e+a;r++)this.gameboard[r][i].ship=t}},receiveAttack(e,i){"undefined"!=this.gameboard[e][i].ship?this.gameboard[e][i].hit++:this.missed.includes([e,i])||this.missed.push([e,i]),this.gameboard[e][i].isAvailable=!1},isAllSunk(){return this.allShips.forEach((e=>{if(!e.isSunk())return!1})),!0},renderPlayerGameboard(){let e=document.querySelector(".gameboard");e.innerHTML="";for(let i=0;i<10;i++)for(let r=0;r<10;r++){let a=document.createElement("div");a.onclick=()=>{let e=[...a.parentElement.children].indexOf(a),i=Math.floor(e/10),r=e%10;this.placeShip(i,r,"vertical",5),this.renderPlayerGameboard()},"undefined"==this.gameboard[i][r].ship&&this.gameboard[i][r].isAvailable?a.classList.add("water"):"undefined"!=this.gameboard[i][r].ship||this.gameboard[i][r].isAvailable?this.gameboard[i][r].isAvailable?a.classList.add("ship"):this.gameboard[i][r].isAvailable||a.classList.add("ship-hit"):a.classList.add("water-hit"),e.appendChild(a)}}}}i(),document.querySelector(".gameboard"),i().renderPlayerGameboard()})();