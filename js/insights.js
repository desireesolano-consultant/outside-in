// =====================================================================
// INSIGHTS de Outside-In: cruces entre estudios.
// El sistema arma la parte de datos (qué dice cada estudio, dónde
// coinciden, dónde chocan y por qué). Los insights NO llevan "Mi mirada":
// esa vive solo en su sección (decisión de Desiree, 2-nov-2026).
// Cada estudio citado se toma de HALLAZGOS (js/datos.js) por su id, así
// las cifras y los links son siempre los mismos que en la biblioteca.
// =====================================================================

const INSIGHTS = [
  {
    id: "i-2026-10-ia-roles",
    publicado: "2026-10-23",
    tema: "ia_personas",
    industrias: ["consumo_masivo", "life_sciences", "servicios_financieros"],
    estudios: ["h-2026-10-deloitte-consumo-ia", "h-2026-10-bain-life-sciences", "h-2026-10-pwc-fs-cambio"],

    titulo_es: "La IA llega a los equipos antes que la explicación de qué cambia en su trabajo",
    titulo_en: "AI is reaching teams before the explanation of what changes in their work",
    bajada_es:
      "Deloitte, Bain y PwC analizan tres industrias distintas. Puestos en diálogo, muestran por qué explicar qué cambia en cada rol pesa tanto como entregar la herramienta.",
    bajada_en:
      "Deloitte, Bain and PwC look at three different industries. Read together, they show why explaining what changes in each role matters as much as handing out the tool.",

    dicen: [
      {
        id: "h-2026-10-deloitte-consumo-ia",
        postura_es: "Se entrega la herramienta, pero no se rediseña el trabajo.",
        postura_en: "The tool is delivered, but work is not redesigned.",
        dato_es: "82%",
        dato_en: "82%",
        etiqueta_es: "de las empresas de consumo masivo no ha rediseñado sus puestos en torno a la IA",
        etiqueta_en: "of consumer goods companies have not redesigned their jobs around AI",
        frase_es: "de las empresas de consumo masivo no ha rediseñado sus puestos en torno a la IA, aunque en un año el acceso de sus colaboradores a estas herramientas pasó de menos de 30% a cerca de 60%.",
        frase_en: "of consumer goods companies have not redesigned their jobs around AI, even though, in one year, employee access to these tools rose from under 30% to about 60%.",
      },
      {
        id: "h-2026-10-bain-life-sciences",
        postura_es: "Explicar cómo cambian los roles es lo que permite pasar de las pruebas a la escala.",
        postura_en: "Explaining how roles change is what allows companies to move from pilots to scale.",
        dato_es: "80%",
        dato_en: "80%",
        etiqueta_es: "de las farmacéuticas que ya usan la IA en toda su operación explica a sus equipos cómo cambiarán sus roles; entre las que siguen en fase de prueba, solo 7%",
        etiqueta_en: "of pharmaceutical companies already using AI across their operations explain to their teams how roles will change; among those still in the testing phase, only 7% do",
        frase_es: "de las empresas farmacéuticas y de salud que ya usan la IA en toda su operación, más allá de los pilotos, explica a sus equipos cómo cambiarán sus roles. Entre las que todavía están en fase de prueba, solo 7% lo hace.",
        frase_en: "of pharmaceutical and health companies already using AI across their operations, beyond pilots, explain to their teams how their roles will change. Among those still in the testing phase, only 7% do.",
      },
      {
        id: "h-2026-10-pwc-fs-cambio",
        postura_es: "Sin claridad sobre el futuro de cada rol, la IA genera temor y se usa por obligación.",
        postura_en: "Without clarity on the future of each role, AI creates fear and is used out of obligation.",
        dato_es: "44%",
        dato_en: "44%",
        etiqueta_es: "de los ejecutivos de servicios financieros en EE.UU. señala que sus colaboradores temen perder el empleo o que la IA cambie su rol",
        etiqueta_en: "of US financial services executives say their employees fear losing their jobs or having their roles changed by AI",
        frase_es: "de los ejecutivos de servicios financieros en EE.UU. señala que sus colaboradores temen perder el empleo o que la IA cambie su rol, y 43% indica que sus equipos solo la usan cuando se les exige.",
        frase_en: "of US financial services executives say their employees fear losing their jobs or having their roles changed by AI, and 43% say their teams use it only when required.",
      },
    ],

    coinciden_es: [
      { titulo: "El acceso avanza más rápido que el trabajo", texto: "Mientras Deloitte muestra que en consumo masivo el acceso a la IA se duplicó en un año sin que 82% de las empresas rediseñara sus puestos, Bain encuentra que, incluso entre las farmacéuticas más avanzadas, solo 20% convirtió su visión en decisiones concretas sobre el trabajo." },
      { titulo: "La explicación define la adopción", texto: "Bain muestra que explicar cómo cambian los roles separa a las empresas que llevan la IA a toda su operación de las que siguen en pruebas: 80% frente a 7%. PwC describe el escenario opuesto: cuando esa explicación falta, 44% de los ejecutivos ve a sus equipos temer por su empleo o por su rol." },
      { titulo: "Sin claridad, el uso se queda en la superficie", texto: "Deloitte y PwC llegan al mismo punto desde industrias distintas. En consumo masivo, solo 25% de quienes tienen acceso usa la IA en más del 60% de su trabajo diario; en servicios financieros, 43% la usa solo cuando se le exige." },
    ],
    coinciden_en: [
      { titulo: "Access is moving faster than work", texto: "While Deloitte shows that in consumer goods access to AI doubled in one year without 82% of companies redesigning their jobs, Bain finds that, even among the most advanced pharmaceutical companies, only 20% have turned their vision into concrete decisions about work." },
      { titulo: "Explanation shapes adoption", texto: "Bain shows that explaining how roles change separates the companies taking AI across their operations from those still in pilots: 80% versus 7%. PwC describes the opposite scenario: when that explanation is missing, 44% of executives see their teams fear for their jobs or their roles." },
      { titulo: "Without clarity, use stays on the surface", texto: "Deloitte and PwC reach the same point from different industries. In consumer goods, only 25% of those with access use AI for more than 60% of their daily work; in financial services, 43% use it only when required." },
    ],

    chocan_es: [
      { titulo: "La disposición existe, pero no alcanza", texto: "Deloitte encuentra que 69% de los colaboradores no técnicos de consumo masivo está entusiasmado o abierto a explorar la IA, mientras PwC observa que en servicios financieros 43% la usa solo cuando se le exige. Leídos juntos, sugieren que la disposición inicial de las personas no basta si su rol no se aclara." },
      { titulo: "Comunicar no reemplaza a decidir", texto: "Bain identifica la comunicación de la visión como el factor que distingue a quienes escalan la IA, pero el mismo estudio advierte que solo 20% llevó esa visión a decisiones para toda la organización. Deloitte apunta en la misma dirección: la respuesta más frecuente de las empresas es capacitar a sus colaboradores (54%), no rediseñar los puestos." },
      { titulo: "Más mensajes no equivalen a más claridad", texto: "Mientras Bain pone el foco en explicar el futuro de los roles, PwC introduce un límite: 34% de los ejecutivos de servicios financieros considera la fatiga de cambio, el desgaste por la acumulación de cambios, una barrera para escalar la IA. El desafío no es comunicar más, sino explicar mejor qué cambia en cada rol." },
    ],
    chocan_en: [
      { titulo: "Willingness exists, but it is not enough", texto: "Deloitte finds that 69% of non-technical employees in consumer goods are enthusiastic or open to exploring AI, while PwC observes that in financial services 43% use it only when required. Read together, they suggest that people's initial willingness is not enough if their role is not clarified." },
      { titulo: "Communicating does not replace deciding", texto: "Bain identifies communicating the vision as the factor that distinguishes the companies scaling AI, but the same study warns that only 20% have turned that vision into organization-wide decisions. Deloitte points in the same direction: the most common response is to train employees (54%), not to redesign jobs." },
      { titulo: "More messages do not mean more clarity", texto: "While Bain focuses on explaining the future of roles, PwC introduces a limit: 34% of financial services executives see change fatigue, the strain of accumulated change, as a barrier to scaling AI. The challenge is not to communicate more, but to explain better what changes in each role." },
    ],

    porque_es:
      "Los tres estudios analizan industrias distintas (consumo masivo, salud y farmacéutica, y servicios financieros) y encuestan a líderes, no a colaboradores. Por eso muestran cómo ven el cambio quienes lo dirigen, pero no cómo lo viven los equipos.",
    porque_en:
      "The three studies look at different industries (consumer goods, pharmaceuticals and health, and financial services) and survey leaders, not employees. As a result, they show how those leading the change see it, but not how teams experience it.",

    mirada_es: null,
    mirada_en: null,

    preguntas_es: [
      "¿Los equipos saben qué cambiará en su rol con la IA, o solo que ya tienen acceso a una herramienta?",
      "¿Quién traduce la visión de la IA en decisiones concretas sobre cada puesto: Recursos Humanos, Tecnología o cada líder de área?",
      "¿Cómo se mide la fatiga de cambio antes de lanzar la siguiente iniciativa?",
    ],
    preguntas_en: [
      "Do teams know what will change in their role with AI, or only that they now have access to a tool?",
      "Who turns the AI vision into concrete decisions about each role: HR, Technology or each area leader?",
      "How is change fatigue measured before launching the next initiative?",
    ],
  },
];
