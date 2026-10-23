// Lógica del sitio. El contenido vive en datos.js, los textos de interfaz en
// textos.js, y los colores/tipografía en estilos.css — aquí solo "conectamos" todo.

let idioma = "es";
let indiceCapsula = 0;
let combosCapsula = [];

const RAMPA_SECUENCIAL = ["#C9CCFF", "#9AA3F2", "#5C6CE0", "#2440F0", "#1B30B3", "#121F7A"];

function prefiereMovimientoReducido() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function debounce(fn, esperaMs) {
  let temporizador = null;
  return function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(fn, esperaMs);
  };
}

// Un hallazgo tiene tema, industria, o ambos (nunca ninguno).
function esConexion(h) {
  return Boolean(h.tema) && Boolean(h.industria);
}
function esLecturaIndividual(h) {
  return !esConexion(h);
}

function init() {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") idioma = guardado;
  } catch (e) {
    // almacenamiento no disponible (por ejemplo, ventana privada): seguimos con "es"
  }

  aplicarIdioma();
  configurarFranjaVistaPrevia();
  renderizarSobre();
  renderizarSenalVida();
  renderizarEntender();
  configurarAterrizar();
  renderizarDescubrir();
  renderizarBannerCita();
  renderizarRecomendaciones();
  renderizarChipsAsiAutomatice();
  renderizarFichaEjemploAsiAutomatice();
  configurarContadorInlineAsiAutomatice();
  configurarPanelEnVivo();
  iniciarCapsulaRotativa();
  centrarDiagrama();
  verificarEtiquetasDiagrama();
  configurarMenuMovil();
  configurarScrollHorizontalEntender();
  configurarAsiAutomaticeSticky();
  configurarBanner();
  construirPalabrasGigantes();
  animarEntradas();
  configurarRevelado();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(verificarEtiquetasDiagrama);
  }

  document.getElementById("boton-idioma").addEventListener("click", cambiarIdioma);
  const botonCopiar = document.getElementById("boton-copiar-correo");
  if (botonCopiar) {
    botonCopiar.addEventListener("click", async () => {
      const correo = botonCopiar.dataset.correo;
      try {
        await navigator.clipboard.writeText(correo);
      } catch (e) {
        const temporal = document.createElement("textarea");
        temporal.value = correo;
        document.body.appendChild(temporal);
        temporal.select();
        document.execCommand("copy");
        temporal.remove();
      }
      botonCopiar.textContent = TEXTOS[idioma].correoCopiado;
      setTimeout(() => { botonCopiar.textContent = TEXTOS[idioma].copiarCorreo; }, 1800);
    });
  }

  document.getElementById("modal-cerrar").addEventListener("click", () => cerrarModal("modal-fichas"));
  document.getElementById("modal-sobre-cerrar").addEventListener("click", () => cerrarModal("modal-sobre"));
  document.getElementById("boton-sobre").addEventListener("click", abrirModalSobre);

  ["modal-fichas", "modal-sobre"].forEach((idModal) => {
    const modal = document.getElementById(idModal);
    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) cerrarModal(idModal);
    });
  });

  document.querySelectorAll(".oi-cf-progreso-boton, .oi-cf-paso-boton").forEach((boton) => {
    boton.addEventListener("click", () => saltarAEtapaAsiAutomatice(Number(boton.dataset.etapa)));
  });

  document.getElementById("senal-vida").addEventListener("click", () => {
    const seccion = document.getElementById("sobre");
    if (seccion) seccion.scrollIntoView({ behavior: prefiereMovimientoReducido() ? "auto" : "smooth" });
  });


  let tickeando = false;
  window.addEventListener(
    "scroll",
    () => {
      if (tickeando) return;
      tickeando = true;
      requestAnimationFrame(() => {
        actualizarScrollHorizontalEntender();
        actualizarAsiAutomaticeSticky();
        actualizarBanner();
        actualizarZoomEntrada();
        tickeando = false;
      });
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    debounce(() => {
      centrarDiagrama();
      verificarEtiquetasDiagrama();
      configurarScrollHorizontalEntender();
      configurarAsiAutomaticeSticky();
      configurarBanner();
    }, 200)
  );
}

function cambiarIdioma() {
  idioma = idioma === "es" ? "en" : "es";
  try {
    localStorage.setItem("idioma", idioma);
  } catch (e) {
    // ignorar si no se puede guardar
  }
  aplicarIdioma();
  construirPalabrasGigantes();
  renderizarSobre();
  renderizarSenalVida();
  renderizarEntender();
  renderizarOpcionesAterrizar();
  actualizarResultadosAterrizar();
  renderizarDescubrir();
  renderizarBannerCita();
  renderizarRecomendaciones();
  renderizarChipsAsiAutomatice();
  renderizarFichaEjemploAsiAutomatice();
  configurarContadorInlineAsiAutomatice();
  if (!document.getElementById("panel-en-vivo").hidden) actualizarPanelEnVivo();
  actualizarTextoCapsula();
  centrarDiagrama();
  verificarEtiquetasDiagrama();
  configurarScrollHorizontalEntender();
  configurarAsiAutomaticeSticky();
}

function aplicarIdioma() {
  document.documentElement.lang = idioma;
  const t = TEXTOS[idioma];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (t[clave]) el.textContent = t[clave];
  });

  document.getElementById("boton-idioma").textContent = t.botonIdioma;
  document.getElementById("link-linkedin-footer").href = LINK_LINKEDIN;
  document.getElementById("boton-menu").setAttribute("aria-label", t.menuAbrir);
  document.getElementById("panel-en-vivo-cerrar").setAttribute("aria-label", t.contadorCerrarAria);
}

// ---- Vista previa ----

function configurarFranjaVistaPrevia() {
  const franja = document.getElementById("franja-vista-previa");
  if (franja) franja.hidden = !MODO_VISTA_PREVIA;
}

// ---- Fechas y "señales de vida" (solo a partir de hallazgos reales,
// salvo en modo vista previa) ----

function formatearFecha(fechaIso) {
  const fecha = new Date(`${fechaIso}T00:00:00`);
  const locale = idioma === "es" ? "es-PE" : "en-US";
  const diaSemana = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(fecha);
  const diaMes = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long" }).format(fecha);
  return idioma === "es" ? `${diaSemana} ${diaMes}` : `${diaSemana}, ${diaMes}`;
}

function diasDesde(fechaIso) {
  const fecha = new Date(`${fechaIso}T00:00:00`);
  const ahora = new Date();
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.floor((ahora - fecha) / msPorDia);
}

