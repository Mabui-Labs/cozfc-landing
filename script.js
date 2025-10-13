/* Órbita con tarjetas siempre legibles y ordenadas */
(function () {
  const orbit = document.querySelector('.orbit');
  if (!orbit) return;

  const speed = parseFloat(orbit.dataset.speed || '0.06'); // grados por frame
  const nodes = [...orbit.querySelectorAll('.node')];

  // Ángulos base (ordenado según data-angle)
  const base = nodes.map(n => parseFloat(n.dataset.angle || 0));

  let spin = 0;
  function tick() {
    spin = (spin + speed) % 360;

    const rect = orbit.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) / 2 - 70; // margen para chips

    nodes.forEach((n, i) => {
      const a = (base[i] + spin) * Math.PI / 180;
      const x = radius * Math.cos(a);
      const y = radius * Math.sin(a);
      // Centramos y desplazamos; el chip no rota: siempre frontal
      n.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
