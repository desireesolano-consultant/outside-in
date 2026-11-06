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

function nombreCortoInsight(id) {
  const ind = INDUSTRIAS.find((x) => x.id === id);
  if (ind) {
    // Nombre corto de la industria ("Servicios financieros", no la versión con paréntesis)
    const f = ind[`frase_${idioma}`] || ind[idioma];
    return f.charAt(0).toUpperCase() + f.slice(1);
  }
  const c = TEMAS.find((x) => x.id === id);
  return c ? c[idioma] : "";
}

function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto != null) el.textContent = texto;
  return el;
}

function fuenteDe(id) {
  const h = HALLAZGOS.find((x) => x.id === id);
  return h ? h.fuente : "";
}

// Un cruce: título, dos datos de estudios distintos, la lectura y la nota.
function tarjetaCruce(cruce, signo) {
  const t = TEXTOS[idioma];
  const art = crear("article", "ic-cruce");
  art.appendChild(crear("h3", null, campo(cruce, "titulo")));
  const duelo = crear("div", "ic-duelo");
  cruce.lados.forEach((lado, i) => {
    const caja = crear("div", "ic-lado");
    caja.append(
      crear("em", null, nombreCortoInsight(lado.industria)),
      crear("b", null, campo(lado, "dato")),
      crear("span", null, campo(lado, "texto")),
      crear("small", null, fuenteDe(lado.id))
    );
    duelo.appendChild(caja);
    if (i === 0) {
      const vs = crear("div", "ic-vs", signo);
      vs.setAttribute("aria-hidden", "true");
      duelo.appendChild(vs);
    }
  });
  const lectura = crear("div");
  lectura.append(crear("p", "ic-lectura-eti", t.insightLectura), crear("p", "ic-lectura", campo(cruce, "lectura")));
  art.append(duelo, lectura);
  if (campo(cruce, "nota")) art.appendChild(crear("p", "ic-nota", campo(cruce, "nota")));
  return art;
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
  const titulo1 = campo(ins, "titulo");
  const titulo2 = campo(ins, "titulo2") || "";
  document.title = `${titulo1} ${titulo2} · Outside-In`.replace(/\s+·/, " ·");

  const fuentes = ins.estudios.map((id) => HALLAZGOS.find((h) => h.id === id)).filter(Boolean);
  document.getElementById("insight-meta").textContent =
    `${t.insightEtiqueta} · ${t.insightCruce} ${ins.numero || ""} · ${nombreCortoInsight(ins.tema)}`;

  const h1 = document.getElementById("insight-titulo");
  h1.textContent = `${titulo1} `;
  if (titulo2) h1.appendChild(crear("span", null, titulo2));
  document.getElementById("insight-bajada").textContent = campo(ins, "bajada");

  // Estudios cruzados: fuente · industria (sin repetir)
  const meta = document.getElementById("insight-fuentes");
  meta.innerHTML = "";
  const vistos = new Set();
  fuentes.forEach((h) => {
    const clave = `${h.fuente}|${h.industria}`;
    if (vistos.has(clave)) return;
    vistos.add(clave);
    const s = crear("span");
    s.append(crear("b", null, h.fuente), document.createTextNode(` · ${nombreCortoInsight(h.industria)}`));
    meta.appendChild(s);
  });

  document.getElementById("insight-tesis").textContent = campo(ins, "tesis");

  // Puntos de coincidencia: la secuencia y los cruces
  const h2Coinciden = document.querySelector("[data-i18n='insightCoincidenTitulo']");
  if (h2Coinciden && campo(ins, "coinciden_titulo")) h2Coinciden.textContent = campo(ins, "coinciden_titulo");
  document.getElementById("insight-coinciden-intro").textContent = campo(ins, "coinciden_intro") || "";
  const cadena = document.getElementById("insight-cadena");
  cadena.innerHTML = "";
  (ins.cadena || []).forEach((paso, i) => {
    const d = crear("div", "ic-eslabon");
    d.append(
      crear("span", "ic-num", String(i + 1).padStart(2, "0")),
      crear("h3", null, campo(paso, "titulo")),
      crear("p", "ic-c", paso.dato),
      crear("p", null, campo(paso, "texto")),
      crear("small", null, fuenteDe(paso.id))
    );
    cadena.appendChild(d);
  });
  cadena.hidden = !cadena.children.length;
  const coinciden = document.getElementById("insight-coinciden");
  coinciden.innerHTML = "";
  (ins.coinciden || []).forEach((c) => coinciden.appendChild(tarjetaCruce(c, "=")));

  // Diferencias y matices: dato contra dato
  document.getElementById("insight-difieren-intro").textContent = campo(ins, "difieren_intro") || "";
  const difieren = document.getElementById("insight-difieren");
  difieren.innerHTML = "";
  (ins.difieren || []).forEach((c) => difieren.appendChild(tarjetaCruce(c, "vs.")));

  // La postura de cada estudio
  const dicen = document.getElementById("insight-dicen");
  dicen.innerHTML = "";
  ins.dicen.forEach((d) => {
    const h = HALLAZGOS.find((x) => x.id === d.id);
    if (!h) return;
    const tarjeta = crear("article", "ic-postura");
    const pie = crear("div", "ic-pie");
    const resumen = crear("a", null, t.insightVerResumen);
    resumen.href = `hallazgo.html?id=${encodeURIComponent(h.id)}`;
    const original = crear("a", null, t.insightVerOriginal);
    original.href = h.link;
    original.target = "_blank";
    original.rel = "noopener";
    pie.append(resumen, original);
    tarjeta.append(
      crear("p", "ic-eti ic-az", `${h.fuente} · ${nombreCortoInsight(h.industria) || nombreCortoInsight(h.tema)}`),
      crear("p", "ic-q", campo(d, "postura")),
      crear("p", "ic-c", campo(d, "dato")),
      crear("p", "ic-s", campo(d, "frase")),
      pie
    );
    dicen.appendChild(tarjeta);
  });

  document.getElementById("insight-alcance-titulo").textContent = campo(ins, "alcance_titulo") || "";
  document.getElementById("insight-porque").textContent = campo(ins, "alcance") || campo(ins, "porque") || "";

  const preguntas = document.getElementById("insight-preguntas");
  preguntas.innerHTML = "";
  (campo(ins, "preguntas") || []).forEach((q) => preguntas.appendChild(crear("li", null, q)));

  const pieFuentes = document.getElementById("insight-fuentes-pie");
  pieFuentes.innerHTML = "";
  pieFuentes.appendChild(crear("b", null, `${t.insightFuentes}: `));
  const usados = [...new Set([...ins.estudios, ...(ins.cadena || []).map((x) => x.id),
    ...[...(ins.coinciden || []), ...(ins.difieren || [])].flatMap((c) => c.lados.map((l) => l.id))])]
    .map((id) => HALLAZGOS.find((h) => h.id === id)).filter(Boolean)
    .filter((h, i, arr) => arr.findIndex((x) => x.fuente === h.fuente && x.estudio_es === h.estudio_es) === i);
  usados.forEach((h, i) => {
    if (i) pieFuentes.appendChild(document.createTextNode(" · "));
    const a = crear("a", null, `${h.fuente}, ${campo(h, "estudio")} (${h.anio})`);
    a.href = h.link;
    a.target = "_blank";
    a.rel = "noopener";
    pieFuentes.appendChild(a);
  });

  // "Mi mirada" NO va dentro de los insights: vive solo en la sección Mi mirada (decisión de Desiree, 2-nov-2026).

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
