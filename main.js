(()=>{"use strict";const t={resetPage(){document.body.innerHTML=""},renderStartPage(){const t=document.createElement("div");t.setAttribute("id","start-container");const e=document.createElement("p");e.setAttribute("id","title"),e.textContent="CLUK!",t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","button-container"),t.appendChild(n);const d=document.createElement("button");d.setAttribute("id","start-button"),d.textContent="START GAME",n.appendChild(d);const o=document.createElement("button");o.setAttribute("id","difficulty-button"),o.textContent="DIFFICULTY",n.appendChild(o);const r=document.createElement("button");o.setAttribute("id","mode-button"),o.textContent="MODE",n.appendChild(r),document.body.appendChild(t)},putLetterOnScreen(){}};({letters:[],totalScore:0,time:.5,spawnRandomLetter(){const t=Math.floor(26*Math.random()),e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(t);this.letters.push(e),console.log(e)},startGame(t){let e=60*this.time,n=setInterval((()=>{0!=e?(this.spawnRandomLetter(),e--):clearInterval(n)}),t)}}).startGame(1e3),document.getElementById("start-button").addEventListener("click",t.resetPage),document.getElementById("difficulty-button").addEventListener("click",t.renderStartPage),document.getElementById("level-button").addEventListener("click",t.resetPage)})();