// "Nuevo" = publicado en Outside-In en los últimos 7 días ("publicado"),
// no la fecha en que la consultora sacó el estudio ("fecha").
function esReciente(h) {
  const fechaEnLaWeb = h.publicado || h.fecha;
  if (h.esEjemplo !== false || !fechaEnLaWeb) return false;
  const dias = diasDesde(fechaEnLaWeb);
  return dias >= 0 && dias <= 7;
}

function debeMostrarNuevo(h) {
  if (MODO_VISTA_PREVIA) return VISTA_PREVIA.hallazgosNuevosIds.includes(h.id);
  return esReciente(h);
}

function calcularSenalesDeVida() {
  if (MODO_VISTA_PREVIA) {
    return {
      fechaTexto: idioma === "es" ? VISTA_PREVIA.fecha_es : VISTA_PREVIA.fecha_en,
      estudiosRevisados: VISTA_PREVIA.estudiosRevisados,
      hallazgosNuevos: VISTA_PREVIA.hallazgosNuevosSemana,
    };
  }

  const reales = HALLAZGOS.filter((h) => h.esEjemplo === false && h.fecha);
  if (reales.length === 0) return null;

  const fechaMasReciente = reales.reduce((maxFecha, h) => (h.fecha > maxFecha ? h.fecha : maxFecha), reales[0].fecha);
  const hallazgosNuevos = reales.filter((h) => esReciente(h)).length;
  const estudiosRevisados =
    typeof CONTADOR !== "undefined"
      ? CONTADOR.desdeInicio.revisados
      : (typeof RADAR_ESTUDIOS !== "undefined" ? RADAR_ESTUDIOS.length : 0) + reales.length;

  // "Actualizado el" = la fecha de la última búsqueda del sistema (contador.js),
  // no la fecha de publicación del estudio más reciente.
  const fechaActualizacion =
    typeof CONTADOR !== "undefined" && CONTADOR.actualizado ? CONTADOR.actualizado : fechaMasReciente;

  return { fechaTexto: formatearFecha(fechaActualizacion), estudiosRevisados, hallazgosNuevos };
}

function renderizarSenalVida() {
  const enlace = document.getElementById("senal-vida");
  const texto = document.getElementById("senal-vida-texto");
  const senales = calcularSenalesDeVida();

  if (!senales) {
    enlace.hidden = true;
    return;
  }

  const t = TEXTOS[idioma];
  const etiquetaNuevos = senales.hallazgosNuevos === 1 ? t.senalNuevoSingular : t.senalNuevoPlural;
  texto.textContent = `${t.senalCadaLunes} · ${t.senalUltimaLectura} ${senales.fechaTexto}`;
  enlace.hidden = false;
}

// ---- Menú hamburguesa (celular) ----

function configurarMenuMovil() {
  const boton = document.getElementById("boton-menu");
  const nav = document.getElementById("oi-nav");

  boton.addEventListener("click", () => {
    const abierto = nav.classList.toggle("oi-nav-abierto");
    boton.setAttribute("aria-expanded", String(abierto));
    boton.setAttribute("aria-label", abierto ? TEXTOS[idioma].menuCerrar : TEXTOS[idioma].menuAbrir);
    document.body.classList.toggle("oi-menu-bloqueo", abierto);
  });

  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("oi-nav-abierto");
      boton.setAttribute("aria-expanded", "false");
      boton.setAttribute("aria-label", TEXTOS[idioma].menuAbrir);
      document.body.classList.remove("oi-menu-bloqueo");
    });
  });
}

// ---- Conóceme: recomendaciones reales de LinkedIn ----

function renderizarRecomendaciones() {
  const contenedor = document.getElementById("recomendaciones");
  if (!contenedor || typeof RECOMENDACIONES === "undefined") return;
  const t = TEXTOS[idioma];
  contenedor.innerHTML = "";
  const titulo = document.createElement("h3");
  titulo.className = "oi-recomendaciones-titulo";
  titulo.textContent = t.conocemeRecosTitulo;
  const grilla = document.createElement("div");
  grilla.className = "oi-recomendaciones-grilla";
  RECOMENDACIONES.forEach((r) => {
    const tarjeta = document.createElement("figure");
    tarjeta.className = "oi-recomendacion";
    const cita = document.createElement("blockquote");
    cita.textContent = idioma === "es" ? r.texto_es : r.texto_en;
    const autor = document.createElement("figcaption");
    const nombre = document.createElement("strong");
    nombre.textContent = r.nombre;
    const rol = document.createElement("span");
    rol.textContent = idioma === "es" ? r.rol_es : r.rol_en;
    autor.append(nombre, rol);
    tarjeta.append(cita, autor);
    grilla.appendChild(tarjeta);
  });
  contenedor.append(titulo, grilla);
  if (typeof animarEntradas === "function") animarEntradas();
}

// ---- Sección "Sobre Outside-In" + modal con la carta completa ----

function renderizarSobre() {
  const carta = idioma === "es" ? INTRO.es : INTRO.en;
  ponerTextoConNegritas(document.getElementById("sobre-parrafo"), carta.parrafos[2]);
  construirCarta(document.getElementById("modal-sobre-cuerpo"), carta);
}

// Convierte **palabra** en negrita, sin interpretar ningún otro HTML.
function ponerTextoConNegritas(elemento, texto) {
  elemento.textContent = "";
  String(texto || "").split(/(\*\*[^*]+\*\*)/).forEach((parte) => {
    if (/^\*\*[^*]+\*\*$/.test(parte)) {
      const fuerte = document.createElement("strong");
      fuerte.textContent = parte.slice(2, -2);
      elemento.appendChild(fuerte);
    } else if (parte) {
      elemento.appendChild(document.createTextNode(parte));
    }
  });
}

function construirCarta(contenedor, carta) {
  contenedor.innerHTML = "";
  carta.parrafos.forEach((parrafo) => {
    const p = document.createElement("p");
    ponerTextoConNegritas(p, parrafo);
    contenedor.appendChild(p);
  });
  const firma = document.createElement("div");
  firma.className = "carta-firma";
  const firmaNombre = document.createElement("p");
  firmaNombre.className = "firma-nombre";
  firmaNombre.textContent = carta.firma_nombre;
  const firmaCargo = document.createElement("p");
  firmaCargo.className = "firma-cargo";
  firmaCargo.textContent = carta.firma_cargo;
  firma.append(firmaNombre, firmaCargo);
  contenedor.appendChild(firma);
}

function abrirModalSobre() {
  document.getElementById("modal-sobre-titulo").textContent = TEXTOS[idioma].introTitulo;
  document.getElementById("modal-sobre").showModal();
}

