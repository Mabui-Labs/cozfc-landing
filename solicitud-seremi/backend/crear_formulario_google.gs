/**
 * CREA el Google Form "Solicitud de Resolución Sanitaria – Alimentos" con ramificación por tipo de instalación,
 * lo enlaza a una hoja de respuestas y activa el aviso por correo con el prompt maestro pre-llenado.
 *
 * USO (una sola vez, cuenta cozfinancialconsulting@gmail.com):
 *   1. script.google.com → Nuevo proyecto → pegar este archivo completo → Guardar.
 *   2. Ejecutar la función  crearFormularioSEREMI  → aceptar permisos (Forms, Sheets, Drive, Gmail).
 *   3. En "Registro de ejecución" aparecen las URLs: EDITAR, RESPONDER (viewform) y HOJA.
 *   4. Pegar la URL RESPONDER en cozfc-landing/solicitud-seremi/index.html (redirección) → commit/push.
 */
const NOTIFY_TO = 'ecastillo@cozfc.cl';
const CARPETA_DRIVE = '';            // opcional: ID de carpeta de Drive donde dejar el formulario y la hoja
const CAT = {"ants":{"A11":{"origen":"cliente","nombre_cap":"Certificado de Inicio de Actividades","detalle":"SII, con giro de alimentos y dirección del local como casa matriz o sucursal."},"A6":{"origen":"elaborado","nombre_cap":"Plano o Croquis de Planta e Instalaciones Sanitarias a Escala","detalle":"Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."},"A3":{"origen":"cliente","nombre_cap":"Comprobante de Pago de Sistema de Alcantarillado Publico o Resolucion de la Obra de Alcantarillado Particular","detalle":"Misma boleta si incluye alcantarillado, o resolución de fosa/planta."},"A2":{"origen":"cliente","nombre_cap":"Comprobante de Pago de Agua Potable de Red Publica o Resolucion de la Obra de Agua Potable Particular","detalle":"Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."},"A1":{"origen":"cliente","nombre_cap":"Autorizacion Municipal de Acuerdo al Plano Regulador","detalle":"Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."},"A4":{"origen":"elaborado","nombre_cap":"Croquis o Memoria Tecnica de los Sistemas de Eliminacion de Calor, Olor o Vapor y Sistema de Frio Segun Corresponda","detalle":"Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."},"A7":{"origen":"elaborado","nombre_cap":"Sistema de Control de Calidad Sanitaria con que Contara","detalle":"Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."},"A8":{"origen":"elaborado","nombre_cap":"Sistema de Eliminacion de Desechos","detalle":"Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."},"A5":{"origen":"elaborado","nombre_cap":"Descripcion General de los Procesos de Elaboracion","detalle":"Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."},"A9":{"origen":"elaborado","nombre_cap":"Listado de Materias Primas que Empleara","detalle":"Por categoría, con condición de conservación y origen."},"A10":{"origen":"elaborado","nombre_cap":"Listado de Tipo/s de Alimento/s que Elaborara","detalle":"Alineado con los fines marcados en el portal."},"A4b":{"origen":"elaborado","nombre_cap":"Croquis o Memoria Tecnica de los Sistemas de Eliminacion de Calor, Olor o Vapor Segun Corresponda","detalle":"Variante sin sistema de frío (expendio con consumo / al paso)."},"A12":{"origen":"cliente","nombre_cap":"Acreditar por Municipalidad Correspondiente Lugar de Emplazamiento","detalle":"Permiso municipal de uso de bien nacional de uso público o autorización de emplazamiento (puestos, casetas, carros, quioscos)."}},"tipos":[{"id":"T01","nombre_cap":"Carros Moviles","alcance":"ok","descripcion":"Carro móvil para mote con huesillos o jugos de cítricos.","fines_cap":["Expender en Carro Mote con Huesillos","Elaborar y Expender Jugo de Frutos Citricos"],"atributos":["HOR","SUP"],"ant":["A11"]},{"id":"T02","nombre_cap":"Local de Almacenamiento tipo Bodega","alcance":"contra","descripcion":"Bodega de almacenamiento de alimentos.","fines_cap":[],"atributos":[],"ant":[]},{"id":"T03","nombre_cap":"Local de Distribucion de Alimentos","alcance":"ok","descripcion":"Bodega o centro de distribución de alimentos envasados, refrigerados o congelados, sin elaboración.","fines_cap":["Distribuir Alimentos Congelados","Distribuir Alimentos que no Requieren Refrigeracion","Distribuir Alimentos que Requieren Refrigeracion"],"atributos":["PF","PM","REF","HOR","COL","SUP","TREF"],"ant":["A6","A3","A2","A1","A4","A7","A8","A11"]},{"id":"T04","nombre_cap":"Local de Elaboracion de Alimentos","alcance":"ok","descripcion":"Cocina central, fábrica o cocina de delivery que elabora sin atención de público en el local.","fines_cap":["Elaborar Aditivos para la Industria de Alimentos","Elaborar Agentes Leudantes y Levaduras de Panificacion","Elaborar Aguas Tratadas","Elaborar Alimentos Derivados de Cereales y Tuberculos","Elaborar Alimentos Deshidratados","Elaborar Alimentos para Deportistas","Elaborar Alimentos para Regimenes Especiales","Elaborar Bebidas Analcoholicas","Elaborar Cecinas Y/o Hamburguesas","Elaborar Cereales para el Desayuno","Elaborar Confituras o Similares","Elaborar Conservas","Elaborar Emparedados que no Requieren Coccion","Elaborar Emparedados que Requieren Coccion","Elaborar Fideos y Pastas","Elaborar Grasas y Aceites Comestibles","Elaborar Harina","Elaborar Helados","Elaborar Hielo","Elaborar Infusiones de Te y Cafe","Elaborar Jugos o Zumos de Frutas u Hortalizas","Elaborar Leche y Productos Lacteos","Elaborar Mezclas para Helados","Elaborar Platos Preparados que no Requieren Coccion","Elaborar Platos Preparados que Requieren Coccion","Elaborar Productos de Confiteria","Elaborar Productos de Panaderia","Elaborar Productos de Pasteleria","Elaborar Productos Farinaceos para Coctel","Elaborar Salsas y Aderezos","Elaborar Suplementos Alimentarios","Elaborar Infusiones de Yerba Mate"],"atributos":["PF","PM","CAP","HOR","COL","VEN","SUP","SUPE"],"ant":["A3","A6","A5","A4","A7","A1","A2","A8","A9","A10","A11"]},{"id":"T05","nombre_cap":"Local de Elaboracion de Alimentos con Consumo","alcance":"ok","descripcion":"Restaurante, cafetería o pastelería que elabora y sirve en mesas. Requiere baños de público hombres/mujeres.","fines_cap":["Elaborar con Consumo Emparedados que no Requieren Coccion","Elaborar con Consumo Emparedados que Requieren Coccion","Elaborar con Consumo Helados Fraccionados","Elaborar con Consumo Infusiones de Te o Cafe","Elaborar con Consumo Jugos o Zumos de Frutas u Hortalizas","Elaborar con Consumo Platos Preparados que no Requieren Coccion","Elaborar con Consumo Platos Preparados que Requieren Coccion","Elaborar con Consumo Productos de Panaderia","Elaborar con Consumo Productos de Pasteleria"],"atributos":["WCF","WCM","PF","PM","CAP","HOR","COL","SUP","SUPE"],"ant":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11"]},{"id":"T06","nombre_cap":"Local de Elaboracion de Alimentos con Consumo al Paso","alcance":"ok","descripcion":"Sushi, comida rápida, delivery o take away: elabora y entrega al paso, sin mesas ni baños de público.","fines_cap":["Elaborar con Consumo al Paso Emparedados que no Requieren Coccion","Elaborar con Consumo al Paso Emparedados que Requieren Coccion","Elaborar con Consumo al Paso Helados Fraccionados","Elaborar con Consumo al Paso Infusiones de Te o Cafe","Elaborar con Consumo al Paso Jugos o Zumos de Frutas u Hortalizas","Elaborar con Consumo al Paso Platos Preparados que no Requieren Coccion","Elaborar con Consumo al Paso Platos Preparados que Requieren Coccion"],"atributos":["PF","PM","HOR","COL","SUP"],"ant":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11"]},{"id":"T07","nombre_cap":"Local de Elaboracion tipo Envasadora","alcance":"ok","descripcion":"Envasa alimentos propios o de terceros: congelados, refrigerados, secos o agua.","fines_cap":["Envasar Alimentos Congelados","Envasar Alimentos que no Requieren Refrigeracion","Envasar Alimentos que Requieren Refrigeracion","Envasar Agua"],"atributos":["PF","PM","REF","CAP","HOR","COL","VEN","SUP","TREF"],"ant":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11"]},{"id":"T08","nombre_cap":"Local de Elaboracion tipo Procesadora","alcance":"ok","descripcion":"Procesa materias primas: carnes, pescados, lácteos, frutas y hortalizas, huevos, miel, mote, etc.","fines_cap":["Procesar Azucar, Miel y Productos Apicolas","Procesar Carne y Subproductos Comestibles de Ganado Menor","Procesar Carne y Subproductos Comestibles de Aves y Otras Especies Distintas al Ganado","Procesar Carne y Subproductos Comestibles de Ganado Mayor","Procesar Encurtidos","Procesar Estimulantes y Fruitivos","Procesar Frutas, Hortalizas y Champiñones","Procesar Frutos Secos","Procesar Mote","Procesar Pescados, Mariscos y Productos del Mar","Procesar Productos Lacteos","Procesar Sal, Especias y Condimentos","Procesar Huevos"],"atributos":["PF","PM","CAP","HOR","COL","VEN","SUP"],"ant":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11"]},{"id":"T09","nombre_cap":"Local de Expendio de Alimentos","alcance":"ok","descripcion":"Minimarket, almacén, carnicería o pescadería: vende alimentos sin elaborarlos.","fines_cap":["Expender Alimentos Congelados","Expender Alimentos que no Requieren Refrigeracion","Expender Alimentos que Requieran Refrigeracion (Excluidos: Aves Faenadas y Subproductos Carneos de Ave, Carne y Subproductos Carneos, Cecinas, Emparedados Envasados, Leche y Productos Lacteos, Pescados, Mariscos y Productos del Mar, Platos Preparados Envasados, Frutas y Verduras Frescas Lavadas, Trozadas o Peladas y Envasadas Provenientes de Establecimientos Autorizados, Productos de Pasteleria y Helados)","Expender Aves Faenadas y Subproductos Carneos de Ave","Expender Carne y Subproductos Carneos","Expender Cecinas","Expender Emparedados Envasados","Expender Leche y Productos Lacteos","Expender Pescados, Mariscos y Productos del Mar","Expender Platos Preparados Envasados","Expender Productos de Pasteleria","Expender Frutas Frescas Lavadas, Trozadas o Peladas y Envasadas Provenientes de Establecimientos Autorizados","Expender Verduras Frescas Lavadas, Trozadas o Peladas y Envasadas Provenientes de Establecimientos Autorizados","Expender Helados Envasados","Expender Helados Fraccionados"],"atributos":["PF","PM","HOR","COL","SUP"],"ant":["A1","A2","A3","A4","A6","A8","A11"]},{"id":"T10","nombre_cap":"Local de Expendio de Alimentos con Consumo","alcance":"ok","descripcion":"Cafetería o fuente de soda que sirve productos ya elaborados (calienta, porciona) con mesas. Requiere baños de público.","fines_cap":["Expender con Consumo Bebidas Analcoholicas","Expender con Consumo Emparedados que no Requieren Coccion","Expender con Consumo Emparedados que Requieren Coccion","Expender con Consumo Helados Fraccionados","Expender con Consumo Mote con Huesillos","Expender con Consumo Platos Preparados que no Requieren Coccion","Expender con Consumo Platos Preparados que Requieren Coccion","Expender con Consumo Productos de Panaderia","Expender con Consumo Productos de Pasteleria"],"atributos":["WCF","WCM","PF","PM","HOR","COL","SUP"],"ant":["A1","A2","A3","A6","A4b","A8","A11"]},{"id":"T11","nombre_cap":"Local de Expendio de Alimentos con Consumo al Paso","alcance":"ok","descripcion":"Café al paso o kiosco que vende productos elaborados por terceros para llevar.","fines_cap":["Expender con Consumo al Paso Bebidas Analcoholicas","Expender con Consumo al Paso Emparedados que no Requieren Coccion","Expender con Consumo al Paso Emparedados que Requieren Coccion","Expender con Consumo al Paso Helados Fraccionados","Expender con Consumo al Paso Infusiones de Te y Cafe","Expender con Consumo al Paso Mote con Huesillos","Expender con Consumo al Paso Platos Preparados que no Requieren Coccion","Expender con Consumo al Paso Platos Preparados que Requieren Coccion","Expender con Consumo al Paso Productos de Pasteleria"],"atributos":["PF","PM","HOR","COL","SUP"],"ant":["A1","A2","A3","A6","A4b","A8","A11"]},{"id":"T12","nombre_cap":"Local de Expendio de Alimentos y Elaboracion","alcance":"ok","descripcion":"Supermercado, rotisería o panadería con venta: elabora, envasa y vende en el mismo local.","fines_cap":["Elaborar Cecinas Y/o Hamburguesas","Elaborar Emparedados que no Requieren Coccion","Elaborar Emparedados que Requieren Coccion","Elaborar Helados","Elaborar Platos Preparados que no Requieren Coccion","Elaborar Platos Preparados que Requieren Coccion","Elaborar Productos de Panaderia","Elaborar Productos de Pasteleria","Envasar Alimentos Congelados","Envasar Alimentos que no Requieren Refrigeracion","Envasar Alimentos que Requieren Refrigeracion","Expender Alimentos Congelados","Expender Alimentos que no Requieren Refrigeracion","Expender Aves Faenadas y Subproductos Carneos de Ave","Expender Carne y Subproductos Carneos","Expender Cecinas","Expender Emparedados Envasados","Expender Leche y Productos Lacteos","Expender Pescados, Mariscos y Productos del Mar","Expender Platos Preparados Envasados","Expender Productos de Pasteleria","Procesar Carne y Subproductos Comestibles de Ganado Menor","Procesar Carne y Subproductos Comestibles de Aves y Otras Especies Distintas al Ganado","Procesar Carne y Subproductos Comestibles de Ganado Mayor","Procesar Frutas, Hortalizas y Champiñones","Procesar Productos Lacteos","Expender Helados Envasados","Expender Helados Fraccionados"],"atributos":["PF","PM","CON","CAP","HOR","COL","VEN","SUP","SUPE","TREF"],"ant":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11"]},{"id":"T13","nombre_cap":"Mataderos","alcance":"contra","descripcion":"Faenamiento de animales.","fines_cap":[],"atributos":[],"ant":[]},{"id":"T14","nombre_cap":"Puestos, Casetas, Carros y Quioscos","alcance":"ok","descripcion":"Puesto, caseta, carro o quiosco fijo en espacio público o feria.","fines_cap":["Expender en Puesto Quesos y Cecinas Provenientes de Fabricas Autorizadas, Fraccionados y Envasados en las Mismas Fabricas","Expender Frutas Frescas Lavadas, Trozadas o Peladas y Envasadas Provenientes de Establecimientos Autorizados","Expender Verduras Frescas Lavadas, Trozadas o Peladas y Envasadas Provenientes de Establecimientos Autorizados","Elaborar y Expender Fruta Fresca Confitada","Cocinar y Expender en Puesto Empanadas de Queso","Cocinar y Expender en Puesto Masas Crudas sin Relleno","Cocinar y Expender en Puesto Vegetales Procesados","Elaborar y Expender en Puesto Emparedados Calientes a Base de Cecinas Cocidas","Elaborar y Expender en Puesto Emparedados Frios a Base de Cecinas Cocidas","Expender en Puesto Pescados, Mariscos y Productos del Mar","Expender en Puesto Carne y Subproductos Carneos","Elaborar y Expender Frutos Secos Confitados","Elaborar y Expender Palomitas de Maiz y Algodon de Azucar","Elaborar y Expender en Puesto Infusiones de Te o Cafe","Expender en Puesto Alimentos que no Requieren Refrigeracion","Expender en Puesto Frutas y Hortalizas Frescas","Expender en Puesto Helados Envasados","Expender en Puesto Te y Cafe en Termos Sellados","Elaborar y Expender Hielo Granizado Saborizado con Jarabes Naturales o Artificiales"],"atributos":["HOR","SUP"],"ant":["A12","A11"]},{"id":"T15","nombre_cap":"Vehiculo de Transporte de Alimentos","alcance":"contra","descripcion":"Vehículo para transporte de alimentos.","fines_cap":[],"atributos":[],"ant":[]}]};
const CATALOGO = { tipos: CAT.tipos.map(t => Object.assign({}, t, { fines: t.fines_cap, antecedentes: t.ant.map(c => Object.assign({ cod: c }, CAT.ants[c])) })) };

function crearFormularioSEREMI() {
  const form = FormApp.create('Solicitud de Resolución Sanitaria – Alimentos');
  form.setDescription(
    'Autorización de funcionamiento de instalación de alimentos (SEREMI de Salud).\n' +
    'Elige tu tipo de instalación y el formulario te mostrará los requisitos exactos que exige el portal SEREMI en Línea. ' +
    'Si no lo tienes claro, deja tus datos y te orientamos.\n\n' +
    'Enrique Castillo & Asociados · Estudio de Consultoría Empresarial · www.cozfc.cl');
  form.setProgressBar(true).setShowLinkToRespondAgain(false).setAllowResponseEdits(false)
      .setConfirmationMessage('Recibimos tu solicitud. En 48 horas hábiles te enviamos el diagnóstico, la lista de pendientes y la cotización.\n' +
        'Región de Los Lagos: ingreso presencial en SEREMI Puerto Montt o en línea. Otras regiones: 100 % en línea con ClaveÚnica.');

  // ---------- Página 0: contacto, situación y tipo ----------
  form.addSectionHeaderItem().setTitle('1 · Contacto y empresa');
  txt(form, 'Nombre de contacto', true);
  txt(form, 'Correo electrónico', true).setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  txt(form, 'Teléfono / WhatsApp', true);
  lista(form, 'Región del local', ['Región de Los Lagos', 'Región de Arica y Parinacota', 'Región de Tarapacá', 'Región de Antofagasta', 'Región de Atacama', 'Región de Coquimbo', 'Región de Valparaíso', 'Región Metropolitana', "Región de O'Higgins", 'Región del Maule', 'Región de Ñuble', 'Región del Biobío', 'Región de La Araucanía', 'Región de Los Ríos', 'Región de Aysén', 'Región de Magallanes'], true);
  txt(form, 'Comuna', true);
  txt(form, 'Dirección del local', false);
  txt(form, 'Razón social', false);
  txt(form, 'RUT empresa', false);
  txt(form, 'Nombre de fantasía', false);
  txt(form, 'Representante legal (nombre y RUT)', false);
  lista(form, '¿El representante legal cuenta con ClaveÚnica?', ['Sí', 'No', 'No sé'], false);

  form.addSectionHeaderItem().setTitle('2 · Situación del local');
  opcion(form, 'Situación', ['Local nuevo (aún no abre)', 'Funcionando sin resolución (regularización)', 'Tengo resolución y quiero modificarla / ampliarla', 'Cambio de razón social / traslado'], true);
  txt(form, 'Plazo objetivo (apertura, fiscalización, patente)', false);

  form.addSectionHeaderItem().setTitle('3 · Tipo de instalación (según portal SEREMI en Línea)')
      .setHelpText('Elige el tipo que mejor describe tu negocio. En la siguiente página verás los fines y requisitos de ese tipo.');
  const tipoItem = form.addListItem().setTitle('Tipo de instalación').setRequired(true);

  // ---------- Páginas por tipo ----------
  const ok = CATALOGO.tipos.filter(t => t.alcance === 'ok');
  const contra = CATALOGO.tipos.filter(t => t.alcance !== 'ok');
  const paginasTipo = {};
  const esp = { CAP: 'Capacidad máxima de producción (kg/día)', REF: 'Capacidad de refrigeración (litros)', CON: 'Capacidad de congelación (litros)',
                VEN: 'Nivel de ventas estimado (UF/año)', SUPE: 'Superficie de zonas de elaboración (m²)', TREF: 'Tipo de refrigerante de los equipos (R-134a, R-404A, amoníaco…)' };
  ok.forEach(t => {
    const pb = form.addPageBreakItem().setTitle(t.nombre_cap).setHelpText(t.descripcion || '');
    paginasTipo[t.id] = pb;
    if (t.fines.length) {
      form.addCheckboxItem().setTitle('Fines que marcarás en el portal (elige todos los que apliquen)')
          .setChoiceValues(t.fines_cap).setRequired(false);
    }
    t.atributos.filter(k => esp[k]).forEach(k => txt(form, esp[k], false));
    const cli = t.antecedentes.filter(a => a.origen === 'cliente');
    const elab = t.antecedentes.filter(a => a.origen !== 'cliente');
    if (cli.length) {
      form.addGridItem().setTitle('Antecedentes que exige SEREMI para este tipo: ¿cuáles ya tienes?')
          .setHelpText('Orden del portal: ' + t.antecedentes.map((a, i) => (i + 1) + ') ' + a.nombre_cap).join(' · '))
          .setRows(cli.map(a => a.nombre_cap)).setColumns(['Lo tengo', 'En trámite', 'No lo tengo', 'No sé']).setRequired(false);
    }
    if (elab.length) {
      form.addSectionHeaderItem().setTitle('Documentos que elabora el Estudio (incluidos en el servicio)')
          .setHelpText(elab.map(a => '• ' + a.nombre_cap + ' — ' + a.detalle).join('\n'));
    }
  });

  // ---------- Página orientación / reunión ----------
  const pbOrient = form.addPageBreakItem().setTitle('Cuéntanos tu caso')
      .setHelpText('Describe qué vendes o elaboras, cómo (al paso, mesas, delivery, envasado) y dónde. Te decimos qué tipo de instalación corresponde y qué necesitas.');
  form.addParagraphTextItem().setTitle('Descripción del negocio y del local').setRequired(true);
  txt(form, 'Enlace a fotos, croquis o documentos (Drive, WeTransfer) – opcional', false);

  // ---------- Página Local e infraestructura (común) ----------
  const pbLocal = form.addPageBreakItem().setTitle('4 · Local e infraestructura');
  lista(form, 'Tenencia del local', ['Arrendado', 'Propio', 'Comodato / cedido'], false);
  lista(form, '¿Comparte inmueble con una vivienda?', ['No', 'Sí, con vivienda del propietario', 'Sí, con otra vivienda'], false);
  txt(form, 'Superficie habilitada para el negocio (m²)', false);
  lista(form, 'Número de pisos del local', ['1', '2', '3 o más'], false);
  lista(form, 'Agua potable', ['Red pública (boleta a nombre del inmueble)', 'Particular (pozo / APR)', 'No sé'], false);
  lista(form, 'Alcantarillado', ['Red pública', 'Particular (fosa / planta)', 'No sé'], false);
  lista(form, 'Permiso / patente municipal', ['Tengo patente o informe DOM', 'En trámite', 'No lo he iniciado', 'No sé'], false);
  lista(form, 'Horario de funcionamiento', ['Diurno', 'Nocturno', 'Diurno y nocturno'], false);
  form.addGridItem().setTitle('Colindantes (qué hay al lado del local)').setRows(['Norte', 'Oriente', 'Poniente', 'Sur'])
      .setColumns(['Vivienda', 'Local comercial', 'Calle', 'Sitio eriazo', 'Otro']).setRequired(false);
  form.addParagraphTextItem().setTitle('Recintos del local y medidas aproximadas')
      .setHelpText('Ej.: Cocina caliente 3x4,4 m; cuarto frío 4,6x4,5 m; recepción/caja 2,7x4,7 m; baño personal; bodega de secos en 2° piso…');
  txt(form, 'Refrigeradores (n°)', false); txt(form, 'Congeladores (n°)', false); txt(form, 'Campanas extractoras (n°)', false);
  txt(form, 'Equipos de calor (cocina, freidora, horno…)', false);
  lista(form, 'Baño del personal', ['Sí (mixto)', 'Sí (hombres / mujeres)', 'No'], false);
  txt(form, 'WC de público mujeres (n°) – solo locales con consumo en mesas', false);
  txt(form, 'WC de público hombres (n°) – solo locales con consumo en mesas', false);
  lista(form, 'Lavamanos en zona de elaboración', ['Sí', 'No', 'No sé'], false);

  // ---------- Página Operación ----------
  form.addPageBreakItem().setTitle('5 · Operación');
  txt(form, 'Personal mujeres (n°)', false); txt(form, 'Personal hombres (n°)', false);
  lista(form, 'Control de plagas', ['Tengo empresa y certificado vigente', 'Tengo empresa sin certificado', 'No tengo'], false);
  lista(form, 'Aceite de fritura usado', ['No uso freidora', 'Lo retira empresa autorizada', 'Sin retiro definido'], false);
  form.addParagraphTextItem().setTitle('Productos que elaboras o vendes y modalidad (al paso, mesas, delivery, retiro)');
  txt(form, 'Residuos: ¿dónde está el contenedor de basura externo?', false);

  // ---------- Página Cierre ----------
  const pbCierre = form.addPageBreakItem().setTitle('6 · Comentarios y envío');
  form.addParagraphTextItem().setTitle('Comentarios');
  txt(form, 'Enlace a fotos, croquis o documentos (Drive, WeTransfer)', false);
  form.addCheckboxItem().setTitle('Autorización de contacto').setRequired(true)
      .setChoiceValues(['Autorizo el uso de estos datos para ser contactado por Enrique Castillo & Asociados respecto de esta solicitud (Ley 19.628).']);

  // ---------- Navegación ----------
  const choices = [];
  ok.forEach(t => choices.push(tipoItem.createChoice(t.nombre_cap, paginasTipo[t.id])));
  contra.forEach(t => choices.push(tipoItem.createChoice(t.nombre_cap + ' (se evalúa en reunión)', pbOrient)));
  choices.push(tipoItem.createChoice('No sé cuál corresponde / solo quiero que me contacten', pbOrient));
  tipoItem.setChoices(choices);
  Object.keys(paginasTipo).forEach(k => paginasTipo[k].setGoToPage(pbLocal));
  pbOrient.setGoToPage(pbCierre);

  // ---------- Hoja de respuestas + aviso ----------
  const ss = SpreadsheetApp.create('Respuestas – Solicitud Resolución Sanitaria');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  ScriptApp.newTrigger('alEnviarSEREMI').forForm(form).onFormSubmit().create();
  PropertiesService.getScriptProperties().setProperty('FORM_ID', form.getId());
  if (CARPETA_DRIVE) {
    const f = DriveApp.getFolderById(CARPETA_DRIVE);
    DriveApp.getFileById(form.getId()).moveTo(f); DriveApp.getFileById(ss.getId()).moveTo(f);
  }
  Logger.log('EDITAR:    ' + form.getEditUrl());
  Logger.log('RESPONDER: ' + form.getPublishedUrl());
  Logger.log('HOJA:      ' + ss.getUrl());
}

/** Disparador onFormSubmit: correo a NOTIFY_TO con todas las respuestas + prompt maestro, y acuse al cliente. */
function alEnviarSEREMI(e) {
  const d = {};
  e.response.getItemResponses().forEach(ir => {
    const v = ir.getResponse();
    d[ir.getItem().getTitle()] = Array.isArray(v) ? v.join(' | ') : (v && typeof v === 'object' ? JSON.stringify(v) : String(v || ''));
  });
  const g = k => d[k] || '';
  const titulo = 'Solicitud SEREMI – ' + (g('Nombre de fantasía') || g('Razón social') || g('Nombre de contacto')) + ' (' + g('Tipo de instalación') + ')';
  const lineas = Object.keys(d).filter(k => d[k]).map(k => k + ': ' + d[k]).join('\n');
  const prompt = [
    'Elabora el expediente completo de Autorización Sanitaria de Alimentos (SEREMI en Línea) usando el MODELO MISO SUSHI como base y el Catálogo SEREMI del Estudio.',
    'CLIENTE: ' + g('Razón social') + ' · RUT ' + g('RUT empresa') + ' · Fantasía: ' + g('Nombre de fantasía') + ' · Rep. legal: ' + g('Representante legal (nombre y RUT)'),
    'Dirección: ' + g('Dirección del local') + ', ' + g('Comuna') + ' (' + g('Región del local') + ') · Superficie: ' + g('Superficie habilitada para el negocio (m²)') + ' m² · Pisos: ' + g('Número de pisos del local') + ' · Horario: ' + g('Horario de funcionamiento'),
    'Colindantes: ' + g('Colindantes (qué hay al lado del local)') + ' · Situación: ' + g('Situación'),
    'TIPO: ' + g('Tipo de instalación') + ' · FINES: ' + g('Fines que marcarás en el portal (elige todos los que apliquen)'),
    'RECINTOS: ' + g('Recintos del local y medidas aproximadas'),
    'EQUIPOS: refrigeradores ' + g('Refrigeradores (n°)') + ', congeladores ' + g('Congeladores (n°)') + ', campanas ' + g('Campanas extractoras (n°)') + ', calor: ' + g('Equipos de calor (cocina, freidora, horno…)'),
    'SANITARIO: baño personal ' + g('Baño del personal') + ' · WC público M/H ' + g('WC de público mujeres (n°) – solo locales con consumo en mesas') + '/' + g('WC de público hombres (n°) – solo locales con consumo en mesas') + ' · lavamanos ' + g('Lavamanos en zona de elaboración') + ' · agua ' + g('Agua potable') + ' · alcantarillado ' + g('Alcantarillado'),
    'OPERACIÓN: personal F ' + g('Personal mujeres (n°)') + ' / M ' + g('Personal hombres (n°)') + ' · plagas ' + g('Control de plagas') + ' · aceite ' + g('Aceite de fritura usado') + ' · residuos ' + g('Residuos: ¿dónde está el contenedor de basura externo?'),
    'PRODUCTOS: ' + g('Productos que elaboras o vendes y modalidad (al paso, mesas, delivery, retiro)'),
    'DOCUMENTOS CLIENTE: ' + g('Antecedentes que exige SEREMI para este tipo: ¿cuáles ya tienes?') + ' · Municipal: ' + g('Permiso / patente municipal'),
    'COMENTARIOS: ' + (g('Comentarios') || g('Descripción del negocio y del local')),
    'INSTRUCCIONES: aplicar Kit v1.0 (estructura de carpeta, orden del portal para este tipo, reglas fijas 1–10, Editables y Compartir). Listar supuestos y dudas al final.'
  ].join('\n');
  MailApp.sendEmail({ to: NOTIFY_TO, subject: titulo, name: 'Enrique Castillo & Asociados', replyTo: g('Correo electrónico') || NOTIFY_TO,
    body: 'Nueva solicitud desde el formulario SEREMI\n\n' + lineas + '\n\n--- PROMPT MAESTRO (borrador) ---\n' + prompt });
  const correo = g('Correo electrónico');
  if (correo) MailApp.sendEmail({ to: correo, name: 'Enrique Castillo & Asociados', replyTo: NOTIFY_TO, subject: 'Recibimos tu solicitud de Resolución Sanitaria',
    body: 'Hola ' + g('Nombre de contacto') + ',\n\nRecibimos tu solicitud (' + g('Tipo de instalación') + '). En 48 horas hábiles te enviaremos el diagnóstico, la lista de pendientes y la cotización.\n\nRegión de Los Lagos: ingreso presencial en SEREMI Puerto Montt o en línea. Otras regiones: 100 % en línea con ClaveÚnica.\n\nEnrique Castillo & Asociados · Estudio de Consultoría Empresarial · www.cozfc.cl' });
}

// helpers
function txt(form, titulo, req) { return form.addTextItem().setTitle(titulo).setRequired(!!req); }
function lista(form, titulo, valores, req) { return form.addListItem().setTitle(titulo).setChoiceValues(valores).setRequired(!!req); }
function opcion(form, titulo, valores, req) { return form.addMultipleChoiceItem().setTitle(titulo).setChoiceValues(valores).setRequired(!!req); }
