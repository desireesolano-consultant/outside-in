// Lógica del sitio: cambio de idioma, dibujar la matriz y abrir las fichas.
// Este archivo no tiene contenido (eso está en datos.js) ni colores (eso está en estilos.css).

let idioma = "es";

const RAMPA_SECUENCIAL = ["#cde2fb", "#9ec5f4", "#5598e7", "#2a78d6", "#1c5cab", "#0d366b"];

function init() {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") idioma = guardado;
  } catch (e) {
    // almacenamiento no disponible (por ejemplo, ventana privada): seguimos con "es"
  }

  aplicarIdioma();
  renderizarTendencias();
  renderizarMatriz();

  document.getElementById("boton-idioma").addEventListener("click", cambiarIdioma);
  document.getElementById("modal-cerrar").addEventListener("click", cerrarModal);

  const modal = document.getElementById("modal-fichas");
  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) cerrarModal();
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
  renderizarTendencias();
  renderizarMatriz();
}

function aplicarIdioma() {
  document.documentElement.lang = idioma;
  const t = TEXTOS[idioma];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (t[clave]) el.textContent = t[clave];
  });

  document.getElementById("boton-idioma").textContent = t.botonIdioma;
  document.getElementById("texto-intro").textContent = idioma === "es" ? TEXTO_INTRO.es : TEXTO_INTRO.en;
  document.getElementById("texto-sobre-mi").textContent = idioma === "es" ? TEXTO_SOBRE_MI.es : TEXTO_SOBRE_MI.en;
  document.getElementById("link-linkedin").href = LINK_LINKEDIN_EJEMPLO;
}

function renderizarTendencias() {
  const contenedor = document.getElementById("grid-tendencias");
  contenedor.innerHTML = "";
  const t = TEXTOS[idioma];

  TENDENCIAS.forEach((tendencia) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-tendencia";

    const titular = document.createElement("h3");
    titular.textContent = idioma === "es" ? tendencia.titular_es : tendencia.titular_en;

    const dato = document.createElement("p");
    dato.className = "dato-respaldo";
    dato.textContent = idioma === "es" ? tendencia.dato_es : tendencia.dato_en;

    const fuente = document.createElement("p");
    fuente.className = "fuente";
    fuente.textContent = `${t.fuenteLabel}: ${idioma === "es" ? tendencia.fuente_es : tendencia.fuente_en}`;

    const implicancia = document.createElement("p");
    implicancia.className = "implicancia";
    implicancia.textContent = idioma === "es" ? tendencia.implicancia_es : tendencia.implicancia_en;

    tarjeta.append(titular, dato, fuente, implicancia);
    contenedor.appendChild(tarjeta);
  });
}

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
  const titulo = document.getElementById("modal-titulo");
  const cuerpo = document.getElementById("modal-cuerpo");
  const t = TEXTOS[idioma];

  titulo.textContent = `${idioma === "es" ? industria.es : industria.en} · ${idioma === "es" ? eje.es : eje.en}`;
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

function cerrarModal() {
  document.getElementById("modal-fichas").close();
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
