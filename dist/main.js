(()=>{"use strict";const t={resetPage(){document.body.innerHTML=""},renderStartPage(){const t=document.createElement("div");t.setAttribute("id","start-container");const e=document.createElement("p");e.setAttribute("id","title"),e.textContent="CLUK!",t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","button-container"),t.appendChild(n);const i=document.createElement("button");i.setAttribute("id","start-button"),i.innerText="START GAME";const r=document.createElement("button");r.setAttribute("id","difficulty-button"),r.innerText="DIFFICULTY: EASY";const o=document.createElement("button");o.setAttribute("id","mode-button"),o.innerText="MODE: TIMER",n.append(i,r,o),document.body.appendChild(t)},renderGamePage(t){const e=document.createElement("div");e.id="game-container";const n=document.createElement("div");n.id="game-wrapper";let i=60*t;const r=document.createElement("span");r.innerHTML=i,setInterval((function(){i-=1,r.innerHTML=i}),1e3),e.append(r,n),document.body.append(e)},renderLetters(t){if(t.length<20){const e=document.querySelector("#game-wrapper");e.innerHTML="";for(let n=0;n<t.length;n++){const i=document.createElement("p");i.innerText=t[n].letter,i.className="letter",i.style.left=t[n].x+"px",i.style.top=t[n].y+"px",e.appendChild(i)}}}},e={letters:[],positions:[],totalScore:0,difficulty:0,mode:"timer",maxLetterOnScreen:20,spawnRandomLetter(){const t=Math.floor(26*Math.random()),e={letter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(t),point:0,x:0,y:0};let n,i=Math.floor(Math.random()*(window.innerWidth-200))+100,r=Math.floor(Math.random()*(window.innerHeight-200))+100;console.log(window.innerWidth,window.innerHeight);do{i=Math.floor(Math.random()*(window.innerWidth-200))+100,r=Math.floor(Math.random()*(window.innerHeight-200))+100,n=!1;for(let t=0;t<this.positions.length;t++){const e=this.positions[t];Math.sqrt((e.x-i)**2+(e.y-r)**2)<200&&(n=!0)}console.log("!!!!")}while(n);this.positions.push({x:i,y:r}),e.x=i,e.y=r,this.letters.push(e),console.log(e)},startGame(t){let e=60*t,n=setInterval((()=>{0!=e?(this.letters.length<20&&this.spawnRandomLetter(),e--):clearInterval(n)}),1e3/(this.difficulty+1))},removeLetter(){this.letters.shift()}};t.renderStartPage(),document.getElementById("start-button").addEventListener("click",(function(){t.resetPage(),t.renderGamePage(1),e.startGame(1),setInterval((function(){t.renderLetters(e.letters)}),1e3/(e.difficulty+1)),document.addEventListener("keydown",(t=>{const n=document.querySelector(".letter");null!==n&&n.innerText===t.key.toUpperCase()&&(n.remove(),e.removeLetter())}))})),document.getElementById("difficulty-button").addEventListener("click",(function(){0==e.difficulty?(e.difficulty=1,this.innerText="DIFFICULTY: MEDIUM"):1==e.difficulty?(e.difficulty=2,this.innerText="DIFFICULTY: HARD"):(e.difficulty=0,this.innerText="DIFFICULTY: EASY")})),document.getElementById("mode-button").addEventListener("click",(function(){"timer"==e.mode?(e.mode="SURVIVAL",this.innerText="MODE: SURVIVAL"):(e.mode="timer",this.innerText="MODE: TIMER")}))})();