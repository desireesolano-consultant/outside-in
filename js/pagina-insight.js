// Página de un insight (insight.html?id=...): el cruce de varios estudios.
// Los datos vienen de INSIGHTS (js/insights.js) y cada estudio citado se
// toma de HALLAZGOS (js/datos.js), con su fuente y su link al original.

let idioma = "es";
let insightActual = null;

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
  insightActual = (typeof INSIGHTS !== "undefined" ? INSIGHTS : []).find((i) => i.id === id) || null;
  aplicarIdioma();
  renderizarInsight();
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
  renderizarInsight();
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

function campo(obj, nombre) {
  return idioma === "es" ? obj[`${nombre}_es`] : obj[`${nombre}_en`];
}

function nombreCategoria(id) {
  const c = [...TEMAS, ...INDUSTRIAS].find((x) => x.id === id);
  return c ? c[idioma] : "";
}

function llenarLista(idLista, items) {
  const lista = document.getElementById(idLista);
  lista.innerHTML = "";
  (items || []).forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
}

function renderizarInsight() {
  const t = TEXTOS[idioma];
  const articulo = document.getElementById("insight");
  const noEncontrado = document.getElementById("insight-no-encontrado");
  if (!insightActual) {
    articulo.hidden = true;
    noEncontrado.hidden = false;
    return;
  }
  articulo.hidden = false;
  noEncontrado.hidden = true;
  const ins = insightActual;
  document.title = `${campo(ins, "titulo")} · Outside-In`;

  const fuentes = ins.estudios
    .map((id) => HALLAZGOS.find((h) => h.id === id))
    .filter(Boolean);
  document.getElementById("insight-meta").textContent =
    `${fuentes.length} ${t.insightEstudios} · ${[...new Set(fuentes.map((h) => h.fuente.replace(" & Company", "").replace(" AI Institute", "")))].join(", ")}`;
  document.getElementById("insight-titulo").textContent = campo(ins, "titulo");
  document.getElementById("insight-bajada").textContent = campo(ins, "bajada");

  // Lo que dice cada estudio
  const dicen = document.getElementById("insight-dicen");
  dicen.innerHTML = "";
  ins.dicen.forEach((d) => {
    const h = HALLAZGOS.find((x) => x.id === d.id);
    if (!h) return;
    const tarjeta = document.createElement("article");
    tarjeta.className = "oi-insight-estudio";
    const fuente = document.createElement("p");
    fuente.className = "oi-insight-estudio-fuente";
    fuente.textContent = `${h.fuente} · ${nombreCategoria(h.industria) || nombreCategoria(h.tema)}`;
    const dato = document.createElement("p");
    dato.className = "oi-insight-estudio-dato";
    dato.textContent = campo(d, "dato");
    const frase = document.createElement("p");
    frase.className = "oi-insight-estudio-frase";
    frase.textContent = campo(d, "frase");
    const pie = document.createElement("div");
    pie.className = "oi-insight-estudio-pie";
    const resumen = document.createElement("a");
    resumen.href = `hallazgo.html?id=${encodeURIComponent(h.id)}`;
    resumen.textContent = t.insightVerResumen;
    const original = document.createElement("a");
    original.href = h.link;
    original.target = "_blank";
    original.rel = "noopener";
    original.textContent = t.insightVerOriginal;
    pie.append(resumen, original);
    tarjeta.append(fuente, dato, frase, pie);
    dicen.appendChild(tarjeta);
  });

  llenarLista("insight-coinciden", campo(ins, "coinciden"));
  llenarLista("insight-chocan", campo(ins, "chocan"));
  document.getElementById("insight-porque").textContent = campo(ins, "porque");
  llenarLista("insight-preguntas", campo(ins, "preguntas"));

  // Mi mirada: solo Desirée la escribe
  const mirada = document.getElementById("insight-mirada");
  mirada.innerHTML = "";
  const cabecera = document.createElement("div");
  cabecera.className = "oi-insight-mirada-cabecera";
  const foto = document.createElement("img");
  foto.src = "img/desiree-mirada.jpg";
  foto.alt = "Desirée Solano";
  foto.width = 64;
  foto.height = 64;
  foto.className = "oi-foto-perfil";
  const titulos = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.className = "oi-insight-h2";
  h2.textContent = t.miMiradaTitulo;
  const firma = document.createElement("p");
  firma.className = "oi-insight-firma";
  firma.textContent = `${t.nombreCompleto} · ${t.heroCargo}`;
  titulos.append(h2, firma);
  cabecera.append(foto, titulos);
  mirada.appendChild(cabecera);
  const textoMirada = campo(ins, "mirada");
  const p = document.createElement("p");
  if (textoMirada) {
    p.textContent = textoMirada;
  } else {
    p.className = "oi-insight-mirada-pendiente";
    p.textContent = t.insightMiradaPendiente;
  }
  mirada.appendChild(p);

  const url = `https://desireesolano-consultant.github.io/outside-in/insight.html?id=${encodeURIComponent(ins.id)}&ref=linkedin`;
  document.getElementById("insight-compartir").href =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
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
