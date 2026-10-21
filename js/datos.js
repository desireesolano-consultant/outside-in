// CONTENIDO del sitio: carta de bienvenida, industrias, temas y hallazgos.
// Los hallazgos son reales; la portada de tendencias (no visible) sigue siendo EJEMPLO.
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

const LINK_LINKEDIN = "https://www.linkedin.com/in/desiree-solano-baba59131/";

// Cita destacada del banner. Es la misma frase real de la carta de
// bienvenida (INTRO), no un texto nuevo.
const CITA_BANNER = {
  es: "Las organizaciones que mejor se transforman son las que se mantienen curiosas y entienden su contexto antes de que el cambio las alcance.",
  en: "The organizations that transform best are the ones that stay curious and understand their context before change catches up with them.",
};

// Segunda versión del sitio: foco reducido a 3 industrias reales.
// "frase" es la forma corta en minúscula que se usa dentro de la bajada
// rotativa del hero ("...qué pasa con [tema] en [industria]...").
const INDUSTRIAS = [
  {
    id: "life_sciences",
    es: "Salud y farmacéutica",
    en: "Life Sciences",
    frase_es: "salud y farmacéutica",
    frase_en: "Life Sciences",
  },
  {
    id: "servicios_financieros",
    es: "Servicios financieros (banca, pagos y seguros)",
    en: "Financial services (banking, payments & insurance)",
    frase_es: "servicios financieros",
    frase_en: "financial services",
  },
  {
    id: "consumo_masivo",
    es: "Consumo masivo",
    en: "Consumer goods",
    frase_es: "consumo masivo",
    frase_en: "consumer goods",
  },
];

