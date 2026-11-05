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

    titulo_es: "La IA llega más rápido que la explicación de qué cambia en cada rol",
    titulo_en: "AI is arriving faster than the explanation of what changes in each role",
    bajada_es:
      "Tres estudios, tres industrias y una misma tensión: la tecnología llega más rápido que la conversación sobre cómo cambia el trabajo.",
    bajada_en:
      "Three studies, three industries and one shared tension: technology is arriving faster than the conversation about how work changes.",

    dicen: [
      {
        id: "h-2026-10-deloitte-consumo-ia",
        dato_es: "82%",
        dato_en: "82%",
        frase_es: "de las empresas de consumo no rediseñó sus puestos en torno a la IA, aunque el acceso a herramientas aprobadas pasó de menos de 30% a cerca de 60% de los colaboradores.",
        frase_en: "of consumer companies have not redesigned roles around AI, even though access to approved tools rose from under 30% to about 60% of employees.",
      },
      {
        id: "h-2026-10-bain-life-sciences",
        dato_es: "80% vs. 7%",
        dato_en: "80% vs. 7%",
        frase_es: "En ciencias de la vida, 80% de las empresas que escalan IA comunica con claridad cómo cambiarán los roles. Entre las que recién exploran, solo 7%.",
        frase_en: "In life sciences, 80% of companies scaling AI clearly communicate how roles will change. Among those still exploring, only 7%.",
      },
      {
        id: "h-2026-10-pwc-fs-cambio",
        dato_es: "4 de 10",
        dato_en: "4 in 10",
        frase_es: "líderes de servicios financieros dicen que su gente se siente abrumada por el ritmo del cambio con IA; 44% ve miedo a perder el trabajo o a que el rol cambie.",
        frase_en: "financial services leaders say their people feel overwhelmed by the pace of AI-driven change; 44% see fear of job loss or role change.",
      },
    ],

    coinciden_es: [
      "El acceso a la IA avanza más rápido que el rediseño del trabajo: las herramientas llegan, pero los puestos y las rutinas siguen casi iguales.",
      "Las empresas que más avanzan son las que explican qué cambia en cada rol. En consecuencia, la distancia entre escalar la IA y quedarse en pilotos es, en buena medida, una brecha de comunicación.",
      "Usar la IA no es lo mismo que adoptarla: en consumo, solo 25% de quienes tienen acceso la usa en más del 60% de su trabajo diario, y en banca 43% la usa solo cuando se le exige.",
    ],
    coinciden_en: [
      "Access to AI is moving faster than work redesign: the tools arrive, but roles and routines stay almost the same.",
      "The companies that move furthest are the ones that explain what changes in each role. As a result, the distance between scaling AI and staying in pilots is, to a large extent, a communication gap.",
      "Using AI is not the same as adopting it: in consumer goods only 25% of those with access use it for more than 60% of their daily work, and in banking 43% use it only when required.",
    ],

    chocan_es: [
      "Bain sugiere que comunicar la visión es lo que distingue a las empresas que escalan. Sin embargo, el mismo estudio muestra que solo 20% de ellas convirtió esa visión en decisiones concretas: comunicar no es suficiente si la visión no se traduce en cambios dentro de la organización.",
      "PwC muestra la otra cara: más cambio, comunicado con rapidez, también puede abrumar a los equipos. En efecto, 34% de los líderes de banca considera la fatiga de cambio una barrera para escalar la IA.",
    ],
    chocan_en: [
      "Bain suggests that communicating the vision is what distinguishes the companies that scale. However, the same study shows that only 20% of them have turned that vision into concrete decisions: communicating is not enough if the vision does not translate into changes within the organization.",
      "PwC shows the other side: more change, communicated quickly, can also overwhelm teams. Indeed, 34% of banking leaders see change fatigue as a barrier to scaling AI.",
    ],

    porque_es:
      "Los tres estudios analizan industrias distintas (consumo, ciencias de la vida y banca) y etapas distintas de adopción. Sin embargo, comparten un rasgo: los tres encuestan a líderes, no a colaboradores. Por eso, muestran cómo ven el cambio quienes lo dirigen, pero dicen poco sobre cómo lo viven quienes lo atraviesan.",
    porque_en:
      "The three studies look at different industries (consumer goods, life sciences and banking) and different stages of adoption. However, they share one trait: all three survey leaders, not employees. As a result, they show how those leading the change see it, but say little about how those going through it experience it.",

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
