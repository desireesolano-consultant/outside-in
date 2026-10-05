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

function init() {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") idioma = guardado;
  } catch (e) {
    // almacenamiento no disponible (por ejemplo, ventana privada): seguimos con "es"
  }

  aplicarIdioma();
  renderizarSobre();
  renderizarHallazgosRecientes();
  renderizarLoQueSigo();
  renderizarMatriz();
  renderizarBannerCita();
  iniciarCapsulaRotativa();
  centrarDiagrama();
  configurarMenuMovil();
  configurarScrollHorizontal();
  configurarBanner();
  configurarRevelado();

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

  let tickeando = false;
  window.addEventListener(
    "scroll",
    () => {
      if (tickeando) return;
      tickeando = true;
      requestAnimationFrame(() => {
        actualizarScrollHorizontal();
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
      configurarScrollHorizontal();
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
  renderizarHallazgosRecientes();
  renderizarLoQueSigo();
  renderizarMatriz();
  renderizarBannerCita();
  actualizarTextoCapsula();
  centrarDiagrama();
  configurarScrollHorizontal();
}

function aplicarIdioma() {
  document.documentElement.lang = idioma;
  const t = TEXTOS[idioma];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (t[clave]) el.textContent = t[clave];
  });

  document.getElementById("boton-idioma").textContent = t.botonIdioma;
  document.getElementById("link-linkedin-footer").href = LINK_LINKEDIN_EJEMPLO;
  document.getElementById("boton-menu").setAttribute("aria-label", t.menuAbrir);
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
        (h) => h.esEjemplo === false && h.eje === tema.id && h.industria === industria.id
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

// ---- Hallazgos recientes (tarjetas) ----

function renderizarHallazgosRecientes() {
  const contenedor = document.getElementById("grid-hallazgos");
  contenedor.innerHTML = "";
  const t = TEXTOS[idioma];

  HALLAZGOS.forEach((h, indice) => {
    const tema = TEMAS.find((tm) => tm.id === h.eje);

    const tarjeta = document.createElement("button");
    tarjeta.type = "button";
    tarjeta.className = "oi-tarjeta-hallazgo";
    tarjeta.addEventListener("click", () => abrirFichaUnica(h));

    const portada = document.createElement("div");
    portada.className = `oi-cover oi-cover-${(indice % 4) + 1}`;
    const insignia = document.createElement("span");
    insignia.className = "oi-insignia-ejemplo";
    insignia.textContent = t.hallazgosEjemploBadge;
    portada.appendChild(insignia);

    const categoria = document.createElement("div");
    categoria.className = "oi-categoria-hallazgo";
    categoria.textContent = tema ? (idioma === "es" ? tema.es : tema.en) : "";

    const titulo = document.createElement("h3");
    titulo.className = "oi-titulo-hallazgo";
    titulo.textContent = idioma === "es" ? h.hallazgo_es : h.hallazgo_en;

    tarjeta.append(portada, categoria, titulo);
    contenedor.appendChild(tarjeta);
  });
}

function abrirFichaUnica(h) {
  const industria = INDUSTRIAS.find((i) => i.id === h.industria);
  const tema = TEMAS.find((tm) => tm.id === h.eje);
  const nombreIndustria = industria ? (idioma === "es" ? industria.es : industria.en) : "";
  const nombreTema = tema ? (idioma === "es" ? tema.es : tema.en) : "";

  const modal = document.getElementById("modal-fichas");
  document.getElementById("modal-titulo").textContent = `${nombreIndustria} · ${nombreTema}`;
  const cuerpo = document.getElementById("modal-cuerpo");
  cuerpo.innerHTML = "";
  cuerpo.appendChild(crearFicha(h));
  modal.showModal();
}

// ---- "Lo que sigo de cerca": tarjetas de temas + industrias ----

function crearTarjetaLoQueSigo(item, tipo, indice) {
  const t = TEXTOS[idioma];
  const tarjeta = document.createElement("div");
  tarjeta.className = `oi-scrollx-tarjeta oi-scrollx-tarjeta-${tipo}`;

  const visual = document.createElement("div");
  visual.className = `oi-scrollx-visual oi-scrollx-visual-${tipo} oi-scrollx-forma-${(indice % 3) + 1}`;

  const etiqueta = document.createElement("div");
  etiqueta.className = "oi-scrollx-etiqueta";
  etiqueta.textContent = tipo === "tema" ? t.tarjetaTemaEtiqueta : t.tarjetaIndustriaEtiqueta;

  const nombre = document.createElement("h3");
  nombre.className = "oi-scrollx-nombre";
  nombre.textContent = idioma === "es" ? item.es : item.en;

  const enlace = document.createElement("a");
  enlace.href = "#matriz";
  enlace.className = "oi-scrollx-enlace";
  enlace.textContent = t.tarjetaVerHallazgos;
  enlace.addEventListener("click", () => resaltarEnMatriz(tipo, item.id));

  tarjeta.append(visual, etiqueta, nombre, enlace);
  return tarjeta;
}

function renderizarLoQueSigo() {
  const contenedor = document.getElementById("grid-loquesigo");
  contenedor.innerHTML = "";
  TEMAS.forEach((tema, i) => contenedor.appendChild(crearTarjetaLoQueSigo(tema, "tema", i)));
  INDUSTRIAS.forEach((industria, i) => contenedor.appendChild(crearTarjetaLoQueSigo(industria, "industria", i)));
}

function resaltarEnMatriz(tipo, id) {
  const tabla = document.getElementById("tabla-matriz");
  const selector = tipo === "tema" ? `[data-tema="${id}"]` : `[data-industria="${id}"]`;
  tabla.querySelectorAll(selector).forEach((celda) => {
    celda.classList.add("celda-resaltada");
    setTimeout(() => celda.classList.remove("celda-resaltada"), 1600);
  });
}

// ---- Scroll horizontal anclado de "Lo que sigo de cerca" ----

let scrollXInfo = null;

function configurarScrollHorizontal() {
  const section = document.getElementById("lo-que-sigo");
  const track = document.getElementById("grid-loquesigo");
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
  actualizarScrollHorizontal();
}

function actualizarScrollHorizontal() {
  if (!scrollXInfo) return;
  const { section, alturaCabecera, desplazable } = scrollXInfo;
  const track = document.getElementById("grid-loquesigo");
  if (!track || desplazable <= 0) return;

  const rect = section.getBoundingClientRect();
  const progreso = Math.min(1, Math.max(0, (-rect.top - alturaCabecera) / desplazable));
  track.style.transform = `translateX(-${progreso * desplazable}px)`;
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

// ---- Matriz interactiva industria x tema ----

function contarHallazgos(industriaId, temaId) {
  return HALLAZGOS.filter((h) => h.industria === industriaId && h.eje === temaId).length;
}

function colorPorConteo(conteo) {
  if (conteo === 0) return null;
  const indice = Math.min(conteo - 1, RAMPA_SECUENCIAL.length - 1);
  return RAMPA_SECUENCIAL[indice];
}

function renderizarMatriz() {
  const tabla = document.getElementById("tabla-matriz");
  tabla.innerHTML = "";
  const t = TEXTOS[idioma];

  const encabezado = document.createElement("tr");
  encabezado.appendChild(document.createElement("th"));
  TEMAS.forEach((tema) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.className = "oi-cabecera-tema";
    th.dataset.tema = tema.id;
    th.textContent = idioma === "es" ? tema.es : tema.en;
    encabezado.appendChild(th);
  });
  tabla.appendChild(encabezado);

  INDUSTRIAS.forEach((industria) => {
    const fila = document.createElement("tr");
    const thIndustria = document.createElement("th");
    thIndustria.scope = "row";
    thIndustria.className = "oi-cabecera-industria";
    thIndustria.dataset.industria = industria.id;
    thIndustria.textContent = idioma === "es" ? industria.es : industria.en;
    fila.appendChild(thIndustria);

    TEMAS.forEach((tema) => {
      const conteo = contarHallazgos(industria.id, tema.id);
      const celda = document.createElement("td");
      celda.className = "celda-matriz";
      celda.dataset.tema = tema.id;
      celda.dataset.industria = industria.id;

      const color = colorPorConteo(conteo);
      if (color) {
        celda.style.backgroundColor = color;
        if (conteo >= 4) celda.classList.add("celda-oscura");
      }

      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "boton-celda";
      boton.textContent = conteo > 0 ? String(conteo) : "–";

      const nombreIndustria = idioma === "es" ? industria.es : industria.en;
      const nombreTema = idioma === "es" ? tema.es : tema.en;
      const etiquetaConteo = conteo === 1 ? t.hallazgoSingular : t.hallazgosPlural;
      boton.setAttribute("aria-label", `${nombreIndustria} · ${nombreTema}: ${conteo} ${etiquetaConteo}`);

      boton.addEventListener("click", () => abrirFichas(industria, tema));
      celda.appendChild(boton);
      fila.appendChild(celda);
    });

    tabla.appendChild(fila);
  });
}

function abrirFichas(industria, tema) {
  const modal = document.getElementById("modal-fichas");
  const t = TEXTOS[idioma];

  document.getElementById("modal-titulo").textContent = `${idioma === "es" ? industria.es : industria.en} · ${idioma === "es" ? tema.es : tema.en}`;
  const cuerpo = document.getElementById("modal-cuerpo");
  cuerpo.innerHTML = "";

  const hallazgos = HALLAZGOS.filter((h) => h.industria === industria.id && h.eje === tema.id);

  if (hallazgos.length === 0) {
    const vacio = document.createElement("p");
    vacio.textContent = t.sinHallazgos;
    cuerpo.appendChild(vacio);
  } else {
    hallazgos.forEach((h) => cuerpo.appendChild(crearFicha(h)));
  }

  modal.showModal();
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
