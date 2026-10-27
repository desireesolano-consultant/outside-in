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
      "Soy Desirée Solano y acompaño a empresas en transformaciones de negocio que terminan impactando en sus personas: en sus estrategias internas, su cultura, sus formas de trabajar y su comunicación. En ese rol hay algo que considero esencial: ver la foto completa. Quien asesora a una organización necesita saber qué está pasando más allá de su cliente, conocer las tendencias que mueven a las industrias y ser una fuente de información a la que valga la pena acudir. Outside-In nace de esa convicción.",
      "Creé Outside-In para reunir **en un solo lugar** las miradas y los datos de valor que se publican sobre las organizaciones. Al leerlos en conjunto, se obtiene una visión que ningún estudio ofrece por sí solo: **un contexto más amplio** para entender lo que está pasando y anticipar hacia dónde se dirigen las organizaciones. Funciona sobre un sistema que construí con Claude Code: **cada semana** identifica estudios nuevos, verifica sus datos en la **fuente original** y publica los que cumplen **mis criterios**.",
      "No pretende decirte qué hacer. Es un espacio para mantenerte informado, encontrar el insight que te interese y llevarlo a las conversaciones que importan: sobre la estrategia, el rumbo y la comunicación de tu propia organización.",
      "Las organizaciones que mejor se transforman son las que se mantienen curiosas y entienden su contexto antes de que el cambio las alcance. Outside-In está pensado para quienes lideran así.",
    ],
    firma_nombre: "Desirée Solano",
    firma_cargo: "Consultora en estrategia de comunicación y transformación",
  },
  en: {
    parrafos: [
      "Understanding the context is what allows an organization to look at itself and know where it stands on its path.",
      "I'm Desiree Solano, and I work with companies through business transformations that end up impacting their people: their internal strategies, their culture, their ways of working, and their communication. In that role, there's something I consider essential: seeing the full picture. Anyone advising an organization needs to know what's happening beyond their client, understand the trends moving industries, and be a source of information worth turning to. Outside-In was born from that conviction.",
      "I created Outside-In to bring together **in one place** the perspectives and valuable data published about organizations. Read together, they offer a view that no single study provides on its own: **a broader context** to understand what is happening and anticipate where organizations are heading. It runs on a system I built with Claude Code: **every week** it identifies new studies, verifies their data against the **original source**, and publishes those that meet **my criteria**.",
      "It doesn't aim to tell you what to do. It's a space to stay informed, find the insight that matters to you, and bring it into the conversations that count: about the strategy, direction, and communication of your own organization.",
      "The organizations that transform best are the ones that stay curious and understand their context before change catches up with them. Outside-In is built for those who lead that way.",
    ],
    firma_nombre: "Desiree Solano",
    firma_cargo: "Communication Strategy & Transformation Consultant",
  },
};

const LINK_LINKEDIN = "https://www.linkedin.com/in/desiree-solano-baba59131/";

