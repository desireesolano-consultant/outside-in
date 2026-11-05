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

    titulo_es: "Acceso a la IA, sin rediseño del trabajo",
    titulo_en: "AI access, without work redesign",
    bajada_es:
      "Tres estudios en tres industrias coinciden: la tecnología llega a los equipos más rápido que la conversación sobre cómo cambia su trabajo.",
    bajada_en:
      "Three studies across three industries agree: technology is reaching teams faster than the conversation about how their work changes.",

    dicen: [
      {
        id: "h-2026-10-deloitte-consumo-ia",
        dato_es: "82%",
        dato_en: "82%",
        etiqueta_es: "de las empresas de consumo no ha rediseñado sus puestos en torno a la IA",
        etiqueta_en: "of consumer companies have not redesigned jobs around AI",
        frase_es: "de las empresas de consumo no ha rediseñado sus puestos en torno a la IA, aunque en un año el acceso de los colaboradores a herramientas aprobadas pasó de menos de 30% a cerca de 60%.",
        frase_en: "of consumer companies have not redesigned jobs around AI, even though, in one year, employee access to approved tools rose from under 30% to about 60%.",
      },
      {
        id: "h-2026-10-bain-life-sciences",
        dato_es: "80%",
        dato_en: "80%",
        etiqueta_es: "de las empresas de ciencias de la vida que escalan la IA explica cómo cambiarán los roles (frente a 7% de las que recién la exploran)",
        etiqueta_en: "of life sciences companies scaling AI explain how roles will change (vs. 7% of those just exploring it)",
        frase_es: "de las empresas de ciencias de la vida que escalan la IA explica con claridad cómo cambiarán los roles, frente a solo 7% de las que recién la exploran.",
        frase_en: "of life sciences companies scaling AI clearly explain how roles will change, compared with only 7% of those just exploring it.",
      },
      {
        id: "h-2026-10-pwc-fs-cambio",
        dato_es: "4 de 10",
        dato_en: "4 in 10",
        etiqueta_es: "líderes de servicios financieros ven a sus equipos abrumados por el ritmo de cambio de la IA",
        etiqueta_en: "financial services leaders see their teams overwhelmed by the pace of AI-driven change",
        frase_es: "líderes de servicios financieros en EE.UU. afirman que sus equipos se sienten abrumados por el ritmo de cambio de la IA. Además, 44% identifica temor a perder el empleo o a que el rol cambie.",
        frase_en: "US financial services leaders say their teams feel overwhelmed by the pace of AI-driven change. In addition, 44% see fear of job loss or role change.",
      },
    ],

    coinciden_es: [
      "El acceso a la IA avanza más rápido que el rediseño del trabajo: las herramientas llegan a los equipos, pero los puestos y las rutinas se mantienen casi sin cambios.",
      "Las empresas que más avanzan son las que explican qué cambia en cada rol. En consecuencia, la distancia entre escalar la IA y quedarse en pilotos es, en buena medida, una brecha de comunicación.",
      "Tener acceso a la IA no equivale a adoptarla. En consumo, solo 25% de quienes tienen acceso la utiliza en más del 60% de su trabajo diario; en servicios financieros, 43% la usa solo cuando se le exige.",
    ],
    coinciden_en: [
      "Access to AI is moving faster than work redesign: the tools reach teams, but roles and routines remain almost unchanged.",
      "The companies that move furthest are the ones that explain what changes in each role. As a result, the distance between scaling AI and staying in pilots is, to a large extent, a communication gap.",
      "Having access to AI is not the same as adopting it. In consumer goods, only 25% of those with access use it for more than 60% of their daily work; in financial services, 43% use it only when required.",
    ],

    chocan_es: [
      "Bain identifica la comunicación de la visión como el factor que distingue a las empresas que escalan la IA. Sin embargo, el mismo estudio muestra que solo 20% de ellas convirtió esa visión en decisiones concretas: comunicar no es suficiente si la visión no se traduce en cambios dentro de la organización.",
      "PwC aporta un matiz: más cambio, comunicado con rapidez, también puede saturar a los equipos. De hecho, 34% de los líderes de servicios financieros considera la fatiga de cambio, es decir, el desgaste por la acumulación de cambios, una barrera para escalar la IA.",
    ],
    chocan_en: [
      "Bain identifies communicating the vision as the factor that distinguishes the companies that scale AI. However, the same study shows that only 20% of them have turned that vision into concrete decisions: communicating is not enough if the vision does not translate into changes within the organization.",
      "PwC adds a nuance: more change, communicated quickly, can also saturate teams. In fact, 34% of financial services leaders see change fatigue, meaning the strain of accumulated change, as a barrier to scaling AI.",
    ],

    porque_es:
      "Los tres estudios analizan industrias distintas (consumo, ciencias de la vida y servicios financieros) y etapas distintas de adopción. Sin embargo, comparten un rasgo: los tres encuestan a líderes, no a colaboradores. Por eso, muestran cómo ven el cambio quienes lo dirigen, pero dicen poco sobre cómo lo viven quienes lo atraviesan.",
    porque_en:
      "The three studies look at different industries (consumer goods, life sciences and financial services) and different stages of adoption. However, they share one trait: all three survey leaders, not employees. As a result, they show how those leading the change see it, but say little about how those going through it experience it.",

    mirada_es: null,
    mirada_en: null,

    preguntas_es: [
      "¿Los equipos saben qué cambiará en su rol con la IA, o solo saben que ya tienen acceso a una herramienta?",
      "¿Quién está traduciendo la visión en decisiones concretas: Recursos Humanos, Tecnología o cada líder de área?",
      "¿Cómo se mide la fatiga de cambio antes de lanzar la siguiente iniciativa?",
    ],
    preguntas_en: [
      "Do teams know what will change in their role with AI, or only that they now have access to a tool?",
      "Who is turning the vision into concrete decisions: HR, Technology or each area leader?",
      "How is change fatigue measured before launching the next initiative?",
    ],
  },
];
