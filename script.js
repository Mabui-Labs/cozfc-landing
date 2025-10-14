// Ajuste responsivo fino para orbitas (evita solapes)
(function () {
  const orbit = document.querySelector('.orbit');
  const chips = [...document.querySelectorAll('.chip')];
  if (!orbit || !chips.length) return;

  const set = () => {
    const w = orbit.clientWidth;

    // Radio y velocidad por ancho
    if (w < 480) {
      chips.forEach(ch => {
        ch.style.setProperty('--radius', '28%');
        ch.style.setProperty('--time', '26s');
      });
    } else if (w < 720) {
      chips.forEach(ch => {
        ch.style.setProperty('--radius', '32%');
        ch.style.setProperty('--time', '28s');
      });
    } else {
      chips.forEach(ch => {
        ch.style.setProperty('--radius', '36%');
        ch.style.setProperty('--time', '30s');
      });
    }

    // Pequeña desincronización para que no “se junten”
    chips.forEach((ch, i) => {
      ch.style.animationDelay = `${-(i * 2)}s`;
    });
  };

  set();
  window.addEventListener('resize', set, { passive: true });
})();