// ---- Banner de cita ----

function renderizarBannerCita() {
  document.getElementById("banner-cita-texto").textContent = idioma === "es" ? CITA_BANNER.es : CITA_BANNER.en;
}

// ---- Cápsulas rotativas del hero (tema + industria, las 3x3 reales) ----

function construirCombinaciones() {
  const hayHallazgosReales = HALLAZGOS.some((h) => h.esEjemplo === false);
  const combos = [];
  TEMAS.forEach((tema) => {
    INDUSTRIAS.forEach((industria) => {
      if (!hayHallazgosReales) {
        combos.push({ tema, industria });
        return;
      }
      const tieneHallazgoReal = HALLAZGOS.some(
        (h) => h.esEjemplo === false && h.tema === tema.id && h.industria === industria.id
      );
      if (tieneHallazgoReal) combos.push({ tema, industria });
    });
  });
  return combos;
}

function iniciarCapsulaRotativa() {
  combosCapsula = construirCombinaciones();
  actualizarTextoCapsula();
  setInterval(() => {
    if (combosCapsula.length === 0) return;
    indiceCapsula = (indiceCapsula + 1) % combosCapsula.length;
    actualizarTextoCapsula();
  }, 2400);
}

function actualizarTextoCapsula() {
  if (combosCapsula.length === 0) return;
  const combo = combosCapsula[indiceCapsula % combosCapsula.length];
  document.getElementById("oi-word-tema").textContent = idioma === "es" ? combo.tema.frase_es : combo.tema.frase_en;
  document.getElementById("oi-word-industria").textContent =
    idioma === "es" ? combo.industria.frase_es : combo.industria.frase_en;
}

// Alinea el centro vertical del diagrama decorativo con el centro
// vertical del titular ("Entender. Conectar. Anticipar.").
function centrarDiagrama() {
  const titular = document.querySelector(".oi-headline");
  const diagrama = document.querySelector(".oi-hero-diagrama");
  if (!titular || !diagrama) return;

  if (window.innerWidth <= 760) {
    diagrama.style.marginTop = "";
    return;
  }

  const centroTitular = titular.offsetTop + titular.offsetHeight / 2;
  const nuevoMargen = Math.max(0, centroTitular - diagrama.offsetHeight / 2);
  diagrama.style.marginTop = `${nuevoMargen}px`;
}

// Comprobación real del gráfico: mide cada etiqueta de verdad (getBBox solo
// existe en SVG) y, si queda a menos de 16px del círculo azul o lo cruza,
// la desplaza hacia afuera. Se corre al cargar (cuando ya cargaron las
// fuentes) y de nuevo al cambiar de idioma.
function distanciaRectanguloACirculo(caja, cx, cy, radio) {
  const puntoX = Math.max(caja.x, Math.min(cx, caja.x + caja.width));
  const puntoY = Math.max(caja.y, Math.min(cy, caja.y + caja.height));
  const dx = cx - puntoX;
  const dy = cy - puntoY;
  return Math.sqrt(dx * dx + dy * dy) - radio;
}

function verificarEtiquetasDiagrama() {
  const svg = document.getElementById("oi-svg-diagrama");
  if (!svg || typeof svg.querySelectorAll !== "function") return;

  const cx = 145;
  const cy = 145;
  const radio = 78;
  const margenMinimo = 16;

  svg.querySelectorAll(".oi-svg-etiqueta").forEach((texto) => {
    texto.removeAttribute("transform");

    let caja;
    try {
      caja = texto.getBBox();
    } catch (e) {
      return;
    }
    if (!caja || (caja.width === 0 && caja.height === 0)) return;

    const distancia = distanciaRectanguloACirculo(caja, cx, cy, radio);
    if (distancia < margenMinimo) {
      const faltante = margenMinimo - distancia;
      const lado = texto.dataset.lado;
      if (lado === "izquierda") {
        texto.setAttribute("transform", `translate(${-faltante}, 0)`);
      } else if (lado === "derecha") {
        texto.setAttribute("transform", `translate(${faltante}, 0)`);
      } else {
        texto.setAttribute("transform", `translate(0, ${-faltante})`);
      }
    }
  });
}

// ---- Entender: lecturas individuales (solo tema o solo industria) ----

function renderizarEntender() {
  const contenedor = document.getElementById("grid-entender");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const t = TEXTOS[idioma];
  const lecturas = HALLAZGOS.filter(esLecturaIndividual);

  lecturas.forEach((h, indice) => {
    const esTema = Boolean(h.tema);
    const item = esTema ? TEMAS.find((tm) => tm.id === h.tema) : INDUSTRIAS.find((i) => i.id === h.industria);

    const tarjeta = document.createElement("div");
    tarjeta.className = "oi-scrollx-tarjeta";

    const portada = document.createElement("button");
    portada.type = "button";
    portada.className = `oi-cover oi-cover-${(indice % 4) + 1} oi-cover-clicable`;
    portada.addEventListener("click", () => abrirFichaUnica(h));
    if (typeof agregarFotoPortada === "function") agregarFotoPortada(portada, h);

    if (MODO_VISTA_PREVIA && VISTA_PREVIA.hallazgosNuevosIds.includes(h.id)) {
      const insignia = document.createElement("span");
      insignia.className = "oi-insignia-nuevo";
      insignia.textContent = t.etiquetaNuevo;
      portada.appendChild(insignia);
    } else if (h.esEjemplo !== false) {
      const insignia = document.createElement("span");
      insignia.className = "oi-insignia-ejemplo";
      insignia.textContent = t.hallazgosEjemploBadge;
      portada.appendChild(insignia);
    } else if (esReciente(h)) {
      const insignia = document.createElement("span");
      insignia.className = "oi-insignia-nuevo";
      insignia.textContent = t.etiquetaNuevo;
      portada.appendChild(insignia);
    }

    const capsula = document.createElement("span");
    capsula.className = `oi-capsula ${esTema ? "oi-capsula-tema" : "oi-capsula-industria"} oi-capsula-tarjeta`;
    capsula.textContent = item ? (idioma === "es" ? item.es : item.en) : "";

    const nombre = document.createElement("h3");
    nombre.className = "oi-scrollx-nombre";
    nombre.textContent = idioma === "es" ? h.hallazgo_es : h.hallazgo_en;

    const enlace = document.createElement("a");
    enlace.className = "oi-scrollx-enlace";
    enlace.href = urlHallazgo(h);
    enlace.textContent = t.verHallazgoCompleto;

    tarjeta.append(portada, capsula, nombre, enlace);
    contenedor.appendChild(tarjeta);
  });
}

