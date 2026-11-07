/**
 * Receptor de la Solicitud de Resolución Sanitaria (cozfc.cl/solicitud-seremi)
 * Google Apps Script – implementar como Aplicación web:
 *   Ejecutar como: Yo · Acceso: Cualquier usuario · copiar la URL /exec en solicitud-seremi/config.js (endpoint)
 * Guarda cada envío en la hoja "Solicitudes" del Spreadsheet indicado y envía correo de aviso + acuse al cliente.
 */
const SHEET_ID = 'PEGAR_ID_DEL_SPREADSHEET';   // ID de la planilla de respuestas (crear una vacía y copiar el ID de la URL)
const SHEET_NAME = 'Solicitudes';
const NOTIFY_TO = 'ecastillo@cozfc.cl';
const FROM_NAME = 'Enrique Castillo & Asociados';

const COLUMNAS = ['enviado', 'contacto', 'correo', 'telefono', 'region', 'comuna', 'direccion', 'razon_social', 'rut', 'fantasia', 'rep_legal', 'clave_unica',
  'situacion', 'plazo', 'tipo', 'tipo_nombre', 'fines', 'cap_produccion', 'cap_refrigeracion', 'cap_congelacion', 'nivel_ventas', 'm2_elaboracion', 'refrigerante',
  'ant_A1', 'ant_A2', 'ant_A3', 'ant_A11', 'ant_A12', 'tenencia', 'comparte_vivienda', 'm2', 'pisos', 'agua', 'alcantarillado', 'municipal', 'horario',
  'col_norte', 'col_oriente', 'col_poniente', 'col_sur', 'recintos', 'refrigeradores', 'congeladores', 'campanas', 'equipos_calor', 'bano_personal', 'wc_publico_m', 'wc_publico_h', 'lavamanos',
  'personal_f', 'personal_m', 'plagas', 'aceite', 'productos', 'residuos', 'comentarios', 'enlace_archivos', 'acepta', 'origen', 'user_agent'];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    if (data._hp) return out({ ok: true });                       // honeypot
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) { sh = ss.insertSheet(SHEET_NAME); sh.appendRow(COLUMNAS); sh.setFrozenRows(1); }
    const row = COLUMNAS.map(k => Array.isArray(data[k]) ? data[k].join(' | ') : (data[k] == null ? '' : String(data[k])));
    sh.appendRow(row);
    const n = sh.getLastRow() - 1;
    notificar(data, n, ss.getUrl());
    return out({ ok: true, n });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function notificar(d, n, sheetUrl) {
  const titulo = `Solicitud SEREMI #${n} – ${d.fantasia || d.razon_social || d.contacto} (${d.tipo_nombre || 'sin tipo'})`;
  const lineas = COLUMNAS.filter(k => d[k] && k !== 'user_agent').map(k => `${k}: ${Array.isArray(d[k]) ? d[k].join(' | ') : d[k]}`);
  const cuerpo = `Nueva solicitud desde cozfc.cl/solicitud-seremi\n\n${lineas.join('\n')}\n\nPlanilla: ${sheetUrl}\n\n--- PROMPT MAESTRO (borrador) ---\n${prompt(d)}`;
  MailApp.sendEmail({ to: NOTIFY_TO, subject: titulo, body: cuerpo, name: FROM_NAME, replyTo: d.correo || NOTIFY_TO });
  if (d.correo) {
    MailApp.sendEmail({
      to: d.correo, name: FROM_NAME, replyTo: NOTIFY_TO,
      subject: 'Recibimos tu solicitud de Resolución Sanitaria',
      body: `Hola ${d.contacto || ''},\n\nRecibimos tu solicitud (${d.tipo_nombre || 'orientación'}). En un plazo de 48 horas hábiles te enviaremos el diagnóstico, la lista de pendientes y la cotización.\n\nRegión de Los Lagos: ingreso presencial en SEREMI Puerto Montt o en línea. Otras regiones: 100 % en línea con ClaveÚnica.\n\nEnrique Castillo & Asociados · Estudio de Consultoría Empresarial · www.cozfc.cl`
    });
  }
}

/** Borrador del prompt maestro del Kit, pre-llenado con los datos del formulario. */
function prompt(d) {
  const v = k => d[k] || '{{' + k + '}}';
  return [
    'Elabora el expediente completo de Autorización Sanitaria de Alimentos (SEREMI en Línea) usando el MODELO MISO SUSHI como base y el Catálogo SEREMI del Estudio.',
    `CLIENTE: ${v('razon_social')} · RUT ${v('rut')} · Fantasía: ${v('fantasia')} · Rep. legal: ${v('rep_legal')}`,
    `Dirección: ${v('direccion')}, ${v('comuna')} (${v('region')}) · Superficie: ${v('m2')} m² · Pisos: ${v('pisos')} · Horario: ${v('horario')}`,
    `Colindantes: N ${v('col_norte')} · O ${v('col_oriente')} · P ${v('col_poniente')} · S ${v('col_sur')} · Situación: ${v('situacion')}`,
    `TIPO: ${v('tipo_nombre')} · FINES: ${Array.isArray(d.fines) ? d.fines.join('; ') : v('fines')}`,
    `ATRIBUTOS: personal F ${v('personal_f')} / M ${v('personal_m')}; prod ${v('cap_produccion')} kg/día; ventas ${v('nivel_ventas')} UF; WC público M ${v('wc_publico_m')} / H ${v('wc_publico_h')}`,
    `RECINTOS: ${v('recintos')}`,
    `EQUIPOS: refrigeradores ${v('refrigeradores')}, congeladores ${v('congeladores')}, campanas ${v('campanas')}, calor: ${v('equipos_calor')}`,
    `SANITARIO: baño personal ${v('bano_personal')} · lavamanos ${v('lavamanos')} · agua ${v('agua')} · alcantarillado ${v('alcantarillado')}`,
    `RESIDUOS: ${v('residuos')} · Aceite: ${v('aceite')} · Plagas: ${v('plagas')}`,
    `PRODUCTOS: ${v('productos')}`,
    `DOCUMENTOS CLIENTE: A1 ${v('ant_A1')} · A2 ${v('ant_A2')} · A3 ${v('ant_A3')} · A11 ${v('ant_A11')} · Municipal: ${v('municipal')} · Archivos: ${v('enlace_archivos')}`,
    `COMENTARIOS: ${v('comentarios')}`,
    'INSTRUCCIONES: aplicar Kit v1.0 (estructura de carpeta, orden del portal para este tipo, reglas fijas 1–10, Editables y Compartir). Listar supuestos y dudas al final.'
  ].join('\n');
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Prueba manual desde el editor: Ejecutar > testPost */
function testPost() {
  const e = { postData: { contents: JSON.stringify({ contacto: 'Prueba', correo: NOTIFY_TO, telefono: '+56 9', region: 'Región de Los Lagos', comuna: 'Puerto Montt', tipo: 'T06', tipo_nombre: 'LOCAL DE ELABORACION DE ALIMENTOS CON CONSUMO AL PASO', fines: ['Prueba'], enviado: new Date().toISOString(), origen: 'test' }) } };
  Logger.log(doPost(e).getContent());
}
