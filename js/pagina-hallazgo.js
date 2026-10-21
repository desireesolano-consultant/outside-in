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
  const contenedorArticulo = document.getElementById("hallazgo");
  const noEncontrado = document.getElementById("hallazgo-no-encontrado");
  const h = hallazgoActual;

  if (!h) {
    contenedorArticulo.hidden = true;
    noEncontrado.hidden = false;
    document.title = "Outside-In";
    return;
  }

  contenedorArticulo.hidden = false;
  noEncontrado.hidden = true;

  const titulo = texto(h, "hallazgo");
  document.title = `${titulo} · Outside-In`;
  document.getElementById("hallazgo-titulo").textContent = titulo;
  document.getElementById("hallazgo-fuente-linea").textContent = `${h.fuente} · ${texto(h, "estudio")}`;

  const figura = document.getElementById("hallazgo-foto");
  const imagen = typeof imagenDeHallazgo === "function" ? imagenDeHallazgo(h) : null;
  if (imagen) {
    const img = document.getElementById("hallazgo-foto-img");
    img.src = urlImagen(imagen, 1600);
    img.onerror = () => { figura.hidden = true; };
    document.getElementById("hallazgo-foto-credito").textContent = `${t.fotoCredito} ${imagen.autor} / Unsplash`;
    figura.hidden = false;
  } else {
    figura.hidden = true;
  }

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

  const articulo = texto(h, "articulo");
  document.getElementById("hallazgo-bajada").textContent = articulo ? articulo.bajada : "";

  // Párrafos: los dos primeros antes de las cifras, el resto después.
  const inicio = document.getElementById("hallazgo-texto-inicio");
  const resto = document.getElementById("hallazgo-texto-resto");
  inicio.innerHTML = "";
  resto.innerHTML = "";
  const parrafos = articulo ? articulo.parrafos : [texto(h, "dato_clave")];
  parrafos.forEach((parrafo, indice) => {
    const p = document.createElement("p");
    p.textContent = parrafo;
    (indice < 2 ? inicio : resto).appendChild(p);
  });

  const lista = document.getElementById("hallazgo-puntos");
  lista.innerHTML = "";
  (texto(h, "puntos") || []).forEach((punto) => {
    const li = document.createElement("li");
    li.textContent = punto;
    lista.appendChild(li);
  });
  lista.parentElement.hidden = lista.children.length === 0;

  // Cita: en inglés se muestra la original; en español, la traducción
  // con la frase original debajo.
  const cita = document.getElementById("hallazgo-cita");
  if (h.cita) {
    cita.hidden = false;
    document.getElementById("hallazgo-cita-texto").textContent =
      `“${idioma === "es" ? h.cita.traduccion_es : h.cita.original}”`;
    document.getElementById("hallazgo-cita-autor").textContent =
      `— ${idioma === "es" ? h.cita.autor_es : h.cita.autor_en}`;
    const original = document.getElementById("hallazgo-cita-original");
    original.hidden = idioma !== "es";
    original.textContent = `${t.hallazgoCitaOriginal}: “${h.cita.original}”`;
  } else {
    cita.hidden = true;
  }

  const preguntas = document.getElementById("hallazgo-preguntas");
  preguntas.innerHTML = "";
  (texto(h, "preguntas") || []).forEach((pregunta) => {
    const li = document.createElement("li");
    li.textContent = pregunta;
    preguntas.appendChild(li);
  });
  document.getElementById("hallazgo-preguntas-bloque").hidden = preguntas.children.length === 0;

  const contexto = document.getElementById("hallazgo-contexto");
  contexto.textContent = texto(h, "contexto") || "";
  contexto.parentElement.hidden = !texto(h, "contexto");

  const lectura = document.getElementById("hallazgo-lectura");
  lectura.innerHTML = "";
  const tituloLectura = document.createElement("h2");
  tituloLectura.className = "oi-hallazgo-subtitulo";
  tituloLectura.textContent = t.miMiradaTitulo;
  const cabeceraLectura = document.createElement("div");
  cabeceraLectura.className = "oi-mirada-cabecera";
  const fotoLectura = document.createElement("img");
  fotoLectura.className = "oi-foto-perfil oi-foto-mirada";
  fotoLectura.src = "img/desiree-mirada.jpg";
  fotoLectura.alt = "Desiree Solano";
  fotoLectura.width = 56;
  fotoLectura.height = 56;
  cabeceraLectura.append(fotoLectura, tituloLectura);
  lectura.appendChild(cabeceraLectura);
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
