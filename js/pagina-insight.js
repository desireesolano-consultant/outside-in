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
  // Las pestañas de los cruces quedan fijas justo debajo de la cabecera
  const cab = document.querySelector(".oi-header");
  const fijarAlto = () => document.documentElement.style.setProperty("--iv-cab", `${cab ? cab.offsetHeight : 0}px`);
  fijarAlto();
  window.addEventListener("resize", fijarAlto);
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

let pasoAuto = true;
let pasoIndice = 0;
let pasoTimer = null;

function cap(t) {
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
}

function animar(el) {
  if (prefiereMovimientoReducido()) return;
  el.classList.remove("iv-cambia");
  void el.offsetWidth;
  el.classList.add("iv-cambia");
}

// Patrón en cinco pasos: un dato a la vez
function verPaso(i) {
  const ins = insightActual;
  const pasos = document.getElementById("insight-pasos");
  [...pasos.children].forEach((b, k) => {
    b.setAttribute("aria-selected", String(k === i));
    b.tabIndex = k === i ? 0 : -1;
  });
  const p = ins.cadena[i];
  const detalle = document.getElementById("insight-detalle");
  detalle.innerHTML = "";
  const d = crear("div");
  d.append(crear("p", null, campo(p, "texto")), crear("small", null, fuenteDe(p.id)));
  detalle.append(crear("span", "iv-c", p.dato), d);
  animar(detalle);
  pasoIndice = i;
}