// Cada hallazgo tiene su propia página completa (hallazgo.html).
function urlHallazgo(h) {
  return `hallazgo.html?id=${encodeURIComponent(h.id)}`;
}

function abrirFichaUnica(h) {
  window.location.href = urlHallazgo(h);
}

// ---- Scroll horizontal anclado de "Entender" ----

let scrollXInfo = null;

function configurarScrollHorizontalEntender() {
  const section = document.getElementById("entender");
  const track = document.getElementById("grid-entender");
  const sticky = section ? section.querySelector(".oi-scrollx-sticky") : null;
  if (!section || !track || !sticky) {
    scrollXInfo = null;
    return;
  }

  const esMovil = window.innerWidth <= 760;

  if (prefiereMovimientoReducido() || esMovil) {
    section.style.height = "auto";
    section.classList.add("oi-scrollx-estatico");
    track.style.transform = "none";
    scrollXInfo = null;
    return;
  }

  section.classList.remove("oi-scrollx-estatico");
  const alturaCabecera = sticky.offsetTop;
  const desplazable = Math.max(0, track.scrollWidth - window.innerWidth);
  section.style.height = `${alturaCabecera + window.innerHeight + desplazable}px`;
  scrollXInfo = { section, alturaCabecera, desplazable };
  actualizarScrollHorizontalEntender();
}

function actualizarScrollHorizontalEntender() {
  if (!scrollXInfo) return;
  const { section, alturaCabecera, desplazable } = scrollXInfo;
  const track = document.getElementById("grid-entender");
  if (!track || desplazable <= 0) return;

  const rect = section.getBoundingClientRect();
  const progreso = Math.min(1, Math.max(0, (-rect.top - alturaCabecera) / desplazable));
  track.style.transform = `translateX(-${progreso * desplazable}px)`;
}

// ---- Aterrizar: frase interactiva con desplegables ----

function renderizarOpcionesAterrizar() {
  const selectTema = document.getElementById("aterrizar-select-tema");
  const selectIndustria = document.getElementById("aterrizar-select-industria");
  if (!selectTema || !selectIndustria) return;

  const temaElegido = selectTema.value;
  const industriaElegida = selectIndustria.value;

  selectTema.innerHTML = "";
  TEMAS.forEach((tema) => {
    const opcion = document.createElement("option");
    opcion.value = tema.id;
    opcion.textContent = idioma === "es" ? tema.es : tema.en;
    selectTema.appendChild(opcion);
  });

  selectIndustria.innerHTML = "";
  INDUSTRIAS.forEach((industria) => {
    const opcion = document.createElement("option");
    opcion.value = industria.id;
    opcion.textContent = idioma === "es" ? industria.es : industria.en;
    selectIndustria.appendChild(opcion);
  });

  if (temaElegido) selectTema.value = temaElegido;
  if (industriaElegida) selectIndustria.value = industriaElegida;

  ajustarAnchoSelect(selectTema);
  ajustarAnchoSelect(selectIndustria);
  // La tipografía puede terminar de cargar después: se vuelve a medir.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      ajustarAnchoSelect(selectTema);
      ajustarAnchoSelect(selectIndustria);
    });
  }
}

// El <select> nativo se dimensiona según su opción MÁS ANCHA, no la elegida
// (así funcionan los navegadores). Para que la cápsula mida solo lo que
// mide la opción actual, medimos su texto de verdad y fijamos ese ancho.
function ajustarAnchoSelect(select) {
  if (!select || !select.options.length) return;
  const opcionActual = select.options[select.selectedIndex];
  const estilos = getComputedStyle(select);

  const medidor = document.createElement("span");
  medidor.style.position = "absolute";
  medidor.style.visibility = "hidden";
  medidor.style.whiteSpace = "nowrap";
  medidor.style.fontFamily = estilos.fontFamily;
  medidor.style.fontWeight = estilos.fontWeight;
  medidor.style.fontSize = estilos.fontSize;
  medidor.textContent = opcionActual ? opcionActual.textContent : "";
  document.body.appendChild(medidor);
  const anchoTexto = medidor.offsetWidth;
  document.body.removeChild(medidor);

  // Relleno real del botón (izquierda + derecha, donde va la flecha) y un
  // pequeño margen de seguridad para que el texto nunca toque la flecha.
  const relleno = parseFloat(estilos.paddingLeft) + parseFloat(estilos.paddingRight) + 6;
  select.style.width = `${Math.ceil(anchoTexto + relleno)}px`;
}

function actualizarResultadosAterrizar() {
  const selectTema = document.getElementById("aterrizar-select-tema");
  const selectIndustria = document.getElementById("aterrizar-select-industria");
  const contadorEl = document.getElementById("aterrizar-conteo");
  const tarjetasEl = document.getElementById("aterrizar-tarjetas");
  if (!selectTema || !selectIndustria || !contadorEl || !tarjetasEl) return;

  const t = TEXTOS[idioma];
  const temaId = selectTema.value;
  const industriaId = selectIndustria.value;

  const hallazgos = HALLAZGOS.filter((h) => h.tema === temaId && h.industria === industriaId);

  contadorEl.textContent = hallazgos.length === 0 ? "" : `${hallazgos.length} ${hallazgos.length === 1 ? t.hallazgoSingular : t.hallazgosPlural}`;

  tarjetasEl.innerHTML = "";
  if (hallazgos.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "oi-aterrizar-vacio";
    vacio.textContent = t.aterrizarVacio;
    tarjetasEl.appendChild(vacio);
    return;
  }

  hallazgos.forEach((h, indice) => tarjetasEl.appendChild(crearTarjetaResultado(h, indice)));
  if (typeof animarEntradas === "function") animarEntradas();
}

function crearTarjetaResultado(h, indice) {
  const t = TEXTOS[idioma];
  const tarjeta = document.createElement("button");
  tarjeta.type = "button";
  tarjeta.className = "oi-tarjeta-hallazgo";
  tarjeta.addEventListener("click", () => abrirFichaUnica(h));

  const portada = document.createElement("div");
  portada.className = `oi-cover oi-cover-${(indice % 4) + 1}`;
  if (typeof agregarFotoPortada === "function") agregarFotoPortada(portada, h);
  if (MODO_VISTA_PREVIA && VISTA_PREVIA.hallazgosNuevosIds.includes(h.id)) {
    const insignia = document.createElement("span");
    insignia.className = "oi-insignia-nuevo";
    insignia.textContent = t.etiquetaNuevo;
    portada.appendChild(insignia);
  } else if (h.esEjemplo !== false) {
    const insignia = document.createElement("span");
    insignia.className = "oi-insignia-ejemplo";
    insignia.textContent = t.hallazgosEjemploBadge;
    portada.appendChild(insignia);
  } else if (esReciente(h)) {
    const insignia = document.createElement("span");
    insignia.className = "oi-insignia-nuevo";
    insignia.textContent = t.etiquetaNuevo;
    portada.appendChild(insignia);
  }

  const titulo = document.createElement("h3");
  titulo.className = "oi-titulo-hallazgo";
  titulo.textContent = idioma === "es" ? h.hallazgo_es : h.hallazgo_en;

  tarjeta.append(portada, titulo);
  return tarjeta;
}

