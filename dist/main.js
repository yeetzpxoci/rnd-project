(()=>{"use strict";const t={resetPage(){document.body.innerHTML=""},renderStartPage(){const t=document.createElement("div");t.setAttribute("id","start-container");const e=document.createElement("p");e.setAttribute("id","title"),e.textContent="CLUK!",t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","button-container"),t.appendChild(n);const r=document.createElement("button");r.setAttribute("id","start-button"),r.innerText="START GAME";const d=document.createElement("button");d.setAttribute("id","difficulty-button"),d.innerText="DIFFICULTY";const o=document.createElement("button");o.setAttribute("id","mode-button"),o.innerText="MODE",n.append(r,d,o),document.body.appendChild(t)},renderGame(t){const e=document.createElement("div");e.id="game-container";for(let n=0;n<t.length;n++){const r=document.createElement("p");r.innerText=t[n],e.appendChild(r)}document.body.append(e)}},e={letters:[],totalScore:0,time:.5,spawnRandomLetter(){const t=Math.floor(26*Math.random()),e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(t);this.letters.push(e),console.log(e)},startGame(t){let e=60*this.time,n=setInterval((()=>{0!=e?(this.spawnRandomLetter(),e--):clearInterval(n)}),t)}};t.renderStartPage(),document.getElementById("start-button").addEventListener("click",(function(){t.resetPage(),e.startGame(1e3),setInterval((function(){t.renderGame(e.letters)}),100)})),document.getElementById("difficulty-button").addEventListener("click",t.renderStartPage),document.getElementById("mode-button").addEventListener("click",t.resetPage)})();