// Pestaña de un cruce: texto a la izquierda, barras a la derecha
function verCruce(i, bajar) {
  const t = TEXTOS[idioma];
  const lista = [...(insightActual.coinciden || []).map((c) => ["co", c]), ...(insightActual.difieren || []).map((c) => ["di", c])];
  const [tipo, c] = lista[i];
  [...document.getElementById("insight-tabs").children].forEach((b, k) => {
    b.setAttribute("aria-selected", String(k === i));
    b.tabIndex = k === i ? 0 : -1;
  });
  const panel = document.getElementById("insight-panel");
  panel.innerHTML = "";
  panel.className = "iv-panel";
  const tx = crear("div", "iv-texto");
  tx.append(
    crear("p", "iv-etq", tipo === "co" ? t.insightTipoCoincide : t.insightTipoDifiere),
    crear("h3", null, campo(c, "titulo")),
    crear("p", "iv-sub", campo(c, "sub") || "")
  );
  const lect = crear("div", "iv-lect");
  lect.appendChild(crear("p", "iv-eti", t.insightLectura));
  String(campo(c, "lectura") || "").split("\n\n").forEach((x) => lect.appendChild(crear("p", null, x)));
  tx.appendChild(lect);
  const g = crear("div", "iv-grafico");
  g.appendChild(crear("p", "iv-eje", campo(c, "eje") || ""));
  c.lados.forEach((lado, j) => {
    const fila = crear("div", "iv-fila");
    const lbl = crear("div", "iv-lbl");
    const a = crear("span");
    a.append(crear("b", null, nombreCortoInsight(lado.industria)), crear("small", null, fuenteDe(lado.id)));
    lbl.append(a, crear("span", "iv-val", campo(lado, "dato")));
    const barra = crear("div", "iv-barra");
    const rel = crear("div", "iv-relleno");
    barra.appendChild(rel);
    fila.append(lbl, barra, crear("p", "iv-que", cap(campo(lado, "texto"))));
    g.appendChild(fila);
    if (j === 0) {
      const vs = crear("span", "iv-versus", tipo === "co" ? "=" : "vs.");
      vs.setAttribute("aria-hidden", "true");
      g.appendChild(vs);
    }
    const ancho = `${Math.max(0, Math.min(100, lado.v || 0))}%`;
    if (prefiereMovimientoReducido()) rel.style.width = ancho;
    else requestAnimationFrame(() => requestAnimationFrame(() => { rel.style.width = ancho; }));
  });
  if (campo(c, "nota")) g.appendChild(crear("p", "iv-nota", campo(c, "nota")));
  panel.append(tx, g);
  animar(panel);
  if (bajar) document.getElementById("insight-cruces").scrollIntoView({ behavior: prefiereMovimientoReducido() ? "auto" : "smooth" });
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
  document.title = `${titulo1} ${titulo2} · Outside-In`;

  const fuentes = ins.estudios.map((id) => HALLAZGOS.find((h) => h.id === id)).filter(Boolean);
  document.getElementById("insight-pill").textContent = `${t.insightCruce} ${ins.numero || ""}`.trim();
  document.getElementById("insight-meta").textContent =
    `${nombreCortoInsight(ins.tema)} · ${fuentes.length} ${t.insightEstudios}${ins.lectura_min ? ` · ${ins.lectura_min} ${t.insightMinLectura}` : ""}`;
  const h1 = document.getElementById("insight-titulo");
  h1.textContent = `${titulo1} `;
  if (titulo2) h1.appendChild(crear("span", null, titulo2));
  document.getElementById("insight-tesis").textContent = campo(ins, "tesis");

  // Botones de los estudios: llevan al resumen de cada uno
  const est = document.getElementById("insight-estudios");
  est.innerHTML = "";
  fuentes.forEach((h) => {
    const a = crear("a");
    a.href = `hallazgo.html?id=${encodeURIComponent(h.id)}`;
    const i = crear("i", null, h.fuente.charAt(0));
    i.setAttribute("aria-hidden", "true");
    a.append(i, document.createTextNode(h.fuente), crear("small", null, ` · ${nombreCortoInsight(h.industria)}`));
    est.appendChild(a);
  });

  // Patrón en cinco pasos
  document.getElementById("insight-patron-titulo").textContent = campo(ins, "patron_titulo") || "";
  document.getElementById("insight-patron-intro").textContent = campo(ins, "patron_intro") || "";
  const pasos = document.getElementById("insight-pasos");
  pasos.innerHTML = "";
  (ins.cadena || []).forEach((p, i) => {
    const b = crear("button", "iv-paso");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.append(crear("span", "iv-num", String(i + 1).padStart(2, "0")), crear("b", null, campo(p, "titulo")));
    b.addEventListener("click", () => { pasoAuto = false; verPaso(i); });
    pasos.appendChild(b);
  });
  if (ins.cadena && ins.cadena.length) verPaso(Math.min(pasoIndice, ins.cadena.length - 1));
  if (!pasoTimer && !prefiereMovimientoReducido()) {
    pasoTimer = setInterval(() => {
      if (!pasoAuto || !insightActual.cadena) return;
      const r = pasos.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      verPaso((pasoIndice + 1) % insightActual.cadena.length);
    }, 3500);
  }

  // De un vistazo + pestañas
  const grilla = document.getElementById("insight-grilla");
  const tabs = document.getElementById("insight-tabs");
  grilla.innerHTML = "";
  tabs.innerHTML = "";
  const lista = [...(ins.coinciden || []).map((c) => ["co", c]), ...(ins.difieren || []).map((c) => ["di", c])];
  let nMatiz = 0;
  lista.forEach(([tipo, c], i) => {
    const signo = tipo === "co" ? "=" : "≠";
    const tarjeta = crear("button", `iv-tarjeta iv-${tipo}`);
    tarjeta.type = "button";
    const sig = crear("span", "iv-sig", signo);
    sig.setAttribute("aria-hidden", "true");
    tarjeta.append(
      sig,
      crear("span", "iv-tipo", tipo === "co" ? t.insightTipoCoincide : t.insightTipoDifiere),
      crear("h3", null, campo(c, "tarjeta") || campo(c, "titulo")),
      crear("p", null, campo(c, "resumen") || ""),
      crear("span", "iv-ir", t.insightLeerCruceTarjeta)
    );
    tarjeta.addEventListener("click", () => verCruce(i, true));
    grilla.appendChild(tarjeta);
    const tab = crear("button", `iv-tab iv-${tipo}`);
    tab.type = "button";
    tab.setAttribute("role", "tab");
    const ti = crear("i", null, signo);
    ti.setAttribute("aria-hidden", "true");
    if (tipo === "di") nMatiz += 1;
    tab.append(ti, document.createTextNode(tipo === "co" ? t.insightTabCoincide : `${t.insightTabMatiz} ${nMatiz}`));
    tab.addEventListener("click", () => verCruce(i, false));
    tabs.appendChild(tab);
  });
  if (lista.length) verCruce(0, false);

  // La postura de cada estudio
  const dicen = document.getElementById("insight-dicen");
  dicen.innerHTML = "";
  ins.dicen.forEach((d) => {
    const h = HALLAZGOS.find((x) => x.id === d.id);
    if (!h) return;
    const a = crear("a", "iv-postura");
    a.href = `hallazgo.html?id=${encodeURIComponent(h.id)}`;
    a.append(
      crear("p", "iv-etq", `${h.fuente} · ${nombreCortoInsight(h.industria)}`),
      crear("p", "iv-q", campo(d, "postura")),
      crear("span", "iv-ir", t.insightVerResumenEstudio)
    );
    dicen.appendChild(a);
  });
  document.getElementById("insight-porque").textContent = campo(ins, "alcance_corto") || campo(ins, "alcance") || "";

  const preguntas = document.getElementById("insight-preguntas");
  preguntas.innerHTML = "";
  (campo(ins, "preguntas") || []).forEach((q) => preguntas.appendChild(crear("li", null, q)));

  // Tabla de fuentes
  const tabla = document.getElementById("insight-fuentes-tabla");
  tabla.innerHTML = "";
  const vistos = new Set();
  fuentes.forEach((h) => {
    if (vistos.has(h.fuente)) return;
    vistos.add(h.fuente);
    const tr = crear("tr");
    const muestra = ins.muestras && ins.muestras[h.fuente] ? ins.muestras[h.fuente][idioma] : "";
    const link = crear("a", null, t.insightVerOriginal);
    link.href = h.link;
    link.target = "_blank";
    link.rel = "noopener";
    const tdLink = crear("td");
    tdLink.appendChild(link);
    tr.append(crear("td", null, h.fuente), crear("td", null, `${campo(h, "estudio")} (${h.anio})`), crear("td", null, nombreCortoInsight(h.industria)), crear("td", null, muestra), tdLink);
    tabla.appendChild(tr);
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
  const elementos = document.querySelectorAll(".oi-reveal, .iv-rv");
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