function configurarAterrizar() {
  renderizarOpcionesAterrizar();
  actualizarResultadosAterrizar();

  const selectTema = document.getElementById("aterrizar-select-tema");
  const selectIndustria = document.getElementById("aterrizar-select-industria");
  if (selectTema) {
    selectTema.addEventListener("change", () => {
      ajustarAnchoSelect(selectTema);
      actualizarResultadosAterrizar();
    });
  }
  if (selectIndustria) {
    selectIndustria.addEventListener("change", () => {
      ajustarAnchoSelect(selectIndustria);
      actualizarResultadosAterrizar();
    });
  }
}

// Lleva a "Aterrizar" con el tema y/o la industria preseleccionados
// (se usa desde las tarjetas de "Entender").
function irAAterrizar(temaId, industriaId) {
  const selectTema = document.getElementById("aterrizar-select-tema");
  const selectIndustria = document.getElementById("aterrizar-select-industria");
  if (temaId && selectTema) selectTema.value = temaId;
  if (industriaId && selectIndustria) selectIndustria.value = industriaId;
  actualizarResultadosAterrizar();
  window.location.hash = "aterrizar";
}

// ---- Descubrir: estudios en el radar ----

function renderizarDescubrir() {
  const seccion = document.getElementById("descubrir");
  const lista = document.getElementById("lista-radar");
  if (!seccion || !lista) return;

  const estudios = MODO_VISTA_PREVIA ? VISTA_PREVIA.radar : RADAR_ESTUDIOS;

  if (!estudios || estudios.length === 0) {
    seccion.hidden = true;
    return;
  }

  seccion.hidden = false;
  lista.innerHTML = "";
  const t = TEXTOS[idioma];

  estudios.forEach((estudio) => {
    const item = document.createElement("article");
    item.className = "oi-radar-item";

    const titulo = document.createElement("h3");
    titulo.className = "oi-radar-titulo";
    titulo.textContent = idioma === "es" ? estudio.titulo_es : estudio.titulo_en;

    const meta = document.createElement("p");
    meta.className = "oi-radar-meta";
    meta.textContent = `${estudio.fuente} · ${t.radarDetectadoLabel} ${formatearFecha(estudio.fecha_detectado)}`;

    item.append(titulo, meta);
    lista.appendChild(item);
  });
  if (typeof animarEntradas === "function") animarEntradas();
}

// ---- "Así automaticé Outside-In": escenario animado y scroll anclado ----

function renderizarChipsAsiAutomatice() {
  const t = TEXTOS[idioma];
  const etiquetas = [t.cfEtiquetaEstudio, t.cfEtiquetaReporte, t.cfEtiquetaEncuesta, t.cfEtiquetaRanking, t.cfEtiquetaDatos];

  const rastreo = document.getElementById("cf-chips-rastreo");
  const curaduria = document.getElementById("cf-chips-curaduria");
  if (!rastreo || !curaduria) return;

  rastreo.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const chip = document.createElement("span");
    chip.className = "oi-cf-chip";
    chip.textContent = etiquetas[i % etiquetas.length];
    chip.style.animationDelay = `${(i % 6) * 0.4}s`;
    rastreo.appendChild(chip);
  }

  const elegidos = [1, 4, 6];
  curaduria.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const chip = document.createElement("span");
    chip.className = `oi-cf-chip ${elegidos.includes(i) ? "oi-cf-elegido" : "oi-cf-descartado"}`;
    chip.textContent = etiquetas[i % etiquetas.length];
    curaduria.appendChild(chip);
  }
}

// La ficha del paso 03 muestra el último estudio publicado de verdad.
function renderizarFichaEjemploAsiAutomatice() {
  const t = TEXTOS[idioma];
  const reales = HALLAZGOS.filter((h) => h.esEjemplo === false);
  if (reales.length === 0) return;
  const h = reales
    .slice()
    .sort((a, b) => String(b.publicado || b.fecha).localeCompare(String(a.publicado || a.fecha)) || String(b.fecha).localeCompare(String(a.fecha)))[0];
  const ficha = document.getElementById("cf-ficha-real");
  if (!ficha) return;
  ficha.href = urlHallazgo(h);
  document.getElementById("cf-ficha-etiqueta").textContent = t.cfFichaUltimo;
  document.getElementById("cf-ficha-titulo").textContent = idioma === "es" ? h.hallazgo_es : h.hallazgo_en;
  document.getElementById("cf-ficha-fuente").textContent = `${h.fuente} · ${idioma === "es" ? h.estudio_es : h.estudio_en}`;
  const tema = TEMAS.find((x) => x.id === h.tema);
  const industria = INDUSTRIAS.find((x) => x.id === h.industria);
  const capsulaTema = document.getElementById("cf-capsula-tema");
  const capsulaIndustria = document.getElementById("cf-capsula-industria");
  capsulaTema.textContent = tema ? tema[idioma] : "";
  capsulaTema.hidden = !tema;
  capsulaIndustria.textContent = industria ? industria[idioma] : "";
  capsulaIndustria.hidden = !industria;
  const tieneLectura = Boolean(idioma === "es" ? h.implicancia_es : h.implicancia_en);
  document.getElementById("cf-ficha-lectura").textContent = tieneLectura ? t.cfFichaConLectura : t.lecturaPendienteEtiqueta;
}

// ---- Contador "en vivo": el panel del menú y el cierre de "Así
// automaticé Outside-In" comparten esta misma lógica. El embudo
// (revisados → seleccionados → publicados) solo existe en vista previa:
// todavía no hay una forma real de medir "revisados" y "seleccionados"
// hasta que la automatización esté funcionando — ver README.md.

function tieneDatosEnVivo() {
  if (MODO_VISTA_PREVIA) return true;
  return typeof CONTADOR !== "undefined" && CONTADOR.desdeInicio.revisados > 0;
}

