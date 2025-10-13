/* Parallax sutil del fondo al mover el mouse / hacer scroll */
(function () {
  const bg = document.querySelector('.page-bg');
  let cx = 0, cy = 0;

  function move(e){
    const x = (e.clientX || window.innerWidth / 2) / window.innerWidth - 0.5;
    const y = (e.clientY || window.innerHeight / 2) / window.innerHeight - 0.5;
    cx = x * 6;  // amplitud suave
    cy = y * 6;
    bg.style.transform = `translate(${cx}px, ${cy}px) scale(1.06)`;
  }
  window.addEventListener('mousemove', move);

  // amortiguación al hacer scroll
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const dy = window.scrollY - lastY;
    lastY = window.scrollY;
    bg.style.filter = `saturate(${0.85 + Math.min(0.15, Math.abs(dy)/800)})`;
  });
})();
