// =====================================================================
// Traducción al inglés de la portada (index.html) y de "Qué es
// Outside-In" (que-es.html).
//
// Cómo funciona: cada texto en español de esas páginas tiene aquí su
// versión en inglés. Si la persona eligió inglés, al cargar la página
// se reemplaza cada texto por su traducción. El idioma se guarda en el
// navegador con la misma clave ("idioma") que usan hallazgo.html e
// insight.html, así toda la web queda en el mismo idioma.
//
// Si cambias un texto en español en el HTML, cambia también aquí la
// clave (el texto en español) y su traducción.
// =====================================================================

function idiomaActual() {
  try {
    const g = localStorage.getItem("idioma");
    if (g === "es" || g === "en") return g;
  } catch (e) {}
  return "es";
}

function cambiarIdiomaPagina() {
  const nuevo = idiomaActual() === "es" ? "en" : "es";
  try { localStorage.setItem("idioma", nuevo); } catch (e) {}
  location.reload();
}

const TRADUCCION_EN = {
  // Encabezado y pie
  "Qué es Outside-In": "What is Outside-In",
  "Estudios": "Studies",
  "Insights": "Insights",
  "Mi mirada": "My view",
  "Sobre mí": "About me",
  "Detrás de Outside-In": "Behind Outside-In",
  "Las nuevas tendencias en las organizaciones · por Desirée Solano": "The new trends in organizations · by Desirée Solano",
  "© 2026 Desirée Solano. Outside-In: concepto, diseño, textos y sistema. Todos los derechos reservados. Diseñado y construido con Claude Code.": "© 2026 Desirée Solano. Outside-In: concept, design, copy and system. All rights reserved. Designed and built with Claude Code.",

  // Portada
  "¿List@ para ponerte al día?": "Ready to catch up?",
  "Las nuevas tendencias en las organizaciones,": "The new trends in organizations,",
  "en un solo lugar.": "in one place.",
  "Cómo funciona ↓": "How it works ↓",
  "Ver los estudios": "See the studies",
  "Creado, diseñado y automatizado por": "Created, designed and automated by",
  "Baja para descubrirlo": "Scroll to discover it",

  // La historia
  "¿Te pasa que salen tantos estudios que es imposible leerlos todos?": "Do you feel there are so many studies out there that it's impossible to read them all?",
  "A mí también.": "So do I.",
  "Por eso creé Outside-In: un solo lugar donde mi sistema encuentra": "That's why I created Outside-In: one place where my system finds,",
  "cada semana": "every week,",
  "las nuevas tendencias en las organizaciones.": "the new trends in organizations.",
  "Y donde yo cruzo la data para contarte dónde coinciden, dónde se contradicen": "And where I cross the data to show you where studies agree, where they contradict each other",
  "y qué significa para ti.": "and what it means for you.",
  "Bienvenid@ a Outside-In.": "Welcome to Outside-In.",
  "Explora los estudios →": "Explore the studies →",
  "Ver los insights": "See the insights",

  // Estudios
  "Cada semana se publican estudios valiosos que casi nadie alcanza a leer. Aquí te cuento lo esencial de cada uno, con los datos que más importan para las organizaciones y el enlace al estudio completo.": "Valuable studies are published every week, and almost no one has time to read them. Here I share the essentials of each one, with the data that matters most for organizations and a link to the full study.",
  "Todos los estudios": "All studies",
  "Por tema e industria": "By topic and industry",
  "Recién detectados": "Just detected",
  "Quiero ver qué dicen los estudios sobre": "I want to see what studies say about",
  "en": "in",

  // Insights
  "Muchos estudios miran los mismos temas, pero no siempre llegan a las mismas conclusiones. Aquí los pongo a conversar.": "Many studies look at the same topics, but they don't always reach the same conclusions. Here I put them in conversation.",
  "Leer el insight completo →": "Read the full insight →",
  "Mi sistema ya está buscando el próximo cruce.": "My system is already looking for the next crossover.",

  // Mi mirada
  "Los datos cuentan una parte de la historia. Aquí te cuento lo que veo yo.": "Data tells part of the story. Here I share what I see.",
  "Lo que veo yo.": "What I see.",
  "Mis columnas · Muy pronto": "My columns · Coming soon",
  "Cada columna parte de un insight.": "Each column starts from an insight.",
  "Te cuento qué significa para quienes lideran: en primera persona, breve y con una pregunta para seguir la conversación en LinkedIn.": "I share what it means for those who lead: in first person, brief, and with a question to keep the conversation going on LinkedIn.",
  "Cada trimestre · Primera edición muy pronto": "Every quarter · First edition coming soon",
  "Juntando las piezas": "Putting the pieces together",
  "Mi propio estudio de estudios: lo que dicen decenas de investigaciones sobre las tendencias en las organizaciones, con una mirada especial en Latinoamérica.": "My own study of studies: what dozens of research reports say about trends in organizations, with a special focus on Latin America.",

  // Franjas de palabras y palabras que flotan
  "Tendencias": "Trends",
  "Data": "Data",
  "Transformación": "Transformation",
  "Organizaciones": "Organizations",
  "Banca": "Banking",
  "Salud y farmacéutica": "Life Sciences",
  "Consumo masivo": "Consumer goods",
  "Liderazgo": "Leadership",
  "Cultura": "Culture",
  "Inteligencia artificial": "Artificial intelligence",
  "Gestión del cambio": "Change management",
  "Reportes": "Reports",

  "Por": "By",
  // Sobre mí
  "Hace más de 7 años acompaño a líderes de empresas de Latinoamérica y Estados Unidos en momentos de cambio: una fusión, una cultura que se transforma, un propósito que hay que llevar a toda la organización, una marca empleadora que construir.": "For more than 7 years I've worked alongside leaders at companies across Latin America and the United States in moments of change: a merger, a culture in transformation, a purpose that has to reach the whole organization, an employer brand to build.",
  "Los cambios no solo los he acompañado: también los he vivido. Perú, Argentina y Estados Unidos me enseñaron, en carne propia, lo que significa empezar de nuevo": "I haven't only accompanied change: I've lived it. Peru, Argentina and the United States taught me, firsthand, what it means to start over",
  "(spoiler: adaptarse también es aprender que la canchita ahora se llama pochoclo… y pedirlo salado, porque si no te lo dan dulce)": "(spoiler: adapting also means learning that popcorn has a new name in Argentina… and ordering it salty, because otherwise it comes sweet)",
  ". Quizás por eso, en cada proyecto, lo primero que pienso es a quién le impacta el cambio. Para mí, empatizar es escuchar y entender antes de proponer": ". Maybe that's why, in every project, the first thing I think about is who the change affects. For me, empathy means listening and understanding before proposing",
  "(sí, incluso cuando ya tengo la respuesta en la punta de la lengua)": "(yes, even when the answer is already on the tip of my tongue)",
  "Con los años entendí que mi trabajo vive entre dos mundos. Por un lado están los líderes, que necesitan entender el negocio, la industria y el contexto para decidir bien. Por otro, las personas, a quienes cada decisión les cambia el día a día. Mi rol es conectar ambos: que las decisiones se tomen con contexto y se comuniquen pensando en quienes las viven.": "Over the years I realized my work lives between two worlds. On one side are leaders, who need to understand the business, the industry and the context to decide well. On the other, people, whose day-to-day changes with every decision. My role is to connect both: so decisions are made with context and communicated with the people who live them in mind.",
  "Outside-In nace para el primero de esos mundos.": "Outside-In was born for the first of those worlds.",
  "Entender el contexto toma tiempo: los estudios que explican hacia dónde van las organizaciones existen, pero están dispersos, son largos y pocas veces conversan entre sí. Por eso lo creé, diseñé y automaticé: para que líderes y equipos de consultoría encuentren cada semana, en un solo lugar, en qué coinciden esos estudios, en qué se contradicen y qué preguntas dejan abiertas.": "Understanding context takes time: the studies that explain where organizations are heading exist, but they're scattered, long and rarely talk to each other. That's why I created, designed and automated it: so leaders and consulting teams can find, every week and in one place, where those studies agree, where they contradict each other and what questions they leave open.",
  "Y algo más personal: a veces, en mi casa hay un perrito en tránsito, esperando a la familia que lo va a adoptar. 🐾": "And something more personal: sometimes there's a foster pup at my home, waiting for the family that will adopt it. 🐾",
  "Si estás liderando un cambio, o pensando en el próximo, conversemos.": "If you're leading a change, or thinking about the next one, let's talk.",
  "De organizaciones, de cultura, de IA… y, si quieres, también de perros. ☕": "About organizations, culture, AI… and, if you'd like, about dogs too. ☕",
  "Cómo funciona →": "How it works →",
  "Los estudios cuentan qué está pasando. Aquí te comparto cómo lo leo yo: las conexiones que veo, lo que me sorprende y las preguntas que me deja.": "Studies tell us what's happening. Here I share how I read it: the connections I see, what surprises me and the questions it leaves me with.",
  "Pero lo que más disfruto no está en las presentaciones: está en las personas. Sentarme a escuchar, entender qué les preocupa y encontrar la forma de contarlo para que todos se suban al cambio.": "But what I enjoy most isn't in the slides: it's in the people. Sitting down to listen, understanding what worries them and finding the way to tell it so everyone gets on board with the change.",
  "He vivido en Perú, Argentina y Estados Unidos, y cada mudanza me enseñó lo mismo: primero se entiende el contexto, después se opina. De ahí nació Outside-In: para leer lo que nadie tiene tiempo de leer, encontrar dónde coinciden y dónde se contradicen los estudios, y contártelo en simple.": "I've lived in Peru, Argentina and the United States, and every move taught me the same thing: first you understand the context, then you give an opinion. That's where Outside-In was born: to read what no one has time to read, find where studies agree and where they contradict each other, and tell you about it simply.",
  "Si te gusta conversar de cultura, comunicación, IA… o de perros, escríbeme. Me encanta conocer gente nueva. ☕": "If you like talking about culture, communication, AI… or dogs, write to me. I love meeting new people. ☕",
  "Lo que dicen de mi trabajo": "What people say about my work",
  "Ver todas las recomendaciones en LinkedIn →": "See all recommendations on LinkedIn →",
  "¿Eres de las personas que no puede quedarse con una pregunta sin responder? Yo tampoco.": "Are you the kind of person who can't leave a question unanswered? Neither am I.",
  "Necesito entender por qué pasan las cosas y armar el rompecabezas hasta que todo encaje. Esa curiosidad me ha acompañado durante más de 7 años en transformaciones de empresas, desde Accenture y APOYO Comunicación, con clientes Fortune 500.": "I need to understand why things happen and put the puzzle together until everything fits. That curiosity has been with me for more than 7 years of company transformations, at Accenture and APOYO Comunicación, with Fortune 500 clients.",
  "Si te gusta conversar de cultura, comunicación, IA… o de perros, escríbeme. ☕": "If you like talking about culture, communication, AI… or dogs, write to me. ☕",
  "Copiar correo": "Copy email",
  "Escríbeme": "Write to me",
  "Conectemos en LinkedIn": "Let's connect on LinkedIn",

  // Qué es Outside-In
  "Un solo lugar para entender hacia dónde van las organizaciones": "One place to understand where organizations are heading",
  "Outside-In reúne los estudios públicos que muestran": "Outside-In brings together the public studies that show",
  "las nuevas tendencias": "the new trends",
  "en las organizaciones, con": "in organizations, with",
  "la data": "the data",
  "que las respalda. Cada semana, un sistema que diseñé los encuentra y los resume. Después, yo los cruzo y les doy contexto, para que puedas tomar mejores decisiones.": "behind them. Every week, a system I designed finds and summarizes them. Then I cross them and give them context, so you can make better decisions.",
  "01 — Por qué existe": "01 — Why it exists",
  "Porque entender el contexto cambia las decisiones": "Because understanding the context changes decisions",
  "En mis años como consultora aprendí algo: las mejores decisiones no salen de tener más respuestas, sino de entender bien lo que está pasando alrededor. Qué están viviendo otras organizaciones, otras industrias, otros mercados.": "In my years as a consultant I learned something: the best decisions don't come from having more answers, but from truly understanding what's happening around you. What other organizations, other industries and other markets are going through.",
  "Esa información existe. Cada semana se publican estudios valiosos sobre las organizaciones. Pero llegar a ellos, leerlos y conectarlos toma un tiempo que casi nadie tiene. A mí también me pasaba.": "That information exists. Valuable studies about organizations are published every week. But finding them, reading them and connecting them takes time that almost no one has. It happened to me too.",
  "LO QUE ME PASABA": "WHAT HAPPENED TO ME",
  "Los estudios estaban dispersos": "Studies were scattered",
  "Cada uno se publica en un sitio distinto, con su propio formato y su propio calendario.": "Each one is published on a different site, with its own format and its own calendar.",
  "No tenía tiempo para leerlos completos": "I didn't have time to read them in full",
  "Son documentos largos, y lo más valioso no siempre está al inicio.": "They are long documents, and the most valuable part isn't always at the beginning.",
  "Nadie los ponía a conversar": "No one put them in conversation",
  "Cada estudio mira su parte. Me faltaba ver dónde coinciden y dónde se contradicen.": "Each study looks at its own piece. I was missing where they agree and where they contradict each other.",
  "“Más que darte respuestas, busco darte el contexto para que encuentres tu propio camino.”": "“More than giving you answers, I aim to give you the context to find your own path.”",
  "Por eso creé": "That's why I created",
  "un solo lugar": "one place",
  "para ponerte al día": "to catch up",
  "Siempre al día": "Always up to date",
  "Cada lunes llegan estudios nuevos. No tienes que buscarlos: el sistema lo hace por ti.": "New studies arrive every Monday. You don't have to look for them: the system does it for you.",
  "Estudios confiables": "Trustworthy studies",
  "Solo estudios públicos, de fuentes sólidas y con cada dato enlazado a su original.": "Only public studies, from solid sources, with every data point linked to its original.",
  "Los datos, conversando": "Data in conversation",
  "Pongo los estudios lado a lado para mostrarte dónde coinciden y dónde se contradicen.": "I put studies side by side to show you where they agree and where they contradict each other.",
  "Con mirada propia": "With my own view",
  "Te comparto mi lectura como consultora: qué significa todo esto para quienes lideran.": "I share my reading as a consultant: what all this means for those who lead.",
  "02 — Cómo está estructurado": "02 — How it's structured",
  "Tres espacios que van de la data a la mirada": "Three spaces that go from data to perspective",
  "Puedes recorrerlos en orden o ir directo al que necesites. Cada uno suma una capa más.": "You can go through them in order or jump straight to the one you need. Each one adds another layer.",
  "Lo que dicen": "What they say",
  "Cada estudio, resumido en su propia página: el hallazgo principal, la data clave, las preguntas que abre y el enlace al original.": "Each study, summarized on its own page: the main finding, the key data, the questions it opens and the link to the original.",
  "Ver los estudios →": "See the studies →",
  "Lo que significan juntos": "What they mean together",
  "Artículos que cruzan varios estudios sobre un mismo tema: en qué coinciden, en qué se contradicen y por qué.": "Articles that cross several studies on the same topic: where they agree, where they contradict each other and why.",
  "Ver los insights →": "See the insights →",
  "Lo que veo yo": "What I see",
  "Mi lectura como consultora: qué implican estas tendencias para las organizaciones y para quienes las lideran.": "My reading as a consultant: what these trends imply for organizations and for those who lead them.",
  "Ver mi mirada →": "See my view →",
  "03 — Cómo funciona": "03 — How it works",
  "Una semana en Outside-In": "A week at Outside-In",
  "Creé, diseñé y automaticé este sistema para que la tecnología haga el trabajo de buscar, revisar y resumir. Así yo puedo dedicarme a lo que más disfruto: encontrar el sentido detrás de los datos.": "I created, designed and automated this system so technology does the work of searching, reviewing and summarizing. That way I can focus on what I enjoy most: finding the meaning behind the data.",
  "Cada lunes": "Every Monday",
  "Detecta": "Detects",
  "El sistema sale a buscar estudios nuevos en las fuentes que más pesan en el mundo de las organizaciones.": "The system goes out to find new studies from the sources that carry the most weight in the world of organizations.",
  "Uno por uno": "One by one",
  "Filtra": "Filters",
  "Revisa cada estudio con los mismos criterios: que sea público, que la fuente sea sólida y que la muestra sea grande. Si algo no se puede verificar, queda afuera.": "It reviews each study with the same criteria: it must be public, the source must be solid and the sample must be large. If something can't be verified, it stays out.",
  "Ese mismo día": "That same day",
  "Resume y publica": "Summarizes and publishes",
  "Los estudios que cumplen se publican en español y en inglés, con su hallazgo, su data clave y el enlace al original.": "The studies that qualify are published in Spanish and English, with their finding, their key data and the link to the original.",
  "Aquí entro yo": "This is where I come in",
  "Cruza": "Crosses",
  "Pongo los estudios lado a lado, busco los patrones y escribo los insights y mi mirada. Esta parte no se automatiza: es mi forma de pensar.": "I put the studies side by side, look for patterns and write the insights and my view. This part isn't automated: it's the way I think.",
  "Conoce el detrás de escena →": "See behind the scenes →",
  "04 — Los criterios": "04 — The criteria",
  "No todo estudio entra": "Not every study makes it in",
  "Para mí, la confianza es lo más importante. Por eso cada estudio pasa por las mismas reglas antes de llegar a ti.": "For me, trust matters most. That's why every study goes through the same rules before it reaches you.",
  "Fuentes sólidas": "Solid sources",
  "Estudios de consultoras, instituciones financieras, cámaras de comercio e institutos de investigación.": "Studies from consulting firms, financial institutions, chambers of commerce and research institutes.",
  "Solo estudios públicos": "Public studies only",
  "Cualquier persona puede acceder al original. Nunca estudios pagos.": "Anyone can access the original. Never paid studies.",
  "Muestras grandes": "Large samples",
  "Al menos 1,000 trabajadores o 100 ejecutivos encuestados.": "At least 1,000 workers or 100 executives surveyed.",
  "Data verificable": "Verifiable data",
  "Cada dato viene del estudio original, con su enlace. Si no se puede verificar, no se publica.": "Every data point comes from the original study, with its link. If it can't be verified, it isn't published.",
  "Temas": "Topics",
  "Gestión del cambio y transformación": "Change management and transformation",
  "Inteligencia artificial y personas": "Artificial intelligence and people",
  "Liderazgo, cultura y comunicación": "Leadership, culture and communication",
  "Industrias y geografía": "Industries and geography",
  "Servicios financieros": "Financial services",
  "América primero, y estudios globales": "The Americas first, plus global studies",
  "05 — Por qué Outside-In": "05 — Why Outside-In",
  "Mirar afuera para entender adentro": "Looking outside to understand inside",
  "Lo que pasa en el mercado, en otras industrias y en otras organizaciones nos ayuda a entender lo que está pasando dentro de la nuestra. Outside-In trae esa mirada externa, con data, a un solo lugar.": "What happens in the market, in other industries and in other organizations helps us understand what's happening inside our own. Outside-In brings that outside view, with data, into one place.",
  "Afuera": "Outside",
  "Adentro.": "Inside.",
  "Bienvenid@ a Outside-In": "Welcome to Outside-In",
  "Lo creé para que ponerte al día sea simple. Ojalá te ayude tanto como me ayuda a mí.": "I created it to make catching up simple. I hope it helps you as much as it helps me.",
  "Conóceme": "Get to know me",
  "© 2026 Desirée Solano · Outside-In": "© 2026 Desirée Solano · Outside-In",
};