function obtenerFunnel(rango) {
  if (MODO_VISTA_PREVIA) {
    return rango === "inicio" ? VISTA_PREVIA.funnelDesdeInicio : VISTA_PREVIA.funnelSemana;
  }
  if (typeof CONTADOR === "undefined") return null;
  return rango === "inicio" ? CONTADOR.desdeInicio : CONTADOR.semana;
}

// Construye los 3 números con flechas dentro de "contenedor". Si
// "mostrarFinal" es true, aparecen directo en su valor final; si no,
// arrancan en 0 (para animarlos después con animarNumeros).
function construirBloqueNumeros(contenedor, datos, mostrarFinal) {
  contenedor.innerHTML = "";
  const t = TEXTOS[idioma];
  const bloques = [
    { valor: datos.revisados, etiqueta: t.senalEstudiosLabel, final: false },
    { valor: datos.seleccionados, etiqueta: t.contadorSeleccionados, final: false },
    { valor: datos.publicados, etiqueta: t.contadorPublicados, final: true },
  ];

  bloques.forEach((bloque, indice) => {
    if (indice > 0) {
      const flecha = document.createElement("span");
      flecha.className = "oi-contador-flecha";
      flecha.setAttribute("aria-hidden", "true");
      flecha.textContent = "→";
      contenedor.appendChild(flecha);
    }

    const envoltorio = document.createElement("div");
    envoltorio.className = "oi-contador-bloque";

    const numero = document.createElement("span");
    numero.className = "oi-contador-numero" + (bloque.final ? " oi-contador-numero-final" : "");
    numero.dataset.destino = String(bloque.valor);
    numero.textContent = mostrarFinal ? String(bloque.valor) : "0";

    const etiqueta = document.createElement("span");
    etiqueta.className = "oi-contador-etiqueta";
    etiqueta.textContent = bloque.etiqueta;

    envoltorio.append(numero, etiqueta);
    contenedor.appendChild(envoltorio);
  });

  return Array.from(contenedor.querySelectorAll(".oi-contador-numero"));
}

// Cuenta rápido desde 0 hasta el valor final de cada número.
function animarNumeros(spans) {
  if (prefiereMovimientoReducido()) {
    spans.forEach((span) => {
      span.textContent = span.dataset.destino;
    });
    return;
  }

  const duracion = 900;
  const inicio = performance.now();

  function paso(ahora) {
    const progreso = Math.min(1, (ahora - inicio) / duracion);
    const facilitado = 1 - Math.pow(1 - progreso, 3);
    spans.forEach((span) => {
      const destino = Number(span.dataset.destino || 0);
      span.textContent = String(Math.round(destino * facilitado));
    });
    if (progreso < 1) requestAnimationFrame(paso);
  }

  requestAnimationFrame(paso);
}

// -- Contador dentro de "Así automaticé Outside-In" (siempre "Esta
// semana", se anima una sola vez por visita, cuando aparece en pantalla) --

let cfContadorYaAnimado = false;

function configurarContadorInlineAsiAutomatice() {
  const contenedor = document.getElementById("contador-numeros-cf");
  if (!contenedor) return;

  if (!tieneDatosEnVivo()) {
    contenedor.hidden = true;
    return;
  }
  contenedor.hidden = false;

  const datos = obtenerFunnel("semana");

  if (cfContadorYaAnimado) {
    construirBloqueNumeros(contenedor, datos, true);
    return;
  }

  const spans = construirBloqueNumeros(contenedor, datos, false);

  if (prefiereMovimientoReducido()) {
    cfContadorYaAnimado = true;
    animarNumeros(spans);
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting && !cfContadorYaAnimado) {
          cfContadorYaAnimado = true;
          animarNumeros(spans);
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  observador.observe(contenedor);
}

// -- Panel "en vivo" del menú: botón + desplegable con pestañas --

let rangoPanelActual = "semana";

function configurarPanelEnVivo() {
  const botonEnVivo = document.getElementById("boton-en-vivo");
  const panel = document.getElementById("panel-en-vivo");
  const botonCerrar = document.getElementById("panel-en-vivo-cerrar");
  if (!botonEnVivo || !panel || !botonCerrar) return;

  botonEnVivo.hidden = !tieneDatosEnVivo();

  botonEnVivo.addEventListener("click", () => {
    if (panel.hidden) abrirPanelEnVivo();
    else cerrarPanelEnVivo();
  });

  botonCerrar.addEventListener("click", cerrarPanelEnVivo);

  document.addEventListener("click", (evento) => {
    if (panel.hidden) return;
    if (panel.contains(evento.target) || botonEnVivo.contains(evento.target)) return;
    cerrarPanelEnVivo();
  });

  panel.querySelectorAll(".oi-panel-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      rangoPanelActual = tab.dataset.rango;
      panel.querySelectorAll(".oi-panel-tab").forEach((otraTab) => {
        otraTab.classList.toggle("oi-cf-activo", otraTab === tab);
      });
      actualizarPanelEnVivo();
    });
  });
}

function abrirPanelEnVivo() {
  const panel = document.getElementById("panel-en-vivo");
  const botonEnVivo = document.getElementById("boton-en-vivo");
  panel.hidden = false;
  botonEnVivo.setAttribute("aria-expanded", "true");
  actualizarPanelEnVivo();
}

function cerrarPanelEnVivo() {
  const panel = document.getElementById("panel-en-vivo");
  const botonEnVivo = document.getElementById("boton-en-vivo");
  panel.hidden = true;
  botonEnVivo.setAttribute("aria-expanded", "false");
}

function actualizarPanelEnVivo() {
  const t = TEXTOS[idioma];
  const senales = calcularSenalesDeVida();
  const actualizadoEl = document.getElementById("panel-en-vivo-actualizado");
  if (actualizadoEl && senales) {
    actualizadoEl.textContent = `${t.senalActualizadoPrefijo} ${senales.fechaTexto}`;
  }

  const contenedor = document.getElementById("contador-numeros-panel");
  const funnel = obtenerFunnel(rangoPanelActual);
  if (!contenedor || !funnel) return;

  const spans = construirBloqueNumeros(contenedor, funnel, false);
  animarNumeros(spans);
}

let cfInfo = null;
// Mientras el scroll viaja tras un clic, no se cambia la etapa elegida.
let cfBloqueoHasta = 0;

