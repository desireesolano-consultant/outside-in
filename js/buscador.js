// =====================================================================
// Buscador de Outside-In.
// Agrega una lupa en el encabezado. Al escribir una palabra (por ejemplo
// "IA", "banca" o "cultura") muestra los estudios relacionados y lleva a
// su página completa. Busca por tema, industria, fuente y texto del
// estudio, y entiende sinónimos comunes en español e inglés.
// =====================================================================

// Palabras que apuntan a cada tema o industria (sin tildes, en minúscula).
const BUSCADOR_SINONIMOS = {
  ia_personas: ["ia", "ai", "inteligencia artificial", "artificial intelligence", "agentes", "agentic", "genai", "generativa", "automatizacion", "automation", "tecnologia", "technology", "habilidades", "skills", "reskilling", "upskilling"],
  gestion_cambio: ["cambio", "change", "gestion del cambio", "change management", "transformacion", "transformation", "adopcion", "adoption", "habitos", "habits", "m&a", "fusion", "fusiones", "adquisiciones", "merger", "agile", "agil"],
  liderazgo_cultura: ["liderazgo", "leadership", "lider", "lideres", "leader", "cultura", "culture", "comunicacion", "communication", "comunicacion interna", "internal communication", "proposito", "purpose", "marca empleadora", "employer brand", "evp", "seguridad psicologica", "psychological safety", "talento", "talent", "personas", "people", "rrhh", "hr", "recursos humanos", "engagement", "compromiso"],
  life_sciences: ["salud", "health", "healthcare", "farma", "farmaceutica", "pharma", "pharmaceutical", "life sciences", "ciencias de la vida", "medtech", "biotech", "hospital", "medicina"],
  servicios_financieros: ["banca", "banco", "bancos", "bank", "banking", "finanzas", "financiero", "financieros", "finance", "financial", "financial services", "pagos", "payments", "seguros", "insurance", "fintech", "inversion", "investment", "inversionistas", "investors"],
  consumo_masivo: ["consumo", "consumo masivo", "consumer", "consumer goods", "cpg", "retail", "tiendas", "stores", "supermercado", "consumidor", "consumidores", "marcas", "brands", "cadena de suministro", "supply chain"],
};

function buscadorNormalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function buscadorIdioma() {
  return document.documentElement.lang === "en" ? "en" : "es";
}

function buscadorTexto(h, campo) {
  return h[`${campo}_${buscadorIdioma()}`] || h[`${campo}_es`] || "";
}

function buscadorHallazgos() {
  if (typeof HALLAZGOS === "undefined") return [];
  return HALLAZGOS.filter((h) => h.esEjemplo === false);
}

// Devuelve los estudios ordenados por relevancia.
function buscarEstudios(consulta) {
  const q = buscadorNormalizar(consulta);
  if (q.length < 2) return [];
  const palabras = q.split(/\s+/).filter((p) => p.length >= 2);

  // Categorías que coinciden con la búsqueda (por sinónimo o por nombre).
  const categorias = new Set();
  Object.entries(BUSCADOR_SINONIMOS).forEach(([id, lista]) => {
    if (lista.some((s) => s === q || (q.length >= 3 && (s.startsWith(q) || q.includes(s) && s.length >= 3)))) categorias.add(id);
    if (palabras.some((p) => lista.includes(p))) categorias.add(id);
  });
  const todasCategorias = [...(typeof TEMAS !== "undefined" ? TEMAS : []), ...(typeof INDUSTRIAS !== "undefined" ? INDUSTRIAS : [])];
  todasCategorias.forEach((c) => {
    if (buscadorNormalizar(c.es).includes(q) || buscadorNormalizar(c.en).includes(q)) categorias.add(c.id);
  });

  const resultados = [];
  buscadorHallazgos().forEach((h) => {
    let puntaje = 0;
    if (categorias.has(h.tema)) puntaje += 5;
    if (categorias.has(h.industria)) puntaje += 5;
    const texto = buscadorNormalizar(
      [h.fuente, h.subtema, h.estudio_es, h.estudio_en, h.hallazgo_es, h.hallazgo_en, h.region_es, h.region_en,
        h.articulo_es && h.articulo_es.bajada, h.articulo_en && h.articulo_en.bajada].join(" ")
    );
    const coincide = q.length <= 3 ? new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(texto) : texto.includes(q);
    if (coincide) puntaje += 3;
    else if (palabras.length > 1 && palabras.every((p) => texto.includes(p))) puntaje += 2;
    if (puntaje > 0) resultados.push({ h, puntaje });
  });
  resultados.sort((a, b) => b.puntaje - a.puntaje || String(b.h.fecha).localeCompare(String(a.h.fecha)));
  return resultados.map((r) => r.h);
}

