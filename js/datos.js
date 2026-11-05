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
      "Comprender el contexto permite a una organización mirarse con perspectiva y reconocer en qué punto de su transformación se encuentra.",
      "Desirée Solano acompaña a empresas en transformaciones de negocio que impactan en sus personas: en sus estrategias internas, su cultura, sus formas de trabajo y su comunicación. En ese rol, contar con una visión integral resulta esencial. Quien asesora a una organización necesita saber qué ocurre más allá de su cliente, conocer las tendencias que mueven a las industrias y ser una fuente de información confiable. Outside-In nace de esa convicción.",
      "Outside-In reúne **en un solo lugar** las perspectivas y los datos relevantes que se publican sobre las organizaciones. Leídos en conjunto, ofrecen una visión que ningún estudio aporta por sí solo: **un contexto más amplio** para entender lo que ocurre y anticipar hacia dónde se dirigen las organizaciones. La plataforma funciona sobre un sistema automatizado desarrollado con Claude Code, que **cada semana** identifica estudios nuevos, verifica sus datos en la **fuente original** y publica los que cumplen **los criterios definidos por Desirée Solano**.",
      "Outside-In no busca prescribir decisiones. Es un espacio para mantenerse informado, identificar los hallazgos más relevantes para cada organización y llevarlos a las conversaciones sobre su estrategia, su rumbo y su comunicación.",
      "Las organizaciones que mejor se transforman son las que se mantienen curiosas y comprenden su contexto antes de que el cambio las alcance. Outside-In está pensado para quienes lideran con esa visión.",
    ],
    firma_nombre: "Desirée Solano",
    firma_cargo: "Consultora en estrategia de comunicación y transformación",
  },
  en: {
    parrafos: [
      "Understanding context allows an organization to see itself with perspective and recognize where it stands in its transformation.",
      "Desiree Solano works with companies through business transformations that affect their people: their internal strategies, their culture, their ways of working and their communication. In that role, having a complete view is essential. Anyone advising an organization needs to know what is happening beyond their client, understand the trends shaping industries and be a reliable source of information. Outside-In was born from that conviction.",
      "Outside-In brings together **in one place** the perspectives and relevant data published about organizations. Read together, they offer a view that no single study provides on its own: **a broader context** to understand what is happening and anticipate where organizations are heading. The platform runs on an automated system built with Claude Code, which **every week** identifies new studies, verifies their data against the **original source** and publishes those that meet **the criteria defined by Desiree Solano**.",
      "Outside-In does not set out to prescribe decisions. It is a space to stay informed, identify the findings most relevant to each organization and bring them into conversations about its strategy, direction and communication.",
      "The organizations that transform best are those that stay curious and understand their context before change reaches them. Outside-In is designed for those who lead with that perspective.",
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
// fuente original. La lista completa de campos está en web/README.md (repositorio privado).
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
    hallazgo_es: "La demanda de personal en las cadenas de suministro de EE.UU. crecerá 19% hacia 2035",
    hallazgo_en: "Demand for workers in US supply chains will grow 19% by 2035",
    dato_clave_es: "Entre 2026 y 2035, la demanda en ocupaciones clave de la cadena de suministro de EE.UU. sumará 1.34 millones de puestos, mientras la fuerza laboral crecerá en apenas unos 221,000 trabajadores, una brecha de casi 1.1 millones. Para las organizaciones, significa que crecer dependerá de rediseñar el trabajo, porque la contratación por sí sola no cerrará esa distancia.",
    dato_clave_en: "Between 2026 and 2035, demand in core US supply chain occupations will add 1.34 million roles, while the labor force will grow by only about 221,000 workers, a gap of nearly 1.1 million. For organizations, it means that growth will depend on redesigning work, because hiring alone will not close that distance.",
    contexto_es: "Proyección de Accenture sobre la oferta y la demanda de talento en las cadenas de suministro de Estados Unidos, elaborada con un modelo propio de planificación de escenarios que vincula el crecimiento del sector con los roles y tareas que se requerirán. Horizonte de la proyección: de 2026 a 2035. Publicación: mayo de 2026.",
    contexto_en: "Accenture projection of talent supply and demand in US supply chains, built on a proprietary scenario-planning model that links the sector's growth to the roles and tasks that will be required. Projection horizon: 2026 to 2035. Published: May 2026.",
    puntos_es: [
      "**Contratar más ya no alcanza para crecer.** La demanda en ocupaciones clave aumentará en 1.34 millones de puestos (19%) entre 2026 y 2035.",
      "**La brecha de talento es estructural, no cíclica.** En el mismo periodo, la fuerza laboral solo crecería alrededor de 3.2%, unos 221,000 trabajadores, lo que deja casi 1.1 millones de puestos sin cubrir.",
      "**La automatización ayuda, pero solo si las tecnologías se integran.** Hasta 48% del trabajo rutinario y frecuente podría automatizarse por completo en algunos casos, siempre que varias tecnologías operen en conjunto.",
      "**El rediseño de roles cambia la ecuación de plantilla.** Cuando la tecnología se combina con un rediseño deliberado del trabajo, el crecimiento proyectado de la plantilla pasa de +18.7% a cerca de -3.0% en el periodo.",
      "**La planificación del talento es una responsabilidad compartida.** Accenture plantea tres prioridades: anticipar las necesidades de talento, rediseñar el trabajo conforme avanza la automatización y desarrollar habilidades de forma continua."
    ],
    puntos_en: [
      "**Hiring more is no longer enough to grow.** Demand in core occupations will increase by 1.34 million roles (19%) between 2026 and 2035.",
      "**The talent gap is structural, not cyclical.** Over the same period, the labor force would grow by only about 3.2%, or roughly 221,000 workers, leaving nearly 1.1 million roles unfilled.",
      "**Automation helps, but only when technologies are integrated.** In some cases, up to 48% of routine, high-frequency work could be fully automated, provided several technologies operate together.",
      "**Role redesign changes the workforce equation.** When technology is combined with deliberate work redesign, projected workforce growth shifts from +18.7% to about -3.0% over the period.",
      "**Talent planning is a shared responsibility.** Accenture sets out three priorities: build talent foresight, redesign work as automation advances and develop skills continuously."
    ],
    articulo_es: {
      "bajada": "Las cadenas de suministro de EE.UU. necesitarán mucho más talento del que el mercado laboral podrá ofrecer, y Accenture sostiene que esa brecha ya no se cerrará solo con contratación.",
      "parrafos": [
        "Accenture proyecta para las cadenas de suministro de EE.UU. una escasez de personal que la contratación no podrá cubrir. En su estudio Turning the supply chain talent shortage into strength, la consultora estima que entre 2026 y 2035 la demanda en ocupaciones clave crecerá 19%, mientras la fuerza laboral solo aumentará 3.2%. La diferencia equivale a casi 1.1 millones de puestos y cuestiona la respuesta habitual ante una operación más compleja: sumar personas.",
        "La brecha es estructural, no cíclica. En cifras absolutas, la demanda sumaría 1.34 millones de puestos y la fuerza laboral, apenas unos 221,000 trabajadores. Además, las fuerzas que expanden las cadenas, como más nodos, más compromisos con clientes y más regulación, también elevan la coordinación que exige cada rol. En conjunto, estos datos muestran que faltarán personas y que cada puesto será más exigente.",
        "La tecnología ayuda, pero no resuelve el déficit por sí sola. En algunos casos, hasta 48% del trabajo rutinario podría automatizarse por completo, siempre que varias tecnologías operen en conjunto. Cuando además se rediseñan los roles de forma deliberada, el crecimiento proyectado de la plantilla pasa de +18.7% a cerca de -3.0% en el periodo. El factor decisivo deja de ser cuánta tecnología se incorpora y pasa a ser cómo se reorganiza el trabajo a su alrededor.",
        "Para el negocio, la planificación del talento se convierte en una decisión compartida de la alta dirección. Accenture propone anticipar las necesidades de talento, rediseñar el trabajo conforme avanza la automatización y desarrollar habilidades de manera continua. En ese esquema, el líder de la cadena de suministro define el trabajo y el de Recursos Humanos prepara a las personas para realizarlo. La capacidad de crecer depende de que ambas áreas planifiquen juntas.",
        "El informe ubica en el rediseño del trabajo el punto donde se gana o se pierde la confianza de los equipos. La reconversión profesional solo escala cuando las personas ven en ella una trayectoria real. Así, la escasez de talento es tanto un reto de confianza como de capacidad."
      ]
    },
    articulo_en: {
      "bajada": "US supply chains will need far more talent than the labor market can supply, and Accenture argues that the gap will no longer be closed through hiring alone.",
      "parrafos": [
        "Accenture projects a labor shortfall in US supply chains that hiring will not be able to cover. In its study Turning the supply chain talent shortage into strength, the firm estimates that between 2026 and 2035 demand in core occupations will grow 19%, while the labor force will expand by only 3.2%. The difference amounts to nearly 1.1 million roles and challenges the usual response to a more complex operation: adding people.",
        "The gap is structural, not cyclical. In absolute terms, demand would add 1.34 million roles, while the labor force would add only about 221,000 workers. In addition, the forces expanding supply chains, such as more nodes, more customer commitments and more regulation, also increase the coordination each role requires. Together, these data show that people will be missing and that each role will become more demanding.",
        "Technology helps, but it does not close the shortfall on its own. In some cases, up to 48% of routine work could be fully automated, provided several technologies operate together. When roles are also deliberately redesigned, projected workforce growth shifts from +18.7% to about -3.0% over the period. The decisive factor is no longer how much technology is added but how work is reorganized around it.",
        "For the business, talent planning becomes a shared decision for senior leadership. Accenture proposes building talent foresight, redesigning work as automation advances and developing skills continuously. In that model, the supply chain leader defines the work and the HR leader prepares people to do it. The capacity to grow depends on both functions planning together.",
        "The report places work redesign at the point where teams' trust is won or lost. Reskilling only scales when people see a genuine career path in it. The talent shortage is therefore as much a challenge of trust as of capacity."
      ]
    },
    cita: {
      "original": "Technology adoption is inevitable. Workforce redesign is the choice",
      "traduccion_es": "La adopción de tecnología es inevitable. El rediseño de la fuerza laboral es la decisión",
      "autor_es": "Accenture",
      "autor_en": "Accenture"
    },
    preguntas_es: [
      "¿Qué áreas de la operación dependen hoy de perfiles que el mercado laboral no podrá cubrir en los próximos años?",
      "¿Cómo se coordina la planificación del talento entre la dirección de operaciones y Recursos Humanos?",
      "¿Qué información reciben los equipos de operaciones sobre cómo cambiarán sus roles con la automatización?"
    ],
    preguntas_en: [
      "Which areas of the operation currently depend on profiles the labor market will not be able to supply in the coming years?",
      "How is talent planning coordinated between operations leadership and Human Resources?",
      "What information do operations teams receive about how their roles will change with automation?"
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
    hallazgo_es: "Solo 11% de las organizaciones ya usa agentes de IA en su operación diaria",
    hallazgo_en: "Only 11% of organizations already use AI agents in their daily operations",
    dato_clave_es: "Solo 11% de las organizaciones opera agentes de IA, es decir, sistemas que ejecutan tareas por su cuenta, en producción, mientras 38% sigue en pilotos y 42% todavía elabora su hoja de ruta. Para las organizaciones, significa que el valor de esta tecnología depende menos de probarla y más de rediseñar los procesos donde va a operar.",
    dato_clave_en: "Only 11% of organizations run AI agents, meaning systems that carry out tasks on their own, in production, while 38% are still piloting and 42% are still building their roadmap. For organizations, it means that the value of this technology depends less on testing it and more on redesigning the processes in which it will operate.",
    contexto_es: "Capítulo del informe Tech Trends 2026 de Deloitte dedicado a la IA agéntica. Combina datos de la encuesta Emerging Technology Trends 2025 de la firma con entrevistas a ejecutivos de empresas como HPE, Dell, Toyota, Mapfre y Moderna. Publicación: diciembre de 2025.",
    contexto_en: "Chapter of Deloitte's Tech Trends 2026 report on agentic AI. It combines data from the firm's 2025 Emerging Technology Trends survey with interviews with executives at companies such as HPE, Dell, Toyota, Mapfre and Moderna. Published: December 2025.",
    puntos_es: [
      "**La experimentación supera con amplitud a la operación real.** 38% de las organizaciones prueba agentes de IA en pilotos y 30% los explora, mientras que solo 11% los opera en producción.",
      "**Apenas 1 de cada 4 está cerca de capturar valor.** 14% tiene soluciones listas para desplegar y 11% ya las opera: en conjunto, 25% de las organizaciones.",
      "**Una parte relevante avanza sin rumbo definido.** 42% aún desarrolla su hoja de ruta para agentes y 35% no cuenta con una estrategia formal.",
      "**Los datos son el primer cuello de botella.** Casi la mitad identifica la búsqueda (48%) y la reutilización (47%) de datos como obstáculos para automatizar con IA.",
      "**El valor exige rediseñar procesos, no solo automatizarlos.** Según Deloitte, el principal error es automatizar procesos pensados para personas en lugar de rediseñar el trabajo de principio a fin; Moderna, por ejemplo, unió Recursos Humanos y Tecnología bajo un mismo liderazgo para planificarlo."
    ],
    puntos_en: [
      "**Experimentation far outpaces real operation.** 38% of organizations are piloting AI agents and 30% are exploring them, while only 11% run them in production.",
      "**Barely 1 in 4 is close to capturing value.** 14% have solutions ready to deploy and 11% already run them: 25% of organizations combined.",
      "**A significant share is moving without a defined direction.** 42% are still developing their agent roadmap, and 35% have no formal strategy.",
      "**Data is the first bottleneck.** Nearly half cite data searchability (48%) and reusability (47%) as obstacles to automating with AI.",
      "**Value requires redesigning processes, not just automating them.** According to Deloitte, the main mistake is automating processes designed for people instead of redesigning work end to end; Moderna, for example, brought HR and Technology under one leader to plan it."
    ],
    articulo_es: {
      "bajada": "Las organizaciones experimentan con agentes de IA mucho más de lo que los ponen a operar, y Deloitte atribuye esa distancia al diseño del trabajo antes que a la tecnología.",
      "parrafos": [
        "La IA agéntica avanza mucho más lento de lo que sugiere el entusiasmo del mercado. El informe Tech Trends 2026 de Deloitte muestra que 38% de las organizaciones prueba agentes de IA, sistemas que ejecutan tareas por su cuenta, en fase piloto, mientras que apenas 11% los opera en producción. Además, 35% no tiene una estrategia formal. La distancia entre experimentar y operar es la principal señal del informe.",
        "El obstáculo rara vez es la tecnología. Las empresas intentan automatizar procesos diseñados por y para personas, en lugar de replantear cómo debería hacerse el trabajo. A ello se suman sistemas heredados que no fueron concebidos para agentes y datos difíciles de encontrar (48%) y de reutilizar (47%). En conjunto, estas cifras ubican el cuello de botella en los procesos y los datos, no en los agentes.",
        "Las organizaciones que avanzan no retiran a las personas del proceso, sino que definen con precisión dónde intervienen. Toyota utiliza un agente para seguir la llegada de vehículos a los concesionarios, una tarea que antes exigía consultar entre 50 y 100 pantallas de sus sistemas centrales. En la aseguradora Mapfre, los agentes resuelven tareas administrativas de siniestros, mientras que toda comunicación sensible con un cliente pasa por una persona. El diseño híbrido, y no la automatización total, es lo que permite escalar.",
        "Para el negocio, el cambio alcanza la forma misma de organizar el trabajo. Gartner, citado en el informe, proyecta que en 2028 el 15% de las decisiones operativas del día a día se tomará de forma autónoma, frente a ninguna en 2024. Deloitte describe una fuerza laboral \"de silicio\" que requerirá prácticas similares a la gestión de personas, desde la incorporación hasta la evaluación de desempeño. Por ello, Moderna integró Recursos Humanos y Tecnología bajo un mismo liderazgo para planificar el trabajo de personas y agentes.",
        "La ventaja competitiva no dependerá de cuántos agentes despliegue una empresa, sino de la calidad con que diseñe su colaboración con las personas. La tecnología ya está disponible; el rediseño del trabajo es la tarea pendiente."
      ]
    },
    articulo_en: {
      "bajada": "Organizations are experimenting with AI agents far more than they are putting them to work, and Deloitte attributes that gap to work design rather than to the technology.",
      "parrafos": [
        "Agentic AI is advancing far more slowly than market enthusiasm suggests. Deloitte's Tech Trends 2026 report shows that 38% of organizations are piloting AI agents, systems that carry out tasks on their own, while only 11% run them in production. In addition, 35% have no formal strategy. The distance between experimenting and operating is the report's central signal.",
        "The obstacle is rarely the technology. Companies try to automate processes designed by and for people instead of rethinking how the work should be done. Added to this are legacy systems not built for agents and data that is hard to find (48%) and to reuse (47%). Together, these figures place the bottleneck in processes and data, not in the agents.",
        "The organizations that are making progress do not remove people from the process; they define precisely where people step in. Toyota uses an agent to track vehicle arrivals at dealerships, a task that previously required checking 50 to 100 mainframe screens. At insurer Mapfre, agents handle administrative claims tasks, while every sensitive customer communication goes through a person. Hybrid design, not full automation, is what makes scaling possible.",
        "For the business, the shift reaches the very way work is organized. Gartner, cited in the report, projects that by 2028, 15% of day-to-day operational decisions will be made autonomously, compared with none in 2024. Deloitte describes a \"silicon-based\" workforce that will require practices similar to people management, from onboarding to performance management. Moderna therefore brought Human Resources and Technology under a single leader to plan the work of people and agents.",
        "Competitive advantage will not depend on how many agents a company deploys but on how well it designs their collaboration with people. The technology is already available; the redesign of work is the task still pending."
      ]
    },
    cita: {
      "original": "It's hybrid by design",
      "traduccion_es": "Es híbrido por diseño",
      "autor_es": "Maribel Solanas Gonzalez, directora global de datos de Mapfre, en el informe de Deloitte",
      "autor_en": "Maribel Solanas Gonzalez, group chief data officer at Mapfre, in Deloitte's report"
    },
    preguntas_es: [
      "¿Qué procesos de la organización podrían rediseñarse de principio a fin antes de incorporar agentes de IA?",
      "¿Qué decisiones deben seguir en manos de personas y cómo se comunica ese criterio a los equipos?",
      "¿Qué área asume la planificación del trabajo cuando una parte la realizan personas y otra, agentes?"
    ],
    preguntas_en: [
      "Which processes in the organization could be redesigned end to end before AI agents are introduced?",
      "Which decisions should remain in people's hands, and how is that criterion communicated to teams?",
      "Which function takes ownership of workforce planning when part of the work is done by people and part by agents?"
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
    hallazgo_es: "62% de los inversionistas de largo plazo prefiere el valor sostenido a los resultados trimestrales",
    hallazgo_en: "62% of long-term investors prefer lasting value to quarterly results",
    dato_clave_es: "62% de los inversionistas prefiere que una empresa incumpla en ocasiones el consenso, es decir, las estimaciones de resultados del mercado, si crea valor sostenido; solo 17% prioriza cumplirlo siempre. Para las organizaciones, significa que la credibilidad de la gerencia y la coherencia de su relato pesan más que un trimestre perfecto.",
    dato_clave_en: "62% of investors prefer that a company occasionally miss consensus, meaning the market's earnings estimates, if it creates sustained value; only 17% prioritize always meeting it. For organizations, it means that management credibility and a consistent narrative weigh more than a perfect quarter.",
    contexto_es: "Encuesta de McKinsey & Company a 112 inversionistas de Norteamérica y Europa, en su mayoría de largo plazo, sobre el valor que asignan al cumplimiento del consenso de resultados y a la comunicación con el mercado. Trabajo de campo: del 20 de enero al 9 de febrero de 2026. Publicación: junio de 2026.",
    contexto_en: "McKinsey & Company survey of 112 investors in North America and Europe, most of them long-term, on the value they place on meeting earnings consensus and on communication with the market. Fieldwork: January 20 to February 9, 2026. Published: June 2026.",
    puntos_es: [
      "**El consenso importa, pero no a cualquier costo.** 59% de los inversionistas considera importante o muy importante cumplir o superar el consenso de resultados.",
      "**El valor de largo plazo pesa más que el trimestre.** 62% prefiere \"incumplimientos ocasionales con una sólida creación de valor de largo plazo\", frente a solo 17% que opta por el cumplimiento constante.",
      "**Lo que se castiga es el patrón, no el tropiezo.** 73% interpreta los incumplimientos repetidos como una señal negativa sobre la transparencia o el control de la empresa.",
      "**Los inversionistas quieren conversación, no guion.** Casi 9 de cada 10 piden más tiempo de preguntas en las presentaciones de resultados, y las presentaciones más ensayadas son la mejora menos solicitada.",
      "**La IA vuelve visible cualquier inconsistencia del relato.** 47% ya usa IA generativa con frecuencia en su análisis, lo que facilita comparar documentos de una misma empresa."
    ],
    puntos_en: [
      "**Consensus matters, but not at any cost.** 59% of investors consider meeting or beating consensus important or very important.",
      "**Long-term value outweighs the quarter.** 62% prefer \"occasional misses but strong long-term value creation\", compared with only 17% who favor consistently meeting consensus.",
      "**The pattern is penalized, not the stumble.** 73% read repeated misses as a negative signal about a company's transparency or control.",
      "**Investors want conversation, not a script.** Nearly 9 in 10 want more Q&A time on earnings calls, and more rehearsed presentations are the least requested improvement.",
      "**AI makes any inconsistency in the narrative visible.** 47% already use generative AI frequently in their analysis, which makes it easier to compare a company's documents."
    ],
    articulo_es: {
      "bajada": "Los inversionistas de largo plazo penalizan menos un resultado por debajo de lo esperado que la pérdida de credibilidad de la gerencia.",
      "parrafos": [
        "Cumplir cada trimestre no es lo que más valoran los inversionistas de largo plazo. Una encuesta de McKinsey a 112 inversionistas de Norteamérica y Europa muestra que 62% prefiere una empresa que a veces no alcanza el consenso de resultados, pero crea valor sólido a largo plazo. Solo 17% elige a la que cumple siempre. El hallazgo pone en duda una de las presiones más arraigadas sobre la alta dirección.",
        "Lo que el mercado castiga es el patrón, no el tropiezo aislado. Cuando una empresa supera las estimaciones de forma sistemática, solo 49% de los encuestados lo considera una buena señal, y una parte sospecha que la guía era conservadora. En cambio, ante incumplimientos reiterados, 73% percibe un problema de transparencia o de control. Para estos inversionistas, la consistencia en el tiempo pesa más que la cifra de un trimestre.",
        "El consenso conserva su peso, pero como señal de lo que viene. 59% sigue considerando importante o muy importante cumplirlo o superarlo. Investigaciones previas de McKinsey precisan que el precio de la acción cae tras un incumplimiento solo cuando los analistas también reducen sus proyecciones para los años siguientes, y en cerca de 40% de los casos incluso sube. Así, el resultado trimestral importa en la medida en que anticipa el desempeño futuro.",
        "Para el negocio, la exigencia sobre la comunicación financiera aumenta. 47% de los inversionistas ya usa IA generativa con frecuencia en su análisis, lo que facilita detectar inconsistencias entre documentos. A la vez, casi nueve de cada diez piden más tiempo de preguntas, y para 86% la profundidad de la información es lo que distingue una buena comunicación. El mercado premia la conversación con sustancia por encima de un guion pulido.",
        "Aunque el estudio se centra en la relación con inversionistas, describe cómo se construye la credibilidad de un equipo directivo. Una estrategia explicada con claridad, las malas noticias comunicadas a tiempo y los compromisos verificables pesan más que un trimestre impecable."
      ]
    },
    articulo_en: {
      "bajada": "Long-term investors penalize a below-expectation result less than they penalize a loss of management credibility.",
      "parrafos": [
        "Hitting every quarter is not what long-term investors value most. A McKinsey survey of 112 investors in North America and Europe shows that 62% prefer a company that occasionally misses consensus but creates strong long-term value. Only 17% choose the one that always delivers. The finding challenges one of the most deeply rooted pressures on senior leadership.",
        "What the market penalizes is the pattern, not the isolated stumble. When a company consistently beats estimates, only 49% of respondents see it as a positive signal, and some suspect the guidance was conservative. By contrast, when it misses repeatedly, 73% see a problem of transparency or control. For these investors, consistency over time weighs more than any single quarter's figure.",
        "Consensus still matters, but as a signal of what lies ahead. 59% still consider meeting or beating it important or very important. Earlier McKinsey research shows that share prices fall after a miss only when analysts also cut their forecasts for the following years, and in about 40% of cases the price actually rises. The quarterly result therefore matters insofar as it anticipates future performance.",
        "For the business, the bar for financial communication is rising. 47% of investors already use generative AI frequently in their analysis, which makes it easier to detect inconsistencies across documents. At the same time, nearly nine in ten want more Q&A time, and for 86% depth of information is what distinguishes good communication. The market rewards substantive conversation over a polished script.",
        "Although the study focuses on investor relations, it describes how a leadership team builds credibility. A clearly explained strategy, bad news communicated early and verifiable commitments carry more weight than a flawless quarter."
      ]
    },
    cita: {
      "original": "a market that uses consensus as a lens into management credibility",
      "traduccion_es": "un mercado que usa el consenso como una lente para evaluar la credibilidad de la gerencia",
      "autor_es": "McKinsey & Company",
      "autor_en": "McKinsey & Company"
    },
    preguntas_es: [
      "¿Qué tan consistente es el relato de la empresa entre sus reportes financieros, sus presentaciones y su comunicación interna?",
      "¿Con cuánta anticipación se comunican las malas noticias al mercado y a los equipos?",
      "¿Qué compromisos públicos de la dirección pueden verificarse hoy con datos?"
    ],
    preguntas_en: [
      "How consistent is the company's narrative across its financial reports, presentations and internal communication?",
      "How far in advance is bad news communicated to the market and to teams?",
      "Which of leadership's public commitments can be verified with data today?"
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
    hallazgo_es: "Las familias de EE.UU. ahorran 3% o menos de sus ingresos, un nivel inusualmente bajo",
    hallazgo_en: "US households save 3% or less of their income, an unusually low level",
    dato_clave_es: "En julio, el gasto de consumo de EE.UU. creció 5.9% interanual frente a 4.5% del ingreso disponible, y la tasa de ahorro se mantiene en 3% o menos desde abril de 2026, algo que solo había ocurrido en 41 de 807 meses con datos. Para las organizaciones de consumo, significa que la demanda actual descansa en hogares con poco margen financiero y que el ajuste esperado llegará por el lado del gasto.",
    dato_clave_en: "In July, US consumer spending grew 5.9% year over year versus 4.5% for disposable income, and the saving rate has been at 3% or lower since April 2026, which had happened in only 41 of 807 months on record. For consumer companies, it means that current demand rests on households with little financial room and that the expected adjustment will come from spending.",
    contexto_es: "Pronóstico económico trimestral de Deloitte para Estados Unidos, correspondiente al tercer trimestre de 2026. Se basa principalmente en datos oficiales del gobierno de ese país e incluye proyecciones de consumo, inflación y empleo bajo distintos escenarios. Publicación: septiembre de 2026.",
    contexto_en: "Deloitte's quarterly economic forecast for the United States for Q3 2026. It is based mainly on official US government data and includes projections for consumption, inflation and employment under different scenarios. Published: September 2026.",
    puntos_es: [
      "**El consumo avanza más rápido que el bolsillo.** En julio, el gasto de consumo creció 5.9% interanual en términos nominales, frente a 4.5% del ingreso disponible y 3.5% de los salarios.",
      "**No es un episodio aislado, sino una tendencia.** El gasto supera el crecimiento de los ingresos desde junio de 2024, y esa brecha se amplió este año.",
      "**El colchón financiero de los hogares es mínimo.** La tasa de ahorro personal se mantiene en 3% o menos desde abril de 2026, algo que antes solo había ocurrido en 41 de 807 meses con datos.",
      "**Se anticipa una desaceleración, no un quiebre.** Deloitte proyecta que el consumo real crecerá 2% en 2026 y 1.4% en 2027.",
      "**La señal es de cautela, no de alarma.** La firma precisa que no hay necesariamente una burbuja, aunque tasas de ahorro tan bajas son poco frecuentes."
    ],
    puntos_en: [
      "**Spending is outpacing income.** In July, nominal consumer spending grew 5.9% year over year, compared with 4.5% for disposable income and 3.5% for wages.",
      "**This is a trend, not an isolated episode.** Spending has outpaced income growth since June 2024, and that gap widened this year.",
      "**Households' financial cushion is minimal.** The personal saving rate has stayed at 3% or lower since April 2026, which had previously happened in only 41 of 807 months on record.",
      "**A slowdown is expected, not a break.** Deloitte projects real consumer spending to grow 2% in 2026 and 1.4% in 2027.",
      "**The signal is caution, not alarm.** The firm notes there is not necessarily a bubble, although saving rates this low are uncommon."
    ],
    articulo_es: {
      "bajada": "Las familias de EE.UU. sostienen su consumo gastando más de lo que ganan, y Deloitte anticipa que el ajuste llegará por el lado del gasto.",
      "parrafos": [
        "El consumidor estadounidense gasta a un ritmo mayor que el de sus ingresos. El pronóstico económico de Deloitte para el tercer trimestre de 2026 muestra que, en julio, el gasto de consumo creció 5.9% interanual, frente a 4.5% del ingreso disponible y 3.5% de los salarios. La señal es relevante porque el consumo sostiene buena parte de la economía y hoy lo hace con un respaldo financiero cada vez menor.",
        "El fenómeno se arrastra desde hace más de dos años y ya agotó buena parte del ahorro. El gasto supera a los ingresos desde junio de 2024, y la brecha se amplió este año. En consecuencia, la tasa de ahorro personal está en 3% o menos desde abril de 2026, una situación registrada solo en 41 de los 807 meses con datos, casi todos entre 2005 y 2008. Los hogares sostienen su nivel de gasto a costa de su colchón financiero.",
        "El escenario central es de desaceleración, no de quiebre. Deloitte aclara que no hay necesariamente una burbuja y espera que el gasto vuelva a alinearse con los ingresos en los próximos trimestres. Ese ajuste vendría del consumo, porque los salarios por hora se desaceleran y la demografía limita el crecimiento del empleo. Por ello, la firma proyecta que el consumo real crezca 2% en 2026 y 1.4% en 2027.",
        "Para el negocio, el margen de error se reduce. Parte del dinamismo económico proviene de la inversión en inteligencia artificial y del efecto riqueza de la bolsa, mientras la inflación sigue por encima de la meta, con un alza de 3.4% en el índice PCE subyacente en agosto. En el escenario más pesimista de Deloitte, una corrección de 35% en la bolsa elevaría el desempleo a 7.2%. Con tan poco ahorro, cualquier debilitamiento de esos soportes impactaría de inmediato en la demanda.",
        "Para el consumo masivo, la señal es de cautela: el comprador que hoy sostiene las ventas gasta más de lo que gana, y Deloitte no considera sostenible ese ritmo. Aunque los datos corresponden a Estados Unidos, reflejan el pulso del mercado de consumo más grande del mundo."
      ]
    },
    articulo_en: {
      "bajada": "US households are sustaining their consumption by spending more than they earn, and Deloitte expects the adjustment to come from spending.",
      "parrafos": [
        "The US consumer is spending faster than income is growing. Deloitte's economic forecast for Q3 2026 shows that in July consumer spending grew 5.9% year over year, compared with 4.5% for disposable income and 3.5% for wages. The signal matters because consumption drives much of the economy, and today it does so with a shrinking financial cushion.",
        "The trend has lasted more than two years and has already eroded much of households' savings. Spending has outpaced income since June 2024, and the gap widened this year. As a result, the personal saving rate has been at 3% or lower since April 2026, a situation recorded in only 41 of the 807 months on record, almost all between 2005 and 2008. Households are sustaining their spending at the expense of their financial cushion.",
        "The central scenario is a slowdown, not a break. Deloitte clarifies that there is not necessarily a bubble and expects spending to realign with income in the coming quarters. That adjustment would come from consumption, because hourly wage growth is slowing and demographics limit job growth. The firm therefore projects real consumer spending growth of 2% in 2026 and 1.4% in 2027.",
        "For the business, the margin for error is narrowing. Part of the economy's momentum comes from investment in artificial intelligence and the stock-market wealth effect, while inflation remains above target, with core PCE prices up 3.4% in August. In Deloitte's most pessimistic scenario, a 35% stock-market correction would push unemployment to 7.2%. With savings this low, any weakening of those supports would hit demand immediately.",
        "For consumer goods, the signal is caution: the shopper sustaining sales today is spending more than they earn, and Deloitte does not consider that pace sustainable. Although the data is for the United States, it reflects the pulse of the world's largest consumer market."
      ]
    },
    cita: {
      "original": "such low saving rates are unusual",
      "traduccion_es": "tasas de ahorro tan bajas son poco frecuentes",
      "autor_es": "Deloitte",
      "autor_en": "Deloitte"
    },
    preguntas_es: [
      "¿Qué supuestos de demanda incluyen los planes comerciales para 2027 si el consumidor reduce su gasto?",
      "¿Qué categorías del portafolio son más sensibles a un ajuste en el gasto de los hogares?",
      "¿Cómo se prepara a los equipos comerciales para un cambio de ciclo después de un periodo de crecimiento?"
    ],
    preguntas_en: [
      "What demand assumptions do the commercial plans for 2027 include if consumers reduce their spending?",
      "Which categories in the portfolio are most sensitive to an adjustment in household spending?",
      "How are commercial teams prepared for a turn in the cycle after a period of growth?"
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
    hallazgo_es: "94% de los consumidores decide su compra final en la tienda física",
    hallazgo_en: "94% of consumers make their final purchase decision in a physical store",
    dato_clave_es: "94% de los consumidores toma su decisión final de compra en la tienda, y aunque las ventas físicas pasarían de 77% a 73% del total minorista entre 2025 y 2028, el canal seguirá siendo dominante. Para las organizaciones, significa que la tienda no es un costo a reducir, sino un activo cuya función conviene redefinir.",
    dato_clave_en: "94% of consumers make their final purchase decision in store, and although physical sales would move from 77% to 73% of total retail between 2025 and 2028, the channel will remain dominant. For organizations, it means that the store is not a cost to be cut but an asset whose role should be redefined.",
    contexto_es: "Análisis de EY basado en su Future Consumer Index, una encuesta a más de 20,000 consumidores en 27 países, complementada con datos de Euromonitor y del EY AI Sentiment Index. Publicación: junio de 2025.",
    contexto_en: "EY analysis based on its Future Consumer Index, a survey of more than 20,000 consumers in 27 countries, complemented by Euromonitor data and the EY AI Sentiment Index. Published: June 2025.",
    puntos_es: [
      "**La tienda sigue siendo el lugar donde se decide la compra.** 94% de los consumidores toma su decisión en la tienda, después de explorar en distintos canales.",
      "**El canal físico pierde terreno, pero lentamente.** Su participación bajaría de 77% de las ventas minoristas en 2025 a 73% en 2028.",
      "**La tienda también es un canal de descubrimiento.** 45% de los consumidores descubre marcas nuevas en tienda y 24% conoce productos nuevos gracias a demostraciones en el local.",
      "**La IA ya forma parte de la experiencia de compra.** 60% de los consumidores la utiliza al comprar, principalmente en atención al cliente.",
      "**La oportunidad está en ampliar la función del local.** EY plantea convertir las tiendas en espacios de experiencia y servicio, con oferta de salud, asesoría, reparación, alquiler y reventa."
    ],
    puntos_en: [
      "**The store is still where the purchase is decided.** 94% of consumers make their decision in store, after exploring across channels.",
      "**The physical channel is losing ground, but slowly.** Its share would fall from 77% of retail sales in 2025 to 73% in 2028.",
      "**The store is also a discovery channel.** 45% of consumers discover new brands in store, and 24% learn about new products through in-store demonstrations.",
      "**AI is already part of the shopping experience.** 60% of consumers use it when shopping, mainly for customer service.",
      "**The opportunity lies in expanding the store's role.** EY proposes turning stores into experience and service spaces offering health, advice, repair, rental and resale."
    ],
    articulo_es: {
      "bajada": "Las ventas se desplazan hacia los canales digitales, pero la decisión de compra sigue ocurriendo en la tienda, y EY plantea redefinir su función en lugar de cerrarla.",
      "parrafos": [
        "La tienda física sigue siendo el lugar donde se cierra la compra. El Future Consumer Index de EY, basado en más de 20,000 consumidores de 27 países, muestra que 94% toma su decisión final en la tienda, aun después de explorar otros canales. El resultado contradice la idea, muy difundida, de que el canal físico está en camino de desaparecer.",
        "El canal físico pierde terreno, pero de forma gradual. Según datos de Euromonitor citados por EY, su participación solo bajaría de 77% a 73% del total minorista entre 2025 y 2028, aunque lo digital crezca más rápido. Además, 45% de los consumidores descubre marcas nuevas en la tienda. En conjunto, estos datos muestran que la tienda conserva su papel en el descubrimiento y en la decisión de compra.",
        "La función de la tienda cambia según la categoría y el perfil del comprador. Para los productos esenciales, los consumidores prefieren el supermercado por costumbre y confianza; en ropa, belleza y cuidado personal, la compra combina canales digitales y físicos. Los más jóvenes buscan tiendas especializadas que ofrezcan experiencia, y 60% del total ya usa IA al comprar, sobre todo en atención al cliente. Por ello, no existe un único modelo de tienda que sirva para todo el portafolio.",
        "Para el negocio, la oportunidad está en exigir más de cada local. EY propone convertir la tienda en un espacio de experiencia y de servicios como salud, nutrición, asesoría, reparación, alquiler y reventa, en un contexto donde 72% de los consumidores intenta reparar antes que reemplazar. También sugiere usarla para publicidad en el punto de venta y como centro logístico. No obstante, la consultora advierte que el cliente debe otorgar a la marca la legitimidad para ofrecer esos servicios, lo que exige paciencia y alianzas.",
        "Aunque el análisis tiene más de un año, su planteamiento central sigue vigente. La tienda física no desaparece; lo que se redefine es qué ofrece y cuánta confianza necesita para ofrecerlo."
      ]
    },
    articulo_en: {
      "bajada": "Sales are shifting to digital channels, but the purchase decision still happens in store, and EY proposes redefining the store's role rather than closing it.",
      "parrafos": [
        "The physical store is still where the purchase is closed. EY's Future Consumer Index, based on more than 20,000 consumers in 27 countries, shows that 94% make their final decision in store, even after exploring other channels. The result contradicts the widespread idea that the physical channel is on its way out.",
        "The physical channel is losing ground, but gradually. According to Euromonitor data cited by EY, its share would fall only from 77% to 73% of total retail between 2025 and 2028, even as digital grows faster. In addition, 45% of consumers discover new brands in store. Together, these data show that the store retains its role in discovery and in the purchase decision.",
        "The store's role varies by category and by shopper profile. For essentials, consumers prefer supermarkets out of habit and trust; in clothing, beauty and personal care, the purchase combines digital and physical channels. Younger shoppers look for specialty stores that offer experience, and 60% of all consumers already use AI when shopping, mainly for customer service. There is therefore no single store model that works for the entire portfolio.",
        "For the business, the opportunity lies in demanding more from each location. EY proposes turning the store into a space for experience and services such as health, nutrition, advice, repair, rental and resale, at a time when 72% of consumers try to repair before replacing. It also suggests using stores for in-store advertising and as fulfillment hubs. The firm cautions, however, that customers must grant the brand the legitimacy to offer those services, which requires patience and partnerships.",
        "Although the analysis is more than a year old, its central argument still holds. The physical store is not disappearing; what is being redefined is what it offers and how much trust it needs to offer it."
      ]
    },
    cita: {
      "original": "mass store closures would be a mistake",
      "traduccion_es": "los cierres masivos de tiendas serían un error",
      "autor_es": "EY",
      "autor_en": "EY"
    },
    preguntas_es: [
      "¿Qué indicadores reconocen el aporte de una tienda que inspira compras concretadas en otro canal?",
      "¿Qué servicios nuevos podría ofrecer la marca en sus locales con la legitimidad que hoy le reconocen sus clientes?",
      "¿Cómo cambian el rol y la formación de los equipos de tienda si el local pasa a ser un espacio de experiencia?"
    ],
    preguntas_en: [
      "Which indicators recognize the contribution of a store that inspires purchases completed in another channel?",
      "Which new services could the brand offer in its stores with the legitimacy its customers currently grant it?",
      "How do the role and training of store teams change if the store becomes an experience space?"
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
    hallazgo_es: "7 de cada 10 líderes ven la velocidad y la agilidad como su principal estrategia competitiva",
    hallazgo_en: "7 in 10 leaders see speed and agility as their main competitive strategy",
    dato_clave_es: "7 de cada 10 líderes apuestan por la velocidad y la agilidad como principal estrategia competitiva, pero las empresas con un enfoque de IA centrado solo en la tecnología tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno que las que priorizan a las personas. Para las organizaciones, significa que la velocidad que genera valor depende de cómo las personas trabajan con la tecnología, no solo de adoptarla.",
    dato_clave_en: "7 in 10 leaders are betting on speed and agility as their main competitive strategy, but companies with a technology-only approach to AI are 1.6 times more likely to miss their return expectations than those that prioritize people. For organizations, it means that value-creating speed depends on how people work with technology, not just on adopting it.",
    contexto_es: "Informe 2026 Global Human Capital Trends de Deloitte, elaborado con Oxford Economics. Encuesta a más de 9,000 líderes de negocio y de recursos humanos en 89 países, complementada con encuestas a colaboradores, gerentes y ejecutivos, con más de 50 entrevistas y con una investigación adicional a 100 altos ejecutivos. Publicación: marzo de 2026.",
    contexto_en: "Deloitte's 2026 Global Human Capital Trends report, produced with Oxford Economics. Survey of more than 9,000 business and HR leaders in 89 countries, complemented by surveys of workers, managers and executives, more than 50 interviews and additional research with 100 C-suite executives. Published: March 2026.",
    puntos_es: [
      "**La velocidad se convierte en la principal ventaja competitiva.** 7 de cada 10 líderes afirman que su estrategia para los próximos tres años es ganar velocidad y agilidad.",
      "**La mayoría aborda la IA desde la tecnología.** En una investigación complementaria con 100 altos ejecutivos, 59% aplica un enfoque de IA centrado en la tecnología.",
      "**Ese enfoque se asocia con un menor retorno.** Esas empresas tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno de la IA que las que priorizan a las personas; se trata de una asociación, no de una relación causal.",
      "**La IA genera un costo cultural poco visible.** Deloitte describe una \"deuda cultural\": la desalineación y la desconfianza que se acumulan cuando la IA cambia el trabajo sin conversaciones sobre esfuerzo, autoría y confianza.",
      "**El valor está en rediseñar el trabajo, no solo en hacerlo más eficiente.** El informe propone tres giros: de humano + máquina a humano x máquina, de la eficiencia a la creación de valor y de los planes estáticos a la gestión dinámica de capacidades."
    ],
    puntos_en: [
      "**Speed becomes the main competitive advantage.** 7 in 10 leaders say their strategy for the next three years is to be fast and nimble.",
      "**Most approach AI from a technology angle.** In complementary research with 100 C-suite executives, 59% take a technology-centered approach to AI.",
      "**That approach is associated with lower returns.** Those companies are 1.6 times more likely to miss their AI return expectations than those that prioritize people; this is an association, not a causal link.",
      "**AI creates a hidden cultural cost.** Deloitte describes \"cultural debt\": the misalignment and distrust that build up when AI changes work without conversations about effort, ownership and trust.",
      "**Value lies in redesigning work, not just making it more efficient.** The report proposes three shifts: from human + machine to human x machine, from efficiency to value creation and from static plans to dynamic management of capabilities."
    ],
    articulo_es: {
      "bajada": "Las organizaciones buscan acelerar con la IA, pero Deloitte concluye que la ventaja competitiva no está en la tecnología, que cualquiera puede replicar, sino en cómo las personas trabajan con ella.",
      "parrafos": [
        "La velocidad se ha convertido en la principal apuesta competitiva de las organizaciones. El informe 2026 Global Human Capital Trends de Deloitte, basado en más de 9,000 líderes de negocio y de recursos humanos de 89 países, muestra que 7 de cada 10 tienen como estrategia para los próximos tres años ganar velocidad y agilidad. Según la firma, la IA comprime la curva de crecimiento de los negocios: acelera el ascenso y adelanta el estancamiento, por lo que el tiempo para capturar valor en cada etapa se acorta.",
        "La forma de ganar esa velocidad, sin embargo, no es la que la mayoría eligió. En una investigación complementaria con 100 altos ejecutivos, 59% aplica un enfoque de IA centrado en la tecnología. Esas empresas tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno que las que priorizan a las personas. Aunque se trata de una asociación y no de una relación causal, el dato indica que apostar solo por la tecnología no asegura resultados, porque la IA está al alcance de todos y es fácil de replicar.",
        "Detrás de esa brecha aparece un costo menos visible, que Deloitte denomina \"deuda cultural\". Es la desalineación y la desconfianza que se acumulan cuando la IA modifica el trabajo sin que se converse sobre qué cuenta como esfuerzo, quién responde por un resultado o qué es justo. De acuerdo con el informe, la mayoría de las organizaciones rara vez evalúa estos efectos. En consecuencia, el costo de la IA se mide también en confianza, no solo en inversión.",
        "Para el negocio, el informe plantea tres cambios de enfoque. El primero es pasar de humano + máquina a humano x máquina, es decir, rediseñar el trabajo para que ambos se potencien. Los otros dos son pasar de la eficiencia de costos a la creación de valor, y de los planes estáticos a una gestión dinámica de capacidades. Deloitte cuestiona además la gestión del cambio tradicional y propone aprender en el propio flujo de trabajo, con la IA como apoyo.",
        "La conclusión del informe es directa: la tecnología se puede replicar, la forma en que las personas trabajan con ella no. Esa diferencia es la que convierte la velocidad en ventaja competitiva."
      ]
    },
    articulo_en: {
      "bajada": "Organizations want to accelerate with AI, but Deloitte concludes that competitive advantage lies not in the technology, which anyone can replicate, but in how people work with it.",
      "parrafos": [
        "Speed has become organizations' main competitive bet. Deloitte's 2026 Global Human Capital Trends report, based on more than 9,000 business and HR leaders in 89 countries, shows that 7 in 10 name being fast and nimble as their strategy for the next three years. According to the firm, AI compresses the business growth curve: it speeds up the climb and brings the plateau forward, so the window to capture value at each stage is shrinking.",
        "The way to gain that speed, however, is not the one most have chosen. In complementary research with 100 C-suite executives, 59% take a technology-centered approach to AI. Those companies are 1.6 times more likely to miss their return expectations than those that prioritize people. Although this is an association rather than a causal link, it indicates that betting on technology alone does not guarantee results, because AI is within everyone's reach and easy to replicate.",
        "Behind that gap lies a less visible cost, which Deloitte calls \"cultural debt.\" It is the misalignment and distrust that build up when AI changes work without conversations about what counts as effort, who is accountable for an outcome or what is fair. According to the report, most organizations rarely assess these effects. As a result, the cost of AI is also measured in trust, not only in investment.",
        "For the business, the report sets out three shifts in approach. The first is moving from human + machine to human x machine, that is, redesigning work so that each strengthens the other. The other two are moving from cost efficiency to value creation, and from static plans to dynamic management of capabilities. Deloitte also questions traditional change management and proposes learning in the flow of work, with AI as support.",
        "The report's conclusion is direct: technology can be replicated, but the way people work with it cannot. That difference is what turns speed into competitive advantage."
      ]
    },
    cita: {
      "original": "Technology—especially something as increasingly ubiquitous as AI—is replicable. People aren't.",
      "traduccion_es": "La tecnología, sobre todo algo tan omnipresente como la IA, se puede replicar. Las personas no.",
      "autor_es": "Deloitte",
      "autor_en": "Deloitte"
    },
    preguntas_es: [
      "¿Qué peso tienen las personas y la cultura en los indicadores con que hoy se evalúa el retorno de la IA?",
      "¿Qué instancia de la organización revisa los efectos culturales de la IA sobre el esfuerzo, la autoría y la confianza?",
      "¿Cómo se integra el aprendizaje en el trabajo diario cuando la capacitación tradicional no sigue el ritmo del cambio?"
    ],
    preguntas_en: [
      "How much weight do people and culture carry in the indicators currently used to assess AI's return?",
      "Which body in the organization reviews AI's cultural effects on effort, ownership and trust?",
      "How is learning built into daily work when traditional training cannot keep pace with change?"
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
    hallazgo_es: "4 de cada 10 líderes de servicios financieros en EE.UU. ven a sus equipos abrumados por el ritmo de cambio de la IA",
    hallazgo_en: "4 in 10 US financial services leaders see their teams overwhelmed by the pace of AI-driven change",
    dato_clave_es: "40% de los ejecutivos de servicios financieros percibe a sus equipos abrumados por el ritmo del cambio, y 34% identifica la fatiga de cambio, el desgaste que produce encadenar cambios sin pausa, como una barrera para escalar la IA. Para las organizaciones, significa que la capacidad de las personas para asimilar el cambio se ha convertido en un límite real para la velocidad de adopción.",
    dato_clave_en: "40% of financial services executives see their teams as overwhelmed by the pace of change, and 34% cite change fatigue, the strain of back-to-back change, as a barrier to scaling AI. For organizations, it means that people's capacity to absorb change has become a real limit on the speed of adoption.",
    contexto_es: "Encuesta de PwC (2026 Financial Services Workforce AI Survey) a 1,004 ejecutivos con cargo de director o superior en firmas de servicios financieros de EE.UU. con ingresos de al menos US$500 millones, de los segmentos de gestión de activos, banca, seguros y fondos de capital privado. Trabajo de campo: del 12 al 22 de mayo de 2026. Publicación: agosto de 2026.",
    contexto_en: "PwC survey (2026 Financial Services Workforce AI Survey) of 1,004 executives at director level or above at US financial services firms with at least US$500 million in revenue, across asset management, banking, insurance and private equity. Fieldwork: May 12–22, 2026. Published: August 2026.",
    puntos_es: [
      "**La inseguridad laboral frena la adopción.** 44% de los ejecutivos señala que sus colaboradores temen perder su empleo o que la IA cambie su rol.",
      "**La IA se usa por obligación más que por convicción.** 43% indica que sus equipos usan IA solo cuando se les exige, no por iniciativa propia.",
      "**El ritmo del cambio supera la capacidad de los equipos.** 40% afirma que sus colaboradores se sienten abrumados por la velocidad de los cambios.",
      "**El desgaste ya limita la escala de la IA.** 34% identifica la fatiga de cambio como una barrera clave para escalar la tecnología.",
      "**La presión por acelerar es casi unánime.** 90% considera que las firmas deben habituarse a moverse rápido, y 77% percibe que su organización no avanza al ritmo de la innovación en IA."
    ],
    puntos_en: [
      "**Job insecurity is slowing adoption.** 44% of executives say employees fear losing their jobs or having AI change their roles.",
      "**AI is used out of obligation more than conviction.** 43% say their teams use AI only when required, not on their own initiative.",
      "**The pace of change exceeds teams' capacity.** 40% say employees feel overwhelmed by the speed of change.",
      "**Strain is already limiting AI at scale.** 34% cite change fatigue as a key barrier to scaling the technology.",
      "**Pressure to accelerate is nearly unanimous.** 90% believe firms need to get used to moving quickly, and 77% feel their organization is not keeping pace with AI innovation."
    ],
    articulo_es: {
      "bajada": "Las firmas financieras de EE.UU. quieren acelerar la adopción de la IA, pero su principal límite es interno: equipos que la viven con temor, cansancio y más por obligación que por convicción.",
      "parrafos": [
        "La adopción de la IA en servicios financieros enfrenta un freno interno. La encuesta de PwC a más de mil ejecutivos de firmas de EE.UU. muestra que 40% percibe a sus colaboradores abrumados por el ritmo del cambio. La señal pesa porque surge en un sector que quiere acelerar: 90% considera que las firmas deben habituarse a moverse rápido y 77% percibe que la suya no avanza al ritmo de la innovación.",
        "El malestar se traduce en una adopción por obligación más que por convicción. 44% de los ejecutivos señala que sus colaboradores temen perder el empleo o que su rol cambie, y 43% que solo usan IA cuando se les exige. Además, 34% identifica la fatiga de cambio como una barrera para escalar la tecnología. En conjunto, estas cifras muestran que la velocidad buscada supera la capacidad de los equipos para acompañarla.",
        "Esos temores tienen fundamento en las propias expectativas de la dirección. Casi ocho de cada diez ejecutivos esperan que su plantilla se reduzca al menos 20% en cinco años. PwC advierte contra los recortes apresurados basados en modelos que podrían no cumplirse, y sostiene que cualquier reducción debe derivarse de la estrategia, no sustituirla. Por lo tanto, la inquietud de los colaboradores es una lectura razonable del contexto, no un problema de actitud.",
        "Para el negocio, el cambio sin gestionar también se convierte en un riesgo de control. Más de la mitad de los ejecutivos reconoce que sus colaboradores usan herramientas no aprobadas al menos de forma moderada, práctica conocida como IA \"en la sombra\", y 90% considera que genera riesgo regulatorio. En un sector tan regulado, esa exposición se suma a la pérdida de productividad. Por ello, PwC propone un programa formal con reglas claras sobre quién usa qué herramientas y con qué fin.",
        "La primera recomendación de PwC es brindar tranquilidad: aclarar expectativas, explicar cómo funcionará la organización con IA y asegurar las habilidades para esa transición. La velocidad que buscan las firmas depende, en buena medida, de que sus equipos comprendan el rumbo."
      ]
    },
    articulo_en: {
      "bajada": "US financial firms want to accelerate AI adoption, but their main constraint is internal: teams experiencing it with fear, fatigue and more out of obligation than conviction.",
      "parrafos": [
        "AI adoption in financial services faces an internal brake. PwC's survey of more than a thousand executives at US firms shows that 40% see their employees as overwhelmed by the pace of change. The signal carries weight because it comes from a sector intent on speed: 90% believe firms need to get used to moving quickly, and 77% feel their own is not keeping pace with innovation.",
        "The unease translates into adoption driven by obligation rather than conviction. 44% of executives say employees fear losing their jobs or seeing their roles change, and 43% that they use AI only when required. In addition, 34% cite change fatigue as a barrier to scaling the technology. Together, these figures show that the desired speed exceeds teams' capacity to keep up.",
        "Those fears are grounded in leadership's own expectations. Nearly eight in ten executives expect their workforce to shrink by at least 20% within five years. PwC warns against hasty cuts based on models that may not materialize and argues that any reduction should follow from strategy rather than replace it. Employees' concern is therefore a reasonable reading of the context, not an attitude problem.",
        "For the business, unmanaged change also becomes a control risk. More than half of executives acknowledge that employees use non-approved tools at least to a moderate extent, a practice known as \"shadow AI\", and 90% believe it creates regulatory risk. In such a heavily regulated sector, that exposure adds to lost productivity. PwC therefore proposes a formal program with clear rules on who uses which tools and for what purpose.",
        "PwC's first recommendation is to provide reassurance: clarify expectations, explain how the organization will operate with AI and secure the skills for that transition. The speed these firms seek depends largely on their teams understanding the direction."
      ]
    },
    cita: {
      "original": "Reassure your people.",
      "traduccion_es": "Tranquilizar a su gente.",
      "autor_es": "PwC, primera recomendación del estudio",
      "autor_en": "PwC, the study's first recommendation"
    },
    preguntas_es: [
      "¿Qué relato sobre el futuro de los roles con IA conocen hoy los equipos, y quién lo comunica?",
      "¿Cómo se distingue en la organización la resistencia al cambio de la fatiga que produce acumular iniciativas?",
      "¿Qué revela el uso de herramientas no aprobadas sobre la utilidad y la confianza en las herramientas oficiales?"
    ],
    preguntas_en: [
      "What narrative about the future of roles with AI do teams know today, and who communicates it?",
      "How does the organization distinguish resistance to change from the fatigue caused by stacking initiatives?",
      "What does the use of non-approved tools reveal about the usefulness of, and trust in, official tools?"
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
    hallazgo_es: "8 de cada 10 líderes de servicios financieros en EE.UU. prevén que la IA reduzca su personal al menos 20%",
    hallazgo_en: "8 in 10 US financial services leaders expect AI to reduce their workforce by at least 20%",
    dato_clave_es: "Casi 8 de cada 10 ejecutivos de servicios financieros anticipan una plantilla al menos 20% más pequeña en cinco años, pero entre quienes ya proyectaron el impacto de la IA, solo la mitad analizó cómo rediseñar los procesos. Para las organizaciones, significa que el recorte se está calculando antes de definir cómo será el trabajo que permanece.",
    dato_clave_en: "Nearly 8 in 10 financial services executives expect a workforce at least 20% smaller within five years, but among those who have already modeled AI's impact, only half have analyzed how to redesign processes. For organizations, it means that cuts are being calculated before defining what the remaining work will look like.",
    contexto_es: "Encuesta de PwC (2026 Financial Services Workforce AI Survey) a 1,004 ejecutivos con cargo de director o superior en firmas de servicios financieros de EE.UU. con ingresos de al menos US$500 millones. Trabajo de campo: del 12 al 22 de mayo de 2026. Publicación: agosto de 2026.",
    contexto_en: "PwC survey (2026 Financial Services Workforce AI Survey) of 1,004 executives at director level or above at US financial services firms with at least US$500 million in revenue. Fieldwork: May 12–22, 2026. Published: August 2026.",
    puntos_es: [
      "**El sector ya da por hecho una organización más pequeña.** Casi 8 de cada 10 ejecutivos esperan que su plantilla se reduzca al menos 20% en los próximos cinco años.",
      "**Se planifica el tamaño, pero no el trabajo.** 42% ya elaboró un modelo general del impacto de la IA en toda la empresa, aunque solo la mitad de ese grupo analizó cómo rediseñar procesos.",
      "**Los recortes se concentran en la base de la futura cantera de líderes.** Los puestos de entrada (30%) y la gerencia media (26%) se consideran los más expuestos.",
      "**Las habilidades en IA ya se pagan con prima.** 91% está elevando la compensación de quienes tienen habilidades en IA, y 86% considera que, para muchos nuevos ingresos, la formación en IA vale más que un MBA.",
      "**El talento se busca afuera y se desarrolla adentro.** 62% planea contratar talento con habilidades en IA y 61% prevé capacitar o reconvertir a sus colaboradores actuales."
    ],
    puntos_en: [
      "**The sector already assumes a smaller organization.** Nearly 8 in 10 executives expect their workforce to shrink by at least 20% over the next five years.",
      "**Size is being planned, but work is not.** 42% have built a high-level, enterprise-wide model of AI's impact, but only half of that group have analyzed how to redesign processes.",
      "**Cuts are concentrated where future leaders come from.** Entry-level roles (30%) and middle management (26%) are considered the most exposed.",
      "**AI skills already command a premium.** 91% are raising pay for employees with AI skills, and 86% believe that, for many new hires, AI training is worth more than an MBA.",
      "**Talent is sought outside and developed inside.** 62% plan to hire talent with AI skills and 61% plan to upskill or reskill current employees."
    ],
    articulo_es: {
      "bajada": "Las firmas financieras anticipan una plantilla mucho más reducida por efecto de la IA, pero pocas han definido cómo se organizará el trabajo después.",
      "parrafos": [
        "El sector financiero de EE.UU. ya da por hecho que la IA reducirá sus equipos. La encuesta de PwC a más de mil ejecutivos de firmas del sector muestra que casi ocho de cada diez esperan una plantilla al menos 20% más pequeña en cinco años. No es un ajuste marginal, sino un cambio de escala en toda la organización, lo que vuelve clave saber cómo se trabajará después.",
        "La planificación, sin embargo, se queda en el cálculo. 42% ya elaboró un modelo general del impacto de la IA en toda la empresa, pero solo la mitad de ese grupo analizó cómo rediseñar procesos y flujos de trabajo. A ello se suma la principal barrera para escalar la IA: 41% menciona datos fragmentados o de baja calidad, lo que dificulta incluso conocer qué roles y habilidades existen hoy. Las firmas saben cuánto reducir, pero no cómo será el trabajo que permanece.",
        "El impacto se concentra donde se forman los líderes del futuro. 30% de los ejecutivos identifica los puestos de entrada como los más vulnerables, seguidos por la gerencia media (26%). PwC advierte que menos puestos de entrada hoy implican una base más reducida de la cual surgirán los gerentes de mañana. Un recorte que hoy parece eficiente puede debilitar la sucesión de liderazgo.",
        "Para el negocio, la IA ya modifica el valor del talento antes de demostrar su retorno. 91% está elevando la compensación de quienes tienen habilidades en IA, y 86% considera que, para muchos nuevos ingresos, esa formación vale más que un MBA. Sin embargo, 77% reconoce que la mayoría de sus inversiones en IA todavía no genera un retorno medible. Las firmas invierten con fuerza en estas habilidades sin evidencia aún de su rendimiento.",
        "El estudio describe un avance a dos velocidades: rapidez para proyectar recortes y pagar más por la IA, lentitud para rediseñar el trabajo. De esa distancia dependerá que la reducción de plantilla genere eficiencia o solo una organización más pequeña."
      ]
    },
    articulo_en: {
      "bajada": "Financial firms expect a much smaller workforce as a result of AI, but few have defined how work will be organized afterwards.",
      "parrafos": [
        "The US financial sector already takes for granted that AI will shrink its teams. PwC's survey of more than a thousand executives at firms in the sector shows that nearly eight in ten expect a workforce at least 20% smaller within five years. This is not a marginal adjustment but a change in scale across the organization, which makes it critical to know how work will be done afterwards.",
        "Planning, however, stops at the calculation. 42% have built a high-level model of AI's impact across the company, but only half of that group have analyzed how to redesign processes and workflows. Added to this is the main barrier to scaling AI: 41% cite fragmented or low-quality data, which makes it difficult even to know which roles and skills exist today. Firms know how much to cut, but not what the remaining work will look like.",
        "The impact is concentrated where future leaders are developed. 30% of executives identify entry-level roles as the most vulnerable, followed by middle management (26%). PwC warns that fewer entry-level roles today mean a smaller base from which tomorrow's managers will emerge. A cut that looks efficient today may weaken leadership succession.",
        "For the business, AI is already changing the value of talent before proving its return. 91% are raising pay for employees with AI skills, and 86% believe that, for many new hires, that training is worth more than an MBA. However, 77% acknowledge that most of their AI investments are not yet delivering a measurable return. Firms are investing heavily in these skills without yet having evidence of their payoff.",
        "The study describes progress at two speeds: quick to model cuts and pay more for AI, slow to redesign work. Whether workforce reduction brings efficiency or simply a smaller organization will depend on that gap."
      ]
    },
    cita: {
      "original": "They're often planning for a smaller workforce—and hoping AI fills the gap.",
      "traduccion_es": "Con frecuencia planifican una fuerza laboral más pequeña y esperan que la IA cubra la brecha.",
      "autor_es": "PwC",
      "autor_en": "PwC"
    },
    preguntas_es: [
      "¿Qué procesos se han rediseñado antes de definir las metas de reducción de plantilla?",
      "¿Cómo se asegura la formación de futuros líderes si se reducen los puestos de entrada y la gerencia media?",
      "¿Qué se comunica a los equipos cuando la organización ya proyectó recortes que aún no ha anunciado?"
    ],
    preguntas_en: [
      "Which processes have been redesigned before workforce reduction targets are set?",
      "How is the development of future leaders secured if entry-level and middle-management roles are reduced?",
      "What is communicated to teams when the organization has already modeled cuts it has not yet announced?"
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
    hallazgo_es: "80% de las empresas de ciencias de la vida que escalan la IA explica a sus equipos cómo cambiarán sus roles",
    hallazgo_en: "80% of life sciences companies scaling AI explain to their teams how roles will change",
    dato_clave_es: "80% de las empresas de ciencias de la vida que escalan la IA comunica a sus equipos cómo cambiarán los roles, frente a 7% de las que recién la exploran; aun así, solo 20% de las más avanzadas convirtió esa visión en decisiones para toda la organización. Para las organizaciones, significa que explicar el futuro del trabajo es condición para escalar la IA, y que el reto siguiente es traducir ese relato en decisiones.",
    dato_clave_en: "80% of life sciences companies scaling AI tell their teams how roles will change, compared with 7% of those just exploring it; even so, only 20% of the most advanced have turned that vision into organization-wide decisions. For organizations, it means that explaining the future of work is a condition for scaling AI, and that the next challenge is turning that narrative into decisions.",
    contexto_es: "Gráfico de investigación de Bain & Company basado en su encuesta Scaling AI in Life Sciences, aplicada a 133 ejecutivos de la industria de ciencias de la vida. Trabajo de campo: cuarto trimestre de 2025. Publicación: febrero de 2026.",
    contexto_en: "Bain & Company research chart based on its Scaling AI in Life Sciences survey of 133 executives in the life sciences industry. Fieldwork: Q4 2025. Published: February 2026.",
    puntos_es: [
      "**Explicar el futuro de los roles distingue a quienes escalan la IA.** 80% de las empresas que escalan con éxito comunica cómo evolucionarán los roles, las habilidades y los equipos mixtos de personas e IA.",
      "**Entre las rezagadas, esa conversación casi no existe.** Solo 7% de las empresas que recién exploran la IA comunica esa visión.",
      "**La visión todavía no se traduce en decisiones.** Solo 20% de las empresas que escalan convirtió esa visión en decisiones para toda la organización.",
      "**Las más avanzadas forman talento en lugar de esperarlo.** Más de la mitad de las que escalan ya capacitó a sus equipos, contrató talento en IA o trasladó personas entre áreas, frente a 20% o menos de las que exploran.",
      "**La escasez de talento sigue siendo el freno principal.** La falta global de especialistas en IA es uno de los mayores obstáculos para escalar."
    ],
    puntos_en: [
      "**Explaining the future of roles sets AI scalers apart.** 80% of companies successfully scaling AI communicate how roles, skills and hybrid human-AI teams will evolve.",
      "**Among laggards, that conversation barely exists.** Only 7% of companies just exploring AI communicate that vision.",
      "**The vision has not yet turned into decisions.** Only 20% of scaling companies have translated that vision into organization-wide decisions.",
      "**The most advanced build talent instead of waiting for it.** More than half of scalers have trained their teams, hired AI talent or moved people across functions, compared with 20% or fewer of explorers.",
      "**Talent scarcity remains the main constraint.** The global shortage of AI specialists is one of the biggest obstacles to scaling."
    ],
    articulo_es: {
      "bajada": "En ciencias de la vida, las empresas que escalan la IA explican a sus equipos cómo cambiarán sus roles, pero pocas han traducido esa visión en decisiones concretas.",
      "parrafos": [
        "Explicar el futuro de los roles distingue a las empresas que logran escalar la IA. La investigación Life Sciences' AI Momentum Requires a Workforce Redesign, de Bain & Company, se basa en una encuesta a 133 ejecutivos del sector. Entre las empresas que escalan con éxito, 80% comunica cómo evolucionarán los roles, las habilidades y los equipos mixtos de personas e IA; entre las que recién exploran, solo 7% lo hace. La comunicación sobre el trabajo aparece así como una de las diferencias más marcadas entre ambos grupos.",
        "Esa visión va acompañada de decisiones sobre el talento. Más de la mitad de las empresas que escalan ya capacitó a sus equipos, contrató talento en IA o trasladó personas entre áreas, frente a 20% o menos de las que exploran. Ante la escasez global de especialistas en IA, uno de los principales obstáculos para escalar, las más avanzadas no esperan a contratar: también forman. Explicar el rumbo y movilizar a las personas avanzan de manera conjunta.",
        "Tener una visión, sin embargo, no equivale a ejecutarla. Solo 20% de las empresas que escalan convirtió esa visión en decisiones concretas para toda la organización. Bain concluye que la planificación estratégica de la fuerza laboral todavía está en una etapa temprana en toda la industria. Incluso entre las más avanzadas, la comunicación del rumbo va por delante de la organización del trabajo.",
        "Para el negocio, el desafío es pasar de los pilotos a cambios a escala. En una investigación relacionada, Bain señala la falta de respaldo de la alta dirección como una de las razones por las que muchas empresas no logran escalar la IA. En un sector con escasez de talento especializado, la claridad sobre el futuro de cada rol incide directamente en la capacidad de atraer y retener a quienes asumirán el trabajo nuevo.",
        "Las empresas que avanzan con la IA no solo cambian sistemas: explican a sus equipos hacia dónde va su trabajo. El paso pendiente, incluso para ellas, es convertir ese relato en decisiones."
      ]
    },
    articulo_en: {
      "bajada": "In life sciences, companies scaling AI explain to their teams how their roles will change, but few have translated that vision into concrete decisions.",
      "parrafos": [
        "Explaining the future of roles sets apart the companies that manage to scale AI. Bain & Company's research Life Sciences' AI Momentum Requires a Workforce Redesign is based on a survey of 133 industry executives. Among companies scaling successfully, 80% communicate how roles, skills and hybrid human-AI teams will evolve; among those just exploring, only 7% do. Communication about work thus stands out as one of the sharpest differences between the two groups.",
        "That vision is accompanied by decisions on talent. More than half of scaling companies have trained their teams, hired AI talent or moved people across functions, compared with 20% or fewer of explorers. Facing a global shortage of AI specialists, one of the main obstacles to scaling, the most advanced do not wait to hire: they also develop. Explaining the direction and mobilizing people advance together.",
        "Having a vision, however, is not the same as executing it. Only 20% of scaling companies have turned that vision into concrete organization-wide decisions. Bain concludes that strategic workforce planning is still at an early stage across the industry. Even among the most advanced, communication of the direction is ahead of the organization of work.",
        "For the business, the challenge is moving from pilots to change at scale. In related research, Bain points to a lack of senior leadership backing as one reason many companies fail to scale AI. In a sector short on specialized talent, clarity about the future of each role directly affects the ability to attract and retain those who will take on the new work.",
        "Companies advancing with AI do not only change systems: they explain to their teams where their work is headed. The pending step, even for them, is turning that narrative into decisions."
      ]
    },
    cita: {
      "original": "AI scalers aren't waiting for new talent—they're building it.",
      "traduccion_es": "Las empresas que escalan la IA no esperan nuevo talento: lo están construyendo.",
      "autor_es": "Bain & Company",
      "autor_en": "Bain & Company"
    },
    preguntas_es: [
      "¿Qué saben hoy los equipos sobre cómo la IA cambiará sus roles en los próximos años?",
      "¿Qué decisiones concretas de talento se han derivado de la visión de IA de la organización?",
      "¿Cómo se reparten la dirección, Recursos Humanos y Tecnología la responsabilidad de comunicar ese rumbo?"
    ],
    preguntas_en: [
      "What do teams know today about how AI will change their roles in the coming years?",
      "Which concrete talent decisions have followed from the organization's AI vision?",
      "How do leadership, Human Resources and Technology share responsibility for communicating that direction?"
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
    hallazgo_es: "82% de las empresas de consumo no ha rediseñado sus puestos de trabajo en torno a la IA",
    hallazgo_en: "82% of consumer companies have not redesigned their jobs around AI",
    dato_clave_es: "82% de las empresas de consumo no ha rediseñado sus puestos en torno a la IA, aunque el acceso a herramientas aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores en un año; solo 25% de quienes tienen acceso la usa en más del 60% de su trabajo diario. Para las organizaciones, significa que la inversión en herramientas no rendirá todo su valor mientras el trabajo siga organizado como antes.",
    dato_clave_en: "82% of consumer companies have not redesigned jobs around AI, even though access to approved tools rose from under 30% to around 60% of employees in a year; only 25% of those with access use it in more than 60% of their daily work. For organizations, it means that the investment in tools will not deliver its full value while work remains organized as before.",
    contexto_es: "Edición para la industria de consumo del informe State of AI in the Enterprise del Deloitte AI Institute. Se basa en 963 líderes de negocio y de tecnología de empresas de consumo, dentro de una encuesta a 3,235 ejecutivos en 24 países. Trabajo de campo: agosto y septiembre de 2025. Publicación: marzo de 2026.",
    contexto_en: "Consumer-industry edition of the Deloitte AI Institute's State of AI in the Enterprise report. It is based on 963 business and IT leaders at consumer companies, within a survey of 3,235 executives in 24 countries. Fieldwork: August and September 2025. Published: March 2026.",
    puntos_es: [
      "**El acceso a la IA se duplicó en un año.** Las herramientas de IA aprobadas pasaron de llegar a menos de 30% a cerca de 60% de los colaboradores.",
      "**El uso intensivo sigue siendo minoritario.** Solo 25% de quienes tienen acceso utiliza la IA en más del 60% de su trabajo diario.",
      "**Se forma a las personas, pero no se rediseña el trabajo.** 82% no ha rediseñado los puestos en torno a la IA, y 54% concentra su esfuerzo en capacitar a sus colaboradores.",
      "**La resistencia es minoritaria.** Entre los colaboradores no técnicos, 69% está entusiasmado (13%) o abierto a explorar la IA (56%), mientras que 24% la usa solo si se le exige (19%) o la evita (5%).",
      "**La adopción de agentes avanza más rápido que su gobierno.** 73% planea usar agentes de IA en dos años, pero solo 20% cuenta con un modelo maduro para gobernarlos."
    ],
    puntos_en: [
      "**Access to AI doubled in a year.** Approved AI tools went from reaching under 30% to around 60% of employees.",
      "**Intensive use remains a minority.** Only 25% of those with access use AI in more than 60% of their daily work.",
      "**People are trained, but work is not redesigned.** 82% have not redesigned jobs around AI, and 54% focus their efforts on training employees.",
      "**Resistance is a minority.** Among non-technical employees, 69% are enthusiastic (13%) or open to exploring AI (56%), while 24% use it only if required (19%) or avoid it (5%).",
      "**Agent adoption is moving faster than governance.** 73% plan to use AI agents within two years, but only 20% have a mature model to govern them."
    ],
    articulo_es: {
      "bajada": "Las empresas de consumo ampliaron con rapidez el acceso de sus colaboradores a la IA, pero casi ninguna cambió la forma en que se organiza el trabajo.",
      "parrafos": [
        "Las empresas de consumo entregan herramientas de IA sin rediseñar el trabajo que las rodea. La edición para la industria de consumo del informe State of AI in the Enterprise de Deloitte, basada en 963 líderes de negocio y de tecnología, muestra que 82% no ha rediseñado sus puestos en torno a la IA. La acción más frecuente, adoptada por 54%, es capacitar a los colaboradores. Esa respuesta es necesaria, pero no modifica por sí sola cómo se organiza el trabajo diario.",
        "El acceso creció mucho más que el uso. En un año, las herramientas de IA aprobadas pasaron de llegar a menos de 30% a cerca de 60% de los colaboradores. Sin embargo, solo 25% de quienes tienen acceso utiliza la IA en más del 60% de su trabajo diario. En conjunto, estas cifras muestran que el acceso se duplicó mientras el uso intensivo sigue siendo minoritario.",
        "La brecha no responde a un rechazo generalizado de las personas. Entre los colaboradores no técnicos, 69% está entusiasmado o abierto a explorar la IA, mientras que 24% la usa solo si se le exige o la evita. El informe señala además que, aunque la dirección identifica la falta de habilidades como la principal barrera, menos de la mitad de las empresas hace ajustes importantes en su estrategia de talento. La distancia entre acceso y uso refleja, sobre todo, puestos que no han cambiado.",
        "Para el negocio, el impacto alcanza la estructura de puestos y las trayectorias profesionales. 82% espera que al menos 10% de sus puestos se automatice por completo en tres años, comenzando por tareas de entrada como el registro de datos o la atención básica al cliente. Los líderes entrevistados se preguntan dónde comenzarán entonces las carreras que antes empezaban en esos puestos. Para quienes permanecen, el trabajo ya cambia: un responsable de categoría recibe ahora recomendaciones de precio y surtido de la IA y debe decidir cuándo confiar en ellas.",
        "La industria avanzó con rapidez en la entrega de herramientas y con lentitud en la transformación del trabajo. Lo que falta ahora es definir qué función cumple cada persona con la tecnología que ya tiene."
      ]
    },
    articulo_en: {
      "bajada": "Consumer companies quickly expanded employee access to AI, but almost none changed the way work is organized.",
      "parrafos": [
        "Consumer companies are providing AI tools without redesigning the work around them. The consumer-industry edition of Deloitte's State of AI in the Enterprise report, based on 963 business and technology leaders, shows that 82% have not redesigned jobs around AI. The most common action, taken by 54%, is training employees. That response is necessary, but it does not by itself change how daily work is organized.",
        "Access has grown far more than use. In one year, approved AI tools went from reaching under 30% to around 60% of employees. However, only 25% of those with access use AI in more than 60% of their daily work. Together, these figures show that access doubled while intensive use remains a minority.",
        "The gap does not stem from widespread rejection by employees. Among non-technical employees, 69% are enthusiastic or open to exploring AI, while 24% use it only if required or avoid it. The report also notes that, although leadership identifies the lack of skills as the main barrier, fewer than half of companies are making significant changes to their talent strategy. The distance between access and use mainly reflects jobs that have not changed.",
        "For the business, the impact extends to job structures and career paths. 82% expect at least 10% of their jobs to be fully automated within three years, starting with entry-level tasks such as data entry or basic customer support. The leaders interviewed ask where careers that used to start in those roles will begin. For those who remain, work is already changing: a category manager now receives AI pricing and assortment recommendations and must decide when to trust them.",
        "The industry moved quickly to provide tools and slowly to transform work. What is needed now is to define the role each person plays with the technology already in place."
      ]
    },
    cita: {
      "original": "We thought we were going to automate jobs. The truth is, you're not.",
      "traduccion_es": "Creíamos que íbamos a automatizar puestos de trabajo. La verdad es que no.",
      "autor_es": "Exvicepresidente de una organización global, entrevistado por Deloitte",
      "autor_en": "Former vice president at a major global organization, interviewed by Deloitte"
    },
    preguntas_es: [
      "¿Qué puestos de la organización deberían rediseñarse primero para que el acceso a la IA se traduzca en valor?",
      "¿Dónde comenzarán las trayectorias profesionales si se automatizan las tareas de entrada?",
      "¿Qué acompañamiento reciben los colaboradores que hoy usan la IA solo porque se les exige?"
    ],
    preguntas_en: [
      "Which roles in the organization should be redesigned first so that access to AI translates into value?",
      "Where will career paths begin if entry-level tasks are automated?",
      "What support do employees who use AI only because it is required receive today?"
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
    hallazgo_es: "70% de los líderes de cambio afirma que su última transformación no generó el valor esperado",
    hallazgo_en: "70% of change leaders say their latest transformation did not deliver the expected value",
    dato_clave_es: "70% de los líderes de cambio afirma que su transformación más reciente no generó el valor de negocio previsto, mientras que cada US$1 invertido en gestión del cambio se asocia con una mediana de US$4 de valor realizado. Para las organizaciones, significa que la gestión del cambio es una palanca de retorno y no un costo accesorio del proyecto.",
    dato_clave_en: "70% of change leaders say their most recent transformation fell short of its intended business value, while every US$1 invested in change management is associated with a median of US$4 in realized value. For organizations, it means that change management is a lever for returns, not an add-on project cost.",
    contexto_es: "Estudio de Gestión del Cambio 2026 de Deloitte, desarrollado con Workplace Intelligence y aplicado por Walr a 1,000 líderes de gestión del cambio en roles ejecutivos (51% de alta dirección, 37% directores o vicepresidentes y 12% otros ejecutivos) de Estados Unidos, Reino Unido, Australia y Canadá. Todos lideraron en los últimos dos años al menos una iniciativa de gran escala, con un presupuesto de US$1 millón o más o con alcance sobre varios equipos, funciones o unidades; la mediana del presupuesto de la iniciativa más reciente fue de US$10.6 millones. Trabajo de campo: junio y julio de 2026. Publicación: octubre de 2026.",
    contexto_en: "Deloitte's 2026 Change Management Study, developed with Workplace Intelligence and fielded by Walr among 1,000 change management leaders in executive roles (51% C-suite, 37% directors or vice presidents and 12% other executives) in the United States, United Kingdom, Australia and Canada. All had led at least one large-scale initiative in the past two years, with a budget of US$1 million or more or spanning multiple teams, functions or units; the median budget of the most recent initiative was US$10.6 million. Fieldwork: June and July 2026. Published: October 2026.",
    puntos_es: [
      "**La mayoría de las transformaciones no cumple su promesa de valor.** 70% afirma que su transformación más reciente no generó el valor previsto, y 55% tuvo que reiniciarla o corregir su rumbo de manera significativa.",
      "**La gestión del cambio tiene un retorno medible.** La mediana del retorno es de 4:1, y las empresas que más invierten tienen 1.7 veces más probabilidades de reportar una adopción superior a lo esperado.",
      "**Aun así, se presupuesta como un gasto y no como una capacidad.** 60% indica que su empresa trata la gestión del cambio como un costo de proyecto y no como una capacidad permanente del negocio.",
      "**Acumular iniciativas multiplica el desgaste.** 73% reporta fatiga de cambio, es decir, desgaste por la sucesión de cambios, y con cuatro o más iniciativas simultáneas la probabilidad de fatiga alta se multiplica por 6.4.",
      "**La IA acelera más rápido de lo que los equipos pueden asimilar.** 61% percibe que la transformación con IA supera la capacidad de sus colaboradores, y 43% desconoce cómo los está afectando.",
      "**El ejemplo de la dirección duplica las probabilidades de éxito.** Cuando la dirección practica el cambio que pide, la probabilidad de reportar un retorno claramente positivo y una adopción superior a lo esperado es al menos el doble."
    ],
    puntos_en: [
      "**Most transformations fail to deliver their promised value.** 70% say their most recent transformation fell short of its intended value, and 55% had to restart it or significantly correct its course.",
      "**Change management delivers a measurable return.** The median return is 4:1, and the companies that invest most are 1.7 times more likely to report adoption above expectations.",
      "**Yet it is budgeted as an expense, not a capability.** 60% say their company treats change management as a project cost rather than a permanent business capability.",
      "**Stacking initiatives multiplies strain.** 73% report change fatigue, meaning strain from successive changes, and with four or more concurrent initiatives the likelihood of high fatigue rises 6.4 times.",
      "**AI is accelerating faster than teams can absorb.** 61% feel AI transformation exceeds employees' capacity, and 43% do not know how it is affecting them.",
      "**Leading by example doubles the odds of success.** When leadership practices the change it asks for, organizations are at least twice as likely to report clearly positive ROI and adoption above expectations."
    ],
    articulo_es: {
      "bajada": "Deloitte asocia una buena gestión del cambio con mayor valor de negocio, pero la mayoría de las empresas la sigue tratando como un gasto mientras acumula transformaciones simultáneas.",
      "parrafos": [
        "La mayoría de las grandes transformaciones no cumple su promesa de valor. El Estudio de Gestión del Cambio 2026 de Deloitte, basado en 1,000 ejecutivos que lideran cambios de gran escala en Estados Unidos, Reino Unido, Australia y Canadá, muestra que 70% considera que su iniciativa más reciente no generó el valor de negocio esperado. Además, 55% tuvo que reiniciarla o corregir su rumbo de manera significativa. Con presupuestos de esa escala, el resultado representa un costo relevante para el negocio.",
        "La gestión del cambio aparece a la vez como causa del problema y como palanca de retorno. 83% de los líderes considera que una gestión deficiente contribuyó a que su última iniciativa no alcanzara sus metas. En contraste, cada US$1 invertido en gestión del cambio se asocia con una mediana de US$4 de valor realizado, y las empresas que más invierten tienen 1.7 veces más probabilidades de reportar una adopción superior a lo esperado. Aunque se trata de asociaciones, las tres cifras apuntan en la misma dirección.",
        "Esa evidencia no se refleja en la forma en que se presupuesta el cambio. 60% indica que su empresa sigue tratando la gestión del cambio como un costo de proyecto y no como una capacidad permanente. Al mismo tiempo, 73% reporta fatiga de cambio, es decir, desgaste por la sucesión de cambios, y con cuatro o más iniciativas en paralelo la probabilidad de fatiga alta se multiplica por 6.4. El desafío ya no es solo cuánto se invierte en cada cambio, sino cuántos cambios recaen a la vez sobre los mismos equipos.",
        "Para el negocio, la IA intensifica esa presión. 61% percibe que la transformación con IA avanza más rápido de lo que sus colaboradores pueden asimilar, y 43% desconoce cómo los está afectando. Además, más de la mitad señala que nadie tiene autoridad para pausar una iniciativa por falta de capacidad. El riesgo es una organización que acelera sin medir el desgaste que genera ni contar con un mecanismo para regularlo.",
        "El estudio destaca también el peso del ejemplo: cuando la dirección practica el cambio que solicita, la probabilidad de un retorno claramente positivo es al menos el doble. Para Deloitte, el cambio ya no es un proyecto con fecha de cierre, sino una condición permanente del negocio que exige una capacidad permanente."
      ]
    },
    articulo_en: {
      "bajada": "Deloitte links strong change management to greater business value, yet most companies still treat it as an expense while accumulating simultaneous transformations.",
      "parrafos": [
        "Most large transformations do not deliver their promised value. Deloitte's 2026 Change Management Study, based on 1,000 executives leading large-scale change in the United States, United Kingdom, Australia and Canada, shows that 70% believe their most recent initiative fell short of its intended business value. In addition, 55% had to restart it or significantly correct its course. With budgets of that scale, the result represents a significant cost to the business.",
        "Change management emerges as both a cause of the problem and a lever for returns. 83% of leaders believe poor change management contributed to their latest initiative falling short. By contrast, every US$1 invested in change management is associated with a median of US$4 in realized value, and the companies that invest most are 1.7 times more likely to report adoption above expectations. Although these are associations, the three figures point in the same direction.",
        "That evidence is not reflected in how change is budgeted. 60% say their company still treats change management as a project cost rather than a permanent capability. At the same time, 73% report change fatigue, meaning strain from successive changes, and with four or more initiatives running in parallel the likelihood of high fatigue rises 6.4 times. The challenge is no longer only how much is invested in each change, but how many changes fall on the same teams at once.",
        "For the business, AI intensifies that pressure. 61% feel AI transformation is moving faster than employees can absorb, and 43% do not know how it is affecting them. In addition, more than half say no one has the authority to pause an initiative for lack of capacity. The risk is an organization that accelerates without measuring the strain it creates or having a mechanism to regulate it.",
        "The study also highlights the weight of example: when leadership practices the change it asks for, the likelihood of clearly positive ROI is at least double. For Deloitte, change is no longer a project with an end date but a permanent condition of the business that requires a permanent capability."
      ]
    },
    cita: {
      "original": "treating change management as a durable, always-on capability, not a one-off project cost",
      "traduccion_es": "tratar la gestión del cambio como una capacidad duradera y siempre activa, no como un costo puntual de proyecto",
      "autor_es": "Deloitte, 2026 Change Management Study",
      "autor_en": "Deloitte, 2026 Change Management Study"
    },
    preguntas_es: [
      "¿Cómo cambiaría el retorno de las transformaciones si la gestión del cambio se presupuestara como una capacidad permanente?",
      "¿Quién tiene hoy la autoridad y la información para pausar o secuenciar iniciativas que recaen sobre los mismos equipos?",
      "¿Qué señales concretas reciben los equipos de que la dirección practica el cambio que solicita?"
    ],
    preguntas_en: [
      "How would the return on transformations change if change management were budgeted as a permanent capability?",
      "Who currently has the authority and the information to pause or sequence initiatives that fall on the same teams?",
      "What concrete signals do teams receive that leadership practices the change it asks for?"
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
    hallazgo_es: "30% de los colaboradores atraviesa entre 3 y 5 cambios al mismo tiempo",
    hallazgo_en: "30% of employees are going through 3 to 5 changes at the same time",
    dato_clave_es: "85% de los colaboradores atraviesa al menos un cambio en su trabajo y 30% enfrenta entre 3 y 5 de manera simultánea, pero solo 18% considera que su organización sostiene \"extremadamente bien\" los resultados de esos cambios. Para las organizaciones, significa que el valor de las transformaciones se pierde menos en el lanzamiento que en la etapa de consolidación.",
    dato_clave_en: "85% of employees are going through at least one change at work and 30% face 3 to 5 simultaneously, but only 18% say their organization sustains the results of those changes \"extremely well\". For organizations, it means that the value of transformations is lost less at launch than in the consolidation stage.",
    contexto_es: "The Change Report 2026 de Sia. Encuesta a 1,450 colaboradores y líderes: 30% colaboradores individuales, 23% jefes de equipo, 25% líderes sénior y 22% altos ejecutivos. Por región: 30% de Norteamérica, 30% de Asia-Pacífico, 26% de Europa, 8% de Reino Unido e Irlanda y 6% de Emiratos Árabes Unidos. Trabajo de campo: inicios de 2026. Publicación: octubre de 2026.",
    contexto_en: "Sia's The Change Report 2026. Survey of 1,450 employees and leaders: 30% individual contributors, 23% people managers, 25% senior leaders and 22% senior executives. By region: 30% North America, 30% Asia-Pacific, 26% Europe, 8% UK and Ireland and 6% UAE. Fieldwork: early 2026. Published: October 2026.",
    puntos_es: [
      "**El cambio dejó de ser un evento y se volvió permanente.** 85% de los colaboradores atraviesa al menos un cambio en su trabajo y 30% enfrenta entre 3 y 5 de forma simultánea.",
      "**La IA es uno de los frentes de cambio que más crece.** 23% ya vive una transformación importante vinculada a IA, datos o analítica.",
      "**El problema es de foco, no de esfuerzo.** 41% afirma que su organización intenta \"hacer todo a la vez\" y 22% señala que hay iniciativas pausadas o retrasadas.",
      "**Sin prioridades claras, los equipos deciden solos.** 21% indica que los equipos deben resolver por su cuenta qué priorizar cuando las demandas entran en conflicto.",
      "**Lanzar es más fácil que sostener.** Solo 18% considera que su organización gestiona \"extremadamente bien\" los resultados y su sostenibilidad, y 35% opina que lo hace de forma apenas adecuada.",
      "**La disposición al cambio está dividida casi en partes iguales.** 48% se define como entusiasta (33%) o impulsor (15%), frente a 52% de escépticos (28%) u observadores (24%)."
    ],
    puntos_en: [
      "**Change is no longer an event but a permanent state.** 85% of employees are going through at least one change at work, and 30% are facing 3 to 5 simultaneously.",
      "**AI is one of the fastest-growing fronts of change.** 23% are already experiencing a major transformation related to AI, data or analytics.",
      "**The problem is focus, not effort.** 41% say their organization tries to \"do everything at once\", and 22% report that initiatives are paused or delayed.",
      "**Without clear priorities, teams decide on their own.** 21% say teams must work out priorities on their own when demands conflict.",
      "**Launching is easier than sustaining.** Only 18% say their organization manages outcomes and sustainability \"extremely well\", and 35% say it does so only adequately.",
      "**Readiness for change is split almost evenly.** 48% identify as enthusiasts (33%) or champions (15%), compared with 52% who are skeptics (28%) or bystanders (24%)."
    ],
    articulo_es: {
      "bajada": "Los colaboradores muestran disposición al cambio, pero enfrentan varios procesos a la vez en organizaciones que lanzan transformaciones con eficacia y las sostienen con dificultad.",
      "parrafos": [
        "El cambio dejó de ser un evento y se convirtió en una condición permanente del trabajo. The Change Report 2026 de Sia, basado en 1,450 colaboradores y líderes de cinco regiones, muestra que 85% atraviesa al menos un cambio en su trabajo y 30% enfrenta entre 3 y 5 al mismo tiempo. La consultora describe el fenómeno como una \"colisión\": reorganizaciones, nuevas tecnologías, relevos de liderazgo e IA llegan superpuestos. El desafío ya no es cada cambio por separado, sino la forma en que interactúan.",
        "Las organizaciones no fallan por falta de esfuerzo, sino por falta de foco. 41% afirma que su empresa intenta \"hacer todo a la vez\" y 22% señala que hay iniciativas pausadas o retrasadas. Además, 21% indica que los equipos deben resolver por su cuenta qué priorizar cuando las demandas entran en conflicto. En ese contexto, los mandos medios deben convertir las decisiones de la dirección en tareas concretas, aun cuando ellos mismos no tienen claro el rumbo.",
        "La disposición de las personas no es el principal obstáculo. 48% de los encuestados se define como entusiasta o impulsor del cambio, frente a 52% que se declara escéptico u observador. Para Sia, la fuerza laboral puede estar más preparada que las organizaciones que conducen el cambio. La limitación principal está, por tanto, en la forma en que se ordena y se secuencia la transformación.",
        "Para el negocio, el punto crítico es lograr que el cambio perdure. Solo 18% considera que su organización gestiona \"extremadamente bien\" los resultados y su sostenibilidad, y 35% opina que lo hace de forma apenas adecuada. Los sistemas se implementan con rapidez, pero el refuerzo, la capacitación, el retiro de procesos antiguos y la formación de hábitos quedan rezagados. A ello se suma la IA: 23% ya vive una transformación importante vinculada a IA, datos o analítica.",
        "Las demandas de los colaboradores son concretas: prioridades más claras, mayor apoyo de sus jefaturas, capacitación práctica y reglas transparentes frente a la IA. El cuello de botella no está en iniciar cambios, sino en consolidarlos."
      ]
    },
    articulo_en: {
      "bajada": "Employees are willing to change, but they face several processes at once in organizations that launch transformations effectively and struggle to sustain them.",
      "parrafos": [
        "Change is no longer an event but a permanent condition of work. Sia's The Change Report 2026, based on 1,450 employees and leaders across five regions, shows that 85% are going through at least one change at work and 30% are facing 3 to 5 at the same time. The firm describes this as a \"collision\": reorganizations, new technologies, leadership transitions and AI arrive on top of one another. The challenge is no longer each change on its own but how they interact.",
        "Organizations fail not for lack of effort but for lack of focus. 41% say their company tries to \"do everything at once\", and 22% report that initiatives are paused or delayed. In addition, 21% say teams must work out priorities on their own when demands conflict. In that context, middle managers must turn leadership decisions into concrete tasks, even when they themselves lack clarity on the direction.",
        "People's willingness is not the main obstacle. 48% of respondents identify as enthusiasts or champions of change, compared with 52% who describe themselves as skeptics or bystanders. For Sia, the workforce may be better prepared than the organizations leading the change. The main constraint therefore lies in how the transformation is ordered and sequenced.",
        "For the business, the critical point is making change last. Only 18% say their organization manages outcomes and sustainability \"extremely well\", and 35% say it does so only adequately. Systems are implemented quickly, but reinforcement, training, retiring legacy processes and building habits fall behind. AI adds to this: 23% are already experiencing a major transformation related to AI, data or analytics.",
        "Employees' requests are concrete: clearer priorities, more support from their managers, practical training and transparent rules on AI. The bottleneck lies not in starting change but in consolidating it."
      ]
    },
    cita: {
      "original": "Launching transformation is easier than sustaining it.",
      "traduccion_es": "Lanzar una transformación es más fácil que sostenerla.",
      "autor_es": "Sia, The Change Report 2026",
      "autor_en": "Sia, The Change Report 2026"
    },
    preguntas_es: [
      "¿Qué instancia tiene hoy una visión completa de todos los cambios que enfrenta un mismo equipo de forma simultánea?",
      "¿Quién responde por los resultados de una iniciativa después de su lanzamiento y con qué indicadores?",
      "¿Con qué criterio se decide qué iniciativas se priorizan, se secuencian o se detienen?"
    ],
    preguntas_en: [
      "Which body currently has a complete view of all the changes a single team is facing simultaneously?",
      "Who is accountable for an initiative's results after launch, and with which indicators?",
      "What criteria determine which initiatives are prioritized, sequenced or stopped?"
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
    hallazgo_es: "Cuando una transformación se vive mal, la confianza en el CEO cae de 82% a 49%",
    hallazgo_en: "When a transformation goes badly, trust in the CEO falls from 82% to 49%",
    dato_clave_es: "76% de los colaboradores vivió al menos una transformación importante en el último año, y tras una experiencia negativa la confianza en el CEO cae 33 puntos, de 82% a 49%, y en el jefe directo, 25 puntos, de 85% a 60%. Para las organizaciones, significa que la forma de ejecutar y comunicar cada cambio define la credibilidad de toda la línea de mando.",
    dato_clave_en: "76% of employees went through at least one major transformation in the past year, and after a negative experience trust in the CEO falls 33 points, from 82% to 49%, and in the direct manager 25 points, from 85% to 60%. For organizations, it means that the way each change is carried out and communicated determines the credibility of the entire chain of command.",
    contexto_es: "2026 Edelman Trust Barometer Special Report: Trust at Work, quinta edición del reporte. Encuesta en línea del Edelman Trust Institute a 10,018 colaboradores, unos 1,000 por país, en 10 mercados: Brasil, Canadá, China, Alemania, India, Japón, Sudáfrica, Emiratos Árabes Unidos, Reino Unido y EE.UU. Trabajo de campo: del 14 al 31 de agosto de 2026. Publicación: octubre de 2026.",
    contexto_en: "2026 Edelman Trust Barometer Special Report: Trust at Work, the fifth edition of the report. Online survey by the Edelman Trust Institute of 10,018 employees, about 1,000 per country, in 10 markets: Brazil, Canada, China, Germany, India, Japan, South Africa, the UAE, the UK and the US. Fieldwork: August 14–31, 2026. Published: October 2026.",
    puntos_es: [
      "**La transformación ya es parte del trabajo cotidiano.** 76% de los colaboradores vivió al menos una transformación importante en los últimos 12 meses, y 42% vivió tres o más.",
      "**La IA lidera la agenda de cambio.** Su integración fue la transformación más frecuente (53%), seguida por los cambios de estrategia (47%) y de cultura (45%).",
      "**Una mala experiencia de cambio destruye confianza en toda la línea de mando.** Tras una transformación negativa, la confianza en el CEO cae de 82% a 49% y en el jefe directo, de 85% a 60%.",
      "**Los colaboradores valoran la transparencia más que las certezas.** 57% prefiere que el CEO comparta lo que sabe y lo que aún no sabe con certeza, y 64% que reconozca lo que sienten los equipos.",
      "**La inseguridad laboral va en aumento.** 77% teme perder su empleo, 4 puntos más que en agosto de 2024.",
      "**La confianza en el empleador se erosiona.** Se ubica en 74%, 5 puntos menos que en agosto de 2024, según el promedio de 7 mercados."
    ],
    puntos_en: [
      "**Transformation is now part of everyday work.** 76% of employees went through at least one major transformation in the past 12 months, and 42% went through three or more.",
      "**AI leads the change agenda.** AI integration was the most common transformation (53%), followed by strategy shifts (47%) and culture shifts (45%).",
      "**A bad change experience destroys trust across the chain of command.** After a negative transformation, trust in the CEO falls from 82% to 49% and in the direct manager from 85% to 60%.",
      "**Employees value transparency more than certainty.** 57% prefer that the CEO share what they know and what they do not yet know for certain, and 64% that the CEO acknowledge what teams are feeling.",
      "**Job insecurity is rising.** 77% worry about losing their job, up 4 points since August 2024.",
      "**Trust in the employer is eroding.** It stands at 74%, down 5 points since August 2024, based on a 7-market average."
    ],
    articulo_es: {
      "bajada": "El cambio ya forma parte habitual del trabajo, y la forma en que se ejecuta determina cuánta confianza conservan el CEO y los jefes directos.",
      "parrafos": [
        "La transformación ya es rutina, y su ejecución define la confianza en quienes la conducen. El 2026 Edelman Trust Barometer Special Report: Trust at Work, basado en 10,018 colaboradores de 10 países, muestra que 76% vivió al menos una transformación importante en el último año. El volumen de cambio no es el factor decisivo: lo determinante es cómo lo viven los equipos.",
        "Una mala experiencia de cambio erosiona la credibilidad de toda la línea de mando. Cerca de un tercio de los encuestados describe su transformación como no positiva. En ese grupo, la confianza en el CEO baja de 82% a 49%, y en el jefe directo, de 85% a 60%. Según Edelman, la carga de trabajo es el factor que más incide en ese resultado.",
        "Los colaboradores no piden certezas, sino transparencia. 57% prefiere que el CEO comparta lo que sabe y también lo que aún no sabe con certeza, y 64% espera que reconozca lo que sienten los equipos. Además, el jefe directo supera al CEO como la voz más confiable para explicar por qué ocurre un cambio en los cinco tipos de transformación evaluados. Explicar el cambio es, por tanto, una responsabilidad compartida entre la alta dirección y las jefaturas.",
        "Para el negocio, el desafío crece porque buena parte del cambio proviene de la IA. Su integración fue la transformación más frecuente (53%), y tras una experiencia negativa la disposición a adoptar un mayor uso de IA cae de 40% a 18%. Todo ello ocurre cuando 77% de los colaboradores teme perder su empleo, una proporción mayor que en agosto de 2024. Una transformación mal ejecutada hoy encarece la siguiente adopción tecnológica.",
        "Edelman concluye que la confianza no se pierde por el cambio en sí, sino por la forma en que se ejecuta y se comunica. Para la firma, la transformación debe gestionarse a escala humana, con el CEO y las jefaturas directas como responsables compartidos."
      ]
    },
    articulo_en: {
      "bajada": "Change is now a routine part of work, and the way it is carried out determines how much trust the CEO and direct managers retain.",
      "parrafos": [
        "Transformation is now routine, and how it is carried out determines trust in those leading it. The 2026 Edelman Trust Barometer Special Report: Trust at Work, based on 10,018 employees in 10 countries, shows that 76% went through at least one major transformation in the past year. The volume of change is not the decisive factor: what matters is how teams experience it.",
        "A bad change experience erodes credibility across the entire chain of command. About a third of respondents describe their transformation as not positive. In that group, trust in the CEO falls from 82% to 49%, and in the direct manager from 85% to 60%. According to Edelman, workload is the factor that most influences that result.",
        "Employees are not asking for certainty but for transparency. 57% prefer that the CEO share what they know and also what they do not yet know for certain, and 64% expect the CEO to acknowledge what teams are feeling. In addition, the direct manager ranks above the CEO as the most trusted voice to explain why a change is happening across all five types of transformation assessed. Explaining change is therefore a responsibility shared between senior leadership and managers.",
        "For the business, the challenge grows because much of the change comes from AI. AI integration was the most common transformation (53%), and after a negative experience, willingness to embrace greater AI use falls from 40% to 18%. All of this occurs while 77% of employees worry about losing their job, a higher share than in August 2024. A poorly executed transformation today makes the next technology adoption more costly.",
        "Edelman concludes that trust is lost not because of change itself but because of how it is carried out and communicated. For the firm, transformation must be managed at a human scale, with the CEO and direct managers sharing responsibility."
      ]
    },
    cita: {
      "original": "Employees are not opposed to change, but how they experience it matters.",
      "traduccion_es": "Los colaboradores no se oponen al cambio, pero importa cómo lo viven.",
      "autor_es": "Edelman, reporte Trust at Work 2026",
      "autor_en": "Edelman, 2026 Trust at Work report"
    },
    preguntas_es: [
      "¿Cómo se mide hoy la carga de trabajo que una transformación añade a los equipos antes de lanzarla?",
      "¿Qué espacio tiene la dirección para comunicar con transparencia lo que todavía no sabe sobre un cambio?",
      "¿Qué información y respaldo reciben los jefes directos para explicar las transformaciones a sus equipos?"
    ],
    preguntas_en: [
      "How is the workload a transformation adds to teams measured today before it is launched?",
      "How much room does leadership have to communicate transparently what it does not yet know about a change?",
      "What information and support do direct managers receive to explain transformations to their teams?"
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
    hallazgo_es: "61% de las organizaciones no tiene un método formal para comunicar el cambio",
    hallazgo_en: "61% of organizations have no formal method for communicating change",
    dato_clave_es: "61% de las organizaciones comunica el cambio sin un enfoque formal, el principal riesgo que identifican los propios profesionales de comunicación interna y recursos humanos, y aunque 87% considera la capacidad de los mandos medios un riesgo, solo 21% les entrega herramientas de apoyo de forma activa. Para las organizaciones, significa que las transformaciones se comunican sin método y a través de un canal, los mandos medios, que no recibe el respaldo necesario.",
    dato_clave_en: "61% of organizations communicate change without a formal approach, the top risk identified by internal communication and HR professionals themselves, and although 87% see managers' capability as a risk, only 21% actively provide them with support tools. For organizations, it means that transformations are communicated without a method and through a channel, middle managers, that lacks the support it needs.",
    contexto_es: "Employee Communications Report 2026 de Gallagher, de la serie State of the Sector. Encuesta a más de 1,300 profesionales de comunicación interna y recursos humanos de 40 países: 51% de Norteamérica, 36% de Reino Unido y Europa, 9% de Australia y Nueva Zelanda, 2% de Latinoamérica y 2% de Asia, África y Medio Oriente. Trabajo de campo: mesas redondas y grupos focales en septiembre y octubre de 2025, y encuesta en noviembre de 2025. Publicación: marzo de 2026.",
    contexto_en: "Gallagher's Employee Communications Report 2026, part of the State of the Sector series. Survey of more than 1,300 internal communication and HR professionals in 40 countries: 51% North America, 36% UK and Europe, 9% Australia and New Zealand, 2% Latin America and 2% Asia, Africa and the Middle East. Fieldwork: roundtables and focus groups in September and October 2025, and a survey in November 2025. Published: March 2026.",
    puntos_es: [
      "**Se comunica el cambio sin método.** 61% de las organizaciones no tiene un enfoque formal para comunicar el cambio, el principal riesgo que identifica el informe.",
      "**Los mandos medios son el eslabón más débil y el menos equipado.** 87% considera su capacidad un riesgo moderado o significativo, y solo 21% utiliza de forma activa kits de apoyo para ellos.",
      "**La función aspira a un rol estratégico que aún no ejerce.** 73% de los profesionales quiere que su área funcione como una consultoría estratégica, pero solo 18% afirma que esa es su situación actual.",
      "**La IA avanza más rápido que las capacidades de la función.** Solo 36% considera que cuenta con las habilidades para usar bien la IA, y 75% está en etapas reactivas o improvisadas de madurez en IA.",
      "**El exceso de mensajes también es un riesgo.** 81% considera el agotamiento de los colaboradores un riesgo moderado o significativo, y 83% señala que la sobrecarga de información es un problema creciente."
    ],
    puntos_en: [
      "**Change is communicated without a method.** 61% of organizations have no formal approach to communicating change, the main risk the report identifies.",
      "**Managers are the weakest and least equipped link.** 87% see their capability as a moderate or significant risk, and only 21% actively use support toolkits for them.",
      "**The function aspires to a strategic role it does not yet play.** 73% of professionals want their function to operate as a strategic consultancy, but only 18% say that is their current situation.",
      "**AI is moving faster than the function's capabilities.** Only 36% feel they have the skills to use AI well, and 75% are at reactive or ad hoc stages of AI maturity.",
      "**Too many messages is also a risk.** 81% see employee burnout as a moderate or significant risk, and 83% say information overload is a growing problem."
    ],
    articulo_es: {
      "bajada": "Comunicar el cambio es la principal prioridad de los equipos de comunicación interna, pero la mayoría lo hace sin un método formal y con mandos medios que carecen de herramientas.",
      "parrafos": [
        "La función de comunicación interna enfrenta una contradicción central. El Employee Communications Report de Gallagher, basado en más de 1,300 profesionales de comunicación interna y recursos humanos de 40 países, muestra que la gestión del cambio es la habilidad que más desean desarrollar, pero 61% no tiene un enfoque formal para comunicarlo. El propio informe identifica esa carencia como el principal riesgo de la función, en el momento en que una organización más necesita explicar sus decisiones.",
        "El eslabón más débil son los mandos medios, que el informe describe como el canal que falta. 87% de los encuestados considera su capacidad un riesgo moderado o significativo, pero solo 21% utiliza de forma activa kits de apoyo para ellos, y 37% no cuenta con ninguno. Además, muchas organizaciones los tratan como un canal uniforme, pese a sus diferencias de experiencia, confianza y carga de trabajo. El problema está identificado, pero recibe muy pocas herramientas.",
        "El riesgo no proviene solo de la falta de método, sino también del exceso de mensajes. 83% señala que la sobrecarga de información va en aumento. Según Gallagher, pasar de un volumen medio a uno alto de cambios eleva en 30% el riesgo de perder confianza en la dirección y en 24% el de agotamiento. Comunicar mejor exige, por tanto, comunicar con menos saturación.",
        "Para el negocio, está en juego el papel estratégico de la función. 73% de los profesionales quiere operar como una consultoría estratégica, pero solo 18% afirma lograrlo, y el modelo más común sigue siendo la difusión centralizada de mensajes. En IA se repite la brecha: solo 36% considera que cuenta con las habilidades para usarla bien. Los equipos con gobierno, políticas y formación claros avanzan más rápido, lo que demuestra que la distancia puede reducirse.",
        "La muestra está formada por profesionales de la propia función, y más de la mitad trabaja en Norteamérica. Se trata de una autoevaluación, y lo que reconoce es que la comunicación interna aún no cuenta con el método que el cambio exige."
      ]
    },
    articulo_en: {
      "bajada": "Communicating change is the top priority for internal communication teams, but most do so without a formal method and with managers who lack the tools.",
      "parrafos": [
        "The internal communication function faces a central contradiction. Gallagher's Employee Communications Report, based on more than 1,300 internal communication and HR professionals in 40 countries, shows that change management is the skill they most want to develop, yet 61% have no formal approach to communicating change. The report itself identifies that gap as the function's main risk, at the very moment an organization most needs to explain its decisions.",
        "The weakest link is middle managers, whom the report describes as the missing channel. 87% of respondents see their capability as a moderate or significant risk, but only 21% actively use support toolkits for them, and 37% have none. In addition, many organizations treat managers as a uniform channel, despite differences in experience, confidence and workload. The problem is recognized but receives very few tools.",
        "The risk comes not only from a lack of method but also from an excess of messages. 83% say information overload is increasing. According to Gallagher, moving from a medium to a high volume of change raises the risk of lost trust in leadership by 30% and the risk of burnout by 24%. Communicating better therefore requires communicating with less saturation.",
        "For the business, the function's strategic role is at stake. 73% of professionals want to operate as a strategic consultancy, but only 18% say they do, and the most common model is still centralized distribution of messages. The gap repeats with AI: only 36% feel they have the skills to use it well. Teams with clear governance, policies and training move faster, which shows that the distance can be reduced.",
        "The sample consists of professionals from the function itself, and more than half work in North America. It is a self-assessment, and what it acknowledges is that internal communication does not yet have the method that change requires."
      ]
    },
    cita: {
      "original": "Change is no longer a specialty; it's the job.",
      "traduccion_es": "El cambio ya no es una especialidad; es el trabajo.",
      "autor_es": "Gallagher, Employee Communications Report 2026",
      "autor_en": "Gallagher, Employee Communications Report 2026"
    },
    preguntas_es: [
      "¿Con qué método formal se planifica y se evalúa hoy la comunicación de cada transformación?",
      "¿Qué herramientas, información y tiempo reciben los mandos medios para comunicar el cambio a sus equipos?",
      "¿Quién regula el volumen de mensajes sobre el cambio que reciben los colaboradores al mismo tiempo?"
    ],
    preguntas_en: [
      "What formal method is used today to plan and evaluate the communication of each transformation?",
      "What tools, information and time do middle managers receive to communicate change to their teams?",
      "Who regulates the volume of change messages employees receive at the same time?"
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
    hallazgo_es: "64% de los trabajadores ya usa IA, mientras su confianza en la gerencia cae 7 puntos",
    hallazgo_en: "64% of workers now use AI, while their trust in management falls 7 points",
    dato_clave_es: "64% de los trabajadores usó IA en su trabajo en el último año, 10 puntos más que el año anterior, mientras su confianza en la gerencia cayó 7 puntos y menos de la mitad confía en la alta dirección. Para las organizaciones, significa que la adopción tecnológica avanza más rápido que la confianza en quienes la conducen, y que sin esa confianza la IA difícilmente se traduce en resultados.",
    dato_clave_en: "64% of workers used AI in their jobs in the past year, up 10 points from the year before, while their trust in management fell 7 points and less than half trust top management. For organizations, it means that technology adoption is moving faster than trust in those leading it, and without that trust AI is unlikely to translate into results.",
    contexto_es: "Global Workforce Hopes and Fears Survey 2026 de PwC. Encuesta a 49,364 trabajadores de 48 países y regiones y 29 sectores, ponderada por género y edad; agrupa a los trabajadores en segmentos según la demanda de sus habilidades y el beneficio que obtienen de la IA. Trabajo de campo: mayo y junio de 2026. Publicación: septiembre de 2026.",
    contexto_en: "PwC's Global Workforce Hopes and Fears Survey 2026. Survey of 49,364 workers across 48 countries and regions and 29 sectors, weighted by gender and age; it groups workers into segments based on demand for their skills and the benefit they obtain from AI. Fieldwork: May and June 2026. Published: September 2026.",
    puntos_es: [
      "**La IA ya forma parte del trabajo de la mayoría.** 64% de los trabajadores usó IA en el trabajo en el último año, 10 puntos más que el año anterior.",
      "**El uso diario crece, pero sigue siendo minoritario.** El uso diario de IA generativa subió de 14% a 22% de la fuerza laboral.",
      "**La confianza en la dirección se mueve en sentido contrario.** La confianza en la gerencia cayó 7 puntos en un año, y menos de la mitad de los trabajadores confía en la alta dirección.",
      "**Una parte de la fuerza laboral no logra procesar el cambio.** 1 de cada 5 trabajadores afirma que le resulta difícil gestionar el cambio y 18% no comprende sus razones.",
      "**El apoyo al aprendizaje se percibe menor justo cuando más se necesita.** La valoración del acceso a recursos de aprendizaje y desarrollo bajó de 59% a 51%.",
      "**La brecha es más profunda en la base operativa.** En el segmento que PwC denomina \"engine room\" (56% de la fuerza laboral), solo 33% confía en la alta dirección y 11% usa IA generativa a diario."
    ],
    puntos_en: [
      "**AI is already part of most people's work.** 64% of workers used AI at work in the past year, up 10 points year on year.",
      "**Daily use is growing but remains a minority.** Daily GenAI use rose from 14% to 22% of the workforce.",
      "**Trust in leadership is moving the other way.** Trust in management fell 7 points in a year, and less than half of workers trust top management.",
      "**Part of the workforce is struggling to process change.** 1 in 5 workers say they find change difficult to manage, and 18% do not understand the reasons for it.",
      "**Learning support is perceived as weaker just when it is most needed.** Ratings of access to learning and development resources fell from 59% to 51%.",
      "**The gap is deepest in the operational core.** In the segment PwC calls the \"engine room\" (56% of the workforce), only 33% trust top management and 11% use GenAI daily."
    ],
    articulo_es: {
      "bajada": "Cada vez más trabajadores usan IA en su trabajo diario, mientras la confianza en quienes conducen ese cambio avanza en la dirección contraria.",
      "parrafos": [
        "La adopción de la IA y la confianza en la dirección se mueven en sentidos opuestos. La encuesta Hopes and Fears 2026 de PwC, aplicada a casi 50,000 trabajadores de todo el mundo, muestra que 64% usó IA en el trabajo en el último año. En el mismo periodo, la confianza en la gerencia cayó 7 puntos. La tecnología avanza más rápido que la relación con quienes deciden cómo utilizarla.",
        "La adopción se acelera, pero sus beneficios todavía no llegan a la mayoría. El uso de IA en el trabajo subió 10 puntos en un año, y el uso diario de IA generativa pasó de 14% a 22% de la fuerza laboral. En contraste, menos de la mitad de los trabajadores confía hoy en la alta dirección, y PwC advierte que solo una minoría obtiene beneficios reales de la IA. En conjunto, estos datos describen una adopción amplia que aún no se convierte en confianza ni en resultados.",
        "La brecha es más profunda en la base que sostiene la operación. Un grupo reducido, que PwC denomina \"front-runners\", cuenta con habilidades muy demandadas, usa mucho más la IA y confía mucho más en la alta dirección. En el otro extremo está el \"engine room\", la base operativa que representa 56% de la fuerza laboral: solo 11% usa IA generativa a diario y apenas 33% confía en la alta dirección. Los beneficios de la IA y la confianza se concentran en una minoría.",
        "Para el negocio, el límite es la capacidad de los equipos para procesar e incorporar el cambio. Uno de cada cinco trabajadores afirma que le resulta difícil gestionarlo, y 18% no comprende sus razones, una dificultad que reconocen también altos ejecutivos y gerentes. Al mismo tiempo, la valoración del acceso a recursos de aprendizaje bajó de 59% a 51%. Las personas necesitan aprender más rápido justo cuando perciben menos apoyo para hacerlo.",
        "Para PwC, incorporar IA a modelos operativos heredados no es suficiente. El retorno depende de que las personas comprendan el cambio, puedan aprender y confíen en quienes lo dirigen."
      ]
    },
    articulo_en: {
      "bajada": "More and more workers use AI in their daily work, while trust in those leading that change is moving in the opposite direction.",
      "parrafos": [
        "AI adoption and trust in leadership are moving in opposite directions. PwC's Hopes and Fears 2026 survey, covering nearly 50,000 workers worldwide, shows that 64% used AI at work in the past year. Over the same period, trust in management fell 7 points. The technology is advancing faster than the relationship with those who decide how to use it.",
        "Adoption is accelerating, but its benefits have yet to reach most people. AI use at work rose 10 points in a year, and daily GenAI use went from 14% to 22% of the workforce. By contrast, less than half of workers now trust top management, and PwC warns that only a minority are obtaining real benefits from AI. Together, these data describe broad adoption that has not yet turned into trust or results.",
        "The gap is deepest in the base that keeps operations running. A small group that PwC calls \"front-runners\" has highly sought-after skills, uses AI far more and trusts top management far more. At the other end is the \"engine room\", the operational core that makes up 56% of the workforce: only 11% use GenAI daily and just 33% trust top management. The benefits of AI and trust are concentrated in a minority.",
        "For the business, the limit is teams' capacity to process and incorporate change. One in five workers say they find it difficult to manage, and 18% do not understand the reasons for it, a difficulty that senior executives and managers also acknowledge. At the same time, ratings of access to learning resources fell from 59% to 51%. People need to learn faster just when they perceive less support to do so.",
        "For PwC, adding AI to legacy operating models is not enough. The return depends on people understanding the change, being able to learn and trusting those who lead it."
      ]
    },
    cita: {
      "original": "Injecting AI into legacy operating models isn't enough.",
      "traduccion_es": "Incorporar IA a modelos operativos heredados no es suficiente.",
      "autor_es": "PwC, Global Workforce Hopes and Fears Survey 2026",
      "autor_en": "PwC, Global Workforce Hopes and Fears Survey 2026"
    },
    preguntas_es: [
      "¿Qué factores explican que la confianza en la dirección disminuya mientras crece la adopción de la IA?",
      "¿Qué proporción de los cambios que se comunican llega acompañada de sus razones y no solo de instrucciones?",
      "¿Cómo se distribuyen los beneficios de la IA entre la base operativa y los perfiles más especializados?"
    ],
    preguntas_en: [
      "What factors explain why trust in leadership is declining while AI adoption grows?",
      "What share of the changes being communicated comes with its reasons, not only with instructions?",
      "How are the benefits of AI distributed between the operational core and the most specialized profiles?"
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
    estudio_es: "CEO Outlook Survey, octubre de 2026",
    estudio_en: "CEO Outlook Survey, October 2026",
    link: "https://www.ey.com/en_gl/ceo/ceo-outlook-global-report",
    region_es: "Global (21 países, incl. Brasil, Canadá, México y EE.UU.)",
    region_en: "Global (21 countries, incl. Brazil, Canada, Mexico and the US)",
    hallazgo_es: "Solo 15% de los CEOs reinvierte en su gente lo que gana en productividad con la IA",
    hallazgo_en: "Only 15% of CEOs reinvest AI productivity gains in their people",
    dato_clave_es: "80% de los CEOs espera que la IA cambie más los roles y las habilidades que el número de personas, pero solo 15% reinvierte las ganancias de productividad en desarrollar a sus equipos, frente a 48% que las destina a innovación y transformación. Para las organizaciones, significa que el recurso que más limitará el crecimiento, las capacidades de las personas, es el que menos inversión recibe.",
    dato_clave_en: "80% of CEOs expect AI to change roles and skills more than headcount, but only 15% reinvest productivity gains in developing their people, compared with 48% who channel them into innovation and transformation. For organizations, it means that the resource that will most constrain growth, people's capabilities, is the one receiving the least investment.",
    contexto_es: "CEO Outlook Survey de EY-Parthenon. Encuesta en línea y anónima a 1,200 CEOs de grandes empresas de 21 países, entre ellos Brasil, Canadá, México y EE.UU., y de cinco industrias; 30% de las empresas factura más de US$5,000 millones al año. Trabajo de campo: agosto y septiembre de 2026. Publicación: octubre de 2026.",
    contexto_en: "EY-Parthenon's CEO Outlook Survey. Anonymous online survey of 1,200 CEOs of large companies across 21 countries, including Brazil, Canada, Mexico and the US, and five industries; 30% of the companies have annual revenue above US$5 billion. Fieldwork: August and September 2026. Published: October 2026.",
    puntos_es: [
      "**La IA cambiará el contenido del trabajo más que su volumen.** 80% de los CEOs considera que en tres años la IA impactará más en los roles, las habilidades y la forma de trabajar que en el tamaño de la plantilla.",
      "**El desarrollo de habilidades va detrás de la tecnología.** 47% reconoce que su organización no desarrolla habilidades al ritmo de la innovación en IA.",
      "**El talento, no el capital, será el recurso escaso.** 72% prevé que en tres años la escasez de habilidades frenará el crecimiento más que el acceso a capital.",
      "**Las ganancias de la IA casi no vuelven a las personas.** Solo 15% afirma que las ganancias de productividad se reinvierten en el desarrollo de sus equipos.",
      "**La IA ya genera productividad, aunque parte se pierde en el camino.** 50% identifica a la IA como el principal motor de sus ganancias de productividad, pero 23% señala que esas ganancias suelen diluirse antes de reflejarse en el resultado final.",
      "**La recapacitación ya aporta productividad.** 33% de los CEOs la menciona como una fuente de sus ganancias de productividad."
    ],
    puntos_en: [
      "**AI will change the content of work more than its volume.** 80% of CEOs believe that within three years AI will affect roles, skills and ways of working more than workforce size.",
      "**Skills development lags behind technology.** 47% acknowledge their organization is not developing skills at the pace of AI innovation.",
      "**Talent, not capital, will be the scarce resource.** 72% expect skills shortages to hold back growth more than access to capital within three years.",
      "**AI gains rarely flow back to people.** Only 15% say productivity gains are reinvested in developing their people.",
      "**AI already drives productivity, though some is lost along the way.** 50% identify AI as the main driver of their productivity gains, but 23% say those gains are often absorbed before they reach the bottom line.",
      "**Reskilling is already delivering productivity.** 33% of CEOs cite it as a source of their productivity gains."
    ],
    articulo_es: {
      "bajada": "Los CEOs anticipan que la IA cambiará sobre todo los roles y las habilidades, pero muy pocos reinvierten en sus equipos las ganancias que la IA les genera.",
      "parrafos": [
        "Los CEOs esperan que la IA transforme el contenido del trabajo más que su volumen. El CEO Outlook de EY-Parthenon, publicado en octubre de 2026 y basado en 1,200 CEOs de grandes empresas, muestra que 80% considera que en tres años la IA impactará más en los roles, las habilidades y la forma de trabajar que en el tamaño de la plantilla. La cuestión de fondo para la alta dirección no es cuántas personas se necesitarán, sino qué harán y con qué capacidades.",
        "Las ganancias de productividad ya llegaron, pero el desarrollo de capacidades no sigue el ritmo. 50% identifica a la IA como el principal motor de sus ganancias de productividad. Sin embargo, 47% admite que su organización no desarrolla habilidades al ritmo de la innovación en IA, y 72% prevé que la escasez de habilidades frenará el crecimiento más que el acceso a capital. En conjunto, estas cifras indican que el recurso escaso ya no sería el capital financiero, sino el talento.",
        "El destino de los recursos contradice ese diagnóstico. Solo 15% afirma que las ganancias de productividad se reinvierten en el desarrollo de sus equipos, frente a 48% que las destina a innovación y transformación. Además, 23% reconoce que parte de lo obtenido con IA se diluye antes de reflejarse en el resultado final. Los CEOs identifican el cuello de botella, pero la inversión se orienta hacia otras prioridades.",
        "Para el negocio, el desafío es convertir la eficiencia en crecimiento, que según EY es el verdadero reto. La recapacitación ya figura entre las fuentes de productividad que mencionan los CEOs (33%). Si las habilidades no avanzan al ritmo de la tecnología, lo ganado con IA puede quedarse en ahorro y no convertirse en nuevas capacidades para el negocio.",
        "Como plantea Andrea Guerzoni, vicepresidente global de EY-Parthenon, la productividad por sí sola no constituye una estrategia. La ventaja dependerá del uso que se dé a esas ganancias."
      ]
    },
    articulo_en: {
      "bajada": "CEOs expect AI to change mainly roles and skills, yet very few reinvest in their people the gains that AI generates for them.",
      "parrafos": [
        "CEOs expect AI to transform the content of work more than its volume. EY-Parthenon's CEO Outlook, published in October 2026 and based on 1,200 CEOs of large companies, shows that 80% believe that within three years AI will affect roles, skills and ways of working more than workforce size. The underlying question for senior leadership is not how many people will be needed but what they will do and with which capabilities.",
        "Productivity gains have arrived, but capability development is not keeping pace. 50% identify AI as the main driver of their productivity gains. However, 47% admit their organization is not developing skills at the pace of AI innovation, and 72% expect skills shortages to hold back growth more than access to capital. Together, these figures indicate that the scarce resource would no longer be financial capital but talent.",
        "Where resources go contradicts that diagnosis. Only 15% say productivity gains are reinvested in developing their people, compared with 48% who direct them to innovation and transformation. In addition, 23% acknowledge that part of what is gained with AI is absorbed before it reaches the bottom line. CEOs identify the bottleneck, but investment is directed toward other priorities.",
        "For the business, the challenge is turning efficiency into growth, which EY describes as the real test. Reskilling already appears among the sources of productivity CEOs cite (33%). If skills do not advance at the pace of technology, AI gains may remain as savings rather than becoming new capabilities for the business.",
        "As Andrea Guerzoni, EY-Parthenon Global Vice Chair, argues, productivity alone is not a strategy. The advantage will depend on how those gains are used."
      ]
    },
    cita: {
      "original": "AI is creating real productivity gains, but productivity alone is not a strategy.",
      "traduccion_es": "La IA está generando ganancias reales de productividad, pero la productividad por sí sola no es una estrategia.",
      "autor_es": "Andrea Guerzoni, vicepresidente global de EY-Parthenon",
      "autor_en": "Andrea Guerzoni, EY-Parthenon Global Vice Chair"
    },
    preguntas_es: [
      "¿Qué proporción de las ganancias de productividad atribuidas a la IA se reinvierte hoy en desarrollar capacidades?",
      "¿Qué roles de la organización cambiarán más en los próximos tres años y qué plan de habilidades los acompaña?",
      "¿Cómo se comunica a los equipos el destino de las ganancias de productividad que contribuyen a generar?"
    ],
    preguntas_en: [
      "What share of the productivity gains attributed to AI is currently reinvested in building capabilities?",
      "Which roles in the organization will change most over the next three years, and what skills plan supports them?",
      "How is the use of the productivity gains teams help generate communicated to them?"
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
    link: "https://kpmg.com/kpmg-us/content/dam/kpmg/pdf/gated/2026/kpmg-2026-ceo-outlook.pdf",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "86% de los CEOs de grandes empresas de EE.UU. ya rediseña roles para que personas e IA trabajen juntas",
    hallazgo_en: "86% of CEOs at large US companies are already redesigning roles so people and AI work together",
    dato_clave_es: "86% de los CEOs de grandes empresas de EE.UU. reorganiza roles, trayectorias profesionales y equipos en torno a la colaboración entre personas e IA, y 75% replantea las habilidades que exige para los puestos de entrada. Para las organizaciones, significa que el rediseño del trabajo ya está en marcha y que su principal límite son las habilidades, no la tecnología.",
    dato_clave_en: "86% of CEOs at large US companies are reorganizing roles, career paths and teams around human-AI collaboration, and 75% are rethinking the skills they require for entry-level roles. For organizations, it means that the redesign of work is already under way and that its main constraint is skills, not technology.",
    contexto_es: "2026 US CEO Outlook de KPMG. Estudio anual a 400 CEOs de empresas de EE.UU. con ingresos anuales superiores a US$500 millones, de las cuales más de un tercio supera los US$10,000 millones; forma parte de una encuesta global a más de 1,300 CEOs de grandes empresas. Trabajo de campo: KPMG no detalla las fechas. Publicación: 15 de octubre de 2026.",
    contexto_en: "KPMG's 2026 US CEO Outlook. Annual study of 400 CEOs at US companies with annual revenues above US$500 million, more than a third of which exceed US$10 billion; it is part of a global survey of more than 1,300 CEOs at large companies. Fieldwork: KPMG does not disclose the dates. Published: October 15, 2026.",
    puntos_es: [
      "**La IA ya obliga a rediseñar la organización del trabajo.** 86% está rediseñando roles, trayectorias profesionales y estructuras de equipo para reflejar la colaboración entre personas e IA.",
      "**Retener, formar y contratar avanzan a la vez.** 83% se enfoca en retener y reentrenar a su talento de alto potencial, y 79% en contratar talento con capacidades en IA y tecnología.",
      "**El rediseño convive con reducciones.** 53% planea reducir su plantilla en algunas áreas.",
      "**La puerta de entrada al mundo laboral está cambiando.** 81% afirma que la IA lo llevó a replantear cómo forma a sus colaboradores, y 75%, qué habilidades exige para los puestos de entrada.",
      "**Las habilidades son el principal límite.** La brecha de habilidades (60%) encabeza los desafíos de talento, seguida por la capacitación en sistemas de IA (55%) y la atracción y retención de talento (49%).",
      "**Se invierte antes de comprobar el retorno.** 84% considera la IA una prioridad de inversión para los próximos tres años, pero solo 9% afirma que los agentes de IA ya transforman su organización."
    ],
    puntos_en: [
      "**AI is already forcing a redesign of how work is organized.** 86% are redesigning roles, career paths and team structures to reflect human-AI collaboration.",
      "**Retaining, training and hiring are moving in parallel.** 83% are focusing on retaining and retraining high-potential talent, and 79% on hiring talent with AI and technology capabilities.",
      "**Redesign coexists with reductions.** 53% plan to reduce their workforce in some areas.",
      "**The entry point to the workforce is changing.** 81% say AI has led them to rethink how they train employees, and 75% the skills they require for entry-level roles.",
      "**Skills are the main constraint.** The skills gap (60%) tops the list of talent challenges, followed by training on AI systems (55%) and attracting and retaining talent (49%).",
      "**Investment comes before proven returns.** 84% consider AI an investment priority for the next three years, yet only 9% say AI agents are already transforming their organization."
    ],
    articulo_es: {
      "bajada": "Los CEOs de grandes empresas de EE.UU. ya rediseñan el trabajo en torno a la IA, aunque aún no tienen aseguradas ni las habilidades ni el retorno de esa inversión.",
      "parrafos": [
        "La IA ya no se discute solo como tecnología, sino como una nueva forma de organizar el trabajo. El 2026 US CEO Outlook de KPMG, basado en 400 CEOs de empresas de EE.UU. con ingresos superiores a US$500 millones, muestra que 86% está rediseñando roles, trayectorias profesionales y estructuras de equipo para reflejar la colaboración entre personas e IA. La transformación ha pasado del plano tecnológico al organizacional.",
        "El rediseño avanza en varias direcciones a la vez. 83% de los CEOs se enfoca en retener y reentrenar a su talento de alto potencial, y 79% en contratar perfiles con capacidades en IA y tecnología. Al mismo tiempo, 53% planea reducir su plantilla en algunas áreas. Formar, contratar y reducir personal conviven en una misma agenda, lo que exige coherencia en cómo se explican esas decisiones.",
        "El cambio más profundo se concentra en la puerta de entrada al mundo laboral. 75% afirma que la IA lo llevó a replantear qué habilidades exige en los puestos de entrada, y 81%, cómo forma a sus colaboradores. En consecuencia, la brecha de habilidades (60%) se ubica como su principal desafío de talento. Si se automatizan las tareas con las que antes aprendían los profesionales nuevos, la organización debe definir dónde y cuándo se adquiere la experiencia.",
        "Para el negocio, el desafío es rediseñar sin un retorno asegurado. 84% considera la IA una de sus principales prioridades de inversión para los próximos tres años. Sin embargo, solo 9% afirma que los agentes de IA, sistemas que ejecutan tareas por sí solos, ya transforman su organización, y 68% espera ver retorno de la IA recién en uno a tres años. Las decisiones sobre las personas se toman antes de que el valor esté demostrado.",
        "Los CEOs ya decidieron cambiar la forma en que se organiza el trabajo, y el límite más claro son las habilidades. Esa conclusión sitúa a las áreas de personas en el centro de la transformación."
      ]
    },
    articulo_en: {
      "bajada": "CEOs at large US companies are already redesigning work around AI, although neither the skills nor the return on that investment are yet secured.",
      "parrafos": [
        "AI is no longer discussed only as a technology but as a new way of organizing work. KPMG's 2026 US CEO Outlook, based on 400 CEOs at US companies with revenues above US$500 million, shows that 86% are redesigning roles, career paths and team structures to reflect human-AI collaboration. The transformation has moved from the technological to the organizational level.",
        "The redesign is moving in several directions at once. 83% of CEOs are focusing on retaining and retraining high-potential talent, and 79% on hiring people with AI and technology capabilities. At the same time, 53% plan to reduce their workforce in some areas. Training, hiring and reducing headcount sit on the same agenda, which requires consistency in how those decisions are explained.",
        "The deepest change is concentrated at the entry point to the workforce. 75% say AI has led them to rethink the skills they require for entry-level roles, and 81% how they train employees. As a result, the skills gap (60%) ranks as their top talent challenge. If the tasks through which new professionals used to learn are automated, the organization must define where and when experience is acquired.",
        "For the business, the challenge is redesigning without a guaranteed return. 84% consider AI one of their top investment priorities for the next three years. However, only 9% say AI agents, systems that carry out tasks on their own, are already transforming their organization, and 68% expect AI returns only in one to three years. Decisions about people are being made before the value is proven.",
        "CEOs have already decided to change how work is organized, and the clearest limit is skills. That conclusion places people functions at the center of the transformation."
      ]
    },
    cita: {
      "original": "rethink how skills are developed, including what should be learned before entering the workforce",
      "traduccion_es": "repensar cómo se desarrollan las habilidades, incluido lo que debe aprenderse antes de entrar al mundo laboral",
      "autor_es": "Timothy J. Walsh, presidente y CEO de KPMG LLP",
      "autor_en": "Timothy J. Walsh, Chairman and CEO, KPMG LLP"
    },
    preguntas_es: [
      "¿Dónde y cómo adquirirán experiencia los profesionales que se incorporan si cambian los puestos de entrada?",
      "¿Cómo se comunica un rediseño de roles cuando, al mismo tiempo, se planean reducciones en algunas áreas?",
      "¿Qué indicadores permitirán saber si el rediseño del trabajo con IA está generando valor antes de escalarlo?"
    ],
    preguntas_en: [
      "Where and how will new professionals gain experience if entry-level roles change?",
      "How is a redesign of roles communicated when reductions are also planned in some areas?",
      "Which indicators will show whether redesigning work with AI is creating value before it is scaled?"
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
    hallazgo_es: "Para 47% de los líderes de Latinoamérica, transformar el trabajo con IA es la principal prioridad",
    hallazgo_en: "For 47% of Latin American leaders, transforming work with AI is the top priority",
    dato_clave_es: "47% de los líderes latinoamericanos considera la transformación del trabajo impulsada por IA su prioridad número uno, aunque es el escenario con menor preparación de los ocho evaluados, y la región percibe más riesgo que el promedio mundial: 49% frente a 40%. Para las organizaciones, significa que las decisiones sobre talento y espacios de trabajo se toman con alta incertidumbre y con capacidades aún por construir.",
    dato_clave_en: "47% of Latin American leaders see AI-driven workforce transformation as their number one priority, even though it is the scenario with the lowest readiness of the eight evaluated, and the region perceives more risk than the global average: 49% versus 40%. For organizations, it means that decisions about talent and workspaces are being made under high uncertainty and with capabilities still to be built.",
    contexto_es: "Capítulo latinoamericano de la encuesta global bienal de JLL sobre el futuro del trabajo, que se realiza desde 2011 entre responsables de decisiones sobre bienes raíces corporativos. La edición 2026 reúne a más de 2,200 participantes de 21 mercados, de los cuales 150 son de Latinoamérica, con representación de Argentina, Brasil, Colombia y México. Trabajo de campo: primer trimestre de 2026. Publicación: agosto de 2026.",
    contexto_en: "Latin American chapter of JLL's biennial global Future of Work Survey, conducted since 2011 among corporate real estate decision-makers. The 2026 edition gathers more than 2,200 participants across 21 markets, 150 of them in Latin America, with representation from Argentina, Brazil, Colombia and Mexico. Fieldwork: first quarter of 2026. Published: August 2026.",
    puntos_es: [
      "**La prioridad está definida, pero la capacidad de ejecución no.** 47% ubica la transformación de la fuerza laboral impulsada por IA como su principal prioridad estratégica, y es a la vez el escenario con menor preparación de los ocho evaluados.",
      "**La región se siente más expuesta que el resto del mundo.** 49% de los encuestados latinoamericanos considera un riesgo para su cartera la incertidumbre sobre el impacto de la IA en el espacio de trabajo, frente a 40% a nivel global.",
      "**La regulación es el primer freno en la región.** 35% identifica la complejidad regulatoria y de cumplimiento como la principal barrera.",
      "**La escasez de talento técnico es el segundo.** 33% señala la falta de mano de obra técnica especializada.",
      "**Las decisiones inmobiliarias no se detienen.** 65% de las organizaciones prioriza el posicionamiento estratégico de largo plazo y 64% la inversión transformadora en sus inmuebles corporativos."
    ],
    puntos_en: [
      "**The priority is set, but execution capacity is not.** 47% rank AI-driven workforce transformation as their top strategic priority, which is also the scenario with the lowest readiness of the eight evaluated.",
      "**The region feels more exposed than the rest of the world.** 49% of Latin American respondents see uncertainty about AI's impact on the workplace as a risk to their portfolio, compared with 40% globally.",
      "**Regulation is the region's first constraint.** 35% identify regulatory and compliance complexity as the main barrier.",
      "**The shortage of technical talent is the second.** 33% point to a lack of specialized technical labor.",
      "**Real estate decisions are not on hold.** 65% of organizations prioritize long-term strategic positioning and 64% transformational investment in their corporate real estate."
    ],
    articulo_es: {
      "bajada": "En Latinoamérica, transformar el trabajo con IA es la principal prioridad de los líderes y, al mismo tiempo, el escenario para el que se declaran menos preparados.",
      "parrafos": [
        "La región ya definió su apuesta por la IA, pero aún no cuenta con la capacidad para ejecutarla. El capítulo latinoamericano de la encuesta de JLL sobre el futuro del trabajo consulta a los responsables de bienes raíces corporativos, es decir, quienes deciden sobre oficinas y espacios de trabajo. Con 150 participantes de Argentina, Brasil, Colombia y México, muestra que 47% ubica la transformación de la fuerza laboral impulsada por IA como su principal prioridad estratégica. Sin embargo, de los ocho escenarios evaluados, es el que registra menor preparación.",
        "Latinoamérica se percibe más expuesta que el resto del mundo. 49% de los encuestados de la región considera un riesgo para su cartera la incertidumbre sobre el impacto de la IA en el espacio de trabajo, frente a 40% a nivel global. Esa incertidumbre abarca cuántas personas trabajarán dentro de unos años, en qué roles y en qué espacios. La falta de visibilidad sobre el futuro del trabajo pesa más en la región que en el promedio mundial.",
        "Los frenos regionales son distintos de los globales. A nivel mundial, JLL identifica la escasez de habilidades en IA como la principal limitación. En Latinoamérica, en cambio, el primer obstáculo es la complejidad regulatoria y de cumplimiento (35%), seguida por la escasez de mano de obra técnica especializada (33%). El ritmo del cambio en la región depende, por tanto, de factores que exceden las decisiones internas de las empresas.",
        "Para el negocio, la IA ya forma parte de las decisiones sobre oficinas, carteras inmobiliarias e inversión. Las organizaciones no están en pausa: 65% prioriza el posicionamiento estratégico de largo plazo y 64% la inversión transformadora en sus inmuebles corporativos. Esos espacios se planifican cuando aún no está claro cómo será el trabajo que albergarán, lo que exige coordinar la estrategia inmobiliaria con la de talento.",
        "El estudio retrata una región que busca avanzar con rapidez hacia un trabajo rediseñado por la IA. Lo que necesita es desarrollar las capacidades, en personas y en marcos regulatorios, para sostener ese cambio."
      ]
    },
    articulo_en: {
      "bajada": "In Latin America, transforming work with AI is leaders' top priority and, at the same time, the scenario they feel least prepared for.",
      "parrafos": [
        "The region has defined its bet on AI but does not yet have the capacity to execute it. The Latin American chapter of JLL's Future of Work Survey consults corporate real estate decision-makers, the people who decide on offices and workspaces. With 150 participants from Argentina, Brazil, Colombia and Mexico, it shows that 47% rank AI-driven workforce transformation as their top strategic priority. However, of the eight scenarios evaluated, it is the one with the lowest readiness.",
        "Latin America sees itself as more exposed than the rest of the world. 49% of the region's respondents see uncertainty about AI's impact on the workplace as a risk to their portfolio, compared with 40% globally. That uncertainty covers how many people will be working a few years from now, in what roles and in which spaces. The lack of visibility into the future of work weighs more heavily in the region than in the global average.",
        "The region's constraints differ from global ones. Worldwide, JLL identifies the shortage of AI skills as the main constraint. In Latin America, by contrast, the top obstacle is regulatory and compliance complexity (35%), followed by a shortage of specialized technical labor (33%). The pace of change in the region therefore depends on factors beyond companies' internal decisions.",
        "For the business, AI is already part of decisions about offices, real estate portfolios and investment. Organizations are not on hold: 65% prioritize long-term strategic positioning and 64% transformational investment in their corporate real estate. These spaces are being planned while it is still unclear what kind of work they will house, which requires aligning real estate strategy with talent strategy.",
        "The study portrays a region seeking to move quickly toward work redesigned by AI. What it needs is to build the capabilities, in people and in regulatory frameworks, to sustain that change."
      ]
    },
    cita: {
      "original": "La IA es una prioridad, pero la preparación es desigual.",
      "traduccion_es": "La IA es una prioridad, pero la preparación es desigual.",
      "autor_es": "JLL, principales hallazgos de la encuesta",
      "autor_en": "JLL, key findings of the survey"
    },
    preguntas_es: [
      "¿Qué capacidades le faltan hoy a la organización para ejecutar la transformación del trabajo que considera prioritaria?",
      "¿Cómo se coordinan las decisiones inmobiliarias con la planificación del talento y de la IA?",
      "¿Qué se comunica a los equipos sobre el futuro del trabajo cuando la propia organización enfrenta alta incertidumbre?"
    ],
    preguntas_en: [
      "Which capabilities does the organization currently lack to execute the workforce transformation it considers a priority?",
      "How are real estate decisions coordinated with talent and AI planning?",
      "What is communicated to teams about the future of work when the organization itself faces high uncertainty?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-11-gallup-compromiso-eeuu",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Liderazgo",
    esEjemplo: false,
    publicado: "2026-11-02",
    fecha: "2026-10-28",
    anio: "2026",
    fuente: "Gallup",
    estudio_es: "El compromiso de los empleados en EE.UU. cae por debajo de 30% por primera vez en 15 años",
    estudio_en: "U.S. Employee Engagement Below 30% for First Time in 15 Years",
    link: "https://gallup.com/workplace/716117/employee-engagement-below-30-first-time-years.aspx",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "Solo 29% de los empleados en EE.UU. está comprometido con su trabajo, la cifra más baja desde 2011",
    hallazgo_en: "Only 29% of US employees are engaged in their work, the lowest level since 2011",
    dato_clave_es: "29% de los empleados en EE.UU. está comprometido, es decir, psicológicamente involucrado con su trabajo y con su organización; la caída de 2 puntos en un solo trimestre equivale a unos 3.2 millones de trabajadores comprometidos menos. Para las organizaciones, significa que 7 de cada 10 personas sostienen la operación sin un vínculo sólido con lo que hacen.",
    dato_clave_en: "29% of U.S. employees are engaged, meaning psychologically involved in their work and their organization; the 2-point drop in a single quarter equals about 3.2 million fewer engaged workers. For organizations, it means that 7 in 10 people keep operations running without a strong connection to what they do.",
    contexto_es: "Medición trimestral de Gallup sobre el compromiso de los empleados en Estados Unidos, a cargo de Jim Harter, científico jefe de Gallup para el ámbito laboral. Encuesta web a 21,648 adultos del Gallup Panel, una muestra probabilística de Estados Unidos; el compromiso se calcula entre quienes trabajan. Trabajo de campo: del 5 al 19 de agosto de 2026. Publicación: 28 de octubre de 2026.",
    contexto_en: "Gallup's quarterly measurement of U.S. employee engagement, led by Jim Harter, Gallup's Chief Workplace Scientist. Web survey of 21,648 adults from the Gallup Panel, a probability-based U.S. sample; engagement is calculated among employed respondents. Fieldwork: August 5-19, 2026. Published: October 28, 2026.",
    puntos_es: [
      "**El compromiso toca su punto más bajo en 15 años.** Solo 29% de los empleados está involucrado con su trabajo y con su organización: 2 puntos menos que en el trimestre anterior y el nivel más bajo desde 2011.",
      "**7 de cada 10 empleados no tienen un vínculo sólido con su trabajo.** 53% no está comprometido y 18% está activamente desvinculado, un punto más que en el trimestre anterior.",
      "**Se pierde la claridad de expectativas, la base de la gestión del desempeño.** Solo 46% sabe qué se espera de su trabajo, frente a 49% en el primer semestre de 2026 y 61% en 2015.",
      "**Se debilita el cuidado, un indicador directo del liderazgo cercano.** 37% siente que su jefe o alguien en el trabajo se preocupa por él como persona, frente a 40% en el primer semestre y 47% en marzo de 2020.",
      "**El trabajo remoto pierde su ventaja.** El compromiso de quienes trabajan 100% en remoto bajó de 37% a 32%, y el de la modalidad híbrida, de 34% a 32%. La flexibilidad, por sí sola, ya no sostiene el vínculo con el trabajo.",
      "**La IA suma compromiso cuando se gestiona.** Según un análisis previo de Gallup, el compromiso es 15 puntos mayor en las organizaciones que comunicaron un plan claro de IA y 18 puntos mayor donde los jefes apoyan activamente su uso."
    ],
    puntos_en: [
      "**Engagement hits a 15-year low.** Only 29% of employees are involved in their work and their organization: 2 points lower than the previous quarter and the lowest level since 2011.",
      "**7 in 10 employees lack a strong connection to their work.** 53% are not engaged and 18% are actively disengaged, one point more than the previous quarter.",
      "**Clarity of expectations, the foundation of performance management, is eroding.** Only 46% know what is expected of them at work, down from 49% in the first half of 2026 and 61% in 2015.",
      "**Care, a direct indicator of close leadership, is weakening.** 37% feel that their supervisor or someone at work cares about them as a person, down from 40% in the first half and 47% in March 2020.",
      "**Remote work is losing its advantage.** Engagement among fully remote workers fell from 37% to 32%, and among hybrid workers from 34% to 32%. Flexibility alone no longer sustains people's connection to their work.",
      "**AI adds engagement when it is managed.** According to an earlier Gallup analysis, engagement is 15 points higher in organizations that have communicated a clear AI plan and 18 points higher where managers actively support its use."
    ],
    articulo_es: {
      "bajada": "El compromiso de los empleados en Estados Unidos retrocede a mínimos recientes, y sus causas están en lo más básico de la gestión de equipos: la claridad sobre lo que se espera y el cuidado por las personas.",
      "parrafos": [
        "El compromiso laboral en Estados Unidos retrocedió a su nivel más bajo desde 2011. Según la medición trimestral de Gallup, solo 29% de los empleados está involucrado con su trabajo y con su organización, 2 puntos menos que en el trimestre anterior. La caída equivale a unos 3.2 millones de personas comprometidas menos en apenas tres meses: una pérdida de energía productiva a escala nacional.",
        "El deterioro se concentra en los fundamentos de la gestión de equipos. Solo 46% de los empleados sabe con claridad qué se espera de su trabajo, frente a 61% en 2015. Además, apenas 37% siente que su jefe o alguien en el trabajo se preocupa por él como persona, frente a 47% en marzo de 2020. Ambos indicadores dependen directamente del liderazgo cotidiano, y ambos están en retroceso.",
        "La modalidad de trabajo agrega una señal relevante. El compromiso de quienes trabajan 100% en remoto bajó de 37% a 32% en un trimestre, y el de la modalidad híbrida, de 34% a 32%. Gallup recuerda que, entre 2020 y 2023, la claridad de expectativas ya había caído el doble en los equipos remotos e híbridos. La flexibilidad dejó de ser una ventaja por sí sola: sin una gestión que la acompañe, la distancia erosiona el vínculo con el trabajo.",
        "Para las organizaciones, el desafío se cruza con la adopción de la inteligencia artificial. Un análisis previo de Gallup encontró que el compromiso es 15 puntos mayor en las organizaciones que comunicaron un plan claro de IA, y 18 puntos mayor donde los jefes apoyan activamente su uso. En plena transformación tecnológica, la claridad del rumbo y el rol de los mandos medios pesan directamente en el compromiso.",
        "La cifra de 29% no describe un estado de ánimo pasajero, sino la calidad de la conducción de los equipos. En un entorno de cambio permanente, el compromiso sigue dependiendo de dos condiciones básicas: saber hacia dónde va la organización y sentir que esta se interesa por las personas."
      ]
    },
    articulo_en: {
      "bajada": "U.S. employee engagement has fallen to recent lows, and the causes lie in the most basic elements of managing teams: clarity about what is expected and care for people.",
      "parrafos": [
        "Employee engagement in the United States has fallen to its lowest level since 2011. According to Gallup's quarterly measurement, only 29% of employees are involved in their work and their organization, 2 points lower than the previous quarter. The drop equals about 3.2 million fewer engaged people in just three months: a loss of productive energy on a national scale.",
        "The decline is concentrated in the fundamentals of managing teams. Only 46% of employees clearly know what is expected of them at work, compared with 61% in 2015. In addition, just 37% feel that their manager or someone at work cares about them as a person, compared with 47% in March 2020. Both indicators depend directly on day-to-day leadership, and both are declining.",
        "Work arrangements add a relevant signal. Engagement among fully remote workers fell from 37% to 32% in one quarter, and among hybrid workers from 34% to 32%. Gallup notes that between 2020 and 2023, clarity of expectations had already fallen twice as much in remote and hybrid teams. Flexibility is no longer an advantage on its own: without management to support it, distance erodes people's connection to their work.",
        "For organizations, the challenge intersects with the adoption of artificial intelligence. An earlier Gallup analysis found that engagement is 15 points higher in organizations that have communicated a clear AI plan, and 18 points higher where managers actively support its use. In the midst of technological transformation, clarity of direction and the role of middle managers weigh directly on engagement.",
        "The 29% figure does not describe a passing mood but the quality of team leadership. In an environment of constant change, engagement still depends on two basic conditions: knowing where the organization is headed and feeling that it cares about its people."
      ]
    },
    cita: {
      "original": "Managers translate organizational plans into clear expectations and discuss how changes affect employees’ daily work.",
      "traduccion_es": "Los jefes traducen los planes de la organización en expectativas claras y conversan sobre cómo los cambios afectan el trabajo diario de los empleados.",
      "autor_es": "Jim Harter, científico jefe de Gallup para el ámbito laboral",
      "autor_en": "Jim Harter, Chief Workplace Scientist, Gallup"
    },
    preguntas_es: [
      "¿Qué tan claro es hoy, en cada área, lo que la organización espera de cada rol, y cómo se verifica?",
      "¿Qué prácticas concretas demuestran interés por las personas en los equipos remotos e híbridos?",
      "¿Qué preparación reciben los mandos medios para sostener el compromiso mientras la IA transforma el trabajo?"
    ],
    preguntas_en: [
      "How clear is it today, in each area, what the organization expects of each role, and how is that verified?",
      "Which concrete practices demonstrate care for people in remote and hybrid teams?",
      "What preparation do middle managers receive to sustain engagement while AI transforms work?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-11-gallup-ia-beneficios",
    industria: null,
    tema: "ia_personas",
    subtema: "IA y trabajo",
    esEjemplo: false,
    publicado: "2026-11-02",
    fecha: "2026-10-06",
    anio: "2026",
    fuente: "Gallup",
    estudio_es: "Los beneficios de la IA en el trabajo se reparten de forma desigual",
    estudio_en: "AI Benefits at Work Unevenly Distributed",
    link: "https://news.gallup.com/poll/714602/benefits-work-unevenly-distributed.aspx",
    region_es: "Estados Unidos",
    region_en: "United States",
    hallazgo_es: "63% de quienes usan IA trabaja más rápido, pero 31% recibió más responsabilidades por ello",
    hallazgo_en: "63% of AI users work faster, but 31% were given more responsibilities as a result",
    dato_clave_es: "63% de quienes usan IA en el trabajo afirma que les permite trabajar más rápido, pero 31% recibió más responsabilidades a cambio, y solo 28% de los empleados la usa al menos una vez por semana. Para las organizaciones, significa que el valor de la IA depende de decidir a dónde va el tiempo ahorrado y quiénes acceden a la tecnología.",
    dato_clave_en: "63% of those who use AI at work say it helps them work faster, but 31% received more responsibilities in return, and only 28% of employees use it at least once a week. For organizations, it means that AI's value depends on deciding where saved time goes and who gets access to the technology.",
    contexto_es: "Análisis de Gallup firmado por Jeffrey M. Jones, parte del American Job Quality Study, desarrollado con Jobs for the Future y The Families & Workers Fund. Encuestas web y por correo a 15,482 trabajadores de Estados Unidos, de los cuales 7,845 usaron IA en su trabajo. Trabajo de campo: del 26 de enero al 24 de marzo de 2026. Publicación: 6 de octubre de 2026.",
    contexto_en: "Gallup analysis by Jeffrey M. Jones, part of the American Job Quality Study, developed with Jobs for the Future and The Families & Workers Fund. Web and mail surveys of 15,482 U.S. workers, 7,845 of whom have used AI in their job. Fieldwork: January 26 to March 24, 2026. Published: October 6, 2026.",
    puntos_es: [
      "**La IA mejora la velocidad, la creatividad y la calidad del trabajo.** Entre quienes la usan, 63% trabaja más rápido, 56% encuentra soluciones más creativas y 46% realiza un trabajo de mayor calidad.",
      "**El tiempo ahorrado puede convertirse en más carga.** 31% afirma que la IA llevó a su empleador a pedirle más responsabilidades, y entre los usuarios de 18 a 24 años la cifra sube a 38%.",
      "**La adopción todavía es minoritaria.** Solo 28% de los empleados usa IA al menos una vez por semana y 54% no la ha usado en su puesto.",
      "**La formación académica marca la diferencia en el acceso.** 40% de los graduados universitarios usa IA a diario o cada semana, frente a 17% de quienes no tienen título universitario.",
      "**El uso de IA coincide con mejores empleos.** 52% de los usuarios semanales tiene lo que Gallup considera un empleo de calidad, frente a 32% de quienes no usan IA; el dato no demuestra causa y efecto."
    ],
    puntos_en: [
      "**AI improves speed, creativity and quality of work.** Among users, 63% work faster, 56% find more creative solutions and 46% produce higher-quality work.",
      "**Saved time can turn into more workload.** 31% say AI led their employer to ask them for more responsibilities, and among users aged 18 to 24 the figure rises to 38%.",
      "**Adoption is still a minority.** Only 28% of employees use AI at least once a week, and 54% have not used it in their role.",
      "**Education makes a difference in access.** 40% of college graduates use AI daily or weekly, compared with 17% of those without a degree.",
      "**AI use coincides with better jobs.** 52% of weekly users hold what Gallup considers a quality job, compared with 32% of non-users; the data do not prove cause and effect."
    ],
    articulo_es: {
      "bajada": "La IA agiliza el trabajo y favorece soluciones más creativas para quienes la usan, pero esos beneficios no se distribuyen por igual y, en ocasiones, vienen acompañados de mayor carga.",
      "parrafos": [
        "La IA mejora el trabajo de quienes la usan, pero no siempre les alivia la carga. El American Job Quality Study, que Gallup desarrolla con Jobs for the Future y The Families & Workers Fund, consultó a 15,482 trabajadores de Estados Unidos. Entre quienes usan IA, 63% afirma que les permite trabajar más rápido y 56% que les ayuda a encontrar soluciones más creativas. Sin embargo, 31% señala que esa rapidez llevó a su empleador a asignarles más responsabilidades.",
        "Los beneficios se concentran en un grupo reducido. Solo 28% de los empleados usa IA al menos una vez por semana, y 54% nunca la ha usado en su puesto. El uso frecuente llega a 40% entre los graduados universitarios y baja a 17% entre quienes no tienen título. En conjunto, estas cifras describen una adopción que avanza más rápido entre quienes ya contaban con ventajas.",
        "La diferencia se refleja también en la calidad del empleo. 52% de los usuarios semanales tiene lo que Gallup considera un empleo de calidad, frente a 32% de quienes no usan IA. La firma aclara que se trata de percepciones de los propios trabajadores y que el dato no demuestra causa y efecto. Aun así, el resultado indica que la IA puede ampliar brechas que ya existían dentro de las organizaciones.",
        "Para el negocio, la cuestión central es quién captura el valor de la IA. Si el tiempo ahorrado se convierte solo en más tareas, el beneficio se diluye, y entre los trabajadores de 18 a 24 años 38% ya reporta más responsabilidades. Si además el acceso y la formación se concentran en algunos perfiles, la tecnología divide a los equipos en lugar de fortalecerlos.",
        "Adoptar IA implica decidir cómo se distribuyen el tiempo, la carga de trabajo y las oportunidades que la tecnología genera. Esa decisión es de gestión, no de herramientas."
      ]
    },
    articulo_en: {
      "bajada": "AI speeds up work and supports more creative solutions for those who use it, but those benefits are unevenly distributed and sometimes come with a heavier workload.",
      "parrafos": [
        "AI improves the work of those who use it, but it does not always lighten their load. The American Job Quality Study, which Gallup conducts with Jobs for the Future and The Families & Workers Fund, surveyed 15,482 U.S. workers. Among AI users, 63% say it helps them work faster and 56% that it helps them find more creative solutions. However, 31% say that speed led their employer to give them more responsibilities.",
        "The benefits are concentrated in a small group. Only 28% of employees use AI at least once a week, and 54% have never used it in their role. Frequent use reaches 40% among college graduates and falls to 17% among those without a degree. Together, these figures describe adoption that moves faster among those who already had advantages.",
        "The difference is also reflected in job quality. 52% of weekly users hold what Gallup considers a quality job, compared with 32% of non-users. The firm notes that these are workers' own perceptions and that the data do not prove cause and effect. Even so, the result indicates that AI can widen gaps that already existed within organizations.",
        "For the business, the central question is who captures the value of AI. If saved time simply turns into more tasks, the benefit fades, and among workers aged 18 to 24, 38% already report more responsibilities. If access and training are also concentrated in certain profiles, the technology divides teams rather than strengthening them.",
        "Adopting AI involves deciding how the time, workload and opportunities that the technology creates are distributed. That decision is a management choice, not a matter of tools."
      ]
    },
    cita: {
      "original": "Regular AI users are substantially more likely to have quality jobs",
      "traduccion_es": "Los usuarios frecuentes de IA tienen muchas más probabilidades de tener empleos de calidad.",
      "autor_es": "Jeffrey M. Jones, Gallup",
      "autor_en": "Jeffrey M. Jones, Gallup"
    },
    preguntas_es: [
      "¿Qué destino tiene hoy el tiempo que la IA ahorra a los equipos: más tareas, aprendizaje o trabajo de mayor valor?",
      "¿Qué grupos de colaboradores tienen hoy menos acceso a la IA y a la formación para usarla?",
      "¿Cómo se revisa la carga de trabajo de los equipos cuando aumenta su productividad?"
    ],
    preguntas_en: [
      "Where does the time AI saves teams go today: more tasks, learning or higher-value work?",
      "Which groups of employees currently have the least access to AI and to training to use it?",
      "How is teams' workload reviewed when their productivity rises?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-11-bcg-ia-trabajo",
    industria: null,
    tema: "ia_personas",
    subtema: "Rediseño de roles y habilidades",
    esEjemplo: false,
    publicado: "2026-11-02",
    fecha: "2026-06-03",
    anio: "2026",
    fuente: "BCG",
    estudio_es: "AI at Work 2026: la estrategia importa más que las herramientas",
    estudio_en: "AI at Work 2026: Why Strategy Matters More Than Tools",
    link: "https://www.bcg.com/publications/2026/ai-at-work-why-strategy-matters-more-than-tools",
    region_es: "Global (14 mercados, incluidos EE.UU. y Brasil)",
    region_en: "Global (14 markets, including the U.S. and Brazil)",
    hallazgo_es: "74% de los empleados de primera línea usa IA, pero solo 36% se siente preparado para hacerlo",
    hallazgo_en: "74% of frontline employees use AI, but only 36% feel prepared to do so",
    dato_clave_es: "74% de los empleados de primera línea, es decir, personal de oficina sin colaboradores a cargo, usa IA a diario o varias veces por semana, frente a 51% en 2025, pero solo 36% considera que recibió la formación necesaria. Para las organizaciones, significa que la adopción ya no es el problema: el valor depende ahora de la formación, la orientación y la claridad sobre para qué se usa la IA.",
    dato_clave_en: "74% of frontline employees, meaning office staff with no direct reports, use AI daily or several times a week, up from 51% in 2025, but only 36% feel they received the training they need. For organizations, it means that adoption is no longer the problem: value now depends on training, guidance and clarity about what AI is used for.",
    contexto_es: "AI at Work 2026, cuarta edición del estudio de Boston Consulting Group (BCG). Encuesta a 11,749 líderes, mandos medios y empleados de primera línea en 14 mercados: Australia, Reino Unido, EE.UU., España, India, Japón, Brasil, Alemania, Francia, Italia, países nórdicos, Sudáfrica, Medio Oriente y Benelux. Trabajo de campo: el informe no indica las fechas. Publicación: junio de 2026.",
    contexto_en: "AI at Work 2026, the fourth edition of Boston Consulting Group's (BCG) study. Survey of 11,749 leaders, managers and frontline employees across 14 markets: Australia, the UK, the U.S., Spain, India, Japan, Brazil, Germany, France, Italy, the Nordics, South Africa, the Middle East and Benelux. Fieldwork: the report does not state the dates. Published: June 2026.",
    puntos_es: [
      "**La IA ya es una herramienta cotidiana.** 74% de los empleados de primera línea la usa con regularidad, 23 puntos más que en 2025.",
      "**El tiempo ahorrado no se gestiona.** 66% recibe poca o ninguna orientación sobre cómo emplear el tiempo que ahorra gracias a la IA.",
      "**Las habilidades exigidas cambian más rápido que la formación.** 72% afirma que cambiaron las habilidades que se esperan de su rol, y solo 36% considera que recibió la formación suficiente.",
      "**La comunicación sobre la IA no llega con claridad.** Solo 33% indica que la dirección comunica con claridad sobre la IA, y 28% percibe una conexión sólida entre lo que se comunica y lo que la organización hace.",
      "**La falta de claridad tiene un costo humano.** 41% de los usuarios frecuentes reporta mayor carga mental asociada al uso de la IA.",
      "**Los agentes de IA se expanden con rapidez.** 30% de las organizaciones ya los integró en sus procesos, frente a 13% el año anterior."
    ],
    puntos_en: [
      "**AI is now an everyday tool.** 74% of frontline employees use it regularly, up 23 points from 2025.",
      "**Saved time is not being managed.** 66% receive limited or no guidance on how to use the time AI saves them.",
      "**Required skills are changing faster than training.** 72% say the skills expected in their role have changed, and only 36% feel they received sufficient training.",
      "**Communication about AI is not landing clearly.** Only 33% say leadership communicates clearly about AI, and 28% see strong alignment between what is communicated and what the organization does.",
      "**Lack of clarity has a human cost.** 41% of regular users report increased mental strain associated with AI use.",
      "**AI agents are spreading quickly.** 30% of organizations have integrated them into their workflows, up from 13% the year before."
    ],
    articulo_es: {
      "bajada": "La IA ya forma parte del trabajo diario de la mayoría de los empleados, pero la formación, la orientación y la comunicación sobre su uso no avanzan al mismo ritmo.",
      "parrafos": [
        "La adopción individual de la IA dejó de ser el principal desafío. La cuarta edición del estudio AI at Work de BCG, basada en 11,749 líderes, mandos medios y empleados de 14 mercados, muestra que 74% de los empleados de primera línea ya usa IA a diario o varias veces por semana, 23 puntos más que en 2025. La cuestión ahora es si las organizaciones saben cómo aprovechar ese uso.",
        "El uso avanza más rápido que el acompañamiento. 72% de los empleados afirma que cambiaron las habilidades que se esperan de su rol, pero solo 36% considera que recibió la formación suficiente. Además, 66% recibe poca o ninguna orientación sobre cómo emplear el tiempo que ahorra. En conjunto, estas cifras indican que las personas usan la herramienta sin un propósito claramente definido.",
        "La comunicación sobre la IA presenta una brecha similar. Solo 33% de los empleados de primera línea indica que la dirección comunica con claridad sobre la IA, y 28% percibe una conexión sólida entre lo que se comunica y lo que la organización hace. A ello se suma que 41% de los usuarios frecuentes reporta mayor carga mental. La falta de claridad tiene, por tanto, un costo estratégico y también humano.",
        "Para el negocio, el desafío crece con los agentes de IA, que ya están integrados en los procesos de 30% de las organizaciones, frente a 13% el año anterior. BCG sostiene que el valor no proviene de sumar herramientas, sino de contar con claridad estratégica sobre dónde y cómo se usa la IA. Para los equipos, esa claridad se traduce en saber qué se espera de ellos en un trabajo que cambia con rapidez.",
        "La brecha que describe el estudio no es tecnológica. La IA ya llegó a los equipos; falta una dirección clara que oriente su uso hacia resultados."
      ]
    },
    articulo_en: {
      "bajada": "AI is now part of most employees' daily work, but training, guidance and communication about its use are not keeping pace.",
      "parrafos": [
        "Individual AI adoption is no longer the main challenge. The fourth edition of BCG's AI at Work study, based on 11,749 leaders, managers and employees across 14 markets, shows that 74% of frontline employees now use AI daily or several times a week, up 23 points from 2025. The question now is whether organizations know how to make the most of that use.",
        "Use is advancing faster than support. 72% of employees say the skills expected in their role have changed, but only 36% feel they received sufficient training. In addition, 66% receive limited or no guidance on how to use the time they save. Together, these figures indicate that people are using the tool without a clearly defined purpose.",
        "Communication about AI shows a similar gap. Only 33% of frontline employees say leadership communicates clearly about AI, and 28% see strong alignment between what is communicated and what the organization does. On top of that, 41% of regular users report increased mental strain. The lack of clarity therefore carries both a strategic and a human cost.",
        "For the business, the challenge grows with AI agents, which are already integrated into the workflows of 30% of organizations, up from 13% the year before. BCG argues that value comes not from adding tools but from strategic clarity about where and how AI is used. For teams, that clarity means knowing what is expected of them in work that is changing quickly.",
        "The gap the study describes is not technological. AI has already reached teams; what is missing is a clear direction that steers its use toward results."
      ]
    },
    cita: {
      "original": "Adoption tells you that people use AI, not whether it pays off.",
      "traduccion_es": "La adopción indica que las personas usan IA, no si esa inversión genera retorno.",
      "autor_es": "Informe AI at Work 2026, BCG",
      "autor_en": "AI at Work 2026 report, BCG"
    },
    preguntas_es: [
      "¿Qué objetivos de negocio persigue la organización con el uso de la IA y qué tan claros son para los equipos?",
      "¿Qué orientación reciben los colaboradores sobre cómo emplear el tiempo que la IA les ahorra?",
      "¿En qué medida coincide lo que se comunica sobre la IA con lo que los equipos observan en la práctica?"
    ],
    preguntas_en: [
      "What business goals is the organization pursuing with AI, and how clear are they to teams?",
      "What guidance do employees receive on how to use the time AI saves them?",
      "To what extent does what is communicated about AI match what teams observe in practice?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-11-kornferry-workforce",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Liderazgo",
    esEjemplo: false,
    publicado: "2026-11-02",
    fecha: "2026-09-08",
    anio: "2026",
    fuente: "Korn Ferry",
    estudio_es: "Workforce 2026: crecer sin avanzar",
    estudio_en: "Workforce 2026: Growing Nowhere",
    link: "https://www.kornferry.com/insights/featured-topics/workforce-management-articles/workforce-planning-insights#findings",
    region_es: "Global (11 mercados, incluidos EE.UU. y Brasil)",
    region_en: "Global (11 markets, including the U.S. and Brazil)",
    hallazgo_es: "61% de los profesionales asume el trabajo de más de un rol",
    hallazgo_en: "61% of professionals take on the work of more than one role",
    dato_clave_es: "La motivación de los profesionales cayó 9 puntos en un año, hasta 61%, mientras la misma proporción realiza el trabajo de más de un rol y más de la mitad de los jefes declara estar agotada. Para las organizaciones, significa que la eficiencia lograda con recortes y tecnología se está pagando con la energía de los equipos y de quienes los conducen.",
    dato_clave_en: "Professionals' motivation fell 9 points in a year to 61%, while the same share do the work of more than one role and more than half of managers report being exhausted. For organizations, it means that the efficiency achieved through cuts and technology is being paid for with the energy of teams and of those who lead them.",
    contexto_es: "Workforce 2026 de Korn Ferry, tercera edición de su encuesta global anual sobre la fuerza laboral. Reúne a más de 16,000 profesionales de todos los roles, desde puestos de entrada hasta CEO, en 11 mercados: Australia, Brasil, Francia, Alemania, India, Japón, Arabia Saudita, Singapur, Emiratos Árabes Unidos, Reino Unido y Estados Unidos. Trabajo de campo: el informe no indica las fechas. Publicación: 8 de septiembre de 2026.",
    contexto_en: "Korn Ferry's Workforce 2026, the third edition of its annual global workforce survey. It covers more than 16,000 professionals in every role, from entry-level positions to CEOs, across 11 markets: Australia, Brazil, France, Germany, India, Japan, Saudi Arabia, Singapore, the UAE, the UK and the United States. Fieldwork: the report does not state the dates. Published: September 8, 2026.",
    puntos_es: [
      "**La energía de la fuerza laboral se reduce con rapidez.** La motivación cayó 9 puntos en un año, y hoy 61% de los profesionales se siente motivado.",
      "**Los recortes trasladan la carga a quienes permanecen.** 61% afirma que realiza el trabajo de más de un rol.",
      "**Las jefaturas están al límite y con poco margen para innovar.** Más de la mitad de los jefes declara estar agotada, y solo 52% de los profesionales indica que su jefe lo anima a experimentar.",
      "**La IA promete eficiencia, pero sin formación suficiente.** 63% afirma que la IA aumenta su eficiencia, pero solo 52% se siente adecuadamente formado para usarla.",
      "**Los jefes de primera línea perciben más amenazado su rol.** En EE.UU., 55% de ellos cree que la IA o la tecnología reemplazará su rol en tres años, frente a 30% de los colaboradores individuales.",
      "**La dirección y los equipos ven realidades distintas.** En EE.UU., 85% de los CEO afirma que su organización se preocupa por sus colaboradores, frente a 46% de los colaboradores individuales: una brecha de 39 puntos."
    ],
    puntos_en: [
      "**Workforce energy is declining fast.** Motivation fell 9 points in one year, and 61% of professionals now feel motivated.",
      "**Cuts shift the load onto those who remain.** 61% say they do the work of more than one role.",
      "**Managers are at their limit, with little room to innovate.** More than half of managers report being exhausted, and only 52% of professionals say their manager encourages them to experiment.",
      "**AI promises efficiency, but without enough training.** 63% say AI increases their efficiency, but only 52% feel adequately trained to use it.",
      "**First-level managers see their roles as more at risk.** In the U.S., 55% of them expect AI or technology to replace their role within three years, compared with 30% of individual contributors.",
      "**Leadership and teams see different realities.** In the U.S., 85% of CEOs say their organization cares about its people, compared with 46% of individual contributors: a 39-point gap."
    ],
    articulo_es: {
      "bajada": "Las organizaciones invierten en IA y reducen costos para crecer, mientras sus profesionales asumen más carga, pierden motivación y trabajan con jefaturas al límite de su capacidad.",
      "parrafos": [
        "Las empresas buscan crecer con equipos que llegan a ese desafío con menos energía. La encuesta Workforce de Korn Ferry, basada en más de 16,000 profesionales de 11 mercados, muestra que la motivación de la fuerza laboral cayó 9 puntos en un solo año, y hoy solo 61% se siente motivado. El informe se titula \"crecer sin avanzar\" precisamente por esa brecha entre las metas de crecimiento y la capacidad de quienes deben alcanzarlas.",
        "La carga de trabajo se acumula sobre quienes permanecen. 61% de los profesionales afirma que realiza el trabajo de más de un rol, porque cuando un puesto se elimina o se \"reemplaza con IA\", sus tareas suelen pasar al resto del equipo. Korn Ferry advierte que las personas aceptan un esfuerzo adicional temporal, pero no uno permanente sin reconocimiento ni rumbo claro. Lo que comienza como un ajuste termina en desgaste y rotación.",
        "La IA, que debía aliviar esa carga, todavía no lo consigue. 63% afirma que la IA aumenta su eficiencia, pero solo 52% se siente adecuadamente formado para usarla. Según el informe, para muchos profesionales la IA consume tiempo en lugar de ahorrarlo, porque se suma al trabajo habitual. Sin un rediseño del trabajo, la herramienta se convierte en una tarea adicional.",
        "Para el negocio, la situación de las jefaturas es el punto crítico. Más de la mitad de los jefes declara estar agotada, presionada por la dirección y a cargo de equipos cansados, y solo 52% de los profesionales indica que su jefe lo anima a experimentar, justo cuando crecer exige probar nuevas formas de trabajo. En Estados Unidos, la brecha es también de percepción: 85% de los CEO considera que su organización se preocupa por sus colaboradores, frente a 46% de los colaboradores individuales.",
        "La eficiencia por sí sola no genera crecimiento. Sin capacidad disponible, sin motivación y sin jefaturas con margen para conducir a sus equipos, el esfuerzo aumenta, pero los resultados no lo acompañan."
      ]
    },
    articulo_en: {
      "bajada": "Organizations are investing in AI and cutting costs to grow, while their professionals take on more work, lose motivation and report to managers stretched to their limit.",
      "parrafos": [
        "Companies are seeking growth with teams that are facing that challenge with less energy. Korn Ferry's Workforce survey, based on more than 16,000 professionals across 11 markets, shows that workforce motivation fell 9 points in a single year, and only 61% now feel motivated. The report is titled \"Growing Nowhere\" precisely because of that gap between growth targets and the capacity of those who must deliver them.",
        "Workload is piling up on those who remain. 61% of professionals say they do the work of more than one role, because when a position is eliminated or \"replaced by AI,\" its tasks usually shift to the rest of the team. Korn Ferry warns that people accept temporary extra effort, but not a permanent one without recognition or clear direction. What begins as an adjustment ends in burnout and attrition.",
        "AI, which was supposed to ease that load, is not yet doing so. 63% say AI increases their efficiency, but only 52% feel adequately trained to use it. According to the report, for many professionals AI takes up time rather than saving it, because it is added on top of existing work. Without a redesign of work, the tool becomes one more task.",
        "For the business, the situation of managers is the critical point. More than half of managers report being exhausted, under pressure from leadership and in charge of tired teams, and only 52% of professionals say their manager encourages them to experiment, just when growth requires trying new ways of working. In the United States, the gap is also one of perception: 85% of CEOs believe their organization cares about its people, compared with 46% of individual contributors.",
        "Efficiency alone does not create growth. Without available capacity, motivation and managers with room to lead their teams, effort increases but results do not follow."
      ]
    },
    cita: {
      "original": "When managers burn out, you lose the glue that holds everything together.",
      "traduccion_es": "Cuando los jefes se agotan, se pierde el pegamento que mantiene todo unido.",
      "autor_es": "Roger Philby, líder global de Estrategia y Desempeño de Personas, Korn Ferry",
      "autor_en": "Roger Philby, Global Lead, People Strategy and Performance, Korn Ferry"
    },
    preguntas_es: [
      "¿Cómo se redistribuyeron las tareas de los puestos que se eliminaron o se automatizaron, y quién las asumió?",
      "¿Qué respaldo y qué margen de decisión reciben hoy las jefaturas que conducen equipos con alta carga?",
      "¿Qué explica la distancia entre la percepción de la alta dirección y la de los colaboradores sobre el cuidado de las personas?"
    ],
    preguntas_en: [
      "How were the tasks of eliminated or automated roles redistributed, and who took them on?",
      "What support and decision-making room do managers leading heavily loaded teams receive today?",
      "What explains the gap between senior leadership's and employees' perceptions of how the organization cares for its people?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-11-deloitte-genz",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Propuesta de valor al colaborador (EVP)",
    esEjemplo: false,
    publicado: "2026-11-02",
    fecha: "2026-05-13",
    anio: "2026",
    fuente: "Deloitte",
    estudio_es: "Encuesta Global Gen Z y Millennials 2026",
    estudio_en: "2026 Gen Z and Millennial Survey",
    link: "https://www.deloitte.com/content/dam/assets-shared/docs/campaigns/2026/2026-genz-millennial-survey.pdf",
    region_es: "Global (44 países, incluidos Norteamérica y Latinoamérica)",
    region_en: "Global (44 countries, including North America and Latin America)",
    hallazgo_es: "Solo 6% de la Gen Z y los millennials tiene el liderazgo como su principal meta profesional",
    hallazgo_en: "Only 6% of Gen Zs and millennials see leadership as their main career goal",
    dato_clave_es: "Solo 6% de la Gen Z y los millennials tiene el liderazgo como principal meta profesional, aunque 76% de la Gen Z aspira a llegar a la alta dirección en algún momento. Para las organizaciones, significa que la sucesión del liderazgo está en riesgo mientras los cargos de jefatura sigan asociados al estrés y la sobrecarga.",
    dato_clave_en: "Only 6% of Gen Zs and millennials name leadership as their main career goal, even though 76% of Gen Zs aspire to reach senior leadership at some point. For organizations, it means that leadership succession is at risk as long as management roles remain associated with stress and overload.",
    contexto_es: "Encuesta Global Gen Z y Millennials de Deloitte Global, decimoquinta edición. Encuesta en línea a 22,595 personas (14,384 de la Gen Z y 8,211 millennials) en 44 países de Norteamérica, Latinoamérica, Europa Occidental y del Este, Medio Oriente, África y Asia-Pacífico, complementada con entrevistas cualitativas. Trabajo de campo: del 24 de noviembre de 2025 al 15 de enero de 2026. Publicación: 13 de mayo de 2026.",
    contexto_en: "Deloitte Global's Gen Z and Millennial Survey, fifteenth edition. Online survey of 22,595 people (14,384 Gen Zs and 8,211 millennials) in 44 countries across North America, Latin America, Western and Eastern Europe, the Middle East, Africa and Asia-Pacific, complemented by qualitative interviews. Fieldwork: November 24, 2025 to January 15, 2026. Published: May 13, 2026.",
    puntos_es: [
      "**El liderazgo ha perdido atractivo como meta profesional.** Solo 6% de la Gen Z y los millennials lo tiene como su principal objetivo.",
      "**La estabilidad pesa más que la velocidad de ascenso.** 44% de la Gen Z y 45% de los millennials prefiere un progreso estable, mientras que 25% y 21%, respectivamente, busca ascensos rápidos.",
      "**El freno es el costo percibido del rol.** Las principales barreras para liderar son el estrés y el agotamiento (50% de la Gen Z y 49% de los millennials) y el exceso de responsabilidad (50% y 48%).",
      "**La ambición existe, con otras condiciones.** 76% de la Gen Z y 67% de los millennials aspira a ocupar un puesto de alta dirección en algún momento.",
      "**La IA ya es parte de su trabajo diario.** 74% la usa, frente a 57% de la Gen Z y 56% de los millennials el año anterior.",
      "**La adopción digital tiene un costo de bienestar.** 58% de la Gen Z y 54% de los millennials experimenta fatiga digital."
    ],
    puntos_en: [
      "**Leadership has lost appeal as a career goal.** Only 6% of Gen Zs and millennials name it as their main objective.",
      "**Stability matters more than speed of promotion.** 44% of Gen Zs and 45% of millennials prefer steady progress, while 25% and 21%, respectively, seek rapid promotions.",
      "**The obstacle is the perceived cost of the role.** The main barriers to leading are stress and burnout (50% of Gen Zs and 49% of millennials) and excessive responsibility (50% and 48%).",
      "**Ambition exists, on different terms.** 76% of Gen Zs and 67% of millennials aspire to a senior leadership role at some point.",
      "**AI is already part of their daily work.** 74% use it, up from 57% of Gen Zs and 56% of millennials the year before.",
      "**Digital adoption carries a well-being cost.** 58% of Gen Zs and 54% of millennials experience digital fatigue."
    ],
    articulo_es: {
      "bajada": "Las generaciones más jóvenes no rechazan el liderazgo, pero no están dispuestas a asumir el nivel de estrés que hoy asocian con ese rol.",
      "parrafos": [
        "El liderazgo ha perdido atractivo como meta profesional para las generaciones que deberán asumirlo. La decimoquinta encuesta anual de Deloitte a la Gen Z y los millennials, basada en 22,595 personas de 44 países, muestra que solo 6% tiene el liderazgo como su principal objetivo. En cambio, 44% de la Gen Z y 45% de los millennials prefiere un progreso estable antes que ascensos rápidos. El resultado modifica los supuestos sobre lo que motiva a los futuros líderes.",
        "La limitación no es la falta de ambición, sino el costo percibido del rol. La mitad de la Gen Z menciona el estrés y el agotamiento (50%) y el exceso de responsabilidad (50%) como barreras para liderar. Sin embargo, 76% de la Gen Z y 67% de los millennials aspira a llegar a la alta dirección en algún momento. La aspiración existe; lo que no convence es la forma en que hoy se ejerce el liderazgo.",
        "La tecnología agrega una presión adicional. 74% ya usa IA en su trabajo diario, frente a 57% de la Gen Z y 56% de los millennials el año anterior. Al mismo tiempo, 58% de la Gen Z y 54% de los millennials experimenta fatiga digital. Estas generaciones adoptan la tecnología con rapidez, pero también perciben su costo en bienestar.",
        "Para el negocio, lo que se juega es la sucesión del liderazgo. Si los puestos de jefatura siguen asociados a la sobrecarga, será más difícil atraer hacia ellos al talento joven más calificado. Además, la encuesta ubica el costo de vida como la principal preocupación por quinto año consecutivo, lo que explica el peso de la estabilidad en sus decisiones profesionales.",
        "El estudio retrata una generación que define sus propios términos de progreso. Para estos profesionales, crecer significa avanzar de forma sostenible, no a cualquier costo."
      ]
    },
    articulo_en: {
      "bajada": "Younger generations are not rejecting leadership, but they are not willing to take on the level of stress they now associate with the role.",
      "parrafos": [
        "Leadership has lost appeal as a career goal for the generations who will have to take it on. Deloitte's fifteenth annual survey of Gen Zs and millennials, based on 22,595 people in 44 countries, shows that only 6% name leadership as their main objective. By contrast, 44% of Gen Zs and 45% of millennials prefer steady progress over rapid promotions. The result changes assumptions about what motivates future leaders.",
        "The constraint is not a lack of ambition but the perceived cost of the role. Half of Gen Zs cite stress and burnout (50%) and excessive responsibility (50%) as barriers to leading. However, 76% of Gen Zs and 67% of millennials aspire to reach senior leadership at some point. The aspiration exists; what fails to convince is the way leadership is exercised today.",
        "Technology adds further pressure. 74% already use AI in their day-to-day work, up from 57% of Gen Zs and 56% of millennials the year before. At the same time, 58% of Gen Zs and 54% of millennials experience digital fatigue. These generations adopt technology quickly, but they also feel its cost to their well-being.",
        "For the business, leadership succession is what is at stake. If management roles remain associated with overload, it will be harder to attract the most qualified young talent to them. In addition, the survey ranks cost of living as the top concern for the fifth consecutive year, which explains the weight of stability in their career decisions.",
        "The study portrays a generation that sets its own terms of progress. For these professionals, growing means advancing sustainably, not at any cost."
      ]
    },
    cita: {
      "original": "Progress on Their Own Terms",
      "traduccion_es": "Progresar en sus propios términos",
      "autor_es": "Informe Deloitte 2026 Gen Z and Millennial Survey (subtítulo)",
      "autor_en": "Deloitte 2026 Gen Z and Millennial Survey report (subtitle)"
    },
    preguntas_es: [
      "¿Qué imagen del liderazgo transmite hoy la organización a quienes podrían asumir las próximas jefaturas?",
      "¿Qué cambios en el diseño del rol de jefatura reducirían la sobrecarga que hoy lo hace poco atractivo?",
      "¿Qué trayectorias de crecimiento estable o lateral ofrece la organización además del ascenso tradicional?"
    ],
    preguntas_en: [
      "What image of leadership does the organization currently convey to those who could take on future management roles?",
      "Which changes to the design of the manager role would reduce the overload that makes it unattractive today?",
      "Which steady or lateral growth paths does the organization offer beyond traditional promotion?"
    ],
    implicancia_es: null,
    implicancia_en: null,
    lecturaEstado: "pendiente",
    estado: "PUBLICADO",
  },
  {
    id: "h-2026-11-gallup-sogw",
    industria: null,
    tema: "liderazgo_cultura",
    subtema: "Liderazgo",
    esEjemplo: false,
    publicado: "2026-11-02",
    fecha: "2026-04-07",
    anio: "2026",
    fuente: "Gallup",
    estudio_es: "State of the Global Workplace 2026",
    estudio_en: "State of the Global Workplace 2026",
    link: "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx",
    region_es: "Global (más de 140 países y territorios, incluida América)",
    region_en: "Global (more than 140 countries and territories, including the Americas)",
    hallazgo_es: "Solo 20% de los empleados en el mundo está comprometido con su trabajo",
    hallazgo_en: "Only 20% of employees worldwide are engaged in their work",
    dato_clave_es: "20% de los empleados en el mundo está comprometido, es decir, psicológicamente involucrado con su trabajo y con su organización, y el compromiso de los jefes cayó de 31% a 22% desde 2022; Gallup estima el costo en unos 10 billones de dólares en productividad perdida, cerca de 9% del PBI mundial. Para las organizaciones, significa que el desgaste de quienes conducen equipos se ha convertido en un riesgo directo para la productividad.",
    dato_clave_en: "20% of employees worldwide are engaged, meaning psychologically involved in their work and their organization, and manager engagement fell from 31% to 22% since 2022; Gallup estimates the cost at about $10 trillion in lost productivity, roughly 9% of global GDP. For organizations, it means that the strain on those who lead teams has become a direct risk to productivity.",
    contexto_es: "State of the Global Workplace 2026, informe anual de Gallup. Se basa en 263,810 encuestados, de los cuales 141,444 tenían empleo, en más de 140 países y territorios; la serie histórica abarca de 2009 a 2025. Trabajo de campo: de enero a diciembre de 2025. Publicación: 7 de abril de 2026.",
    contexto_en: "State of the Global Workplace 2026, Gallup's annual report. It is based on 263,810 respondents, 141,444 of them employed, in more than 140 countries and territories; the trend series covers 2009 to 2025. Fieldwork: January to December 2025. Published: April 7, 2026.",
    puntos_es: [
      "**Solo 1 de cada 5 empleados en el mundo está comprometido.** 20% de los empleados está involucrado con su trabajo y con su organización, frente a un máximo de 23% en 2022.",
      "**La mayor caída se concentra en quienes conducen equipos.** El compromiso de los jefes bajó de 31% en 2022 a 22%, y de ellos depende en gran medida el compromiso de sus equipos.",
      "**La falta de compromiso tiene un costo macroeconómico.** Gallup lo estima en unos 10 billones de dólares en productividad perdida, cerca de 9% del PBI mundial.",
      "**El bienestar de los empleados se mantiene bajo.** Solo 34% de los empleados afirma estar prosperando en su vida, un punto más que el año anterior.",
      "**Las expectativas sobre el mercado laboral se deterioran.** En EE.UU. y Canadá, el optimismo sobre el mercado laboral cayó 10 puntos en 2025 y 23 puntos desde 2019.",
      "**El resultado no es inevitable.** En algunas organizaciones, el compromiso de los jefes cuadruplica el promedio mundial."
    ],
    puntos_en: [
      "**Only 1 in 5 employees worldwide is engaged.** 20% of employees are involved in their work and their organization, down from a peak of 23% in 2022.",
      "**The steepest drop is among those who lead teams.** Manager engagement fell from 31% in 2022 to 22%, and their teams' engagement largely depends on them.",
      "**Low engagement has a macroeconomic cost.** Gallup estimates it at about $10 trillion in lost productivity, roughly 9% of global GDP.",
      "**Employee well-being remains low.** Only 34% of employees say they are thriving in their lives, up one point from the year before.",
      "**Job market expectations are deteriorating.** In the U.S. and Canada, job market optimism fell 10 points in 2025 and 23 points since 2019.",
      "**The outcome is not inevitable.** In some organizations, manager engagement is four times the global average."
    ],
    articulo_es: {
      "bajada": "El compromiso laboral en el mundo sigue en descenso, y la caída más pronunciada se registra entre los jefes, de quienes depende en gran medida el compromiso de sus equipos.",
      "parrafos": [
        "El compromiso laboral en el mundo cayó a su nivel más bajo desde 2020. El informe State of the Global Workplace de Gallup, basado en más de 140,000 personas con empleo en más de 140 países y territorios, muestra que en 2025 solo 20% de los empleados estaba involucrado con su trabajo y con su organización. Gallup estima que esa falta de compromiso cuesta unos 10 billones de dólares en productividad perdida, cerca de 9% del PBI mundial. Es un desafío de gestión de personas con impacto económico global.",
        "La caída se concentra en los mandos medios. El compromiso de los jefes bajó a 22%, nueve puntos menos que en 2022, una caída mayor que la de los colaboradores individuales, que incluso registraron un leve repunte. Según Gallup, el compromiso de un equipo depende en gran medida de su jefe. Cuando quienes conducen equipos pierden el vínculo con su trabajo, el efecto se transmite a sus colaboradores.",
        "El bienestar personal y el vínculo con el trabajo siguen caminos distintos. 34% de los empleados afirma estar prosperando en su vida, un punto más que el año anterior. En cambio, en Estados Unidos y Canadá el optimismo sobre el mercado laboral cayó 10 puntos en 2025 y 23 puntos desde 2019. Las personas pueden sentirse bien con su vida y, a la vez, menos vinculadas con su trabajo y menos seguras de sus opciones.",
        "Para el negocio, el desafío es atravesar procesos de cambio con equipos que mantengan su compromiso. Gallup señala que ninguna región del mundo aumentó su compromiso en el último año. No obstante, en algunas organizaciones el compromiso de los jefes cuadruplica el promedio mundial, lo que demuestra que el resultado depende de decisiones de gestión.",
        "El compromiso no se construye con programas aislados, sino a través de quienes lideran a diario. Por ello, el desgaste de las jefaturas repercute en toda la organización."
      ]
    },
    articulo_en: {
      "bajada": "Global employee engagement continues to decline, and the steepest drop is among managers, on whom their teams' engagement largely depends.",
      "parrafos": [
        "Global employee engagement fell to its lowest level since 2020. Gallup's State of the Global Workplace report, based on more than 140,000 employed people in more than 140 countries and territories, shows that in 2025 only 20% of employees were involved in their work and their organization. Gallup estimates that this lack of engagement costs about $10 trillion in lost productivity, roughly 9% of global GDP. It is a people management challenge with a global economic impact.",
        "The decline is concentrated in middle management. Manager engagement fell to 22%, nine points lower than in 2022, a steeper decline than among individual contributors, who even saw a slight rebound. According to Gallup, a team's engagement depends largely on its manager. When those who lead teams lose their connection to their work, the effect carries over to their teams.",
        "Personal well-being and connection to work are following different paths. 34% of employees say they are thriving in their lives, up one point from the year before. By contrast, in the United States and Canada, job market optimism fell 10 points in 2025 and 23 points since 2019. People can feel good about their lives and, at the same time, less connected to their work and less confident about their options.",
        "For the business, the challenge is to navigate change with teams that remain engaged. Gallup notes that no region of the world increased engagement in the past year. Nevertheless, in some organizations manager engagement is four times the global average, which shows that the outcome depends on management decisions.",
        "Engagement is built not through isolated programs but through those who lead every day. Manager burnout therefore affects the entire organization."
      ]
    },
    cita: {
      "original": "No region of the world increased engagement in the past year.",
      "traduccion_es": "Ninguna región del mundo aumentó su compromiso en el último año.",
      "autor_es": "Informe State of the Global Workplace 2026, Gallup",
      "autor_en": "State of the Global Workplace 2026 report, Gallup"
    },
    preguntas_es: [
      "¿Qué instancia de la organización mide y gestiona hoy el compromiso de las jefaturas?",
      "¿Qué señales indican que la pérdida de compromiso de los mandos medios ya está llegando a sus equipos?",
      "¿Qué carga y qué respaldo tienen los mandos medios a quienes se pide comunicar y sostener los cambios?"
    ],
    preguntas_en: [
      "Which body in the organization currently measures and manages managers' engagement?",
      "What signals show that middle managers' declining engagement is already reaching their teams?",
      "What workload and support do the middle managers asked to communicate and sustain change have?"
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
    rol_es: "Fundadora, consultora de RR.HH. y coach ejecutiva · Fue su líder directa en Accenture",
    rol_en: "Founder, HR Consultant & Executive Coach · Managed Desirée directly at Accenture",
    original: "en",
    texto_es: "Fui su líder directa en Accenture, y rápidamente se convirtió en una de las personas en las que más confiaba para el trabajo con clientes.\n\nAprende rápido: es de las personas que hacen preguntas precisas y oportunas, y que vuelven con soluciones reales en lugar de limitarse a seguir instrucciones. Confiaba en ella lo suficiente como para que me reemplazara en llamadas con clientes; dominaba el material y se adaptaba a lo que cada momento requería.\n\nDesiree también fue un gran aporte para el equipo de consultoría. Cuando encontrábamos obstáculos, trabajaba con sus colegas para resolver problemas y hacer avanzar el trabajo, no solo en su propio frente, sino en el de todo el equipo.\n\nDesiree aporta adaptabilidad, criterio agudo y un compromiso genuino con hacer lo correcto por el cliente y por el equipo. Cualquier organización tendría suerte de contar con ella.",
    texto_en: "I managed Desiree directly at Accenture, and she quickly became one of the people I trusted most on client work.\n\nShe is a fast learner, the kind who asks sharp, well-timed questions and comes back with real solutions instead of just following along. I trusted her enough to have her step in for me on client calls; she knew the material cold and adapted to whatever the moment needed.\n\nDesiree was also great to have on the broader consulting team. When we hit roadblocks, she worked well with colleagues to problem-solve and push things forward, not just for her own workstream but for the team's.\n\nDesiree brings adaptability, sharp judgment, and genuine investment in doing right by the client and the team. Any organization would be lucky to have her.",
  },
  {
    nombre: "Vishnu Rao",
    rol_es: "Head of Enterprise Platforms, Novartis Patient Support · Trabajaron juntos desde empresas distintas",
    rol_en: "Head of Enterprise Platforms, Novartis Patient Support · Worked together from different companies",
    original: "en",
    texto_es: "Tuve la oportunidad de trabajar de cerca con Desi en iniciativas de contenido y comunicación para nuestra plataforma de nueva generación. Hizo un excelente trabajo al traducir conceptos complejos de producto y de experiencia en piezas visuales y videos atractivos, que ayudaron a comunicar nuestra visión y a impulsar esfuerzos más amplios de transformación y gestión del cambio.\n\nDesi es reflexiva, colaborativa, muy receptiva y una gran comunicadora. Entiende a su audiencia, gestiona extremadamente bien la relación con los distintos grupos de interés y convierte las ideas en historias convincentes. Disfruté mucho trabajar con ella y la recomendaría con gusto.",
    texto_en: "I had the opportunity to work closely with Desi on content and communication initiatives supporting our next-generation platform. She did an excellent job translating complex product and experience concepts into engaging visuals and videos that helped communicate our vision and support broader transformation and change-management efforts.\n\nDesi is thoughtful, collaborative, highly responsive, and a strong communicator. She understands her audience, manages stakeholder relationships extremely well, and consistently turns ideas into compelling stories. I really enjoyed working with her and would gladly recommend her.",
  },
  {
    nombre: "Diego Florez Hernandez",
    rol_es: "Insights y Knowledge Management · Trabajaron juntos en APOYO Comunicación, en equipos distintos",
    rol_en: "Insights & Knowledge Management · Worked together at APOYO Comunicación, on different teams",
    original: "en",
    texto_es: "Tuve el gusto de trabajar junto a Desiree en APOYO Comunicación, donde ella formaba parte del equipo de Cultura y Comunicación Interna y yo trabajaba en Insights. Colaboramos en varios proyectos de diagnóstico y estrategia para clientes de distintos sectores.\n\nLo que más destacaba de Desi era su excepcional atención al detalle y su capacidad para liderar proyectos con eficacia, aun teniendo relativamente poca experiencia en ese momento: siempre tuvo la sabiduría de buscar la orientación de quienes confiaban en su trabajo. A eso se sumaba un don natural para crear ambientes de trabajo cordiales y de confianza, que hacían notablemente más llevadero el trabajo bajo presión para todo el equipo.\n\nEstoy seguro de que llevará esa misma combinación de rigor y calidez a cualquier equipo al que se sume, y la recomiendo sin dudarlo.",
    texto_en: "I had the pleasure of working alongside Desiree at APOYO Comunicación, where she was part of the Culture and Internal Communication team while I worked within Insights, collaborating on several projects supporting diagnostics and strategy needs for clients across a range of sectors.\n\nWhat stood out most about Desi was her exceptional attention to detail and her ability to lead projects effectively despite having relatively limited experience at the time — she consistently showed the wisdom to seek guidance from those who trusted her work — combined with a natural gift for creating friendly, trust-filled work environments that made working under pressure noticeably easier for everyone on the team.\n\nI'm confident she'd bring that same combination of rigor and warmth to any team she joins, and I recommend her without hesitation.",
  },
  {
    nombre: "Katherine Furze",
    rol_es: "Analista senior de Aprendizaje y Desarrollo · Fue su líder directa",
    rol_en: "Senior Learning & Development Analyst · Managed Desirée directly",
    original: "es",
    texto_es: "Tuve la oportunidad de trabajar con Desiree en un proyecto importante y de alta complejidad, en el que brindó soporte desde Change Management y Comunicaciones a un proceso de adquisición.\n\nDesiree se destacó especialmente por sus habilidades en comunicación estratégica y corporativa. Lideró planes de comunicación para distintos públicos, adaptando mensajes y canales según las necesidades de cada audiencia. Además, participó en el desarrollo de estrategias de comunicación, la coordinación de reuniones de entendimiento y la creación de materiales de capacitación claros, relevantes y orientados a facilitar la adopción del cambio.\n\nCuenta con una gran capacidad para transformar información compleja en mensajes accesibles, organizar contenidos y comunicar de manera efectiva con diferentes grupos de interés. Su criterio, atención al detalle y capacidad para trabajar colaborativamente le permiten desarrollar comunicaciones consistentes y alineadas con los objetivos del proyecto.\n\nDesiree es una profesional comprometida, proactiva y creativa, siempre dispuesta a aportar ideas y colaborar con el equipo.",
    texto_en: "I had the opportunity to work with Desiree on an important, highly complex project, in which she provided Change Management and Communications support for an acquisition process.\n\nDesiree stood out especially for her strategic and corporate communication skills. She led communication plans for different audiences, adapting messages and channels to the needs of each one. She also took part in developing communication strategies, coordinating alignment meetings and creating clear, relevant training materials designed to support the adoption of change.\n\nShe has a great ability to turn complex information into accessible messages, organize content and communicate effectively with different stakeholder groups. Her judgment, attention to detail and ability to work collaboratively allow her to develop communications that are consistent and aligned with the project's goals.\n\nDesiree is a committed, proactive and creative professional, always ready to contribute ideas and collaborate with the team.",
  },
  {
    nombre: "Valeria Martínez Pereyra",
    rol_es: "Compañera de equipo en un proyecto de transformación organizacional",
    rol_en: "Teammate on an organizational transformation project",
    original: "es",
    texto_es: "Rápidamente encontré en ella equipo, colaboración, profesionalismo y una gran capacidad de análisis del cliente.",
    texto_en: "I quickly found in her teamwork, collaboration, professionalism and a great ability to analyze the client.",
  },
  {
    nombre: "Ines Weiss",
    rol_es: "Senior Analyst, Accenture · Formó parte de su equipo",
    rol_en: "Senior Analyst, Accenture · Reported to Desirée directly",
    original: "es",
    texto_es: "Tuve el placer de trabajar con Desiree como mi People Lead en Accenture, y fue una experiencia sumamente enriquecedora tanto a nivel profesional como humano. Siempre se destacó por su profesionalismo, empatía y compromiso, acompañándome de manera cercana y brindándome herramientas, confianza y oportunidades para seguir creciendo en mi carrera. Su capacidad para liderar, escuchar y potenciar a las personas hace que trabajar con ella sea realmente un placer. Sin dudas, es de esas profesionales que dejan una huella muy positiva en los equipos y en las personas con las que trabajan.",
    texto_en: "I had the pleasure of working with Desiree as my People Lead at Accenture, and it was an extremely enriching experience, both professionally and personally. She always stood out for her professionalism, empathy and commitment, supporting me closely and giving me the tools, confidence and opportunities to keep growing in my career. Her ability to lead, listen to and empower people makes working with her a real pleasure. Without a doubt, she is one of those professionals who leave a very positive mark on the teams and the people they work with.",
  },
];
