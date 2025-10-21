/* Órbita accesible, eficiente y adaptada a tamaños */
(function () {
  const orbit = document.querySelector('.orbit');
  if (!orbit) return;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) return; // respeta usuarios sin animaciones

  function speedForWidth(w){ return w < 768 ? 0.045 : 0.06; }
  let speed = speedForWidth(window.innerWidth);

  const nodes = [...orbit.querySelectorAll('.node')];
  const base = nodes.map(n => parseFloat(n.dataset.angle || 0));
  let spin = 0;

  function layout() {
    const rect = orbit.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) / 2 - 90;

    nodes.forEach((n, i) => {
      const a = (base[i] + spin) * Math.PI / 180;
      const x = radius * Math.cos(a);
      const y = radius * Math.sin(a);
      n.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  }

  function tick() {
    spin = (spin + speed) % 360;
    layout();
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    speed = speedForWidth(window.innerWidth);
    layout();
  });

  requestAnimationFrame(tick);
})();
