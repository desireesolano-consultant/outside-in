// Textos fijos de la interfaz (botones, títulos de sección), en español e inglés.
// Esto es distinto de los datos de contenido en datos.js: aquí van las "etiquetas" del sitio.

const TEXTOS = {
  es: {
    subtitulo: "Tendencias de industria y transformación organizacional · por Desiree Solano",
    heroTagline: "Tendencias de industria y transformación organizacional",
    botonIdioma: "English",
    introTitulo: "Te doy la bienvenida a Outside-In",

    navSobre: "Sobre Outside-In",
    navHallazgos: "Hallazgos",
    navLoQueSigo: "Lo que sigo de cerca",
    navMatriz: "Matriz",
    menuAbrir: "Abrir menú",
    menuCerrar: "Cerrar menú",

    heroPalabra1: "Entender",
    heroPalabra2: "Conectar",
    heroPalabra3: "Anticipar",
    heroParrafoPre: "Leo y analizo qué pasa con",
    heroParrafoMid: "en",
    heroParrafoPost: "para que lo conectes con tu organización y te anticipes al cambio.",
    heroSaludo: "Hola, soy Desiree Solano",
    heroCargo: "Consultora en estrategia de comunicación y transformación",
    heroParrafo1:
      "Mi trabajo siempre empieza por el mismo lugar: entender qué está pasando. Leer el contexto, encontrar el insight que importa y convertirlo en estrategia y en comunicación, que para mí es la herramienta más poderosa de cualquier transformación. Outside-In nace de esa forma de trabajar, la que creo que todo consultor debería tener.",
    heroParrafo2:
      "Aquí leo lo que publican grandes consultoras, empresas y otras fuentes sobre lo que está cambiando, y te comparto mi mirada. No busco decirte qué hacer, porque cada organización es un mundo. Quiero que encuentres la información que te sirve y la lleves a tu propia realidad.",
    heroCtaPrimario: "Empieza por entender",
    heroCtaSecundario: "Ver por industria",

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

    hallazgosEtiqueta: "02 — Hallazgos recientes",
    hallazgosTitulo: "Lo último que leí",
    hallazgosVerTodos: "Ver todos los hallazgos →",
    hallazgosEjemploBadge: "EJEMPLO",

    loQueSigoEtiqueta: "03 — Lo que sigo de cerca",
    loQueSigoTitulo: "Lo que sigo de cerca",
    tarjetaTemaEtiqueta: "Tema",
    tarjetaIndustriaEtiqueta: "Industria",
    tarjetaVerHallazgos: "Ver hallazgos →",

    matrizEtiqueta: "04 — Matriz",
    matrizTitulo: "Matriz de tendencias por industria y tema",
    matrizAyuda: "Haz clic en una casilla para ver los hallazgos.",

    linkedinFooter: "LinkedIn",

    hallazgosPlural: "hallazgos",
    hallazgoSingular: "hallazgo",
    datosTitulo: "Lo que dicen los datos",
    implicanciaTitulo: "Implicancia para el negocio",
    borradorEtiqueta: "BORRADOR",
    fuenteLabel: "Fuente",
    estudioLabel: "Estudio",
    anioLabel: "Año",
    regionLabel: "Región",
    linkLabel: "Ver fuente",
    sinHallazgos: "Todavía no hay hallazgos cargados para este cruce.",
  },
  en: {
    subtitulo: "Industry trends and organizational transformation · by Desiree Solano",
    heroTagline: "Industry trends and organizational transformation",
    botonIdioma: "Español",
    introTitulo: "Welcome to Outside-In",

    navSobre: "About Outside-In",
    navHallazgos: "Findings",
    navLoQueSigo: "What I follow closely",
    navMatriz: "Matrix",
    menuAbrir: "Open menu",
    menuCerrar: "Close menu",

    heroPalabra1: "Understand",
    heroPalabra2: "Connect",
    heroPalabra3: "Anticipate",
    heroParrafoPre: "I read and analyze what's happening with",
    heroParrafoMid: "in",
    heroParrafoPost: "so you can connect it to your organization and get ahead of change.",
    heroSaludo: "Hi, I'm Desiree Solano",
    heroCargo: "Communication Strategy & Transformation Consultant",
    heroParrafo1:
      "My work always starts in the same place: understanding what's happening. Reading the context, finding the insight that matters, and turning it into strategy and communication — which, to me, is the most powerful tool in any transformation. Outside-In grew out of that way of working, the one I believe every consultant should have.",
    heroParrafo2:
      "Here I read what major consulting firms, companies, and other sources publish about what's changing, and I share my perspective with you. I'm not trying to tell you what to do, because every organization is its own world. I want you to find the information that's useful to you and bring it into your own reality.",
    heroCtaPrimario: "Start by understanding",
    heroCtaSecundario: "Browse by industry",

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

    hallazgosEtiqueta: "02 — Recent findings",
    hallazgosTitulo: "The latest I've read",
    hallazgosVerTodos: "See all findings →",
    hallazgosEjemploBadge: "EXAMPLE",

    loQueSigoEtiqueta: "03 — What I follow closely",
    loQueSigoTitulo: "What I follow closely",
    tarjetaTemaEtiqueta: "Topic",
    tarjetaIndustriaEtiqueta: "Industry",
    tarjetaVerHallazgos: "See findings →",

    matrizEtiqueta: "04 — Matrix",
    matrizTitulo: "Trend matrix by industry and topic",
    matrizAyuda: "Click a cell to see the findings.",

    linkedinFooter: "LinkedIn",

    hallazgosPlural: "findings",
    hallazgoSingular: "finding",
    datosTitulo: "What the data says",
    implicanciaTitulo: "Business implication",
    borradorEtiqueta: "DRAFT",
    fuenteLabel: "Source",
    estudioLabel: "Study",
    anioLabel: "Year",
    regionLabel: "Region",
    linkLabel: "View source",
    sinHallazgos: "No findings loaded yet for this combination.",
  },
};
