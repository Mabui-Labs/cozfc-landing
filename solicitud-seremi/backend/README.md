# Backend del formulario `cozfc.cl/solicitud-seremi` (Google Apps Script, sin servidor)

Cada envío queda en una hoja de cálculo y dispara dos correos: aviso a `ecastillo@cozfc.cl` (con el prompt maestro pre-llenado) y acuse al cliente.

## Puesta en marcha (≈10 min, cuenta Google de cozfc.cl)
1. Crear una hoja de cálculo vacía en Drive: **"Solicitudes SEREMI – cozfc"**. Copiar el ID de la URL (`/d/<ID>/edit`).
2. En la hoja: Extensiones ▸ Apps Script. Pegar `Code.gs`, reemplazar `PEGAR_ID_DEL_SPREADSHEET` por el ID. Guardar.
3. Ejecutar una vez `testPost` desde el editor y aceptar los permisos (Sheets + Gmail). Debe llegar un correo de prueba y crearse la pestaña "Solicitudes".
4. Implementar ▸ Nueva implementación ▸ tipo **Aplicación web** ▸ Ejecutar como: **Yo** ▸ Acceso: **Cualquier usuario** ▸ Implementar. Copiar la URL que termina en `/exec`.
5. Pegar esa URL en `solicitud-seremi/config.js` → `endpoint`, con `modo: "apps-script"`. Hacer commit/push.

## Alternativa Make / n8n
Crear un escenario con módulo *Webhook (custom)*, copiar la URL y ponerla en `config.js` con `modo: "webhook"`. El cuerpo llega como JSON con las claves de `COLUMNAS` (ver `Code.gs`).

## Sin endpoint
Si `endpoint` queda vacío, el botón "Enviar" abre el cliente de correo del visitante con el resumen pre-llenado (`mailto:`). Funciona, pero depende del correo del cliente; usar solo como transición.

## Notas
- Antispam: campo oculto `_hp` (honeypot). Si viene con valor, se descarta.
- Los adjuntos no se suben por el formulario: el cliente pega un enlace (Drive/WeTransfer) en "Enlace a fotos, croquis o documentos".
- Para cambiar textos de correo o destinatario, editar `NOTIFY_TO` / `notificar()` y volver a implementar (Implementar ▸ Administrar ▸ Nueva versión).
