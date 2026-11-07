/* Lógica del formulario: tipo de instalación → fines, atributos y antecedentes del portal SEREMI. */
(function () {
  const CAT = window.CATALOGO_SEREMI || { tipos: [], atributos: {} };
  const CFG = window.SOLICITUD_CONFIG || {};
  const $ = (s, r) => (r || document).querySelector(s);
  const form = $('#solicitud');
  const tipoSel = $('#tipo'), nota = $('#tipo-nota');
  const bTipo = $('#bloque-tipo'), bContra = $('#bloque-contra'), bNose = $('#bloque-nose');
  const fsLocal = $('#fs-local'), fsOper = $('#fs-operacion');
  const finesEl = $('#fines'), atrEl = $('#atributos'), antEl = $('#antecedentes');
  const estado = $('#estado');
  const MINUS = new Set(['de', 'del', 'la', 'las', 'los', 'el', 'y', 'o', 'u', 'a', 'al', 'con', 'sin', 'en', 'que', 'para', 'por', 'tipo', 'no', 'e']);

  // Campos de atributos que ya están en las secciones 4/5 (no se duplican)
  const ATR_EN_SECCIONES = new Set(['PF', 'PM', 'HOR', 'COL', 'SUP', 'WCF', 'WCM']);
  const ATR_INPUT = {
    CAP: ['Capacidad máxima de producción (kg/día)', 'cap_produccion', 'Ej.: 40'],
    REF: ['Capacidad de refrigeración (litros)', 'cap_refrigeracion', 'Ej.: 900'],
    CON: ['Capacidad de congelación (litros)', 'cap_congelacion', 'Ej.: 600'],
    VEN: ['Nivel de ventas estimado (UF/año)', 'nivel_ventas', 'Ej.: 2.400'],
    SUPE: ['Superficie de zonas de elaboración (m²)', 'm2_elaboracion', 'Ej.: 34'],
    TREF: ['Tipo de refrigerante de los equipos', 'refrigerante', 'Ej.: R-134a, R-404A, amoníaco…']
  };

  // Poblar selector de tipos: desarrollados primero, luego los de reunión, luego "no sé"
  const ok = CAT.tipos.filter(t => t.alcance === 'ok'), contra = CAT.tipos.filter(t => t.alcance !== 'ok');
  const addOpt = (v, txt, grp) => { const o = document.createElement('option'); o.value = v; o.textContent = txt; grp.appendChild(o); };
  const g1 = document.createElement('optgroup'); g1.label = 'Tipos de instalación';
  ok.forEach(t => addOpt(t.id, cap(t.nombre), g1));
  const g2 = document.createElement('optgroup'); g2.label = 'Se evalúan en reunión';
  contra.forEach(t => addOpt(t.id, cap(t.nombre), g2));
  const g3 = document.createElement('optgroup'); g3.label = 'Orientación';
  addOpt('NOSE', 'No sé cuál corresponde / solo quiero que me contacten', g3);
  tipoSel.append(g1, g2, g3);

  function cap(s) {
    return s.toLowerCase().split(' ').map((w, i) => {
      if (!w) return w;
      if (i > 0 && MINUS.has(w.replace(/[(),]/g, ''))) return w;
      return w.replace(/^(\(?)(\p{L})/u, (m, p, c) => p + c.toUpperCase());
    }).join(' ').replace(/\(excluidos:.*\)/i, m => m.toUpperCase().replace('EXCLUIDOS', 'excluidos'));
  }

  tipoSel.addEventListener('change', () => {
    const v = tipoSel.value; const t = CAT.tipos.find(x => x.id === v);
    [bTipo, bContra, bNose, fsLocal, fsOper].forEach(e => e.classList.add('hidden'));
    nota.textContent = ''; finesEl.innerHTML = ''; atrEl.innerHTML = ''; antEl.innerHTML = '';
    $('#comentarios').required = false;
    if (!v) return;
    if (v === 'NOSE') { bNose.classList.remove('hidden'); $('#comentarios').required = true; $('#legend-cierre').textContent = '4 · Cuéntanos tu caso y envío'; return; }
    $('#legend-cierre').textContent = '6 · Comentarios y envío';
    if (t.alcance !== 'ok') { bContra.classList.remove('hidden'); $('#comentarios').required = true; return; }
    nota.textContent = t.descripcion || '';
    // fines
    t.fines.forEach((f, i) => {
      const l = document.createElement('label');
      l.innerHTML = `<input type="checkbox" name="fines" value="${esc(f)}"> <span>${esc(cap(f))}</span>`;
      finesEl.appendChild(l);
    });
    // atributos específicos
    const extra = t.atributos.filter(k => !ATR_EN_SECCIONES.has(k) && ATR_INPUT[k]);
    extra.forEach(k => {
      const [lab, name, ph] = ATR_INPUT[k];
      const l = document.createElement('label'); l.innerHTML = `${lab}<input name="${name}" placeholder="${ph}">`; atrEl.appendChild(l);
    });
    const resumen = document.createElement('p'); resumen.className = 'hint';
    resumen.textContent = 'El portal también pide: ' + t.atributos.filter(k => ATR_EN_SECCIONES.has(k)).map(k => (CAT.atributos[k] || k).split(' (')[0].toLowerCase()).join(', ') + ' (se completan en las secciones 4 y 5).';
    atrEl.appendChild(resumen);
    // antecedentes
    t.antecedentes.forEach((a, i) => {
      const row = document.createElement('div'); row.className = 'ant';
      const ctrl = a.origen === 'cliente'
        ? `<select name="ant_${a.cod}"><option value="">¿Lo tienes?</option><option>Lo tengo</option><option>En trámite</option><option>No lo tengo</option><option>No sé</option></select>`
        : `<span class="tag">Lo elabora el Estudio</span>`;
      row.innerHTML = `<span class="n">${i + 1}</span><div><span class="t">${esc(cap(a.nombre))}</span><span class="d">${esc(a.detalle)}</span></div>${ctrl}`;
      antEl.appendChild(row);
    });
    bTipo.classList.remove('hidden'); fsLocal.classList.remove('hidden'); fsOper.classList.remove('hidden');
    // WC público solo si el tipo lo exige
    const wc = t.atributos.includes('WCF');
    ['wc_publico_m', 'wc_publico_h'].forEach(n => { const el = form.elements[n]; el.closest('label').classList.toggle('hidden', !wc); });
  });

  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  function recolectar() {
    const fd = new FormData(form); const data = {};
    for (const [k, v] of fd.entries()) {
      if (k === '_hp') continue;
      if (k === 'fines') { (data.fines = data.fines || []).push(v); continue; }
      if (v !== '' && v != null) data[k] = v;
    }
    const t = CAT.tipos.find(x => x.id === data.tipo);
    data.tipo_nombre = data.tipo === 'NOSE' ? 'No sabe / solo contacto' : (t ? t.nombre : '');
    data.origen = 'cozfc.cl/solicitud-seremi'; data.enviado = new Date().toISOString();
    data.user_agent = navigator.userAgent;
    return data;
  }

  function validar() {
    let okv = true; estado.textContent = ''; estado.classList.remove('error');
    form.querySelectorAll('.err').forEach(e => e.classList.remove('err'));
    form.querySelectorAll('[required]').forEach(el => {
      const visible = !el.closest('.hidden');
      if (!visible) return;
      const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
      if (bad) { el.classList.add('err'); okv = false; }
    });
    const em = form.elements['correo']; if (em.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value)) { em.classList.add('err'); okv = false; }
    if (!okv) { estado.textContent = 'Revisa los campos marcados.'; estado.classList.add('error'); form.querySelector('.err')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    return okv;
  }

  function resumenTexto(d) {
    const skip = new Set(['user_agent']);
    return Object.entries(d).filter(([k]) => !skip.has(k)).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(' | ') : v}`).join('\n');
  }

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (form.elements['_hp'].value) return; // bot
    if (!validar()) return;
    const data = recolectar(); const btn = $('#enviar'); btn.disabled = true; estado.textContent = 'Enviando…';
    try {
      if (CFG.endpoint) {
        if (CFG.modo === 'webhook') {
          const r = await fetch(CFG.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
          if (!r.ok) throw new Error('HTTP ' + r.status);
        } else {
          await fetch(CFG.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) });
        }
      } else {
        const subject = encodeURIComponent(`Solicitud Resolución Sanitaria – ${data.fantasia || data.razon_social || data.contacto}`);
        location.href = `mailto:${CFG.correo || 'ecastillo@cozfc.cl'}?subject=${subject}&body=${encodeURIComponent(resumenTexto(data))}`;
      }
      form.classList.add('hidden'); $('#gracias').classList.remove('hidden'); window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      estado.textContent = 'No pudimos enviar el formulario. Escríbenos a ' + (CFG.correo || 'ecastillo@cozfc.cl') + ' adjuntando una captura.'; estado.classList.add('error'); btn.disabled = false;
    }
  });
})();
