// =====================================================================
// Métricas de Outside-In con GoatCounter.
// Cuenta visitas por página y estos eventos (sin datos personales):
//  - qué estudio se abre            -> estudio/<id>
//  - qué se busca en el buscador    -> busqueda/<palabra>
//  - qué tema e industria se eligen -> conectar/<tema>/<industria>
//  - clics a LinkedIn y al correo   -> contacto/linkedin, contacto/correo
//  - clics al estudio original      -> original/<id>
//  - cambio de idioma               -> idioma/<es|en>
// Solo funciona si GOATCOUNTER_CODIGO (js/config.js) tiene un valor.
// =====================================================================

(function () {
  if (typeof GOATCOUNTER_CODIGO === "undefined" || !GOATCOUNTER_CODIGO) return;
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODIGO}.goatcounter.com/count`;
  document.head.appendChild(s);

  const pendientes = [];
  function contar(ruta, titulo) {
    const evento = { path: ruta, title: titulo || ruta, event: true };
    if (window.goatcounter && window.goatcounter.count) window.goatcounter.count(evento);
    else pendientes.push(evento);
  }
  s.addEventListener("load", () => {
    while (pendientes.length && window.goatcounter && window.goatcounter.count) window.goatcounter.count(pendientes.shift());
  });
  window.oiContar = contar;

  function limpiar(texto) {
    return String(texto || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    const id = (href.match(/hallazgo\.html\?id=([^&#]+)/) || [])[1];
    if (id) contar(`estudio/${decodeURIComponent(id)}`, a.textContent.trim().slice(0, 120));
    else if (href.includes("linkedin.com")) contar("contacto/linkedin", "Clic a LinkedIn");
    else if (href.startsWith("mailto:")) contar("contacto/correo", "Clic al correo");
    else if (a.id === "hallazgo-link") {
      const actual = new URLSearchParams(location.search).get("id") || "";
      contar(`original/${actual}`, "Clic al estudio original");
    }
  }, true);

  // Los clics en portadas de Entender son botones que llevan al estudio.
  document.addEventListener("click", (e) => {
    const boton = e.target.closest(".oi-cover-clicable, .oi-tarjeta-hallazgo");
    if (boton) contar("estudio/clic-tarjeta", "Clic en tarjeta de estudio");
  }, true);

  // Búsquedas: se cuenta la palabra cuando la persona deja de escribir.
  let temporizador = null;
  document.addEventListener("input", (e) => {
    if (e.target.id !== "buscador-entrada") return;
    clearTimeout(temporizador);
    const valor = e.target.value;
    temporizador = setTimeout(() => {
      if (limpiar(valor).length >= 2) contar(`busqueda/${limpiar(valor)}`, `Búsqueda: ${valor}`);
    }, 1500);
  });

  document.addEventListener("change", (e) => {
    if (!/^aterrizar-select-/.test(e.target.id || "")) return;
    const tema = document.getElementById("aterrizar-select-tema");
    const industria = document.getElementById("aterrizar-select-industria");
    if (tema && industria) contar(`conectar/${tema.value}/${industria.value}`, "Cruce en Conectar");
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("#boton-idioma")) setTimeout(() => contar(`idioma/${document.documentElement.lang}`, "Cambio de idioma"), 50);
  });
})();
