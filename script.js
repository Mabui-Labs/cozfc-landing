// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Animación centralizada del orbit (todas las satélites rotan juntas)
function initOrbit() {
  const orbit = document.querySelector('.orbit');
  if (!orbit) return;

  const satellites = orbit.querySelectorAll('.satellite');
  let rotation = 0;
  const speed = 0.5; // Segundos por rotación completa (ajusta para más lento/rápido)

  function animate() {
    rotation += 360 / (60 / speed); // Ajuste para ~36s como original
    satellites.forEach(sat => {
      const angle = parseInt(sat.dataset.angle) + rotation;
      const rad = angle * (Math.PI / 180);
      const radius = 210; // px
      sat.style.left = `calc(50% + ${radius * Math.cos(rad)}px)`;
      sat.style.top = `calc(50% + ${radius * Math.sin(rad)}px)`;
      sat.style.transform = `rotate(${angle}deg)`;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', initOrbit);
