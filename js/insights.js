// =====================================================================
// INSIGHTS de Outside-In: cruces entre estudios.
// El sistema arma la parte de datos (qué dice cada estudio, dónde
// coinciden, dónde chocan y por qué). "Mi mirada" la escribe SOLO
// Desirée: mientras esté en null, la página muestra "Mi mirada: en camino".
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

    titulo_es: "Las empresas ya dieron acceso a la IA. ¿Le explicaron a su gente qué cambia?",
    titulo_en: "Companies have already given people access to AI. Did they explain what changes?",
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
      "Las empresas que más avanzan son las que explican qué cambia en cada rol. La diferencia entre escalar y quedarse en pilotos se parece mucho a una diferencia de comunicación.",
      "Usar la IA no es lo mismo que adoptarla: en consumo, solo 25% de quienes tienen acceso la usa en más del 60% de su trabajo diario, y en banca 43% la usa solo cuando se le exige.",
    ],
    coinciden_en: [
      "Access to AI is moving faster than work redesign: the tools arrive, but roles and routines stay almost the same.",
      "The companies that move furthest are the ones that explain what changes in each role. The gap between scaling and staying in pilots looks a lot like a communication gap.",
      "Using AI is not the same as adopting it: in consumer goods only 25% of those with access use it for more than 60% of their daily work, and in banking 43% use it only when required.",
    ],

    chocan_es: [
      "Bain sugiere que comunicar la visión es lo que separa a quienes escalan. Pero el mismo estudio muestra que solo 20% de esas empresas convirtió esa visión en decisiones concretas: comunicar no alcanza si no se baja a la organización.",
      "PwC muestra el otro lado: más cambio, comunicado rápido, también puede abrumar. 34% de los líderes de banca ve la fatiga de cambio como una barrera para escalar la IA.",
    ],
    chocan_en: [
      "Bain suggests that communicating the vision is what separates the companies that scale. Yet the same study shows only 20% of them have turned that vision into concrete decisions: communicating isn't enough unless it reaches the organization.",
      "PwC shows the other side: more change, communicated fast, can also overwhelm. 34% of banking leaders see change fatigue as a barrier to scaling AI.",
    ],

    porque_es:
      "Miran industrias distintas (consumo, ciencias de la vida y banca) y momentos distintos de adopción. Y hay algo que comparten: los tres preguntan a líderes, no a colaboradores. Sabemos cómo ven el cambio quienes lo dirigen; todavía sabemos poco de cómo lo viven quienes lo atraviesan.",
    porque_en:
      "They look at different industries (consumer goods, life sciences and banking) and different stages of adoption. And they share one thing: all three ask leaders, not employees. We know how the people leading the change see it; we still know little about how the people living it experience it.",

    mirada_es: null,
    mirada_en: null,

    preguntas_es: [
      "¿Tu gente sabe qué va a cambiar en su rol con la IA, o solo sabe que ya tiene acceso a una herramienta?",
      "¿Quién está traduciendo la visión en decisiones concretas: Recursos Humanos, Tecnología o cada líder de área?",
      "¿Cómo estás midiendo la fatiga de cambio antes de lanzar la próxima ola?",
    ],
    preguntas_en: [
      "Do your people know what will change in their role with AI, or only that they now have access to a tool?",
      "Who is turning the vision into concrete decisions: HR, Technology or each area leader?",
      "How are you measuring change fatigue before launching the next wave?",
    ],
  },
];
