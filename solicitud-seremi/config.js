/* Configuración del formulario de Solicitud de Resolución Sanitaria.
   endpoint : URL que recibe el POST (Google Apps Script /exec o webhook Make/n8n). Vacío = envío por correo (mailto).
   modo     : "apps-script" (POST text/plain, no-cors) | "webhook" (POST application/json)
   correo   : destinatario del respaldo por correo.                                                    */
window.SOLICITUD_CONFIG = {
  endpoint: "",
  modo: "apps-script",
  correo: "ecastillo@cozfc.cl",
  whatsapp: ""
};
