// CONTENIDO del sitio: tendencias, industrias, ejes temáticos y hallazgos.
// Todo lo que ves aquí es un EJEMPLO de relleno para armar el esqueleto del sitio.
// Nada de esto es un dato real. Regla del proyecto: nunca inventar cifras, estudios
// ni fuentes — este archivo se reemplaza con datos verificados más adelante.

const EJEMPLO = "[EJEMPLO – NO ES UN DATO REAL]";
const EJEMPLO_EN = "[EXAMPLE – NOT REAL DATA]";

const INTRO = {
  es: {
    parrafos: [
      "Entender el contexto es lo que le permite a una organización mirarse a sí misma y saber en qué punto de su camino está.",
      "Soy Desiree Solano y acompaño a empresas en transformaciones de negocio que terminan impactando en sus personas: en sus estrategias internas, su cultura, sus formas de trabajar y su comunicación. En ese rol hay algo que considero esencial: ver la foto completa. Quien asesora a una organización necesita saber qué está pasando más allá de su cliente, conocer las tendencias que mueven a las industrias y ser una fuente de información a la que valga la pena acudir. Outside-In nace de esa convicción.",
      "Este espacio cruza los hallazgos de estudios de Deloitte, McKinsey, PwC, EY, KPMG, Accenture y Gartner, organizados por industria y por los temas que hoy marcan la agenda de las organizaciones. Funciona sobre un sistema automatizado que construí con Claude Code: cada semana revisa nuevas publicaciones y propone hallazgos, que reviso antes de publicar. Todos los datos son reales, llevan su fuente original y vienen acompañados de mi lectura como consultora.",
      "No pretende decirte qué hacer. Es un espacio para mantenerte informado, encontrar el insight que te interese y llevarlo a las conversaciones que importan: sobre la estrategia, el rumbo y la comunicación de tu propia organización.",
      "Las organizaciones que mejor se transforman son las que se mantienen curiosas y entienden su contexto antes de que el cambio las alcance. Outside-In está pensado para quienes lideran así.",
    ],
    firma_nombre: "Desiree Solano",
    firma_cargo: "Consultora en comunicaciones y transformación organizacional",
  },
  en: {
    parrafos: [
      "Understanding the context is what allows an organization to look at itself and know where it stands on its path.",
      "I'm Desiree Solano, and I work with companies through business transformations that end up impacting their people: their internal strategies, their culture, their ways of working, and their communication. In that role, there's something I consider essential: seeing the full picture. Anyone advising an organization needs to know what's happening beyond their client, understand the trends moving industries, and be a source of information worth turning to. Outside-In was born from that conviction.",
      "This space brings together findings from studies by Deloitte, McKinsey, PwC, EY, KPMG, Accenture, and Gartner, organized by industry and by the topics shaping the organizational agenda today. It runs on an automated system I built with Claude Code: every week it reviews new publications and proposes findings, which I review before publishing. All data is real, carries its original source, and comes with my perspective as a consultant.",
      "It doesn't aim to tell you what to do. It's a space to stay informed, find the insight that matters to you, and bring it into the conversations that count: about the strategy, direction, and communication of your own organization.",
      "The organizations that transform best are the ones that stay curious and understand their context before change catches up with them. Outside-In is built for those who lead that way.",
    ],
    firma_nombre: "Desiree Solano",
    firma_cargo: "Communications & Organizational Transformation Consultant",
  },
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
