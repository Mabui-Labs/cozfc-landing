/* JS mínimo por si en el futuro quieres añadir interacción.
   De momento solo respeta la preferencia de "reduced motion". */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.orbit').forEach(el => {
      el.style.animation = 'none';
    });
  }

  // Garantiza que el header nunca se solape con anclas internas
  // (compensa el alto del header fijo).
  const headerH = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-h').replace('px','') || 74;

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        e.preventDefault();
        const target = document.querySelector(id);
        if(target){
          const top = target.getBoundingClientRect().top + window.scrollY - (+headerH + 8);
          window.scrollTo({top, behavior:'smooth'});
        }
      }
    });
  });
})();
