// Lógica del sitio. El contenido vive en datos.js, los textos de interfaz en
// textos.js, y los colores/tipografía en estilos.css — aquí solo "conectamos" todo.

let idioma = "es";
let indiceCapsula = 0;

const RAMPA_SECUENCIAL = ["#C9CCFF", "#9AA3F2", "#5C6CE0", "#2440F0", "#1B30B3", "#121F7A"];

// Colores de fondo/texto/punto para cada tarjeta de la sección "Temas",
// en el mismo orden que EJES (se repiten cada 4 porque son solo 4 colores de marca).
const PALETA_TEMAS = [
  { bg: "#2440F0", fg: "#FFFFFF", dot: "#FF6B2C" },
  { bg: "#111214", fg: "#FFFFFF", dot: "#2440F0" },
  { bg: "#FF6B2C", fg: "#111214", dot: "#FFFFFF" },
  { bg: "#C9CCFF", fg: "#111214", dot: "#2440F0" },
  { bg: "#2440F0", fg: "#FFFFFF", dot: "#C9CCFF" },
  { bg: "#111214", fg: "#FFFFFF", dot: "#FF6B2C" },
];

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
  renderizarTemas();
  renderizarMatriz();
  renderizarIndustrias();
  iniciarCapsulaRotativa();
  centrarDiagrama();

  window.addEventListener("resize", debounce(centrarDiagrama, 150));
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      calcularAnchoCapsula();
      centrarDiagrama();
    });
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
  renderizarTemas();
  renderizarMatriz();
  renderizarIndustrias();
  calcularAnchoCapsula();
  actualizarTextoCapsula();
  centrarDiagrama();
}

function debounce(fn, esperaMs) {
  let temporizador = null;
  return function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(fn, esperaMs);
  };
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

// ---- Cápsula rotativa del hero (usa los 6 temas reales del sitio) ----

function iniciarCapsulaRotativa() {
  calcularAnchoCapsula();
  actualizarTextoCapsula();
  setInterval(() => {
    indiceCapsula = (indiceCapsula + 1) % EJES.length;
    actualizarTextoCapsula();
  }, 2400);
}

function actualizarTextoCapsula() {
  const tema = EJES[indiceCapsula];
  document.getElementById("oi-word").textContent = idioma === "es" ? tema.es : tema.en;
}

// Mide los 6 temas reales y fija el ancho de la cápsula al más largo,
// para que el texto no "salte" de tamaño cuando el tema rota.
function calcularAnchoCapsula() {
  const capsula = document.getElementById("oi-word");
  if (!capsula) return;
  const estilos = getComputedStyle(capsula);

  const medidor = document.createElement("span");
  medidor.style.position = "absolute";
  medidor.style.visibility = "hidden";
  medidor.style.whiteSpace = "nowrap";
  medidor.style.fontFamily = estilos.fontFamily;
  medidor.style.fontWeight = estilos.fontWeight;
  medidor.style.fontSize = estilos.fontSize;
  document.body.appendChild(medidor);

  let anchoMaximo = 0;
  EJES.forEach((tema) => {
    medidor.textContent = idioma === "es" ? tema.es : tema.en;
    anchoMaximo = Math.max(anchoMaximo, medidor.offsetWidth);
  });

  document.body.removeChild(medidor);

  const relleno = 16; // 8px de cada lado, igual al padding de .oi-capsula
  capsula.style.width = `${anchoMaximo + relleno}px`;
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
    const eje = EJES.find((e) => e.id === h.eje);

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
    categoria.textContent = eje ? (idioma === "es" ? eje.es : eje.en) : "";

    const titulo = document.createElement("h3");
    titulo.className = "oi-titulo-hallazgo";
    titulo.textContent = idioma === "es" ? h.hallazgo_es : h.hallazgo_en;

    tarjeta.append(portada, categoria, titulo);
    contenedor.appendChild(tarjeta);
  });
}

function abrirFichaUnica(h) {
  const industria = INDUSTRIAS.find((i) => i.id === h.industria);
  const eje = EJES.find((e) => e.id === h.eje);
  const nombreIndustria = industria ? (idioma === "es" ? industria.es : industria.en) : "";
  const nombreEje = eje ? (idioma === "es" ? eje.es : eje.en) : "";

  const modal = document.getElementById("modal-fichas");
  document.getElementById("modal-titulo").textContent = `${nombreIndustria} · ${nombreEje}`;
  const cuerpo = document.getElementById("modal-cuerpo");
  cuerpo.innerHTML = "";
  cuerpo.appendChild(crearFicha(h));
  modal.showModal();
}

