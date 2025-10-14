/* 
  Orbitas más ordenadas:
  - Seis chips con separación fija de 60° (definida en el HTML por --start)
  - Misma velocidad para que mantengan distancia y no se solapen
  - Todo lo demás (hover, links) está resuelto desde CSS
*/

/* En caso de necesitar recalcular radios en móviles por alto muy chico */
(function () {
  const orbit = document.querySelector('.orbit');
  const chips = [...document.querySelectorAll('.chip')];
  if (!orbit) return;

  const resize = () => {
    const w = orbit.clientWidth;
    // Mantiene radios con buena separación para no cruzarse
    chips.forEach(ch => {
      if (w < 480) {
        ch.style.setProperty('--radius', '28%');
        ch.style.setProperty('--time', '26s');
      } else if (w < 720) {
        ch.style.setProperty('--radius', '32%');
        ch.style.setProperty('--time', '28s');
      } else {
        ch.style.setProperty('--radius', '36%');
        ch.style.setProperty('--time', '30s');
      }
    });
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });
})();
