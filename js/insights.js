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
      "Las empresas ya dieron a sus equipos acceso a la IA, pero muchas todavía no explican qué cambia en cada puesto. Tres estudios, en tres industrias, muestran el efecto de esa brecha.",
    bajada_en:
      "Companies have already given their teams access to AI, but many still do not explain what changes in each role. Three studies, across three industries, show the effect of that gap.",

    dicen: [
      {
        id: "h-2026-10-deloitte-consumo-ia",
        dato_es: "82%",
        dato_en: "82%",
        etiqueta_es: "de las empresas de consumo masivo no ha rediseñado sus puestos de trabajo en torno a la IA",
        etiqueta_en: "of consumer goods companies have not redesigned their jobs around AI",
        frase_es: "de las empresas de consumo masivo no ha rediseñado sus puestos de trabajo en torno a la IA, aunque en un año duplicó el acceso de sus colaboradores a estas herramientas.",
        frase_en: "of consumer goods companies have not redesigned their jobs around AI, even though they doubled employee access to these tools in one year.",
      },
      {
        id: "h-2026-10-bain-life-sciences",
        dato_es: "80%",
        dato_en: "80%",
        etiqueta_es: "de las empresas farmacéuticas y de salud que ya escalan la IA explica a sus equipos cómo cambiarán sus roles; entre las que recién la exploran, solo 7%",
        etiqueta_en: "of pharmaceutical and health companies already scaling AI explain to their teams how their roles will change; among those just exploring it, only 7% do",
        frase_es: "de las empresas farmacéuticas y de salud que ya escalan la IA explica a sus equipos cómo cambiarán sus roles. Entre las que recién la exploran, solo 7% lo hace.",
        frase_en: "of pharmaceutical and health companies already scaling AI explain to their teams how their roles will change. Among those just exploring it, only 7% do.",
      },
      {
        id: "h-2026-10-pwc-fs-cambio",
        dato_es: "44%",
        dato_en: "44%",
        etiqueta_es: "de los ejecutivos de servicios financieros en EE.UU. señala que sus colaboradores temen perder el empleo o que la IA cambie su rol",
        etiqueta_en: "of US financial services executives say their employees fear losing their jobs or having their roles changed by AI",
        frase_es: "de los ejecutivos de servicios financieros en EE.UU. señala que sus colaboradores temen perder el empleo o que la IA cambie su rol.",
        frase_en: "of US financial services executives say their employees fear losing their jobs or having their roles changed by AI.",
      },
    ],

    coinciden_es: [
      "Las herramientas llegan antes que el rediseño del trabajo. Las empresas amplían el acceso a la IA, pero los puestos y las rutinas se mantienen casi iguales.",
      "Explicar el cambio marca la diferencia. Las empresas que más avanzan con la IA son las que explican a sus equipos qué cambia en cada rol.",
      "Sin esa explicación, el uso se queda corto. En consumo masivo, solo 25% de quienes tienen acceso usa la IA en más del 60% de su trabajo diario; en servicios financieros, 43% la usa solo cuando se le exige.",
    ],
    coinciden_en: [
      "The tools arrive before work is redesigned. Companies are expanding access to AI, but roles and routines remain almost the same.",
      "Explaining the change makes the difference. The companies that move furthest with AI are the ones that explain to their teams what changes in each role.",
      "Without that explanation, use falls short. In consumer goods, only 25% of those with access use AI for more than 60% of their daily work; in financial services, 43% use it only when required.",
    ],

    chocan_es: [
      "Comunicar la visión no es suficiente. Bain muestra que solo 20% de las empresas que escalan la IA convirtió esa visión en decisiones concretas sobre el trabajo.",
      "Comunicar más tampoco es la solución. PwC advierte que muchos cambios en poco tiempo también saturan a los equipos: 34% de los ejecutivos de servicios financieros considera la fatiga de cambio, es decir, el desgaste por la acumulación de cambios, una barrera para escalar la IA.",
    ],
    chocan_en: [
      "Communicating the vision is not enough. Bain shows that only 20% of the companies scaling AI have turned that vision into concrete decisions about work.",
      "Communicating more is not the answer either. PwC warns that many changes in a short time also saturate teams: 34% of financial services executives see change fatigue, meaning the strain of accumulated change, as a barrier to scaling AI.",
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
