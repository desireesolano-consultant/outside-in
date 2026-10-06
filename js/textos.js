// Textos fijos de la interfaz (botones, títulos de sección), en español e inglés.
// Esto es distinto de los datos de contenido en datos.js: aquí van las "etiquetas" del sitio.

const TEXTOS = {
  es: {
    subtitulo: "Tendencias de industria y transformación organizacional · por Desiree Solano",
    heroTagline: "Tendencias de industria y transformación organizacional",
    botonIdioma: "English",
    introTitulo: "Te doy la bienvenida a Outside-In",

    navSobre: "Sobre Outside-In",
    navEntender: "Entender",
    navAterrizar: "Aterrizar",
    navDescubrir: "Descubrir",
    navAsiAutomatice: "Así automaticé Outside-In",
    menuAbrir: "Abrir menú",
    menuCerrar: "Cerrar menú",

    heroPalabra1: "Entender",
    heroPalabra2: "Aterrizar",
    heroPalabra3: "Descubrir",
    heroParrafoPre: "Leo y analizo qué pasa con",
    heroParrafoMid: "en",
    heroParrafoPost: "para que lo aterrices en tu organización y descubras lo que viene.",
    heroSaludo: "Hola, soy Desiree Solano",
    heroCargo: "Consultora en estrategia de comunicación y transformación",
    heroParrafo1:
      "Mi trabajo siempre empieza por el mismo lugar: entender qué está pasando. Leer el contexto, encontrar el insight que importa y convertirlo en estrategia y en comunicación, que para mí es la herramienta más poderosa de cualquier transformación. Outside-In nace de esa forma de trabajar, la que creo que todo consultor debería tener.",
    heroParrafo2:
      "Aquí leo lo que publican grandes consultoras, empresas y otras fuentes sobre lo que está cambiando, y te comparto mi mirada. No busco decirte qué hacer, porque cada organización es un mundo. Quiero que encuentres la información que te sirve y la lleves a tu propia realidad.",
    heroCtaPrimario: "Empieza por entender",
    heroCtaSecundario: "Así automaticé Outside-In →",

    diagramaCentro: "Mi mirada",
    diagramaEstudios: "Estudios",
    diagramaReportes: "Reportes",
    diagramaEncuestas: "Encuestas",
    diagramaRankings: "Rankings",
    diagramaDatos: "Datos",
    diagramaInvestigacion: "Investigación",
    diagramaTendencias: "Tendencias",

    sobreEtiqueta: "01 — Sobre Outside-In",
    sobreCita:
      "“Las organizaciones que mejor se transforman son las que se mantienen curiosas y entienden su contexto antes de que el cambio las alcance.”",
    sobreBoton: "Por qué creé Outside-In",

    entenderEtiqueta: "01 — Entender",
    entenderTitulo: "Mi análisis por tema e industria",
    entenderBajada: "Mis lecturas sobre un tema o una industria en particular, cada una con su fuente original y mi mirada.",
    entenderVerConexiones: "Ver conexiones →",

    aterrizarEtiqueta: "02 — Aterrizar",
    aterrizarTitulo: "Lo que conecto",
    aterrizarBajada: "Elige un tema y una industria, mira qué está pasando donde se encuentran y llévalo a tu organización.",
    aterrizarFrasePre: "Muéstrame qué pasa con",
    aterrizarFraseMid: "en",
    aterrizarVacio: "Todavía no hay hallazgos en esta combinación.",

    descubrirEtiqueta: "03 — Descubrir",
    descubrirTitulo: "Lo que estoy leyendo ahora",
    descubrirBajada: "Estudios que acabo de detectar y todavía estoy leyendo, para que descubras lo que viene.",

    asiAutomaticeEtiqueta: "04 — Así automaticé Outside-In",
    asiAutomaticeTitulo: "Así automaticé Outside-In",
    asiAutomaticeContador: "Esta semana",
    asiAutomaticeCierre: "La IA lee mucho. Yo decido qué importa.",
    asiAutomaticeLeerMas: "Lee la historia completa →",

    cfEtiquetaEstudio: "Estudio",
    cfEtiquetaReporte: "Reporte",
    cfEtiquetaEncuesta: "Encuesta",
    cfEtiquetaRanking: "Ranking",
    cfEtiquetaDatos: "Datos",
    cfFichaEjemploTitulo: "[EJEMPLO] Un hallazgo recién detectado",
    cfFichaEjemploFuente: "Fuente de ejemplo",
    cfFichaEjemploLectura: "Mi lectura: así se vería mi análisis sobre este hallazgo.",

    paso1Titulo: "Rastreo",
    paso1Desc: "Un sistema que construí con Claude Code revisa cada semana nuevos estudios de consultoras, empresas y otras fuentes.",
    paso2Titulo: "Curaduría",
    paso2Desc: "Leo con calma lo que encuentra y me quedo con lo que realmente puede aportar.",
    paso3Titulo: "Lectura",
    paso3Desc: "Lo comparto con su fuente original y mi mirada como consultora.",

    senalActualizadoPrefijo: "Actualizado el",
    senalEstudiosLabel: "estudios revisados",
    senalNuevoSingular: "hallazgo nuevo esta semana",
    senalNuevoPlural: "hallazgos nuevos esta semana",

    franjaVistaPrevia: "Vista previa con datos de ejemplo",

    linkedinFooter: "LinkedIn",
    footerFirma: "Diseñado y construido por Desiree Solano con Claude Code",

    detrasTitulo: "Detrás de Outside-In",
    detrasBajada: "Cómo y por qué lo construí",
    detras1Titulo: "Por qué existe",
    detras1Texto:
      "Les digo a mis clientes que la tecnología no reemplaza el criterio, lo amplifica. Outside-In es mi forma de probarlo en carne propia: un espacio donde la IA me ayuda a leer más, y yo decido qué importa.",
    detras2Titulo: "Quién lo construyó",
    detras2Texto:
      "Soy consultora en comunicación y transformación, no programadora. Construí Outside-In con Claude Code, una herramienta de IA con la que fui creando el sitio y su sistema paso a paso, conversando en español sobre lo que necesitaba.",
    detras3Titulo: "Qué hace el sistema",
    detras3Texto:
      "Cada semana revisa nuevas publicaciones de consultoras, empresas y otras fuentes, detecta los estudios relevantes para los temas e industrias que sigo, y me propone posibles hallazgos.",
    detras4Titulo: "Dónde entra mi mirada",
    detrasCita: "El sistema me ayuda a ver más; mi trabajo es ver mejor.",
    detras4Texto:
      "Leo cada estudio, busco lo que realmente puede ser útil y lo comparto con su fuente original y mi mirada como consultora.",
    detras5Titulo: "Lo que aprendí construyéndolo",
    detras5Texto:
      "Aprendí qué hace cada programa y, sobre todo, cómo conversan entre sí. Al final, un sistema funciona como una organización: cada parte cumple su rol, pero lo que hace la diferencia es cómo se comunican. También aprendí que siempre se puede iterar. Nada queda terminado del todo, y eso es una ventaja. Outside-In es mi primer paso: el inicio de todo lo que quiero seguir automatizando.",
    detrasCtaHallazgos: "Explorar los hallazgos →",
    detrasCtaLinkedin: "Conversemos en LinkedIn →",

    hallazgosPlural: "hallazgos",
    hallazgoSingular: "hallazgo",
    hallazgosEjemploBadge: "EJEMPLO",
    etiquetaNuevo: "Nuevo",
    datosTitulo: "Lo que dicen los datos",
    implicanciaTitulo: "Implicancia para el negocio",
    borradorEtiqueta: "BORRADOR",
    fuenteLabel: "Fuente",
    estudioLabel: "Estudio",
    anioLabel: "Año",
    regionLabel: "Región",
    linkLabel: "Ver fuente",
    radarDetectadoLabel: "Detectado el",
  },
  en: {
    subtitulo: "Industry trends and organizational transformation · by Desiree Solano",
    heroTagline: "Industry trends and organizational transformation",
    botonIdioma: "Español",
    introTitulo: "Welcome to Outside-In",

    navSobre: "About Outside-In",
    navEntender: "Understand",
    navAterrizar: "Ground",
    navDescubrir: "Discover",
    navAsiAutomatice: "How I automated Outside-In",
    menuAbrir: "Open menu",
    menuCerrar: "Close menu",

    heroPalabra1: "Understand",
    heroPalabra2: "Ground",
    heroPalabra3: "Discover",
    heroParrafoPre: "I read and analyze what's happening with",
    heroParrafoMid: "in",
    heroParrafoPost: "so you can ground it in your organization and discover what's coming.",
    heroSaludo: "Hi, I'm Desiree Solano",
    heroCargo: "Communication Strategy & Transformation Consultant",
    heroParrafo1:
      "My work always starts in the same place: understanding what's happening. Reading the context, finding the insight that matters, and turning it into strategy and communication — which, to me, is the most powerful tool in any transformation. Outside-In grew out of that way of working, the one I believe every consultant should have.",
    heroParrafo2:
      "Here I read what major consulting firms, companies, and other sources publish about what's changing, and I share my perspective with you. I'm not trying to tell you what to do, because every organization is its own world. I want you to find the information that's useful to you and bring it into your own reality.",
    heroCtaPrimario: "Start by understanding",
    heroCtaSecundario: "How I automated Outside-In →",

    diagramaCentro: "My take",
    diagramaEstudios: "Studies",
    diagramaReportes: "Reports",
    diagramaEncuestas: "Surveys",
    diagramaRankings: "Rankings",
    diagramaDatos: "Data",
    diagramaInvestigacion: "Research",
    diagramaTendencias: "Trends",

    sobreEtiqueta: "01 — About Outside-In",
    sobreCita:
      "“The organizations that transform best are the ones that stay curious and understand their context before change catches up with them.”",
    sobreBoton: "Why I created Outside-In",

    entenderEtiqueta: "01 — Understand",
    entenderTitulo: "My analysis by topic and industry",
    entenderBajada: "My take on a single topic or industry, each with its original source and my perspective.",
    entenderVerConexiones: "See connections →",

    aterrizarEtiqueta: "02 — Ground",
    aterrizarTitulo: "What I connect",
    aterrizarBajada: "Pick a topic and an industry, see what's happening where they meet, and bring it to your organization.",
    aterrizarFrasePre: "Show me what's happening with",
    aterrizarFraseMid: "in",
    aterrizarVacio: "There are no findings in this combination yet.",

    descubrirEtiqueta: "03 — Discover",
    descubrirTitulo: "What I'm reading right now",
    descubrirBajada: "Studies I've just detected and am still reading, so you can discover what's coming.",

    asiAutomaticeEtiqueta: "04 — How I automated Outside-In",
    asiAutomaticeTitulo: "How I automated Outside-In",
    asiAutomaticeContador: "This week",
    asiAutomaticeCierre: "AI reads a lot. I decide what matters.",
    asiAutomaticeLeerMas: "Read the full story →",

    cfEtiquetaEstudio: "Study",
    cfEtiquetaReporte: "Report",
    cfEtiquetaEncuesta: "Survey",
    cfEtiquetaRanking: "Ranking",
    cfEtiquetaDatos: "Data",
    cfFichaEjemploTitulo: "[EXAMPLE] A finding just detected",
    cfFichaEjemploFuente: "Example source",
    cfFichaEjemploLectura: "My take: this is what my analysis of this finding would look like.",

    paso1Titulo: "Tracking",
    paso1Desc: "A system I built with Claude Code reviews new studies from consultancies, companies, and other sources every week.",
    paso2Titulo: "Curation",
    paso2Desc: "I calmly read through what it finds and keep only what can truly add value.",
    paso3Titulo: "Reading",
    paso3Desc: "I share it with its original source and my perspective as a consultant.",

    senalActualizadoPrefijo: "Updated on",
    senalEstudiosLabel: "studies reviewed",
    senalNuevoSingular: "new finding this week",
    senalNuevoPlural: "new findings this week",

    franjaVistaPrevia: "Preview with example data",

    linkedinFooter: "LinkedIn",
    footerFirma: "Designed and built by Desiree Solano with Claude Code",

    detrasTitulo: "Behind Outside-In",
    detrasBajada: "How and why I built it",
    detras1Titulo: "Why it exists",
    detras1Texto:
      "I tell my clients that technology doesn't replace judgment, it amplifies it. Outside-In is my way of proving that firsthand: a space where AI helps me read more, and I decide what matters.",
    detras2Titulo: "Who built it",
    detras2Texto:
      "I'm a communication and transformation consultant, not a programmer. I built Outside-In with Claude Code, an AI tool I used to create the site and its system step by step, talking through what I needed in Spanish.",
    detras3Titulo: "What the system does",
    detras3Texto:
      "Every week it reviews new publications from consultancies, companies, and other sources, detects studies relevant to the topics and industries I follow, and proposes possible findings to me.",
    detras4Titulo: "Where my perspective comes in",
    detrasCita: "The system helps me see more; my job is to see better.",
    detras4Texto:
      "I read every study, look for what could truly be useful, and share it with its original source and my perspective as a consultant.",
    detras5Titulo: "What I learned building it",
    detras5Texto:
      "I learned what each program does and, above all, how they talk to each other. In the end, a system works like an organization: each part plays its role, but what makes the difference is how they communicate. I also learned that you can always iterate. Nothing is ever fully finished, and that's an advantage. Outside-In is my first step: the start of everything I want to keep automating.",
    detrasCtaHallazgos: "Explore the findings →",
    detrasCtaLinkedin: "Let's talk on LinkedIn →",

    hallazgosPlural: "findings",
    hallazgoSingular: "finding",
    hallazgosEjemploBadge: "EXAMPLE",
    etiquetaNuevo: "New",
    datosTitulo: "What the data says",
    implicanciaTitulo: "Business implication",
    borradorEtiqueta: "DRAFT",
    fuenteLabel: "Source",
    estudioLabel: "Study",
    anioLabel: "Year",
    regionLabel: "Region",
    linkLabel: "View source",
    radarDetectadoLabel: "Detected on",
  },
};