function configurarAsiAutomaticeSticky() {
  const contenedor = document.getElementById("cf-pin-contenedor");
  const pin = contenedor ? contenedor.querySelector(".oi-cf-pin") : null;
  if (!contenedor || !pin) {
    cfInfo = null;
    return;
  }

  const esMovil = window.innerWidth <= 760;

  if (prefiereMovimientoReducido() || esMovil) {
    contenedor.style.height = "auto";
    contenedor.classList.add("oi-cf-estatico");
    cfInfo = null;
    return;
  }

  contenedor.classList.remove("oi-cf-estatico");
  // Más corto: cada paso cambia con poco scroll (antes era 1.5 pantallas).
  const desplazable = Math.round(window.innerHeight * 0.75);
  contenedor.style.height = `${pin.offsetHeight + desplazable}px`;
  cfInfo = { contenedor, desplazable };
  actualizarAsiAutomaticeSticky();
}

function actualizarAsiAutomaticeSticky() {
  if (!cfInfo) return;
  const { contenedor, desplazable } = cfInfo;
  if (desplazable <= 0) return;

  const rect = contenedor.getBoundingClientRect();
  const progreso = Math.min(1, Math.max(0, -rect.top / desplazable));
  const etapa = progreso < 0.33 ? 0 : progreso < 0.66 ? 1 : 2;
  if (Date.now() < cfBloqueoHasta) return;
  activarEtapaAsiAutomatice(etapa);
}

function activarEtapaAsiAutomatice(etapa) {
  document.querySelectorAll(".oi-cf-paso-boton, .oi-cf-progreso-boton").forEach((boton) => {
    boton.classList.toggle("oi-cf-activo", Number(boton.dataset.etapa) === etapa);
  });
  document.querySelectorAll(".oi-cf-etapa").forEach((el) => {
    el.classList.toggle("oi-cf-activo", Number(el.dataset.etapa) === etapa);
  });
}

// Al hacer clic en 01/02/03, salta el scroll a la mitad de esa etapa.
function saltarAEtapaAsiAutomatice(etapa) {
  activarEtapaAsiAutomatice(etapa);
  if (!cfInfo) {
    const contenedor = document.getElementById("cf-pin-contenedor");
    if (contenedor) contenedor.scrollIntoView({ behavior: prefiereMovimientoReducido() ? "auto" : "smooth" });
    return;
  }

  const { contenedor, desplazable } = cfInfo;
  const progresoObjetivo = (etapa + 0.5) / 3;
  cfBloqueoHasta = Date.now() + 900;
  const rect = contenedor.getBoundingClientRect();
  const scrollActual = window.scrollY || window.pageYOffset;
  const topAbsoluto = rect.top + scrollActual;
  const scrollObjetivo = topAbsoluto + progresoObjetivo * desplazable;

  window.scrollTo({ top: scrollObjetivo, behavior: prefiereMovimientoReducido() ? "auto" : "smooth" });
}

// ---- Banner que crece con el scroll ----

let bannerInfo = null;

function configurarBanner() {
  const caja = document.getElementById("banner-cita-caja");
  if (!caja) {
    bannerInfo = null;
    return;
  }
  if (prefiereMovimientoReducido()) {
    caja.classList.add("oi-banner-armado");
    bannerInfo = null;
    return;
  }
  bannerInfo = { caja, seccion: caja.closest(".oi-banner-seccion"), piezas: caja.querySelectorAll(".oi-banner-pieza") };
  actualizarBanner();
}

// La sección se arma con el scroll: cada pieza llega desde un lado distinto
// y en su propio momento, hasta quedar todo unido.
const BANNER_PIEZAS = {
  foto: { desde: 0.0, hasta: 0.45, x: -120, y: 0, rot: -4 },
  barra: { desde: 0.15, hasta: 0.55, escalaY: true },
  comillas: { desde: 0.25, hasta: 0.6, x: 0, y: -80, rot: -12 },
  texto: { desde: 0.3, hasta: 0.75, x: 140, y: 0, rot: 2 },
  firma: { desde: 0.5, hasta: 0.9, x: 0, y: 60, rot: 0 },
};

function actualizarBanner() {
  if (!bannerInfo) return;
  const { seccion, piezas } = bannerInfo;
  const rect = seccion.getBoundingClientRect();
  const alto = window.innerHeight;
  // 0 cuando la sección empieza a entrar; 1 cuando su parte de arriba
  // llega a un cuarto de la pantalla.
  const progreso = Math.min(1, Math.max(0, (alto - rect.top) / (alto * 0.75)));
  piezas.forEach((pieza) => {
    const conf = BANNER_PIEZAS[pieza.dataset.pieza];
    if (!conf) return;
    const local = Math.min(1, Math.max(0, (progreso - conf.desde) / (conf.hasta - conf.desde)));
    const suave = 1 - Math.pow(1 - local, 3);
    const falta = 1 - suave;
    if (conf.escalaY) {
      pieza.style.transform = window.innerWidth <= 760 ? `scaleX(${suave.toFixed(3)})` : `scaleY(${suave.toFixed(3)})`;
    } else {
      pieza.style.transform = `translate(${(conf.x * falta).toFixed(1)}px, ${(conf.y * falta).toFixed(1)}px) rotate(${(conf.rot * falta).toFixed(2)}deg)`;
    }
    pieza.style.opacity = (0.05 + 0.95 * suave).toFixed(2);
  });
}

// ---- Zoom de entrada: el título de Conectar y Anticipar llega grande y
// se acomoda a su tamaño normal cuando ya estás dentro de la sección ----

// La palabra gigante de cada sección (Entender, Conectar, Anticipar) se
// arma letra por letra: cada letra llega desde un punto distinto, girando,
// y se van juntando a medida que entras a la sección.
function construirPalabrasGigantes() {
  const t = TEXTOS[idioma];
  document.querySelectorAll(".oi-palabra-gigante").forEach((contenedor, n) => {
    const palabra = t[contenedor.dataset.palabra] || "";
    contenedor.innerHTML = "";
    let semilla = 7 + n * 13;
    const azar = () => {
      semilla = (semilla * 9301 + 49297) % 233280;
      return semilla / 233280;
    };
    Array.from(palabra).forEach((letra, i) => {
      const span = document.createElement("span");
      span.className = "oi-letra";
      span.textContent = letra;
      span.dataset.i = i;
      span.dataset.dx = Math.round((azar() - 0.5) * 700);
      span.dataset.dy = Math.round((azar() - 0.5) * 260);
      span.dataset.rot = Math.round((azar() - 0.5) * 200);
      span.dataset.esc = (0.3 + azar() * 1.8).toFixed(2);
      contenedor.appendChild(span);
    });
    contenedor.dataset.total = palabra.length;
  });
  actualizarZoomEntrada();
}

