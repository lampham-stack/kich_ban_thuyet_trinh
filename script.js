let c=0;const s=document.querySelectorAll('.slide'),t=s.length;
function show(n){s[c].classList.remove('active');c=((n%t)+t)%t;s[c].classList.add('active');document.getElementById('sc').textContent=`${c+1} / ${t}`;document.getElementById('pb').style.width=`${((c+1)/t)*100}%`}
function nextSlide(){show(c+1)}function prevSlide(){show(c-1)}
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();nextSlide()}if(e.key==='ArrowLeft'){e.preventDefault();prevSlide()}});
show(0);