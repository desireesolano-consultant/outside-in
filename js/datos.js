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
    hallazgo_es: "La demanda de personal en las cadenas de suministro de EE.UU. crecerá 19% hacia 2035, mientras la fuerza laboral disponible solo aumentará 3.2%",
    hallazgo_en: "Demand for workers in US supply chains will grow 19% by 2035, while the available labor force will expand by only 3.2%",
    dato_clave_es: "Entre 2026 y 2035, la demanda en ocupaciones clave de la cadena de suministro sumará 1.34 millones de puestos, mientras la fuerza laboral crecerá en apenas unos 221,000 trabajadores. La brecha, de casi 1.1 millones de puestos, es estructural y no se cerrará solo con contratación.",
    dato_clave_en: "Between 2026 and 2035, demand in core supply chain occupations will add 1.34 million roles, while the labor force will grow by only about 221,000 workers. The gap of nearly 1.1 million roles is structural and will not be closed through hiring alone.",
    contexto_es: "Proyección de Accenture elaborada con un modelo propio de planificación de escenarios, que vincula el crecimiento de las cadenas de suministro de EE.UU. con los roles y tareas que se requerirán entre 2026 y 2035.",
    contexto_en: "Accenture projection built on a proprietary scenario-planning model that links the growth of US supply chains to the roles and tasks that will be required between 2026 and 2035.",
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
      "bajada": "La demanda de personal en las cadenas de suministro de EE.UU. superará con amplitud la oferta disponible, y Accenture sostiene que esa brecha ya no puede cerrarse solo con contratación.",
      "parrafos": [
        "En su estudio Turning the supply chain talent shortage into strength, Accenture proyecta para las cadenas de suministro de EE.UU. una escasez de personal que la contratación no alcanzará a cubrir. De acuerdo con su modelo de escenarios, entre 2026 y 2035 la demanda en ocupaciones clave crecerá 19%, mientras la fuerza laboral solo aumentará 3.2%. Esa diferencia equivale a casi 1.1 millones de puestos. En consecuencia, el hallazgo cuestiona la respuesta habitual ante una operación más compleja: sumar personas.",
        "En cifras absolutas, la demanda sumaría 1.34 millones de puestos y la fuerza laboral, apenas unos 221,000 trabajadores. La consultora subraya que no se trata de un problema cíclico que se resolverá cuando la economía se desacelere. Por el contrario, las mismas fuerzas que expanden las cadenas, como más nodos, más compromisos con clientes y más regulación, también elevan la coordinación que exige cada rol. En conjunto, estas cifras describen una brecha estructural: faltan personas y, además, cada puesto se vuelve más exigente.",
        "Sin embargo, la tecnología por sí sola tampoco resuelve el déficit. En algunos casos, hasta 48% del trabajo rutinario podría automatizarse por completo, aunque solo cuando varias tecnologías operan en conjunto. Además, el modelo muestra que, al combinar tecnología con un rediseño deliberado de roles, el crecimiento de la plantilla pasa de +18.7% a cerca de -3.0% en el periodo. Por ello, el factor decisivo no es cuánta tecnología se incorpora, sino cómo se rediseña el trabajo a su alrededor.",
        "Para las organizaciones, el desafío es de planificación conjunta. Accenture propone tres prioridades: anticipar las necesidades de talento, rediseñar el trabajo conforme avanza la automatización y desarrollar habilidades de manera continua. Esa planificación no puede recaer solo en Recursos Humanos: el líder de la cadena de suministro define el trabajo y el de Recursos Humanos prepara a las personas para realizarlo. A su vez, los equipos necesitan entender cómo cambiará su trabajo y en qué tareas su criterio seguirá siendo indispensable.",
        "El informe sitúa en el rediseño del trabajo el punto en que se gana o se pierde la confianza de las personas. La reconversión profesional solo escala cuando los equipos perciben que les abre una trayectoria real. Así, la escasez de talento resulta tanto un desafío de confianza como de números."
      ]
    },
    articulo_en: {
      "bajada": "Demand for supply chain workers in the US will far outstrip the available supply, and Accenture argues that the gap can no longer be closed through hiring alone.",
      "parrafos": [
        "In its study Turning the supply chain talent shortage into strength, Accenture projects a labor shortfall in US supply chains that hiring will not be able to cover. According to its scenario model, demand in core occupations will grow 19% between 2026 and 2035, while the labor force will expand by only 3.2%. That difference amounts to nearly 1.1 million roles. As a result, the finding challenges the usual response to a more complex operation: adding people.",
        "In absolute terms, demand would add 1.34 million roles, while the labor force would add only about 221,000 workers. The firm stresses that this is not a cyclical problem that will ease when the economy slows. On the contrary, the same forces that expand supply chains, such as more nodes, more customer commitments and more regulation, also increase the coordination each role requires. Taken together, these figures describe a structural gap: people are missing and, in addition, each role is becoming more demanding.",
        "Technology alone, however, does not close the shortfall. In some cases, up to 48% of routine work could be fully automated, but only when several technologies operate together. The model also shows that, when technology is combined with deliberate role redesign, workforce growth compresses from +18.7% to about -3.0% over the period. The decisive factor, therefore, is not how much technology is added but how work is redesigned around it.",
        "For organizations, the challenge is one of joint planning. Accenture proposes three priorities: build talent foresight, redesign work as automation advances and develop skills continuously. That planning cannot rest with Human Resources alone: the supply chain leader defines the work, and the HR leader prepares people to do it. Teams, in turn, need to understand how their work will change and where their judgment will remain essential.",
        "The report places work redesign at the point where people's trust is won or lost. Reskilling only scales when teams see that it opens a genuine career path. The talent shortage is therefore as much a challenge of trust as it is of numbers."
      ]
    },
    cita: {
      "original": "Technology adoption is inevitable. Workforce redesign is the choice",
      "traduccion_es": "La adopción de tecnología es inevitable. El rediseño de la fuerza laboral es la decisión",
      "autor_es": "Accenture",
      "autor_en": "Accenture"
    },
    preguntas_es: [
      "¿Quién lidera la planificación del talento cuando la tecnología cambia las tareas más rápido que los perfiles de puesto?",
      "¿Qué tan claro tienen hoy los equipos de operaciones en qué se convertirá su rol?",
      "¿Qué indicadores permiten seguir el rediseño del trabajo, además de la adopción de tecnología?"
    ],
    preguntas_en: [
      "Who leads workforce planning when technology changes tasks faster than job descriptions?",
      "How clear are operations teams today about what their role will become?",
      "Which indicators track the redesign of work, beyond technology adoption?"
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
    hallazgo_es: "Solo 11% de las organizaciones ya opera agentes de IA en su trabajo diario y 35% no tiene una estrategia formal para adoptarlos",
    hallazgo_en: "Only 11% of organizations already run AI agents in their day-to-day work, and 35% have no formal strategy to adopt them",
    dato_clave_es: "Solo 11% de las organizaciones opera agentes de IA, es decir, sistemas que ejecutan tareas por su cuenta, en producción. La mayoría sigue en etapas previas: 30% explora, 38% prueba pilotos y 42% todavía elabora su hoja de ruta.",
    dato_clave_en: "Only 11% of organizations run AI agents, meaning systems that carry out tasks on their own, in production. Most are still at earlier stages: 30% are exploring, 38% are piloting and 42% are still building their roadmap.",
    contexto_es: "Capítulo del informe Tech Trends 2026 de Deloitte. Combina datos de la encuesta Emerging Technology Trends 2025 de la firma con entrevistas a ejecutivos de empresas como HPE, Dell, Toyota, Mapfre y Moderna.",
    contexto_en: "Chapter of Deloitte's Tech Trends 2026 report. It combines data from the firm's 2025 Emerging Technology Trends survey with interviews with executives at companies such as HPE, Dell, Toyota, Mapfre and Moderna.",
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
      "bajada": "Muchas organizaciones prueban agentes de IA, pero pocas los tienen operando en el día a día, y Deloitte atribuye esa brecha al diseño del trabajo más que a la tecnología.",
      "parrafos": [
        "El informe Tech Trends 2026 de Deloitte muestra que la IA agéntica, es decir, los sistemas que ejecutan tareas por su cuenta, avanza mucho más lento de lo que sugiere el entusiasmo del mercado. De acuerdo con la encuesta de tecnologías emergentes de la firma, 38% de las organizaciones se encuentra en fase piloto y apenas 11% opera agentes en producción. Además, 35% no tiene una estrategia formal. Esta distancia entre experimentar y operar es la principal señal del informe.",
        "Para Deloitte, el obstáculo rara vez es la tecnología. Las empresas intentan automatizar procesos diseñados por y para personas, en lugar de replantear cómo debería realizarse el trabajo. A ello se suman sistemas heredados que no fueron concebidos para agentes y datos difíciles de encontrar (48%) y de reutilizar (47%). Gartner, citado en el informe, anticipa incluso que más de 40% de los proyectos agénticos fracasará hacia 2027. En conjunto, estas cifras ubican el cuello de botella en los procesos y los datos, no en los agentes.",
        "Las organizaciones que sí avanzan revisan sus procesos de principio a fin. Toyota utiliza un agente para seguir la llegada de vehículos a los concesionarios, una tarea que antes exigía consultar entre 50 y 100 pantallas de sus sistemas centrales. En la aseguradora Mapfre, los agentes resuelven tareas administrativas de siniestros, mientras que toda comunicación sensible con un cliente pasa por una persona. Por lo tanto, avanzar no implica retirar a las personas del proceso, sino definir con precisión dónde deben intervenir.",
        "Para las organizaciones, el cambio alcanza la forma misma de organizar el trabajo. Gartner proyecta que en 2028 el 15% de las decisiones operativas del día a día se tomará de forma autónoma, frente a ninguna en 2024. Deloitte describe una fuerza laboral \"de silicio\" que requerirá prácticas similares a la gestión de personas: incorporación, evaluación de desempeño e incluso retiro. En esa línea, Moderna integró Recursos Humanos y Tecnología bajo un mismo liderazgo, y las personas asumen la supervisión y el gobierno de los agentes.",
        "Según el informe, la ventaja competitiva no dependerá de cuántos agentes despliegue una empresa, sino de la calidad con que diseñe la colaboración entre personas y agentes. La tecnología ya está disponible. En consecuencia, lo que falta en la mayoría de los casos es rediseñar el trabajo."
      ]
    },
    articulo_en: {
      "bajada": "Many organizations are testing AI agents, but few have them running day to day, and Deloitte attributes that gap to how work is designed rather than to the technology.",
      "parrafos": [
        "Deloitte's Tech Trends 2026 report shows that agentic AI, meaning systems that carry out tasks on their own, is advancing far more slowly than market enthusiasm suggests. According to the firm's emerging technology survey, 38% of organizations are at the pilot stage and only 11% run agents in production. In addition, 35% have no formal strategy. This distance between experimenting and operating is the report's central signal.",
        "For Deloitte, the obstacle is rarely the technology. Companies try to automate processes designed by and for people instead of rethinking how the work should be done. Added to this are legacy systems that were not built for agents, and data that is hard to find (48%) and to reuse (47%). Gartner, cited in the report, even expects more than 40% of agentic projects to fail by 2027. Together, these figures place the bottleneck in processes and data, not in the agents.",
        "The organizations that are making progress review their processes end to end. Toyota uses an agent to track vehicle arrivals at dealerships, a task that previously required checking 50 to 100 mainframe screens. At insurer Mapfre, agents handle administrative claims tasks, while every sensitive customer communication goes through a person. Progress, therefore, does not mean removing people from the process but defining precisely where they should step in.",
        "For organizations, the shift reaches the very way work is organized. Gartner projects that by 2028, 15% of day-to-day operational decisions will be made autonomously, compared with none in 2024. Deloitte describes a \"silicon-based\" workforce that will require practices similar to people management: onboarding, performance management and even retirement. Along these lines, Moderna brought Human Resources and Technology under a single leader, and people take on the oversight and governance of agents.",
        "According to the report, competitive advantage will not depend on how many agents a company deploys but on how well it designs collaboration between people and agents. The technology is already available. What is missing in most cases, therefore, is the redesign of work."
      ]
    },
    cita: {
      "original": "It's hybrid by design",
      "traduccion_es": "Es híbrido por diseño",
      "autor_es": "Maribel Solanas Gonzalez, directora global de datos de Mapfre, en el informe de Deloitte",
      "autor_en": "Maribel Solanas Gonzalez, group chief data officer at Mapfre, in Deloitte's report"
    },
    preguntas_es: [
      "¿Cómo se acompaña a los equipos cuando una parte de su trabajo pasa a un agente de IA?",
      "¿De qué manera se comunica con claridad qué decisiones siguen en manos de las personas?",
      "¿Qué capacidades necesita un líder para conducir equipos donde trabajan personas y agentes?"
    ],
    preguntas_en: [
      "How are teams supported when part of their work moves to an AI agent?",
      "How is it communicated clearly which decisions remain in people's hands?",
      "What capabilities does a leader need to manage teams where people and agents work together?"
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
    hallazgo_es: "62% de los inversionistas de largo plazo prefiere una empresa que a veces no alcanza las estimaciones de resultados, pero crea valor sólido a largo plazo",
    hallazgo_en: "62% of long-term investors prefer a company that occasionally misses earnings estimates but creates strong long-term value",
    dato_clave_es: "62% de los inversionistas prefiere incumplimientos ocasionales del consenso, es decir, de las estimaciones de resultados del mercado, si la empresa crea valor sostenido; solo 17% prioriza cumplirlo siempre. Para ellos, la credibilidad de la gerencia pesa más que un trimestre perfecto.",
    dato_clave_en: "62% of investors prefer occasional misses against consensus, meaning the market's earnings estimates, if the company creates sustained value; only 17% prioritize always meeting it. For them, management credibility weighs more than a perfect quarter.",
    contexto_es: "Encuesta global de McKinsey a 112 inversionistas de Norteamérica y Europa, en su mayoría de largo plazo, realizada entre el 20 de enero y el 9 de febrero de 2026.",
    contexto_en: "Global McKinsey survey of 112 investors in North America and Europe, most of them long-term, conducted between January 20 and February 9, 2026.",
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
      "bajada": "Una encuesta de McKinsey muestra que los inversionistas de largo plazo penalizan menos un resultado por debajo de lo esperado que la pérdida de credibilidad de la gerencia.",
      "parrafos": [
        "A inicios de 2026, McKinsey encuestó a 112 inversionistas de Norteamérica y Europa, en su mayoría de largo plazo. El hallazgo principal contradice una creencia muy arraigada: 62% prefiere una empresa que a veces no alcanza el consenso de resultados, pero que crea valor sólido a largo plazo. Solo 17% elige a la que cumple siempre. Por ello, el estudio pone en duda que cumplir cada trimestre sea lo que más valoran los inversionistas.",
        "Las respuestas revelan además una asimetría clara. Cuando una empresa supera las estimaciones de forma sistemática, solo 49% de los encuestados lo considera una buena señal, y una parte sospecha que la guía de resultados era conservadora. En cambio, cuando incumple de manera reiterada, 73% lo interpreta como un problema de transparencia o de control. En consecuencia, para estos inversionistas el patrón pesa más que la cifra de un trimestre.",
        "Esto no significa que el consenso pierda relevancia, ya que 59% sigue considerando importante o muy importante cumplirlo o superarlo. Investigaciones previas de McKinsey precisan que el precio de la acción cae tras un incumplimiento solo cuando los analistas también reducen sus proyecciones para los años siguientes. Incluso, en cerca de 40% de los casos el precio sube. Así, el resultado trimestral importa como señal de lo que viene, no como una evaluación aislada.",
        "Para las empresas, el tema gana peso porque los inversionistas cambiaron sus herramientas. 47% ya utiliza IA generativa con frecuencia en su análisis, lo que vuelve más visibles las inconsistencias entre un documento y otro. A la vez, casi nueve de cada diez piden más tiempo de preguntas, y para 86% la profundidad y el detalle de la información son lo que más distingue una buena comunicación. Por lo tanto, se valora una conversación con sustancia por encima de un guion pulido.",
        "Aunque el estudio se centra en la relación con inversionistas, describe un fenómeno más amplio: cómo se construye la credibilidad de un equipo directivo. Una estrategia explicada con claridad, las malas noticias comunicadas a tiempo y los compromisos verificables pesan más que un trimestre perfecto."
      ]
    },
    articulo_en: {
      "bajada": "A McKinsey survey shows that long-term investors penalize a below-expectation result less than they penalize a loss of management credibility.",
      "parrafos": [
        "In early 2026, McKinsey surveyed 112 investors in North America and Europe, most of them long-term. Its main finding contradicts a deep-rooted belief: 62% prefer a company that occasionally misses consensus but creates strong long-term value. Only 17% choose the company that always delivers. The study therefore challenges the idea that hitting every quarter is what investors value most.",
        "The answers also reveal a clear asymmetry. When a company consistently beats estimates, only 49% of respondents see it as a positive signal, and some suspect the guidance was conservative. By contrast, when it misses repeatedly, 73% interpret it as a problem of transparency or control. For these investors, the pattern therefore weighs more than any single quarter's figure.",
        "This does not mean consensus loses relevance, since 59% still consider meeting or beating it important or very important. Earlier McKinsey research specifies that share prices fall after a miss only when analysts also cut their forecasts for the following years. In about 40% of cases, the price actually rises. The quarterly result therefore matters as a signal of what lies ahead, not as a stand-alone test.",
        "For companies, the issue carries more weight because investors have changed their tools. 47% already use generative AI frequently in their analysis, which makes inconsistencies between documents more visible. At the same time, nearly nine in ten want more Q&A time, and for 86% depth and specificity of information are what most distinguish good communication. Substantive conversation is therefore valued above a polished script.",
        "Although the study focuses on investor relations, it describes a broader phenomenon: how a leadership team builds credibility. A clearly explained strategy, bad news communicated early and verifiable commitments carry more weight than a perfect quarter."
      ]
    },
    cita: {
      "original": "a market that uses consensus as a lens into management credibility",
      "traduccion_es": "un mercado que usa el consenso como una lente para evaluar la credibilidad de la gerencia",
      "autor_es": "McKinsey & Company",
      "autor_en": "McKinsey & Company"
    },
    preguntas_es: [
      "¿Qué historial de compromisos cumplidos tiene hoy el equipo directivo, dentro y fuera de la organización?",
      "¿Qué tan consistente es el relato de la empresa cuando la IA puede comparar cada mensaje con los anteriores?",
      "¿Cuánto espacio real para preguntas ofrecen los encuentros entre la dirección y los equipos?"
    ],
    preguntas_en: [
      "What track record of kept commitments does the leadership team have today, inside and outside the organization?",
      "How consistent is the company's narrative when AI can compare every message with the ones before it?",
      "How much real room for questions do meetings between leadership and teams provide?"
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
    hallazgo_es: "En EE.UU., el gasto de las familias crece más rápido que sus ingresos y su tasa de ahorro se mantiene en 3% o menos, un nivel históricamente inusual",
    hallazgo_en: "In the US, household spending is growing faster than income, and the saving rate has held at 3% or less, a historically unusual level",
    dato_clave_es: "En julio, el gasto de consumo creció 5.9% interanual frente a 4.5% del ingreso disponible: 1.4 puntos de diferencia que las familias cubren ahorrando menos. La tasa de ahorro está en 3% o menos desde abril de 2026, algo que solo había ocurrido en 41 de 807 meses con datos.",
    dato_clave_en: "In July, consumer spending grew 5.9% year over year versus 4.5% for disposable income: a 1.4-point difference that households cover by saving less. The saving rate has been at 3% or lower since April 2026, which had happened in only 41 of 807 months on record.",
    contexto_es: "Pronóstico económico trimestral de Deloitte para Estados Unidos, correspondiente al tercer trimestre de 2026 y basado principalmente en datos oficiales del gobierno de ese país.",
    contexto_en: "Deloitte's quarterly economic forecast for the United States for Q3 2026, based mainly on official US government data.",
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
      "bajada": "Las familias de EE.UU. siguen gastando a un ritmo mayor que el de sus ingresos, y Deloitte anticipa que el ajuste llegará por el lado del consumo.",
      "parrafos": [
        "El pronóstico económico de Deloitte para el tercer trimestre de 2026, basado sobre todo en datos oficiales, identifica una señal de alerta en el consumidor de EE.UU.: su gasto crece más rápido que sus ingresos. En julio, el gasto de consumo aumentó 5.9% interanual, frente a 4.5% del ingreso disponible y 3.5% de los salarios. Esta diferencia es relevante porque el consumo sostiene buena parte de la economía y hoy lo hace con un respaldo financiero cada vez menor.",
        "La brecha no es reciente, ya que el gasto supera a los ingresos desde junio de 2024 y este año se amplió. En consecuencia, la tasa de ahorro personal se mantiene en 3% o menos desde abril de 2026. Esa situación solo se había registrado en 41 de los 807 meses con datos, casi todos entre 2005 y 2008. En conjunto, estas cifras muestran que los hogares sostienen su nivel de gasto a costa de un ahorro cada vez menor.",
        "Deloitte aclara que este escenario no implica necesariamente una burbuja. La firma espera que el gasto vuelva a alinearse con los ingresos en los próximos trimestres y que el ajuste provenga del consumo. Esto se debe a que los salarios por hora se desaceleran y la demografía limita el crecimiento del empleo. Su proyección es que el consumo real crezca 2% en 2026 y 1.4% en 2027. Por lo tanto, el escenario central no es de quiebre, sino de desaceleración gradual.",
        "El entorno macroeconómico deja poco margen. Parte de la fortaleza de la economía proviene de la inversión en inteligencia artificial y del efecto riqueza generado por el alza de la bolsa. Además, la inflación sigue por encima de la meta, con un alza de 3.4% en el índice de precios PCE subyacente en agosto, y la Reserva Federal volvió a subir tasas en septiembre. En el escenario más pesimista de Deloitte, una corrección de 35% en la bolsa elevaría el desempleo a 7.2%. Con un ahorro tan reducido, los hogares quedan más expuestos si alguno de esos soportes se debilita.",
        "Para el consumo masivo, la señal es de cautela: el comprador que hoy sostiene las ventas gasta más de lo que gana, y Deloitte no considera sostenible ese ritmo. Aunque los datos corresponden a Estados Unidos, reflejan la situación del mercado de consumo más grande del mundo."
      ]
    },
    articulo_en: {
      "bajada": "US households are still spending faster than their income grows, and Deloitte expects the adjustment to come from consumption.",
      "parrafos": [
        "Deloitte's economic forecast for Q3 2026, based mainly on official data, identifies a warning sign in the US consumer: spending is growing faster than income. In July, consumer spending rose 5.9% year over year, compared with 4.5% for disposable income and 3.5% for wages. This difference is significant because consumption drives much of the economy, and today it does so with a shrinking financial cushion.",
        "The gap is not new, since spending has outpaced income since June 2024 and widened this year. As a result, the personal saving rate has stayed at 3% or lower since April 2026. That had occurred in only 41 of the 807 months on record, almost all of them between 2005 and 2008. Together, these figures show households sustaining their spending at the cost of ever lower savings.",
        "Deloitte clarifies that this scenario does not necessarily imply a bubble. The firm expects spending to realign with income in the coming quarters and the adjustment to come from consumption, because hourly wage growth is slowing and demographics limit job growth. It projects real consumer spending growth of 2% in 2026 and 1.4% in 2027. The central scenario is therefore not a break but a gradual slowdown.",
        "The macroeconomic environment leaves little room. Part of the economy's strength comes from investment in artificial intelligence and the wealth effect of rising stock prices. Inflation also remains above target, with core PCE prices up 3.4% in August, and the Federal Reserve raised rates again in September. In Deloitte's most pessimistic scenario, a 35% stock-market correction would push unemployment to 7.2%. With savings this low, households are more exposed if any of those supports weakens.",
        "For consumer goods, the signal is one of caution: the shopper sustaining sales today is spending more than they earn, and Deloitte does not consider that pace sustainable. Although the data is for the United States, it reflects conditions in the world's largest consumer market."
      ]
    },
    cita: {
      "original": "such low saving rates are unusual",
      "traduccion_es": "tasas de ahorro tan bajas son poco frecuentes",
      "autor_es": "Deloitte",
      "autor_en": "Deloitte"
    },
    preguntas_es: [
      "¿Qué ajustes requerirían los planes comerciales si el consumidor empieza a reducir su gasto en 2027?",
      "¿Cómo se prepara a los equipos para un cambio de ciclo después de un periodo de crecimiento?",
      "¿Qué categorías muestran mayor resistencia cuando el ahorro de las familias se encuentra en mínimos?"
    ],
    preguntas_en: [
      "What adjustments would commercial plans need if consumers start reducing their spending in 2027?",
      "How are teams prepared for a turn in the cycle after a period of growth?",
      "Which categories prove most resilient when household savings are at historic lows?"
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
    hallazgo_es: "94% de los consumidores toma su decisión final de compra en la tienda física, aunque antes haya investigado en canales digitales",
    hallazgo_en: "94% of consumers make their final purchase decision in a physical store, even after researching in digital channels",
    dato_clave_es: "94% de los consumidores cierra su decisión de compra en la tienda. Aunque las ventas físicas pasarían de 77% a 73% del total minorista entre 2025 y 2028, una pérdida de solo 4 puntos, la tienda seguirá siendo el canal dominante.",
    dato_clave_en: "94% of consumers finalize their purchase decision in store. Although physical sales would move from 77% to 73% of total retail between 2025 and 2028, a loss of only 4 points, the store will remain the dominant channel.",
    contexto_es: "Análisis de EY basado en su Future Consumer Index, una encuesta a más de 20,000 consumidores en 27 países, complementada con datos de Euromonitor y del EY AI Sentiment Index. Fue publicado en junio de 2025.",
    contexto_en: "EY analysis based on its Future Consumer Index, a survey of more than 20,000 consumers in 27 countries, complemented by Euromonitor data and the EY AI Sentiment Index. It was published in June 2025.",
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
        "El Future Consumer Index de EY, publicado en junio de 2025, encuestó a más de 20,000 consumidores en 27 países y concluyó que la tienda física sigue siendo el lugar donde se cierra la compra. 94% de los consumidores toma su decisión final en la tienda, después de explorar distintos canales. Este resultado contradice la idea, muy difundida, de que la tienda física está en camino de desaparecer.",
        "Otras cifras apuntan en la misma dirección. Según datos de Euromonitor citados por EY, la participación de las ventas físicas solo bajaría de 77% a 73% del total minorista entre 2025 y 2028, aunque el canal digital crezca más rápido. Además, 45% de los consumidores descubre marcas nuevas en la tienda. En conjunto, estos datos muestran que la tienda pierde terreno de forma gradual, pero conserva su papel en el descubrimiento y la decisión de compra.",
        "Sin embargo, no todas las tiendas cumplen la misma función. Para los productos esenciales, los consumidores siguen prefiriendo el supermercado por costumbre y confianza, mientras que en ropa, belleza y cuidado personal la compra combina canales digitales y físicos. Los consumidores más jóvenes buscan tiendas especializadas que ofrezcan descubrimiento y experiencia, y 60% del total ya utiliza IA para comprar, principalmente en atención al cliente. Por ello, la función de la tienda física depende de qué se compra y de quién compra.",
        "Para los minoristas, la consecuencia es exigir más de cada local. EY propone convertir la tienda en un espacio de experiencia y de servicios como salud, nutrición, asesoría, reparación, alquiler y reventa. Esta propuesta responde a un contexto en el que 72% de los consumidores intenta reparar antes que reemplazar. También sugiere usarla para publicidad en el punto de venta y como centro logístico. No obstante, la consultora advierte que el cliente debe otorgar a la marca la legitimidad para ofrecer esos servicios, lo que exige paciencia y alianzas.",
        "Aunque el análisis tiene más de un año, su planteamiento central sigue vigente. La tienda física no está desapareciendo; lo que se redefine es qué ofrece y cuánta confianza necesita para ofrecerlo."
      ]
    },
    articulo_en: {
      "bajada": "Sales are shifting to digital channels, but the purchase decision still happens in store, and EY proposes redefining the store's role rather than closing it.",
      "parrafos": [
        "EY's Future Consumer Index, published in June 2025, surveyed more than 20,000 consumers in 27 countries and concluded that the physical store is still where purchases are closed. 94% of consumers make their final decision in store, after exploring different channels. This result contradicts the widespread idea that physical stores are on their way out.",
        "Other figures point in the same direction. According to Euromonitor data cited by EY, the physical share of retail sales would fall only from 77% to 73% between 2025 and 2028, even as digital grows faster. In addition, 45% of consumers discover new brands in store. Taken together, these figures show the store losing ground gradually while retaining its role in discovery and purchase decisions.",
        "However, not every store plays the same role. For essentials, consumers still prefer supermarkets out of habit and trust, while in clothing, beauty and personal care the purchase combines digital and physical channels. Younger consumers look for specialty stores that offer discovery and experience, and 60% of all consumers already use AI to shop, mainly for customer service. The role of the physical store therefore depends on what is being bought and who is buying it.",
        "For retailers, the consequence is to demand more from each location. EY proposes turning the store into a space for experience and services such as health, nutrition, advice, repair, rental and resale, at a time when 72% of consumers try to repair before replacing. It also suggests using stores for in-store advertising and as fulfillment hubs. The firm cautions, however, that customers must grant the brand the legitimacy to offer those services, which requires patience and partnerships.",
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
      "¿Cómo cambia el rol de los equipos de tienda cuando el local pasa de punto de venta a espacio de experiencia?",
      "¿Con qué indicadores se mide el aporte de una tienda que inspira compras concretadas en otro canal?",
      "¿Qué legitimidad tiene una marca ante sus clientes para ofrecerles servicios nuevos?"
    ],
    preguntas_en: [
      "How does the role of store teams change when the store shifts from point of sale to experience space?",
      "Which indicators measure the contribution of a store that inspires purchases completed in another channel?",
      "What legitimacy does a brand have with its customers to offer them new services?"
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
    hallazgo_es: "7 de cada 10 líderes de negocio y de recursos humanos tienen la velocidad y la agilidad como su principal estrategia competitiva para los próximos tres años",
    hallazgo_en: "7 in 10 business and HR leaders name speed and agility as their main competitive strategy for the next three years",
    dato_clave_es: "7 de cada 10 líderes apuestan por ganar velocidad y agilidad. Sin embargo, las empresas con un enfoque de IA centrado solo en la tecnología, 59% del total en una investigación complementaria, tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno que las que priorizan a las personas.",
    dato_clave_en: "7 in 10 leaders are betting on speed and agility. However, companies with a technology-only approach to AI, 59% of the total in complementary research, are 1.6 times more likely to miss their return expectations than those that prioritize people.",
    contexto_es: "Informe anual de Deloitte elaborado con Oxford Economics. Se basa en una encuesta a más de 9,000 líderes de negocio y de recursos humanos en 89 países, complementada con encuestas a colaboradores, gerentes y ejecutivos, y con más de 50 entrevistas.",
    contexto_en: "Annual Deloitte report produced with Oxford Economics. It is based on a survey of more than 9,000 business and HR leaders in 89 countries, complemented by surveys of workers, managers and executives and more than 50 interviews.",
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
      "bajada": "Las organizaciones buscan acelerar con la IA, pero Deloitte concluye que la ventaja competitiva no está en la tecnología, que cualquiera puede replicar, sino en las personas.",
      "parrafos": [
        "El informe 2026 Global Human Capital Trends de Deloitte, elaborado con Oxford Economics, encuestó a más de 9,000 líderes de negocio y de recursos humanos en 89 países. 7 de cada 10 afirman que su principal estrategia para los próximos tres años es ganar velocidad y agilidad. Según la firma, esa urgencia responde a que la IA comprime la curva clásica de crecimiento: acelera el ascenso y adelanta la etapa de estancamiento. Por ello, la agilidad se vuelve prioritaria, ya que el tiempo para aprovechar cada etapa se acorta.",
        "Sin embargo, la manera de ganar velocidad también cambió. La IA está al alcance de todas las empresas y, por lo tanto, es fácil de replicar. En una investigación complementaria con 100 altos ejecutivos, 59% aplica un enfoque de IA centrado en la tecnología. Esas empresas tienen 1.6 veces más probabilidad de no superar sus expectativas de retorno que las que priorizan a las personas. Aunque se trata de una muestra pequeña y de una asociación, no de una relación causal, el dato indica que apostar solo por la tecnología no asegura mejores resultados.",
        "Detrás de esas cifras aparece un costo menos visible, que Deloitte denomina \"deuda cultural\". Se trata de la desalineación y la desconfianza que se acumulan cuando la IA modifica el trabajo sin que se converse sobre qué cuenta como esfuerzo, quién responde por un resultado o qué es justo. De acuerdo con el informe, la mayoría de las organizaciones rara vez evalúa los efectos culturales de la IA. En consecuencia, el costo de la IA no se mide solo en inversión, sino también en confianza.",
        "Para las organizaciones, el informe plantea tres puntos de inflexión. El primero consiste en pasar de humano + máquina a humano x máquina, es decir, rediseñar el trabajo para que ambos se potencien entre sí. Los otros dos implican pasar de la eficiencia de costos a la creación de valor, y de los planes estáticos a una gestión dinámica de capacidades. A partir de ello, Deloitte formula siete preguntas prioritarias para la dirección, desde quién responde cuando personas e IA deciden juntas hasta cómo mantenerse vigentes.",
        "El informe cuestiona además la gestión del cambio tradicional, porque pocas organizaciones la ejecutan con eficacia y la capacitación clásica puede resultar demasiado lenta para el ritmo actual. Como alternativa, propone aprender en el propio flujo de trabajo, con la IA como apoyo. Su conclusión central es que la tecnología se puede replicar, mientras que la forma en que las personas trabajan con ella no."
      ]
    },
    articulo_en: {
      "bajada": "Organizations want to accelerate with AI, but Deloitte concludes that competitive advantage lies not in technology, which anyone can replicate, but in people.",
      "parrafos": [
        "Deloitte's 2026 Global Human Capital Trends report, produced with Oxford Economics, surveyed more than 9,000 business and HR leaders in 89 countries. 7 in 10 say their primary strategy for the next three years is to be fast and nimble. According to the firm, that urgency reflects how AI compresses the classic growth curve: it speeds up the climb and brings the plateau forward. Agility therefore becomes a priority, since the window to capture value at each stage is shrinking.",
        "However, the way to gain speed has also changed. AI is within reach of every company and is therefore easy to replicate. In complementary research with 100 C-suite executives, 59% take a technology-centered approach to AI, and those companies are 1.6 times more likely to miss their return expectations than those that prioritize people. Although this is a small sample and an association rather than a causal link, it indicates that betting on technology alone does not guarantee better results.",
        "Behind those figures lies a less visible cost, which Deloitte calls \"cultural debt.\" It refers to the misalignment and distrust that build up when AI changes work without conversations about what counts as effort, who is accountable for an outcome or what is fair. According to the report, most organizations rarely assess the cultural effects of AI. As a result, the cost of AI is measured not only in investment but also in trust.",
        "For organizations, the report sets out three tipping points. The first is moving from human + machine to human x machine, that is, redesigning work so that each strengthens the other. The other two involve moving from cost efficiency to value creation, and from static plans to dynamic management of capabilities. On that basis, Deloitte poses seven priority questions for leadership, from who is accountable when people and AI decide together to how to remain relevant.",
        "The report also questions traditional change management, because few organizations execute it effectively and conventional training may be too slow for today's pace. As an alternative, it proposes learning in the flow of work, with AI as support. Its central conclusion is that technology can be replicated, while the way people work with it cannot."
      ]
    },
    cita: {
      "original": "Technology—especially something as increasingly ubiquitous as AI—is replicable. People aren't.",
      "traduccion_es": "La tecnología, sobre todo algo tan omnipresente como la IA, se puede replicar. Las personas no.",
      "autor_es": "Deloitte",
      "autor_en": "Deloitte"
    },
    preguntas_es: [
      "¿Qué área evalúa hoy el impacto cultural de la IA dentro de la organización?",
      "¿Qué decisiones deben seguir en manos de las personas y quién lo define?",
      "¿Cómo se integra el aprendizaje en el trabajo diario cuando la capacitación tradicional no alcanza el ritmo del cambio?"
    ],
    preguntas_en: [
      "Which function assesses the cultural impact of AI within the organization today?",
      "Which decisions should remain in people's hands, and who defines that?",
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
    hallazgo_es: "En servicios financieros de EE.UU., 4 de cada 10 líderes afirman que sus colaboradores se sienten abrumados por el ritmo de cambio que impone la IA",
    hallazgo_en: "In US financial services, 4 in 10 leaders say their employees feel overwhelmed by the pace of change AI is driving",
    dato_clave_es: "40% de los ejecutivos percibe a sus equipos abrumados y 34% identifica la fatiga de cambio, el desgaste que produce encadenar cambios sin pausa, como una barrera para escalar la IA. Es una señal relevante en un sector donde 90% considera que debe moverse más rápido.",
    dato_clave_en: "40% of executives see their teams as overwhelmed, and 34% cite change fatigue, the strain of back-to-back change, as a barrier to scaling AI. It is a significant signal in a sector where 90% believe they must move faster.",
    contexto_es: "Encuesta de PwC a 1,004 ejecutivos con cargo de director o superior en firmas de servicios financieros de EE.UU. con ingresos de al menos US$500 millones, realizada del 12 al 22 de mayo de 2026. Abarca gestión de activos, banca, seguros y fondos de capital privado.",
    contexto_en: "PwC survey of 1,004 executives at director level or above at US financial services firms with at least US$500 million in revenue, conducted May 12–22, 2026. It covers asset management, banking, insurance and private equity.",
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
      "bajada": "Las firmas financieras de EE.UU. buscan acelerar la adopción de la IA, pero su principal limitación es interna: temor, cansancio y un uso que responde más a la obligación que a la convicción.",
      "parrafos": [
        "La 2026 Financial Services Workforce AI Survey de PwC, aplicada a más de mil ejecutivos de firmas financieras de EE.UU., identifica un freno interno a la adopción de la IA. 40% de los encuestados afirma que sus colaboradores se sienten abrumados por el ritmo del cambio. El dato es relevante porque surge en un sector que busca acelerar: 90% considera que las firmas deben habituarse a moverse rápido y 77% percibe que la suya no avanza al ritmo de la innovación. En consecuencia, la velocidad que se espera supera la capacidad de los equipos para acompañarla.",
        "Ese malestar se expresa de varias formas. 44% de los ejecutivos señala que sus colaboradores temen perder el empleo o que su rol cambie, y 43% que solo usan IA cuando se les exige. A ello se suma que 34% identifica la fatiga de cambio como una barrera para escalar la tecnología. En conjunto, estas cifras describen una adopción impulsada por la obligación más que por la convicción, lo que limita el alcance de la IA dentro de las firmas.",
        "Esos temores tienen fundamento. Casi ocho de cada diez ejecutivos esperan que su plantilla se reduzca al menos 20% en cinco años. No obstante, PwC advierte contra los recortes apresurados basados en modelos que podrían no cumplirse, y sostiene que cualquier reducción debe derivarse de la estrategia, no sustituirla. Por lo tanto, el temor de los colaboradores no responde a un problema de actitud, sino a una lectura razonable de lo que la propia dirección anticipa.",
        "Para las firmas, el cambio sin gestionar también compromete el control. Más de la mitad de los ejecutivos reconoce que sus colaboradores usan herramientas no aprobadas al menos de forma moderada, práctica conocida como IA \"en la sombra\". Además, 90% considera que esa práctica genera riesgo regulatorio. En un sector tan regulado, esta situación no solo afecta la productividad, sino que expone a la firma. Por ello, PwC propone un programa formal con reglas claras sobre quién usa qué herramientas y con qué fin.",
        "La primera recomendación de PwC es brindar tranquilidad a los equipos: aclarar expectativas, explicar cómo funcionará la organización con IA y asegurar que las personas cuenten con las habilidades necesarias para esa transición. Esta prioridad confirma que el cuello de botella no es solo tecnológico. En definitiva, la velocidad que buscan las firmas depende en buena medida de que sus equipos comprendan el rumbo."
      ]
    },
    articulo_en: {
      "bajada": "US financial firms want to accelerate AI adoption, but their main constraint is internal: fear, fatigue and use driven more by obligation than by conviction.",
      "parrafos": [
        "PwC's 2026 Financial Services Workforce AI Survey, which covered more than a thousand executives at US financial firms, identifies an internal brake on AI adoption. 40% of respondents say their employees feel overwhelmed by the pace of change. The finding is significant because it arises in a sector intent on speed: 90% believe firms need to get used to moving quickly, and 77% feel their own is not keeping pace with innovation. As a result, the expected speed exceeds teams' capacity to keep up.",
        "That unease takes several forms. 44% of executives say employees fear losing their jobs or seeing their roles change, and 43% that they use AI only when required. In addition, 34% cite change fatigue as a barrier to scaling the technology. Together, these figures describe adoption driven by obligation rather than conviction, which limits how far AI can extend within these firms.",
        "Those fears are well founded. Nearly eight in ten executives expect their workforce to shrink by at least 20% within five years. PwC nonetheless warns against hasty cuts based on models that may not materialize, and argues that any reduction should follow from strategy rather than replace it. Employees' concern therefore does not reflect an attitude problem but a reasonable reading of what leadership itself anticipates.",
        "For firms, unmanaged change also compromises control. More than half of executives acknowledge that employees use non-approved tools at least to a moderate extent, a practice known as \"shadow AI.\" In addition, 90% believe this practice creates regulatory risk. In such a heavily regulated sector, the situation affects not only productivity but also the firm's exposure; PwC therefore proposes a formal program with clear rules on who uses which tools and for what purpose.",
        "PwC's first recommendation is to reassure teams: clarify expectations, explain how the organization will operate with AI and ensure people have the skills needed for that transition. This priority confirms that the bottleneck is not only technological. Ultimately, the speed these firms seek depends largely on their teams understanding the direction."
      ]
    },
    cita: {
      "original": "Reassure your people.",
      "traduccion_es": "Tranquilizar a su gente.",
      "autor_es": "PwC, primera recomendación del estudio",
      "autor_en": "PwC, the study's first recommendation"
    },
    preguntas_es: [
      "¿En qué medida la inquietud de los equipos frente a la IA se explica por la ausencia de un relato claro sobre el futuro?",
      "¿Cómo se distingue la resistencia al cambio de la fatiga de cambio?",
      "¿Qué revela el uso de IA \"en la sombra\" sobre la confianza en las herramientas oficiales?"
    ],
    preguntas_en: [
      "To what extent is teams' unease about AI explained by the lack of a clear narrative about the future?",
      "How is resistance to change distinguished from change fatigue?",
      "What does the use of \"shadow AI\" reveal about trust in official tools?"
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
    hallazgo_es: "8 de cada 10 líderes de servicios financieros de EE.UU. esperan que la IA reduzca su plantilla al menos 20% en cinco años",
    hallazgo_en: "8 in 10 US financial services leaders expect AI to shrink their workforce by at least 20% within five years",
    dato_clave_es: "Casi 8 de cada 10 ejecutivos anticipan una plantilla al menos 20% más pequeña. Sin embargo, entre quienes ya proyectaron el impacto de la IA, solo la mitad analizó cómo rediseñar los procesos: el sector calcula el recorte antes de definir cómo será el trabajo.",
    dato_clave_en: "Nearly 8 in 10 executives expect a workforce at least 20% smaller. However, among those who have already modeled AI's impact, only half have analyzed how to redesign processes: the sector is calculating the cut before defining what the work will look like.",
    contexto_es: "Encuesta de PwC a 1,004 ejecutivos con cargo de director o superior en firmas de servicios financieros de EE.UU. con ingresos de al menos US$500 millones, realizada del 12 al 22 de mayo de 2026.",
    contexto_en: "PwC survey of 1,004 executives at director level or above at US financial services firms with at least US$500 million in revenue, conducted May 12–22, 2026.",
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
      "bajada": "Casi ocho de cada diez firmas financieras anticipan una plantilla mucho más reducida por efecto de la IA, pero pocas han definido cómo se organizará el trabajo después.",
      "parrafos": [
        "PwC aplicó en mayo su encuesta sobre IA y fuerza laboral en servicios financieros a más de mil ejecutivos de firmas de EE.UU. Sus resultados muestran que el sector ya da por hecho que la IA reducirá sus equipos. Casi ocho de cada diez ejecutivos esperan que su plantilla disminuya al menos 20% en cinco años. No se trata de un ajuste marginal, sino de un cambio de escala en toda la organización. Por ello, resulta clave saber si las firmas tienen definido cómo trabajarán después.",
        "Sin embargo, la planificación se limita al cálculo. 42% ya elaboró un modelo general del impacto de la IA en toda su organización, pero solo la mitad de ese grupo analizó cómo rediseñar procesos y flujos de trabajo. A ello se suma la principal barrera para escalar la IA: 41% menciona datos fragmentados o de baja calidad, lo que dificulta incluso conocer qué roles y habilidades existen hoy. En conjunto, estas cifras describen firmas que saben cuánto reducir, pero no cómo será el trabajo que permanece.",
        "Además, el impacto no se distribuye por igual. 30% de los ejecutivos identifica los puestos de entrada como los más vulnerables, seguidos por la gerencia media (26%). PwC advierte la consecuencia de largo plazo: menos puestos de entrada hoy implican una base más reducida de la cual surgirán los gerentes y líderes del futuro. En consecuencia, un recorte que hoy parece eficiente puede debilitar la formación de la próxima generación de líderes.",
        "Para las firmas, la IA ya está modificando el valor del talento. 91% está elevando la compensación de quienes tienen habilidades en IA, y 86% considera que, para muchos nuevos ingresos, la formación en IA vale más que un MBA. No obstante, el retorno aún no se materializa, ya que 77% reconoce que la mayoría de sus inversiones en IA todavía no genera un retorno medible. Así, las firmas invierten con fuerza en estas habilidades antes de contar con evidencia de su rendimiento.",
        "El estudio describe un avance a dos velocidades. Las firmas avanzan rápido en proyectar recortes y en pagar más por habilidades en IA, mientras que el rediseño del trabajo progresa con lentitud. De esa distancia dependerá que la reducción de plantilla genere eficiencia o solo una organización más pequeña."
      ]
    },
    articulo_en: {
      "bajada": "Nearly eight in ten financial firms expect a much smaller workforce as a result of AI, but few have defined how work will be organized afterwards.",
      "parrafos": [
        "PwC's survey on AI and the financial services workforce, conducted in May among more than a thousand executives at US firms, shows that the sector already takes for granted that AI will shrink its teams. Nearly eight in ten executives expect their workforce to decline by at least 20% within five years. This is not a marginal adjustment but a change in scale across the entire organization. It is therefore critical to know whether firms have defined how they will work afterwards.",
        "However, planning stops at the calculation. 42% have built a high-level model of AI's impact across their organization, but only half of that group have analyzed how to redesign processes and workflows. Added to this is the main barrier to scaling AI: 41% cite fragmented or low-quality data, which makes it difficult even to know which roles and skills exist today. Together, these figures describe firms that know how much to cut but not what the remaining work will look like.",
        "In addition, the impact is not evenly distributed. 30% of executives identify entry-level roles as the most vulnerable, followed by middle management (26%). PwC points to the long-term consequence: fewer entry-level roles today mean a smaller base from which future managers and leaders will emerge. As a result, a cut that seems efficient today may weaken the development of the next generation of leaders.",
        "For firms, AI is already changing the value of talent. 91% are raising pay for employees with AI skills, and 86% believe that, for many new hires, AI training is worth more than an MBA. The return, however, has yet to materialize, as 77% acknowledge that most of their AI investments are not yet delivering a measurable return. Firms are thus investing heavily in these skills before having evidence of their payoff.",
        "The study describes progress at two speeds. Firms are moving quickly to model cuts and pay more for AI skills, while the redesign of work is advancing slowly. Whether workforce reduction brings efficiency or simply a smaller organization will depend on that gap."
      ]
    },
    cita: {
      "original": "They're often planning for a smaller workforce—and hoping AI fills the gap.",
      "traduccion_es": "Con frecuencia planifican una fuerza laboral más pequeña y esperan que la IA cubra la brecha.",
      "autor_es": "PwC",
      "autor_en": "PwC"
    },
    preguntas_es: [
      "¿Cómo se formará la próxima generación de líderes si se reducen los puestos de entrada?",
      "¿Qué rol cumple la comunicación interna cuando una empresa ya proyectó recortes que aún no ha anunciado?",
      "¿Cómo cambia la cultura cuando se remuneran mejor habilidades que no todos los colaboradores tienen?"
    ],
    preguntas_en: [
      "How will the next generation of leaders be developed if entry-level roles are reduced?",
      "What role does internal communication play when a company has modeled cuts it has not yet announced?",
      "How does culture change when skills that not all employees have are paid more?"
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
    hallazgo_es: "En ciencias de la vida, 80% de las empresas que escalan la IA comunica a sus equipos cómo cambiarán los roles, frente a solo 7% de las que recién la exploran",
    hallazgo_en: "In life sciences, 80% of companies scaling AI tell their teams how roles will change, compared with only 7% of those just exploring it",
    dato_clave_es: "Comunicar el futuro de los roles es uno de los rasgos que más distingue a las empresas que logran escalar la IA: 80% lo hace, frente a 7% de las que exploran. Aun así, solo 20% de las más avanzadas convirtió esa visión en decisiones para toda la organización.",
    dato_clave_en: "Communicating the future of roles is one of the clearest traits of companies that manage to scale AI: 80% do so, compared with 7% of explorers. Even so, only 20% of the most advanced have turned that vision into organization-wide decisions.",
    contexto_es: "Gráfico de investigación de Bain & Company basado en su encuesta Scaling AI in Life Sciences, aplicada a 133 ejecutivos del sector en el cuarto trimestre de 2025.",
    contexto_en: "Bain & Company research chart based on its Scaling AI in Life Sciences survey of 133 industry executives, conducted in Q4 2025.",
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
      "bajada": "En ciencias de la vida, las empresas que escalan la IA explican a sus equipos cómo cambiarán sus roles, pero pocas han traducido esa visión en decisiones.",
      "parrafos": [
        "La investigación Life Sciences' AI Momentum Requires a Workforce Redesign, de Bain & Company, se basa en una encuesta a 133 ejecutivos del sector. El estudio identifica un rasgo común entre las empresas que logran escalar la IA: explican el futuro de los roles. 80% de las que escalan con éxito comunica una visión clara de cómo evolucionarán los roles, las habilidades y los equipos mixtos de personas e IA. Entre las que recién exploran la tecnología, solo 7% lo hace. Por ello, la comunicación sobre el futuro del trabajo aparece como una de las diferencias más marcadas entre ambos grupos.",
        "Esa visión va acompañada de decisiones sobre el talento. Más de la mitad de las empresas que escalan ya capacitó a sus equipos, contrató talento en IA o trasladó personas entre áreas, mientras que entre las que exploran 20% o menos hizo lo mismo. Frente a la escasez global de talento en IA, uno de los principales obstáculos para escalar, las más avanzadas no solo contratan, sino que también forman. En consecuencia, explicar el rumbo y movilizar a las personas avanzan de manera conjunta.",
        "Sin embargo, el estudio distingue entre tener una visión y ejecutarla. Solo 20% de las empresas que escalan convirtió esa visión en decisiones concretas para toda la organización. Bain concluye que la planificación estratégica de la fuerza laboral todavía se encuentra en una etapa temprana en toda la industria. Así, incluso entre las empresas más avanzadas, la comunicación del rumbo se adelanta a la organización del trabajo en torno a él.",
        "Para las organizaciones, el desafío es pasar de los pilotos a cambios a escala. En una investigación relacionada, Bain señala la falta de respaldo de la alta dirección como una de las razones por las que muchas empresas no logran escalar la IA. Para los colaboradores, la diferencia es concreta: trabajar en una empresa que explica cómo cambiará su rol o en una que aún no lo hace. En un sector con escasez de talento en IA, esa claridad incide directamente en quienes asumirán el trabajo nuevo.",
        "Aunque se trata de un hallazgo breve, parte de la serie de gráficos de investigación de Bain, sitúa en primer plano un aspecto que suele quedar al final de los planes. Las empresas que avanzan con la IA no solo cambian sistemas, sino que explican a sus equipos hacia dónde va su trabajo. El paso pendiente, incluso para ellas, es convertir ese relato en decisiones."
      ]
    },
    articulo_en: {
      "bajada": "In life sciences, companies scaling AI explain to their teams how their roles will change, but few have translated that vision into decisions.",
      "parrafos": [
        "Bain & Company's research Life Sciences' AI Momentum Requires a Workforce Redesign, based on a survey of 133 industry executives, identifies a trait shared by companies that manage to scale AI: they explain the future of roles. 80% of companies successfully scaling AI communicate a clear vision of how roles, skills and hybrid human-AI teams will evolve. Among those just exploring the technology, only 7% do. Communication about the future of work therefore stands out as one of the sharpest differences between the two groups.",
        "That vision is accompanied by decisions on talent. More than half of scaling companies have trained their teams, hired AI talent or moved people across functions, while among explorers 20% or fewer have done the same. Facing a global scarcity of AI talent, one of the main obstacles to scaling, the most advanced companies do not only hire; they also develop. As a result, explaining the direction and mobilizing people advance together.",
        "The study, however, distinguishes between having a vision and executing it. Only 20% of scaling companies have turned that vision into concrete organization-wide decisions. Bain concludes that strategic workforce planning is still at an early stage across the industry. Even among the most advanced companies, communication of the direction is thus ahead of organizing work around it.",
        "For organizations, the challenge is moving from pilots to change at scale. In related research, Bain points to a lack of senior leadership backing as one reason many companies fail to scale AI. For employees, the difference is concrete: working at a company that explains how their role will change or at one that does not yet. In a sector short on AI talent, that clarity directly affects those who will take on the new work.",
        "Although it is a brief finding, part of Bain's research chart series, it brings to the forefront an issue that usually comes last in plans. Companies advancing with AI do not only change systems; they also explain to their teams where their work is headed. The pending step, even for them, is turning that narrative into decisions."
      ]
    },
    cita: {
      "original": "AI scalers aren't waiting for new talent—they're building it.",
      "traduccion_es": "Las empresas que escalan la IA no esperan nuevo talento: lo están construyendo.",
      "autor_es": "Bain & Company",
      "autor_en": "Bain & Company"
    },
    preguntas_es: [
      "¿Qué tan clara es hoy, para los equipos, la forma en que la IA cambiará su rol?",
      "¿Qué dificulta el paso de una visión compartida a decisiones concretas sobre el trabajo?",
      "¿Qué área debe liderar ese relato: Recursos Humanos, Tecnología o el negocio?"
    ],
    preguntas_en: [
      "How clear is it to teams today how AI will change their roles?",
      "What makes it difficult to move from a shared vision to concrete decisions about work?",
      "Which function should lead that narrative: Human Resources, Technology or the business?"
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
    hallazgo_es: "82% de las empresas de consumo no ha rediseñado sus puestos en torno a la IA, pese a haber duplicado en un año el acceso de sus colaboradores a estas herramientas",
    hallazgo_en: "82% of consumer companies have not redesigned jobs around AI, despite doubling employee access to AI tools in a year",
    dato_clave_es: "El acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores, pero solo 25% de quienes tienen acceso la usa en más del 60% de su trabajo diario. Dar acceso no basta: sin rediseño de puestos, el uso intensivo sigue siendo minoritario.",
    dato_clave_en: "Access to approved AI tools rose from under 30% to around 60% of employees, but only 25% of those with access use it in more than 60% of their daily work. Access is not enough: without job redesign, intensive use remains a minority.",
    contexto_es: "Edición para la industria de consumo del informe State of AI in the Enterprise del Deloitte AI Institute (marzo de 2026). Se basa en 963 líderes de negocio y de tecnología de empresas de consumo, dentro de una encuesta a 3,235 ejecutivos en 24 países realizada entre agosto y septiembre de 2025.",
    contexto_en: "Consumer-industry edition of the Deloitte AI Institute's State of AI in the Enterprise report (March 2026). It is based on 963 business and IT leaders at consumer companies, within a survey of 3,235 executives in 24 countries conducted in August–September 2025.",
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
      "bajada": "Las empresas de consumo duplicaron en un año el acceso de sus colaboradores a herramientas de IA, pero casi ninguna modificó la forma en que se organiza el trabajo.",
      "parrafos": [
        "La edición para la industria de consumo del informe State of AI in the Enterprise de Deloitte, publicada en marzo, recoge la visión de 963 líderes de negocio y de tecnología. Su hallazgo central es que estas empresas entregan herramientas de IA sin rediseñar el trabajo que las rodea: 82% no ha rediseñado los puestos ni la naturaleza del trabajo en torno a la IA. Además, la acción más frecuente, adoptada por 54%, es formar a los colaboradores. Esta brecha es relevante porque capacitar en una herramienta no modifica, por sí solo, la organización del trabajo diario.",
        "La distancia se confirma en el uso. En un año, el acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores. Sin embargo, solo 25% de quienes tienen acceso utiliza la IA en más del 60% de su trabajo diario. En conjunto, estas cifras muestran que el acceso se duplicó, mientras que el uso intensivo sigue siendo minoritario.",
        "Esta brecha no responde a un rechazo generalizado. Entre los colaboradores no técnicos, 56% está abierto a explorar la IA, mientras que 19% la usa solo si se le exige y 5% desconfía de ella y la evita. El informe señala además que, aunque la dirección identifica la falta de habilidades como la principal barrera, menos de la mitad de las empresas hace ajustes importantes en su estrategia de talento. Por lo tanto, la distancia entre acceso y uso también refleja puestos que no han cambiado.",
        "Para las empresas, el impacto alcanza los puestos y las trayectorias profesionales. 82% espera que al menos 10% de sus puestos se automatice por completo en tres años, comenzando por tareas de entrada como el registro de datos o la atención básica al cliente. En consecuencia, los líderes entrevistados se preguntan qué ocurrirá con las carreras que comenzaban en esos puestos. Para quienes permanecen, el trabajo ya cambia: Deloitte describe a un responsable de categoría que ahora recibe recomendaciones de precio y surtido de la IA y debe decidir cuándo confiar en ellas.",
        "El informe retrata una industria que avanzó con rapidez en la entrega de herramientas y con lentitud en la transformación del trabajo. La tecnología ya está al alcance de muchos más colaboradores. Lo que falta es definir qué función cumple cada persona con ella."
      ]
    },
    articulo_en: {
      "bajada": "Consumer companies doubled employee access to AI tools in a year, but almost none changed the way work is organized.",
      "parrafos": [
        "The consumer-industry edition of Deloitte's State of AI in the Enterprise report, published in March, gathers the views of 963 business and technology leaders. Its central finding is that these companies are providing AI tools without redesigning the work around them: 82% have not redesigned jobs or the nature of work around AI. In addition, the most common action, taken by 54%, is training employees. This gap matters because training on a tool does not, by itself, change how daily work is organized.",
        "The gap is confirmed in usage. In one year, access to approved AI tools rose from under 30% to around 60% of employees. However, only 25% of those with access use AI in more than 60% of their daily work. Together, these figures show that access doubled while intensive use remains a minority.",
        "This gap does not stem from widespread rejection. Among non-technical employees, 56% are open to exploring AI, while 19% use it only if required and 5% distrust and avoid it. The report also notes that, although leadership identifies the lack of skills as the main barrier, fewer than half of companies are making significant changes to their talent strategy. The distance between access and use therefore also reflects jobs that have not changed.",
        "For companies, the impact extends to jobs and career paths. 82% expect at least 10% of their jobs to be fully automated within three years, starting with entry-level tasks such as data entry or basic customer support. As a result, the leaders interviewed are asking what will happen to careers that used to begin in those roles. For those who remain, work is already changing: Deloitte describes a category manager who now receives AI pricing and assortment recommendations and must decide when to trust them.",
        "The report portrays an industry that moved quickly to provide tools and slowly to transform work. The technology is now within reach of far more employees. What remains is to define the role each person plays with it."
      ]
    },
    cita: {
      "original": "We thought we were going to automate jobs. The truth is, you're not.",
      "traduccion_es": "Creíamos que íbamos a automatizar puestos de trabajo. La verdad es que no.",
      "autor_es": "Exvicepresidente de una organización global, entrevistado por Deloitte",
      "autor_en": "Former vice president at a major global organization, interviewed by Deloitte"
    },
    preguntas_es: [
      "¿Qué se requiere para pasar de dar acceso a la IA a transformar efectivamente la forma de trabajar?",
      "¿Dónde comenzarán las trayectorias profesionales si las tareas de entrada se automatizan?",
      "¿Cómo se acompaña al 19% de colaboradores que usa la IA solo porque se le exige?"
    ],
    preguntas_en: [
      "What is required to move from providing access to AI to effectively transforming the way work is done?",
      "Where will career paths begin if entry-level tasks are automated?",
      "How is the 19% of employees who use AI only because it is required supported?"
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
    hallazgo_es: "70% de los líderes de cambio afirma que su transformación más reciente no generó el valor de negocio previsto",
    hallazgo_en: "70% of change leaders say their most recent transformation fell short of its intended business value",
    dato_clave_es: "7 de cada 10 grandes transformaciones no generaron el valor esperado, y 83% de los líderes atribuye parte de esa brecha a una gestión del cambio deficiente. En cambio, cada US$1 invertido en gestión del cambio se asocia con una mediana de US$4 de valor realizado.",
    dato_clave_en: "7 in 10 large transformations fell short of their expected value, and 83% of leaders attribute part of that gap to poor change management. By contrast, every US$1 invested in change management is associated with a median of US$4 in realized value.",
    contexto_es: "Encuesta de Deloitte desarrollada con Workplace Intelligence y aplicada por Walr en junio y julio de 2026 a 1,000 líderes de gestión del cambio en roles ejecutivos (51% de alta dirección, 37% directores o vicepresidentes y 12% otros ejecutivos) de Estados Unidos, Reino Unido, Australia y Canadá. Todos habían liderado al menos una iniciativa de gran escala en los últimos dos años, con un presupuesto de US$1 millón o más o con alcance sobre varios equipos, funciones o unidades. La mediana del presupuesto de la iniciativa más reciente fue de US$10.6 millones.",
    contexto_en: "Deloitte survey developed with Workplace Intelligence and fielded by Walr in June and July 2026 among 1,000 change management leaders in executive roles (51% C-suite, 37% directors or vice presidents and 12% other executives) in the United States, United Kingdom, Australia and Canada. All had led at least one large-scale initiative in the past two years, with a budget of US$1 million or more or spanning multiple teams, functions or units. The median budget of the most recent initiative was US$10.6 million.",
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
      "bajada": "Deloitte asocia una buena gestión del cambio con mayor valor, pero la mayoría de las empresas la sigue tratando como un gasto mientras acumula transformaciones simultáneas.",
      "parrafos": [
        "El Estudio de Gestión del Cambio 2026 de Deloitte encuestó a 1,000 ejecutivos que lideran cambios de gran escala en Estados Unidos, Reino Unido, Australia y Canadá. Su principal hallazgo es que la mayoría de las grandes transformaciones no cumple lo previsto: 70% afirma que su iniciativa más reciente no generó el valor de negocio esperado. Además, 55% tuvo que reiniciarla o corregir su rumbo de manera significativa. Dado que se trata de iniciativas de gran escala, el resultado representa un costo relevante para el negocio.",
        "Los propios líderes encuentran en la gestión del cambio parte de la explicación, ya que 83% considera que una gestión deficiente contribuyó a que su última iniciativa no alcanzara sus metas. En contraste, la mediana del retorno de invertir en gestión del cambio fue de 4:1: cada US$1 se asocia con US$4 de valor realizado. A ello se suma que las empresas que más invierten tienen 1.7 veces más probabilidades de reportar una adopción superior a lo esperado. Aunque se trata de una asociación y no de una relación causal, las tres cifras apuntan en la misma dirección.",
        "Sin embargo, esa inversión no recibe el tratamiento que sugieren los datos. 60% de los encuestados indica que su empresa sigue considerando la gestión del cambio un costo de proyecto y no una capacidad permanente. Al mismo tiempo, 73% reporta fatiga de cambio entre sus colaboradores, y con cuatro o más iniciativas en paralelo la probabilidad de fatiga alta se multiplica por 6.4. Por lo tanto, el desafío no es solo cuánto se invierte en cada cambio, sino cuántos cambios recaen a la vez sobre los mismos equipos.",
        "Para las organizaciones, la IA intensifica esa presión. 61% percibe que la transformación con IA avanza más rápido de lo que sus colaboradores pueden asimilar, y 43% reconoce que desconoce cómo la IA los está afectando. Además, más de la mitad señala que nadie tiene autoridad para pausar una iniciativa por falta de capacidad. En consecuencia, el riesgo es una organización que acelera sin medir el desgaste que genera ni contar con un mecanismo para regularlo.",
        "El estudio identifica también el papel del ejemplo: cuando la dirección practica los comportamientos que solicita, aumenta la probabilidad de reportar un retorno claramente positivo y una adopción superior a lo esperado. Deloitte describe el reto como el paso de un cambio episódico a uno continuo, con sistemas de gestión que aún no se han adaptado. Su conclusión es que el cambio ya no es un proyecto con fecha de cierre, sino una condición permanente del trabajo."
      ]
    },
    articulo_en: {
      "bajada": "Deloitte links strong change management to greater value, yet most companies still treat it as an expense while accumulating simultaneous transformations.",
      "parrafos": [
        "Deloitte's 2026 Change Management Study surveyed 1,000 executives leading large-scale change in the United States, United Kingdom, Australia and Canada. Its main finding is that most large transformations do not deliver what was planned: 70% say their most recent initiative fell short of its intended business value. In addition, 55% had to restart it or significantly correct its course. Because these are large-scale initiatives, the result represents a significant cost to the business.",
        "Leaders themselves see change management as part of the explanation, since 83% believe poor change management contributed to their latest initiative falling short. By contrast, the median return on investing in change management was 4:1: every US$1 is associated with US$4 in realized value. In addition, the companies that invest most are 1.7 times more likely to report adoption above expectations. Although this is an association rather than a causal link, the three figures point in the same direction.",
        "That investment, however, is not treated the way the data suggest. 60% of respondents say their company still regards change management as a project cost rather than a permanent capability. At the same time, 73% report change fatigue among employees, and with four or more initiatives running in parallel, the likelihood of high fatigue rises 6.4 times. The challenge is therefore not only how much is invested in each change, but how many changes fall on the same teams at once.",
        "For organizations, AI intensifies that pressure. 61% feel AI transformation is moving faster than employees can absorb, and 43% acknowledge they do not know how AI is affecting them. In addition, more than half say no one has the authority to pause an initiative for lack of capacity. The risk, as a result, is an organization that accelerates without measuring the strain it creates or having a mechanism to regulate it.",
        "The study also identifies the role of example: when leadership practices the behaviors it asks for, organizations are more likely to report clearly positive ROI and adoption above expectations. Deloitte describes the challenge as a shift from episodic to continuous change, with management systems that have not yet adapted. Its conclusion is that change is no longer a project with an end date but a permanent condition of work."
      ]
    },
    cita: {
      "original": "treating change management as a durable, always-on capability, not a one-off project cost",
      "traduccion_es": "tratar la gestión del cambio como una capacidad duradera y siempre activa, no como un costo puntual de proyecto",
      "autor_es": "Deloitte, 2026 Change Management Study",
      "autor_en": "Deloitte, 2026 Change Management Study"
    },
    preguntas_es: [
      "¿Qué cambiaría en la organización si la gestión del cambio se presupuestara como una capacidad permanente y no como una partida de cada proyecto?",
      "¿Quién define cuántos cambios simultáneos pueden asumir los equipos y con qué información lo hace?",
      "¿Qué señales concretas reciben hoy los equipos de que la dirección practica el cambio que solicita?"
    ],
    preguntas_en: [
      "What would change in the organization if change management were budgeted as a permanent capability rather than a line item in each project?",
      "Who determines how many simultaneous changes teams can take on, and with what information?",
      "What concrete signals do teams receive today that leadership practices the change it asks for?"
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
    hallazgo_es: "85% de los colaboradores atraviesa al menos un cambio en su trabajo y 30% enfrenta entre 3 y 5 cambios de manera simultánea",
    hallazgo_en: "85% of employees are going through at least one change at work, and 30% are facing 3 to 5 changes simultaneously",
    dato_clave_es: "Para la gran mayoría, el cambio ya es una condición permanente: 85% vive al menos uno y 30% enfrenta entre 3 y 5 a la vez. Sin embargo, solo 18% considera que su organización sostiene \"extremadamente bien\" los resultados de esos cambios.",
    dato_clave_en: "For the vast majority, change is now a permanent condition: 85% are going through at least one and 30% face 3 to 5 at once. However, only 18% say their organization sustains the results of those changes \"extremely well\".",
    contexto_es: "Encuesta de Sia realizada a inicios de 2026 a 1,450 colaboradores y líderes: 30% colaboradores individuales, 23% jefes de equipo, 25% líderes sénior y 22% altos ejecutivos. Por región, 30% corresponde a Norteamérica, 30% a Asia-Pacífico, 26% a Europa, 8% a Reino Unido e Irlanda y 6% a Emiratos Árabes Unidos.",
    contexto_en: "Sia survey conducted in early 2026 among 1,450 employees and leaders: 30% individual contributors, 23% people managers, 25% senior leaders and 22% senior executives. By region, 30% are in North America, 30% in Asia-Pacific, 26% in Europe, 8% in the UK and Ireland and 6% in the UAE.",
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
        "The Change Report 2026 de Sia encuestó a 1,450 colaboradores y líderes de Norteamérica, Asia-Pacífico, Europa, Reino Unido e Irlanda y Emiratos Árabes Unidos. Su conclusión es que el cambio ya no es un evento, sino una condición permanente. 85% de los encuestados atraviesa al menos un cambio en su trabajo y 30% enfrenta entre 3 y 5 al mismo tiempo. La consultora describe este fenómeno como una \"colisión\": reorganizaciones, nuevas tecnologías, relevos de liderazgo e IA llegan de manera superpuesta. Por ello, el desafío no es cada cambio por separado, sino la forma en que interactúan.",
        "El diagnóstico central es que las organizaciones no fallan por falta de esfuerzo, sino de foco. 41% afirma que su empresa intenta \"hacer todo a la vez\" y 22% señala que hay iniciativas pausadas o retrasadas. Además, 21% indica que los equipos deben resolver por su cuenta qué priorizar cuando las demandas entran en conflicto. En ese contexto, los mandos medios deben convertir las decisiones de la dirección en tareas concretas para sus equipos, aun cuando ellos mismos no tienen claro el rumbo. En consecuencia, sin prioridades definidas, la carga de decidir recae en quienes tienen menos margen para hacerlo.",
        "Sin embargo, los colaboradores no aparecen como el principal obstáculo. 33% se define como entusiasta del cambio y 15% como impulsor, frente a 28% que se declara escéptico. Para Sia, la fuerza laboral puede estar más preparada que las organizaciones que conducen el cambio. Así, la limitación principal no reside en la disposición de las personas, sino en la forma en que se organiza la transformación.",
        "Para las organizaciones, el desafío es lograr que el cambio perdure. Solo 18% considera que su organización gestiona \"extremadamente bien\" los resultados y su sostenibilidad, y 35% opina que lo hace de forma apenas adecuada. Los sistemas se implementan con rapidez, pero el refuerzo, la capacitación, el retiro de procesos antiguos y la formación de hábitos quedan rezagados. A ello se suma la IA, ya que 23% vive una transformación importante vinculada a IA, datos o analítica. Además, las personas adoptan la tecnología antes de que la organización ajuste procesos, gobierno y roles.",
        "Según el informe, las demandas de los colaboradores son concretas: prioridades más claras, mayor apoyo de sus jefaturas, capacitación práctica y reglas transparentes, sobre todo frente a la IA. Sia describe una fuerza laboral dispuesta a avanzar dentro de organizaciones que aún no logran ordenar ni sostener lo que lanzan. En definitiva, el cuello de botella no está en iniciar cambios, sino en consolidarlos."
      ]
    },
    articulo_en: {
      "bajada": "Employees are willing to change, but they face several processes at once in organizations that launch transformations effectively and struggle to sustain them.",
      "parrafos": [
        "Sia's The Change Report 2026, based on a survey of 1,450 employees and leaders in North America, Asia-Pacific, Europe, the UK and Ireland and the UAE, concludes that change is no longer an event but a permanent condition. 85% of respondents are going through at least one change at work, and 30% are facing 3 to 5 at the same time. The firm describes this as a \"collision\": reorganizations, new technologies, leadership transitions and AI arrive on top of one another. The challenge, therefore, is not each change on its own but how they interact.",
        "The central diagnosis is that organizations fail not for lack of effort but for lack of focus. 41% say their company tries to \"do everything at once\", and 22% report that initiatives are paused or delayed. In addition, 21% say teams must work out priorities on their own when demands conflict. In that context, middle managers must turn leadership decisions into concrete tasks for their teams, even when they themselves lack clarity on the direction. As a result, without defined priorities, the burden of deciding falls on those with the least room to do so.",
        "Employees, however, do not emerge as the main obstacle. 33% identify as enthusiasts of change and 15% as champions, compared with 28% who describe themselves as skeptics. For Sia, the workforce may be better prepared than the organizations leading the change. The main constraint therefore lies not in people's willingness but in how the transformation is organized.",
        "For organizations, the challenge is making change last. Only 18% say their organization manages outcomes and sustainability \"extremely well\", and 35% say it does so only adequately. Systems are implemented quickly, but reinforcement, training, retiring legacy processes and building habits fall behind. AI adds to this, as 23% are experiencing a major transformation related to AI, data or analytics, and people adopt the technology before the organization adjusts processes, governance and roles.",
        "According to the report, employees' requests are concrete: clearer priorities, more support from their managers, practical training and transparent rules, especially regarding AI. Sia describes a workforce ready to move forward inside organizations that have yet to sequence and sustain what they launch. Ultimately, the bottleneck lies not in starting change but in consolidating it."
      ]
    },
    cita: {
      "original": "Launching transformation is easier than sustaining it.",
      "traduccion_es": "Lanzar una transformación es más fácil que sostenerla.",
      "autor_es": "Sia, The Change Report 2026",
      "autor_en": "Sia, The Change Report 2026"
    },
    preguntas_es: [
      "¿Qué área tiene hoy una visión completa de todos los cambios que enfrenta un mismo equipo de forma simultánea?",
      "¿Qué ocurre con una iniciativa después de su lanzamiento y quién asume la responsabilidad de sostenerla?",
      "¿Dónde se origina la resistencia cuando los colaboradores muestran más disposición al cambio que la propia organización?"
    ],
    preguntas_en: [
      "Which function today has a complete view of all the changes a single team is facing simultaneously?",
      "What happens to an initiative after launch, and who takes responsibility for sustaining it?",
      "Where does resistance originate when employees are more ready for change than the organization itself?"
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
    hallazgo_es: "76% de los colaboradores vivió al menos una transformación importante en el último año y, cuando la experiencia fue negativa, la confianza en el CEO cayó de 82% a 49%",
    hallazgo_en: "76% of employees went through at least one major transformation in the past year, and when the experience was negative, trust in the CEO fell from 82% to 49%",
    dato_clave_es: "La transformación ya es rutina para 76% de los colaboradores, pero su ejecución define la confianza: tras una experiencia negativa, la confianza en el CEO cae 33 puntos (de 82% a 49%) y en el jefe directo, 25 puntos (de 85% a 60%).",
    dato_clave_en: "Transformation is now routine for 76% of employees, but how it is carried out determines trust: after a negative experience, trust in the CEO falls 33 points (from 82% to 49%) and in the direct manager 25 points (from 85% to 60%).",
    contexto_es: "Encuesta en línea del Edelman Trust Institute a 10,018 colaboradores, unos 1,000 por país, en 10 mercados: Brasil, Canadá, China, Alemania, India, Japón, Sudáfrica, Emiratos Árabes Unidos, Reino Unido y EE.UU. El trabajo de campo se realizó del 14 al 31 de agosto de 2026. Es la quinta edición del reporte.",
    contexto_en: "Online survey by the Edelman Trust Institute of 10,018 employees, about 1,000 per country, in 10 markets: Brazil, Canada, China, Germany, India, Japan, South Africa, the UAE, the UK and the US. Fieldwork took place August 14–31, 2026. It is the fifth edition of the report.",
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
      "bajada": "El cambio ya forma parte habitual del trabajo, pero cuando la experiencia es negativa, la confianza en el CEO y en el jefe directo se reduce de forma pronunciada.",
      "parrafos": [
        "El 2026 Edelman Trust Barometer Special Report: Trust at Work encuestó a 10,018 colaboradores de 10 países. Su punto de partida es que la transformación ya es parte de la rutina: 76% vivió al menos una transformación importante en el último año. Sin embargo, el volumen de cambio no es el factor decisivo. Lo determinante es la experiencia de los colaboradores, porque de ella depende la confianza en quienes conducen el proceso.",
        "La evidencia se encuentra en la diferencia entre una experiencia positiva y una negativa. Cerca de un tercio de los encuestados describe su transformación como no positiva. En ese grupo, la confianza en el CEO baja de 82% a 49%, y en el jefe directo, de 85% a 60%. Según Edelman, la carga de trabajo es el factor que más incide en ese resultado. Por lo tanto, una transformación mal gestionada no solo genera cansancio, sino que reduce la credibilidad de toda la línea de mando.",
        "Además, los colaboradores no piden certezas, sino transparencia. 57% prefiere que el CEO comparta lo que sabe y también lo que aún no sabe con certeza, y 64% espera que reconozca lo que sienten los equipos. Asimismo, al preguntar en quién confiarían más para entender por qué ocurre un cambio, el jefe directo supera al CEO en los cinco tipos de transformación evaluados. En consecuencia, explicar el cambio no es tarea exclusiva de la alta dirección, ya que la voz más cercana es la que más influye.",
        "Para las organizaciones, el reto se amplía porque buena parte de este cambio proviene de la IA. Su integración fue la transformación más frecuente (53%), y tras una experiencia negativa la disposición a adoptar un mayor uso de IA cae de 40% a 18%. Todo ello ocurre cuando 77% de los colaboradores teme perder su empleo, una proporción mayor que en agosto de 2024. Así, una mala experiencia hoy puede dificultar la siguiente adopción tecnológica.",
        "Edelman concluye que la confianza no se pierde por el cambio en sí, sino por la forma en que se ejecuta y se comunica. Para la firma, la transformación debe gestionarse a escala humana. Esa responsabilidad es compartida entre el CEO y las jefaturas directas."
      ]
    },
    articulo_en: {
      "bajada": "Change is now a routine part of work, but when the experience is negative, trust in the CEO and in direct managers drops sharply.",
      "parrafos": [
        "The 2026 Edelman Trust Barometer Special Report: Trust at Work surveyed 10,018 employees in 10 countries. Its starting point is that transformation is now routine: 76% went through at least one major transformation in the past year. However, the volume of change is not the decisive factor. What matters is how employees experience it, because trust in those leading the process depends on that experience.",
        "The evidence lies in the difference between a positive and a negative experience. About a third of respondents describe their transformation as not positive. In that group, trust in the CEO falls from 82% to 49%, and in the direct manager from 85% to 60%. According to Edelman, workload is the factor that most influences that result. A poorly managed transformation therefore causes more than fatigue: it erodes credibility across the entire chain of command.",
        "Employees, moreover, are not asking for certainty but for transparency. 57% prefer that the CEO share what they know and also what they do not yet know for certain, and 64% expect the CEO to acknowledge what teams are feeling. Likewise, when asked whom they would most trust to explain why a change is happening, the direct manager ranks above the CEO across all five types of transformation assessed. As a result, explaining change is not a task for senior leadership alone, since the closest voice carries the most influence.",
        "For organizations, the challenge grows because much of this change comes from AI. AI integration was the most common transformation (53%), and after a negative experience, willingness to embrace greater AI use falls from 40% to 18%. All of this occurs while 77% of employees worry about losing their job, a higher share than in August 2024. A negative experience today can thus make the next technology adoption more difficult.",
        "Edelman concludes that trust is lost not because of change itself but because of how it is carried out and communicated. For the firm, transformation must be managed at a human scale. That responsibility is shared between the CEO and direct managers."
      ]
    },
    cita: {
      "original": "Employees are not opposed to change, but how they experience it matters.",
      "traduccion_es": "Los colaboradores no se oponen al cambio, pero importa cómo lo viven.",
      "autor_es": "Edelman, reporte Trust at Work 2026",
      "autor_en": "Edelman, 2026 Trust at Work report"
    },
    preguntas_es: [
      "¿En qué medida la desconfianza que deja una transformación se explica por la carga de trabajo que genera, más que por el cambio en sí?",
      "¿Cómo cambia la conversación cuando la dirección reconoce lo que todavía no sabe?",
      "¿Qué información y respaldo reciben los jefes directos para explicar el cambio, si son la voz más creíble para los equipos?"
    ],
    preguntas_en: [
      "To what extent is the distrust a transformation leaves explained by the workload it creates rather than by the change itself?",
      "How does the conversation change when leadership acknowledges what it does not yet know?",
      "What information and support do direct managers receive to explain change, if they are the most credible voice for teams?"
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
    hallazgo_es: "61% de las organizaciones no tiene un método formal para comunicar el cambio, aunque la gestión del cambio es la habilidad más demandada en comunicación interna",
    hallazgo_en: "61% of organizations have no formal method for communicating change, even though change management is the most sought-after skill in internal communication",
    dato_clave_es: "61% de las organizaciones comunica el cambio sin un enfoque formal, el principal riesgo que identifican los propios profesionales de comunicación interna y recursos humanos. A esto se suma que 87% considera la capacidad de los mandos medios un riesgo, pero solo 21% les entrega herramientas de apoyo de forma activa.",
    dato_clave_en: "61% of organizations communicate change without a formal approach, the top risk identified by internal communication and HR professionals themselves. In addition, 87% see managers' capability as a risk, but only 21% actively provide them with support tools.",
    contexto_es: "Informe anual de Gallagher, de la serie State of the Sector, basado en más de 1,300 profesionales de comunicación interna y recursos humanos de 40 países: 51% de Norteamérica, 36% de Reino Unido y Europa, 9% de Australia y Nueva Zelanda, 2% de Latinoamérica y 2% de Asia, África y Medio Oriente. Incluyó mesas redondas y grupos focales en septiembre y octubre de 2025, y una encuesta abierta en noviembre de 2025.",
    contexto_en: "Gallagher's annual report, part of the State of the Sector series, based on more than 1,300 internal communication and HR professionals in 40 countries: 51% North America, 36% UK and Europe, 9% Australia and New Zealand, 2% Latin America and 2% Asia, Africa and the Middle East. It included roundtables and focus groups in September and October 2025, and a survey open in November 2025.",
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
        "El Employee Communications Report de Gallagher, de la serie State of the Sector, consultó a más de 1,300 profesionales de comunicación interna y recursos humanos de 40 países. Su resultado central es una contradicción: la gestión del cambio es la habilidad que más desean desarrollar, pero 61% no tiene un enfoque formal para comunicarlo. El propio informe señala esta carencia como el principal riesgo de la función. Se trata de un vacío relevante, porque el cambio es el momento en que una organización más necesita explicar sus decisiones.",
        "La evidencia más clara se refiere a los mandos medios, que el informe describe como el eslabón débil o el canal que falta. 87% de los encuestados considera su capacidad un riesgo moderado o significativo. Aun así, solo 21% utiliza de forma activa kits de apoyo para ellos, y 37% no cuenta con ninguno. Además, muchas organizaciones los tratan como un canal uniforme, pese a sus diferencias de experiencia, confianza y carga de trabajo. En consecuencia, el problema está identificado, pero recibe muy pocas herramientas.",
        "Sin embargo, el riesgo no proviene solo de la falta de método, sino también del exceso de mensajes. 83% señala que la sobrecarga de información va en aumento. Según Gallagher, pasar de un volumen medio a uno alto de cambios eleva en 30% el riesgo de perder confianza en la dirección y en 24% el de agotamiento. Por lo tanto, el desafío no es comunicar más, sino comunicar mejor y con menos saturación.",
        "Para las organizaciones, el desafío alcanza el papel estratégico de la función. 73% quiere operar como una consultoría estratégica, pero solo 18% afirma lograrlo, y el modelo más común sigue siendo la difusión centralizada de mensajes. En IA se repite la brecha, ya que solo 36% considera que cuenta con las habilidades para usarla bien. No obstante, los equipos con gobierno, políticas y formación claros avanzan con mayor rapidez, lo que demuestra que la distancia puede reducirse.",
        "Estas cifras requieren una precisión: la muestra está formada por profesionales de comunicación interna y recursos humanos, no por colaboradores en general, y más de la mitad trabaja en Norteamérica. Se trata, por tanto, de una autoevaluación de la propia función. Lo que esa autoevaluación reconoce es que aún no cuenta con el método que el cambio exige."
      ]
    },
    articulo_en: {
      "bajada": "Communicating change is the top priority for internal communication teams, but most do so without a formal method and with managers who lack the tools.",
      "parrafos": [
        "Gallagher's Employee Communications Report, part of the State of the Sector series, surveyed more than 1,300 internal communication and HR professionals in 40 countries. Its central result is a contradiction: change management is the skill they most want to develop, yet 61% have no formal approach to communicating change. The report itself flags this gap as the function's main risk. It is a significant gap, because change is when an organization most needs to explain its decisions.",
        "The clearest evidence concerns managers, whom the report describes as the weak link or the missing channel. 87% of respondents consider their capability a moderate or significant risk. Even so, only 21% actively use support toolkits for them, and 37% have none. In addition, many organizations treat managers as a uniform channel, despite differences in their experience, confidence and workload. As a result, the problem is recognized but receives very few tools.",
        "The risk, however, comes not only from a lack of method but also from an excess of messages. 83% say information overload is increasing. According to Gallagher, moving from a medium to a high volume of change raises the risk of lost trust in leadership by 30% and the risk of burnout by 24%. The challenge, therefore, is not to communicate more but to communicate better and with less saturation.",
        "For organizations, the challenge extends to the function's strategic role. 73% want to operate as a strategic consultancy, but only 18% say they do, and the most common model is still centralized distribution of messages. The gap repeats with AI, as only 36% feel they have the skills to use it well. Nevertheless, teams with clear governance, policies and training move faster, which shows that the distance can be reduced.",
        "These figures require a clarification: the sample consists of internal communication and HR professionals, not employees in general, and more than half work in North America. It is therefore a self-assessment by the function itself. What that self-assessment acknowledges is that the function does not yet have the method that change requires."
      ]
    },
    cita: {
      "original": "Change is no longer a specialty; it's the job.",
      "traduccion_es": "El cambio ya no es una especialidad; es el trabajo.",
      "autor_es": "Gallagher, Employee Communications Report 2026",
      "autor_en": "Gallagher, Employee Communications Report 2026"
    },
    preguntas_es: [
      "¿Qué distingue un enfoque formal de comunicación del cambio de una sucesión de anuncios urgentes?",
      "¿Qué herramientas y respaldo necesitan los mandos medios para comunicar el cambio a sus equipos?",
      "¿En qué medida el volumen de mensajes sobre el cambio está reduciendo la atención que se busca captar?"
    ],
    preguntas_en: [
      "What distinguishes a formal change communication approach from a series of urgent announcements?",
      "What tools and support do managers need to communicate change to their teams?",
      "To what extent is the volume of change messages reducing the very attention it seeks to capture?"
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
    hallazgo_es: "64% de los trabajadores ya usa IA en su trabajo, 10 puntos más que hace un año, mientras su confianza en la gerencia cayó 7 puntos",
    hallazgo_en: "64% of workers now use AI in their jobs, up 10 points in a year, while their trust in management fell 7 points",
    dato_clave_es: "La adopción de IA crece con rapidez: 64% la usó en el trabajo en el último año y el uso diario de IA generativa subió 8 puntos, de 14% a 22%. Sin embargo, la confianza en la gerencia cayó 7 puntos y menos de la mitad confía en la alta dirección.",
    dato_clave_en: "AI adoption is growing fast: 64% used it at work in the past year, and daily GenAI use rose 8 points, from 14% to 22%. However, trust in management fell 7 points, and less than half trust top management.",
    contexto_es: "Encuesta global de PwC a 49,364 trabajadores de 48 países y regiones y 29 sectores, realizada en mayo y junio de 2026 y ponderada por género y edad. El estudio agrupa a los trabajadores en segmentos según la demanda de sus habilidades y el beneficio que obtienen de la IA.",
    contexto_en: "PwC global survey of 49,364 workers across 48 countries and regions and 29 sectors, conducted in May and June 2026 and weighted by gender and age. The study groups workers into segments based on demand for their skills and the benefit they obtain from AI.",
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
      "bajada": "Cada vez más trabajadores usan IA en su trabajo diario, mientras que la confianza en quienes conducen ese cambio avanza en la dirección contraria.",
      "parrafos": [
        "La encuesta Hopes and Fears 2026 de PwC, aplicada a casi 50,000 trabajadores de todo el mundo, muestra dos tendencias que se separan. Por un lado, 64% usó IA en el trabajo en el último año. Por otro, en el mismo periodo la confianza en la gerencia cayó 7 puntos. Esta divergencia es relevante porque la tecnología avanza más rápido que la relación con quienes deciden cómo utilizarla.",
        "La adopción, de hecho, se acelera. El uso de IA en el trabajo subió 10 puntos en un año, y el uso diario de IA generativa pasó de 14% a 22% de la fuerza laboral. En contraste, menos de la mitad de los trabajadores confía hoy en la alta dirección, y PwC advierte que solo una minoría obtiene beneficios reales de la IA. En conjunto, estos datos describen una adopción amplia que aún no se traduce en confianza ni en resultados para la mayoría.",
        "Las diferencias se hacen visibles al dividir a los trabajadores en segmentos. Un grupo reducido, que PwC denomina \"front-runners\" (quienes van a la delantera), cuenta con habilidades muy demandadas, usa mucho más la IA y confía mucho más en la alta dirección. En el otro extremo se ubica el \"engine room\", la base operativa que representa 56% de la fuerza laboral: solo 11% usa IA generativa a diario y apenas 33% confía en la alta dirección. Por lo tanto, la brecha de confianza es más profunda en la mayoría que sostiene la operación.",
        "Para las organizaciones, el desafío es la capacidad de los equipos para procesar e incorporar el cambio. Uno de cada cinco trabajadores afirma que le resulta difícil gestionarlo, y 18% no comprende sus razones. Esta dificultad no se limita a la base operativa, ya que también la reconocen altos ejecutivos y gerentes. Al mismo tiempo, la valoración del acceso a recursos de aprendizaje bajó de 59% a 51%. En consecuencia, las personas necesitan aprender más rápido justo cuando perciben menos apoyo para hacerlo.",
        "Para PwC, incorporar IA a modelos operativos heredados no es suficiente. El beneficio depende de que las personas comprendan el cambio, puedan aprender y confíen en quienes lo dirigen. Sin esa base, una mayor inversión en tecnología no se traduce en mejores resultados."
      ]
    },
    articulo_en: {
      "bajada": "More and more workers use AI in their daily work, while trust in those leading that change is moving in the opposite direction.",
      "parrafos": [
        "PwC's Hopes and Fears 2026 survey, covering nearly 50,000 workers worldwide, shows two trends pulling apart. On one hand, 64% used AI at work in the past year. On the other, trust in management fell 7 points over the same period. This divergence matters because the technology is advancing faster than the relationship with those who decide how to use it.",
        "Adoption is, in fact, accelerating. AI use at work rose 10 points in a year, and daily GenAI use went from 14% to 22% of the workforce. By contrast, less than half of workers now trust top management, and PwC warns that only a minority are obtaining real benefits from AI. Together, these data describe broad adoption that has not yet translated into trust or results for the majority.",
        "The differences become visible when workers are divided into segments. A small group that PwC calls \"front-runners\" has highly sought-after skills, uses AI far more and trusts top management far more. At the other end is the \"engine room\", the operational core that makes up 56% of the workforce: only 11% use GenAI daily and just 33% trust top management. The trust gap is therefore deepest among the majority who keep operations running.",
        "For organizations, the challenge is teams' capacity to process and incorporate change. One in five workers say they find it difficult to manage, and 18% do not understand the reasons for it. This difficulty is not limited to the operational core, as senior executives and managers acknowledge it too. At the same time, ratings of access to learning resources fell from 59% to 51%. As a result, people need to learn faster just when they perceive less support to do so.",
        "For PwC, adding AI to legacy operating models is not enough. The benefit depends on people understanding the change, being able to learn and trusting those who lead it. Without that foundation, greater investment in technology does not translate into better results."
      ]
    },
    cita: {
      "original": "Injecting AI into legacy operating models isn't enough.",
      "traduccion_es": "Incorporar IA a modelos operativos heredados no es suficiente.",
      "autor_es": "PwC, Global Workforce Hopes and Fears Survey 2026",
      "autor_en": "PwC, Global Workforce Hopes and Fears Survey 2026"
    },
    preguntas_es: [
      "¿Qué factores explican que la confianza en la dirección disminuya justo cuando más personas adoptan la IA?",
      "¿Qué proporción de los cambios que se comunican llega acompañada de sus razones, y no solo de instrucciones?",
      "¿Cómo se distribuyen los beneficios de la IA entre la base operativa y los segmentos que más la aprovechan?"
    ],
    preguntas_en: [
      "What factors explain why trust in leadership is declining just as more people adopt AI?",
      "What share of the changes being communicated comes with its reasons, not only with instructions?",
      "How are the benefits of AI distributed between the operational core and the segments that use it most?"
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
    hallazgo_es: "80% de los CEOs espera que la IA cambie más los roles y las habilidades que el número de personas, pero solo 15% reinvierte en sus equipos las ganancias de productividad",
    hallazgo_en: "80% of CEOs expect AI to change roles and skills more than headcount, yet only 15% reinvest productivity gains in their people",
    dato_clave_es: "Para 80% de los CEOs, la IA transformará sobre todo qué hacen las personas y con qué habilidades, más que cuántas se necesitan. Sin embargo, solo 15% destina las ganancias de productividad a desarrollar a sus equipos, frente a 48% que las orienta a innovación y transformación: más del triple.",
    dato_clave_en: "For 80% of CEOs, AI will mainly transform what people do and with which skills, rather than how many are needed. However, only 15% direct productivity gains toward developing their people, compared with 48% who channel them into innovation and transformation: more than three times as many.",
    contexto_es: "Encuesta en línea y anónima de EY-Parthenon a 1,200 CEOs de grandes empresas de 21 países, entre ellos Brasil, Canadá, México y EE.UU., y de cinco industrias, realizada en agosto y septiembre de 2026. 30% de las empresas factura más de US$5,000 millones al año.",
    contexto_en: "Anonymous online EY-Parthenon survey of 1,200 CEOs of large companies across 21 countries, including Brazil, Canada, Mexico and the US, and five industries, conducted in August and September 2026. 30% of the companies have annual revenue above US$5 billion.",
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
        "El CEO Outlook de EY-Parthenon, publicado en octubre de 2026, consultó a 1,200 CEOs de grandes empresas. Su hallazgo central es que 80% considera que, en tres años, la IA impactará más en los roles, las habilidades y la forma de trabajar que en el tamaño de la plantilla. Por ello, para los propios CEOs la cuestión de fondo no es cuántas personas se necesitarán, sino qué tareas realizarán y con qué capacidades.",
        "La evidencia muestra que las ganancias ya llegaron, pero el desarrollo del talento no avanza al mismo ritmo. 50% identifica a la IA como el principal motor de sus ganancias de productividad. Sin embargo, 47% admite que su organización no desarrolla habilidades al ritmo de la innovación en IA, y 72% prevé que la escasez de habilidades frenará el crecimiento más que el acceso a capital. En conjunto, estas cifras indican que el recurso escaso ya no sería el capital financiero, sino las capacidades de las personas.",
        "La brecha se hace evidente al revisar el destino de los recursos. Solo 15% afirma que las ganancias de productividad se reinvierten en el desarrollo de sus equipos, frente a 48% que las destina a innovación y transformación. Además, 23% reconoce que parte de lo obtenido con IA se diluye antes de reflejarse en el resultado final. En consecuencia, los CEOs identifican el cuello de botella, pero la inversión se orienta hacia otras prioridades.",
        "Para las empresas, el desafío es convertir la eficiencia en crecimiento, que según EY es el verdadero reto. La recapacitación ya figura entre las fuentes de productividad que mencionan los CEOs (33%). No obstante, si las habilidades no avanzan al ritmo de la tecnología, lo ganado con IA puede quedarse en ahorro y no convertirse en nuevas capacidades para las personas ni para el negocio.",
        "El estudio evidencia una distancia entre el diagnóstico y la decisión. Como plantea Andrea Guerzoni, vicepresidente global de EY-Parthenon, la productividad por sí sola no constituye una estrategia. El resultado depende del uso que se dé a esas ganancias."
      ]
    },
    articulo_en: {
      "bajada": "CEOs expect AI to change mainly roles and skills, yet very few reinvest in their people the gains that AI generates for them.",
      "parrafos": [
        "EY-Parthenon's CEO Outlook, published in October 2026, surveyed 1,200 CEOs of large companies. Its central finding is that 80% believe that within three years AI will affect roles, skills and ways of working more than workforce size. For CEOs themselves, the underlying question is therefore not how many people will be needed, but what tasks they will perform and with what capabilities.",
        "The evidence shows that the gains have arrived, but talent development is not keeping pace. 50% identify AI as the main driver of their productivity gains. However, 47% admit their organization is not developing skills at the pace of AI innovation, and 72% expect skills shortages to hold back growth more than access to capital. Together, these figures indicate that the scarce resource would no longer be financial capital but people's capabilities.",
        "The gap becomes clear when looking at where resources go. Only 15% say productivity gains are reinvested in developing their people, compared with 48% who direct them to innovation and transformation. In addition, 23% acknowledge that part of what is gained with AI is absorbed before it reaches the bottom line. As a result, CEOs identify the bottleneck, but investment is directed toward other priorities.",
        "For companies, the challenge is turning efficiency into growth, which EY describes as the real test. Reskilling already appears among the sources of productivity CEOs cite (33%). However, if skills do not advance at the pace of technology, AI gains may remain as savings rather than becoming new capabilities for people and for the business.",
        "The study reveals a gap between diagnosis and decision. As Andrea Guerzoni, EY-Parthenon Global Vice Chair, argues, productivity alone is not a strategy. The outcome depends on how those gains are used."
      ]
    },
    cita: {
      "original": "AI is creating real productivity gains, but productivity alone is not a strategy.",
      "traduccion_es": "La IA está generando ganancias reales de productividad, pero la productividad por sí sola no es una estrategia.",
      "autor_es": "Andrea Guerzoni, vicepresidente global de EY-Parthenon",
      "autor_en": "Andrea Guerzoni, EY-Parthenon Global Vice Chair"
    },
    preguntas_es: [
      "¿Qué implica para la organización que la IA cambie más los roles que el número de personas?",
      "¿Qué explica que las habilidades se reconozcan como cuello de botella y reciban tan poca inversión?",
      "¿Cómo se comunica a los equipos el destino de las ganancias de productividad que contribuyen a generar?"
    ],
    preguntas_en: [
      "What does it mean for the organization when AI changes roles more than headcount?",
      "What explains why skills are recognized as a bottleneck yet receive so little investment?",
      "How is the use of the productivity gains teams help create communicated to them?"
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
    hallazgo_es: "86% de los CEOs de grandes empresas de EE.UU. ya rediseña roles, trayectorias profesionales y equipos para que personas e IA trabajen juntas",
    hallazgo_en: "86% of CEOs at large US companies are already redesigning roles, career paths and teams so that people and AI work together",
    dato_clave_es: "86% de los CEOs reorganiza el trabajo en torno a la colaboración entre personas e IA, y 75% replantea las habilidades que exige para los puestos de entrada. El límite principal no es la tecnología: la brecha de habilidades (60%) encabeza sus desafíos de talento.",
    dato_clave_en: "86% of CEOs are reorganizing work around human-AI collaboration, and 75% are rethinking the skills they require for entry-level roles. The main constraint is not technology: the skills gap (60%) tops their talent challenges.",
    contexto_es: "Estudio anual de KPMG a 400 CEOs de empresas de EE.UU. con ingresos anuales superiores a US$500 millones, de las cuales más de un tercio supera los US$10,000 millones. Forma parte de una encuesta global a más de 1,300 CEOs de grandes empresas. Fue publicado el 15 de octubre de 2026, y KPMG no detalla las fechas del trabajo de campo.",
    contexto_en: "KPMG's annual study of 400 CEOs at US companies with annual revenues above US$500 million, more than a third of which exceed US$10 billion. It is part of a global survey of more than 1,300 CEOs at large companies. It was published on October 15, 2026, and KPMG does not disclose fieldwork dates.",
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
        "El 2026 US CEO Outlook de KPMG consultó a 400 CEOs de empresas de EE.UU. con ingresos anuales superiores a US$500 millones. Su hallazgo principal es que 86% está rediseñando roles, trayectorias profesionales y estructuras de equipo para reflejar la colaboración entre personas e IA. Este resultado es relevante porque muestra que la IA ya no se discute solo como tecnología, sino como una nueva forma de organizar el trabajo.",
        "Además, ese rediseño avanza en varias direcciones a la vez. 83% de los CEOs se enfoca en retener y reentrenar a su talento de alto potencial, y 79% en contratar perfiles con capacidades en IA y tecnología. Al mismo tiempo, 53% planea reducir su plantilla en algunas áreas. Por lo tanto, formar, contratar y reducir personal conviven en una misma agenda.",
        "El cambio más significativo se concentra en los puestos de entrada. 75% afirma que la IA lo llevó a replantear qué habilidades exige en esos puestos, y 81%, cómo forma a sus colaboradores. En consecuencia, la brecha de habilidades (60%) se ubica como su principal desafío de talento. Si se automatizan las tareas con las que antes aprendían los profesionales que recién se incorporan, la cuestión ya no es solo qué se enseña, sino dónde y cuándo se adquiere la experiencia.",
        "Para las empresas, el desafío es rediseñar sin contar aún con un retorno asegurado. 84% considera la IA una de sus principales prioridades de inversión para los próximos tres años. Sin embargo, solo 9% afirma que los agentes de IA, es decir, sistemas que ejecutan tareas por sí solos, ya transforman su organización. Además, 68% espera ver retorno de la IA recién en uno a tres años. Así, las decisiones sobre las personas se toman antes de que el valor esté demostrado.",
        "El estudio retrata una transición que todavía se está definiendo. Los CEOs ya decidieron cambiar la forma en que se organiza el trabajo, y el límite más claro no es la tecnología, sino las habilidades. Esa conclusión sitúa a las áreas de personas en el centro de la transformación."
      ]
    },
    articulo_en: {
      "bajada": "CEOs at large US companies are already redesigning work around AI, although neither the skills nor the return on that investment are yet secured.",
      "parrafos": [
        "KPMG's 2026 US CEO Outlook surveyed 400 CEOs at US companies with annual revenues above US$500 million. Its main finding is that 86% are redesigning roles, career paths and team structures to reflect human-AI collaboration. This result matters because it shows that AI is no longer discussed only as a technology but as a new way of organizing work.",
        "That redesign, moreover, is moving in several directions at once. 83% of CEOs are focusing on retaining and retraining high-potential talent, and 79% on hiring people with AI and technology capabilities. At the same time, 53% plan to reduce their workforce in some areas. Training, hiring and reducing headcount therefore sit on the same agenda.",
        "The most significant change is concentrated in entry-level roles. 75% say AI has led them to rethink the skills they require for those roles, and 81% how they train employees. As a result, the skills gap (60%) ranks as their top talent challenge. If the tasks through which new professionals used to learn are automated, the question is no longer only what is taught, but where and when experience is acquired.",
        "For companies, the challenge is redesigning without a guaranteed return. 84% consider AI one of their top investment priorities for the next three years. However, only 9% say AI agents, meaning systems that carry out tasks on their own, are already transforming their organization, and 68% expect AI returns only in one to three years. Decisions about people are thus being made before the value is proven.",
        "The study portrays a transition that is still taking shape. CEOs have already decided to change how work is organized, and the clearest limit is not technology but skills. That conclusion places people functions at the center of the transformation."
      ]
    },
    cita: {
      "original": "rethink how skills are developed, including what should be learned before entering the workforce",
      "traduccion_es": "repensar cómo se desarrollan las habilidades, incluido lo que debe aprenderse antes de entrar al mundo laboral",
      "autor_es": "Timothy J. Walsh, presidente y CEO de KPMG LLP",
      "autor_en": "Timothy J. Walsh, Chairman and CEO, KPMG LLP"
    },
    preguntas_es: [
      "¿Cómo adquirirán experiencia quienes se incorporan a la organización si cambian los puestos de entrada?",
      "¿Cómo se comunica un rediseño de roles cuando, al mismo tiempo, se planean reducciones en algunas áreas?",
      "¿Qué características tiene, en la práctica, una trayectoria profesional diseñada para la colaboración entre personas e IA?"
    ],
    preguntas_en: [
      "How will newcomers to the organization gain experience if entry-level roles change?",
      "How is a redesign of roles communicated when reductions are also planned in some areas?",
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
    hallazgo_es: "En Latinoamérica, 47% de los líderes considera la transformación del trabajo impulsada por IA su principal prioridad, aunque es el escenario para el que se declaran menos preparados",
    hallazgo_en: "In Latin America, 47% of leaders see AI-driven workforce transformation as their top priority, even though it is the scenario they feel least prepared for",
    dato_clave_es: "Para 47% de los líderes latinoamericanos, transformar el trabajo con IA es la prioridad número uno, pero es el escenario con menor preparación de los ocho evaluados. Además, la región percibe más riesgo que el promedio mundial: 49% frente a 40%, 9 puntos más.",
    dato_clave_en: "For 47% of Latin American leaders, transforming work with AI is the number one priority, yet it is the scenario with the lowest readiness of the eight evaluated. The region also perceives more risk than the global average: 49% versus 40%, 9 points higher.",
    contexto_es: "Capítulo latinoamericano de la encuesta global bienal de JLL sobre el futuro del trabajo, que se realiza desde 2011 entre responsables de decisiones sobre bienes raíces corporativos. La edición 2026 reúne a más de 2,200 participantes de 21 mercados, de los cuales 150 son de Latinoamérica, con representación de Argentina, Brasil, Colombia y México. Los datos se recogieron en el primer trimestre de 2026.",
    contexto_en: "Latin American chapter of JLL's biennial global Future of Work Survey, conducted since 2011 among corporate real estate decision-makers. The 2026 edition gathers more than 2,200 participants across 21 markets, 150 of them in Latin America, with representation from Argentina, Brazil, Colombia and Mexico. Data were collected in the first quarter of 2026.",
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
        "La encuesta global de JLL sobre el futuro del trabajo consulta a los responsables de bienes raíces corporativos, es decir, quienes deciden sobre oficinas y espacios de trabajo. En su capítulo latinoamericano, con 150 participantes de Argentina, Brasil, Colombia y México, 47% ubica la transformación de la fuerza laboral impulsada por IA como su principal prioridad estratégica. Sin embargo, de los ocho escenarios evaluados, es el que registra menor preparación. En consecuencia, la región ya definió su apuesta, pero aún no cuenta con la capacidad para ejecutarla.",
        "Además, la región se percibe más expuesta que el resto del mundo. 49% de los encuestados latinoamericanos considera un riesgo para su cartera la incertidumbre sobre el impacto de la IA en el espacio de trabajo, frente a 40% a nivel global. Esa incertidumbre abarca cuántas personas trabajarán dentro de unos años, en qué roles y en qué espacios. Por lo tanto, la falta de visibilidad sobre el futuro del trabajo pesa más en la región que en el promedio mundial.",
        "Las barreras regionales, a su vez, difieren de las globales. A nivel mundial, JLL identifica la escasez de habilidades en IA como la principal limitación. En Latinoamérica, en cambio, el primer obstáculo es la complejidad regulatoria y de cumplimiento (35%), seguida por la escasez de mano de obra técnica especializada (33%). Así, el ritmo del cambio en la región no depende solo de las decisiones internas de las empresas.",
        "Para las organizaciones, la IA ya no es solo un tema de tecnología o de recursos humanos, sino que forma parte de las decisiones sobre oficinas, carteras inmobiliarias e inversión. Además, las organizaciones no están en pausa: 65% prioriza el posicionamiento estratégico de largo plazo y 64% la inversión transformadora en sus inmuebles corporativos. En consecuencia, esos espacios se planifican cuando aún no está claro cómo será el trabajo que albergarán.",
        "El estudio retrata una región que busca avanzar con rapidez hacia un trabajo rediseñado por la IA. Lo que aún necesita es desarrollar las capacidades, en personas y en marcos regulatorios, para sostener ese cambio."
      ]
    },
    articulo_en: {
      "bajada": "In Latin America, transforming work with AI is leaders' top priority and, at the same time, the scenario they feel least prepared for.",
      "parrafos": [
        "JLL's global Future of Work Survey consults corporate real estate decision-makers, the people who decide on offices and workspaces. In its Latin American chapter, with 150 participants from Argentina, Brazil, Colombia and Mexico, 47% rank AI-driven workforce transformation as their top strategic priority. However, of the eight scenarios evaluated, it is the one with the lowest readiness. The region has therefore defined its bet but does not yet have the capacity to execute it.",
        "In addition, the region sees itself as more exposed than the rest of the world. 49% of Latin American respondents see uncertainty about AI's impact on the workplace as a risk to their portfolio, compared with 40% globally. That uncertainty covers how many people will be working a few years from now, in what roles and in which spaces. The lack of visibility into the future of work therefore weighs more heavily in the region than in the global average.",
        "The region's barriers, in turn, differ from global ones. Worldwide, JLL identifies the shortage of AI skills as the main constraint. In Latin America, by contrast, the top obstacle is regulatory and compliance complexity (35%), followed by a shortage of specialized technical labor (33%). The pace of change in the region thus depends on more than companies' internal decisions.",
        "For organizations, AI is no longer only a technology or HR issue; it is part of decisions about offices, real estate portfolios and investment. Organizations are also not on hold: 65% prioritize long-term strategic positioning and 64% transformational investment in their corporate real estate. As a result, these spaces are being planned while it is still unclear what kind of work they will house.",
        "The study portrays a region seeking to move quickly toward work redesigned by AI. What it still needs is to build the capabilities, in people and in regulatory frameworks, to sustain that change."
      ]
    },
    cita: {
      "original": "La IA es una prioridad, pero la preparación es desigual.",
      "traduccion_es": "La IA es una prioridad, pero la preparación es desigual.",
      "autor_es": "JLL, principales hallazgos de la encuesta",
      "autor_en": "JLL, key findings of the survey"
    },
    preguntas_es: [
      "¿Qué implica para los equipos que la IA sea la principal prioridad y, a la vez, el escenario para el que la organización está menos preparada?",
      "¿Cómo se conversa con los equipos sobre un futuro del trabajo que todavía presenta alta incertidumbre para toda la organización?",
      "¿Qué papel cumplen el espacio físico y sus cambios en la forma en que los colaboradores viven la llegada de la IA?"
    ],
    preguntas_en: [
      "What does it mean for teams when AI is the top priority and, at the same time, the scenario the organization is least prepared for?",
      "How are conversations held with teams about a future of work that remains highly uncertain for the whole organization?",
      "What role do physical space and changes to it play in how employees experience the arrival of AI?"
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
    hallazgo_es: "Solo 29% de los empleados en EE.UU. está comprometido con su trabajo, el nivel más bajo desde 2011",
    hallazgo_en: "Only 29% of U.S. employees are engaged in their work, the lowest level since 2011",
    dato_clave_es: "29% de los empleados en EE.UU. está comprometido, es decir, psicológicamente involucrado con su trabajo y con su organización. La caída de 2 puntos en un solo trimestre equivale a unos 3.2 millones de trabajadores comprometidos menos.",
    dato_clave_en: "29% of U.S. employees are engaged, meaning psychologically involved in their work and their organization. The 2-point drop in a single quarter equals about 3.2 million fewer engaged workers.",
    contexto_es: "Medición trimestral de Gallup, elaborada por Jim Harter, su científico jefe para temas de lugar de trabajo. Se basa en una encuesta web a 21,648 adultos del Gallup Panel, una muestra probabilística de Estados Unidos, realizada del 5 al 19 de agosto de 2026; el compromiso se mide entre quienes trabajan. Los resultados se comparan con las mediciones de febrero y mayo de 2026. Fue publicada el 28 de octubre de 2026.",
    contexto_en: "Gallup's quarterly measurement, prepared by Jim Harter, its chief scientist for workplace. It is based on a web survey of 21,648 adults from the Gallup Panel, a probability-based US sample, conducted August 5-19, 2026; engagement is measured among employed respondents. Results are compared with the February and May 2026 waves. It was published on October 28, 2026.",
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
      "bajada": "El compromiso laboral en Estados Unidos alcanzó su punto más bajo en 15 años, y los aspectos más afectados son dos fundamentos del trabajo: la claridad de expectativas y la percepción de cuidado.",
      "parrafos": [
        "La medición trimestral de Gallup, realizada en agosto de 2026 con una muestra de 21,648 adultos, muestra que solo 29% de los trabajadores estadounidenses está comprometido con su trabajo. Esa cifra es 2 puntos menor que la del trimestre anterior y la más baja desde 2011. Solo en ese periodo, la caída equivale a unos 3.2 millones de trabajadores comprometidos menos. Por ello, el resultado indica que el vínculo entre las personas y su trabajo se debilita a gran escala.",
        "La evidencia apunta a los fundamentos de esa relación. Solo 46% de los empleados sabe con claridad qué se espera de su trabajo, 3 puntos menos que en el primer semestre y lejos del 61% registrado en 2015. Además, apenas 37% siente que un jefe o alguien en el trabajo se preocupa por su bienestar. En conjunto, estas cifras muestran que el deterioro no responde a la falta de grandes beneficios, sino a aspectos cotidianos: claridad y cuidado.",
        "La modalidad de trabajo también incide en el resultado. El compromiso cayó 5 puntos entre quienes trabajan 100% en remoto y 2 puntos entre quienes trabajan en modalidad híbrida. Gallup recuerda que, entre 2020 y 2023, la claridad de expectativas ya había caído el doble en los equipos remotos e híbridos. En consecuencia, la distancia física, sin una gestión que la compense, tiene un costo en el vínculo con el trabajo.",
        "Para las organizaciones, este escenario se vincula también con la IA. Un análisis previo de Gallup encontró que el compromiso es 15 puntos mayor cuando existe un plan claro de IA y 18 puntos mayor cuando los jefes apoyan activamente su uso. Esa evidencia sitúa a los mandos medios en el centro, ya que son quienes traducen expectativas, acompañan los cambios y hacen que las personas se sientan reconocidas.",
        "Por lo tanto, la cifra de 29% no refleja solo un estado de ánimo, sino la calidad de la conducción de los equipos. Cuando el trabajo cambia con rapidez, el compromiso sigue dependiendo de dos condiciones básicas: conocer el rumbo y percibir un interés genuino por parte de la organización."
      ]
    },
    articulo_en: {
      "bajada": "U.S. employee engagement reached a 15-year low, and the most affected areas are two fundamentals of work: clarity of expectations and a sense of being cared for.",
      "parrafos": [
        "Gallup's quarterly measurement, conducted in August 2026 with a sample of 21,648 adults, shows that only 29% of U.S. workers are engaged in their work. That figure is 2 points lower than the previous quarter and the lowest since 2011. In that period alone, the drop equals about 3.2 million fewer engaged workers. The result therefore indicates that the bond between people and their work is weakening at scale.",
        "The evidence points to the foundations of that relationship. Only 46% of employees clearly know what is expected of them, 3 points lower than in the first half of the year and far from the 61% recorded in 2015. In addition, just 37% feel that a supervisor or someone at work cares about them. Together, these figures show that the decline stems not from missing major benefits but from everyday aspects: clarity and care.",
        "Work arrangement also affects the result. Engagement fell 5 points among fully remote workers and 2 points among hybrid workers. Gallup notes that between 2020 and 2023, clarity of expectations had already fallen twice as much in remote and hybrid teams. As a result, physical distance, without management that compensates for it, takes a toll on people's connection to their work.",
        "For organizations, this scenario is also linked to AI. An earlier Gallup analysis found that engagement is 15 points higher when there is a clear AI plan and 18 points higher when managers actively support its use. That evidence places middle managers at the center, since they translate expectations, guide people through change and make them feel recognized.",
        "The 29% figure therefore reflects not only morale but the quality of team leadership. When work changes quickly, engagement still depends on two basic conditions: knowing the direction and perceiving genuine interest from the organization."
      ]
    },
    cita: {
      "original": "U.S. employee engagement fell to 29% in the third quarter of 2026.",
      "traduccion_es": "El compromiso de los empleados en EE.UU. cayó a 29% en el tercer trimestre de 2026.",
      "autor_es": "Jim Harter, científico jefe de lugar de trabajo, Gallup",
      "autor_en": "Jim Harter, Chief Scientist, Workplace, Gallup"
    },
    preguntas_es: [
      "¿Qué tan claro tienen hoy los colaboradores qué se espera de ellos y con qué información se puede verificar?",
      "¿Qué prácticas cotidianas transmiten interés genuino por las personas, sobre todo en equipos remotos o híbridos?",
      "¿Cómo se prepara a los mandos medios para sostener el compromiso mientras el trabajo cambia con la IA?"
    ],
    preguntas_en: [
      "How clear are employees today about what is expected of them, and what information can confirm it?",
      "Which everyday practices convey genuine interest in people, especially in remote or hybrid teams?",
      "How are middle managers prepared to sustain engagement while work changes with AI?"
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
    hallazgo_es: "63% de quienes usan IA en el trabajo afirma que les permite trabajar más rápido, pero 31% señala que eso llevó a su empleador a asignarles más responsabilidades",
    hallazgo_en: "63% of those who use AI at work say it helps them work faster, but 31% say this led their employer to give them more responsibilities",
    dato_clave_es: "La IA genera productividad para quienes la usan: 63% trabaja más rápido. Sin embargo, 31% recibió más responsabilidades a cambio, y el beneficio llega a pocos, ya que solo 28% de los empleados usa IA al menos una vez por semana.",
    dato_clave_en: "AI generates productivity for those who use it: 63% work faster. However, 31% received more responsibilities in return, and the benefit reaches few, since only 28% of employees use AI at least once a week.",
    contexto_es: "Análisis de Gallup firmado por Jeffrey M. Jones, parte del American Job Quality Study, desarrollado en alianza con Jobs for the Future y The Families & Workers Fund. Se basa en encuestas web y por correo a 15,482 trabajadores de Estados Unidos, de los cuales 7,845 usaron IA en su trabajo, realizadas del 26 de enero al 24 de marzo de 2026. Fue publicado el 6 de octubre de 2026.",
    contexto_en: "Gallup analysis by Jeffrey M. Jones, part of the American Job Quality Study, developed in partnership with Jobs for the Future and The Families & Workers Fund. It is based on web and mail surveys of 15,482 U.S. workers, 7,845 of whom have used AI in their job, conducted January 26 to March 24, 2026. It was published on October 6, 2026.",
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
        "El American Job Quality Study, que Gallup desarrolla con Jobs for the Future y The Families & Workers Fund, consultó a 15,482 trabajadores de Estados Unidos sobre cómo la IA está cambiando su trabajo. Entre quienes la usan, 63% afirma que les permite trabajar más rápido y 56% que les ayuda a encontrar soluciones más creativas. Sin embargo, 31% señala que esa rapidez llevó a su empleador a pedirles más responsabilidades. Por lo tanto, la ganancia de productividad existe, aunque no siempre se traduce en alivio para el trabajador.",
        "Además, los beneficios se concentran en un grupo reducido. Solo 28% de los empleados usa IA al menos una vez por semana, y 54% nunca la ha usado en su puesto. El uso frecuente llega a 40% entre los graduados universitarios y baja a 17% entre quienes no tienen título universitario. En conjunto, estas cifras describen una adopción que avanza más rápido entre quienes ya contaban con ventajas.",
        "Esta diferencia se refleja también en la calidad del empleo. 52% de los usuarios semanales tiene lo que Gallup considera un empleo de calidad, frente a 32% de quienes no usan IA. La firma aclara que se trata de percepciones de los propios trabajadores y que el dato no demuestra una relación de causa y efecto. Aun así, el resultado indica que la IA puede ampliar brechas que ya existían dentro de las organizaciones.",
        "Para las organizaciones, la cuestión central es quién captura el valor de la IA. Si el tiempo ahorrado se convierte solo en más tareas, el beneficio se diluye, y entre los trabajadores más jóvenes 38% ya reporta más responsabilidades. A su vez, si el acceso y la formación se concentran en algunos perfiles, la tecnología puede generar divisiones en los equipos en lugar de fortalecerlos.",
        "El estudio muestra que adoptar IA no es solo una cuestión de herramientas. También implica decidir cómo se distribuyen el tiempo, la carga de trabajo y las oportunidades que esa tecnología genera."
      ]
    },
    articulo_en: {
      "bajada": "AI speeds up work and supports more creative solutions for those who use it, but those benefits are unevenly distributed and sometimes come with a heavier workload.",
      "parrafos": [
        "The American Job Quality Study, which Gallup conducts with Jobs for the Future and The Families & Workers Fund, asked 15,482 U.S. workers how AI is changing their jobs. Among those who use it, 63% say it helps them work faster and 56% say it helps them find more creative solutions. However, 31% say that speed led their employer to ask them to take on more responsibilities. The productivity gain is therefore real, although it does not always translate into relief for the worker.",
        "In addition, the benefits are concentrated in a small group. Only 28% of employees use AI at least once a week, and 54% have never used it in their role. Frequent use reaches 40% among college graduates and falls to 17% among those without a degree. Together, these figures describe an adoption curve that moves faster among those who already had advantages.",
        "This difference is also reflected in job quality. 52% of weekly users hold what Gallup considers a quality job, compared with 32% of non-users. The firm notes that these are workers' own perceptions and that the data do not prove cause and effect. Even so, the result indicates that AI can widen gaps that already existed within organizations.",
        "For organizations, the central question is who captures the value of AI. If saved time simply turns into more tasks, the benefit fades, and among the youngest workers 38% already report more responsibilities. In turn, if access and training are concentrated in certain profiles, the technology can create divisions within teams rather than strengthen them.",
        "The study shows that adopting AI is not only a matter of tools. It also involves deciding how the time, workload and opportunities that the technology creates are distributed."
      ]
    },
    cita: {
      "original": "Regular AI users are substantially more likely to have quality jobs",
      "traduccion_es": "Los usuarios frecuentes de IA tienen muchas más probabilidades de tener empleos de calidad.",
      "autor_es": "Jeffrey M. Jones, Gallup",
      "autor_en": "Jeffrey M. Jones, Gallup"
    },
    preguntas_es: [
      "¿Qué destino tiene hoy en la organización el tiempo que ahorra la IA: aprendizaje, descanso o más tareas?",
      "¿Qué grupos de colaboradores están quedando al margen del uso de la IA y qué mensaje perciben de esa situación?",
      "¿Cómo se aborda con los equipos la carga de trabajo cuando aumenta la productividad?"
    ],
    preguntas_en: [
      "What happens today in the organization to the time AI saves: learning, rest or more tasks?",
      "Which groups of employees are being left out of AI use, and what message do they take from that?",
      "How is workload addressed with teams when productivity rises?"
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
    hallazgo_es: "74% de los empleados de primera línea ya usa IA con regularidad, pero solo 36% considera que recibió la formación necesaria para hacerlo",
    hallazgo_en: "74% of frontline employees now use AI regularly, but only 36% feel they received the training they need",
    dato_clave_es: "74% de los empleados de primera línea, es decir, personal de oficina sin colaboradores a cargo, usa IA a diario o varias veces por semana, frente a 51% en 2025. La formación no acompaña ese salto: 72% afirma que cambiaron las habilidades que se esperan de su rol, pero solo 36% se siente preparado.",
    dato_clave_en: "74% of frontline employees, meaning office staff with no direct reports, use AI daily or several times a week, up from 51% in 2025. Training has not kept up with that leap: 72% say the skills expected in their role have changed, but only 36% feel prepared.",
    contexto_es: "Cuarta edición del estudio AI at Work de Boston Consulting Group (BCG), publicada en junio de 2026. Se basa en una encuesta a 11,749 líderes, mandos medios y empleados de primera línea, es decir, personal de oficina sin colaboradores a cargo, en 14 mercados: Australia, Reino Unido, EE.UU., España, India, Japón, Brasil, Alemania, Francia, Italia, países nórdicos, Sudáfrica, Medio Oriente y Benelux. El informe no indica las fechas del trabajo de campo.",
    contexto_en: "Fourth edition of Boston Consulting Group's (BCG) AI at Work study, published in June 2026. It is based on a survey of 11,749 leaders, managers and frontline employees, meaning office staff with no direct reports, across 14 markets: Australia, the UK, the U.S., Spain, India, Japan, Brazil, Germany, France, Italy, the Nordics, South Africa, the Middle East and Benelux. The report does not state fieldwork dates.",
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
        "La cuarta edición del estudio AI at Work de BCG, publicada en junio, encuestó a 11,749 líderes, mandos medios y empleados de 14 mercados, entre ellos Estados Unidos y Brasil. Su hallazgo central es que 74% de los empleados de primera línea ya usa IA a diario o varias veces por semana, 23 puntos más que en 2025. En consecuencia, la adopción individual dejó de ser el principal desafío. La cuestión ahora es si las organizaciones saben cómo aprovecharla.",
        "La evidencia muestra un desfase entre el uso y el acompañamiento. 72% de los empleados afirma que cambiaron las habilidades que se esperan de su rol, pero solo 36% considera que recibió la formación suficiente. Además, 66% recibe poca o ninguna orientación sobre cómo emplear el tiempo que ahorra. En conjunto, estas cifras indican que las personas usan la herramienta sin un propósito claramente definido.",
        "La comunicación sobre la IA presenta una brecha similar. Solo 33% de los empleados de primera línea indica que la dirección comunica con claridad sobre la IA, y 28% percibe una conexión sólida entre lo que se comunica y lo que la organización hace. A ello se suma que 41% de los usuarios frecuentes reporta mayor carga mental. Por lo tanto, el costo de la falta de claridad no es solo estratégico, sino también humano.",
        "Para las organizaciones, el desafío crece con los agentes de IA, que ya están integrados en los procesos de 30% de ellas, frente a 13% el año anterior. BCG sostiene que el valor no proviene de sumar herramientas, sino de contar con claridad estratégica sobre dónde y cómo se usa la IA. Para los colaboradores, esa claridad se traduce en saber qué se espera de ellos en un trabajo que cambia con rapidez.",
        "El estudio describe una brecha que no es tecnológica. La IA ya llegó a los equipos; lo que aún falta es una dirección clara que oriente su uso."
      ]
    },
    articulo_en: {
      "bajada": "AI is now part of most employees' daily work, but training, guidance and communication about its use are not keeping pace.",
      "parrafos": [
        "The fourth edition of BCG's AI at Work study, published in June, surveyed 11,749 leaders, managers and employees across 14 markets, including the United States and Brazil. Its central finding is that 74% of frontline employees now use AI daily or several times a week, up 23 points from 2025. As a result, individual adoption is no longer the main challenge. The question now is whether organizations know how to make the most of it.",
        "The evidence shows a gap between use and support. 72% of employees say the skills expected in their role have changed, but only 36% feel they received sufficient training. In addition, 66% receive limited or no guidance on how to use the time they save. Together, these figures indicate that people are using the tool without a clearly defined purpose.",
        "Communication about AI shows a similar gap. Only 33% of frontline employees say leadership communicates clearly about AI, and 28% see strong alignment between what is communicated and what the organization does. On top of that, 41% of regular users report increased mental strain. The cost of unclear direction is therefore not only strategic but also human.",
        "For organizations, the challenge grows with AI agents, which are already integrated into the workflows of 30% of them, up from 13% the year before. BCG argues that value comes not from adding tools but from strategic clarity about where and how AI is used. For employees, that clarity means knowing what is expected of them in work that is changing quickly.",
        "The study describes a gap that is not technological. AI has already reached teams; what is still missing is a clear direction to guide its use."
      ]
    },
    cita: {
      "original": "Adoption tells you that people use AI, not whether it pays off.",
      "traduccion_es": "La adopción indica que las personas usan IA, no si esa inversión genera retorno.",
      "autor_es": "Informe AI at Work 2026, BCG",
      "autor_en": "AI at Work 2026 report, BCG"
    },
    preguntas_es: [
      "¿Qué saben hoy los equipos sobre los objetivos que la organización persigue con el uso de la IA?",
      "¿Cómo se acompaña a los colaboradores cuando cambian las habilidades que se esperan de su rol?",
      "¿En qué medida coincide lo que se comunica sobre la IA con lo que los equipos observan en la práctica?"
    ],
    preguntas_en: [
      "What do teams know today about the goals the organization is pursuing with AI?",
      "How are employees supported when the skills expected in their role change?",
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
    hallazgo_es: "La motivación de los profesionales cayó 9 puntos en un año, hasta 61%, mientras 61% realiza el trabajo de más de un rol",
    hallazgo_en: "Professionals' motivation fell 9 points in a year to 61%, while 61% do the work of more than one role",
    dato_clave_es: "Solo 61% de los profesionales se siente motivado, 9 puntos menos en un año, y la misma proporción asume tareas de más de un rol. La sobrecarga alcanza también a quienes conducen: más de la mitad de los jefes declara estar agotada.",
    dato_clave_en: "Only 61% of professionals feel motivated, 9 points fewer in a year, and the same share take on the tasks of more than one role. The overload also reaches those who lead: more than half of managers report being exhausted.",
    contexto_es: "Tercera encuesta global anual de Korn Ferry sobre la fuerza laboral, publicada el 8 de septiembre de 2026. Reúne a más de 16,000 profesionales de todos los roles, desde puestos de entrada hasta CEO, en 11 mercados: Australia, Brasil, Francia, Alemania, India, Japón, Arabia Saudita, Singapur, Emiratos Árabes Unidos, Reino Unido y Estados Unidos. El informe no indica las fechas del trabajo de campo.",
    contexto_en: "Korn Ferry's third annual global workforce survey, published September 8, 2026. It covers more than 16,000 professionals in every role, from entry-level positions to CEOs, across 11 markets: Australia, Brazil, France, Germany, India, Japan, Saudi Arabia, Singapore, the UAE, the UK and the United States. The report does not state fieldwork dates.",
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
        "La encuesta global Workforce de Korn Ferry, publicada en septiembre, consultó a más de 16,000 profesionales de 11 mercados, entre ellos Estados Unidos y Brasil. Su hallazgo central es que la motivación de la fuerza laboral cayó 9 puntos en un solo año, y hoy solo 61% se siente motivado. El informe se titula \"crecer sin avanzar\" precisamente por esa tensión. En efecto, las empresas buscan crecer, pero sus equipos enfrentan ese desafío con menos energía.",
        "La evidencia apunta a una carga de trabajo acumulada. 61% de los profesionales afirma que realiza el trabajo de más de un rol, porque cuando un puesto se elimina o se \"reemplaza con IA\", sus tareas suelen pasar a quienes permanecen. Korn Ferry advierte que las personas aceptan un esfuerzo adicional temporal, pero no uno permanente sin reconocimiento ni rumbo claro. En consecuencia, lo que comienza como un ajuste termina en desgaste y rotación.",
        "La IA no ha aliviado esa carga. 63% afirma que la IA aumenta su eficiencia, pero solo 52% se siente adecuadamente formado para usarla. Según el informe, para muchos profesionales la IA consume tiempo en lugar de ahorrarlo, porque se suma al trabajo habitual. Por lo tanto, sin un rediseño del trabajo, la herramienta se convierte en una tarea adicional.",
        "Para las organizaciones, la situación de las jefaturas es el punto crítico. Más de la mitad de los jefes declara estar agotada, presionada por la dirección y a cargo de equipos cansados. Además, solo 52% de los profesionales indica que su jefe lo anima a experimentar, justo cuando crecer exige probar nuevas formas de trabajo. En Estados Unidos, la brecha es también de percepción: 85% de los CEO considera que su organización se preocupa por sus colaboradores, frente a 46% de los colaboradores individuales.",
        "El estudio muestra que la eficiencia por sí sola no genera crecimiento. Sin capacidad disponible, sin motivación y sin jefaturas con margen para conducir a sus equipos, el esfuerzo aumenta, pero los resultados avanzan poco."
      ]
    },
    articulo_en: {
      "bajada": "Organizations are investing in AI and cutting costs to grow, while their professionals take on more work, lose motivation and report to managers stretched to their limit.",
      "parrafos": [
        "Korn Ferry's global Workforce survey, published in September, consulted more than 16,000 professionals across 11 markets, including the United States and Brazil. Its central finding is that workforce motivation fell 9 points in a single year, and only 61% now feel motivated. The report is titled \"Growing Nowhere\" precisely because of that tension. Companies are seeking growth, but their teams are facing that challenge with less energy.",
        "The evidence points to an accumulated workload. 61% of professionals say they do the work of more than one role, because when a position is eliminated or \"replaced by AI,\" its tasks usually shift to those who remain. Korn Ferry warns that people accept temporary extra effort, but not a permanent one without recognition or clear direction. As a result, what begins as an adjustment ends in burnout and attrition.",
        "AI has not eased that workload. 63% say AI increases their efficiency, but only 52% feel adequately trained to use it. According to the report, for many professionals AI takes up time rather than saving it, because it is added on top of existing work. Without a redesign of work, the tool therefore becomes one more task.",
        "For organizations, the situation of managers is the critical point. More than half of managers report being exhausted, under pressure from leadership and in charge of tired teams. In addition, only 52% of professionals say their manager encourages them to experiment, just when growth requires trying new ways of working. In the United States, the gap is also one of perception: 85% of CEOs believe their organization cares about its people, compared with 46% of individual contributors.",
        "The study shows that efficiency alone does not create growth. Without available capacity, motivation and managers with room to lead their teams, effort increases but results advance little."
      ]
    },
    cita: {
      "original": "When managers burn out, you lose the glue that holds everything together.",
      "traduccion_es": "Cuando los jefes se agotan, se pierde el pegamento que mantiene todo unido.",
      "autor_es": "Roger Philby, líder global de Estrategia y Desempeño de Personas, Korn Ferry",
      "autor_en": "Roger Philby, Global Lead, People Strategy and Performance, Korn Ferry"
    },
    preguntas_es: [
      "¿Qué ocurrió en la organización con las tareas de los puestos que se eliminaron o se automatizaron?",
      "¿Qué respaldo reciben hoy las jefaturas que conducen equipos con alta carga de trabajo?",
      "¿Cómo se comunica el propósito de la IA cuando, en el trabajo diario, se percibe como una tarea adicional?"
    ],
    preguntas_en: [
      "What happened in the organization to the tasks of roles that were eliminated or automated?",
      "What support do managers leading teams with heavy workloads receive today?",
      "How is the purpose of AI communicated when, in daily work, it is perceived as an additional task?"
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
    hallazgo_es: "Solo 6% de la Gen Z y los millennials tiene el liderazgo como su principal meta profesional, y la mayoría prefiere progresar de forma estable antes que ascender rápido",
    hallazgo_en: "Only 6% of Gen Zs and millennials name leadership as their main career goal, and most prefer steady progress over rapid promotion",
    dato_clave_es: "Solo 6% de la Gen Z y los millennials aspira a liderar como meta principal, mientras 44% y 45%, respectivamente, prefiere un progreso estable. No es falta de ambición: 76% de la Gen Z quiere llegar a la alta dirección, pero rechaza el estrés que hoy asocia con ese rol.",
    dato_clave_en: "Only 6% of Gen Zs and millennials aspire to lead as their main goal, while 44% and 45%, respectively, prefer steady progress. It is not a lack of ambition: 76% of Gen Zs want to reach senior leadership, but they reject the stress they now associate with the role.",
    contexto_es: "Decimoquinta edición de la encuesta anual de Deloitte Global, publicada el 13 de mayo de 2026. Reúne a 22,595 personas (14,384 de la Gen Z y 8,211 millennials) en 44 países de Norteamérica, Latinoamérica, Europa Occidental y del Este, Medio Oriente, África y Asia-Pacífico. La encuesta en línea se realizó del 24 de noviembre de 2025 al 15 de enero de 2026 y se complementó con entrevistas cualitativas.",
    contexto_en: "Fifteenth edition of Deloitte Global's annual survey, published May 13, 2026. It covers 22,595 people (14,384 Gen Zs and 8,211 millennials) in 44 countries across North America, Latin America, Western and Eastern Europe, the Middle East, Africa and Asia-Pacific. The online survey ran from November 24, 2025 to January 15, 2026 and was complemented by qualitative interviews.",
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
        "La decimoquinta encuesta anual de Deloitte a la Gen Z y los millennials, publicada en mayo, consultó a 22,595 personas en 44 países, incluidos Norteamérica y Latinoamérica. Solo 6% de los encuestados ubica el liderazgo como su principal meta profesional. En cambio, 44% de la Gen Z y 45% de los millennials prefiere un progreso estable antes que ascensos rápidos. Para las organizaciones, este resultado modifica los supuestos sobre lo que motiva a quienes serán sus próximos líderes.",
        "La evidencia muestra que la limitación no es la falta de ambición, sino el costo percibido del rol. La mitad de la Gen Z menciona el estrés y el agotamiento (50%) y el exceso de responsabilidad (50%) como barreras para liderar. Sin embargo, 76% de la Gen Z y 67% de los millennials aspira a llegar a la alta dirección en algún momento. Por lo tanto, la aspiración existe; lo que no convence es la forma en que hoy se ejerce el liderazgo.",
        "La tecnología añade otra dimensión a este escenario. 74% ya usa IA en su trabajo diario, frente a 57% de la Gen Z y 56% de los millennials el año anterior. Al mismo tiempo, 58% de la Gen Z y 54% de los millennials experimenta fatiga digital. Así, estas generaciones adoptan la tecnología con rapidez, pero también perciben su costo.",
        "Para las organizaciones, el desafío es la sucesión del liderazgo. Si los puestos de jefatura siguen asociados a la sobrecarga, será más difícil atraer hacia ellos al talento joven más calificado. Además, la encuesta ubica el costo de vida como la principal preocupación por quinto año consecutivo, lo que explica el peso de la estabilidad en sus decisiones.",
        "El estudio no retrata una generación desmotivada, sino una que define sus propios términos. Para estos profesionales, progresar significa crecer de forma sostenible y no a cualquier costo."
      ]
    },
    articulo_en: {
      "bajada": "Younger generations are not rejecting leadership, but they are not willing to take on the level of stress they now associate with the role.",
      "parrafos": [
        "Deloitte's fifteenth annual survey of Gen Zs and millennials, published in May, consulted 22,595 people in 44 countries, including North America and Latin America. Only 6% of respondents name leadership as their main career goal. By contrast, 44% of Gen Zs and 45% of millennials prefer steady progress over rapid promotions. For organizations, this result changes assumptions about what motivates the people who will be their next leaders.",
        "The evidence shows that the constraint is not a lack of ambition but the perceived cost of the role. Half of Gen Zs cite stress and burnout (50%) and excessive responsibility (50%) as barriers to leading. However, 76% of Gen Zs and 67% of millennials aspire to reach senior leadership at some point. The aspiration therefore exists; what fails to convince is the way leadership is exercised today.",
        "Technology adds another dimension to this picture. 74% already use AI in their day-to-day work, up from 57% of Gen Zs and 56% of millennials the year before. At the same time, 58% of Gen Zs and 54% of millennials experience digital fatigue. These generations thus adopt technology quickly, but they also feel its cost.",
        "For organizations, the challenge is leadership succession. If management roles remain associated with overload, it will be harder to attract the most qualified young talent to them. In addition, the survey ranks cost of living as the top concern for the fifth consecutive year, which explains the weight of stability in their decisions.",
        "The study does not portray an unmotivated generation but one that sets its own terms. For these professionals, progress means growing sustainably rather than at any cost."
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
      "¿Cómo podría rediseñarse el rol de jefatura para que no se asocie solo con estrés y sobrecarga?",
      "¿Qué trayectorias de crecimiento existen para quienes prefieren avanzar de forma estable o lateral?"
    ],
    preguntas_en: [
      "What image of leadership does the organization convey today to those who could take on future management roles?",
      "How could the manager role be redesigned so that it is not associated only with stress and overload?",
      "What growth paths exist for those who prefer steady or lateral progress?"
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
    hallazgo_es: "Solo 20% de los empleados en el mundo estaba comprometido con su trabajo en 2025, y el compromiso de los jefes cayó a 22%, nueve puntos menos que en 2022",
    hallazgo_en: "Only 20% of employees worldwide were engaged in their work in 2025, and manager engagement fell to 22%, nine points lower than in 2022",
    dato_clave_es: "20% de los empleados en el mundo está comprometido, es decir, psicológicamente involucrado con su trabajo y con su organización: el nivel más bajo desde 2020. Gallup estima que esa falta de compromiso cuesta unos 10 billones de dólares en productividad perdida, cerca de 9% del PBI mundial.",
    dato_clave_en: "20% of employees worldwide are engaged, meaning psychologically involved in their work and their organization: the lowest level since 2020. Gallup estimates that this lack of engagement costs about $10 trillion in lost productivity, roughly 9% of global GDP.",
    contexto_es: "Informe anual de Gallup, publicado el 7 de abril de 2026. Se basa en 263,810 encuestados en 2025, de los cuales 141,444 tenían empleo, en más de 140 países y territorios, con datos recogidos de enero a diciembre de 2025. La serie histórica abarca de 2009 a 2025.",
    contexto_en: "Gallup's annual report, published April 7, 2026. It is based on 263,810 respondents in 2025, 141,444 of them employed, in more than 140 countries and territories, with data collected January to December 2025. The trend series covers 2009 to 2025.",
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
        "El informe State of the Global Workplace de Gallup, publicado en abril, analizó las respuestas de más de 140,000 personas con empleo en más de 140 países y territorios. En 2025, solo 20% de los empleados del mundo estaba comprometido con su trabajo, el nivel más bajo desde 2020. Gallup estima que esa falta de compromiso cuesta unos 10 billones de dólares en productividad perdida, cerca de 9% del PBI mundial. Por ello, se trata de un desafío de gestión de personas con impacto económico global.",
        "La evidencia apunta a los mandos medios. El compromiso de los jefes bajó a 22%, nueve puntos menos que en 2022, una caída mayor que la de los colaboradores individuales, que incluso registraron un leve repunte. Este dato es relevante porque, según Gallup, el compromiso de un equipo depende en gran medida de su jefe. En consecuencia, cuando quienes conducen los equipos pierden el vínculo con su trabajo, ese efecto se transmite a sus colaboradores.",
        "Sin embargo, el bienestar no siguió la misma tendencia. 34% de los empleados afirma estar prosperando en su vida, un punto más que el año anterior. En cambio, en Estados Unidos y Canadá el optimismo sobre el mercado laboral cayó 10 puntos en 2025 y 23 puntos desde 2019. Así, las personas pueden sentirse bien con su vida y, a la vez, menos vinculadas con su trabajo y menos seguras de sus opciones laborales.",
        "Para las organizaciones, el desafío es atravesar procesos de cambio con equipos que mantengan su compromiso con lo que hacen. Gallup señala que ninguna región del mundo aumentó su compromiso en el último año. No obstante, destaca que en algunas organizaciones el compromiso de los jefes cuadruplica el promedio mundial, lo que demuestra que el resultado no es inevitable.",
        "La conclusión central del informe es que el compromiso no se construye con programas aislados, sino a través de quienes lideran a diario. Por lo tanto, el desgaste de las jefaturas repercute en toda la organización."
      ]
    },
    articulo_en: {
      "bajada": "Global employee engagement continues to decline, and the steepest drop is among managers, on whom their teams' engagement largely depends.",
      "parrafos": [
        "Gallup's State of the Global Workplace report, published in April, analyzed responses from more than 140,000 employed people in more than 140 countries and territories. In 2025, only 20% of employees worldwide were engaged in their work, the lowest level since 2020. Gallup estimates that this lack of engagement costs about $10 trillion in lost productivity, roughly 9% of global GDP. It is therefore a people management challenge with a global economic impact.",
        "The evidence points to middle management. Manager engagement fell to 22%, nine points lower than in 2022, a steeper decline than among individual contributors, who even saw a slight rebound. This matters because, according to Gallup, a team's engagement depends largely on its manager. As a result, when those who lead teams lose their connection to their work, the effect carries over to their teams.",
        "Well-being, however, did not follow the same trend. 34% of employees say they are thriving in their lives, up one point from the year before. By contrast, in the United States and Canada, job market optimism fell 10 points in 2025 and 23 points since 2019. People can thus feel good about their lives and, at the same time, less connected to their work and less confident about their job options.",
        "For organizations, the challenge is to navigate change with teams that remain committed to what they do. Gallup notes that no region of the world increased engagement in the past year. Nevertheless, it highlights that some organizations achieve manager engagement at four times the global average, which shows that the outcome is not inevitable.",
        "The report's central conclusion is that engagement is built not through isolated programs but through those who lead every day. Manager burnout therefore affects the entire organization."
      ]
    },
    cita: {
      "original": "No region of the world increased engagement in the past year.",
      "traduccion_es": "Ninguna región del mundo aumentó su compromiso en el último año.",
      "autor_es": "Informe State of the Global Workplace 2026, Gallup",
      "autor_en": "State of the Global Workplace 2026 report, Gallup"
    },
    preguntas_es: [
      "¿Qué área se ocupa hoy del compromiso de las jefaturas dentro de la organización?",
      "¿Qué señales indican que la pérdida de compromiso de los mandos medios ya está llegando a sus equipos?",
      "¿Cómo se comunica el cambio cuando quienes deben trasladarlo a los equipos presentan signos de agotamiento?"
    ],
    preguntas_en: [
      "Which function looks after managers' engagement within the organization today?",
      "What signals show that middle managers' declining engagement is already reaching their teams?",
      "How is change communicated when those who must cascade it to teams show signs of exhaustion?"
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
