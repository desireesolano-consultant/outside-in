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
  renderizarChipsAsiAutomatice();
  renderizarFichaEjemploAsiAutomatice();
  renderizarContadorAsiAutomatice();
  iniciarCapsulaRotativa();
  centrarDiagrama();
  verificarEtiquetasDiagrama();
  configurarMenuMovil();
  configurarScrollHorizontalEntender();
  configurarAsiAutomaticeSticky();
  configurarBanner();
  configurarRevelado();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(verificarEtiquetasDiagrama);
  }

  document.getElementById("boton-idioma").addEventListener("click", cambiarIdioma);

  document.getElementById("modal-cerrar").addEventListener("click", () => cerrarModal("modal-fichas"));
  document.getElementById("modal-sobre-cerrar").addEventListener("click", () => cerrarModal("modal-sobre"));
  document.getElementById("boton-sobre").addEventListener("click", abrirModalSobre);

  ["modal-fichas", "modal-sobre"].forEach((idModal) => {
    const modal = document.getElementById(idModal);
    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) cerrarModal(idModal);
    });
  });

  document.querySelectorAll(".oi-cf-progreso-boton").forEach((boton) => {
    boton.addEventListener("click", () => saltarAEtapaAsiAutomatice(Number(boton.dataset.etapa)));
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
  renderizarSobre();
  renderizarSenalVida();
  renderizarEntender();
  renderizarOpcionesAterrizar();
  actualizarResultadosAterrizar();
  renderizarDescubrir();
  renderizarBannerCita();
  renderizarChipsAsiAutomatice();
  renderizarFichaEjemploAsiAutomatice();
  renderizarContadorAsiAutomatice();
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

function esReciente(h) {
  if (h.esEjemplo !== false || !h.fecha) return false;
  const dias = diasDesde(h.fecha);
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
  const estudiosRevisados = (typeof RADAR_ESTUDIOS !== "undefined" ? RADAR_ESTUDIOS.length : 0) + reales.length;

  return { fechaTexto: formatearFecha(fechaMasReciente), estudiosRevisados, hallazgosNuevos };
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
  texto.textContent = `${t.senalActualizadoPrefijo} ${senales.fechaTexto} · ${senales.estudiosRevisados} ${t.senalEstudiosLabel} · ${senales.hallazgosNuevos} ${etiquetaNuevos}`;
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

// ---- Sección "Sobre Outside-In" + modal con la carta completa ----

function renderizarSobre() {
  const carta = idioma === "es" ? INTRO.es : INTRO.en;
  document.getElementById("sobre-parrafo").textContent = carta.parrafos[2];
  construirCarta(document.getElementById("modal-sobre-cuerpo"), carta);
}

function construirCarta(contenedor, carta) {
  contenedor.innerHTML = "";
  carta.parrafos.forEach((parrafo) => {
    const p = document.createElement("p");
    p.textContent = parrafo;
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
// vertical del titular ("Entender. Aterrizar. Descubrir.").
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

    const enlace = document.createElement("button");
    enlace.type = "button";
    enlace.className = "oi-scrollx-enlace";
    enlace.textContent = t.entenderVerConexiones;
    enlace.addEventListener("click", () => irAAterrizar(h.tema, h.industria));

    tarjeta.append(portada, capsula, nombre, enlace);
    contenedor.appendChild(tarjeta);
  });
}

function abrirFichaUnica(h) {
  const industria = h.industria ? INDUSTRIAS.find((i) => i.id === h.industria) : null;
  const tema = h.tema ? TEMAS.find((tm) => tm.id === h.tema) : null;
  const partes = [];
  if (industria) partes.push(idioma === "es" ? industria.es : industria.en);
  if (tema) partes.push(idioma === "es" ? tema.es : tema.en);

  const modal = document.getElementById("modal-fichas");
  document.getElementById("modal-titulo").textContent = partes.join(" · ");
  const cuerpo = document.getElementById("modal-cuerpo");
  cuerpo.innerHTML = "";
  cuerpo.appendChild(crearFicha(h));
  modal.showModal();
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
}

function crearTarjetaResultado(h, indice) {
  const t = TEXTOS[idioma];
  const tarjeta = document.createElement("button");
  tarjeta.type = "button";
  tarjeta.className = "oi-tarjeta-hallazgo";
  tarjeta.addEventListener("click", () => abrirFichaUnica(h));

  const portada = document.createElement("div");
  portada.className = `oi-cover oi-cover-${(indice % 4) + 1}`;
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
  if (selectTema) selectTema.addEventListener("change", actualizarResultadosAterrizar);
  if (selectIndustria) selectIndustria.addEventListener("change", actualizarResultadosAterrizar);
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

function renderizarFichaEjemploAsiAutomatice() {
  const tema = TEMAS[1];
  const industria = INDUSTRIAS[0];
  const capsulaTema = document.getElementById("cf-capsula-tema");
  const capsulaIndustria = document.getElementById("cf-capsula-industria");
  if (capsulaTema) capsulaTema.textContent = idioma === "es" ? tema.es : tema.en;
  if (capsulaIndustria) capsulaIndustria.textContent = idioma === "es" ? industria.es : industria.en;
}

// El contador del embudo (revisados → seleccionados → publicados) solo se
// muestra en vista previa: todavía no existe una forma real de medir
// "revisados" y "seleccionados" hasta que la automatización esté funcionando.
function renderizarContadorAsiAutomatice() {
  const contador = document.getElementById("cf-contador");
  if (!contador) return;

  if (!MODO_VISTA_PREVIA) {
    contador.hidden = true;
    return;
  }

  const t = TEXTOS[idioma];
  const f = VISTA_PREVIA.funnel;
  contador.textContent = `${t.asiAutomaticeContador}: ${f.revisados} → ${f.seleccionados} → ${f.publicados}`;
  contador.hidden = false;
}

let cfInfo = null;

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
  // Las 3 etapas completas deben caber en ~1.5 pantallas de scroll.
  const desplazable = Math.round(window.innerHeight * 1.5);
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
  if (!cfInfo) {
    const contenedor = document.getElementById("cf-pin-contenedor");
    if (contenedor) contenedor.scrollIntoView({ behavior: prefiereMovimientoReducido() ? "auto" : "smooth" });
    return;
  }

  const { contenedor, desplazable } = cfInfo;
  const progresoObjetivo = (etapa + 0.5) / 3;
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
    caja.style.width = "100%";
    caja.style.borderRadius = "16px";
    bannerInfo = null;
    return;
  }

  bannerInfo = { caja, seccion: caja.closest(".oi-banner-seccion") };
  actualizarBanner();
}

function actualizarBanner() {
  if (!bannerInfo) return;
  const { caja, seccion } = bannerInfo;
  const rect = seccion.getBoundingClientRect();
  const altoVentana = window.innerHeight;
  const progreso = Math.min(1, Math.max(0, (altoVentana - rect.top) / (altoVentana + rect.height)));
  caja.style.width = `${92 + progreso * 8}%`;
  caja.style.borderRadius = `${32 - progreso * 32}px`;
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

  const etiquetaBorrador = document.createElement("span");
  etiquetaBorrador.className = "etiqueta-borrador";
  etiquetaBorrador.textContent = t.borradorEtiqueta;

  const implicanciaTexto = document.createElement("p");
  implicanciaTexto.textContent = idioma === "es" ? h.implicancia_es : h.implicancia_en;

  bloqueImplicancia.append(tituloImplicancia, etiquetaBorrador, implicanciaTexto);

  ficha.append(bloqueDatos, bloqueImplicancia);
  return ficha;
}

document.addEventListener("DOMContentLoaded", init);
