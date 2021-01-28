function B(e){this.contains(e.target)||(location.hash="#")}function K(e){if("Tab"===e.key){e.preventDefault();const t=this.__f.length-1;let n=this.__f.indexOf(e.target);(n=e.shiftKey?n-1:n+1)<0&&(n=t),n>t&&(n=0),this.__f[n].focus()}"Escape"===e.key&&(location.hash="#")}g.addEventListener("click",()=>document.body.classList.toggle("bf",g.checked)),h.addEventListener("input",()=>P("--h",h.valueAsNumber)),s.addEventListener("input",()=>P("--s",`${s.value}%`)),l.addEventListener("input",()=>P("--l",`${l.value}%`)),window.addEventListener("hashchange",e=>{const[t,n]=e.newURL.split("#"),[o,s]=e.oldURL.split("#");if(n){const e=document.getElementById(n);e&&(document.body.addEventListener("click",B.bind(e)),e.addEventListener("keydown",K),e.__f=[...e.querySelectorAll("[href]")],e.__f[0].focus())}s&&(document.body.removeEventListener("click",B),document.getElementById(s).removeEventListener("keydown",K),document.querySelector(`[href*="#${s}"]`).focus()),setTimeout(()=>window.scrollTo(0,0),10)});const P=(e,t)=>document.documentElement.style.setProperty(e,t);

/* TMP: Fix #links, when hosting locally */
if (location.href.includes('127.0.0.1')) {
	const tmp = document.querySelectorAll('.c-nav__item');
	tmp.forEach(link => {
		link.href.baseVal = link.href.baseVal.replace('/#', '#')
	});
}