// CONTENIDO del sitio: tendencias, industrias, ejes temáticos y hallazgos.
// Todo lo que ves aquí es un EJEMPLO de relleno para armar el esqueleto del sitio.
// Nada de esto es un dato real. Regla del proyecto: nunca inventar cifras, estudios
// ni fuentes — este archivo se reemplaza con datos verificados más adelante.

const EJEMPLO = "[EJEMPLO – NO ES UN DATO REAL]";
const EJEMPLO_EN = "[EXAMPLE – NOT REAL DATA]";

const TEXTO_INTRO = {
  es: "[EJEMPLO – TEXTO PROVISIONAL, PENDIENTE DE REDACTAR JUNTAS] Aquí va la presentación del espacio: quién soy y para qué sirve este radar.",
  en: "[EXAMPLE – DRAFT TEXT, TO BE WRITTEN TOGETHER] This is where the space is introduced: who I am and what this radar is for.",
};

const TEXTO_SOBRE_MI = {
  es: "[EJEMPLO – TEXTO PROVISIONAL, PENDIENTE DE REDACTAR JUNTAS] Breve biografía profesional de Desiree Solano.",
  en: "[EXAMPLE – DRAFT TEXT, TO BE WRITTEN TOGETHER] Short professional bio for Desiree Solano.",
};

const LINK_LINKEDIN_EJEMPLO = "#";

const INDUSTRIAS = [
  { id: "banca_pagos", es: "Banca y pagos", en: "Banking & payments" },
  { id: "consumo_masivo", es: "Consumo masivo", en: "Consumer goods" },
  { id: "tecnologia", es: "Tecnología", en: "Technology" },
];

const EJES = [
  { id: "gestion_cambio", es: "Gestión del cambio", en: "Change management" },
  { id: "estrategia_negocio", es: "Estrategia de negocio", en: "Business strategy" },
  { id: "comunicaciones", es: "Comunicaciones", en: "Communications" },
  { id: "cultura_organizacional", es: "Cultura organizacional", en: "Organizational culture" },
  { id: "ia", es: "Inteligencia artificial", en: "Artificial intelligence" },
  { id: "transformacion", es: "Transformación", en: "Transformation" },
];

const TENDENCIAS = [
  {
    id: 1,
    titular_es: `Titular de tendencia de ejemplo 1 ${EJEMPLO}`,
    titular_en: `Example trend headline 1 ${EJEMPLO_EN}`,
    dato_es: EJEMPLO,
    dato_en: EJEMPLO_EN,
    fuente_es: EJEMPLO,
    fuente_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
  },
  {
    id: 2,
    titular_es: `Titular de tendencia de ejemplo 2 ${EJEMPLO}`,
    titular_en: `Example trend headline 2 ${EJEMPLO_EN}`,
    dato_es: EJEMPLO,
    dato_en: EJEMPLO_EN,
    fuente_es: EJEMPLO,
    fuente_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
  },
  {
    id: 3,
    titular_es: `Titular de tendencia de ejemplo 3 ${EJEMPLO}`,
    titular_en: `Example trend headline 3 ${EJEMPLO_EN}`,
    dato_es: EJEMPLO,
    dato_en: EJEMPLO_EN,
    fuente_es: EJEMPLO,
    fuente_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
  },
  {
    id: 4,
    titular_es: `Titular de tendencia de ejemplo 4 ${EJEMPLO}`,
    titular_en: `Example trend headline 4 ${EJEMPLO_EN}`,
    dato_es: EJEMPLO,
    dato_en: EJEMPLO_EN,
    fuente_es: EJEMPLO,
    fuente_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
  },
  {
    id: 5,
    titular_es: `Titular de tendencia de ejemplo 5 ${EJEMPLO}`,
    titular_en: `Example trend headline 5 ${EJEMPLO_EN}`,
    dato_es: EJEMPLO,
    dato_en: EJEMPLO_EN,
    fuente_es: EJEMPLO,
    fuente_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
  },
];

// Hallazgos de ejemplo, repartidos en distintos cruces de industria x eje
// para que la matriz y las fichas se puedan ver funcionando.
const HALLAZGOS = [
  {
    id: "h1",
    industria: "banca_pagos",
    eje: "gestion_cambio",
    fuente: EJEMPLO,
    estudio_es: EJEMPLO,
    estudio_en: EJEMPLO_EN,
    anio: "0000",
    link: "#",
    region_es: EJEMPLO,
    region_en: EJEMPLO_EN,
    hallazgo_es: EJEMPLO,
    hallazgo_en: EJEMPLO_EN,
    dato_clave_es: EJEMPLO,
    dato_clave_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
    estado: "BORRADOR",
  },
  {
    id: "h2",
    industria: "banca_pagos",
    eje: "ia",
    fuente: EJEMPLO,
    estudio_es: EJEMPLO,
    estudio_en: EJEMPLO_EN,
    anio: "0000",
    link: "#",
    region_es: EJEMPLO,
    region_en: EJEMPLO_EN,
    hallazgo_es: EJEMPLO,
    hallazgo_en: EJEMPLO_EN,
    dato_clave_es: EJEMPLO,
    dato_clave_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
    estado: "BORRADOR",
  },
  {
    id: "h3",
    industria: "consumo_masivo",
    eje: "cultura_organizacional",
    fuente: EJEMPLO,
    estudio_es: EJEMPLO,
    estudio_en: EJEMPLO_EN,
    anio: "0000",
    link: "#",
    region_es: EJEMPLO,
    region_en: EJEMPLO_EN,
    hallazgo_es: EJEMPLO,
    hallazgo_en: EJEMPLO_EN,
    dato_clave_es: EJEMPLO,
    dato_clave_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
    estado: "BORRADOR",
  },
  {
    id: "h4",
    industria: "tecnologia",
    eje: "ia",
    fuente: EJEMPLO,
    estudio_es: EJEMPLO,
    estudio_en: EJEMPLO_EN,
    anio: "0000",
    link: "#",
    region_es: EJEMPLO,
    region_en: EJEMPLO_EN,
    hallazgo_es: EJEMPLO,
    hallazgo_en: EJEMPLO_EN,
    dato_clave_es: EJEMPLO,
    dato_clave_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
    estado: "BORRADOR",
  },
  {
    id: "h5",
    industria: "tecnologia",
    eje: "ia",
    fuente: EJEMPLO,
    estudio_es: EJEMPLO,
    estudio_en: EJEMPLO_EN,
    anio: "0000",
    link: "#",
    region_es: EJEMPLO,
    region_en: EJEMPLO_EN,
    hallazgo_es: EJEMPLO,
    hallazgo_en: EJEMPLO_EN,
    dato_clave_es: EJEMPLO,
    dato_clave_en: EJEMPLO_EN,
    implicancia_es: EJEMPLO,
    implicancia_en: EJEMPLO_EN,
    estado: "BORRADOR",
  },
];
