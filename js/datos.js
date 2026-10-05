// CONTENIDO del sitio: carta de bienvenida, industrias, temas (ejes) y hallazgos.
// Los hallazgos y la portada de tendencias todavía son EJEMPLO de relleno.
// Nada de eso es un dato real. Regla del proyecto: nunca inventar cifras, estudios
// ni fuentes — ese contenido se reemplaza con datos verificados más adelante.

const EJEMPLO = "[EJEMPLO – NO ES UN DATO REAL]";
const EJEMPLO_EN = "[EXAMPLE – NOT REAL DATA]";

// Carta de bienvenida completa. El resumen corto que se ve en la sección
// "Sobre Outside-In" se construye a partir de estos mismos párrafos (ver app.js),
// y el texto completo aparece al hacer clic en "Por qué creé Outside-In".
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

const LINK_LINKEDIN_EJEMPLO = "#";

// Primera versión del sitio: 3 industrias reales.
const INDUSTRIAS = [
  { id: "banca_pagos", es: "Banca y pagos", en: "Banking & payments" },
  { id: "consumo_masivo", es: "Consumo masivo", en: "Consumer goods" },
  { id: "tecnologia", es: "Tecnología", en: "Technology" },
];

// Los 6 temas (ejes) reales del sitio. "desc" es una descripción corta de una
// línea para el panel de la sección "Temas" — es copy de interfaz, no un dato o
// hallazgo, así que no lleva fuente.
const EJES = [
  {
    id: "gestion_cambio",
    es: "Gestión del cambio",
    en: "Change management",
    desc_es: "Cómo las organizaciones diseñan, lideran y sostienen procesos de cambio.",
    desc_en: "How organizations design, lead, and sustain change processes.",
  },
  {
    id: "estrategia_negocio",
    es: "Estrategia de negocio",
    en: "Business strategy",
    desc_es: "Hacia dónde mueven su rumbo las industrias y qué las impulsa a decidirlo.",
    desc_en: "Where industries are steering their course and what's driving that decision.",
  },
  {
    id: "comunicaciones",
    es: "Comunicaciones",
    en: "Communications",
    desc_es: "Cómo se comunican las organizaciones, hacia adentro y hacia afuera, en momentos de cambio.",
    desc_en: "How organizations communicate, internally and externally, in moments of change.",
  },
  {
    id: "cultura_organizacional",
    es: "Cultura organizacional",
    en: "Organizational culture",
    desc_es: "Cómo se construye, se mide y se transforma la cultura de una organización.",
    desc_en: "How an organization's culture is built, measured, and transformed.",
  },
  {
    id: "ia",
    es: "Inteligencia artificial",
    en: "Artificial intelligence",
    desc_es: "Cómo la IA está cambiando el trabajo, las habilidades y las decisiones de negocio.",
    desc_en: "How AI is changing work, skills, and business decisions.",
  },
  {
    id: "transformacion",
    es: "Transformación",
    en: "Transformation",
    desc_es: "Cómo las organizaciones ejecutan transformaciones de negocio de punta a punta.",
    desc_en: "How organizations execute end-to-end business transformations.",
  },
];

// Portada de "5 tendencias": todavía no se muestra en el sitio (ver nota en
// app.js), pero se conserva aquí para no perder el contenido de ejemplo.
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
// para que la matriz, las tarjetas de "Hallazgos recientes" y las fichas
// se puedan ver funcionando. Antes de publicar el sitio, se reemplazan por
// hallazgos reales con su fuente verificable.
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
