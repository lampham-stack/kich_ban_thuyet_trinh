const slides=document.querySelectorAll('.slide');
let cur=0;
function show(n){slides.forEach(s=>s.classList.remove('active'));cur=Math.max(0,Math.min(n,slides.length-1));slides[cur].classList.add('active');document.getElementById('sc').textContent=(cur+1)+' / '+slides.length;document.getElementById('pb').style.width=((cur+1)/slides.length*100)+'%';}
function go(d){show(cur+d)}
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key===' ')go(1);if(e.key==='ArrowLeft')go(-1)});
show(0);