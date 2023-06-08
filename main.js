(()=>{"use strict";const e={resetPage(){document.body.innerHTML=""},renderStartPage(){document.body.innerHTML="";const e=document.createElement("div");e.setAttribute("id","start-container");const t=document.createElement("p");t.setAttribute("id","title"),t.textContent="CLUK!",e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","button-container"),e.appendChild(n);const r=document.createElement("button");r.setAttribute("id","start-button"),r.innerText="START GAME";const o=document.createElement("button");o.setAttribute("id","difficulty-button"),o.innerText="DIFFICULTY: EASY";const i=document.createElement("button");i.setAttribute("id","mode-button"),i.innerText="MODE: TIMER",n.append(r,o,i),document.body.appendChild(e)},renderTimerGamePage(e,t){document.body.innerHTML="";const n=document.createElement("div");n.id="game-container";const r=document.createElement("div");r.id="game-wrapper";const o=document.createElement("div");o.id="timer-score-container";let i=60*e;const a=document.createElement("span");a.id="timer",a.innerHTML=i;const c=document.createElement("span");c.innerHTML="Score:"+t,c.id="score",setInterval((function(){0!=i?i-=1:clearInterval(),a.innerHTML=i}),1e3),o.append(c,a),n.append(o,r),document.body.append(n)},renderSurvivalGamePage(e){document.body.innerHTML="";const t=document.createElement("div");t.id="game-container";const n=document.createElement("div");n.id="game-wrapper";const r=document.createElement("div");r.id="timer-score-container";const o=document.createElement("span");o.innerHTML="Score:"+e,o.id="score",r.append(o),t.append(r,n),document.body.append(t)},renderLetters(e){if(e.length<20){const t=document.querySelector("#game-wrapper");t.innerHTML="";for(let n=0;n<e.length;n++){const r=document.createElement("p");r.innerText=e[n].letter,r.className="letter",r.style.left=e[n].x+"px",r.style.top=e[n].y+"px",t.appendChild(r)}}},endGame(e){const t=document.createElement("div");t.id="game-over-menu";const n=document.createElement("span");n.id="button-menu",n.innerHTML="Menu";const r=this;n.onclick=function(){r.renderStartPage(),e()},t.append(n),document.body.append(t)}},t=new function(){return{letters:[],positions:[],totalScore:0,difficulty:0,mode:"timer",maxLetterOnScreen:20,gameOver:!1,spawnRandomLetter(){const e=Math.floor(26*Math.random()),t={letter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(e),point:0,x:0,y:0};let n,r=Math.floor(Math.random()*(window.innerWidth-200))+100,o=Math.floor(Math.random()*(window.innerHeight-200))+100;console.log(window.innerWidth,window.innerHeight);do{r=Math.floor(Math.random()*(window.innerWidth-200))+100,o=Math.floor(Math.random()*(window.innerHeight-200))+100,n=!1;for(let e=0;e<this.positions.length;e++){const t=this.positions[e];Math.sqrt((t.x-r)**2+(t.y-o)**2)<200&&(n=!0)}}while(n);this.positions.push({x:r,y:o}),t.x=r,t.y=o,this.letters.push(t)},startTimerGame(e){let t=60*e;setInterval((()=>{t--}),1e3);let n=setInterval((()=>{0!=t?this.letters.length<20&&this.spawnRandomLetter():(this.gameOver=!0,clearInterval(n))}),1e3/(this.difficulty+1))},startSurvivalGame(){let e=setInterval((()=>{this.letters.length<20?this.spawnRandomLetter():(this.gameOver=!0,clearInterval(e))}),1e3/(this.difficulty+1))},removeLetter(){this.letters.shift(),this.positions.shift()},resetGame(){this.letters=[],this.positions=[],this.gameOver=!1,this.totalScore=0}}};function n(){0==t.difficulty?(t.difficulty=1,this.innerText="DIFFICULTY: MEDIUM"):1==t.difficulty?(t.difficulty=2,this.innerText="DIFFICULTY: HARD"):(t.difficulty=0,this.innerText="DIFFICULTY: EASY")}function r(){"timer"==t.mode?(t.mode="SURVIVAL",this.innerText="MODE: SURVIVAL"):(t.mode="timer",this.innerText="MODE: TIMER")}function o(){e.resetPage(),"timer"===t.mode?(e.renderTimerGamePage(1,t.totalScore),t.startTimerGame(1)):(e.renderSurvivalGamePage(t.totalScore),t.startSurvivalGame());const n=setInterval((function(){t.gameOver?(JSON.parse(localStorage.getItem("highscore"))<t.totalScore&&localStorage.setItem("highscore",JSON.stringify(t.totalScore)),clearInterval(n),t.resetGame(),e.endGame(i)):(e.renderLetters(t.letters),document.getElementById("score").innerText="Score:"+t.totalScore)}),1e3/(t.difficulty+1)),r=document.getElementById("score");document.addEventListener("keydown",(e=>{const n=document.querySelector(".letter");null!==n&&n.innerText===e.key.toUpperCase()&&(n.remove(),t.removeLetter(),t.totalScore+=t.difficulty+1,r.innerText="Score:"+t.totalScore,console.log(r.innerText,t.totalScore))}))}function i(){document.getElementById("start-button").addEventListener("click",o),document.getElementById("difficulty-button").addEventListener("click",n),document.getElementById("mode-button").addEventListener("click",r)}e.renderStartPage(),i(),null!=JSON.parse(localStorage.getItem("highscore"))&&localStorage.setItem("highscore",JSON.stringify(0))})();