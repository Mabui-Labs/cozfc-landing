// Catálogo SEREMI – generado desde catalogo_seremi_alimentos.json (nov-2026)
window.CATALOGO_SEREMI = {
 "tipos": [
  {
   "id": "T01",
   "nombre": "CARROS MOVILES",
   "alcance": "ok",
   "descripcion": "Carro móvil para mote con huesillos o jugos de cítricos.",
   "fines": [
    "EXPENDER EN CARRO MOTE CON HUESILLOS",
    "ELABORAR Y EXPENDER JUGO DE FRUTOS CITRICOS"
   ],
   "atributos": [
    "HOR",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T02",
   "nombre": "LOCAL DE ALMACENAMIENTO TIPO BODEGA",
   "alcance": "contra",
   "descripcion": "Bodega de almacenamiento de alimentos.",
   "fines": [],
   "atributos": [],
   "antecedentes": []
  },
  {
   "id": "T03",
   "nombre": "LOCAL DE DISTRIBUCION DE ALIMENTOS",
   "alcance": "ok",
   "descripcion": "Bodega o centro de distribución de alimentos envasados, refrigerados o congelados, sin elaboración.",
   "fines": [
    "DISTRIBUIR ALIMENTOS CONGELADOS",
    "DISTRIBUIR ALIMENTOS QUE NO REQUIEREN REFRIGERACION",
    "DISTRIBUIR ALIMENTOS QUE REQUIEREN REFRIGERACION"
   ],
   "atributos": [
    "PF",
    "PM",
    "REF",
    "HOR",
    "COL",
    "SUP",
    "TREF"
   ],
   "antecedentes": [
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T04",
   "nombre": "LOCAL DE ELABORACION DE ALIMENTOS",
   "alcance": "ok",
   "descripcion": "Cocina central, fábrica o cocina de delivery que elabora sin atención de público en el local.",
   "fines": [
    "ELABORAR ADITIVOS PARA LA INDUSTRIA DE ALIMENTOS",
    "ELABORAR AGENTES LEUDANTES Y LEVADURAS DE PANIFICACION",
    "ELABORAR AGUAS TRATADAS",
    "ELABORAR ALIMENTOS DERIVADOS DE CEREALES Y TUBERCULOS",
    "ELABORAR ALIMENTOS DESHIDRATADOS",
    "ELABORAR ALIMENTOS PARA DEPORTISTAS",
    "ELABORAR ALIMENTOS PARA REGIMENES ESPECIALES",
    "ELABORAR BEBIDAS ANALCOHOLICAS",
    "ELABORAR CECINAS Y/O HAMBURGUESAS",
    "ELABORAR CEREALES PARA EL DESAYUNO",
    "ELABORAR CONFITURAS O SIMILARES",
    "ELABORAR CONSERVAS",
    "ELABORAR EMPAREDADOS QUE NO REQUIEREN COCCION",
    "ELABORAR EMPAREDADOS QUE REQUIEREN COCCION",
    "ELABORAR FIDEOS Y PASTAS",
    "ELABORAR GRASAS Y ACEITES COMESTIBLES",
    "ELABORAR HARINA",
    "ELABORAR HELADOS",
    "ELABORAR HIELO",
    "ELABORAR INFUSIONES DE TE Y CAFE",
    "ELABORAR JUGOS O ZUMOS DE FRUTAS U HORTALIZAS",
    "ELABORAR LECHE Y PRODUCTOS LACTEOS",
    "ELABORAR MEZCLAS PARA HELADOS",
    "ELABORAR PLATOS PREPARADOS QUE NO REQUIEREN COCCION",
    "ELABORAR PLATOS PREPARADOS QUE REQUIEREN COCCION",
    "ELABORAR PRODUCTOS DE CONFITERIA",
    "ELABORAR PRODUCTOS DE PANADERIA",
    "ELABORAR PRODUCTOS DE PASTELERIA",
    "ELABORAR PRODUCTOS FARINACEOS PARA COCTEL",
    "ELABORAR SALSAS Y ADEREZOS",
    "ELABORAR SUPLEMENTOS ALIMENTARIOS",
    "ELABORAR INFUSIONES DE YERBA MATE"
   ],
   "atributos": [
    "PF",
    "PM",
    "CAP",
    "HOR",
    "COL",
    "VEN",
    "SUP",
    "SUPE"
   ],
   "antecedentes": [
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A5",
     "nombre": "DESCRIPCION GENERAL DE LOS PROCESOS DE ELABORACION",
     "origen": "elaborado",
     "detalle": "Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A9",
     "nombre": "LISTADO DE MATERIAS PRIMAS QUE EMPLEARA",
     "origen": "elaborado",
     "detalle": "Por categoría, con condición de conservación y origen."
    },
    {
     "cod": "A10",
     "nombre": "LISTADO DE TIPO/S DE ALIMENTO/S QUE ELABORARA",
     "origen": "elaborado",
     "detalle": "Alineado con los fines marcados en el portal."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T05",
   "nombre": "LOCAL DE ELABORACION DE ALIMENTOS CON CONSUMO",
   "alcance": "ok",
   "descripcion": "Restaurante, cafetería o pastelería que elabora y sirve en mesas. Requiere baños de público hombres/mujeres.",
   "fines": [
    "ELABORAR CON CONSUMO EMPAREDADOS QUE NO REQUIEREN COCCION",
    "ELABORAR CON CONSUMO EMPAREDADOS QUE REQUIEREN COCCION",
    "ELABORAR CON CONSUMO HELADOS FRACCIONADOS",
    "ELABORAR CON CONSUMO INFUSIONES DE TE O CAFE",
    "ELABORAR CON CONSUMO JUGOS O ZUMOS DE FRUTAS U HORTALIZAS",
    "ELABORAR CON CONSUMO PLATOS PREPARADOS QUE NO REQUIEREN COCCION",
    "ELABORAR CON CONSUMO PLATOS PREPARADOS QUE REQUIEREN COCCION",
    "ELABORAR CON CONSUMO PRODUCTOS DE PANADERIA",
    "ELABORAR CON CONSUMO PRODUCTOS DE PASTELERIA"
   ],
   "atributos": [
    "WCF",
    "WCM",
    "PF",
    "PM",
    "CAP",
    "HOR",
    "COL",
    "SUP",
    "SUPE"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A5",
     "nombre": "DESCRIPCION GENERAL DE LOS PROCESOS DE ELABORACION",
     "origen": "elaborado",
     "detalle": "Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A9",
     "nombre": "LISTADO DE MATERIAS PRIMAS QUE EMPLEARA",
     "origen": "elaborado",
     "detalle": "Por categoría, con condición de conservación y origen."
    },
    {
     "cod": "A10",
     "nombre": "LISTADO DE TIPO/S DE ALIMENTO/S QUE ELABORARA",
     "origen": "elaborado",
     "detalle": "Alineado con los fines marcados en el portal."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T06",
   "nombre": "LOCAL DE ELABORACION DE ALIMENTOS CON CONSUMO AL PASO",
   "alcance": "ok",
   "descripcion": "Sushi, comida rápida, delivery o take away: elabora y entrega al paso, sin mesas ni baños de público.",
   "fines": [
    "ELABORAR CON CONSUMO AL PASO EMPAREDADOS QUE NO REQUIEREN COCCION",
    "ELABORAR CON CONSUMO AL PASO EMPAREDADOS QUE REQUIEREN COCCION",
    "ELABORAR CON CONSUMO AL PASO HELADOS FRACCIONADOS",
    "ELABORAR CON CONSUMO AL PASO INFUSIONES DE TE O CAFE",
    "ELABORAR CON CONSUMO AL PASO JUGOS O ZUMOS DE FRUTAS U HORTALIZAS",
    "ELABORAR CON CONSUMO AL PASO PLATOS PREPARADOS QUE NO REQUIEREN COCCION",
    "ELABORAR CON CONSUMO AL PASO PLATOS PREPARADOS QUE REQUIEREN COCCION"
   ],
   "atributos": [
    "PF",
    "PM",
    "HOR",
    "COL",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A5",
     "nombre": "DESCRIPCION GENERAL DE LOS PROCESOS DE ELABORACION",
     "origen": "elaborado",
     "detalle": "Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A9",
     "nombre": "LISTADO DE MATERIAS PRIMAS QUE EMPLEARA",
     "origen": "elaborado",
     "detalle": "Por categoría, con condición de conservación y origen."
    },
    {
     "cod": "A10",
     "nombre": "LISTADO DE TIPO/S DE ALIMENTO/S QUE ELABORARA",
     "origen": "elaborado",
     "detalle": "Alineado con los fines marcados en el portal."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T07",
   "nombre": "LOCAL DE ELABORACION TIPO ENVASADORA",
   "alcance": "ok",
   "descripcion": "Envasa alimentos propios o de terceros: congelados, refrigerados, secos o agua.",
   "fines": [
    "ENVASAR ALIMENTOS CONGELADOS",
    "ENVASAR ALIMENTOS QUE NO REQUIEREN REFRIGERACION",
    "ENVASAR ALIMENTOS QUE REQUIEREN REFRIGERACION",
    "ENVASAR AGUA"
   ],
   "atributos": [
    "PF",
    "PM",
    "REF",
    "CAP",
    "HOR",
    "COL",
    "VEN",
    "SUP",
    "TREF"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A5",
     "nombre": "DESCRIPCION GENERAL DE LOS PROCESOS DE ELABORACION",
     "origen": "elaborado",
     "detalle": "Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A9",
     "nombre": "LISTADO DE MATERIAS PRIMAS QUE EMPLEARA",
     "origen": "elaborado",
     "detalle": "Por categoría, con condición de conservación y origen."
    },
    {
     "cod": "A10",
     "nombre": "LISTADO DE TIPO/S DE ALIMENTO/S QUE ELABORARA",
     "origen": "elaborado",
     "detalle": "Alineado con los fines marcados en el portal."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T08",
   "nombre": "LOCAL DE ELABORACION TIPO PROCESADORA",
   "alcance": "ok",
   "descripcion": "Procesa materias primas: carnes, pescados, lácteos, frutas y hortalizas, huevos, miel, mote, etc.",
   "fines": [
    "PROCESAR AZUCAR, MIEL Y PRODUCTOS APICOLAS",
    "PROCESAR CARNE Y SUBPRODUCTOS COMESTIBLES DE GANADO MENOR",
    "PROCESAR CARNE Y SUBPRODUCTOS COMESTIBLES DE AVES Y OTRAS ESPECIES DISTINTAS AL GANADO",
    "PROCESAR CARNE Y SUBPRODUCTOS COMESTIBLES DE GANADO MAYOR",
    "PROCESAR ENCURTIDOS",
    "PROCESAR ESTIMULANTES Y FRUITIVOS",
    "PROCESAR FRUTAS, HORTALIZAS Y CHAMPIÑONES",
    "PROCESAR FRUTOS SECOS",
    "PROCESAR MOTE",
    "PROCESAR PESCADOS, MARISCOS Y PRODUCTOS DEL MAR",
    "PROCESAR PRODUCTOS LACTEOS",
    "PROCESAR SAL, ESPECIAS Y CONDIMENTOS",
    "PROCESAR HUEVOS"
   ],
   "atributos": [
    "PF",
    "PM",
    "CAP",
    "HOR",
    "COL",
    "VEN",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A5",
     "nombre": "DESCRIPCION GENERAL DE LOS PROCESOS DE ELABORACION",
     "origen": "elaborado",
     "detalle": "Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A9",
     "nombre": "LISTADO DE MATERIAS PRIMAS QUE EMPLEARA",
     "origen": "elaborado",
     "detalle": "Por categoría, con condición de conservación y origen."
    },
    {
     "cod": "A10",
     "nombre": "LISTADO DE TIPO/S DE ALIMENTO/S QUE ELABORARA",
     "origen": "elaborado",
     "detalle": "Alineado con los fines marcados en el portal."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T09",
   "nombre": "LOCAL DE EXPENDIO DE ALIMENTOS",
   "alcance": "ok",
   "descripcion": "Minimarket, almacén, carnicería o pescadería: vende alimentos sin elaborarlos.",
   "fines": [
    "EXPENDER ALIMENTOS CONGELADOS",
    "EXPENDER ALIMENTOS QUE NO REQUIEREN REFRIGERACION",
    "EXPENDER ALIMENTOS QUE REQUIERAN REFRIGERACION (EXCLUIDOS: AVES FAENADAS Y SUBPRODUCTOS CARNEOS DE AVE, CARNE Y SUBPRODUCTOS CARNEOS, CECINAS, EMPAREDADOS ENVASADOS, LECHE Y PRODUCTOS LACTEOS, PESCADOS, MARISCOS Y PRODUCTOS DEL MAR, PLATOS PREPARADOS ENVASADOS, FRUTAS Y VERDURAS FRESCAS LAVADAS, TROZADAS O PELADAS Y ENVASADAS PROVENIENTES DE ESTABLECIMIENTOS AUTORIZADOS, PRODUCTOS DE PASTELERIA Y HELADOS)",
    "EXPENDER AVES FAENADAS Y SUBPRODUCTOS CARNEOS DE AVE",
    "EXPENDER CARNE Y SUBPRODUCTOS CARNEOS",
    "EXPENDER CECINAS",
    "EXPENDER EMPAREDADOS ENVASADOS",
    "EXPENDER LECHE Y PRODUCTOS LACTEOS",
    "EXPENDER PESCADOS, MARISCOS Y PRODUCTOS DEL MAR",
    "EXPENDER PLATOS PREPARADOS ENVASADOS",
    "EXPENDER PRODUCTOS DE PASTELERIA",
    "EXPENDER FRUTAS FRESCAS LAVADAS, TROZADAS O PELADAS Y ENVASADAS PROVENIENTES DE ESTABLECIMIENTOS AUTORIZADOS",
    "EXPENDER VERDURAS FRESCAS LAVADAS, TROZADAS O PELADAS Y ENVASADAS PROVENIENTES DE ESTABLECIMIENTOS AUTORIZADOS",
    "EXPENDER HELADOS ENVASADOS",
    "EXPENDER HELADOS FRACCIONADOS"
   ],
   "atributos": [
    "PF",
    "PM",
    "HOR",
    "COL",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T10",
   "nombre": "LOCAL DE EXPENDIO DE ALIMENTOS CON CONSUMO",
   "alcance": "ok",
   "descripcion": "Cafetería o fuente de soda que sirve productos ya elaborados (calienta, porciona) con mesas. Requiere baños de público.",
   "fines": [
    "EXPENDER CON CONSUMO BEBIDAS ANALCOHOLICAS",
    "EXPENDER CON CONSUMO EMPAREDADOS QUE NO REQUIEREN COCCION",
    "EXPENDER CON CONSUMO EMPAREDADOS QUE REQUIEREN COCCION",
    "EXPENDER CON CONSUMO HELADOS FRACCIONADOS",
    "EXPENDER CON CONSUMO MOTE CON HUESILLOS",
    "EXPENDER CON CONSUMO PLATOS PREPARADOS QUE NO REQUIEREN COCCION",
    "EXPENDER CON CONSUMO PLATOS PREPARADOS QUE REQUIEREN COCCION",
    "EXPENDER CON CONSUMO PRODUCTOS DE PANADERIA",
    "EXPENDER CON CONSUMO PRODUCTOS DE PASTELERIA"
   ],
   "atributos": [
    "WCF",
    "WCM",
    "PF",
    "PM",
    "HOR",
    "COL",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A4b",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Variante sin sistema de frío (expendio con consumo / al paso)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T11",
   "nombre": "LOCAL DE EXPENDIO DE ALIMENTOS CON CONSUMO AL PASO",
   "alcance": "ok",
   "descripcion": "Café al paso o kiosco que vende productos elaborados por terceros para llevar.",
   "fines": [
    "EXPENDER CON CONSUMO AL PASO BEBIDAS ANALCOHOLICAS",
    "EXPENDER CON CONSUMO AL PASO EMPAREDADOS QUE NO REQUIEREN COCCION",
    "EXPENDER CON CONSUMO AL PASO EMPAREDADOS QUE REQUIEREN COCCION",
    "EXPENDER CON CONSUMO AL PASO HELADOS FRACCIONADOS",
    "EXPENDER CON CONSUMO AL PASO INFUSIONES DE TE Y CAFE",
    "EXPENDER CON CONSUMO AL PASO MOTE CON HUESILLOS",
    "EXPENDER CON CONSUMO AL PASO PLATOS PREPARADOS QUE NO REQUIEREN COCCION",
    "EXPENDER CON CONSUMO AL PASO PLATOS PREPARADOS QUE REQUIEREN COCCION",
    "EXPENDER CON CONSUMO AL PASO PRODUCTOS DE PASTELERIA"
   ],
   "atributos": [
    "PF",
    "PM",
    "HOR",
    "COL",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A4b",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Variante sin sistema de frío (expendio con consumo / al paso)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T12",
   "nombre": "LOCAL DE EXPENDIO DE ALIMENTOS Y ELABORACION",
   "alcance": "ok",
   "descripcion": "Supermercado, rotisería o panadería con venta: elabora, envasa y vende en el mismo local.",
   "fines": [
    "ELABORAR CECINAS Y/O HAMBURGUESAS",
    "ELABORAR EMPAREDADOS QUE NO REQUIEREN COCCION",
    "ELABORAR EMPAREDADOS QUE REQUIEREN COCCION",
    "ELABORAR HELADOS",
    "ELABORAR PLATOS PREPARADOS QUE NO REQUIEREN COCCION",
    "ELABORAR PLATOS PREPARADOS QUE REQUIEREN COCCION",
    "ELABORAR PRODUCTOS DE PANADERIA",
    "ELABORAR PRODUCTOS DE PASTELERIA",
    "ENVASAR ALIMENTOS CONGELADOS",
    "ENVASAR ALIMENTOS QUE NO REQUIEREN REFRIGERACION",
    "ENVASAR ALIMENTOS QUE REQUIEREN REFRIGERACION",
    "EXPENDER ALIMENTOS CONGELADOS",
    "EXPENDER ALIMENTOS QUE NO REQUIEREN REFRIGERACION",
    "EXPENDER AVES FAENADAS Y SUBPRODUCTOS CARNEOS DE AVE",
    "EXPENDER CARNE Y SUBPRODUCTOS CARNEOS",
    "EXPENDER CECINAS",
    "EXPENDER EMPAREDADOS ENVASADOS",
    "EXPENDER LECHE Y PRODUCTOS LACTEOS",
    "EXPENDER PESCADOS, MARISCOS Y PRODUCTOS DEL MAR",
    "EXPENDER PLATOS PREPARADOS ENVASADOS",
    "EXPENDER PRODUCTOS DE PASTELERIA",
    "PROCESAR CARNE Y SUBPRODUCTOS COMESTIBLES DE GANADO MENOR",
    "PROCESAR CARNE Y SUBPRODUCTOS COMESTIBLES DE AVES Y OTRAS ESPECIES DISTINTAS AL GANADO",
    "PROCESAR CARNE Y SUBPRODUCTOS COMESTIBLES DE GANADO MAYOR",
    "PROCESAR FRUTAS, HORTALIZAS Y CHAMPIÑONES",
    "PROCESAR PRODUCTOS LACTEOS",
    "EXPENDER HELADOS ENVASADOS",
    "EXPENDER HELADOS FRACCIONADOS"
   ],
   "atributos": [
    "PF",
    "PM",
    "CON",
    "CAP",
    "HOR",
    "COL",
    "VEN",
    "SUP",
    "SUPE",
    "TREF"
   ],
   "antecedentes": [
    {
     "cod": "A1",
     "nombre": "AUTORIZACION MUNICIPAL DE ACUERDO AL PLANO REGULADOR",
     "origen": "cliente",
     "detalle": "Informe de factibilidad / certificado de zonificación DOM, o patente MEF. Debe indicar el rol y dirección exacta."
    },
    {
     "cod": "A2",
     "nombre": "COMPROBANTE DE PAGO DE AGUA POTABLE DE RED PUBLICA O RESOLUCION DE LA OBRA DE AGUA POTABLE PARTICULAR",
     "origen": "cliente",
     "detalle": "Última boleta ESSAL (u otra sanitaria) del inmueble, o resolución APR/pozo."
    },
    {
     "cod": "A3",
     "nombre": "COMPROBANTE DE PAGO DE SISTEMA DE ALCANTARILLADO PUBLICO O RESOLUCION DE LA OBRA DE ALCANTARILLADO PARTICULAR",
     "origen": "cliente",
     "detalle": "Misma boleta si incluye alcantarillado, o resolución de fosa/planta."
    },
    {
     "cod": "A4",
     "nombre": "CROQUIS O MEMORIA TECNICA DE LOS SISTEMAS DE ELIMINACION DE CALOR, OLOR O VAPOR Y SISTEMA DE FRIO SEGUN CORRESPONDA",
     "origen": "elaborado",
     "detalle": "Memoria técnica + croquis por planta: campanas/ducto/extractor y equipos de frío (cantidad, rango de temperatura, ubicación)."
    },
    {
     "cod": "A5",
     "nombre": "DESCRIPCION GENERAL DE LOS PROCESOS DE ELABORACION",
     "origen": "elaborado",
     "detalle": "Flujo por etapas: recepción, almacenamiento, pre-elaboración, elaboración, armado/envasado, entrega, retorno y lavado; con PCC, límites y acciones correctivas."
    },
    {
     "cod": "A6",
     "nombre": "PLANO O CROQUIS DE PLANTA E INSTALACIONES SANITARIAS A ESCALA",
     "origen": "elaborado",
     "detalle": "Planta por piso con recintos, cotas, puertas, equipos, baños, lavamanos, puntos de agua y desagüe, orientación."
    },
    {
     "cod": "A7",
     "nombre": "SISTEMA DE CONTROL DE CALIDAD SANITARIA CON QUE CONTARA",
     "origen": "elaborado",
     "detalle": "Manual de Buenas Prácticas (MBP) + POES + POE + Interconexiones + Anexos (registros R1–R7, instructivo lavado de manos, certificado control de plagas)."
    },
    {
     "cod": "A8",
     "nombre": "SISTEMA DE ELIMINACION DE DESECHOS",
     "origen": "elaborado",
     "detalle": "Residuos sólidos, líquidos y aceites agotados: contenedores, frecuencia, retiro, contenedor externo, empresa de rendering."
    },
    {
     "cod": "A9",
     "nombre": "LISTADO DE MATERIAS PRIMAS QUE EMPLEARA",
     "origen": "elaborado",
     "detalle": "Por categoría, con condición de conservación y origen."
    },
    {
     "cod": "A10",
     "nombre": "LISTADO DE TIPO/S DE ALIMENTO/S QUE ELABORARA",
     "origen": "elaborado",
     "detalle": "Alineado con los fines marcados en el portal."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T13",
   "nombre": "MATADEROS",
   "alcance": "contra",
   "descripcion": "Faenamiento de animales.",
   "fines": [],
   "atributos": [],
   "antecedentes": []
  },
  {
   "id": "T14",
   "nombre": "PUESTOS, CASETAS, CARROS Y QUIOSCOS",
   "alcance": "ok",
   "descripcion": "Puesto, caseta, carro o quiosco fijo en espacio público o feria.",
   "fines": [
    "EXPENDER EN PUESTO QUESOS Y CECINAS PROVENIENTES DE FABRICAS AUTORIZADAS, FRACCIONADOS Y ENVASADOS EN LAS MISMAS FABRICAS",
    "EXPENDER FRUTAS FRESCAS LAVADAS, TROZADAS O PELADAS Y ENVASADAS PROVENIENTES DE ESTABLECIMIENTOS AUTORIZADOS",
    "EXPENDER VERDURAS FRESCAS LAVADAS, TROZADAS O PELADAS Y ENVASADAS PROVENIENTES DE ESTABLECIMIENTOS AUTORIZADOS",
    "ELABORAR Y EXPENDER FRUTA FRESCA CONFITADA",
    "COCINAR Y EXPENDER EN PUESTO EMPANADAS DE QUESO",
    "COCINAR Y EXPENDER EN PUESTO MASAS CRUDAS SIN RELLENO",
    "COCINAR Y EXPENDER EN PUESTO VEGETALES PROCESADOS",
    "ELABORAR Y EXPENDER EN PUESTO EMPAREDADOS CALIENTES A BASE DE CECINAS COCIDAS",
    "ELABORAR Y EXPENDER EN PUESTO EMPAREDADOS FRIOS A BASE DE CECINAS COCIDAS",
    "EXPENDER EN PUESTO PESCADOS, MARISCOS Y PRODUCTOS DEL MAR",
    "EXPENDER EN PUESTO CARNE Y SUBPRODUCTOS CARNEOS",
    "ELABORAR Y EXPENDER FRUTOS SECOS CONFITADOS",
    "ELABORAR Y EXPENDER PALOMITAS DE MAIZ Y ALGODON DE AZUCAR",
    "ELABORAR Y EXPENDER EN PUESTO INFUSIONES DE TE O CAFE",
    "EXPENDER EN PUESTO ALIMENTOS QUE NO REQUIEREN REFRIGERACION",
    "EXPENDER EN PUESTO FRUTAS Y HORTALIZAS FRESCAS",
    "EXPENDER EN PUESTO HELADOS ENVASADOS",
    "EXPENDER EN PUESTO TE Y CAFE EN TERMOS SELLADOS",
    "ELABORAR Y EXPENDER HIELO GRANIZADO SABORIZADO CON JARABES NATURALES O ARTIFICIALES"
   ],
   "atributos": [
    "HOR",
    "SUP"
   ],
   "antecedentes": [
    {
     "cod": "A12",
     "nombre": "ACREDITAR POR MUNICIPALIDAD CORRESPONDIENTE LUGAR DE EMPLAZAMIENTO",
     "origen": "cliente",
     "detalle": "Permiso municipal de uso de bien nacional de uso público o autorización de emplazamiento (puestos, casetas, carros, quioscos)."
    },
    {
     "cod": "A11",
     "nombre": "CERTIFICADO DE INICIO DE ACTIVIDADES",
     "origen": "cliente",
     "detalle": "SII, con giro de alimentos y dirección del local como casa matriz o sucursal."
    }
   ]
  },
  {
   "id": "T15",
   "nombre": "VEHICULO DE TRANSPORTE DE ALIMENTOS",
   "alcance": "contra",
   "descripcion": "Vehículo para transporte de alimentos.",
   "fines": [],
   "atributos": [],
   "antecedentes": []
  }
 ],
 "atributos": {
  "PF": "CANTIDAD DE PERSONAL FEMENINO (mujeres)",
  "PM": "CANTIDAD DE PERSONAL MASCULINO (hombres)",
  "WCF": "CANTIDAD DE EXCUSADOS PROVISTOS DE WC PARA EL PUBLICO FEMENINO (unidades)",
  "WCM": "CANTIDAD DE EXCUSADOS PROVISTOS DE WC PARA EL PUBLICO MASCULINO (unidades)",
  "CAP": "CAPACIDAD MAXIMA DE PRODUCCION (kg/día)",
  "REF": "CAPACIDAD DE REFRIGERACION (litros)",
  "CON": "CAPACIDAD DE CONGELACION",
  "HOR": "HORARIO DE TRABAJO (DIURNO / NOCTURNO / DIURNO-NOCTURNO)",
  "COL": "INSTALACIONES COLINDANTES NORTE / ORIENTE / PONIENTE / SUR (VIVIENDA, LOCAL COMERCIAL, CALLE, SITIO ERIAZO, ...)",
  "VEN": "NIVEL DE VENTAS (UF/anual)",
  "SUP": "SUPERFICIE TOTAL CONSTRUIDA (m²)",
  "SUPE": "SUPERFICIE TOTAL DE ZONAS DE ELABORACION (m²)",
  "TREF": "TIPO DE REFRIGERANTE (AMONIACO, ...)"
 }
};
