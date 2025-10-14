// Órbitas estables + pequeñísima desincronización para que nunca coincidan
(function () {
  const chips = [...document.querySelectorAll('.chip')];
  if (!chips.length) return;

  chips.forEach((chip, i) => {
    chip.style.animationDelay = `${-(i * 1.8)}s`;
  });

  // Ajuste fino de radios por tamaño del panel
  const orbit = document.querySelector('.orbit');
  const set = () => {
    const w = orbit.clientWidth;
    if (w < 480) {
      document.documentElement.style.setProperty('--outerR', '32%');
      document.documentElement.style.setProperty('--innerR', '24%');
    } else if (w < 740) {
      document.documentElement.style.setProperty('--outerR', '34%');
      document.documentElement.style.setProperty('--innerR', '25%');
    } else {
      document.documentElement.style.setProperty('--outerR', '35%');
      document.documentElement.style.setProperty('--innerR', '26%');
    }
    // aplicar
    document.querySelectorAll('.chip--outer').forEach(c=>c.style.setProperty('--radius','var(--outerR)'));
    document.querySelectorAll('.chip--inner').forEach(c=>c.style.setProperty('--radius','var(--innerR)'));
  };
  set();
  addEventListener('resize', set, {passive:true});
})();