function actualizarZoomEntrada() {
  const contenedores = document.querySelectorAll(".oi-palabra-gigante");
  if (prefiereMovimientoReducido()) {
    contenedores.forEach((c) => c.classList.add("oi-palabra-armada"));
    return;
  }
  const alto = window.innerHeight;
  contenedores.forEach((c) => {
    const rect = c.getBoundingClientRect();
    // 0 cuando la palabra asoma por abajo; 1 cuando llega a un 30% de la pantalla.
    const progreso = Math.min(1, Math.max(0, (alto - rect.top) / (alto * 0.7)));
    const total = Number(c.dataset.total) || 1;
    c.classList.toggle("oi-palabra-armada", progreso >= 1);
    c.querySelectorAll(".oi-letra").forEach((letra) => {
      const i = Number(letra.dataset.i);
      const inicio = (i / total) * 0.35;
      const local = Math.min(1, Math.max(0, (progreso - inicio) / 0.6));
      const suave = 1 - Math.pow(1 - local, 3);
      const falta = 1 - suave;
      const esc = 1 + (Number(letra.dataset.esc) - 1) * falta;
      letra.style.transform = `translate(${(letra.dataset.dx * falta).toFixed(1)}px, ${(letra.dataset.dy * falta).toFixed(1)}px) rotate(${(letra.dataset.rot * falta).toFixed(1)}deg) scale(${esc.toFixed(3)})`;
      letra.style.opacity = (0.08 + 0.92 * suave).toFixed(2);
    });
  });
}

// ---- Textos y títulos que aparecen al hacer scroll ----

function configurarRevelado() {
  const elementos = document.querySelectorAll(".oi-reveal");
  if (!elementos.length) return;

  if (prefiereMovimientoReducido()) {
    elementos.forEach((el) => el.classList.add("oi-reveal-visible"));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("oi-reveal-visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elementos.forEach((el) => observador.observe(el));
}

// ---- Entradas animadas: tarjetas, pasos y listas aparecen en cascada
// (una tras otra) cuando llegan a la pantalla. Funciona también con las
// tarjetas que se dibujan después, como los resultados de Conectar. ----

const SELECTOR_ENTRADAS = [
  ".oi-sobre-guia-item",
  ".oi-tarjeta-hallazgo",
  ".oi-radar-item",
  ".oi-contacto-fila > *",
  ".oi-hero-ctas > *",
  ".oi-recomendacion",
  ".oi-footer-nav > *",
].join(", ");

let observadorEntradas = null;

function animarEntradas() {
  const elementos = document.querySelectorAll(SELECTOR_ENTRADAS);
  if (prefiereMovimientoReducido() || !("IntersectionObserver" in window)) return;
  if (!observadorEntradas) {
    observadorEntradas = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("oi-entrada-visible");
            observadorEntradas.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  }
  elementos.forEach((el) => {
    if (el.dataset.entrada) return;
    el.dataset.entrada = "1";
    const hermanos = Array.from(el.parentElement.children);
    el.style.setProperty("--oi-retraso", `${Math.min(hermanos.indexOf(el), 6) * 90}ms`);
    el.classList.add("oi-entrada");
    observadorEntradas.observe(el);
  });
}

function cerrarModal(idModal) {
  document.getElementById(idModal).close();
}

function agregarMetadato(dl, etiqueta, valor) {
  const dt = document.createElement("dt");
  dt.textContent = etiqueta;
  const dd = document.createElement("dd");
  dd.textContent = valor;
  dl.append(dt, dd);
}

function crearFicha(h) {
  const t = TEXTOS[idioma];
  const ficha = document.createElement("article");
  ficha.className = "ficha";

  const bloqueDatos = document.createElement("div");
  bloqueDatos.className = "ficha-bloque ficha-datos";

  const tituloDatos = document.createElement("h4");
  tituloDatos.textContent = t.datosTitulo;

  const hallazgoTexto = document.createElement("p");
  hallazgoTexto.textContent = idioma === "es" ? h.hallazgo_es : h.hallazgo_en;

  const datoClave = document.createElement("p");
  datoClave.className = "dato-clave";
  datoClave.textContent = idioma === "es" ? h.dato_clave_es : h.dato_clave_en;

  const metadatos = document.createElement("dl");
  metadatos.className = "metadatos";
  agregarMetadato(metadatos, t.fuenteLabel, h.fuente);
  agregarMetadato(metadatos, t.estudioLabel, idioma === "es" ? h.estudio_es : h.estudio_en);
  agregarMetadato(metadatos, t.anioLabel, h.anio);
  agregarMetadato(metadatos, t.regionLabel, idioma === "es" ? h.region_es : h.region_en);

  const link = document.createElement("a");
  link.href = h.link;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = t.linkLabel;

  bloqueDatos.append(tituloDatos, hallazgoTexto, datoClave, metadatos, link);

  const bloqueImplicancia = document.createElement("div");
  bloqueImplicancia.className = "ficha-bloque ficha-implicancia";

  const tituloImplicancia = document.createElement("h4");
  tituloImplicancia.textContent = t.implicanciaTitulo;

  const textoLectura = idioma === "es" ? h.implicancia_es : h.implicancia_en;

  if (!textoLectura) {
    // Todavía no hay "Mi lectura": la ficha se publica igual, con una
    // etiqueta que lo dice con claridad. Solo Desiree escribe su lectura.
    bloqueImplicancia.classList.add("ficha-implicancia-pendiente");
    const etiquetaPendiente = document.createElement("span");
    etiquetaPendiente.className = "etiqueta-lectura-pendiente";
    etiquetaPendiente.textContent = t.lecturaPendienteEtiqueta;
    const notaPendiente = document.createElement("p");
    notaPendiente.className = "nota-lectura-pendiente";
    notaPendiente.textContent = t.lecturaPendienteNota;
    bloqueImplicancia.append(tituloImplicancia, etiquetaPendiente, notaPendiente);
  } else {
    const implicanciaTexto = document.createElement("p");
    implicanciaTexto.textContent = textoLectura;
    if (h.estado === "BORRADOR") {
      const etiquetaBorrador = document.createElement("span");
      etiquetaBorrador.className = "etiqueta-borrador";
      etiquetaBorrador.textContent = t.borradorEtiqueta;
      bloqueImplicancia.append(tituloImplicancia, etiquetaBorrador, implicanciaTexto);
    } else {
      bloqueImplicancia.append(tituloImplicancia, implicanciaTexto);
    }
  }

  ficha.append(bloqueDatos, bloqueImplicancia);
  return ficha;
}

document.addEventListener("DOMContentLoaded", init);