function nombreCategoria(id) {
  const lista = [...(typeof TEMAS !== "undefined" ? TEMAS : []), ...(typeof INDUSTRIAS !== "undefined" ? INDUSTRIAS : [])];
  const c = lista.find((x) => x.id === id);
  return c ? c[buscadorIdioma()] : "";
}

function iniciarBuscador() {
  const acciones = document.querySelector(".oi-header-acciones");
  const header = document.querySelector(".oi-header");
  if (!acciones || !header || typeof TEXTOS === "undefined") return;

  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "oi-boton-buscar";
  boton.setAttribute("aria-expanded", "false");
  boton.setAttribute("aria-controls", "panel-buscador");
  boton.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>';
  acciones.prepend(boton);

  const panel = document.createElement("div");
  panel.id = "panel-buscador";
  panel.className = "oi-panel-buscador";
  panel.hidden = true;
  panel.innerHTML = `
    <div class="oi-panel-buscador-inner">
      <div class="oi-buscador-caja">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>
        <input type="search" id="buscador-entrada" class="oi-buscador-entrada" autocomplete="off" />
        <button type="button" class="oi-buscador-cerrar" aria-label="Cerrar">&times;</button>
      </div>
      <div class="oi-buscador-atajos"></div>
      <p class="oi-buscador-conteo" aria-live="polite"></p>
      <ul class="oi-buscador-resultados"></ul>
    </div>`;
  header.appendChild(panel);

  const entrada = panel.querySelector("#buscador-entrada");
  const lista = panel.querySelector(".oi-buscador-resultados");
  const conteo = panel.querySelector(".oi-buscador-conteo");
  const atajos = panel.querySelector(".oi-buscador-atajos");

  function textos() {
    return TEXTOS[buscadorIdioma()];
  }

  function pintarAtajos() {
    atajos.innerHTML = "";
    const ids = ["ia_personas", "gestion_cambio", "liderazgo_cultura", "life_sciences", "servicios_financieros", "consumo_masivo"];
    ids.forEach((id) => {
      const nombre = nombreCategoria(id);
      if (!nombre) return;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "oi-buscador-atajo";
      b.textContent = nombre;
      b.addEventListener("click", () => {
        entrada.value = nombre;
        pintarResultados();
        entrada.focus();
      });
      atajos.appendChild(b);
    });
  }

  function pintarResultados() {
    const t = textos();
    const consulta = entrada.value;
    lista.innerHTML = "";
    if (buscadorNormalizar(consulta).length < 2) {
      conteo.textContent = "";
      atajos.hidden = false;
      return;
    }
    atajos.hidden = true;
    const resultados = buscarEstudios(consulta);
    if (resultados.length === 0) {
      conteo.textContent = t.buscadorSinResultados;
      return;
    }
    conteo.textContent = `${resultados.length} ${resultados.length === 1 ? t.buscadorResultado : t.buscadorResultados}`;
    resultados.slice(0, 8).forEach((h) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "oi-buscador-resultado";
      a.href = `hallazgo.html?id=${encodeURIComponent(h.id)}`;
      const etiquetas = [h.tema, h.industria].filter(Boolean).map(nombreCategoria).join(" · ");
      const meta = document.createElement("span");
      meta.className = "oi-buscador-resultado-meta";
      meta.textContent = `${h.fuente}${etiquetas ? " · " + etiquetas : ""}`;
      const titulo = document.createElement("span");
      titulo.className = "oi-buscador-resultado-titulo";
      titulo.textContent = buscadorTexto(h, "hallazgo");
      a.append(meta, titulo);
      li.appendChild(a);
      lista.appendChild(li);
    });
  }

  function abrir() {
    const t = textos();
    entrada.placeholder = t.buscadorPlaceholder;
    boton.setAttribute("aria-label", t.buscadorPlaceholder);
    pintarAtajos();
    pintarResultados();
    panel.hidden = false;
    boton.setAttribute("aria-expanded", "true");
    setTimeout(() => entrada.focus(), 30);
  }

  function cerrar() {
    panel.hidden = true;
    boton.setAttribute("aria-expanded", "false");
  }

  boton.addEventListener("click", () => (panel.hidden ? abrir() : cerrar()));
  panel.querySelector(".oi-buscador-cerrar").addEventListener("click", cerrar);
  entrada.addEventListener("input", pintarResultados);
  entrada.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrar();
    if (e.key === "Enter") {
      const primero = lista.querySelector("a");
      if (primero) window.location.href = primero.href;
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && panel.hidden && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      abrir();
    }
  });
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !panel.contains(e.target) && !boton.contains(e.target)) cerrar();
  });
  // Si cambian el idioma con el panel abierto, se actualizan los textos.
  const idiomaBoton = document.getElementById("boton-idioma");
  if (idiomaBoton) idiomaBoton.addEventListener("click", () => setTimeout(() => { if (!panel.hidden) abrir(); }, 0));
}

document.addEventListener("DOMContentLoaded", iniciarBuscador);
