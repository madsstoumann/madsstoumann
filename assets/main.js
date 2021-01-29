/* Version 1.0.0 */
const D = (n, t) => {
  let e = document.createElement('a');
  e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(t));
	e.setAttribute('download', n);
	e.hidden = true;
	document.body.appendChild(e);
	e.click();
	document.body.removeChild(e);
}
const P = (k,v) =>  document.documentElement.style.setProperty(k, v);

g.addEventListener('click', () => document.body.classList.toggle('bf', g.checked));
h.addEventListener('input', () => P('--h', h.valueAsNumber));
s.addEventListener('input', () => P('--s', `${s.value}%`));
l.addEventListener('input', () => P('--l', `${l.value}%`));
x.addEventListener('click', () => {
	const a = document.querySelectorAll('.gi:not(.gir');
	let s = '';
  a.forEach(c => {
    if (c.innerText) {
			s += `.${c.innerText.replace(/ /g,'').toLowerCase()} { color: ${window.getComputedStyle(c).getPropertyValue('background-color')}; }\n`;
    }
	});
	D('styles.css', s);
});
window.addEventListener('hashchange', (e) => {
	const [n, N] = e.newURL.split('#');
	const [o, O] = e.oldURL.split('#');

	if (N) {
		const m = document.getElementById(N);
		if (m) {
			m.addEventListener('keydown', K);
			m.__f = [...m.querySelectorAll('[href]')];
			m.__f[0].focus();
		}
	}
	if (O) {
		document.getElementById(O).removeEventListener('keydown', K);
		document.querySelector(`[href*="#${O}"]`).focus();
	}
	setTimeout(() => window.scrollTo(0,0), 10);
});

function K(e) {
	if (e.key === 'Tab') {
		e.preventDefault();
		const l =  this.__f.length - 1;
		let x = this.__f.indexOf(e.target);
		x = e.shiftKey ? x-1 : x+1;
		if (x < 0) x = l;
		if (x > l) x = 0;
		this.__f[x].focus();
	}
	if (e.key === 'Escape') location.hash = '#';
}