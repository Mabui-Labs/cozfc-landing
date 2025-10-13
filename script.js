// año en footer
document.getElementById('yy').textContent = new Date().getFullYear();

// Sin JS extra para el ecosistema: la animación es 100% CSS.
// Si quieres pausar al pasar el mouse:
const rings = document.querySelectorAll('.ring');
rings.forEach(r => {
  r.addEventListener('mouseenter', ()=> r.style.animationPlayState = 'paused');
  r.addEventListener('mouseleave', ()=> r.style.animationPlayState = 'running');
});