// ---- Temas: panel que cambia con scroll y con clic ----

let observadorTemas = null;

function renderizarTemas() {
  const caja = document.getElementById("oi-temas");
  caja.innerHTML = "";

  if (observadorTemas) observadorTemas.disconnect();

  const botones = EJES.map((tema, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "oi-tema-boton";
    boton.dataset.indice = String(indice);

    const numero = document.createElement("span");
    numero.className = "oi-tema-numero";
    numero.textContent = String(indice + 1).padStart(2, "0");

    const nombre = document.createElement("span");
    nombre.className = "oi-tema-nombre";
    nombre.textContent = idioma === "es" ? tema.es : tema.en;

    boton.append(numero, nombre);
    boton.addEventListener("click", () => activarTema(indice));
    caja.appendChild(boton);
    return boton;
  });

  activarTema(0, botones);

  observadorTemas = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const indice = Number(entrada.target.dataset.indice);
          activarTema(indice, botones);
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );
  botones.forEach((boton) => observadorTemas.observe(boton));
}

function activarTema(indice, botones) {
  const tema = EJES[indice];
  const colores = PALETA_TEMAS[indice % PALETA_TEMAS.length];
  const panel = document.getElementById("oi-panel");

  panel.style.background = colores.bg;
  panel.style.color = colores.fg;
  document.getElementById("oi-dot").style.background = colores.dot;
  document.getElementById("oi-num").textContent = String(indice + 1).padStart(2, "0");
  document.getElementById("oi-name").textContent = idioma === "es" ? tema.es : tema.en;
  document.getElementById("oi-desc").textContent = idioma === "es" ? tema.desc_es : tema.desc_en;

  const listaBotones = botones || Array.from(document.querySelectorAll(".oi-tema-boton"));
  listaBotones.forEach((boton, i) => {
    boton.classList.toggle("oi-tema-activo", i === indice);
  });
}

// ---- Matriz interactiva industria x eje ----

function contarHallazgos(industriaId, ejeId) {
  return HALLAZGOS.filter((h) => h.industria === industriaId && h.eje === ejeId).length;
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
  EJES.forEach((eje) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = idioma === "es" ? eje.es : eje.en;
    encabezado.appendChild(th);
  });
  tabla.appendChild(encabezado);

  INDUSTRIAS.forEach((industria) => {
    const fila = document.createElement("tr");
    const thIndustria = document.createElement("th");
    thIndustria.scope = "row";
    thIndustria.textContent = idioma === "es" ? industria.es : industria.en;
    fila.appendChild(thIndustria);

    EJES.forEach((eje) => {
      const conteo = contarHallazgos(industria.id, eje.id);
      const celda = document.createElement("td");
      celda.className = "celda-matriz";

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
      const nombreEje = idioma === "es" ? eje.es : eje.en;
      const etiquetaConteo = conteo === 1 ? t.hallazgoSingular : t.hallazgosPlural;
      boton.setAttribute("aria-label", `${nombreIndustria} · ${nombreEje}: ${conteo} ${etiquetaConteo}`);

      boton.addEventListener("click", () => abrirFichas(industria, eje));
      celda.appendChild(boton);
      fila.appendChild(celda);
    });

    tabla.appendChild(fila);
  });
}

function abrirFichas(industria, eje) {
  const modal = document.getElementById("modal-fichas");
  const t = TEXTOS[idioma];

  document.getElementById("modal-titulo").textContent = `${idioma === "es" ? industria.es : industria.en} · ${idioma === "es" ? eje.es : eje.en}`;
  const cuerpo = document.getElementById("modal-cuerpo");
  cuerpo.innerHTML = "";

  const hallazgos = HALLAZGOS.filter((h) => h.industria === industria.id && h.eje === eje.id);

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

// ---- Industrias (botones grandes) ----

function renderizarIndustrias() {
  const contenedor = document.getElementById("grid-industrias");
  contenedor.innerHTML = "";

  INDUSTRIAS.forEach((industria) => {
    const boton = document.createElement("a");
    boton.href = "#matriz";
    boton.className = "oi-boton-industria";
    const texto = document.createElement("span");
    texto.textContent = idioma === "es" ? industria.es : industria.en;
    const flecha = document.createElement("span");
    flecha.setAttribute("aria-hidden", "true");
    flecha.textContent = "→";
    boton.append(texto, flecha);
    contenedor.appendChild(boton);
  });
}

document.addEventListener("DOMContentLoaded", init);
