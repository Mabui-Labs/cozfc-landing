// Año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Activar la rotación sólo cuando el ecosistema entra en vista (perf)
const orbit = document.querySelector('.ring');
if (orbit && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(([entry]) => {
    orbit.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
  }, { threshold: 0.15 });
  io.observe(orbit);
}