// Cita destacada del banner. Es la misma frase real de la carta de
// bienvenida (INTRO), no un texto nuevo.
const CITA_BANNER = {
  es: "Más que darte respuestas, busco darte el contexto para que encuentres tu propio camino.",
  en: "More than giving you answers, I aim to give you the context to find your own path.",
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
    articulo_es: {
      "bajada": "Las cadenas de suministro crecen más rápido que la gente disponible para operarlas. Accenture calcula la brecha y propone dejar de escalar a punta de contrataciones.",
      "parrafos": [
        "Durante décadas, la respuesta a una cadena de suministro más compleja fue sumar personas. Accenture sostiene que esa fórmula se agotó: su modelo proyecta que la demanda en ocupaciones clave de supply chain en EE.UU. crecerá 19% entre 2026 y 2035, mientras la fuerza laboral apenas crecerá 3.2%. La diferencia es de casi 1.1 millones de puestos.",
        "El estudio insiste en que no es un problema cíclico que se resolverá cuando la economía se enfríe. Las mismas fuerzas que expanden las cadenas (más nodos, más promesas al cliente, más regulación) agregan coordinación dentro de cada rol. Incluso con una fuerza laboral más grande, la brecha no se cerraría si el crecimiento sigue dependiendo de sumar gente al mismo ritmo.",
        "La alternativa que plantea es escalar con inteligencia en lugar de con más personal: que los sistemas absorban el trabajo transaccional y las personas se concentren donde hace falta criterio. En algunos casos, hasta 48% del trabajo rutinario podría automatizarse por completo, pero solo cuando varias tecnologías funcionan en conjunto. Con tecnología y un rediseño deliberado de roles, el modelo muestra que el crecimiento de la plantilla pasa de +18.7% a cerca de -3.0%.",
        "Lo más interesante está en las implicancias para el liderazgo. Según Accenture, la planificación del talento no puede quedarse solo en Recursos Humanos, y el rediseño del trabajo es el momento en que se gana o se pierde la confianza: las personas necesitan claridad sobre cómo cambiará su trabajo y dónde seguirá importando el juicio humano. El estudio reparte los roles: el líder de supply chain define el trabajo y el de Recursos Humanos prepara a la gente para hacerlo.",
        "La capacitación tampoco funciona como un evento único. El estudio propone un aprendizaje continuo, ligado a cómo cambia cada rol y a oportunidades reales de movilidad, porque la reconversión no escala si las personas no ven que les abre un camino profesional."
      ]
    },
    articulo_en: {
      "bajada": "Supply chains are growing faster than the people available to run them. Accenture sizes the gap and argues for no longer scaling through hiring.",
      "parrafos": [
        "For decades, the answer to a more complex supply chain was adding people. Accenture argues that formula has run out: its model projects that demand in core US supply chain occupations will grow 19% between 2026 and 2035, while the labor force will grow just 3.2%. The difference is nearly 1.1 million roles.",
        "The study stresses this is not a cyclical problem that will ease when the economy cools. The same forces that expand supply chains (more nodes, more customer promises, more regulation) add coordination inside every role. Even a faster-growing workforce wouldn't close the gap if growth still depends on adding headcount in lockstep.",
        "Its alternative is to scale on intelligence rather than headcount: let systems absorb transaction-heavy work and let people focus where judgment is needed. In some cases, up to 48% of routine work could be fully automated, but only when several technologies work together. With technology and deliberate role redesign, the model shows workforce growth compressing from +18.7% to roughly -3.0%.",
        "The most interesting part is the leadership implications. According to Accenture, workforce planning can't sit only with Human Resources, and work redesign is where trust is built or lost: people need clarity on how their work will change and where human judgment still matters. The study splits the roles: the supply chain leader defines the work, and the HR leader equips people to do it.",
        "Training can't be a one-off event either. The study calls for continuous learning tied to how each role is changing and to real mobility, because reskilling won't scale unless people see it opening a career path."
      ]
    },
    cita: {
      "original": "Technology adoption is inevitable. Workforce redesign is the choice",
      "traduccion_es": "La adopción de tecnología es inevitable. El rediseño de la fuerza laboral es la elección",
      "autor_es": "Accenture",
      "autor_en": "Accenture"
    },
    preguntas_es: [
      "¿Quién es dueño de la planificación del talento cuando la tecnología cambia las tareas más rápido que los perfiles de puesto?",
      "¿Qué tan claro tienen hoy los equipos de operaciones en qué se va a convertir su rol?",
      "¿Se está midiendo solo la adopción de la tecnología, o también el rediseño del trabajo?"
    ],
    preguntas_en: [
      "Who owns workforce planning when technology changes tasks faster than job descriptions?",
      "How clear are operations teams today about what their role will become?",
      "Is only technology adoption being measured, or work redesign too?"
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
    articulo_es: {
      "bajada": "La IA agéntica genera entusiasmo, pero pocas organizaciones la tienen funcionando de verdad. Deloitte explica por qué y qué hacen distinto las que sí avanzan.",
      "parrafos": [
        "Gartner proyecta que para 2028 el 15% de las decisiones de trabajo del día a día se tomarán de forma autónoma con IA agéntica, frente a cero en 2024. El informe Tech Trends 2026 de Deloitte muestra la otra cara: según su encuesta de tecnologías emergentes, 38% de las organizaciones está en pilotos y apenas 11% tiene agentes funcionando en producción. Además, 35% no tiene una estrategia formal.",
        "El diagnóstico de Deloitte es que el problema rara vez es la tecnología. Las empresas intentan automatizar procesos que fueron diseñados por y para personas, en lugar de repensar cómo debería hacerse el trabajo. A eso se suman sistemas heredados que no fueron pensados para agentes y datos difíciles de encontrar (48%) y de reutilizar (47%). Gartner incluso anticipa que más de 40% de los proyectos agénticos fracasarán hacia 2027.",
        "Las organizaciones que avanzan miran los procesos de punta a punta. Toyota, por ejemplo, usa un agente para seguir la llegada de vehículos a los concesionarios, un trabajo que antes requería revisar entre 50 y 100 pantallas de mainframe. En la aseguradora Mapfre, los agentes resuelven tareas administrativas de siniestros, pero cualquier comunicación sensible con un cliente pasa por una persona.",
        "El capítulo más provocador habla de una fuerza laboral \"de silicio\" que convive con la humana. Deloitte plantea que los agentes necesitarán algo parecido a la gestión de personas: incorporación, evaluación de desempeño y hasta retiro. Moderna ya dio un paso en esa dirección al unir Recursos Humanos y Tecnología bajo un mismo liderazgo, con el argumento de que hay que planificar el trabajo, lo haga una persona o una tecnología.",
        "En ese modelo, las personas se mueven hacia dos frentes: supervisar y gobernar a los agentes, y encontrar nuevas oportunidades de crecimiento. El informe sugiere que la ventaja competitiva no estará en cuántos agentes despliega una empresa, sino en qué tan bien diseña la colaboración entre personas y agentes."
      ]
    },
    articulo_en: {
      "bajada": "Agentic AI is generating excitement, but few organizations have it truly working. Deloitte explains why, and what the ones making progress do differently.",
      "parrafos": [
        "Gartner predicts that by 2028, 15% of day-to-day work decisions will be made autonomously through agentic AI, up from none in 2024. Deloitte's Tech Trends 2026 report shows the other side: according to its emerging technology survey, 38% of organizations are piloting and only 11% have agents running in production. Another 35% have no formal strategy.",
        "Deloitte's diagnosis is that the problem is rarely the technology. Companies try to automate processes designed by and for people instead of rethinking how the work should be done. Add legacy systems that weren't built for agents and data that is hard to find (48%) and reuse (47%). Gartner even expects more than 40% of agentic projects to fail by 2027.",
        "The organizations making progress look at processes end to end. Toyota, for instance, uses an agent to track vehicles' arrival at dealerships, work that used to involve 50 to 100 mainframe screens. At insurer Mapfre, agents handle administrative claims tasks, but any sensitive customer communication goes through a person.",
        "The most provocative chapter describes a \"silicon-based\" workforce working alongside the human one. Deloitte argues agents will need something like people management: onboarding, performance management and even retirement planning. Moderna has already moved in that direction by combining Human Resources and Technology under one leader, arguing that work should be planned whether a person or a technology does it.",
        "In that model, people shift toward two fronts: overseeing and governing agents, and finding new growth opportunities. The report suggests the competitive edge won't come from how many agents a company deploys, but from how well it designs collaboration between people and agents."
      ]
    },
    cita: {
      "original": "It's hybrid by design",
      "traduccion_es": "Es híbrido por diseño",
      "autor_es": "Maribel Solanas Gonzalez, directora global de datos de Mapfre, en el informe de Deloitte",
      "autor_en": "Maribel Solanas Gonzalez, group chief data officer at Mapfre, in Deloitte's report"
    },
    preguntas_es: [
      "¿Quién acompaña a los equipos cuando una parte de su trabajo pasa a manos de un agente?",
      "¿Cómo se le explica a la gente qué decisiones siguen siendo suyas?",
      "¿Qué significa liderar un equipo donde trabajan personas y agentes?"
    ],
    preguntas_en: [
      "Who supports teams when part of their work moves to an agent?",
      "How do you explain to people which decisions are still theirs?",
      "What does it mean to lead a team made up of people and agents?"
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
    articulo_es: {
      "bajada": "Una encuesta de McKinsey a inversionistas de largo plazo desarma una creencia muy arraigada: lo que se castiga no es un número que no se cumplió, sino la pérdida de credibilidad.",
      "parrafos": [
        "Durante años, cumplir o superar el consenso de resultados fue tratado casi como una obligación. La encuesta 2026 de McKinsey a 112 inversionistas de Norteamérica y Europa matiza esa idea: aunque 59% considera importante cumplir el consenso, 62% prefiere una empresa con incumplimientos ocasionales pero una sólida creación de valor de largo plazo. Solo 17% elige el cumplimiento constante.",
        "La asimetría es reveladora. Cuando una empresa supera las estimaciones de forma sistemática, solo 49% lo lee como una buena señal y 22% sospecha que la guía era conservadora. Pero cuando incumple una y otra vez, 73% lo interpreta como un problema de transparencia o de control. Investigaciones previas de McKinsey muestran que el precio de la acción cae tras un incumplimiento solo cuando los analistas también bajan sus proyecciones de los años siguientes; en cerca de 40% de los casos, incluso sube.",
        "El estudio describe a un inversionista que cambió de herramientas. Solo 13% considera muy importante el análisis de los bancos de inversión, y 33% dice que confía menos en él que hace cinco años. En cambio, 47% usa IA generativa con frecuencia en su análisis: las inconsistencias entre un reporte y otro, que antes pasaban desapercibidas, hoy se detectan de forma sistemática.",
        "¿Qué piden? Más conversación y menos guion. Casi nueve de cada diez quieren más tiempo de preguntas en las llamadas de resultados, ocho de cada diez quieren más ejecutivos presentes, y las presentaciones más ensayadas quedan últimas en la lista. Para 86%, la profundidad y el detalle de la información es lo que más distingue una buena comunicación, y 73% pide más análisis por segmento de negocio.",
        "Aunque el estudio habla de relación con inversionistas, sus conclusiones describen una comunicación de liderazgo efectiva en general: una estrategia de largo plazo explicada con claridad, malas noticias anticipadas con rangos concretos y un historial de compromisos que cualquiera puede verificar."
      ]
    },
    articulo_en: {
      "bajada": "A McKinsey survey of long-term investors challenges a deep-rooted belief: what gets punished isn't a missed number, but lost credibility.",
      "parrafos": [
        "For years, meeting or beating consensus was treated almost as an obligation. McKinsey's 2026 survey of 112 investors in North America and Europe nuances that idea: while 59% consider meeting consensus important, 62% prefer a company with occasional misses but strong long-term value creation. Only 17% choose consistently meeting consensus.",
        "The asymmetry is revealing. When a company consistently beats estimates, only 49% read it as a positive signal and 22% suspect conservative guidance. But when it misses again and again, 73% see a problem of transparency or control. Earlier McKinsey research shows share prices fall after a miss only when analysts also cut their forecasts for the following years; in about 40% of cases, prices actually rise.",
        "The study describes investors who have changed their tools. Only 13% consider sell-side research very important, and 33% say they rely on it less than five years ago. Meanwhile, 47% use generative AI often in their analysis: inconsistencies between one report and the next, which once went unnoticed, are now caught systematically.",
        "What do they want? More conversation and less script. Nearly nine in ten want more Q&A time on earnings calls, eight in ten want more executives present, and more rehearsed presentations rank last. For 86%, depth and specificity of information is the biggest differentiator, and 73% want more segment-level analysis.",
        "Although the study is about investor relations, its conclusions describe effective leadership communication in general: a clearly explained long-term strategy, bad news flagged early with concrete ranges, and a track record of commitments anyone can verify."
      ]
    },
    cita: {
      "original": "a market that uses consensus as a lens into management credibility",
      "traduccion_es": "un mercado que usa el consenso como una lente de la credibilidad de la gerencia",
      "autor_es": "McKinsey & Company",
      "autor_en": "McKinsey & Company"
    },
    preguntas_es: [
      "¿Qué historial de compromisos cumplidos tiene hoy un equipo directivo, puertas adentro y puertas afuera?",
      "Si la IA puede comparar cada mensaje con el anterior, ¿qué tan consistente es el relato de una empresa?",
      "¿Cuánto espacio real para preguntas tienen los encuentros de los líderes con sus equipos?"
    ],
    preguntas_en: [
      "What track record of kept commitments does a leadership team have today, inside and outside the company?",
      "If AI can compare every message with the last one, how consistent is a company's story?",
      "How much real room for questions do leaders' meetings with their teams allow?"
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
    articulo_es: {
      "bajada": "El consumidor estadounidense sigue gastando, pero con un colchón cada vez más delgado. El pronóstico de Deloitte anticipa un ajuste.",
      "parrafos": [
        "La economía de EE.UU. mantiene un crecimiento relativamente sólido (el PIB real subió 2.1% interanual en el segundo trimestre), impulsado sobre todo por la inversión en inteligencia artificial y por el efecto riqueza de las subidas en la bolsa. Pero debajo de esa fortaleza hay una señal que Deloitte mira con atención: el consumo crece más rápido que lo que ganan las familias.",
        "En julio, el gasto de consumo nominal creció 5.9% interanual, mientras el ingreso disponible subió 4.5% y los salarios 3.5%. Esa brecha existe desde junio de 2024 y se amplió este año. El resultado es una tasa de ahorro personal de 3% o menos desde abril de 2026, algo que solo había ocurrido en 41 de los 807 meses con datos, casi todos entre 2005 y 2008.",
        "Deloitte aclara que eso no significa necesariamente una burbuja, pero espera que el gasto se alinee con los ingresos en los próximos trimestres, y que el ajuste venga por el lado del gasto: los salarios por hora se desaceleran y la demografía limita el crecimiento del empleo. Su proyección es que el consumo real crezca 2% en 2026 y se desacelere a 1.4% en 2027.",
        "El contexto suma presión: inflación por encima de la meta (el índice de precios PCE subyacente subió 3.4% en agosto), una Reserva Federal que volvió a subir tasas en septiembre e hipotecas a 30 años que seguirían por encima de 6.5% hasta fines de 2027. En su escenario más pesimista, con una corrección de 35% en la bolsa, el desempleo llegaría a 7.2%.",
        "Para el consumo masivo, la lectura es de cautela: el comprador que hoy sostiene las ventas lo hace gastando más de lo que gana, y Deloitte no ve ese ritmo como sostenible. Son datos de Estados Unidos, pero marcan el pulso del mercado de consumo más grande del mundo."
      ]
    },
    articulo_en: {
      "bajada": "US consumers are still spending, but with a thinner and thinner cushion. Deloitte's forecast anticipates an adjustment.",
      "parrafos": [
        "The US economy is still growing at a relatively strong pace (real GDP was up 2.1% year over year in the second quarter), driven mainly by AI-related business investment and the wealth effect of rising stock prices. But beneath that strength there's a signal Deloitte is watching closely: spending is growing faster than households earn.",
        "In July, nominal consumer spending grew 5.9% year over year, while disposable income rose 4.5% and wages 3.5%. That gap has existed since June 2024 and widened this year. The result is a personal saving rate of 3% or lower since April 2026, which had happened in only 41 of the 807 months on record, almost all between 2005 and 2008.",
        "Deloitte notes this doesn't necessarily mean a bubble, but it expects spending to realign with income in the coming quarters, with the adjustment coming from the spending side: hourly wage growth is slowing and demographics limit job growth. Its forecast has real consumer spending growing 2% in 2026 and slowing to 1.4% in 2027.",
        "The context adds pressure: inflation above target (core PCE prices were up 3.4% in August), a Federal Reserve that raised rates again in September, and 30-year mortgages expected to stay above 6.5% through the end of 2027. In its downside scenario, with a 35% equity-market correction, unemployment would reach 7.2%.",
        "For consumer goods, the takeaway is caution: the shopper sustaining sales today is spending more than they earn, and Deloitte doesn't see that pace as sustainable. The data is US-only, but it takes the pulse of the world's largest consumer market."
      ]
    },
    cita: {
      "original": "such low saving rates are unusual",
      "traduccion_es": "tasas de ahorro tan bajas son inusuales",
      "autor_es": "Deloitte",
      "autor_en": "Deloitte"
    },
    preguntas_es: [
      "¿Qué pasa con los planes comerciales si el consumidor empieza a ajustar su gasto en 2027?",
      "¿Cómo se prepara a los equipos para un cambio de ciclo después de un período de crecimiento?",
      "¿Qué categorías resisten mejor cuando el ahorro de las familias está en mínimos?"
    ],
    preguntas_en: [
      "What happens to commercial plans if consumers start cutting back in 2027?",
      "How do you prepare teams for a turn in the cycle after a period of growth?",
      "Which categories hold up best when household savings are at historic lows?"
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
    articulo_es: {
      "bajada": "Mientras muchos anunciaban el fin de la tienda física, el Future Consumer Index de EY muestra que sigue siendo el lugar donde se decide la compra. Lo que cambia es para qué sirve.",
      "parrafos": [
        "Las ventas digitales crecen más rápido que las físicas, y lo seguirán haciendo. Aun así, según datos de Euromonitor citados por EY, la participación de las ventas fuera de línea solo bajaría de 77% a 73% del total minorista entre 2025 y 2028. En 2025, las tiendas físicas aportarían unos US$14.4 billones de los US$18.9 billones de ventas minoristas globales.",
        "El dato que más pesa viene de su encuesta a más de 20,000 consumidores en 27 países: 94% toma la decisión final en la tienda después de explorar en distintos canales. Y la tienda sigue siendo un lugar de descubrimiento: 45% conoce marcas nuevas ahí y 24% descubre productos gracias a demostraciones en tienda.",
        "Los hábitos cambian según la generación y la categoría. Para lo esencial, la gente sigue prefiriendo el supermercado por costumbre y confianza; en ropa, belleza y cuidado personal, en cambio, el recorrido mezcla lo digital y lo físico. Los más jóvenes buscan tiendas especializadas que ofrezcan descubrimiento y experiencia. Y la IA ya entró en la ecuación: 60% de los consumidores la usa para comprar, sobre todo en atención al cliente.",
        "La propuesta de EY es que la tienda trabaje más: espacios de experiencia, servicios de salud y nutrición, reparación, alquiler y reventa (72% intenta reparar antes que reemplazar), publicidad dentro de la tienda y centros logísticos. Pero advierte que no basta con abrir un consultorio en un supermercado: hace falta que el cliente le dé permiso a la marca para entrar en ese terreno, además de paciencia y alianzas.",
        "Un detalle de contexto: este análisis se publicó en junio de 2025, así que es una mirada de más de un año. Está en Outside-In porque el debate sobre el rol de la tienda física sigue abierto."
      ]
    },
    articulo_en: {
      "bajada": "While many were announcing the end of physical stores, EY's Future Consumer Index shows they're still where purchase decisions are made. What's changing is what they're for.",
      "parrafos": [
        "Digital sales are growing faster than physical sales, and will keep doing so. Even so, according to Euromonitor data cited by EY, the offline share of retail would only fall from 77% to 73% between 2025 and 2028. In 2025, physical stores would account for about US$14.4 trillion of US$18.9 trillion in global retail sales.",
        "The weightiest figure comes from its survey of more than 20,000 consumers in 27 countries: 94% make the final purchase decision in store after browsing across channels. And the store is still a place of discovery: 45% find new brands there and 24% discover products through in-store demonstrations.",
        "Habits vary by generation and category. For essentials, people still prefer supermarkets out of habit and trust; in clothing, beauty and personal care, the journey blends digital and physical. Younger shoppers gravitate to specialty stores that offer discovery and experience. And AI is already part of the picture: 60% of consumers use it to shop, mostly for customer service.",
        "EY's proposal is to make stores work harder: experience spaces, health and nutrition services, repair, rental and resale (72% try to repair rather than replace), retail media and fulfillment hubs. But it warns that opening a clinic in a supermarket isn't enough: customers have to give the brand permission to enter that space, and it takes patience and partnerships.",
        "A note on context: this analysis was published in June 2025, so it's more than a year old. It's on Outside-In because the debate about the role of physical stores is still open."
      ]
    },
    cita: {
      "original": "mass store closures would be a mistake",
      "traduccion_es": "los cierres masivos de tiendas serían un error",
      "autor_es": "EY",
      "autor_en": "EY"
    },
    preguntas_es: [
      "Si la tienda pasa de punto de venta a punto de experiencia, ¿qué le pasa al rol de quienes trabajan ahí?",
      "¿Cómo se mide el éxito de una tienda que inspira compras que se cierran en otro canal?",
      "¿Qué permiso real tiene una marca para ofrecer servicios nuevos a sus clientes?"
    ],
    preguntas_en: [
      "If the store shifts from point of sale to point of experience, what happens to the role of the people who work there?",
      "How do you measure the success of a store that inspires purchases completed in another channel?",
      "What real permission does a brand have to offer its customers new services?"
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
    articulo_es: {
      "bajada": "El informe de tendencias de capital humano de Deloitte llega a una conclusión incómoda para muchas estrategias de IA: la ventaja competitiva ya no está en la tecnología, sino en las personas.",
      "parrafos": [
        "Siete de cada diez líderes de negocio dicen que su principal estrategia para los próximos tres años es ser rápidos y ágiles. El problema, según Deloitte, es que la curva clásica de crecimiento (arranque lento, aceleración y meseta) se está comprimiendo: la IA acelera la subida, adelanta la meseta y obliga a saltar antes a la siguiente curva.",
        "La forma de dar ese salto también cambió. Antes alcanzaba con sumar tecnología; hoy la IA está al alcance de todos y, por lo tanto, es fácil de copiar. En una investigación con 100 líderes C-level, Deloitte encontró que 59% tiene un enfoque de IA centrado en la tecnología, y que esas empresas tienen 1.6 veces más probabilidad de no lograr retornos por encima de lo esperado que las que ponen a las personas en el centro.",
        "El informe propone tres puntos de inflexión: pasar de humano + máquina a humano x máquina (rediseñar el trabajo para que ambos se potencien), de la eficiencia de costos a la creación de valor, y de planes estáticos a una orquestación dinámica de capacidades. A partir de ahí plantea siete preguntas que los líderes ya no pueden postergar, desde quién es responsable cuando deciden personas e IA juntas hasta cómo mantenerse relevantes.",
        "Uno de los conceptos más potentes es la \"deuda cultural\": la desalineación y la desconfianza que se acumulan cuando la IA cambia el trabajo y nadie conversa sobre qué cuenta como esfuerzo, quién es dueño de un resultado o qué es justo. Según Deloitte, la mayoría de las organizaciones rara vez evalúa los efectos culturales de la IA.",
        "El informe también cuestiona la gestión del cambio tradicional: sostiene que pocas organizaciones gestionan el cambio con eficacia y que la capacitación clásica puede ser demasiado lenta para el ritmo actual. Su alternativa es aprender en el flujo del trabajo, con la propia IA como apoyo."
      ]
    },
    articulo_en: {
      "bajada": "Deloitte's human capital trends report reaches an uncomfortable conclusion for many AI strategies: competitive advantage no longer lies in technology, but in people.",
      "parrafos": [
        "Seven in ten business leaders say their primary strategy for the next three years is to be fast and nimble. The problem, according to Deloitte, is that the classic growth curve (slow start, acceleration, plateau) is compressing: AI speeds up the climb, brings the plateau sooner and forces organizations to jump to the next curve earlier.",
        "How to make that jump has changed too. Adding technology used to be enough; now AI is within everyone's reach and therefore easy to copy. In research with 100 C-suite leaders, Deloitte found that 59% take a tech-focused approach to AI, and those companies are 1.6 times more likely not to see returns that exceed expectations than those that put people at the center.",
        "The report proposes three tipping points: from human + machine to human x machine (redesigning work so each amplifies the other), from cost efficiency to value creation, and from static plans to dynamic orchestration of capabilities. From there it poses seven questions leaders can no longer defer, from who is accountable when people and AI decide together to how to stay relevant.",
        "One of the most powerful concepts is \"cultural debt\": the misalignment and distrust that build up when AI changes work and nobody talks about what counts as effort, who owns an outcome or what is fair. According to Deloitte, most organizations rarely evaluate AI's cultural effects.",
        "The report also questions traditional change management: it argues few organizations manage change effectively and classic training may be too slow for today's pace. Its alternative is learning in the flow of work, with AI itself as support."
      ]
    },
    cita: {
      "original": "Technology—especially something as increasingly ubiquitous as AI—is replicable. People aren't.",
      "traduccion_es": "La tecnología, sobre todo algo tan omnipresente como la IA, se puede replicar. Las personas no.",
      "autor_es": "Deloitte",
      "autor_en": "Deloitte"
    },
    preguntas_es: [
      "¿Quién evalúa hoy el impacto cultural de la IA dentro de una organización?",
      "¿Qué decisiones deberían seguir siendo humanas, y quién lo define?",
      "Si la capacitación tradicional es demasiado lenta, ¿cómo se aprende en el día a día?"
    ],
    preguntas_en: [
      "Who evaluates AI's cultural impact inside an organization today?",
      "Which decisions should remain human, and who decides that?",
      "If traditional training is too slow, how do people learn day to day?"
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
    articulo_es: {
      "bajada": "Las firmas financieras de EE.UU. aceleran con la IA, pero el freno está puertas adentro: personas con miedo, cansadas o que usan la tecnología solo por obligación.",
      "parrafos": [
        "La encuesta de PwC a más de mil ejecutivos de servicios financieros muestra un sector con prisa. 90% cree que las firmas deben acostumbrarse a moverse rápido en la era de la IA y 70% dice que su organización ya está acelerando para seguir siendo competitiva. Aun así, 77% siente que no va al ritmo de la innovación.",
        "Una parte del freno es regulatoria. Pero PwC apunta a otro factor que los líderes sí pueden controlar: la reticencia de los colaboradores. 44% dice que su gente teme perder el trabajo o que su rol cambie; 43%, que usa IA solo cuando se le exige; 40%, que se siente abrumada por el ritmo del cambio. Y 34% señala directamente la fatiga de cambio como una barrera para escalar la IA.",
        "Esos temores no son infundados. Casi ocho de cada diez ejecutivos esperan que su plantilla se reduzca al menos 20% en cinco años. PwC advierte, sin embargo, contra los recortes impulsivos basados en modelos que quizás no se cumplan, y sostiene que cualquier reducción debería seguir a la estrategia, no reemplazarla.",
        "Hay otra señal de cambio sin gestionar: la IA \"en la sombra\". Más de la mitad reconoce que sus colaboradores usan herramientas no aprobadas al menos de forma moderada, y 90% cree que eso genera riesgo regulatorio. Entre sus recomendaciones, PwC propone algo que parece sacado de un manual de gestión del cambio: un programa formal, con reglas claras sobre quién usa qué herramientas y para qué.",
        "Su primera recomendación es tranquilizar a la gente: aclarar expectativas, transmitir un mensaje claro de cómo se verá la organización con IA y asegurar que las personas tengan las habilidades para llegar ahí."
      ]
    },
    articulo_en: {
      "bajada": "US financial firms are speeding up on AI, but the brake is internal: people who are afraid, tired or using the technology only because they have to.",
      "parrafos": [
        "PwC's survey of more than a thousand financial services executives shows a sector in a hurry. 90% believe firms need to get comfortable moving quickly in the age of AI, and 70% say their organization is already moving faster to stay competitive. Even so, 77% feel they aren't keeping pace with innovation.",
        "Part of the brake is regulatory. But PwC points to another factor leaders can control: employee hesitancy. 44% say their people fear losing their jobs or seeing their roles change; 43% that they use AI only when required; 40% that they feel overwhelmed by the pace of change. And 34% cite change fatigue directly as a barrier to scaling AI.",
        "Those fears aren't unfounded. Nearly eight in ten executives expect their workforce to shrink by at least 20% within five years. PwC warns, however, against knee-jerk cuts based on models that may not pan out, and argues that any reduction should follow strategy, not substitute for it.",
        "There's another sign of unmanaged change: \"shadow AI\". More than half acknowledge employees use non-approved tools at least to a moderate extent, and 90% believe that creates regulatory risk. Among its recommendations, PwC proposes something straight out of a change management playbook: a formal program with clear rules on who uses which tools and for what.",
        "Its first recommendation is to reassure people: clarify expectations, give a clear message of what the AI-enabled organization will look like, and make sure people have the skills to get there."
      ]
    },
    cita: {
      "original": "Reassure your people.",
      "traduccion_es": "Tranquiliza a tu gente.",
      "autor_es": "PwC, primera recomendación del estudio",
      "autor_en": "PwC, the study's first recommendation"
    },
    preguntas_es: [
      "¿Cuánto del miedo a la IA en los equipos viene de la falta de un relato claro sobre el futuro?",
      "¿Cómo se distingue la resistencia al cambio de la fatiga de cambio?",
      "¿Qué dice el uso de IA \"en la sombra\" sobre la confianza en las herramientas oficiales?"
    ],
    preguntas_en: [
      "How much of teams' fear of AI comes from the lack of a clear story about the future?",
      "How do you tell resistance to change apart from change fatigue?",
      "What does \"shadow AI\" say about trust in official tools?"
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
    articulo_es: {
      "bajada": "Casi todas las firmas financieras ya calcularon cuánto se va a achicar su plantilla con la IA. Muy pocas diseñaron cómo será el trabajo después.",
      "parrafos": [
        "Hay una diferencia entre calcular cuántas personas se pueden recortar y diseñar la organización que realmente se va a necesitar. La encuesta de PwC muestra que 42% de los líderes financieros ya hizo un modelo de alto nivel del impacto de la IA en la capacidad de toda su organización, y casi ocho de cada diez esperan que su plantilla se reduzca al menos 20% en cinco años.",
        "Pero pocos dieron el paso siguiente. Entre quienes ya modelan, solo la mitad analizó cómo rediseñar procesos y flujos de trabajo. Y la principal barrera para escalar la IA es la calidad de los datos: 41% cita datos fragmentados o de baja calidad, lo que dificulta incluso entender qué roles y habilidades existen hoy.",
        "¿Dónde golpea más? 30% señala los puestos de entrada como los más vulnerables, seguidos por la gerencia media (26%). PwC advierte la consecuencia de largo plazo: menos puestos de entrada hoy significa un grupo más chico del que saldrán los gerentes y líderes de mañana.",
        "Mientras tanto, la IA ya se refleja en los sueldos. 91% está subiendo la compensación de quienes tienen habilidades en IA, 58% planea vincular la compensación con la productividad lograda con IA y 86% cree que, para muchos nuevos ingresos, formarse en IA vale más que un MBA. Para conseguir esas habilidades, 62% planea contratar y 61% capacitar o reconvertir a su gente actual.",
        "El retorno, eso sí, sigue en duda: 77% dice que la mayoría de sus inversiones en IA todavía no entrega un retorno medible."
      ]
    },
    articulo_en: {
      "bajada": "Nearly every financial firm has already calculated how much AI will shrink its workforce. Very few have designed what work will look like afterwards.",
      "parrafos": [
        "There's a difference between modeling how many people you can cut and designing the organization you'll actually need. PwC's survey shows 42% of financial services leaders have done high-level enterprise-wide modeling of AI's impact on workforce capacity, and nearly eight in ten expect their workforce to shrink by at least 20% within five years.",
        "But few have taken the next step. Among those modeling, only half have looked at redesigning processes and workflows. And the top barrier to scaling AI is data quality: 41% cite fragmented or low-quality data, which makes it hard even to understand which roles and skills exist today.",
        "Where does it hit hardest? 30% point to entry-level roles as the most vulnerable, followed by middle management (26%). PwC flags the long-term consequence: fewer entry-level roles today means a smaller pool from which tomorrow's managers and leaders will come.",
        "Meanwhile, AI is already showing up in paychecks. 91% are raising pay for employees with AI skills, 58% plan to tie compensation to AI-enabled productivity, and 86% believe AI training is worth more than an MBA for many new hires. To get those skills, 62% plan to hire and 61% to upskill or reskill current employees.",
        "The payoff, however, is still in question: 77% say most of their AI investments aren't yet delivering measurable ROI."
      ]
    },
    cita: {
      "original": "They're often planning for a smaller workforce—and hoping AI fills the gap.",
      "traduccion_es": "Muchas veces están planificando una fuerza laboral más pequeña, y esperando que la IA cubra el hueco.",
      "autor_es": "PwC",
      "autor_en": "PwC"
    },
    preguntas_es: [
      "Si los puestos de entrada se reducen, ¿cómo se forma la próxima generación de líderes?",
      "¿Qué rol tiene la comunicación cuando una empresa ya modeló recortes que todavía no anunció?",
      "¿Cómo cambia la cultura cuando se paga más por habilidades que no todos tienen?"
    ],
    preguntas_en: [
      "If entry-level roles shrink, how is the next generation of leaders developed?",
      "What role does communication play when a company has modeled cuts it hasn't announced yet?",
      "How does culture change when skills not everyone has are paid more?"
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
    articulo_es: {
      "bajada": "En ciencias de la vida, lo que separa a las empresas que escalan la IA de las que se quedan en pilotos no es solo la tecnología: es cuánto le cuentan a su gente sobre el futuro de sus roles.",
      "parrafos": [
        "La escasez global de talento en IA sigue siendo uno de los mayores obstáculos para escalar esta tecnología. La encuesta de Bain a 133 ejecutivos de ciencias de la vida muestra que las empresas más avanzadas no se quedan esperando a contratarlo: lo están formando.",
        "La diferencia más llamativa está en la comunicación. 80% de las empresas que escalan la IA con éxito comunica una visión clara de cómo van a evolucionar los roles, las habilidades y los equipos híbridos entre personas e IA. Entre las que recién exploran, solo 7% lo hace.",
        "Pero el estudio es honesto con sus propios líderes: tener la visión no es lo mismo que ejecutarla. Solo 20% de las empresas que escalan convirtió esa visión en decisiones concretas a nivel de toda la organización. La planificación estratégica de la fuerza laboral, concluye Bain, todavía está en una etapa temprana en toda la industria.",
        "Donde sí se ve movimiento es en el talento que ya está en casa. Más de la mitad de las empresas que escalan ya capacitó a su gente, contrató talento nuevo en IA o movió personas entre áreas; entre las que exploran, 20% o menos hizo lo mismo. En una investigación relacionada, Bain señala la falta de compromiso del liderazgo como una de las razones por las que muchas empresas no logran escalar.",
        "Es un hallazgo breve, parte de la serie de gráficos de investigación de Bain, pero pone en el centro algo que suele quedar al final de los planes: contarle a la gente hacia dónde va su trabajo."
      ]
    },
    articulo_en: {
      "bajada": "In life sciences, what separates companies scaling AI from those stuck in pilots isn't just technology: it's how much they tell their people about the future of their roles.",
      "parrafos": [
        "The global scarcity of AI talent remains one of the biggest obstacles to scaling the technology. Bain's survey of 133 life sciences executives shows the most advanced companies aren't waiting to hire it: they're building it.",
        "The most striking difference is communication. 80% of companies successfully scaling AI communicate a clear vision of how roles, skills and hybrid human-AI teams will evolve. Among early explorers, only 7% do.",
        "But the study is candid about its own leaders: having the vision isn't the same as executing it. Only 20% of scalers have turned that vision into concrete enterprise-wide decisions. Strategic workforce planning, Bain concludes, is still early across the industry.",
        "Where there is movement is with the talent already in-house. More than half of scalers have upskilled their people, hired new AI talent or shifted people across functions; among explorers, 20% or fewer have done the same. In related research, Bain points to a lack of leadership buy-in as one reason many companies fail to scale.",
        "It's a short finding, part of Bain's research chart series, but it puts at the center something that usually comes last in plans: telling people where their work is headed."
      ]
    },
    cita: {
      "original": "AI scalers aren't waiting for new talent—they're building it.",
      "traduccion_es": "Las empresas que escalan la IA no esperan nuevo talento: lo están construyendo.",
      "autor_es": "Bain & Company",
      "autor_en": "Bain & Company"
    },
    preguntas_es: [
      "¿Qué tan clara es hoy la visión que tienen los equipos sobre cómo cambiará su rol con la IA?",
      "¿Por qué cuesta tanto pasar de la visión a decisiones concretas?",
      "¿A quién le toca contar esa historia: a Recursos Humanos, a Tecnología o al negocio?"
    ],
    preguntas_en: [
      "How clear is teams' vision today of how AI will change their roles?",
      "Why is it so hard to move from vision to concrete decisions?",
      "Whose job is it to tell that story: HR, Technology or the business?"
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
    articulo_es: {
      "bajada": "Las empresas de consumo duplicaron en un año el acceso de su gente a herramientas de IA. El problema es que casi ninguna cambió la forma de trabajar.",
      "parrafos": [
        "La edición para la industria de consumo del informe State of AI in the Enterprise de Deloitte muestra un salto rápido: en un año, el porcentaje de colaboradores con acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60%. Pero acceso no es adopción: solo 25% de quienes tienen acceso usa la IA en más del 60% de su trabajo diario.",
        "La brecha se explica en buena parte por cómo se está encarando el cambio. 82% de las empresas no rediseñó los puestos ni la naturaleza del trabajo en torno a la IA. Aunque señalan la falta de habilidades como la principal barrera, menos de la mitad está haciendo ajustes importantes en su estrategia de talento, y la acción más común (54%) es educar a su gente.",
        "Al mismo tiempo, las expectativas de automatización son altas: 82% espera que al menos 10% de sus puestos se automaticen por completo en tres años, empezando por tareas de entrada como la carga de datos o la atención al cliente básica. Los líderes entrevistados se preguntan qué pasará con las carreras que empezaban justamente ahí. Y 54% ya consideró estructuras más planas, aunque solo 17% las adoptó de forma amplia.",
        "Del lado de las personas, el ánimo es mixto: entre colaboradores no técnicos, 13% está muy entusiasmado con la IA y 56% está abierto a explorarla, pero 19% la usa solo si se lo exigen y 5% desconfía y la evita. El estudio da un ejemplo concreto: un category manager que siempre decidió por experiencia ahora recibe recomendaciones de precio y surtido de la IA, y tiene que resolver cuándo confiar en ellas y cómo explicar sus decisiones.",
        "Mientras tanto, los agentes avanzan más rápido que las reglas: 73% planea usarlos en dos años, pero solo 20% tiene un modelo maduro para gobernarlos."
      ]
    },
    articulo_en: {
      "bajada": "Consumer companies doubled their people's access to AI tools in a year. The problem is that almost none changed how work gets done.",
      "parrafos": [
        "The consumer-industry edition of Deloitte's State of AI in the Enterprise report shows a fast jump: in one year, the share of workers with access to sanctioned AI tools went from under 30% to around 60%. But access isn't adoption: only 25% of those with access use AI in more than 60% of their daily work.",
        "Much of the gap comes down to how change is being approached. 82% of companies haven't redesigned jobs or the nature of work around AI. Although they cite insufficient skills as the biggest barrier, fewer than half are making significant adjustments to their talent strategy, and the most common action (54%) is educating their people.",
        "At the same time, automation expectations are high: 82% expect at least 10% of their jobs to be fully automated within three years, starting with entry-level tasks such as data entry or first-level customer support. Leaders interviewed wonder what will happen to careers that used to start there. And 54% have considered flatter structures, though only 17% have adopted them to a great extent.",
        "On the people side, sentiment is mixed: among non-technical workers, 13% are highly enthusiastic about AI and 56% are open to exploring it, but 19% use it only if required and 5% actively distrust and avoid it. The study gives a concrete example: a category manager who always decided by experience now gets AI pricing and assortment recommendations, and has to work out when to trust them and how to explain their decisions.",
        "Meanwhile, agents are moving faster than the rules: 73% plan to deploy them within two years, but only 20% have a mature model to govern them."
      ]
    },
    cita: {
      "original": "We thought we were going to automate jobs. The truth is, you're not.",
      "traduccion_es": "Creíamos que íbamos a automatizar puestos de trabajo. La verdad es que no.",
      "autor_es": "Exvicepresidente de una organización global, entrevistado por Deloitte",
      "autor_en": "Former vice president at a major global organization, interviewed by Deloitte"
    },
    preguntas_es: [
      "¿Qué hace falta para pasar de dar acceso a la IA a cambiar de verdad la forma de trabajar?",
      "Si las tareas de entrada se automatizan, ¿por dónde empiezan ahora las carreras?",
      "¿Quién acompaña al 19% que usa la IA solo porque se lo piden?"
    ],
    preguntas_en: [
      "What does it take to move from giving access to AI to truly changing how work gets done?",
      "If entry-level tasks are automated, where do careers start now?",
      "Who supports the 19% who use AI only because they're asked to?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  // ---------- Búsqueda semanal del 26 de octubre de 2026 ----------
  {
    id: "h-2026-10-deloitte-cambio",
    industria: null,
    tema: "gestion_cambio",
    subtema: "Gestión del cambio",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-10-19",
    anio: "2026",
    fuente: "Deloitte",
    estudio_es: "Estudio de Gestión del Cambio 2026: el retorno de la inversión en el cambio",
    estudio_en: "2026 Change Management Study: The ROI of change",
    link: "https://www.deloitte.com/global/en/insights/topics/business-strategy-growth/change-management-roi.html",
    region_es: "Estados Unidos, Reino Unido, Australia y Canadá",
    region_en: "United States, United Kingdom, Australia and Canada",
    hallazgo_es: "70% de los líderes de cambio dice que su transformación más reciente no entregó el valor de negocio previsto",
    hallazgo_en: "70% of change leaders say their latest transformation fell short of its intended business value",
    dato_clave_es: "70% dice que su última transformación no entregó el valor previsto y 83% atribuye parte de esa brecha a una mala gestión del cambio. La mediana del retorno es 4:1: cada US$1 invertido en gestión del cambio se asocia con US$4 de valor realizado. Encuesta a 1,000 líderes, junio–julio de 2026.",
    dato_clave_en: "70% say their latest transformation fell short of its intended value, and 83% say poor change management contributed to that gap. The median return is 4:1: every US$1 invested in change management is associated with US$4 in realized value. Survey of 1,000 leaders, June–July 2026.",
    contexto_es: "Encuesta de Deloitte, desarrollada con Workplace Intelligence y aplicada por Walr en junio y julio de 2026, a 1,000 líderes de gestión del cambio en roles ejecutivos (51% C-level, 37% director o VP, 12% otros ejecutivos) de Estados Unidos, Reino Unido, Australia y Canadá. Todos habían liderado al menos una iniciativa de gran escala en los últimos dos años (presupuesto de US$1 millón o más, o que abarcara varios equipos, funciones o unidades); la mediana del presupuesto de la iniciativa más reciente fue de US$10.6 millones.",
    contexto_en: "Deloitte survey, developed with Workplace Intelligence and fielded by Walr in June and July 2026, of 1,000 change management leaders in executive roles (51% C-suite, 37% director or VP, 12% other executive leadership) in the United States, United Kingdom, Australia and Canada. All had led at least one large-scale initiative in the past two years (a budget of US$1 million or more, or spanning multiple teams, functions or units); the median budget of the most recent initiative was US$10.6 million.",
    puntos_es: [
      "70% dice que su transformación más reciente no entregó el valor de negocio previsto, y 55% tuvo que reiniciarla o corregir el rumbo de forma importante.",
      "La mediana del retorno de la gestión del cambio es 4:1; las empresas que más invierten tienen 1.7 veces más probabilidades de reportar una adopción por encima de lo esperado.",
      "60% dice que su empresa trata la gestión del cambio como un costo de proyecto y no como una capacidad del negocio.",
      "73% reporta fatiga de cambio en sus colaboradores; con cuatro o más iniciativas simultáneas, la probabilidad de fatiga alta se multiplica por 6.4.",
      "61% siente que la transformación con IA avanza más rápido de lo que sus colaboradores pueden manejar, y 43% no sabe cómo la IA está afectando a su gente.",
      "Donde los líderes modelan el cambio, la probabilidad de reportar un retorno claramente positivo y una adopción superior a lo esperado es al menos el doble."
    ],
    puntos_en: [
      "70% say their latest transformation fell short of its intended business value, and 55% needed a major restart or course correction.",
      "The median return on change management is 4:1; the companies that invest most are 1.7 times more likely to report adoption exceeding expectations.",
      "60% say their company treats change management as a project cost rather than a business capability.",
      "73% report change fatigue among employees; with four or more concurrent initiatives, the likelihood of high fatigue rises 6.4 times.",
      "61% feel AI transformation is moving faster than employees can handle, and 43% don't know how AI is affecting their people.",
      "Where leaders model change, organizations are at least twice as likely to report strong positive ROI and adoption exceeding expectations."
    ],
    articulo_es: {
      "bajada": "Deloitte le puso cifra al retorno de gestionar bien el cambio. El problema es que la mayoría de empresas todavía lo trata como un gasto de proyecto, mientras apila transformaciones una sobre otra.",
      "parrafos": [
        "El estudio de Deloitte parte de una constatación incómoda: entre 1,000 ejecutivos que lideran grandes transformaciones en Estados Unidos, Reino Unido, Australia y Canadá, 70% dice que su iniciativa más reciente no entregó el valor de negocio que se esperaba. Menos de la mitad ve mejoras significativas en las áreas que buscaba transformar, y 55% tuvo que reiniciar o corregir el rumbo de forma importante. No se trata de proyectos pequeños: la mediana del presupuesto fue de US$10.6 millones.",
        "Lo novedoso es el intento de medir el lado positivo. La mediana del retorno de la inversión en gestión del cambio fue de 4:1, es decir, cada US$1 se asocia con US$4 de valor realizado, y las empresas que más invierten tienen 1.7 veces más probabilidades de decir que la adopción superó las expectativas. Es una asociación, no una prueba de causa, pero contrasta con otro dato: 60% de los líderes dice que su empresa sigue tratando la gestión del cambio como un costo de proyecto y no como una capacidad permanente. Y 83% cree que una mala gestión del cambio contribuyó a que su última iniciativa se quedara corta.",
        "El contexto explica la presión. 83% de las organizaciones lleva varias iniciativas grandes al mismo tiempo y 84% dice que los colaboradores asumen tareas de transformación encima de su carga habitual. El costo humano aparece en los números: 73% reporta fatiga de cambio, 69% dice que la última iniciativa aumentó la carga y el desgaste, y 66% vio salir gente por un cambio mal gestionado, con un costo estimado de reemplazo de US$20.5 millones en promedio. Con cuatro o más iniciativas en paralelo, la probabilidad de fatiga alta se multiplica por 6.4.",
        "La IA intensifica el cuadro. 61% siente que la transformación con IA avanza más rápido de lo que su gente puede manejar, casi la mitad cree que ya contribuyó al desgaste, la rotación o la pérdida de confianza, y en las iniciativas de IA el costo estimado de rotación sube a US$25.5 millones. Aun así, 43% de los líderes de cambio admite no saber cómo la IA está afectando a sus colaboradores, y más de la mitad dice que nadie tiene autoridad para pausar una iniciativa por falta de capacidad.",
        "El estudio también apunta a la conducta de quienes dirigen. Un tercio reconoce que los líderes no modelan de forma consistente los comportamientos que piden, y donde sí lo hacen, la probabilidad de reportar un retorno claramente positivo y una adopción superior a lo esperado es al menos el doble. Deloitte describe el reto como pasar de un cambio episódico a uno continuo, con sistemas de gestión que todavía no se han puesto al día."
      ]
    },
    articulo_en: {
      "bajada": "Deloitte put a number on the return of managing change well. The problem is that most companies still treat it as a project expense while stacking transformations on top of each other.",
      "parrafos": [
        "Deloitte's study starts from an uncomfortable finding: among 1,000 executives leading large transformations in the United States, United Kingdom, Australia and Canada, 70% say their most recent initiative fell short of the business value it was meant to deliver. Fewer than half see significant improvement in the areas they set out to transform, and 55% needed a major restart or course correction. These aren't small projects: the median budget was US$10.6 million.",
        "What's new is the attempt to measure the upside. The median return on investment in change management was 4:1, meaning every US$1 is associated with US$4 in realized value, and the companies that invest most are 1.7 times more likely to say adoption exceeded expectations. It's an association, not proof of cause, but it contrasts with another figure: 60% of leaders say their company still treats change management as a project cost rather than a lasting capability. And 83% believe poor change management contributed to their latest initiative falling short.",
        "The context explains the pressure. 83% of organizations are running several large initiatives at once, and 84% say employees take on transformation tasks on top of their usual workload. The human cost shows up in the numbers: 73% report change fatigue, 69% say the latest initiative increased workload and burnout, and 66% saw people leave because of poorly managed change, at an estimated average replacement cost of US$20.5 million. With four or more initiatives running in parallel, the likelihood of high fatigue rises 6.4 times.",
        "AI intensifies the picture. 61% feel AI transformation is moving faster than their people can handle, nearly half believe it has already contributed to burnout, turnover or lost trust, and for AI initiatives the estimated turnover cost rises to US$25.5 million. Even so, 43% of change leaders admit they don't know how AI is affecting their employees, and more than half say no one has the authority to pause an initiative for lack of capacity.",
        "The study also points to the behavior of those in charge. A third acknowledge that leaders don't consistently model the behaviors they ask for, and where they do, organizations are at least twice as likely to report strong positive ROI and adoption exceeding expectations. Deloitte frames the challenge as moving from episodic to continuous change, with management systems that haven't yet caught up."
      ]
    },
    cita: {
      "original": "treating change management as a durable, always-on capability, not a one-off project cost",
      "traduccion_es": "tratar la gestión del cambio como una capacidad duradera y siempre activa, no como un costo puntual de proyecto",
      "autor_es": "Deloitte, 2026 Change Management Study",
      "autor_en": "Deloitte, 2026 Change Management Study"
    },
    preguntas_es: [
      "¿Qué cambiaría en una organización si la gestión del cambio se presupuestara como una capacidad permanente y no como una partida de cada proyecto?",
      "¿Quién decide cuánto cambio simultáneo puede absorber la gente, y con qué información lo decide?",
      "¿Qué señales concretas recibe hoy un equipo de que sus líderes viven el cambio que piden?"
    ],
    preguntas_en: [
      "What would change in an organization if change management were budgeted as a permanent capability rather than a line item in each project?",
      "Who decides how much simultaneous change people can absorb, and with what information?",
      "What concrete signals does a team get today that its leaders are living the change they ask for?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-sia-cambio",
    industria: null,
    tema: "gestion_cambio",
    subtema: "Gestión del cambio",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-10-02",
    anio: "2026",
    fuente: "Sia",
    estudio_es: "The Change Report 2026",
    estudio_en: "The Change Report 2026",
    link: "https://www.sia-partners.com/en/insights/publications/change-report-0",
    region_es: "Norteamérica, Asia-Pacífico, Europa, Reino Unido e Irlanda y Emiratos Árabes Unidos",
    region_en: "North America, Asia-Pacific, Europe, UK and Ireland and the UAE",
    hallazgo_es: "85% de los colaboradores atraviesa al menos un cambio en su trabajo y 30% vive entre 3 y 5 a la vez",
    hallazgo_en: "85% of employees are going through at least one workplace change, and 30% are living through 3 to 5 at once",
    dato_clave_es: "85% vive al menos un cambio y 30% enfrenta entre 3 y 5 simultáneos. 41% dice que su organización intenta hacer todo a la vez y solo 18% cree que maneja \"extremadamente bien\" los resultados y su sostenibilidad. Encuesta a 1,450 personas, inicios de 2026.",
    dato_clave_en: "85% are going through at least one change and 30% face 3 to 5 simultaneously. 41% say their organization tries to do everything at once, and only 18% say it handles outcomes and sustainability \"extremely well\". Survey of 1,450 people, early 2026.",
    contexto_es: "Encuesta de Sia a inicios de 2026 a 1,450 colaboradores y líderes: 30% colaboradores individuales, 23% jefes de equipo, 25% líderes senior y 22% altos ejecutivos. Por región: Norteamérica 30%, Asia-Pacífico 30%, Europa 26%, Reino Unido e Irlanda 8% y Emiratos Árabes Unidos 6%.",
    contexto_en: "Sia survey conducted in early 2026 of 1,450 employees and leaders: 30% individual contributors, 23% people managers, 25% senior leaders and 22% senior executives. By region: North America 30%, Asia-Pacific 30%, Europe 26%, UK and Ireland 8% and UAE 6%.",
    puntos_es: [
      "85% atraviesa actualmente al menos un cambio en su trabajo y 30% vive entre 3 y 5 cambios simultáneos.",
      "23% ya vive una transformación importante ligada a IA, datos o analítica, una de las categorías de cambio que más crece.",
      "41% dice que su organización intenta \"hacer todo a la vez\" y 22% que hay iniciativas pausadas o retrasadas.",
      "21% dice que los equipos quedan solos para resolver qué priorizar cuando las demandas chocan.",
      "Solo 18% cree que su organización maneja \"extremadamente bien\" los resultados y su sostenibilidad; 35% dice que lo hace apenas de forma adecuada.",
      "33% se define como entusiasta del cambio y 15% como impulsor, frente a 28% de escépticos y 24% de espectadores."
    ],
    puntos_en: [
      "85% are currently going through at least one workplace change, and 30% are experiencing 3 to 5 simultaneous changes.",
      "23% are already experiencing major AI, data or analytics-related transformation, one of the fastest-growing categories of change.",
      "41% say their organization tries to \"do everything at once\" and 22% that initiatives are paused or delayed.",
      "21% say teams are left to figure out tradeoffs on their own when demands collide.",
      "Only 18% say their organization handles outcomes and sustainability \"extremely well\"; 35% say it does so only adequately.",
      "33% identify as enthusiasts of change and 15% as champions, versus 28% skeptics and 24% bystanders."
    ],
    articulo_es: {
      "bajada": "El informe de Sia describe una fuerza laboral dispuesta a cambiar, pero atrapada en cambios que chocan entre sí y en organizaciones que lanzan bien y sostienen mal.",
      "parrafos": [
        "Sia encuestó a 1,450 colaboradores y líderes de Norteamérica, Asia-Pacífico, Europa, Reino Unido e Irlanda y Emiratos Árabes Unidos, desde personal sin equipo a cargo hasta altos ejecutivos. La primera foto es de volumen: 85% atraviesa al menos un cambio en su trabajo y 30% vive entre 3 y 5 al mismo tiempo. La consultora no lo llama sobrecarga sino \"colisión\": reorganizaciones, nuevas tecnologías, cambios de liderazgo e IA llegan superpuestos, no en fila, y el desafío está en cómo interactúan.",
        "El diagnóstico central es que las organizaciones no fallan por falta de esfuerzo sino de foco. 41% dice que su empresa intenta \"hacer todo a la vez\", 22% que hay iniciativas pausadas o retrasadas y 21% que los equipos quedan solos para resolver qué priorizar cuando las demandas chocan. En ese vacío, los mandos medios cargan buena parte de la complejidad: traducen la disrupción en instrucciones diarias mientras enfrentan la misma ambigüedad que sus equipos.",
        "La IA acelera la presión. 23% ya vive una transformación importante ligada a IA, datos o analítica, y Sia describe una brecha entre la velocidad con que las personas adoptan la tecnología y la velocidad con que la organización ajusta procesos, gobierno y roles. Las lecturas varían por región: en Asia-Pacífico predomina la IA como oportunidad de productividad, mientras en Norteamérica aparecen más la carga de trabajo, las expectativas poco claras y los cambios de rol.",
        "El punto más débil está después del lanzamiento. Solo 18% cree que su organización maneja \"extremadamente bien\" los resultados y su sostenibilidad, y 35% dice que apenas lo hace de forma adecuada. Los sistemas se implementan rápido, pero el refuerzo, la capacitación, el retiro de procesos antiguos y la formación de hábitos se quedan atrás, lo que según el informe produce actividad costosa y temporal más que transformación duradera.",
        "El matiz interesante está en la disposición de la gente. 33% se define como entusiasta del cambio y 15% como impulsor, frente a 28% de escépticos y 24% de espectadores. Para Sia, la fuerza laboral puede estar más lista que las organizaciones que la conducen: lo que pide son prioridades más claras, más apoyo de sus jefes, capacitación práctica y reglas transparentes, sobre todo frente a la IA."
      ]
    },
    articulo_en: {
      "bajada": "Sia's report describes a workforce willing to change but caught in colliding changes, inside organizations that launch well and sustain poorly.",
      "parrafos": [
        "Sia surveyed 1,450 employees and leaders across North America, Asia-Pacific, Europe, the UK and Ireland and the UAE, from individual contributors to senior executives. The first picture is one of volume: 85% are going through at least one workplace change, and 30% are living through 3 to 5 at the same time. The firm doesn't call it overload but \"collision\": reorganizations, new technology, leadership transitions and AI arrive overlapping rather than in sequence, and the challenge lies in how they interact.",
        "The core diagnosis is that organizations fail not for lack of effort but for lack of focus. 41% say their company tries to \"do everything at once\", 22% that initiatives are paused or delayed, and 21% that teams are left to figure out tradeoffs on their own when demands collide. In that vacuum, managers absorb much of the complexity: they translate disruption into daily guidance while facing the same ambiguity as their teams.",
        "AI adds to the pressure. 23% are already experiencing a major AI, data or analytics-related transformation, and Sia describes a gap between how quickly people adopt the technology and how quickly organizations adjust processes, governance and roles. Views vary by region: in Asia-Pacific, AI is seen mainly as a productivity opportunity, while in North America workload, unclear expectations and role changes come up more often.",
        "The weakest point comes after launch. Only 18% say their organization handles outcomes and sustainability \"extremely well\", and 35% say it does so only adequately. Systems go live quickly, but reinforcement, training, retiring legacy processes and building habits lag behind, which according to the report produces costly, temporary activity rather than lasting transformation.",
        "The interesting nuance lies in people's willingness. 33% identify as enthusiasts of change and 15% as champions, versus 28% skeptics and 24% bystanders. For Sia, the workforce may be more ready than the organizations leading it: what it asks for is clearer priorities, more support from managers, practical training and transparent rules, especially around AI."
      ]
    },
    cita: {
      "original": "Launching transformation is easier than sustaining it.",
      "traduccion_es": "Lanzar una transformación es más fácil que sostenerla.",
      "autor_es": "Sia, The Change Report 2026",
      "autor_en": "Sia, The Change Report 2026"
    },
    preguntas_es: [
      "¿Quién tiene hoy la visión completa de todos los cambios que vive un mismo equipo al mismo tiempo?",
      "¿Qué pasa con una iniciativa el día después de su lanzamiento, y quién se hace cargo de que se sostenga?",
      "Si la gente está más dispuesta al cambio que la organización, ¿dónde se origina realmente la resistencia?"
    ],
    preguntas_en: [
      "Who today has the full view of every change a single team is living through at the same time?",
      "What happens to an initiative the day after launch, and who owns making it stick?",
      "If people are more ready for change than the organization, where does resistance really come from?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-edelman-confianza",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Comunicación interna",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-10-06",
    anio: "2026",
    fuente: "Edelman",
    estudio_es: "2026 Edelman Trust Barometer Special Report: Trust at Work",
    estudio_en: "2026 Edelman Trust Barometer Special Report: Trust at Work",
    link: "https://www.edelman.com/trust/2026/trust-barometer/special-report-work",
    region_es: "Global (10 países, incluidos Brasil, Canadá y EE.UU.)",
    region_en: "Global (10 countries, including Brazil, Canada and the US)",
    hallazgo_es: "76% de los colaboradores vivió al menos una transformación importante en el último año, y cuando la experiencia es negativa la confianza en el CEO cae de 82% a 49%",
    hallazgo_en: "76% of employees went through at least one major transformation in the past year, and when the experience is negative, trust in the CEO falls from 82% to 49%",
    dato_clave_es: "76% vivió al menos una transformación en el último año; la integración de IA fue la más frecuente (53%). Tras una transformación negativa, la confianza en el CEO baja de 82% a 49% y en el jefe directo de 85% a 60%. Encuesta a 10,018 colaboradores, agosto de 2026.",
    dato_clave_en: "76% went through at least one transformation in the past year; AI integration was the most common (53%). After a negative transformation, trust in the CEO drops from 82% to 49% and in the direct manager from 85% to 60%. Survey of 10,018 employees, August 2026.",
    contexto_es: "Encuesta en línea del Edelman Trust Institute a 10,018 colaboradores (unos 1,000 por país) en 10 mercados: Brasil, Canadá, China, Alemania, India, Japón, Sudáfrica, Emiratos Árabes Unidos, Reino Unido y EE.UU. Campo del 14 al 31 de agosto de 2026. Quinta edición del reporte.",
    contexto_en: "Online survey by the Edelman Trust Institute of 10,018 employees (about 1,000 per country) in 10 markets: Brazil, Canada, China, Germany, India, Japan, South Africa, the UAE, the UK and the US. Fieldwork August 14–31, 2026. Fifth edition of the report.",
    puntos_es: [
      "76% vivió al menos una transformación importante en el trabajo en los últimos 12 meses, y 42% vivió tres o más.",
      "La integración de IA fue la transformación más frecuente (53%), seguida por cambios de estrategia (47%) y de cultura (45%).",
      "Tras una transformación negativa, la confianza en el CEO cae de 82% a 49% y en el jefe directo de 85% a 60%.",
      "57% prefiere que el CEO comparta lo que sabe y lo que aún no sabe con certeza, y 64% que reconozca lo que sienten los colaboradores.",
      "77% teme perder su empleo, 4 puntos más que en agosto de 2024.",
      "La confianza en el propio empleador se ubica en 74%, 5 puntos menos que en agosto de 2024 (promedio de 7 mercados)."
    ],
    puntos_en: [
      "76% went through at least one major workplace transformation in the past 12 months, and 42% went through three or more.",
      "AI integration was the most common transformation (53%), followed by strategy shifts (47%) and culture shifts (45%).",
      "After a negative transformation, trust in the CEO falls from 82% to 49% and in the direct manager from 85% to 60%.",
      "57% prefer that the CEO share what they do and don't yet know for certain, and 64% that they acknowledge what employees are feeling.",
      "77% worry about losing their job, up 4 points since August 2024.",
      "Trust in one's own employer stands at 74%, down 5 points since August 2024 (7-market average)."
    ],
    articulo_es: {
      "bajada": "El cambio ya es la condición normal del trabajo. Lo que define si erosiona o fortalece la confianza es cómo lo viven las personas, y quién se los explica.",
      "parrafos": [
        "El nuevo reporte especial de Edelman sobre confianza en el trabajo parte de una constatación: la transformación ya no es un episodio, es el día a día. 76% de los más de 10,000 colaboradores encuestados en 10 países vivió al menos una transformación importante en el último año, y 42% atravesó tres o más. La más frecuente fue la integración de IA (53%), por delante de los cambios de estrategia (47%) y de cultura (45%).",
        "El dato más revelador no es cuánto cambio hay, sino lo que deja. Cerca de un tercio describe su experiencia como no positiva, y la diferencia en confianza es enorme: tras una transformación negativa, la confianza en el CEO baja de 82% a 49% y en el jefe directo de 85% a 60%. La disposición a abrazar un mayor uso de IA también se desploma, de 40% a 18%. Según Edelman, la carga de trabajo es el principal factor que inclina la balanza hacia una buena o mala experiencia.",
        "El contexto ayuda a entender por qué esto importa ahora. 77% teme perder su empleo, 4 puntos más que en agosto de 2024, y la confianza en el propio empleador, aunque todavía alta, cae a 74%, 5 puntos menos que hace dos años. El reporte también muestra una brecha marcada en cómo se percibe la comunicación: los ejecutivos creen mucho más que los colaboradores de base que la gerencia dice la verdad y comunica con regularidad.",
        "En cuanto a qué esperan de sus líderes, los colaboradores piden honestidad sobre la incertidumbre. 57% prefiere que el CEO comparta lo que sabe y también lo que aún no sabe con certeza, y 64% quiere que reconozca lo que sienten los equipos en lugar de centrarse solo en el negocio. Y cuando se pregunta en quién confiarían más para conocer la verdad sobre por qué ocurre un cambio, el jefe directo aparece primero, por encima del CEO, en los cinco tipos de transformación evaluados.",
        "El mensaje de fondo es que la confianza no se pierde por el cambio en sí, sino por cómo se ejecuta y se comunica. Para Edelman, la transformación tiene que hacerse a escala humana, y el CEO y los mandos directos comparten la responsabilidad de explicarla."
      ]
    },
    articulo_en: {
      "bajada": "Change is now the normal condition of work. What decides whether it erodes or builds trust is how people experience it, and who explains it to them.",
      "parrafos": [
        "Edelman's new special report on trust at work starts from a simple observation: transformation is no longer an episode, it is everyday life. 76% of the more than 10,000 employees surveyed in 10 countries went through at least one major transformation in the past year, and 42% went through three or more. The most common was AI integration (53%), ahead of strategy shifts (47%) and culture shifts (45%).",
        "The most telling data point is not how much change there is, but what it leaves behind. About a third describe their experience as not positive, and the trust gap is huge: after a negative transformation, trust in the CEO drops from 82% to 49% and in the direct manager from 85% to 60%. Willingness to embrace greater AI use also collapses, from 40% to 18%. According to Edelman, workload is the top factor tipping the balance toward a good or bad experience.",
        "The backdrop explains why this matters now. 77% worry about losing their job, up 4 points since August 2024, and trust in one's own employer, while still high, falls to 74%, 5 points lower than two years ago. The report also shows a sharp gap in how communication is perceived: executives are far more likely than frontline associates to believe management tells the truth and communicates regularly.",
        "As for what they expect from leaders, employees ask for honesty about uncertainty. 57% prefer that the CEO share what they know and also what they don't yet know for certain, and 64% want the CEO to acknowledge what teams are feeling rather than focus only on the business. And when asked whom they would most trust to tell them the truth about why a change is happening, the direct manager comes first, ahead of the CEO, across all five types of transformation assessed.",
        "The underlying message is that trust is not lost because of change itself, but because of how it is carried out and communicated. For Edelman, transformation has to happen at a human scale, and CEOs and direct managers share the responsibility for explaining it."
      ]
    },
    cita: {
      "original": "Employees are not opposed to change, but how they experience it matters.",
      "traduccion_es": "Los colaboradores no se oponen al cambio, pero importa cómo lo viven.",
      "autor_es": "Edelman, reporte Trust at Work 2026",
      "autor_en": "Edelman, 2026 Trust at Work report"
    },
    preguntas_es: [
      "¿Qué tanto de la desconfianza que deja una transformación se explica por la carga de trabajo que trae, más que por el cambio en sí?",
      "¿Cómo cambia la conversación cuando un líder admite lo que todavía no sabe?",
      "Si el jefe directo es la voz más creíble del cambio, ¿qué información y respaldo recibe para explicarlo?"
    ],
    preguntas_en: [
      "How much of the distrust a transformation leaves behind comes from the workload it brings, rather than the change itself?",
      "How does the conversation change when a leader admits what they don't yet know?",
      "If the direct manager is the most credible voice of change, what information and support do they get to explain it?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-gallagher-comunicacion",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Comunicación interna",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-03-10",
    anio: "2026",
    fuente: "Gallagher",
    estudio_es: "Employee Communications Report 2026 (State of the Sector)",
    estudio_en: "Employee Communications Report 2026 (State of the Sector)",
    link: "https://www.ajg.com/employeeexperience/-/media/files/gallaghercomms/gcommssite/state-of-the-sector/gallagher-employee-communications-report-2026-global.pdf",
    region_es: "Global (40 países; 51% Norteamérica)",
    region_en: "Global (40 countries; 51% North America)",
    hallazgo_es: "61% de las organizaciones no tiene un enfoque formal para comunicar el cambio, aunque la gestión del cambio es la habilidad más buscada en comunicación interna",
    hallazgo_en: "61% of organizations have no formal approach to change communication, even though change management is the most sought-after skill in internal comms",
    dato_clave_es: "61% no tiene un enfoque formal de comunicación del cambio, el principal riesgo del informe. 87% ve la capacidad de los mandos como un riesgo y solo 21% usa activamente kits para mandos. Encuesta a más de 1,300 profesionales de comunicación y RR.HH., noviembre de 2025.",
    dato_clave_en: "61% have no formal change communication approach, the report's top risk. 87% see manager capability as a risk and only 21% actively use manager toolkits. Survey of more than 1,300 comms and HR professionals, November 2025.",
    contexto_es: "Informe anual de Gallagher (serie State of the Sector) basado en más de 1,300 profesionales de comunicación interna y RR.HH. de 40 países: 51% de Norteamérica, 36% de Reino Unido y Europa, 9% de Australia y Nueva Zelanda, 2% de Latinoamérica y 2% de Asia, África y Medio Oriente. Mesas redondas y focus groups en septiembre y octubre de 2025; encuesta abierta en noviembre de 2025.",
    contexto_en: "Gallagher's annual report (State of the Sector series) based on more than 1,300 internal comms and HR professionals in 40 countries: 51% North America, 36% UK and Europe, 9% Australia and New Zealand, 2% Latin America and 2% Asia, Africa and the Middle East. Roundtables and focus groups in September and October 2025; survey open in November 2025.",
    puntos_es: [
      "61% no tiene un enfoque formal para comunicar el cambio, el riesgo número uno del informe.",
      "87% considera la capacidad de los mandos como un riesgo moderado o significativo, y solo 21% usa activamente kits de apoyo para ellos.",
      "73% quiere que su área opere como una consultoría estratégica, pero solo 18% dice que esa es su realidad actual.",
      "Solo 36% siente que tiene las habilidades para usar bien la IA, y 75% está en etapas reactivas o improvisadas de madurez en IA.",
      "81% ve el agotamiento de los colaboradores como un riesgo moderado o significativo, y 83% dice que la sobrecarga de información es un problema creciente."
    ],
    puntos_en: [
      "61% have no formal approach to change communication, the report's number one risk.",
      "87% see manager capability as a moderate or significant risk, and only 21% actively use manager toolkits.",
      "73% want their function to operate as a strategic consultancy, but only 18% say that is their current reality.",
      "Only 36% feel they have the skills to use AI effectively, and 75% are at reactive or ad-hoc stages of AI maturity.",
      "81% see employee burnout as a moderate or significant risk, and 83% say information overload is a growing problem."
    ],
    articulo_es: {
      "bajada": "Los equipos de comunicación interna saben que el cambio es su tarea central, pero la mayoría lo enfrenta sin método, con mandos poco preparados y audiencias saturadas.",
      "parrafos": [
        "El informe anual de Gallagher sobre comunicación interna, basado en más de 1,300 profesionales de comunicación y RR.HH. de 40 países, muestra una contradicción de fondo. La gestión del cambio es la habilidad que más quieren desarrollar en los próximos 12 meses, y la habilitación del cambio está entre las tres prioridades de 63% de los encuestados. Sin embargo, 61% no tiene un enfoque formal para comunicarlo, lo que el propio informe identifica como el principal riesgo de la función.",
        "El volumen agrava el problema. 81% ve el agotamiento de los colaboradores como un riesgo moderado o significativo y 83% dice que la sobrecarga de información va en aumento. Según Gallagher, pasar de un volumen medio a uno alto de cambios eleva el riesgo de pérdida de confianza en los líderes en 30% y el de agotamiento en 24%. Es decir, comunicar más no equivale a comunicar mejor.",
        "Los mandos aparecen como el eslabón débil, o como el canal que falta, en palabras del informe. 87% considera su capacidad un riesgo moderado o significativo, pero solo 21% usa activamente kits de apoyo para ellos y 37% no tiene ninguno. Además, 38% no mide si la comunicación a través de los mandos funciona. El informe advierte que muchas organizaciones los tratan como un canal uniforme, pese a las grandes diferencias de experiencia, confianza y carga de trabajo entre ellos.",
        "La función también está lejos de la posición que aspira tener. 73% quiere operar como una consultoría estratégica, pero solo 18% dice lograrlo; el modelo más común sigue siendo la difusión centralizada de mensajes (49%). En IA, la brecha se repite: solo 36% siente que tiene las habilidades para usarla bien y 75% está en etapas reactivas o improvisadas, aunque los equipos con gobierno, políticas y formación claras avanzan mucho más rápido.",
        "Un matiz importante para leer estas cifras: la muestra está formada por los propios profesionales de comunicación y RR.HH., no por colaboradores en general, y más de la mitad trabaja en Norteamérica. Es, por tanto, una mirada desde dentro de la función sobre sus propias capacidades y límites."
      ]
    },
    articulo_en: {
      "bajada": "Internal comms teams know change is their core job, but most face it without a method, with underprepared managers and saturated audiences.",
      "parrafos": [
        "Gallagher's annual internal communications report, based on more than 1,300 comms and HR professionals in 40 countries, reveals a deep contradiction. Change management is the skill they most want to build over the next 12 months, and change enablement is among the top three priorities for 63% of respondents. Yet 61% have no formal approach to communicating it, which the report itself identifies as the function's top risk.",
        "Volume makes the problem worse. 81% see employee burnout as a moderate or significant risk and 83% say information overload is growing. According to Gallagher, moving from medium to high change volume raises the risk of lost trust in leaders by 30% and burnout risk by 24%. In other words, communicating more is not the same as communicating better.",
        "Managers emerge as the weak link, or the missing channel, in the report's words. 87% consider their capability a moderate or significant risk, yet only 21% actively use manager toolkits and 37% have none at all. Moreover, 38% don't measure whether communication through managers works. The report warns that many organizations treat managers as a uniform channel, despite wide differences in their experience, confidence and workload.",
        "The function is also far from the position it aspires to. 73% want to operate as a strategic consultancy, but only 18% say they do; the most common model is still centralized broadcast (49%). On AI, the gap repeats: only 36% feel they have the skills to use it well and 75% are at reactive or ad-hoc stages, although teams with clear governance, policies and training move much faster.",
        "An important caveat when reading these figures: the sample is made up of comms and HR professionals themselves, not employees in general, and more than half work in North America. It is, therefore, a view from inside the function about its own capabilities and limits."
      ]
    },
    cita: {
      "original": "Change is no longer a specialty; it's the job.",
      "traduccion_es": "El cambio ya no es una especialidad; es el trabajo.",
      "autor_es": "Gallagher, Employee Communications Report 2026",
      "autor_en": "Gallagher, Employee Communications Report 2026"
    },
    preguntas_es: [
      "¿Qué distingue a un enfoque formal de comunicación del cambio de una suma de anuncios urgentes?",
      "¿Qué necesitan los mandos para dejar de ser el canal que falta?",
      "¿Hasta qué punto el volumen de mensajes de cambio está erosionando la atención que se busca captar?"
    ],
    preguntas_en: [
      "What separates a formal change communication approach from a string of urgent announcements?",
      "What do managers need to stop being the missing channel?",
      "To what extent is the volume of change messages eroding the very attention it seeks to capture?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-pwc-hopes-fears",
    industria: null,
    tema: "ia_personas",
    subtema: "IA y trabajo",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-09-29",
    anio: "2026",
    fuente: "PwC",
    estudio_es: "Global Workforce Hopes and Fears Survey 2026",
    estudio_en: "Global Workforce Hopes and Fears Survey 2026",
    link: "https://www.pwc.com/gx/en/1/issues/workforce/hopes-and-fears.html",
    region_es: "Global",
    region_en: "Global",
    hallazgo_es: "El 64% de los trabajadores ya usa IA en su trabajo, 10 puntos más que hace un año, pero la confianza en la gerencia cayó 7 puntos",
    hallazgo_en: "64% of workers now use AI at work, up 10 points in a year, yet trust in management fell 7 points",
    dato_clave_es: "64% usó IA en el trabajo en los últimos 12 meses (+10 puntos) y el uso diario de IA generativa pasó de 14% a 22%. Pero la confianza en la gerencia cayó 7 puntos y menos de la mitad confía en la alta dirección. Encuesta a 49,364 trabajadores de 48 países y regiones, mayo–junio de 2026.",
    dato_clave_en: "64% used AI at work in the past 12 months (+10 points) and daily GenAI use rose from 14% to 22%. But trust in management fell 7 points and less than half trust top management. Survey of 49,364 workers in 48 countries and regions, May–June 2026.",
    contexto_es: "Encuesta global de PwC a 49,364 trabajadores de 48 países y regiones y 29 sectores, realizada en mayo y junio de 2026 y ponderada por género y edad. El estudio agrupa a los trabajadores en cohortes según la demanda de sus habilidades y el beneficio que obtienen de la IA.",
    contexto_en: "PwC global survey of 49,364 workers across 48 countries and regions and 29 sectors, conducted in May and June 2026 and weighted by gender and age. The study groups workers into cohorts based on demand for their skills and the benefit they get from AI.",
    puntos_es: [
      "64% de los trabajadores usó IA en el trabajo en el último año, 10 puntos más que el año anterior.",
      "El uso diario de IA generativa subió de 14% a 22% de la fuerza laboral.",
      "La confianza en la gerencia cayó 7 puntos en un año; menos de la mitad confía en la alta dirección.",
      "1 de cada 5 trabajadores dice que le cuesta manejar el cambio y 18% no entiende sus razones.",
      "La valoración del acceso a recursos de aprendizaje y desarrollo bajó de 59% a 51%.",
      "En el \"engine room\" (56% de la fuerza laboral) solo 33% confía en la alta dirección y 11% usa IA generativa a diario."
    ],
    puntos_en: [
      "64% of workers used AI at work in the past year, up 10 points year-on-year.",
      "Daily GenAI use rose from 14% to 22% of the workforce.",
      "Trust in management fell 7 points in a year; less than half trust top management.",
      "1 in 5 workers say they find change difficult to manage, and 18% don't understand the reasons for it.",
      "Ratings of access to learning and development resources fell from 59% to 51%.",
      "In the \"engine room\" (56% of the workforce), only 33% trust top management and 11% use GenAI daily."
    ],
    articulo_es: {
      "bajada": "La IA ya es parte del día a día de dos de cada tres trabajadores en el mundo. Lo que no está creciendo al mismo ritmo es la confianza en quienes conducen ese cambio.",
      "parrafos": [
        "La edición 2026 de la encuesta Hopes and Fears de PwC, con casi 50,000 trabajadores de 48 países y regiones, confirma que la adopción de IA dejó de ser un experimento. 64% dice haberla usado en el trabajo en los últimos 12 meses, diez puntos más que un año antes, y el uso diario de IA generativa pasó de 14% a 22%. Sin embargo, PwC advierte que solo una minoría está obteniendo beneficios reales.",
        "El dato que más incomoda está en la relación con el liderazgo. La confianza en la gerencia cayó siete puntos en un año y menos de la mitad de la fuerza laboral confía hoy en la alta dirección. La adopción avanza, pero el vínculo con quienes deciden cómo se usa la tecnología se debilita.",
        "Para entender esa brecha, el estudio separa a los trabajadores en cohortes. Los \"front-runners\", 14% del total, combinan habilidades muy demandadas con ventaja en IA: 51% usa IA generativa a diario y 75% confía en la alta dirección. En el otro extremo está el \"engine room\", 56% de la fuerza laboral, que sostiene la operación pero se siente cada vez más presionado: solo 11% usa IA generativa a diario y apenas 33% confía en la alta dirección.",
        "El cambio también está pasando factura. Uno de cada cinco trabajadores dice que le cuesta manejarlo y 18% no entiende sus razones; 27% menciona la fatiga y el agotamiento como un límite para su productividad. No es solo un tema de la base: 31% de los altos ejecutivos y 24% de los gerentes reconocen que el cambio les resulta difícil de gestionar.",
        "A eso se suma una señal contradictoria en el desarrollo de habilidades. Mientras la IA redefine tareas, la valoración del acceso a recursos de aprendizaje bajó de 59% a 51%. Para PwC, el mensaje de fondo es que meter IA en modelos operativos heredados no alcanza: la ganancia depende de que las personas entiendan el cambio, puedan aprender y confíen en quienes lo dirigen."
      ]
    },
    articulo_en: {
      "bajada": "AI is now part of daily work for two in three workers worldwide. What isn't growing at the same pace is trust in the people leading that change.",
      "parrafos": [
        "The 2026 edition of PwC's Hopes and Fears survey, covering nearly 50,000 workers in 48 countries and regions, confirms that AI adoption is no longer an experiment. 64% say they used it at work in the past 12 months, ten points more than a year earlier, and daily GenAI use rose from 14% to 22%. Yet PwC warns that only a minority are reaping real benefits.",
        "The most uncomfortable finding concerns leadership. Trust in management fell seven points in a year, and less than half of the workforce now trusts top management. Adoption is moving forward, but the bond with those deciding how the technology is used is weakening.",
        "To explain that gap, the study splits workers into cohorts. \"Front-runners\", 14% of the total, combine in-demand skills with an AI advantage: 51% use GenAI daily and 75% trust top management. At the other end is the \"engine room\", 56% of the workforce, which keeps operations running but feels increasingly squeezed: only 11% use GenAI daily and just 33% trust top management.",
        "Change is also taking its toll. One in five workers say they find it difficult to manage, and 18% don't understand the reasons for it; 27% cite fatigue and burnout as a limit on their productivity. It's not only a frontline issue: 31% of senior executives and 24% of managers admit they find change difficult to manage.",
        "Add to that a contradictory signal on skills. While AI reshapes tasks, ratings of access to learning resources fell from 59% to 51%. PwC's underlying message is that injecting AI into legacy operating models isn't enough: the payoff depends on people understanding the change, being able to learn and trusting those who lead it."
      ]
    },
    cita: {
      "original": "Injecting AI into legacy operating models isn't enough.",
      "traduccion_es": "Inyectar IA en modelos operativos heredados no es suficiente.",
      "autor_es": "PwC, Global Workforce Hopes and Fears Survey 2026",
      "autor_en": "PwC, Global Workforce Hopes and Fears Survey 2026"
    },
    preguntas_es: [
      "¿Qué explica que la confianza en la dirección caiga justo cuando más personas adoptan la IA?",
      "¿Cuánto del cambio que se comunica llega con sus razones, y no solo con sus instrucciones?",
      "¿Qué pasa con la mayoría que sostiene la operación cuando los beneficios de la IA se concentran en unos pocos?"
    ],
    preguntas_en: [
      "Why would trust in leadership fall just as more people adopt AI?",
      "How much of the change being communicated arrives with its reasons, not just its instructions?",
      "What happens to the majority that keeps operations running when AI's benefits concentrate in a few?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-ey-ceo",
    industria: null,
    tema: "ia_personas",
    subtema: "Rediseño de roles y habilidades",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-10-01",
    anio: "2026",
    fuente: "EY-Parthenon",
    estudio_es: "CEO Outlook Survey, octubre 2026",
    estudio_en: "CEO Outlook Survey, October 2026",
    link: "https://www.ey.com/en_gl/ceo/ceo-outlook-global-report",
    region_es: "Global (21 países, incl. Brasil, Canadá, México y EE.UU.)",
    region_en: "Global (21 countries, incl. Brazil, Canada, Mexico and the US)",
    hallazgo_es: "El 80% de los CEOs cree que la IA cambiará más los roles y las habilidades que el número de personas, pero solo 15% reinvierte las ganancias de productividad en su gente",
    hallazgo_en: "80% of CEOs believe AI will change roles and skills more than headcount, yet only 15% reinvest productivity gains in their people",
    dato_clave_es: "80% cree que en tres años la IA impactará más en roles, habilidades y forma de trabajar que en el tamaño de la plantilla. 47% admite que no desarrolla habilidades al ritmo de la IA y 72% prevé que la escasez de habilidades frenará más el crecimiento que el acceso a capital. Solo 15% destina las ganancias de productividad a desarrollar a su gente. Encuesta a 1,200 CEOs, agosto–septiembre de 2026.",
    dato_clave_en: "80% believe that within three years AI will affect roles, skills and ways of working more than workforce size. 47% admit they aren't building skills fast enough to keep pace with AI, and 72% expect skills shortages to hold back growth more than access to capital. Only 15% put productivity gains toward developing their people. Survey of 1,200 CEOs, August–September 2026.",
    contexto_es: "Encuesta online y anónima de EY-Parthenon a 1,200 CEOs de grandes empresas de 21 países (entre ellos Brasil, Canadá, México y EE.UU.) y cinco industrias, realizada en agosto y septiembre de 2026. 30% de las empresas factura más de US$5,000 millones al año.",
    contexto_en: "Anonymous online EY-Parthenon survey of 1,200 CEOs of large companies across 21 countries (including Brazil, Canada, Mexico and the US) and five industries, conducted in August and September 2026. 30% of the companies have annual revenue above US$5 billion.",
    puntos_es: [
      "80% cree que en tres años la IA impactará más en roles, habilidades y forma de trabajar que en el tamaño de la plantilla.",
      "47% reconoce que su organización no desarrolla habilidades al ritmo de la innovación en IA.",
      "72% cree que en tres años la escasez de habilidades será una barrera mayor para crecer que el acceso a capital.",
      "Solo 15% dice que las ganancias de productividad se reinvierten en el desarrollo de su gente.",
      "50% señala a la IA como el principal motor de sus ganancias de productividad; 33% menciona la recapacitación.",
      "23% dice que las ganancias de la IA suelen diluirse antes de llegar al resultado final."
    ],
    puntos_en: [
      "80% believe that within three years AI will affect roles, skills and ways of working more than workforce size.",
      "47% admit their organization isn't developing skills fast enough to keep pace with AI innovation.",
      "72% believe skills shortages will become a bigger barrier to growth than access to capital within three years.",
      "Only 15% say productivity gains are reinvested in developing their workforce.",
      "50% cite AI as the top driver of their productivity gains; 33% cite reskilling.",
      "23% say AI gains are often absorbed before reaching the bottom line."
    ],
    articulo_es: {
      "bajada": "Los CEOs ya ven la productividad que trae la IA y saben que el gran cambio será en los roles y las habilidades. Lo que casi ninguno hace es reinvertir esas ganancias en su gente.",
      "parrafos": [
        "La edición de octubre del CEO Outlook de EY-Parthenon, con 1,200 CEOs de grandes empresas de 21 países, muestra que la IA ya produce resultados medibles: 50% la señala como el principal motor de sus ganancias de productividad, por delante del rediseño de procesos (46%). El problema, según EY, es convertir esa eficiencia en crecimiento.",
        "En materia de personas, el diagnóstico de los propios CEOs es claro. Cuatro de cada cinco (80%) creen que, en los próximos tres años, la IA tendrá un efecto mayor en los roles, las habilidades y la forma de organizar el trabajo que en el tamaño de la plantilla. Es decir, la conversación de fondo no sería cuántas personas, sino qué harán y con qué capacidades.",
        "Esa lectura viene acompañada de una alerta. 47% admite que su organización no desarrolla habilidades al ritmo de la innovación en IA, y 72% anticipa que en tres años la escasez de habilidades será una barrera mayor para crecer que el acceso a capital. Para líderes acostumbrados a pensar en el capital como el recurso escaso, es un cambio de prioridad notable.",
        "La contradicción aparece en dónde ponen el dinero. Solo 15% dice que las ganancias de productividad se reinvierten en el desarrollo de su gente, frente a 48% que las destina a innovación y transformación. Y aunque 33% reconoce a la recapacitación como fuente de productividad, 23% admite que parte de lo ganado con IA se diluye antes de llegar al resultado.",
        "El estudio deja así una brecha a la vista: los CEOs identifican las habilidades como el próximo cuello de botella, pero la inversión en ellas sigue siendo marginal. Como resume Andrea Guerzoni, vicepresidente global de EY-Parthenon, la productividad sola no es una estrategia."
      ]
    },
    articulo_en: {
      "bajada": "CEOs are already seeing AI's productivity gains and know the big shift will be in roles and skills. Almost none of them are reinvesting those gains in their people.",
      "parrafos": [
        "The October edition of EY-Parthenon's CEO Outlook, covering 1,200 CEOs of large companies in 21 countries, shows AI is already delivering measurable results: 50% name it as the biggest driver of their productivity gains, ahead of business process redesign (46%). The problem, according to EY, is turning that efficiency into growth.",
        "On people, CEOs' own diagnosis is clear. Four in five (80%) believe that over the next three years AI will have a greater effect on roles, skills and how work is organized than on workforce size. In other words, the underlying question isn't how many people, but what they'll do and with which capabilities.",
        "That view comes with a warning. 47% admit their organization isn't developing skills fast enough to keep pace with AI innovation, and 72% expect skills shortages to become a bigger barrier to growth than access to capital within three years. For leaders used to treating capital as the scarce resource, it's a notable shift in priorities.",
        "The contradiction shows up in where the money goes. Only 15% say productivity gains are reinvested in workforce development, compared with 48% who channel them into innovation and transformation. And while 33% recognize reskilling as a source of productivity, 23% admit some AI gains are absorbed before reaching the bottom line.",
        "The study thus exposes a visible gap: CEOs identify skills as the next bottleneck, yet investment in them remains marginal. As Andrea Guerzoni, EY-Parthenon Global Vice Chair, puts it, productivity alone is not a strategy."
      ]
    },
    cita: {
      "original": "AI is creating real productivity gains, but productivity alone is not a strategy.",
      "traduccion_es": "La IA está generando ganancias reales de productividad, pero la productividad por sí sola no es una estrategia.",
      "autor_es": "Andrea Guerzoni, vicepresidente global de EY-Parthenon",
      "autor_en": "Andrea Guerzoni, EY-Parthenon Global Vice Chair"
    },
    preguntas_es: [
      "¿Qué significa para la organización que la IA cambie más los roles que la cantidad de personas?",
      "¿Por qué las habilidades se reconocen como cuello de botella, pero reciben tan poca inversión?",
      "¿Cómo se explica a los equipos hacia dónde van las ganancias de productividad que ayudan a generar?"
    ],
    preguntas_en: [
      "What does it mean for an organization when AI changes roles more than headcount?",
      "Why are skills recognized as a bottleneck yet receive so little investment?",
      "How do you explain to teams where the productivity gains they help create are going?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-kpmg-ceo-eeuu",
    industria: null,
    tema: "ia_personas",
    subtema: "Rediseño de roles y habilidades",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-10-15",
    anio: "2026",
    fuente: "KPMG",
    estudio_es: "2026 US CEO Outlook",
    estudio_en: "2026 US CEO Outlook",
    link: "https://kpmg.com/us/en/media/news/kpmg-us-ceo-outlook-2026.html",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "86% de los CEOs de grandes empresas de EE.UU. está rediseñando roles, trayectorias y equipos para la colaboración entre personas e IA",
    hallazgo_en: "86% of CEOs at large US companies are redesigning roles, career paths and team structures for human-AI collaboration",
    dato_clave_es: "86% rediseña roles, trayectorias de carrera y estructura de equipos pensando en la colaboración persona-IA; 81% dice que la IA lo llevó a repensar cómo forma a su gente y 75% qué habilidades exige en puestos de entrada. La brecha de habilidades (60%) es el principal desafío de talento. Encuesta a 400 CEOs de EE.UU.",
    dato_clave_en: "86% are redesigning roles, career paths and team structure to reflect human-AI collaboration; 81% say AI has made them rethink how they train and develop employees, and 75% the skills required for entry-level roles. The skills gap (60%) is the top workforce challenge. Survey of 400 US CEOs.",
    contexto_es: "Estudio anual de KPMG a 400 CEOs de empresas de EE.UU. con ingresos anuales superiores a US$500 millones (más de un tercio supera los US$10,000 millones), parte de una encuesta global a más de 1,300 CEOs de grandes empresas. Publicado el 15 de octubre de 2026; KPMG no detalla fechas de campo.",
    contexto_en: "KPMG's annual study of 400 CEOs at US companies with annual revenues above US$500 million (more than a third exceed US$10 billion), part of a global survey of more than 1,300 CEOs at large companies. Published October 15, 2026; KPMG does not disclose fieldwork dates.",
    puntos_es: [
      "86% está rediseñando roles, trayectorias de carrera y estructura de equipos para reflejar la colaboración persona-IA.",
      "83% se enfoca en retener y reentrenar a su talento de alto potencial; 79% en contratar talento con capacidades de IA y tecnología.",
      "53% planea reducir su plantilla en algunas áreas.",
      "81% dice que la integración de la IA lo llevó a repensar cómo forma y desarrolla a sus colaboradores, y 75% qué habilidades exige para los puestos de entrada.",
      "La brecha de habilidades (60%) encabeza los desafíos de talento, seguida de capacitar en sistemas de IA (55%) y atraer y retener talento (49%).",
      "84% dice que la IA es una de sus principales prioridades de inversión para los próximos tres años, pero solo 9% afirma que los agentes de IA ya son transformadores para su organización."
    ],
    puntos_en: [
      "86% are redesigning roles, career paths and team structure to reflect human-AI collaboration.",
      "83% are focusing on retaining and retraining high-potential talent; 79% on hiring new talent with AI and tech capabilities.",
      "53% are planning for workforce reduction in some areas.",
      "81% say integrating AI has made them rethink how they train and develop employees, and 75% the skills required for entry-level roles.",
      "The skills gap (60%) tops the list of workforce challenges, followed by upskilling employees on AI systems (55%) and attracting and retaining talent (49%).",
      "84% say AI is a top investment priority over the next three years, yet only 9% say AI agents are already transformational for their organization."
    ],
    articulo_es: {
      "bajada": "Los CEOs de las grandes empresas de EE.UU. ya no discuten si la IA cambiará el trabajo, sino cómo rearmar roles, carreras y equipos alrededor de ella. El cuello de botella son las habilidades.",
      "parrafos": [
        "El 2026 US CEO Outlook de KPMG retrata a líderes confiados en la IA como motor de negocio. 84% de los 400 CEOs consultados dice que es una de sus principales prioridades de inversión para los próximos tres años y 65% planea destinarle al menos 10% de su presupuesto de capital el próximo año. Pero la conversación más profunda del estudio no es sobre tecnología, sino sobre cómo se organiza el trabajo.",
        "Al preguntarles cómo cambia su estrategia de talento a dos a cinco años por efecto de la IA, 86% dice estar rediseñando roles, trayectorias de carrera y estructura de equipos para reflejar la colaboración entre personas e IA. 83% se concentra en retener y reentrenar a su talento de alto potencial y 79% en contratar perfiles con capacidades de IA y tecnología. Al mismo tiempo, 53% planea reducir plantilla en algunas áreas: rediseño y recorte conviven en la misma agenda.",
        "La señal más llamativa está en la puerta de entrada. 75% dice que la IA lo llevó a repensar qué habilidades exige en los puestos de nivel inicial, y 81% a repensar cómo forma y desarrolla a sus colaboradores. Si las tareas con las que tradicionalmente aprendía un profesional junior se automatizan, la pregunta deja de ser solo qué se enseña, sino dónde y cuándo se aprende el oficio. El propio presidente de KPMG en EE.UU., Timothy J. Walsh, plantea en el estudio distinguir qué debe aprenderse antes de entrar al mundo laboral y qué se adquiere con la experiencia.",
        "El diagnóstico de los propios CEOs confirma que ahí está el cuello de botella: la brecha de habilidades (60%) es su principal desafío de talento, por encima de capacitar a la gente en sistemas de IA (55%) y de atraer y retener talento (49%).",
        "Hay además un contraste que matiza el entusiasmo. Pese a la apuesta inversora, solo 9% dice que los agentes de IA ya son transformadores para su organización, y 68% espera retorno de la IA recién en uno a tres años. El rediseño organizacional avanza antes de que el valor esté plenamente probado, lo que pone a las áreas de personas en el centro de una transición que todavía se está definiendo."
      ]
    },
    articulo_en: {
      "bajada": "CEOs at large US companies are no longer debating whether AI will change work, but how to rebuild roles, careers and teams around it. The bottleneck is skills.",
      "parrafos": [
        "KPMG's 2026 US CEO Outlook portrays leaders confident in AI as a business engine. 84% of the 400 CEOs surveyed say it is a top investment priority over the next three years, and 65% plan to spend at least 10% of their capital budget on it next year. But the study's deeper conversation isn't about technology; it's about how work gets organized.",
        "Asked how their two-to-five-year workforce strategies are changing in response to AI, 86% say they are redesigning roles, career paths and team structure to reflect human-AI collaboration. 83% are focusing on retaining and retraining high-potential talent, and 79% on hiring people with AI and tech capabilities. At the same time, 53% plan workforce reductions in some areas: redesign and cuts sit on the same agenda.",
        "The most striking signal is at the entry point. 75% say AI has made them rethink the skills required for entry-level roles, and 81% how they train and develop employees. If the tasks through which junior professionals traditionally learned are automated, the question is no longer just what gets taught, but where and when the craft is learned. KPMG US Chairman and CEO Timothy J. Walsh writes in the study about separating what should be learned before entering the workforce from what is acquired on the job.",
        "CEOs' own diagnosis confirms that this is the bottleneck: the skills gap (60%) is their biggest workforce challenge, ahead of upskilling people on AI systems (55%) and attracting and retaining talent (49%).",
        "There is also a contrast that tempers the enthusiasm. Despite the investment push, only 9% say AI agents are already transformational for their organization, and 68% expect AI returns only in one to three years. Organizational redesign is moving ahead before the value is fully proven, which puts people functions at the center of a transition that is still taking shape."
      ]
    },
    cita: {
      "original": "rethink how skills are developed, including what should be learned before entering the workforce",
      "traduccion_es": "repensar cómo se desarrollan las habilidades, incluido lo que debe aprenderse antes de entrar al mundo laboral",
      "autor_es": "Timothy J. Walsh, presidente y CEO de KPMG LLP",
      "autor_en": "Timothy J. Walsh, Chairman and CEO, KPMG LLP"
    },
    preguntas_es: [
      "Si los puestos de entrada cambian, ¿cómo aprenderán el oficio quienes recién llegan a la organización?",
      "¿Cómo se comunica un rediseño de roles cuando, al mismo tiempo, se planean reducciones en algunas áreas?",
      "¿Qué significa en la práctica una trayectoria de carrera pensada para la colaboración entre personas e IA?"
    ],
    preguntas_en: [
      "If entry-level roles change, how will newcomers learn the craft?",
      "How do you communicate a redesign of roles when workforce reductions are also planned in some areas?",
      "What does a career path designed for human-AI collaboration look like in practice?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-10-jll-latam-ia",
    industria: null,
    tema: "ia_personas",
    subtema: "IA y trabajo",
    esEjemplo: false,
    publicado: "2026-10-26",
    fecha: "2026-08-25",
    anio: "2026",
    fuente: "JLL",
    estudio_es: "Encuesta sobre el futuro del trabajo en Latinoamérica 2026",
    estudio_en: "2026 Latin America Future of Work Survey",
    link: "https://www.jll.com/es-mx/insights/latam-future-of-work-survey-es",
    region_es: "Latinoamérica (Argentina, Brasil, Colombia y México)",
    region_en: "Latin America (Argentina, Brazil, Colombia and Mexico)",
    hallazgo_es: "En Latinoamérica, 47% pone la transformación de la fuerza laboral impulsada por IA como su principal prioridad, pero es el escenario para el que se sienten menos preparados",
    hallazgo_en: "In Latin America, 47% name AI-driven workforce transformation as their top priority, yet it is the scenario they feel least ready for",
    dato_clave_es: "47% de los líderes latinoamericanos ubica la transformación de la fuerza laboral impulsada por IA como prioridad estratégica número uno, con el nivel de preparación más bajo de los ocho escenarios evaluados. 49% ve la incertidumbre sobre el impacto de la IA en el espacio de trabajo como un riesgo, frente a 40% a nivel global.",
    dato_clave_en: "47% of Latin American leaders rank AI-driven workforce transformation as their number one strategic priority, with the lowest readiness of the eight scenarios evaluated. 49% see uncertainty about AI's impact on the workplace as a risk, versus 40% globally.",
    contexto_es: "Capítulo latinoamericano de la encuesta global bienal de JLL sobre el futuro del trabajo, que se realiza desde 2011 entre tomadores de decisión de bienes raíces corporativos. La edición 2026 reúne a más de 2,200 participantes de 21 mercados, de los cuales 150 son de Latinoamérica, con representación de Argentina, Brasil, Colombia y México. Datos recogidos en el primer trimestre de 2026.",
    contexto_en: "Latin American chapter of JLL's biennial global Future of Work Survey, conducted since 2011 among corporate real estate decision-makers. The 2026 edition gathers more than 2,200 participants across 21 markets, 150 of them in Latin America, with representation from Argentina, Brazil, Colombia and Mexico. Data collected in the first quarter of 2026.",
    puntos_es: [
      "47% pone la transformación de la fuerza laboral impulsada por IA como su principal prioridad estratégica; es, a la vez, el escenario con menor preparación de los ocho evaluados.",
      "49% de los encuestados latinoamericanos ve la incertidumbre sobre el impacto de la IA en el espacio de trabajo como un riesgo para su cartera, frente a 40% a nivel global.",
      "35% señala la complejidad regulatoria y de cumplimiento como la principal barrera en la región.",
      "33% apunta a la escasez de mano de obra técnica especializada como segunda barrera.",
      "65% de las organizaciones prioriza el posicionamiento estratégico a largo plazo y 64% la inversión transformadora en sus inmuebles corporativos."
    ],
    puntos_en: [
      "47% name AI-driven workforce transformation as their top strategic priority; it is also the scenario with the lowest readiness of the eight evaluated.",
      "49% of Latin American respondents see uncertainty about AI's impact on the workplace as a risk to their portfolio, versus 40% globally.",
      "35% cite regulatory and compliance complexity as the main barrier in the region.",
      "33% point to a shortage of specialized technical labor as the second barrier.",
      "65% of organizations prioritize long-term strategic positioning and 64% transformational investment in their corporate real estate."
    ],
    articulo_es: {
      "bajada": "Los líderes de la región ya decidieron que la IA va a cambiar cómo se trabaja. Lo que no tienen resuelto es cómo llegar ahí, ni qué pasará con los espacios donde su gente trabaja.",
      "parrafos": [
        "La encuesta de JLL a responsables de bienes raíces corporativos deja una paradoja nítida en Latinoamérica. La transformación de la fuerza laboral impulsada por IA es la principal prioridad estratégica de la región, señalada por 47% de los encuestados. Pero de los ocho escenarios que la consultora puso a prueba, es justamente el que muestra el nivel de preparación más bajo. La apuesta está hecha; la capacidad para ejecutarla, todavía no.",
        "El dato importa porque viene de quienes deciden dónde y en qué condiciones trabaja la gente. El capítulo regional reúne a 150 tomadores de decisión de Argentina, Brasil, Colombia y México, dentro de una muestra global de más de 2,200 participantes en 21 mercados, encuestados durante el primer trimestre de 2026. Es decir, la IA dejó de ser solo un tema de tecnología o de recursos humanos: también está entrando en las conversaciones sobre oficinas, carteras inmobiliarias e inversión.",
        "La región, además, se siente más expuesta que el resto del mundo. 49% de los latinoamericanos ve la incertidumbre sobre el impacto de la IA en el espacio de trabajo como un riesgo para su cartera, frente a 40% a nivel global. Nadie sabe todavía cuántas personas, con qué roles y en qué espacios trabajarán dentro de unos años, y esa duda pesa más aquí.",
        "Los frenos también son distintos. A nivel global, JLL identifica la escasez de habilidades en IA como la principal limitación. En Latinoamérica, en cambio, el primer obstáculo es la complejidad regulatoria y de cumplimiento (35%), seguida de la escasez de mano de obra técnica especializada (33%). El talento sigue en la lista, pero el entorno normativo aparece antes, lo que sugiere que el ritmo del cambio no depende solo de lo que las empresas decidan puertas adentro.",
        "Aun con esa incertidumbre, las organizaciones no están en modo de espera: 65% prioriza el posicionamiento estratégico a largo plazo y 64% la inversión transformadora en sus inmuebles corporativos. El cuadro que deja el estudio es el de una región que quiere moverse rápido hacia un trabajo rediseñado por la IA, pero que todavía tiene que construir las capacidades, en personas y en reglas, para sostener ese cambio."
      ]
    },
    articulo_en: {
      "bajada": "The region's leaders have already decided AI will change how work gets done. What they haven't worked out is how to get there, or what happens to the spaces where their people work.",
      "parrafos": [
        "JLL's survey of corporate real estate decision-makers reveals a clear paradox in Latin America. AI-driven workforce transformation is the region's top strategic priority, named by 47% of respondents. Yet of the eight scenarios the firm tested, it is precisely the one with the lowest readiness. The bet has been placed; the capacity to deliver on it has not caught up.",
        "That matters because the data comes from the people who decide where and under what conditions others work. The regional chapter covers 150 decision-makers from Argentina, Brazil, Colombia and Mexico, part of a global sample of more than 2,200 participants across 21 markets, surveyed in the first quarter of 2026. In other words, AI is no longer just a technology or HR topic: it is entering conversations about offices, real estate portfolios and investment.",
        "The region also feels more exposed than the rest of the world. 49% of Latin Americans see uncertainty about AI's impact on the workplace as a risk to their portfolio, compared with 40% globally. No one yet knows how many people, in what roles and in which spaces, will be working a few years from now, and that doubt weighs more heavily here.",
        "The brakes are different too. Globally, JLL identifies the AI skills shortage as the main constraint. In Latin America, by contrast, the top obstacle is regulatory and compliance complexity (35%), followed by a shortage of specialized technical labor (33%). Talent is still on the list, but the regulatory environment comes first, suggesting that the pace of change does not depend only on what companies decide internally.",
        "Despite that uncertainty, organizations are not standing still: 65% prioritize long-term strategic positioning and 64% transformational investment in their corporate real estate. The picture the study paints is of a region that wants to move fast toward work redesigned by AI, but still has to build the capabilities, in people and in rules, to sustain that change."
      ]
    },
    cita: {
      "original": "La IA es una prioridad, pero la preparación es desigual.",
      "traduccion_es": "La IA es una prioridad, pero la preparación es desigual.",
      "autor_es": "JLL, principales hallazgos de la encuesta",
      "autor_en": "JLL, key findings of the survey"
    },
    preguntas_es: [
      "¿Qué significa para los equipos que la IA sea la prioridad número uno y, a la vez, aquello para lo que la organización está menos preparada?",
      "¿Cómo se conversa con las personas sobre un futuro del trabajo que ni siquiera los líderes tienen claro?",
      "¿Qué papel juegan el espacio físico y sus cambios en la manera en que la gente vive la llegada de la IA?"
    ],
    preguntas_en: [
      "What does it mean for teams when AI is the number one priority and, at the same time, what the organization is least prepared for?",
      "How do you talk with people about a future of work that even leaders don't have clear?",
      "What role does physical space, and changes to it, play in how people experience the arrival of AI?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
];


// Recomendaciones reales de LinkedIn (fragmentos). Cada una en su idioma
// original y con su traducción. Fuente: perfil de LinkedIn de Desirée.
const RECOMENDACIONES = [
  {
    nombre: "Tanesia Leflore",
    rol_es: "Fue su líder directa en Accenture",
    rol_en: "Managed Desirée directly at Accenture",
    texto_es: "Rápidamente se convirtió en una de las personas en las que más confiaba para el trabajo con clientes.",
    texto_en: "She quickly became one of the people I trusted most on client work.",
  },
  {
    nombre: "Vishnu Rao",
    rol_es: "Novartis · trabajaron juntos desde el lado del cliente",
    rol_en: "Novartis · worked together from the client side",
    texto_es: "Desi es reflexiva, colaborativa, muy receptiva y una gran comunicadora.",
    texto_en: "Desi is thoughtful, collaborative, highly responsive, and a strong communicator.",
  },
  {
    nombre: "Valeria Martínez Pereyra",
    rol_es: "Compañera de equipo en un proyecto de transformación organizacional",
    rol_en: "Teammate on an organizational transformation project",
    texto_es: "Rápidamente encontré en ella equipo, colaboración, profesionalismo y una gran capacidad de análisis del cliente.",
    texto_en: "I quickly found in her teamwork, collaboration, professionalism and a great ability to analyze the client.",
  },
  {
    nombre: "Inés Weiss",
    rol_es: "Formó parte de su equipo en Accenture",
    rol_en: "Was part of her team at Accenture",
    texto_es: "Su capacidad para liderar, escuchar y potenciar a las personas hace que trabajar con ella sea realmente un placer.",
    texto_en: "Her ability to lead, listen to and empower people makes working with her a real pleasure.",
  },
];