// Atributos (textos que no se ven, pero que leen los lectores de pantalla)
const TRADUCCION_ATRIBUTOS_EN = {
  "Buscar estudios": "Search studies",
  "Abrir menú": "Open menu",
  "Busca un tema: IA, banca, cultura…": "Search a topic: AI, banking, culture…",
  "Anteriores": "Previous",
  "Siguientes": "Next",
};

// Traduce un texto suelto (lo usan también los scripts de las páginas).
function tr(texto) {
  return idiomaActual() === "en" && TRADUCCION_EN[texto] ? TRADUCCION_EN[texto] : texto;
}

// Recorre la página y cambia cada texto en español por su versión en inglés.
function traducirPagina() {
  const en = idiomaActual() === "en";
  document.documentElement.lang = en ? "en" : "es";
  document.querySelectorAll(".idioma").forEach((b) => { b.textContent = en ? "Español" : "English"; });
  if (!en) return;
  const recorrer = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodos = [];
  while (recorrer.nextNode()) nodos.push(recorrer.currentNode);
  nodos.forEach((n) => {
    const limpio = n.nodeValue.trim();
    if (!limpio || !(limpio in TRADUCCION_EN)) return;
    const antes = n.nodeValue.match(/^\s*/)[0];
    const despues = n.nodeValue.match(/\s*$/)[0];
    n.nodeValue = antes + TRADUCCION_EN[limpio] + despues;
  });
  document.querySelectorAll("[aria-label],[placeholder]").forEach((el) => {
    ["aria-label", "placeholder"].forEach((a) => {
      const v = el.getAttribute(a);
      if (v && TRADUCCION_ATRIBUTOS_EN[v]) el.setAttribute(a, TRADUCCION_ATRIBUTOS_EN[v]);
    });
  });
}
