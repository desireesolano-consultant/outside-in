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
      "bajada": "Las cadenas de suministro de EE.UU. necesitarán mucha más gente de la que habrá disponible, y Accenture sostiene que esa brecha ya no se cierra contratando.",
      "parrafos": [
        "Accenture proyecta que las cadenas de suministro de EE.UU. enfrentarán una falta de personal que la contratación no alcanzará a cubrir. Según su modelo de escenarios, entre 2026 y 2035 la demanda en ocupaciones clave crecerá 19%, mientras la fuerza laboral solo crecerá 3.2%. La diferencia es de casi 1.1 millones de puestos. El hallazgo importa porque pone en duda la respuesta habitual a una operación más compleja: sumar personas.",
        "En números absolutos, la demanda sumaría 1.34 millones de puestos y la fuerza laboral apenas unos 221,000 trabajadores. El estudio insiste en que no es un problema cíclico que se resolverá cuando la economía se enfríe. Las mismas fuerzas que expanden las cadenas (más nodos, más promesas al cliente, más regulación) también suman coordinación dentro de cada rol. Vistas juntas, estas piezas describen una brecha estructural: no solo faltan puestos, cada puesto se vuelve más exigente.",
        "Pero la tecnología por sí sola tampoco resuelve el problema. En algunos casos, hasta 48% del trabajo rutinario podría automatizarse por completo, aunque solo cuando varias tecnologías funcionan en conjunto. El modelo muestra que, al combinar tecnología con un rediseño deliberado de roles, el crecimiento de la plantilla pasa de +18.7% a cerca de -3.0% en el periodo. Ese matiz cambia la pregunta: lo decisivo no es cuánta tecnología se incorpora, sino cómo se rediseña el trabajo a su alrededor.",
        "Por eso el estudio lleva la discusión al liderazgo. Accenture propone tres movimientos: anticipar las necesidades de talento, rediseñar el trabajo a medida que crece la automatización y desarrollar habilidades de forma continua. Según el estudio, esa planificación no puede quedar solo en Recursos Humanos: el líder de supply chain (cadena de suministro) define el trabajo y el de Recursos Humanos prepara a la gente para hacerlo. Para las personas, lo que está en juego es entender cómo cambiará su trabajo y dónde seguirá importando su criterio.",
        "El estudio ubica en el rediseño del trabajo el momento en que se gana o se pierde la confianza. La reconversión solo escala si las personas ven que les abre un camino profesional real. Así, la escasez de talento termina siendo tanto un desafío de confianza como de números."
      ]
    },
    articulo_en: {
      "bajada": "US supply chains will need far more people than will be available, and Accenture argues that gap can no longer be closed through hiring.",
      "parrafos": [
        "Accenture projects that US supply chains will face a labor shortfall that hiring won't be able to cover. According to its scenario model, demand in core occupations will grow 19% between 2026 and 2035, while the labor force will grow just 3.2%. The difference is nearly 1.1 million roles. The finding matters because it challenges the usual answer to a more complex operation: adding people.",
        "In absolute terms, demand would add 1.34 million roles while the labor force would add only about 221,000 workers. The study stresses this is not a cyclical problem that will ease when the economy cools. The same forces that expand supply chains (more nodes, more customer promises, more regulation) also add coordination inside every role. Taken together, these pieces describe a structural gap: it's not just that roles are missing, but that each role is getting more demanding.",
        "But technology alone doesn't solve the problem either. In some cases, up to 48% of routine work could be fully automated, but only when several technologies work together. The model shows that when technology is paired with deliberate role redesign, workforce growth compresses from +18.7% to about -3.0% over the period. That nuance shifts the question: what matters is not how much technology gets added, but how work is redesigned around it.",
        "That's why the study takes the discussion to leadership. Accenture proposes three moves: anticipate talent needs, redesign work as automation scales and build skills continuously. According to the study, that planning can't sit only with Human Resources: the supply chain leader defines the work, and the HR leader equips people to do it. For employees, what's at stake is understanding how their work will change and where their judgment will still matter.",
        "The study places trust at the heart of work redesign: that's where it is won or lost. Reskilling only scales when people see it opening a real career path. In the end, the talent shortage is as much a challenge of trust as it is of numbers."
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
      "bajada": "Muchas organizaciones prueban agentes de IA, pero pocas los tienen funcionando de verdad. Deloitte atribuye esa brecha al diseño del trabajo más que a la tecnología.",
      "parrafos": [
        "El informe Tech Trends 2026 de Deloitte muestra que la IA agéntica (sistemas que ejecutan tareas por su cuenta) avanza mucho más lento de lo que sugiere el entusiasmo. Según su encuesta de tecnologías emergentes, 38% de las organizaciones está en pilotos y apenas 11% tiene agentes funcionando en producción. Además, 35% no tiene una estrategia formal. El dato importa porque revela una distancia grande entre experimentar con agentes y lograr que trabajen en el día a día.",
        "Para Deloitte, el problema rara vez es la tecnología. Las empresas intentan automatizar procesos diseñados por y para personas, en lugar de repensar cómo debería hacerse el trabajo. A eso se suman sistemas heredados que no fueron pensados para agentes y datos difíciles de encontrar (48%) y de reutilizar (47%). Gartner, citado en el informe, incluso anticipa que más de 40% de los proyectos agénticos fracasarán hacia 2027. Juntas, estas cifras ubican el cuello de botella en los procesos y los datos, no en los agentes.",
        "Las organizaciones que sí avanzan miran los procesos de punta a punta. Toyota usa un agente para seguir la llegada de vehículos a los concesionarios, un trabajo que antes exigía revisar entre 50 y 100 pantallas de mainframe. En la aseguradora Mapfre, los agentes resuelven tareas administrativas de siniestros, pero cualquier comunicación sensible con un cliente pasa por una persona. Estos casos muestran que avanzar no significa sacar a las personas del proceso, sino decidir con cuidado dónde deben estar.",
        "Lo que está en juego es la forma misma de organizar el trabajo. Gartner proyecta que para 2028 el 15% de las decisiones de trabajo del día a día se tomarán de forma autónoma, frente a cero en 2024. Deloitte habla de una fuerza laboral \"de silicio\" que necesitará algo parecido a la gestión de personas: incorporación, evaluación de desempeño y hasta retiro. Moderna ya unió Recursos Humanos y Tecnología bajo un mismo liderazgo para planificar el trabajo, lo haga una persona o una tecnología. En ese modelo, las personas pasan a supervisar y gobernar a los agentes y a buscar nuevas oportunidades de crecimiento.",
        "El informe sugiere que la ventaja no estará en cuántos agentes despliega una empresa. Estará en qué tan bien diseña la colaboración entre personas y agentes. La tecnología ya está disponible; lo que todavía falta, en la mayoría de los casos, es rediseñar el trabajo."
      ]
    },
    articulo_en: {
      "bajada": "Many organizations are testing AI agents, but few have them truly working. Deloitte attributes that gap to how work is designed more than to the technology.",
      "parrafos": [
        "Deloitte's Tech Trends 2026 report shows that agentic AI (systems that carry out tasks on their own) is moving much more slowly than the excitement suggests. According to its emerging technology survey, 38% of organizations are piloting and only 11% have agents running in production. Another 35% have no formal strategy. The finding matters because it reveals a wide distance between experimenting with agents and getting them to do everyday work.",
        "For Deloitte, the problem is rarely the technology. Companies try to automate processes designed by and for people instead of rethinking how the work should be done. Add legacy systems that weren't built for agents and data that is hard to find (48%) and reuse (47%). Gartner, cited in the report, even expects more than 40% of agentic projects to fail by 2027. Together, these figures place the bottleneck in processes and data, not in the agents themselves.",
        "The organizations making progress look at processes end to end. Toyota uses an agent to track vehicles' arrival at dealerships, work that used to involve checking 50 to 100 mainframe screens. At insurer Mapfre, agents handle administrative claims tasks, but any sensitive customer communication goes through a person. These cases show that progress doesn't mean taking people out of the process, but deciding carefully where they belong.",
        "What's at stake is how work itself is organized. Gartner predicts that by 2028, 15% of day-to-day work decisions will be made autonomously, up from none in 2024. Deloitte describes a \"silicon-based\" workforce that will need something like people management: onboarding, performance management and even retirement. Moderna has already combined Human Resources and Technology under one leader to plan work, whether a person or a technology does it. In that model, people shift toward overseeing and governing agents and finding new growth opportunities.",
        "The report suggests the edge won't come from how many agents a company deploys. It will come from how well it designs collaboration between people and agents. The technology is already available; what's still missing, in most cases, is redesigning the work."
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
      "bajada": "Una encuesta de McKinsey muestra que los inversionistas de largo plazo castigan menos un resultado fallido que la pérdida de credibilidad.",
      "parrafos": [
        "McKinsey encuestó a inicios de 2026 a 112 inversionistas, en su mayoría de largo plazo, de Norteamérica y Europa. El hallazgo principal contradice una creencia muy arraigada: 62% prefiere una empresa que a veces no cumple el consenso de resultados pero crea valor sólido a largo plazo. Solo 17% elige a la que cumple siempre. Importa porque cuestiona la idea de que cumplir cada trimestre es lo que más valoran los inversionistas.",
        "Las respuestas muestran una asimetría clara. Cuando una empresa supera las estimaciones de forma sistemática, solo 49% lo lee como buena señal, y una parte sospecha que la guía era conservadora. En cambio, cuando incumple una y otra vez, 73% lo interpreta como un problema de transparencia o de control. Para estos inversionistas, el patrón pesa más que el número de un trimestre.",
        "Eso no significa que el consenso deje de importar: 59% sigue considerando importante o muy importante cumplirlo o superarlo. Investigaciones previas de McKinsey agregan un matiz: el precio de la acción cae tras un incumplimiento solo cuando los analistas también bajan sus proyecciones de los años siguientes, y en cerca de 40% de los casos incluso sube. El número cuenta, pero como señal de lo que viene, no como examen aislado.",
        "El tema gana peso porque los inversionistas cambiaron de herramientas. 47% ya usa IA generativa con frecuencia en su análisis, lo que vuelve más visibles las inconsistencias entre un documento y otro. Al mismo tiempo, casi nueve de cada diez quieren más tiempo de preguntas en las llamadas de resultados, y las presentaciones más ensayadas son la mejora menos pedida. Para 86%, la profundidad y el detalle de la información es lo que más distingue una buena comunicación. Lo que buscan es conversación con sustancia, no un guion pulido.",
        "Aunque el estudio trata sobre relación con inversionistas, describe algo más amplio: cómo se construye la credibilidad de un liderazgo. Una estrategia explicada con claridad, malas noticias anticipadas a tiempo y compromisos que se pueden verificar valen más que un trimestre perfecto."
      ]
    },
    articulo_en: {
      "bajada": "A McKinsey survey shows that long-term investors punish a missed number less than they punish lost credibility.",
      "parrafos": [
        "In early 2026, McKinsey surveyed 112 mostly long-term investors in North America and Europe. Its main finding contradicts a deep-rooted belief: 62% prefer a company that occasionally misses consensus but creates strong long-term value. Only 17% choose the one that always delivers. It matters because it challenges the idea that hitting every quarter is what investors value most.",
        "The answers reveal a clear asymmetry. When a company consistently beats estimates, only 49% read it as a positive signal, and some suspect the guidance was conservative. But when it misses again and again, 73% see a problem of transparency or control. For these investors, the pattern weighs more than any single quarter's number.",
        "That doesn't mean consensus stops mattering: 59% still consider meeting or beating it important or very important. Earlier McKinsey research adds a nuance: share prices fall after a miss only when analysts also cut their forecasts for the following years, and in about 40% of cases they actually rise. The number counts, but as a signal of what's ahead, not as a stand-alone test.",
        "The issue carries more weight now because investors have changed their tools. 47% already use generative AI often in their analysis, which makes inconsistencies across documents more visible. At the same time, nearly nine in ten want more Q&A time on earnings calls, and more rehearsed presentations are the least requested improvement. For 86%, depth and specificity of information is what most sets good communication apart. What they want is substantive conversation, not a polished script.",
        "Although the study is about investor relations, it describes something broader: how leadership credibility is built. A clearly explained strategy, bad news flagged early and commitments that can be verified are worth more than a perfect quarter."
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
      "bajada": "Las familias de EE.UU. siguen gastando más rápido de lo que ganan, y Deloitte anticipa que el ajuste llegará por el lado del consumo.",
      "parrafos": [
        "El pronóstico económico de Deloitte para el tercer trimestre de 2026, basado sobre todo en datos oficiales, detecta una señal de alerta en el consumidor de EE.UU.: gasta más rápido de lo que gana. En julio, el gasto de consumo creció 5.9% interanual, frente a 4.5% del ingreso disponible y 3.5% de los salarios. Importa porque el consumo sostiene buena parte de la economía, y hoy lo hace con un colchón cada vez más delgado.",
        "La brecha no es nueva: el gasto supera a los ingresos desde junio de 2024, y este año se amplió. Como resultado, la tasa de ahorro personal está en 3% o menos desde abril de 2026. Eso solo había ocurrido en 41 de los 807 meses con datos, casi todos entre 2005 y 2008. En conjunto, estos datos muestran que las familias sostienen su ritmo de gasto ahorrando cada vez menos, algo poco habitual.",
        "Deloitte aclara que esto no significa necesariamente una burbuja. Lo que espera es que el gasto vuelva a alinearse con los ingresos en los próximos trimestres, y que el ajuste venga por el lado del consumo, porque los salarios por hora se desaceleran y la demografía limita el crecimiento del empleo. Su proyección es que el consumo real crezca 2% en 2026 y 1.4% en 2027. La lectura, entonces, no es de quiebre sino de desaceleración: el consumo seguiría creciendo, pero más despacio.",
        "El contexto deja poco margen. Parte de la fortaleza de la economía viene de la inversión en inteligencia artificial y del efecto riqueza de las subidas en la bolsa. La inflación sigue por encima de la meta (el índice de precios PCE subyacente subió 3.4% en agosto) y la Reserva Federal volvió a subir tasas en septiembre. En el escenario más pesimista de Deloitte, una corrección de 35% en la bolsa llevaría el desempleo a 7.2%. Con tan poco ahorro, los hogares quedan más expuestos si alguno de esos apoyos se debilita.",
        "Para el consumo masivo, la señal es de cautela: el comprador que hoy sostiene las ventas lo hace gastando más de lo que gana, y Deloitte no ve ese ritmo como sostenible. Son datos de Estados Unidos, pero toman el pulso del mercado de consumo más grande del mundo."
      ]
    },
    articulo_en: {
      "bajada": "US households are still spending faster than they earn, and Deloitte expects the adjustment to come from the spending side.",
      "parrafos": [
        "Deloitte's Q3 2026 economic forecast, based mainly on official data, flags a warning sign in the US consumer: spending is growing faster than earnings. In July, consumer spending grew 5.9% year over year, versus 4.5% for disposable income and 3.5% for wages. It matters because consumption drives much of the economy, and today it's doing so with a thinner and thinner cushion.",
        "The gap isn't new: spending has outpaced income since June 2024, and it widened this year. As a result, the personal saving rate has been at 3% or lower since April 2026. That had happened in only 41 of the 807 months on record, almost all between 2005 and 2008. Together, these figures show households keeping up their spending by saving less and less, which is unusual.",
        "Deloitte notes this doesn't necessarily mean a bubble. What it expects is for spending to realign with income in the coming quarters, with the adjustment coming from the spending side, because hourly wage growth is slowing and demographics limit job growth. It forecasts real consumer spending growth of 2% in 2026 and 1.4% in 2027. The outlook, then, is not a break but a slowdown: spending would keep growing, just more slowly.",
        "The context leaves little room. Part of the economy's strength comes from AI-related investment and the wealth effect of rising stock prices. Inflation remains above target (core PCE prices were up 3.4% in August), and the Federal Reserve raised rates again in September. In Deloitte's downside scenario, a 35% equity-market correction would push unemployment to 7.2%. With so little saved, households are more exposed if any of those supports weakens.",
        "For consumer goods, the signal is caution: the shopper sustaining sales today is spending more than they earn, and Deloitte doesn't see that pace as sustainable. The data is US-only, but it takes the pulse of the world's largest consumer market."
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
      "bajada": "Las ventas se mueven hacia lo digital, pero la decisión de compra sigue ocurriendo en la tienda. Para EY, la pregunta no es si cerrarla, sino para qué sirve.",
      "parrafos": [
        "El Future Consumer Index de EY, una encuesta a más de 20,000 consumidores en 27 países, encontró que la tienda física sigue siendo el lugar donde se cierra la compra. 94% toma su decisión final en la tienda, después de explorar en distintos canales. El dato importa porque contradice la idea, muy repetida, de que la tienda física va camino a desaparecer.",
        "Otras cifras apuntan en la misma dirección. Según datos de Euromonitor citados por EY, la participación de las ventas físicas solo bajaría de 77% a 73% del total minorista entre 2025 y 2028, aunque lo digital crezca más rápido. Además, 45% de los consumidores descubre marcas nuevas en la tienda. Juntos, estos datos muestran que la tienda pierde terreno lentamente, pero conserva su papel en el descubrimiento y la decisión.",
        "Pero no todas las tiendas cumplen el mismo papel. Para lo esencial, la gente sigue prefiriendo el supermercado por costumbre y confianza; en ropa, belleza y cuidado personal, el recorrido mezcla lo digital y lo físico. Los más jóvenes buscan tiendas especializadas que ofrezcan descubrimiento y experiencia, y 60% de los consumidores ya usa IA para comprar, sobre todo en atención al cliente. El matiz es que no hay una sola tienda física: su función depende de qué se compra y de quién compra.",
        "Por eso EY propone que la tienda trabaje más. Plantea convertirla en espacio de experiencia y de servicios como salud, nutrición, asesoría, reparación, alquiler y reventa, en un contexto donde 72% intenta reparar antes que reemplazar. También sugiere usarla para publicidad dentro del local y como centro logístico. Pero advierte que no basta con abrir un consultorio en un supermercado: el cliente tiene que darle permiso a la marca para entrar en ese terreno, y eso exige paciencia y alianzas.",
        "Este análisis se publicó en junio de 2025, así que tiene más de un año. Aun así, la pregunta de fondo sigue abierta. La tienda física no está desapareciendo; lo que se redefine es qué ofrece y cuánta confianza necesita para ofrecerlo."
      ]
    },
    articulo_en: {
      "bajada": "Sales are shifting to digital, but purchase decisions still happen in store. For EY, the question isn't whether to close stores, but what they're for.",
      "parrafos": [
        "EY's Future Consumer Index, a survey of more than 20,000 consumers in 27 countries, found that the physical store is still where the purchase gets made. 94% make their final decision in store after browsing across channels. The finding matters because it contradicts the oft-repeated idea that physical stores are on their way out.",
        "Other figures point the same way. According to Euromonitor data cited by EY, the offline share of retail would only fall from 77% to 73% between 2025 and 2028, even as digital grows faster. And 45% of consumers discover new brands in store. Together, these figures show the store losing ground slowly while keeping its role in discovery and decision-making.",
        "But not every store plays the same role. For essentials, people still prefer supermarkets out of habit and trust; in clothing, beauty and personal care, the journey blends digital and physical. Younger shoppers gravitate to specialty stores that offer discovery and experience, and 60% of consumers already use AI to shop, mostly for customer service. The nuance is that there's no single physical store: its role depends on what is being bought and who is buying it.",
        "That's why EY argues stores should work harder. It suggests turning them into experience spaces and service hubs for health, nutrition, advice, repair, rental and resale, at a time when 72% try to repair before replacing. It also points to in-store advertising and using stores as fulfillment hubs. But it warns that opening a clinic in a supermarket isn't enough: customers have to give the brand permission to enter that space, and that takes patience and partnerships.",
        "This analysis was published in June 2025, so it's more than a year old. Even so, its core question remains open. Physical stores aren't disappearing; what's being redefined is what they offer and how much trust they need to offer it."
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
      "bajada": "Los líderes quieren moverse más rápido con la IA, pero Deloitte encuentra que la ventaja no está en la tecnología, que cualquiera puede copiar, sino en las personas.",
      "parrafos": [
        "El informe 2026 Global Human Capital Trends de Deloitte, elaborado con Oxford Economics, encuestó a más de 9,000 líderes de negocio y de Recursos Humanos en 89 países. 7 de cada 10 dicen que su principal estrategia para los próximos tres años es ser rápidos y ágiles. Según Deloitte, la urgencia tiene una razón: la IA comprime la curva clásica de crecimiento, acelera la subida y adelanta la meseta. Por eso la agilidad se vuelve prioridad: el tiempo para aprovechar cada etapa se acorta.",
        "Pero la forma de ganar velocidad también cambió. La IA está al alcance de todos y, por lo tanto, es fácil de copiar. En una investigación complementaria con 100 líderes C-level, 59% tiene un enfoque de IA centrado en la tecnología, y esas empresas tienen 1.6 veces más probabilidad de no lograr retornos por encima de lo esperado que las que ponen a las personas en el centro. Es una muestra pequeña y una asociación, no una prueba de causa, pero sugiere que apostar solo por la tecnología no asegura mejores resultados.",
        "Detrás de esos números aparece un costo menos visible: la \"deuda cultural\". Deloitte la describe como la desalineación y la desconfianza que se acumulan cuando la IA cambia el trabajo y nadie conversa sobre qué cuenta como esfuerzo, quién es dueño de un resultado o qué es justo. Según el informe, la mayoría de las organizaciones rara vez evalúa los efectos culturales de la IA. Ese matiz cambia el foco: el costo de la IA no se mide solo en inversión, también en confianza.",
        "Para salir de ese patrón, el informe plantea tres puntos de inflexión. El primero es pasar de humano + máquina a humano x máquina, es decir, rediseñar el trabajo para que ambos se potencien. Los otros dos son pasar de la eficiencia de costos a la creación de valor, y de planes estáticos a una orquestación dinámica de capacidades. A partir de ahí, Deloitte plantea siete preguntas que los líderes ya no pueden postergar, desde quién responde cuando deciden personas e IA juntas hasta cómo mantenerse relevantes.",
        "El informe también cuestiona la gestión del cambio tradicional: pocas organizaciones la ejecutan con eficacia, y la capacitación clásica puede ser demasiado lenta para el ritmo actual. Su alternativa es aprender en el flujo del trabajo, con la propia IA como apoyo. La idea que amarra todo es simple: la tecnología se puede copiar, pero la forma en que las personas trabajan con ella, no."
      ]
    },
    articulo_en: {
      "bajada": "Leaders want to move faster with AI, but Deloitte finds the edge doesn't lie in technology, which anyone can copy, but in people.",
      "parrafos": [
        "Deloitte's 2026 Global Human Capital Trends report, produced with Oxford Economics, surveyed more than 9,000 business and HR leaders in 89 countries. 7 in 10 say their primary strategy for the next three years is to be fast and nimble. According to Deloitte, the urgency has a reason: AI is compressing the classic growth curve, speeding up the climb and bringing the plateau sooner. That's why agility becomes a priority: the window to make the most of each stage is shrinking.",
        "But the way to gain speed has changed too. AI is within everyone's reach and therefore easy to copy. In complementary research with 100 C-suite leaders, 59% take a tech-focused approach to AI, and those companies are 1.6 times more likely not to see returns that exceed expectations than those that put people at the center. It's a small sample and an association, not proof of cause, but it suggests that betting on technology alone doesn't guarantee better results.",
        "Behind those numbers sits a less visible cost: \"cultural debt.\" Deloitte describes it as the misalignment and distrust that build up when AI changes work and nobody talks about what counts as effort, who owns an outcome or what is fair. According to the report, most organizations rarely evaluate AI's cultural effects. That nuance shifts the focus: the cost of AI isn't measured only in investment, but also in trust.",
        "To break that pattern, the report proposes three tipping points. The first is moving from human + machine to human x machine, that is, redesigning work so each amplifies the other. The other two are moving from cost efficiency to value creation, and from static plans to dynamic orchestration of capabilities. From there, Deloitte poses seven questions leaders can no longer defer, from who is accountable when people and AI decide together to how to stay relevant.",
        "The report also questions traditional change management: few organizations do it effectively, and classic training may be too slow for today's pace. Its alternative is learning in the flow of work, with AI itself as support. The idea that ties it all together is simple: technology can be copied, but the way people work with it can't."
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
      "bajada": "Las firmas financieras de EE.UU. quieren acelerar con la IA, pero el freno más cercano está adentro: personas con miedo, cansadas o que la usan solo por obligación.",
      "parrafos": [
        "Los líderes de servicios financieros reconocen que su propia gente está frenando la adopción de la IA. PwC encuestó a más de mil ejecutivos de firmas de EE.UU., y 40% dice que sus colaboradores se sienten abrumados por el ritmo del cambio. El dato pesa porque llega en un sector con prisa. 90% cree que las firmas deben acostumbrarse a moverse rápido, y 77% siente que la suya no va al ritmo de la innovación. La velocidad que buscan los líderes choca con la capacidad de su gente para seguirla.",
        "El malestar tiene varias caras. 44% dice que sus colaboradores temen perder el trabajo o que su rol cambie, y 43% que usan IA solo cuando se les exige. Además, 34% señala la fatiga de cambio como una barrera para escalar la tecnología. Juntas, estas cifras describen una adopción por obligación más que por convicción, y eso limita cuánto puede crecer la IA dentro de las firmas.",
        "Esos temores no son infundados. Casi ocho de cada diez ejecutivos esperan que su plantilla se reduzca al menos 20% en cinco años. PwC advierte, sin embargo, contra los recortes impulsivos basados en modelos que quizás no se cumplan, y sostiene que cualquier reducción debería seguir a la estrategia, no reemplazarla. Visto así, el miedo de los colaboradores no es un problema de actitud, sino una lectura razonable de lo que sus propios líderes anticipan.",
        "Lo que está en juego también es el control. Más de la mitad reconoce que sus colaboradores usan herramientas no aprobadas al menos de forma moderada, lo que se conoce como IA \"en la sombra\". Y 90% cree que esa práctica genera riesgo regulatorio. En un sector tan regulado, el cambio sin gestionar no solo cuesta productividad: también expone a la firma. Por eso PwC propone un programa formal, con reglas claras sobre quién usa qué herramientas y para qué.",
        "La primera recomendación de PwC es tranquilizar a la gente: aclarar expectativas, explicar cómo se verá la organización con IA y asegurar que las personas tengan las habilidades para llegar ahí. Es una señal de que el cuello de botella no es solo tecnológico. La velocidad que buscan las firmas depende, en buena parte, de que su gente entienda hacia dónde va."
      ]
    },
    articulo_en: {
      "bajada": "US financial firms want to speed up on AI, but the nearest brake is internal: people who are afraid, tired or using it only because they have to.",
      "parrafos": [
        "Financial services leaders acknowledge that their own people are slowing AI adoption. PwC surveyed more than a thousand executives at US firms, and 40% say their employees feel overwhelmed by the pace of change. That matters because it comes from a sector in a hurry: 90% believe firms need to get comfortable moving quickly, and 77% feel their own isn't keeping pace with innovation. The speed leaders want is running into their people's capacity to keep up.",
        "The unease takes several forms. 44% say employees fear losing their jobs or seeing their roles change, and 43% that they use AI only when required. On top of that, 34% cite change fatigue as a barrier to scaling the technology. Together, these figures describe adoption driven by obligation rather than conviction, and that limits how far AI can grow inside these firms.",
        "Those fears aren't unfounded. Nearly eight in ten executives expect their workforce to shrink by at least 20% within five years. PwC warns, however, against knee-jerk cuts based on models that may not pan out, and argues that any reduction should follow strategy, not replace it. Seen this way, employees' fear isn't an attitude problem but a reasonable reading of what their own leaders expect.",
        "Control is also at stake. More than half acknowledge that employees use non-approved tools at least to a moderate extent, a practice known as \"shadow AI\". And 90% believe it creates regulatory risk. In such a regulated sector, unmanaged change doesn't just cost productivity: it also exposes the firm. That's why PwC proposes a formal program with clear rules on who uses which tools and for what.",
        "PwC's first recommendation is to reassure people: clarify expectations, explain what the AI-enabled organization will look like, and make sure people have the skills to get there. It's a sign that the bottleneck isn't only technological. The speed these firms are after depends, to a large extent, on their people understanding where things are headed."
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
      "bajada": "Casi ocho de cada diez firmas financieras esperan una plantilla mucho más pequeña por la IA, pero pocas han diseñado cómo será el trabajo después.",
      "parrafos": [
        "Los líderes de servicios financieros de EE.UU. ya dan por hecho que la IA achicará sus equipos. En la encuesta de PwC a más de mil ejecutivos del sector, casi ocho de cada diez esperan que su plantilla se reduzca al menos 20% en cinco años. No es un ajuste marginal, sino un cambio de tamaño en toda la organización. Por eso importa saber si las firmas tienen claro cómo trabajarán después.",
        "La planificación, sin embargo, se queda en el cálculo. 42% ya hizo un modelo de alto nivel del impacto de la IA en toda su organización. Pero solo la mitad de quienes modelan analizó cómo rediseñar procesos y flujos de trabajo. A eso se suma la principal barrera para escalar la IA: 41% cita datos fragmentados o de baja calidad, lo que dificulta incluso saber qué roles y habilidades existen hoy. Juntas, estas cifras muestran firmas que saben cuánto quieren reducir, pero no cómo será el trabajo que queda.",
        "El golpe, además, no se reparte igual. 30% señala los puestos de entrada como los más vulnerables, seguidos por la gerencia media (26%). PwC advierte la consecuencia de largo plazo: menos puestos de entrada hoy significa un grupo más chico del que saldrán los gerentes y líderes de mañana. Un recorte que parece eficiente ahora puede dejar a la organización sin de dónde formar a su próxima generación de líderes.",
        "Mientras tanto, la IA ya cambia el precio del talento. 91% está subiendo la compensación de quienes tienen habilidades en IA, y 86% cree que, para muchos nuevos ingresos, formarse en IA vale más que un MBA. Pero el retorno todavía no aparece: 77% dice que la mayoría de sus inversiones en IA aún no entrega un retorno medible. Las firmas apuestan fuerte por estas habilidades antes de tener pruebas de lo que devuelven.",
        "El estudio deja una imagen de dos velocidades. Las firmas avanzan rápido en calcular recortes y en pagar más por la IA, pero van lento en rediseñar el trabajo. En esa distancia se juega si la reducción de plantilla trae eficiencia o solo una organización más pequeña."
      ]
    },
    articulo_en: {
      "bajada": "Nearly eight in ten financial firms expect a much smaller workforce because of AI, but few have designed what work will look like afterwards.",
      "parrafos": [
        "US financial services leaders already take it for granted that AI will shrink their teams. In PwC's survey of more than a thousand executives in the sector, nearly eight in ten expect their workforce to shrink by at least 20% within five years. This isn't a marginal adjustment but a change in the size of the whole organization. That's why it matters whether firms know how they will work afterwards.",
        "Planning, however, stops at the math. 42% have done high-level enterprise-wide modeling of AI's impact on workforce capacity, but only half of those modeling have looked at redesigning processes and workflows. Add to that the top barrier to scaling AI: 41% cite fragmented or low-quality data, which makes it hard even to know which roles and skills exist today. Together, these figures show firms that know how much they want to cut, but not what the remaining work will look like.",
        "The impact isn't evenly spread, either. 30% point to entry-level roles as the most vulnerable, followed by middle management (26%). PwC flags the long-term consequence: fewer entry-level roles today means a smaller pool from which tomorrow's managers and leaders will come. A cut that looks efficient now can leave the organization with nowhere to grow its next generation of leaders.",
        "Meanwhile, AI is already changing the price of talent. 91% are raising pay for employees with AI skills, and 86% believe AI training is worth more than an MBA for many new hires. But the payoff hasn't shown up yet: 77% say most of their AI investments aren't delivering measurable ROI. Firms are betting heavily on these skills before having proof of what they return.",
        "The study paints a picture of two speeds. Firms are moving fast on modeling cuts and paying more for AI skills, but slowly on redesigning work. That gap is where it will be decided whether a smaller workforce brings efficiency or just a smaller organization."
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
      "bajada": "En ciencias de la vida, las empresas que escalan la IA le explican a su gente cómo cambiarán sus roles, pero pocas han convertido esa visión en decisiones.",
      "parrafos": [
        "En ciencias de la vida, explicar el futuro de los roles es uno de los rasgos de las empresas que logran escalar la IA. Bain encuestó a 133 ejecutivos del sector. Entre las empresas que escalan con éxito, 80% comunica una visión clara de cómo evolucionarán los roles, las habilidades y los equipos mixtos de personas e IA. Entre las que recién exploran la tecnología, solo 7% lo hace. La distancia es tan grande que la comunicación sobre el futuro del trabajo aparece como una de las diferencias más marcadas entre ambos grupos.",
        "Esa visión viene acompañada de movimiento en el talento. Más de la mitad de las que escalan ya capacitó a su gente, contrató talento en IA o movió personas entre áreas. Entre las que exploran, 20% o menos hizo lo mismo. Frente a la escasez global de talento en IA, uno de los mayores obstáculos para escalar, las más avanzadas no se quedan esperando a contratarlo: también lo forman. En el mismo grupo de empresas, explicar el rumbo y mover a las personas van de la mano.",
        "Pero el estudio es exigente con sus propios líderes: tener la visión no es lo mismo que ejecutarla. Solo 20% de las empresas que escalan convirtió esa visión en decisiones concretas a nivel de toda la organización. Bain concluye que la planificación estratégica de la fuerza laboral todavía está en una etapa temprana en toda la industria. Incluso entre las mejores, comunicar el rumbo va bastante más adelante que organizar el trabajo en torno a él.",
        "Lo que está en juego es pasar de pilotos a cambios de escala. En una investigación relacionada, Bain señala la falta de compromiso del liderazgo como una de las razones por las que muchas empresas no logran escalar la IA. Para las personas, la diferencia es concreta: trabajar en una empresa que explica cómo cambiará su rol, o en una que todavía no lo hace. En un sector con escasez de talento en IA, esa claridad toca directamente a quienes tendrán que hacer el trabajo nuevo.",
        "Es un hallazgo breve, parte de la serie de gráficos de investigación de Bain, pero pone al frente algo que suele quedar al final de los planes. Las empresas que avanzan con la IA no solo cambian sistemas: le cuentan a su gente hacia dónde va su trabajo. El paso pendiente, incluso para ellas, es convertir ese relato en decisiones."
      ]
    },
    articulo_en: {
      "bajada": "In life sciences, companies scaling AI explain to their people how their roles will change, but few have turned that vision into decisions.",
      "parrafos": [
        "In life sciences, explaining the future of roles is one of the traits of companies that manage to scale AI. Bain surveyed 133 industry executives and found that 80% of companies successfully scaling AI communicate a clear vision of how roles, skills and hybrid human-AI teams will evolve. Among early explorers, only 7% do. The gap is so wide that communicating about the future of work stands out as one of the sharpest differences between the two groups.",
        "That vision comes with movement on talent. More than half of scalers have upskilled their people, hired new AI talent or shifted people across functions; among explorers, 20% or fewer have done the same. Facing a global scarcity of AI talent, one of the biggest obstacles to scaling, the most advanced companies aren't just waiting to hire it: they're building it. In the same group of companies, explaining the direction and moving people go hand in hand.",
        "But the study holds its own leaders to a high bar: having the vision isn't the same as executing it. Only 20% of scalers have turned that vision into concrete enterprise-wide decisions. Bain concludes that strategic workforce planning is still early across the industry. Even among the best, communicating the direction is well ahead of organizing work around it.",
        "What's at stake is moving from pilots to change at scale. In related research, Bain points to a lack of leadership buy-in as one reason many companies fail to scale AI. For people, the difference is concrete: working at a company that explains how their role will change, or at one that doesn't yet. In a sector short on AI talent, that clarity directly affects those who will do the new work.",
        "It's a short finding, part of Bain's research chart series, but it brings forward something that usually comes last in plans. Companies advancing with AI don't just change systems: they tell their people where their work is headed. The next step, even for them, is turning that story into decisions."
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
      "bajada": "Las empresas de consumo duplicaron en un año el acceso de su gente a herramientas de IA, pero casi ninguna cambió la forma en que se hace el trabajo.",
      "parrafos": [
        "Las empresas de consumo están entregando herramientas de IA sin rediseñar el trabajo que las rodea. La edición para esta industria del informe State of AI in the Enterprise, de Deloitte, recoge la visión de 963 líderes de negocio y de TI. De ellos, 82% no ha rediseñado los puestos ni la naturaleza del trabajo en torno a la IA, y la acción más común (54%) es educar a su gente. Importa porque formar a las personas en una herramienta no cambia, por sí solo, cómo se organiza su día.",
        "La brecha se ve en el uso. En un año, el acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores. Pero solo 25% de quienes tienen acceso usa la IA en más del 60% de su trabajo diario. Juntas, estas cifras muestran que el acceso se duplicó mientras la adopción profunda sigue siendo minoritaria.",
        "El matiz está en la actitud de las personas, que no es de rechazo general. Entre colaboradores no técnicos, 56% está abierto a explorar la IA, mientras 19% la usa solo si se lo exigen y 5% desconfía y la evita. El estudio también señala que, aunque los líderes ven la falta de habilidades como la principal barrera, menos de la mitad hace ajustes importantes en su estrategia de talento. Visto así, la distancia entre acceso y uso no se explica solo por resistencia: también refleja puestos que siguen igual.",
        "Lo que está en juego son los puestos y las carreras. 82% espera que al menos 10% de sus puestos se automaticen por completo en tres años. Los primeros serían tareas de entrada, como la carga de datos o la atención al cliente básica. Los líderes entrevistados se preguntan qué pasará con las carreras que empezaban justamente ahí. Para quienes se quedan, el trabajo ya cambia. El estudio describe a un category manager (responsable de una categoría de productos) que ahora recibe recomendaciones de precio y surtido de la IA, y debe decidir cuándo confiar en ellas.",
        "El estudio retrata una industria que avanzó rápido en dar herramientas y lento en cambiar el trabajo. La tecnología ya está en manos de mucha más gente. Lo que todavía falta es definir qué hace cada persona con ella."
      ]
    },
    articulo_en: {
      "bajada": "Consumer companies doubled their people's access to AI tools in a year, but almost none changed how the work actually gets done.",
      "parrafos": [
        "Consumer companies are handing out AI tools without redesigning the work around them. The consumer-industry edition of Deloitte's State of AI in the Enterprise report draws on 963 business and IT leaders. Of them, 82% haven't redesigned jobs or the nature of work around AI, and the most common action (54%) is educating their people. That matters because training people on a tool doesn't, on its own, change how their day is organized.",
        "The gap shows up in usage. In one year, access to sanctioned AI tools went from under 30% to around 60% of workers. But only 25% of those with access use AI in more than 60% of their daily work. Together, these figures show that access doubled while deep adoption remains a minority.",
        "The nuance lies in people's attitude, which isn't one of broad rejection. Among non-technical workers, 56% are open to exploring AI, while 19% use it only if required and 5% actively distrust and avoid it. The study also notes that although leaders see insufficient skills as the biggest barrier, fewer than half are making significant changes to their talent strategy. Seen this way, the gap between access and use isn't just about resistance: it also reflects jobs that haven't changed.",
        "Jobs and careers are what's at stake. 82% expect at least 10% of their jobs to be fully automated within three years, starting with entry-level tasks such as data entry or first-level customer support. Leaders interviewed wonder what will happen to careers that used to start there. For those who stay, work is already changing. The study describes a category manager (the person running a product category) who now gets AI pricing and assortment recommendations, and must decide when to trust them.",
        "The study portrays an industry that moved fast on handing out tools and slowly on changing work. The technology is now in far more people's hands. What's still missing is defining what each person does with it."
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
      "bajada": "Deloitte asocia la buena gestión del cambio con más valor, pero la mayoría de las empresas la sigue tratando como un gasto mientras apila transformaciones.",
      "parrafos": [
        "La mayoría de las grandes transformaciones no cumple lo que prometía. Deloitte encuestó a 1,000 ejecutivos que lideran cambios de gran escala en Estados Unidos, Reino Unido, Australia y Canadá. De ellos, 70% dice que su iniciativa más reciente no entregó el valor de negocio esperado. Además, 55% tuvo que reiniciarla o corregir el rumbo de forma importante. Como se trata de iniciativas de gran escala, el problema es un costo de negocio y no un tropiezo aislado.",
        "Los propios líderes ven en la gestión del cambio parte de la explicación. 83% cree que una mala gestión del cambio contribuyó a que su última iniciativa se quedara corta. Del otro lado, la mediana del retorno de invertir en gestión del cambio fue de 4:1: cada US$1 se asocia con US$4 de valor realizado. Y las empresas que más invierten tienen 1.7 veces más probabilidades de decir que la adopción superó las expectativas. Es una asociación, no una prueba de causa, pero las tres cifras apuntan en la misma dirección.",
        "La contradicción está en cómo se trata esa inversión. 60% dice que su empresa sigue viendo la gestión del cambio como un costo de proyecto y no como una capacidad permanente. Al mismo tiempo, 73% reporta fatiga de cambio en sus colaboradores, y con cuatro o más iniciativas en paralelo la probabilidad de fatiga alta se multiplica por 6.4. El problema no es solo cuánto se invierte en cada cambio, sino cuántos cambios se acumulan sobre las mismas personas.",
        "La IA intensifica esa presión. 61% siente que la transformación con IA avanza más rápido de lo que su gente puede manejar. Aun así, 43% de los líderes de cambio admite no saber cómo la IA está afectando a sus colaboradores. Y más de la mitad dice que nadie tiene autoridad para pausar una iniciativa por falta de capacidad. Lo que está en juego es una organización que acelera sin ver el desgaste que genera ni tener un freno para administrarlo.",
        "El estudio también señala a quienes dirigen: donde los líderes modelan los comportamientos que piden, es más probable reportar un retorno claramente positivo y una adopción superior a lo esperado. Deloitte describe el reto como pasar de un cambio episódico a uno continuo, con sistemas de gestión que todavía no se ponen al día. La conclusión es que el cambio ya no es un proyecto que termina, sino una condición permanente del trabajo."
      ]
    },
    articulo_en: {
      "bajada": "Deloitte links good change management to more value, yet most companies still treat it as an expense while stacking one transformation on another.",
      "parrafos": [
        "Most large transformations don't deliver what they promised. Deloitte surveyed 1,000 executives leading large-scale change in the United States, United Kingdom, Australia and Canada, and 70% say their most recent initiative fell short of its intended business value. On top of that, 55% needed a major restart or course correction. Because these are large-scale initiatives, the problem is a business cost rather than an isolated stumble.",
        "Leaders themselves see change management as part of the explanation. 83% believe poor change management contributed to their latest initiative falling short. On the other side, the median return on investing in change management was 4:1: every US$1 is associated with US$4 in realized value. And the companies that invest most are 1.7 times more likely to say adoption exceeded expectations. It's an association, not proof of cause, but the three figures point in the same direction.",
        "The contradiction lies in how that investment is treated. 60% say their company still sees change management as a project cost rather than a lasting capability. At the same time, 73% report change fatigue among employees, and with four or more initiatives running in parallel, the likelihood of high fatigue rises 6.4 times. The problem isn't just how much is invested in each change, but how many changes pile up on the same people.",
        "AI intensifies that pressure. 61% feel AI transformation is moving faster than their people can handle. Even so, 43% of change leaders admit they don't know how AI is affecting their employees. And more than half say no one has the authority to pause an initiative for lack of capacity. What's at stake is an organization that speeds up without seeing the strain it creates or having a brake to manage it.",
        "The study also points to those in charge: where leaders model the behaviors they ask for, organizations are more likely to report strong positive ROI and adoption exceeding expectations. Deloitte frames the challenge as moving from episodic to continuous change, with management systems that haven't yet caught up. The upshot is that change is no longer a project with an end date, but a permanent condition of work."
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
      "bajada": "Muchos colaboradores están dispuestos a cambiar, pero viven varios cambios a la vez dentro de organizaciones que los lanzan bien y los sostienen mal.",
      "parrafos": [
        "Para la mayoría de los colaboradores, el cambio ya no es un evento sino un estado permanente. Sia encuestó a 1,450 colaboradores y líderes de Norteamérica, Asia-Pacífico, Europa, Reino Unido e Irlanda y Emiratos Árabes Unidos. 85% atraviesa al menos un cambio en su trabajo y 30% vive entre 3 y 5 al mismo tiempo. La consultora no lo llama sobrecarga sino \"colisión\": reorganizaciones, tecnologías nuevas, cambios de liderazgo e IA llegan superpuestos. El desafío, entonces, no es cada cambio por separado, sino cómo chocan entre sí.",
        "El diagnóstico central es que las organizaciones no fallan por falta de esfuerzo, sino de foco. 41% dice que su empresa intenta \"hacer todo a la vez\" y 22% que hay iniciativas pausadas o retrasadas. Además, 21% dice que los equipos quedan solos para decidir qué priorizar cuando las demandas chocan. En ese vacío, los mandos medios cargan buena parte de la complejidad: traducen la disrupción en instrucciones diarias mientras enfrentan la misma ambigüedad que sus equipos. Sin prioridades claras, el costo de decidir baja hacia quienes tienen menos margen para hacerlo.",
        "El matiz está en la gente, que no aparece como el principal obstáculo. 33% se define como entusiasta del cambio y 15% como impulsor, frente a 28% que se declara escéptico. Para Sia, la fuerza laboral puede estar más lista que las organizaciones que la conducen. Eso desplaza la pregunta: el freno no está tanto en la disposición de las personas como en la forma en que se organiza el cambio.",
        "Lo que está en juego es que el cambio dure. Solo 18% cree que su organización maneja \"extremadamente bien\" los resultados y su sostenibilidad, y 35% dice que apenas lo hace de forma adecuada. Los sistemas se implementan rápido, pero el refuerzo, la capacitación, el retiro de procesos antiguos y la formación de hábitos se quedan atrás. La IA agrava el problema: 23% ya vive una transformación importante ligada a IA, datos o analítica. Sia describe una brecha: las personas adoptan la tecnología más rápido de lo que la organización ajusta procesos, gobierno y roles.",
        "Según Sia, lo que piden las personas es concreto: prioridades más claras, más apoyo de sus jefes, capacitación práctica y reglas transparentes, sobre todo frente a la IA. El informe describe una fuerza laboral dispuesta a moverse dentro de organizaciones que todavía no saben ordenar ni sostener lo que lanzan. El cuello de botella no está en lanzar cambios, sino en sostenerlos."
      ]
    },
    articulo_en: {
      "bajada": "Many employees are willing to change, but they're living through several changes at once inside organizations that launch well and sustain poorly.",
      "parrafos": [
        "For most employees, change is no longer an event but a permanent state. Sia surveyed 1,450 employees and leaders across North America, Asia-Pacific, Europe, the UK and Ireland and the UAE. 85% are going through at least one workplace change, and 30% are living through 3 to 5 at the same time. The firm doesn't call it overload but \"collision\": reorganizations, new technology, leadership transitions and AI arrive overlapping. The challenge, then, isn't each change on its own, but how they collide.",
        "The core diagnosis is that organizations fail not for lack of effort but for lack of focus. 41% say their company tries to \"do everything at once\" and 22% that initiatives are paused or delayed. In addition, 21% say teams are left to figure out tradeoffs on their own when demands collide. In that vacuum, managers absorb much of the complexity: they translate disruption into daily guidance while facing the same ambiguity as their teams. Without clear priorities, the burden of deciding falls on those with the least room to do it.",
        "The nuance lies with people, who don't come across as the main obstacle. 33% identify as enthusiasts of change and 15% as champions, versus 28% who say they're skeptics. For Sia, the workforce may be more ready than the organizations leading it. That shifts the question: the brake lies less in people's willingness than in how change is organized.",
        "What's at stake is whether change lasts. Only 18% say their organization handles outcomes and sustainability \"extremely well\", and 35% say it does so only adequately. Systems go live quickly, but reinforcement, training, retiring legacy processes and building habits lag behind. AI makes it harder: 23% are already going through a major AI, data or analytics-related transformation. Sia describes a gap: people adopt the technology faster than organizations adjust processes, governance and roles.",
        "According to Sia, what people ask for is concrete: clearer priorities, more support from managers, practical training and transparent rules, especially around AI. The report describes a workforce willing to move inside organizations that don't yet know how to sequence or sustain what they launch. The bottleneck isn't launching change, but making it stick."
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
      "bajada": "El cambio ya es parte normal del trabajo, pero cuando se vive mal, la confianza en el CEO y en el jefe directo se desploma.",
      "parrafos": [
        "Edelman encuestó a 10,018 colaboradores de 10 países para su reporte especial sobre confianza en el trabajo. El hallazgo de partida es que la transformación ya es rutina: 76% vivió al menos una transformación importante en el último año. Pero la cantidad de cambio no es lo decisivo. Lo que pesa es cómo se vive, porque de esa experiencia depende la confianza en quienes lo conducen.",
        "La evidencia está en la distancia entre una buena y una mala experiencia. Cerca de un tercio describe su transformación como no positiva. En ese grupo, la confianza en el CEO baja de 82% a 49%, y la confianza en el jefe directo, de 85% a 60%. Según Edelman, la carga de trabajo es el factor que más inclina la balanza. Una transformación mal vivida no deja solo cansancio: le cuesta credibilidad a toda la cadena de mando.",
        "El matiz está en lo que piden los colaboradores, que no son certezas sino honestidad. 57% prefiere que el CEO comparta lo que sabe y también lo que aún no sabe con certeza, y 64% quiere que reconozca lo que sienten los equipos. Además, cuando se pregunta en quién confiarían más para entender por qué ocurre un cambio, el jefe directo supera al CEO en los cinco tipos de transformación evaluados. Visto así, explicar el cambio no es tarea exclusiva de la cúpula: el mensajero más cercano es el que más pesa.",
        "Lo que está en juego crece porque buena parte de este cambio viene de la IA. Su integración fue la transformación más frecuente (53%), y después de una experiencia negativa, la disposición a abrazar un mayor uso de IA cae de 40% a 18%. Todo ocurre con 77% de los colaboradores temiendo perder su empleo, más que en agosto de 2024. Una mala experiencia hoy puede volver más difícil la próxima adopción tecnológica.",
        "La conclusión de Edelman es que la confianza no se pierde por el cambio en sí, sino por cómo se ejecuta y se comunica. Para la firma, la transformación debe hacerse a escala humana. Y esa responsabilidad la comparten el CEO y los mandos directos."
      ]
    },
    articulo_en: {
      "bajada": "Change is now a normal part of work, but when people experience it badly, trust in the CEO and in direct managers collapses.",
      "parrafos": [
        "Edelman surveyed 10,018 employees in 10 countries for its special report on trust at work. The starting point is that transformation is now routine: 76% went through at least one major transformation in the past year. But the amount of change is not what matters most. What matters is how people experience it, because that experience shapes their trust in those leading it.",
        "The evidence lies in the gap between a good and a bad experience. About a third describe their transformation as not positive. In that group, trust in the CEO drops from 82% to 49%, and trust in the direct manager from 85% to 60%. According to Edelman, workload is the factor that most tips the balance. A badly handled transformation leaves more than fatigue: it costs credibility across the entire chain of command.",
        "The nuance lies in what employees ask for, which is not certainty but honesty. 57% prefer that the CEO share what they know and also what they don't yet know for certain, and 64% want the CEO to acknowledge what teams are feeling. And when asked whom they would most trust to explain why a change is happening, the direct manager ranks above the CEO across all five types of transformation assessed. Seen this way, explaining change is not a job for the top alone: the closest messenger carries the most weight.",
        "The stakes rise because much of this change comes from AI. AI integration was the most common transformation (53%), and after a negative experience, willingness to embrace greater AI use falls from 40% to 18%. All of this happens while 77% of employees worry about losing their job, more than in August 2024. A bad experience today can make the next technology rollout harder.",
        "Edelman's conclusion is that trust is not lost because of change itself, but because of how it is carried out and communicated. For the firm, transformation has to happen at a human scale. And that responsibility is shared by the CEO and direct managers."
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
      "bajada": "Comunicar el cambio es la gran prioridad de los equipos de comunicación interna, pero la mayoría lo hace sin método y con mandos poco preparados.",
      "parrafos": [
        "Gallagher consultó a más de 1,300 profesionales de comunicación interna y RR.HH. de 40 países para su informe anual. El resultado es una contradicción: la gestión del cambio es la habilidad que más quieren desarrollar, pero 61% no tiene un enfoque formal para comunicarlo. El propio informe lo señala como el principal riesgo de la función. Es un vacío relevante, porque el cambio es justo el momento en que una organización más necesita explicarse bien.",
        "La evidencia más clara está en los mandos, que el informe describe como el eslabón débil o el canal que falta. 87% considera su capacidad un riesgo moderado o significativo. Aun así, solo 21% usa activamente kits de apoyo para ellos, y 37% no tiene ninguno. Muchas organizaciones, además, los tratan como un canal uniforme, pese a sus diferencias de experiencia, confianza y carga de trabajo. El problema está reconocido, pero casi no recibe herramientas.",
        "El matiz es que el riesgo no viene solo de la falta de método, sino también del exceso. 83% dice que la sobrecarga de información va en aumento. Según Gallagher, pasar de un volumen medio a uno alto de cambios eleva en 30% el riesgo de perder confianza en los líderes y en 24% el de agotamiento. Mirado así, el desafío no es comunicar más, sino comunicar mejor y con menos ruido.",
        "Lo que está en juego es el papel que la función puede jugar en la organización. 73% quiere operar como una consultoría estratégica, pero solo 18% dice lograrlo, y el modelo más común sigue siendo la difusión centralizada de mensajes. En IA se repite la brecha: solo 36% siente que tiene las habilidades para usarla bien. Los equipos con gobierno, políticas y formación claras avanzan bastante más rápido, lo que muestra que la distancia se puede acortar.",
        "Estas cifras deben leerse con un matiz: la muestra está formada por profesionales de comunicación y RR.HH., no por colaboradores en general, y más de la mitad trabaja en Norteamérica. Es una autoevaluación de la función, hecha desde adentro. Y lo que reconoce es que todavía no tiene el método que el cambio le exige."
      ]
    },
    articulo_en: {
      "bajada": "Communicating change is the top priority for internal comms teams, but most do it without a method and with underprepared managers.",
      "parrafos": [
        "Gallagher surveyed more than 1,300 internal comms and HR professionals in 40 countries for its annual report. The result is a contradiction: change management is the skill they most want to build, yet 61% have no formal approach to communicating change. The report itself flags this as the function's top risk. It is a meaningful gap, because change is exactly when an organization most needs to explain itself well.",
        "The clearest evidence concerns managers, whom the report calls the weak link, or the missing channel. 87% consider their capability a moderate or significant risk. Even so, only 21% actively use manager toolkits, and 37% have none at all. Many organizations also treat managers as a uniform channel, despite wide differences in their experience, confidence and workload. The problem is recognized, but it gets very few tools.",
        "The nuance is that the risk comes not only from a lack of method, but also from excess. 83% say information overload is growing. According to Gallagher, moving from medium to high change volume raises the risk of lost trust in leaders by 30% and burnout risk by 24%. Seen this way, the challenge is not to communicate more, but to communicate better and with less noise.",
        "What's at stake is the role the function can play in the organization. 73% want to operate as a strategic consultancy, but only 18% say they do, and the most common model is still centralized broadcasting of messages. On AI, the gap repeats: only 36% feel they have the skills to use it well. Teams with clear governance, policies and training move much faster, which shows the gap can be narrowed.",
        "These figures come with a caveat: the sample is made up of comms and HR professionals, not employees in general, and more than half work in North America. It is the function's self-assessment, made from the inside. And what it admits is that it still lacks the method that change demands of it."
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
      "bajada": "Cada vez más trabajadores usan IA en su día a día, pero la confianza en quienes conducen ese cambio va en la dirección contraria.",
      "parrafos": [
        "La encuesta Hopes and Fears 2026 de PwC, con casi 50,000 trabajadores de todo el mundo, muestra dos curvas que se separan. 64% usó IA en el trabajo en el último año. En el mismo periodo, la confianza en la gerencia cayó 7 puntos. Importa porque la tecnología avanza más rápido que el vínculo con quienes deciden cómo usarla.",
        "La adopción, de hecho, se está acelerando. El uso de IA en el trabajo subió 10 puntos en un año, y el uso diario de IA generativa pasó de 14% a 22% de la fuerza laboral. Del otro lado, menos de la mitad confía hoy en la alta dirección, y PwC advierte que solo una minoría obtiene beneficios reales de la IA. Juntos, estos datos dibujan una adopción amplia que todavía no se traduce en confianza ni en resultados para la mayoría.",
        "El matiz aparece al dividir a los trabajadores en grupos, o cohortes. Un grupo reducido de \"front-runners\" (los que van adelante), con habilidades muy demandadas, usa mucho más la IA y confía mucho más en la alta dirección. En el otro extremo está el \"engine room\" (la sala de máquinas), 56% de la fuerza laboral: solo 11% usa IA generativa a diario y apenas 33% confía en la alta dirección. La brecha de confianza, entonces, es más profunda justo en la mayoría que sostiene la operación.",
        "Lo que está en juego es la capacidad de las personas para absorber el cambio. Uno de cada cinco trabajadores dice que le cuesta manejarlo, y 18% no entiende sus razones. La dificultad no es solo de la base: también la reconocen altos ejecutivos y gerentes. Al mismo tiempo, la valoración del acceso a recursos de aprendizaje bajó de 59% a 51%. Las personas necesitan aprender más rápido justo cuando sienten que tienen menos apoyo para hacerlo.",
        "Para PwC, sumar IA a modelos operativos heredados no alcanza. La ganancia depende de que las personas entiendan el cambio, puedan aprender y confíen en quienes lo dirigen. Sin esa base, más tecnología no se convierte en mejores resultados."
      ]
    },
    articulo_en: {
      "bajada": "More and more workers use AI every day, but trust in the people leading that change is moving in the opposite direction.",
      "parrafos": [
        "PwC's Hopes and Fears 2026 survey, covering nearly 50,000 workers worldwide, shows two curves pulling apart. 64% used AI at work in the past year. Over the same period, trust in management fell 7 points. This matters because the technology is advancing faster than the bond with those who decide how it is used.",
        "Adoption is, in fact, speeding up. AI use at work rose 10 points in a year, and daily GenAI use went from 14% to 22% of the workforce. On the other side, less than half now trust top management, and PwC warns that only a minority are getting real benefits from AI. Together, these data points describe broad adoption that has not yet turned into trust or results for most people.",
        "The nuance appears when workers are split into groups, or cohorts. A small group of \"front-runners\" (those out ahead), with in-demand skills, use AI far more and trust top management far more. At the other end is the \"engine room\", 56% of the workforce: only 11% use GenAI daily and just 33% trust top management. The trust gap, then, is deepest precisely among the majority who keep operations running.",
        "What's at stake is people's capacity to absorb change. One in five workers say they find it difficult to manage, and 18% don't understand the reasons for it. The struggle is not limited to the frontline: senior executives and managers acknowledge it too. Meanwhile, ratings of access to learning resources fell from 59% to 51%. People need to learn faster just when they feel they have less support to do so.",
        "For PwC, adding AI to legacy operating models is not enough. The payoff depends on people understanding the change, being able to learn and trusting those who lead it. Without that foundation, more technology does not turn into better results."
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
      "bajada": "Los CEOs saben que la IA cambiará sobre todo roles y habilidades, pero casi ninguno reinvierte en su gente lo que la IA les hace ganar.",
      "parrafos": [
        "El CEO Outlook de octubre de EY-Parthenon consultó a 1,200 CEOs de grandes empresas. Su hallazgo central: 80% cree que, en tres años, la IA impactará más en los roles, las habilidades y la forma de trabajar que en el tamaño de la plantilla. Para los propios CEOs, entonces, la pregunta de fondo no es cuántas personas, sino qué harán y con qué capacidades.",
        "La evidencia muestra que la ganancia ya llegó, pero el talento no sigue el paso. 50% señala a la IA como el principal motor de sus ganancias de productividad. Sin embargo, 47% admite que su organización no desarrolla habilidades al ritmo de la innovación en IA, y 72% prevé que la escasez de habilidades frenará más el crecimiento que el acceso a capital. Juntas, estas cifras indican que el recurso escaso ya no sería el dinero, sino las capacidades de la gente.",
        "El matiz aparece al mirar adónde va el dinero. Solo 15% dice que las ganancias de productividad se reinvierten en el desarrollo de su gente, frente a 48% que las destina a innovación y transformación. Además, 23% reconoce que parte de lo ganado con IA se diluye antes de llegar al resultado final. Los CEOs identifican el cuello de botella, pero la inversión sigue apuntando a otro lado.",
        "Lo que está en juego es convertir la eficiencia en crecimiento, que según EY es el verdadero desafío. La recapacitación ya figura entre las fuentes de productividad que mencionan los CEOs (33%). Si las habilidades no avanzan al ritmo de la tecnología, lo ganado con IA puede quedarse en ahorro y no transformarse en capacidad nueva para las personas ni para el negocio.",
        "El estudio deja a la vista una brecha entre diagnóstico y decisión. Como plantea Andrea Guerzoni, vicepresidente global de EY-Parthenon, la productividad por sí sola no es una estrategia. Lo que define el resultado es qué se hace con ella."
      ]
    },
    articulo_en: {
      "bajada": "CEOs know AI will mostly change roles and skills, yet almost none reinvest in their people what AI is helping them gain.",
      "parrafos": [
        "EY-Parthenon's October CEO Outlook surveyed 1,200 CEOs of large companies. Its central finding: 80% believe that within three years AI will affect roles, skills and ways of working more than workforce size. For CEOs themselves, then, the underlying question is not how many people, but what they will do and with which capabilities.",
        "The evidence shows the gains have arrived, but talent is not keeping up. 50% name AI as the top driver of their productivity gains. Yet 47% admit their organization isn't developing skills fast enough to keep pace with AI innovation, and 72% expect skills shortages to hold back growth more than access to capital. Together, these figures suggest the scarce resource is no longer money, but people's capabilities.",
        "The nuance appears when you look at where the money goes. Only 15% say productivity gains are reinvested in developing their people, compared with 48% who channel them into innovation and transformation. In addition, 23% acknowledge that some AI gains are absorbed before reaching the bottom line. CEOs can see the bottleneck, but investment is still pointed elsewhere.",
        "What's at stake is turning efficiency into growth, which EY describes as the real challenge. Reskilling already appears among the sources of productivity CEOs cite (33%). If skills don't advance at the pace of technology, AI gains may stay as savings rather than becoming new capability for people and for the business.",
        "The study exposes a gap between diagnosis and decision. As Andrea Guerzoni, EY-Parthenon Global Vice Chair, argues, productivity alone is not a strategy. What defines the outcome is what gets done with it."
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
      "bajada": "Los CEOs de grandes empresas de EE.UU. ya rediseñan el trabajo alrededor de la IA, aunque las habilidades y el retorno de esa apuesta todavía no están asegurados.",
      "parrafos": [
        "El 2026 US CEO Outlook de KPMG consultó a 400 CEOs de empresas de EE.UU. con ingresos anuales superiores a US$500 millones. El hallazgo principal: 86% está rediseñando roles, trayectorias de carrera y estructura de equipos para reflejar la colaboración entre personas e IA. Importa porque muestra que la IA ya no se discute solo como tecnología, sino como una nueva forma de organizar el trabajo.",
        "La evidencia muestra que ese rediseño avanza en varias direcciones a la vez. 83% se enfoca en retener y reentrenar a su talento de alto potencial, y 79% en contratar perfiles con capacidades de IA y tecnología. Al mismo tiempo, 53% planea reducir su plantilla en algunas áreas. Formar, contratar y recortar conviven en la misma agenda.",
        "El matiz está en la puerta de entrada al mundo laboral. 75% dice que la IA lo llevó a repensar qué habilidades exige en los puestos de nivel inicial, y 81% a repensar cómo forma a sus colaboradores. No sorprende que la brecha de habilidades (60%) sea su principal desafío de talento. Si se automatizan las tareas con las que antes aprendía un profesional junior, la pregunta ya no es solo qué se enseña, sino dónde y cuándo se aprende el oficio.",
        "Lo que está en juego es rediseñar sin tener todavía el retorno asegurado. 84% dice que la IA es una de sus principales prioridades de inversión para los próximos tres años. Pero solo 9% afirma que los agentes de IA (sistemas que ejecutan tareas por sí solos) ya son transformadores para su organización, y 68% espera ver retorno de la IA recién en uno a tres años. Las decisiones sobre personas, por lo tanto, se están tomando antes de que el valor esté probado.",
        "El estudio retrata una transición que todavía se está definiendo. Los CEOs ya decidieron cambiar cómo se organiza el trabajo, y el límite más claro no es la tecnología, sino las habilidades. Eso pone a las áreas de personas en el centro del cambio."
      ]
    },
    articulo_en: {
      "bajada": "CEOs at large US companies are already redesigning work around AI, even though the skills and the return on that bet are not yet secured.",
      "parrafos": [
        "KPMG's 2026 US CEO Outlook surveyed 400 CEOs at US companies with annual revenues above US$500 million. The main finding: 86% are redesigning roles, career paths and team structure to reflect human-AI collaboration. This matters because AI is no longer discussed only as a technology, but as a new way of organizing work.",
        "The evidence shows that redesign is moving in several directions at once. 83% are focusing on retaining and retraining high-potential talent, and 79% on hiring people with AI and tech capabilities. At the same time, 53% plan workforce reductions in some areas. Training, hiring and cutting sit on the same agenda.",
        "The nuance lies at the entry point to the workforce. 75% say AI has made them rethink the skills required for entry-level roles, and 81% how they train employees. It is no surprise that the skills gap (60%) is their top workforce challenge. If the tasks through which junior professionals used to learn are automated, the question is no longer just what gets taught, but where and when the craft is learned.",
        "What's at stake is redesigning without a guaranteed return. 84% say AI is a top investment priority over the next three years. Yet only 9% say AI agents (systems that carry out tasks on their own) are already transformational for their organization, and 68% expect AI returns only in one to three years. Decisions about people, therefore, are being made before the value is proven.",
        "The study portrays a transition that is still taking shape. CEOs have already decided to change how work is organized, and the clearest limit is not technology but skills. That puts people functions at the center of the change."
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
      "bajada": "En Latinoamérica, transformar el trabajo con IA es la gran prioridad de los líderes, y también el escenario para el que se sienten menos preparados.",
      "parrafos": [
        "JLL consultó a responsables de bienes raíces corporativos, es decir, quienes deciden sobre oficinas y espacios de trabajo. En su capítulo latinoamericano, con 150 participantes de Argentina, Brasil, Colombia y México, 47% pone la transformación de la fuerza laboral impulsada por IA como su principal prioridad estratégica. Pero de los ocho escenarios evaluados, es el que muestra menor preparación. La apuesta está hecha, y la capacidad para ejecutarla todavía no.",
        "La evidencia indica que la región se siente más expuesta que el resto del mundo. 49% de los encuestados latinoamericanos ve la incertidumbre sobre el impacto de la IA en el espacio de trabajo como un riesgo para su cartera, frente a 40% a nivel global. Nadie sabe aún cuántas personas, con qué roles y en qué espacios trabajarán dentro de unos años. Esa duda pesa más en la región que en el promedio mundial.",
        "El matiz está en los frenos, que no son los mismos que en el resto del mundo. A nivel global, JLL identifica la escasez de habilidades en IA como la principal limitación. En Latinoamérica, el primer obstáculo es la complejidad regulatoria y de cumplimiento (35%), seguida por la escasez de mano de obra técnica especializada (33%). Esto sugiere que el ritmo del cambio en la región no depende solo de lo que las empresas decidan puertas adentro.",
        "Lo que está en juego es que la IA ya no es solo un tema de tecnología o de recursos humanos. También entra en las decisiones sobre oficinas, carteras inmobiliarias e inversión. Y las organizaciones no están en pausa: 65% prioriza el posicionamiento estratégico a largo plazo y 64% la inversión transformadora en sus inmuebles corporativos. Esos espacios se están planificando mientras todavía no está claro cómo será el trabajo que albergarán.",
        "El estudio retrata una región que quiere moverse rápido hacia un trabajo rediseñado por la IA. Lo que le falta es construir las capacidades, en personas y en reglas, para sostener ese cambio."
      ]
    },
    articulo_en: {
      "bajada": "In Latin America, transforming work with AI is leaders' top priority, and also the scenario they feel least ready for.",
      "parrafos": [
        "JLL surveyed corporate real estate decision-makers, the people who decide on offices and workspaces. In its Latin American chapter, with 150 participants from Argentina, Brazil, Colombia and Mexico, 47% name AI-driven workforce transformation as their top strategic priority. Yet of the eight scenarios evaluated, it is the one with the lowest readiness. The bet has been placed, but the capacity to deliver on it has not caught up.",
        "The evidence shows the region feels more exposed than the rest of the world. 49% of Latin American respondents see uncertainty about AI's impact on the workplace as a risk to their portfolio, compared with 40% globally. No one yet knows how many people, in what roles and in which spaces, will be working a few years from now. That doubt weighs more heavily in the region than in the global average.",
        "The nuance lies in the brakes, which differ from those elsewhere. Globally, JLL identifies the AI skills shortage as the main constraint. In Latin America, the top obstacle is regulatory and compliance complexity (35%), followed by a shortage of specialized technical labor (33%). This suggests the pace of change in the region does not depend only on what companies decide internally.",
        "What's at stake is that AI is no longer just a technology or HR topic. It is also entering decisions about offices, real estate portfolios and investment. And organizations are not on hold: 65% prioritize long-term strategic positioning and 64% transformational investment in their corporate real estate. These spaces are being planned while it is still unclear what kind of work they will house.",
        "The study portrays a region that wants to move fast toward work redesigned by AI. What it still needs is to build the capabilities, in people and in rules, to sustain that change."
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