// Foco reducido a 3 temas reales.
const TEMAS = [
  {
    id: "gestion_cambio",
    es: "Gestión del cambio",
    en: "Change management",
    frase_es: "la gestión del cambio",
    frase_en: "change management",
    desc_es: "Cómo las organizaciones diseñan, lideran y sostienen procesos de cambio.",
    desc_en: "How organizations design, lead, and sustain change processes.",
  },
  {
    id: "ia_personas",
    es: "IA y personas",
    en: "AI and people",
    frase_es: "la IA y las personas",
    frase_en: "AI and people",
    desc_es: "Cómo la IA está cambiando el trabajo, las habilidades y las decisiones de las personas en las organizaciones.",
    desc_en: "How AI is changing work, skills, and people's decisions inside organizations.",
  },
  {
    id: "liderazgo_cultura",
    es: "Liderazgo, cultura y comunicación",
    en: "Leadership, culture & communication",
    frase_es: "el liderazgo y la cultura",
    frase_en: "leadership and culture",
    desc_es: "Cómo se lidera, se construye cultura y se comunica una organización en momentos de cambio.",
    desc_en: "How an organization leads, builds culture, and communicates in moments of change.",
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


// HALLAZGOS REALES. Cada uno viene de un estudio público, verificado en su
// fuente original. La lista completa de campos está en README.md.
//
// "tema" e "industria" son OPCIONALES, pero un hallazgo necesita al menos
// uno de los dos:
// - Solo tema o solo industria -> "lectura individual", sección "Entender".
// - Tema E industria -> "conexión", sección "Conectar".
//
// "Mi lectura" (implicancia_es / implicancia_en) la escribe SOLO Desiree.
// Mientras no exista, queda en null y lecturaEstado: "pendiente": la ficha
// se publica igual, con la etiqueta "Mi lectura: en camino".
const HALLAZGOS = [
  // ---------- Entender ----------
  {
    id: "h-2026-10-accenture-supply-chain",
    industria: null,
    tema: "gestion_cambio",
    subtema: "Rediseño del trabajo",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-05-14",
    anio: "2026",
    fuente: "Accenture",
    estudio_es: "Turning the supply chain talent shortage into strength",
    estudio_en: "Turning the supply chain talent shortage into strength",
    link: "https://www.accenture.com/en/insights/supply-chain/talent-supply-chain",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "Las cadenas de suministro en EE.UU. necesitarán más de un millón de personas que no van a existir hacia 2035",
    hallazgo_en: "US supply chains will need more than a million people who won't exist by 2035",
    dato_clave_es: "La demanda en ocupaciones clave crecerá 1.34 millones de puestos (19%) entre 2026 y 2035, mientras la fuerza laboral solo sumará unos 221,000 trabajadores (3.2%). En algunos casos, hasta 48% del trabajo rutinario podría automatizarse por completo.",
    dato_clave_en: "Demand in core occupations will grow by 1.34 million roles (19%) between 2026 and 2035, while the labor force will add only about 221,000 workers (3.2%). In some cases, up to 48% of routine work could be fully automated.",
    contexto_es: "Proyección de Accenture basada en un modelo propio de planificación de escenarios que conecta el crecimiento de las cadenas de suministro con los roles y tareas que se necesitarán en EE.UU. entre 2026 y 2035.",
    contexto_en: "Accenture projection based on a proprietary scenario-planning model that links supply chain growth to the roles and tasks the US will need between 2026 and 2035.",
    puntos_es: [
      "La demanda en ocupaciones clave de supply chain crecerá en 1.34 millones de puestos (19%) entre 2026 y 2035.",
      "En el mismo periodo, la fuerza laboral solo crecería alrededor de 3.2%, unos 221,000 trabajadores: una brecha de casi 1.1 millones de puestos.",
      "En algunos casos, hasta 48% del trabajo rutinario y frecuente podría automatizarse por completo, pero solo si varias tecnologías trabajan juntas.",
      "El estudio propone tres movimientos: anticipar las necesidades de talento, rediseñar el trabajo a medida que crece la automatización y desarrollar habilidades de forma continua.",
      "Cuando la tecnología se combina con un rediseño deliberado de roles, el crecimiento de la plantilla pasa de +18.7% a cerca de -3.0% en el periodo."
    ],
    puntos_en: [
      "Demand in core supply chain occupations will grow by 1.34 million roles (19%) between 2026 and 2035.",
      "Over the same period, the labor force would grow only about 3.2%, or roughly 221,000 workers: a gap of nearly 1.1 million roles.",
      "In some cases, up to 48% of routine, high-frequency work could be fully automated, but only when several technologies work together.",
      "The study proposes three moves: build talent foresight, redesign work as autonomy scales, and build skills continuously.",
      "When technology is paired with deliberate role redesign, workforce growth compresses from +18.7% to about -3.0% over the period."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-deloitte-agentic",
    industria: null,
    tema: "ia_personas",
    subtema: "IA y trabajo",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2025-12-10",
    anio: "2025",
    fuente: "Deloitte",
    estudio_es: "Tech Trends 2026: The agentic reality check",
    estudio_en: "Tech Trends 2026: The agentic reality check",
    link: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/agentic-ai-strategy.html",
    region_es: "Global",
    region_en: "Global",
    hallazgo_es: "Solo 11% de las organizaciones ya usa agentes de IA en producción, y 35% ni siquiera tiene una estrategia formal",
    hallazgo_en: "Only 11% of organizations are already using AI agents in production, and 35% don't even have a formal strategy",
    dato_clave_es: "30% está explorando agentes, 38% tiene pilotos, 14% tiene soluciones listas para desplegar y 11% las usa en producción. 42% sigue armando su hoja de ruta.",
    dato_clave_en: "30% are exploring agents, 38% are piloting, 14% have solutions ready to deploy and 11% use them in production. 42% are still building their roadmap.",
    contexto_es: "Capítulo del informe Tech Trends 2026 de Deloitte. Combina datos de la encuesta Emerging Technology Trends 2025 de Deloitte con entrevistas a ejecutivos de empresas como HPE, Dell, Toyota, Mapfre y Moderna.",
    contexto_en: "Chapter of Deloitte's Tech Trends 2026 report. It combines data from Deloitte's 2025 Emerging Technology Trends survey with interviews with executives at companies such as HPE, Dell, Toyota, Mapfre and Moderna.",
    puntos_es: [
      "30% de las organizaciones está explorando agentes de IA, 38% tiene pilotos, 14% tiene soluciones listas para desplegar y solo 11% los usa en producción.",
      "42% sigue desarrollando su hoja de ruta para agentes y 35% no tiene ninguna estrategia formal.",
      "Casi la mitad cita la búsqueda (48%) y la reutilización (47%) de datos como desafíos para su estrategia de automatización con IA.",
      "El principal tropiezo: automatizar procesos diseñados para personas en lugar de rediseñar el trabajo de punta a punta.",
      "Moderna unió sus áreas de Recursos Humanos y Tecnología bajo un mismo liderazgo para planificar el trabajo, sea hecho por personas o por tecnología."
    ],
    puntos_en: [
      "30% of organizations are exploring AI agents, 38% are piloting, 14% have solutions ready to deploy and only 11% use them in production.",
      "42% are still developing their agentic roadmap and 35% have no formal strategy at all.",
      "Nearly half cite data searchability (48%) and reusability (47%) as challenges to their AI automation strategy.",
      "The main stumbling block: automating processes designed for people instead of redesigning work end to end.",
      "Moderna combined its Human Resources and Technology functions under one leader to plan work, whether done by people or by technology."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-mckinsey-inversionistas",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Comunicación",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-06-29",
    anio: "2026",
    fuente: "McKinsey & Company",
    estudio_es: "What a new investor survey reveals about consensus estimates",
    estudio_en: "What a new investor survey reveals about consensus estimates",
    link: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/what-a-new-investor-survey-reveals-about-consensus-estimates",
    region_es: "Norteamérica y Europa",
    region_en: "North America and Europe",
    hallazgo_es: "62% de los inversionistas prefiere una empresa que a veces no llega a la meta pero tiene una historia de largo plazo sólida",
    hallazgo_en: "62% of investors prefer a company that occasionally misses targets but has a strong long-term story",
    dato_clave_es: "Solo 17% prefiere que la empresa cumpla siempre el consenso, y 73% lee los incumplimientos repetidos como falta de transparencia o control. Casi 9 de cada 10 quieren más tiempo de preguntas en las llamadas de resultados. Encuesta a 112 inversionistas.",
    dato_clave_en: "Only 17% prefer a company that always meets consensus, and 73% read repeated misses as a lack of transparency or control. Nearly 9 in 10 want more Q&A time on earnings calls. Survey of 112 investors.",
    contexto_es: "Encuesta global de McKinsey a 112 inversionistas, en su mayoría de largo plazo, de Norteamérica y Europa, realizada entre el 20 de enero y el 9 de febrero de 2026.",
    contexto_en: "McKinsey global survey of 112 mostly long-term investors in North America and Europe, conducted between January 20 and February 9, 2026.",
    puntos_es: [
      "59% considera importante o muy importante que una empresa cumpla o supere el consenso de resultados.",
      "Pero 62% prefiere \"incumplimientos ocasionales con una sólida creación de valor de largo plazo\"; solo 17% prefiere el cumplimiento constante.",
      "73% lee los incumplimientos repetidos como señal negativa de transparencia o control.",
      "Casi 9 de cada 10 quieren más tiempo de preguntas en las llamadas de resultados, y las presentaciones más ensayadas son la mejora menos pedida.",
      "47% ya usa IA generativa con frecuencia en su análisis, lo que hace más visibles las inconsistencias entre documentos."
    ],
    puntos_en: [
      "59% consider meeting or beating consensus important or very important.",
      "Yet 62% prefer \"occasional misses but strong long-term value creation\"; only 17% prefer consistently meeting consensus.",
      "73% read repeated misses as a negative signal of transparency or control.",
      "Nearly 9 in 10 want more Q&A time on earnings calls, and more rehearsed presentations rank as the least requested improvement.",
      "47% already use generative AI often in due diligence, which makes inconsistencies across documents more visible."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-deloitte-consumo-eeuu",
    industria: "consumo_masivo",
    tema: null,
    subtema: null,
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-09-29",
    anio: "2026",
    fuente: "Deloitte",
    estudio_es: "United States Economic Forecast Q3 2026",
    estudio_en: "United States Economic Forecast Q3 2026",
    link: "https://www.deloitte.com/us/en/insights/topics/economy/us-economic-forecast/united-states-outlook-analysis.html",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "En EE.UU., el consumo crece más rápido que los ingresos, y el ahorro de las familias lleva meses en 3% o menos",
    hallazgo_en: "In the US, consumer spending is growing faster than income, and household savings have sat at 3% or less for months",
    dato_clave_es: "En julio, el gasto de consumo creció 5.9% interanual frente a 4.5% del ingreso disponible. La tasa de ahorro está en 3% o menos desde abril de 2026, algo que antes solo pasó en 41 de 807 meses con datos.",
    dato_clave_en: "In July, consumer spending grew 5.9% year over year versus 4.5% for disposable income. The saving rate has been at 3% or lower since April 2026, which had happened in only 41 of 807 months on record.",
    contexto_es: "Pronóstico económico trimestral de Deloitte para Estados Unidos (tercer trimestre de 2026), basado principalmente en datos oficiales del gobierno de EE.UU.",
    contexto_en: "Deloitte's quarterly US economic forecast (Q3 2026), based mainly on official US government data.",
    puntos_es: [
      "En julio, el gasto de consumo creció 5.9% interanual en términos nominales, frente a 4.5% del ingreso disponible y 3.5% de los salarios.",
      "El gasto viene creciendo más rápido que los ingresos desde junio de 2024, y la brecha se amplió este año.",
      "La tasa de ahorro personal está en 3% o menos desde abril de 2026; antes solo había pasado en 41 de 807 meses con datos.",
      "Deloitte proyecta que el consumo real crezca 2% en 2026 y se desacelere a 1.4% en 2027.",
      "El estudio aclara que no necesariamente hay una burbuja, pero que tasas de ahorro tan bajas son poco comunes."
    ],
    puntos_en: [
      "In July, nominal consumer spending grew 5.9% year over year, versus 4.5% for disposable income and 3.5% for wages.",
      "Spending has outpaced income since June 2024, and the gap widened this year.",
      "The personal saving rate has been at 3% or lower since April 2026; that had happened in only 41 of 807 months on record.",
      "Deloitte projects real consumer spending to grow 2% in 2026 and slow to 1.4% in 2027.",
      "The study notes this is not necessarily an asset bubble, but such low saving rates are unusual."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-ey-tiendas",
    industria: "consumo_masivo",
    tema: null,
    subtema: null,
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2025-06-25",
    anio: "2025",
    fuente: "EY",
    estudio_es: "Future Consumer Index: Should retailers close stores or make them work harder?",
    estudio_en: "Future Consumer Index: Should retailers close stores or make them work harder?",
    link: "https://www.ey.com/en_us/insights/retail/should-retailers-close-stores-or-make-them-work-harder",
    region_es: "Global (27 países)",
    region_en: "Global (27 countries)",
    hallazgo_es: "94% de los consumidores termina decidiendo su compra en la tienda, aunque haya investigado en otros canales",
    hallazgo_en: "94% of consumers end up making their purchase decision in store, even after browsing other channels",
    dato_clave_es: "Las ventas fuera de línea bajarían de 77% a 73% del total minorista entre 2025 y 2028, pero la tienda sigue siendo el canal dominante. 45% descubre marcas nuevas en tienda. Encuesta a más de 20,000 consumidores.",
    dato_clave_en: "Offline sales would drop from 77% to 73% of total retail between 2025 and 2028, but the store remains the dominant channel. 45% discover new brands in store. Survey of more than 20,000 consumers.",
    contexto_es: "Análisis de EY basado en su Future Consumer Index, una encuesta a más de 20,000 consumidores en 27 países, complementado con datos de Euromonitor y del EY AI Sentiment Index. Publicado en junio de 2025.",
    contexto_en: "EY analysis based on its Future Consumer Index, a survey of more than 20,000 consumers in 27 countries, complemented with Euromonitor data and the EY AI Sentiment Index. Published in June 2025.",
    puntos_es: [
      "94% de los consumidores toma su decisión de compra en la tienda después de explorar en distintos canales.",
      "La participación de las ventas físicas bajaría de 77% en 2025 a 73% en 2028, pero la tienda seguiría siendo el canal dominante.",
      "45% descubre marcas nuevas en tienda y 24% descubre productos nuevos gracias a demostraciones en tienda.",
      "60% de los consumidores ya usa IA para comprar, sobre todo para atención al cliente.",
      "El estudio plantea que las tiendas se conviertan en espacios de experiencia y servicio: salud, asesoría, reparación, alquiler y reventa."
    ],
    puntos_en: [
      "94% of consumers make their purchase decision in store after browsing across channels.",
      "The share of offline sales would fall from 77% in 2025 to 73% in 2028, but the store would remain the dominant channel.",
      "45% discover new brands in store and 24% discover new products through in-store demonstrations.",
      "60% of consumers already use AI to shop, mostly for customer service.",
      "The study suggests turning stores into experience and service hubs: health, advice, repair, rental and resale."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-deloitte-human-capital",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Cultura",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-03-04",
    anio: "2026",
    fuente: "Deloitte",
    estudio_es: "2026 Global Human Capital Trends",
    estudio_en: "2026 Global Human Capital Trends",
    link: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends.html",
    region_es: "Global (89 países)",
    region_en: "Global (89 countries)",
    hallazgo_es: "7 de cada 10 líderes dicen que su principal estrategia para los próximos tres años es ser rápidos y ágiles",
    hallazgo_en: "7 in 10 leaders say their main strategy for the next three years is to be fast and nimble",
    dato_clave_es: "Encuesta a más de 9,000 líderes de negocio y de RR.HH. En una investigación complementaria, 59% de los líderes C-level tiene un enfoque de IA centrado en la tecnología, y esas empresas tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno que las que ponen a las personas al centro.",
    dato_clave_en: "Survey of more than 9,000 business and HR leaders. In complementary research, 59% of C-suite leaders take a tech-focused approach to AI, and those companies are 1.6 times more likely to miss their return expectations than those with a human-centric approach.",
    contexto_es: "Informe anual de Deloitte, elaborado con Oxford Economics: encuesta a más de 9,000 líderes de negocio y de RR.HH. en 89 países, complementada con encuestas a colaboradores, gerentes y ejecutivos y más de 50 entrevistas.",
    contexto_en: "Deloitte's annual report, produced with Oxford Economics: a survey of more than 9,000 business and HR leaders in 89 countries, complemented by worker, manager and executive surveys and more than 50 interviews.",
    puntos_es: [
      "7 de cada 10 líderes dicen que su principal estrategia competitiva para los próximos tres años es ser rápidos y ágiles.",
      "En una investigación complementaria con 100 líderes C-level, 59% tiene un enfoque de IA centrado en la tecnología.",
      "Esas empresas tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno de la IA que las que ponen a las personas al centro.",
      "El informe identifica tres puntos de inflexión: de humano + máquina a humano x máquina, de eficiencia a creación de valor, y de planes estáticos a orquestación dinámica.",
      "Uno de sus capítulos describe la \"deuda cultural\" que se acumula cuando la IA cambia el trabajo sin conversaciones sobre esfuerzo, autoría y confianza."
    ],
    puntos_en: [
      "7 in 10 leaders say their primary competitive strategy for the next three years is to be fast and nimble.",
      "In complementary research with 100 C-suite leaders, 59% take a tech-focused approach to AI.",
      "Those companies are 1.6 times more likely not to see AI returns that exceed expectations than those with a human-centric approach.",
      "The report identifies three tipping points: from human + machine to human x machine, from cost efficiency to value creation, and from static plans to dynamic orchestration.",
      "One chapter describes the \"cultural debt\" that builds up when AI changes work without conversations about effort, ownership and trust."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },

  // ---------- Conectar ----------
  {
    id: "h-2026-10-pwc-fs-cambio",
    industria: "servicios_financieros",
    tema: "gestion_cambio",
    subtema: "Adopción",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-08-03",
    anio: "2026",
    fuente: "PwC",
    estudio_es: "2026 Financial Services Workforce AI Survey",
    estudio_en: "2026 Financial Services Workforce AI Survey",
    link: "https://www.pwc.com/us/en/industries/financial-services/library/ai-workforce-gap-financial-services.html",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "En servicios financieros, 4 de cada 10 líderes dicen que su gente se siente abrumada por el ritmo del cambio con IA",
    hallazgo_en: "In financial services, 4 in 10 leaders say their people feel overwhelmed by the pace of AI-driven change",
    dato_clave_es: "44% dice que sus colaboradores temen perder su trabajo o que su rol cambie, 43% que solo usan IA cuando se les exige y 40% que se sienten abrumados. 34% señala la fatiga de cambio como barrera para escalar la IA. Encuesta a 1,004 líderes, mayo de 2026.",
    dato_clave_en: "44% say employees fear losing their jobs or seeing their roles change, 43% that they use AI only when required, and 40% that they feel overwhelmed. 34% cite change fatigue as a barrier to scaling AI. Survey of 1,004 leaders, May 2026.",
    contexto_es: "Encuesta de PwC a 1,004 ejecutivos (nivel director o superior) de firmas de servicios financieros de EE.UU. con ingresos de al menos US$500 millones, realizada del 12 al 22 de mayo de 2026. Incluye gestión de activos, banca, seguros y private equity.",
    contexto_en: "PwC survey of 1,004 executives (director level or above) at US financial services firms with at least US$500 million in revenue, conducted May 12–22, 2026. Covers asset management, banking, insurance and private equity.",
    puntos_es: [
      "44% dice que sus colaboradores temen perder su trabajo o que su rol cambie por la IA.",
      "43% dice que su gente usa IA solo cuando se le exige, no por iniciativa propia.",
      "40% dice que sus colaboradores se sienten abrumados por el ritmo del cambio.",
      "34% señala la fatiga de cambio como una barrera clave para escalar la IA.",
      "90% cree que las firmas deben acostumbrarse a moverse rápido, y 77% siente que su organización no va al ritmo de la innovación en IA."
    ],
    puntos_en: [
      "44% say employees are concerned about job security or role changes from AI.",
      "43% say their people use AI only when required, not proactively.",
      "40% say employees feel overwhelmed by the pace of change.",
      "34% cite change fatigue as a key barrier to scaling AI.",
      "90% believe firms need to get comfortable moving quickly, and 77% feel their organization isn't keeping pace with AI innovation."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-pwc-fs-ia",
    industria: "servicios_financieros",
    tema: "ia_personas",
    subtema: "Rediseño de roles y habilidades",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-08-03",
    anio: "2026",
    fuente: "PwC",
    estudio_es: "2026 Financial Services Workforce AI Survey",
    estudio_en: "2026 Financial Services Workforce AI Survey",
    link: "https://www.pwc.com/us/en/industries/financial-services/library/ai-workforce-gap-financial-services.html",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "8 de cada 10 líderes financieros esperan que su plantilla sea al menos 20% más pequeña en cinco años",
    hallazgo_en: "8 in 10 financial services leaders expect their workforce to be at least 20% smaller within five years",
    dato_clave_es: "De quienes ya proyectaron el impacto de la IA, solo la mitad analizó cómo rediseñar procesos o flujos de trabajo. 91% está subiendo la compensación de quienes tienen habilidades en IA. Los puestos de entrada (30%) y la gerencia media (26%) se ven como los más expuestos.",
    dato_clave_en: "Of those who have modeled AI's impact, only half have looked at redesigning processes or workflows. 91% are raising pay for employees with AI skills. Entry-level roles (30%) and middle management (26%) are seen as the most exposed.",
    contexto_es: "Encuesta de PwC a 1,004 ejecutivos (nivel director o superior) de firmas de servicios financieros de EE.UU. con ingresos de al menos US$500 millones, realizada del 12 al 22 de mayo de 2026.",
    contexto_en: "PwC survey of 1,004 executives (director level or above) at US financial services firms with at least US$500 million in revenue, conducted May 12–22, 2026.",
    puntos_es: [
      "Casi 8 de cada 10 esperan que su plantilla se reduzca al menos 20% en los próximos cinco años.",
      "42% ya hizo un modelo de alto nivel del impacto de la IA en toda la empresa, pero solo la mitad de quienes modelan analizó cómo rediseñar procesos.",
      "Los puestos de entrada (30%) y la gerencia media (26%) se ven como los más expuestos.",
      "91% está subiendo la compensación de quienes tienen habilidades en IA y 86% cree que, para muchos nuevos ingresos, formarse en IA vale más que un MBA.",
      "62% planea contratar talento con habilidades en IA y 61% planea capacitar o reconvertir a su gente actual."
    ],
    puntos_en: [
      "Nearly 8 in 10 expect their workforce to shrink by at least 20% over the next five years.",
      "42% have done high-level enterprise-wide modeling of AI's impact, but only half of those modeling have looked at redesigning processes.",
      "Entry-level roles (30%) and middle management (26%) are seen as the most vulnerable.",
      "91% are raising pay for employees with AI skills, and 86% believe AI training is worth more than an MBA for many new hires.",
      "62% plan to hire people with AI skills and 61% plan to upskill or reskill current employees."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-bain-life-sciences",
    industria: "life_sciences",
    tema: "liderazgo_cultura",
    subtema: "Comunicación interna",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-02-11",
    anio: "2026",
    fuente: "Bain & Company",
    estudio_es: "Life Sciences' AI Momentum Requires a Workforce Redesign",
    estudio_en: "Life Sciences' AI Momentum Requires a Workforce Redesign",
    link: "https://www.bain.com/insights/life-sciences-ai-momentum-requires-a-workforce-redesign-snap-chart/",
    region_es: "Global",
    region_en: "Global",
    hallazgo_es: "En ciencias de la vida, 80% de las empresas que escalan IA comunica una visión clara de cómo cambiarán los roles; entre las que recién exploran, solo 7%",
    hallazgo_en: "In life sciences, 80% of companies scaling AI communicate a clear vision of how roles will change; among early explorers, only 7%",
    dato_clave_es: "Solo 20% de las que escalan ha convertido esa visión en decisiones a nivel de empresa. Más de la mitad ya capacitó a su gente, contrató talento en IA o movió personas entre áreas, frente a 20% o menos de las que recién exploran. Encuesta a 133 ejecutivos.",
    dato_clave_en: "Only 20% of scalers have turned that vision into enterprise decisions. More than half have upskilled their people, hired AI talent or moved people across functions, versus 20% or fewer of early explorers. Survey of 133 executives.",
    contexto_es: "Gráfico de investigación de Bain & Company basado en su encuesta Scaling AI in Life Sciences a 133 ejecutivos del sector, realizada en el cuarto trimestre de 2025.",
    contexto_en: "Bain & Company research chart based on its Scaling AI in Life Sciences survey of 133 industry executives, conducted in Q4 2025.",
    puntos_es: [
      "80% de las empresas que escalan IA con éxito comunica una visión clara de cómo evolucionarán los roles, las habilidades y los equipos híbridos.",
      "Entre las empresas que recién exploran la IA, solo 7% lo hace.",
      "Aun así, solo 20% de las que escalan ha convertido esa visión en decisiones a nivel de toda la empresa.",
      "Más de la mitad de las que escalan ya capacitó a su gente, contrató talento en IA o movió personas entre áreas, frente a 20% o menos de las que exploran.",
      "La escasez global de talento en IA sigue siendo uno de los mayores obstáculos para escalar."
    ],
    puntos_en: [
      "80% of companies successfully scaling AI communicate a clear vision of how roles, skills and hybrid teams will evolve.",
      "Among early AI explorers, only 7% do.",
      "Even so, only 20% of scalers have translated that vision into enterprise-wide decisions.",
      "More than half of scalers have upskilled their people, hired AI talent or shifted people across functions, versus 20% or fewer of explorers.",
      "The global scarcity of AI talent remains one of the biggest obstacles to scaling."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-deloitte-consumo-ia",
    industria: "consumo_masivo",
    tema: "ia_personas",
    subtema: "Rediseño de roles y habilidades",
    esEjemplo: false,
    publicado: "2026-10-21",
    fecha: "2026-03-01",
    anio: "2026",
    fuente: "Deloitte AI Institute",
    estudio_es: "State of AI in the Consumer Industry",
    estudio_en: "State of AI in the Consumer Industry",
    link: "https://www.deloitte.com/content/dam/assets-shared/docs/about/2026/state-of-ai-consumer.pdf",
    region_es: "Global (24 países)",
    region_en: "Global (24 countries)",
    hallazgo_es: "82% de las empresas de consumo no ha rediseñado sus puestos en torno a la IA, aunque ya duplicó el acceso a herramientas",
    hallazgo_en: "82% of consumer companies haven't redesigned jobs around AI, even though they've doubled access to AI tools",
    dato_clave_es: "En un año, el acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores, pero solo 25% de quienes tienen acceso la usa en más del 60% de su trabajo diario. Encuesta a 963 líderes de empresas de consumo.",
    dato_clave_en: "In one year, access to sanctioned AI tools went from under 30% to around 60% of workers, but only 25% of those with access use it in more than 60% of their daily work. Survey of 963 consumer-industry leaders.",
    contexto_es: "Edición para la industria de consumo del informe State of AI in the Enterprise del Deloitte AI Institute (marzo de 2026), basada en 963 líderes de negocio y de TI de empresas de consumo, dentro de una encuesta de 3,235 ejecutivos en 24 países realizada entre agosto y septiembre de 2025.",
    contexto_en: "Consumer-industry edition of the Deloitte AI Institute's State of AI in the Enterprise report (March 2026), based on 963 business and IT leaders at consumer companies, within a survey of 3,235 executives in 24 countries conducted in August–September 2025.",
    puntos_es: [
      "En un año, el acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores.",
      "Pero solo 25% de quienes tienen acceso usa la IA en más del 60% de su trabajo diario.",
      "82% no ha rediseñado los puestos ni la naturaleza del trabajo en torno a la IA; 54% se enfoca sobre todo en educar a su gente.",
      "Entre colaboradores no técnicos, 13% está muy entusiasmado con la IA, 56% está abierto a explorarla, 19% solo la usa si se lo exigen y 5% desconfía y la evita.",
      "73% planea usar agentes de IA en dos años, pero solo 20% tiene un modelo maduro para gobernarlos."
    ],
    puntos_en: [
      "In one year, access to sanctioned AI tools went from under 30% to around 60% of workers.",
      "But only 25% of those with access use AI in more than 60% of their daily work.",
      "82% haven't redesigned jobs or the nature of work around AI; 54% focus mainly on educating their people.",
      "Among non-technical workers, 13% are highly enthusiastic about AI, 56% are open to exploring it, 19% use it only if required and 5% actively distrust and avoid it.",
      "73% plan to deploy AI agents within two years, but only 20% have a mature model to govern them."
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
];
