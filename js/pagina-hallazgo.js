// Lógica de la página de un hallazgo completo (hallazgo.html?id=...).
// Lee el hallazgo desde HALLAZGOS (datos.js) y arma la página. Si el id no
// existe, muestra un aviso y un enlace de vuelta a los hallazgos.

let idioma = "es";
let hallazgoActual = null;

function prefiereMovimientoReducido() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function init() {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") idioma = guardado;
  } catch (e) {
    // almacenamiento no disponible: seguimos con "es"
  }

  const id = new URLSearchParams(window.location.search).get("id");
  hallazgoActual = HALLAZGOS.find((h) => h.id === id && h.esEjemplo === false) || null;

  aplicarIdioma();
  renderizarHallazgo();
  configurarFranjaVistaPrevia();
  configurarMenuMovil();
  configurarRevelado();

  document.getElementById("boton-idioma").addEventListener("click", cambiarIdioma);
}

function cambiarIdioma() {
  idioma = idioma === "es" ? "en" : "es";
  try {
    localStorage.setItem("idioma", idioma);
  } catch (e) {
    // ignorar si no se puede guardar
  }
  aplicarIdioma();
  renderizarHallazgo();
}

function aplicarIdioma() {
  document.documentElement.lang = idioma;
  const t = TEXTOS[idioma];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (t[clave]) el.textContent = t[clave];
  });

  document.getElementById("boton-idioma").textContent = t.botonIdioma;
  document.getElementById("boton-menu").setAttribute("aria-label", t.menuAbrir);
  document.getElementById("link-linkedin-footer").href = LINK_LINKEDIN;
}

function texto(h, campo) {
  return idioma === "es" ? h[`${campo}_es`] : h[`${campo}_en`];
}

function agregarMetadato(dl, etiqueta, valor) {
  if (!valor) return;
  const dt = document.createElement("dt");
  dt.textContent = etiqueta;
  const dd = document.createElement("dd");
  dd.textContent = valor;
  dl.append(dt, dd);
}

function formatearFechaLarga(fechaIso) {
  if (!fechaIso) return "";
  const fecha = new Date(`${fechaIso}T00:00:00`);
  const locale = idioma === "es" ? "es-PE" : "en-US";
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(fecha);
}

function renderizarHallazgo() {
  const t = TEXTOS[idioma];
  const articulo = document.getElementById("hallazgo");
  const noEncontrado = document.getElementById("hallazgo-no-encontrado");
  const h = hallazgoActual;

  if (!h) {
    articulo.hidden = true;
    noEncontrado.hidden = false;
    document.title = "Outside-In";
    return;
  }

  articulo.hidden = false;
  noEncontrado.hidden = true;

  const titulo = texto(h, "hallazgo");
  document.title = `${titulo} · Outside-In`;
  document.getElementById("hallazgo-titulo").textContent = titulo;
  document.getElementById("hallazgo-fuente-linea").textContent = `${h.fuente} · ${texto(h, "estudio")}`;

  const capsulas = document.getElementById("hallazgo-capsulas");
  capsulas.innerHTML = "";
  const tema = h.tema ? TEMAS.find((tm) => tm.id === h.tema) : null;
  const industria = h.industria ? INDUSTRIAS.find((i) => i.id === h.industria) : null;
  if (tema) {
    const c = document.createElement("span");
    c.className = "oi-capsula oi-capsula-tema";
    c.textContent = idioma === "es" ? tema.es : tema.en;
    capsulas.appendChild(c);
  }
  if (industria) {
    const c = document.createElement("span");
    c.className = "oi-capsula oi-capsula-industria";
    c.textContent = idioma === "es" ? industria.es : industria.en;
    capsulas.appendChild(c);
  }

  const lista = document.getElementById("hallazgo-puntos");
  lista.innerHTML = "";
  const puntos = texto(h, "puntos") || [texto(h, "dato_clave")];
  puntos.forEach((punto) => {
    const li = document.createElement("li");
    li.textContent = punto;
    lista.appendChild(li);
  });

  const contexto = document.getElementById("hallazgo-contexto");
  contexto.textContent = texto(h, "contexto") || "";
  contexto.previousElementSibling.hidden = !texto(h, "contexto");

  const lectura = document.getElementById("hallazgo-lectura");
  lectura.innerHTML = "";
  const tituloLectura = document.createElement("h2");
  tituloLectura.className = "oi-hallazgo-subtitulo";
  tituloLectura.textContent = t.implicanciaTitulo;
  lectura.appendChild(tituloLectura);
  const textoLectura = texto(h, "implicancia");
  if (textoLectura) {
    const p = document.createElement("p");
    p.textContent = textoLectura;
    lectura.appendChild(p);
    lectura.classList.remove("oi-hallazgo-lectura-pendiente");
  } else {
    lectura.classList.add("oi-hallazgo-lectura-pendiente");
    const etiqueta = document.createElement("span");
    etiqueta.className = "etiqueta-lectura-pendiente";
    etiqueta.textContent = t.lecturaPendienteEtiqueta;
    const nota = document.createElement("p");
    nota.className = "nota-lectura-pendiente";
    nota.textContent = t.lecturaPendienteNota;
    lectura.append(etiqueta, nota);
  }

  const metadatos = document.getElementById("hallazgo-metadatos");
  metadatos.innerHTML = "";
  agregarMetadato(metadatos, t.fuenteLabel, h.fuente);
  agregarMetadato(metadatos, t.estudioLabel, texto(h, "estudio"));
  agregarMetadato(metadatos, t.hallazgoFechaLabel, formatearFechaLarga(h.fecha));
  agregarMetadato(metadatos, t.regionLabel, texto(h, "region"));

  document.getElementById("hallazgo-link").href = h.link;
}

function configurarFranjaVistaPrevia() {
  const franja = document.getElementById("franja-vista-previa");
  if (franja) franja.hidden = !MODO_VISTA_PREVIA;
}

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



document.addEventListener("DOMContentLoaded", init);
