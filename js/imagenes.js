// =====================================================================
// Imágenes de portada de los hallazgos (fotos gratuitas de Unsplash).
//
// Cómo funciona:
// 1. Si el hallazgo trae su propio campo "imagen" en datos.js, se usa ese.
// 2. Si no, se busca por su id en IMAGENES_POR_HALLAZGO.
// 3. Si tampoco está, se elige una foto del grupo de su tema o industria.
// 4. Si la foto no carga, la tarjeta vuelve a la portada geométrica.
//
// Todas las fotos son de la licencia gratuita de Unsplash (no Unsplash+).
// "foto" es el código que va después de images.unsplash.com/
// =====================================================================

const IMAGENES_POR_HALLAZGO = {
  "h-2026-10-accenture-supply-chain": { foto: "photo-1542744173-8e7e53415bb0", autor: "Campaign Creators" },
  "h-2026-10-deloitte-agentic": { foto: "photo-1694903089438-bf28d4697d9a", autor: "Igor Omilaev" },
  "h-2026-10-mckinsey-inversionistas": { foto: "photo-1486406146926-c627a92ad1ab", autor: "Sean Pollock" },
  "h-2026-10-deloitte-consumo-eeuu": { foto: "photo-1601598851547-4302969d0614", autor: "Eduardo Soares" },
  "h-2026-10-ey-tiendas": { foto: "photo-1670684684445-a4504dca0bbc", autor: "Jack Lee" },
  "h-2026-10-deloitte-human-capital": { foto: "photo-1758691737543-09a1b2b715fa", autor: "Vitaly Gariev" },
  "h-2026-10-pwc-fs-cambio": { foto: "photo-1758519289074-9de36003622b", autor: "Vitaly Gariev" },
  "h-2026-10-pwc-fs-ia": { foto: "photo-1563013544-824ae1b704d3", autor: "rupixen" },
  "h-2026-10-bain-life-sciences": { foto: "photo-1614935151651-0bea6508db6b", autor: "Julia Koblitz" },
  "h-2026-10-deloitte-consumo-ia": { foto: "photo-1601600576337-c1d8a0d1373c", autor: "Eduardo Soares" },
};

// Grupos de respaldo por industria y por tema (para hallazgos nuevos).
const IMAGENES_POR_CATEGORIA = {
  life_sciences: [
    { foto: "photo-1614935151651-0bea6508db6b", autor: "Julia Koblitz" },
    { foto: "photo-1532187863486-abf9dbad1b69", autor: "Louis Reed" },
    { foto: "photo-1602052577122-f73b9710adba", autor: "Trnava University" },
  ],
  servicios_financieros: [
    { foto: "photo-1486406146926-c627a92ad1ab", autor: "Sean Pollock" },
    { foto: "photo-1563013544-824ae1b704d3", autor: "rupixen" },
    { foto: "photo-1601597111158-2fceff292cdc", autor: "Eduardo Soares" },
  ],
  consumo_masivo: [
    { foto: "photo-1670684684445-a4504dca0bbc", autor: "Jack Lee" },
    { foto: "photo-1601598851547-4302969d0614", autor: "Eduardo Soares" },
    { foto: "photo-1601600576337-c1d8a0d1373c", autor: "Eduardo Soares" },
  ],
  gestion_cambio: [
    { foto: "photo-1517048676732-d65bc937f952", autor: "Dylan Gillis" },
    { foto: "photo-1542744173-8e7e53415bb0", autor: "Campaign Creators" },
    { foto: "photo-1517245386807-bb43f82c33c4", autor: "Headway" },
  ],
  ia_personas: [
    { foto: "photo-1694903089438-bf28d4697d9a", autor: "Igor Omilaev" },
    { foto: "photo-1677442135131-4d7c123aef1c", autor: "Steve A Johnson" },
    { foto: "photo-1553877522-43269d4ea984", autor: "charlesdeluvio" },
  ],
  liderazgo_cultura: [
    { foto: "photo-1758691737543-09a1b2b715fa", autor: "Vitaly Gariev" },
    { foto: "photo-1573164574572-cb89e39749b4", autor: "Christina @ wocintechchat.com" },
    { foto: "photo-1758518731706-be5d5230e5a5", autor: "Vitaly Gariev" },
  ],
};

function imagenDeHallazgo(h) {
  if (h.imagen && h.imagen.foto) return h.imagen;
  if (IMAGENES_POR_HALLAZGO[h.id]) return IMAGENES_POR_HALLAZGO[h.id];
  const grupo = IMAGENES_POR_CATEGORIA[h.industria] || IMAGENES_POR_CATEGORIA[h.tema];
  if (!grupo) return null;
  // Elige siempre la misma foto para el mismo hallazgo.
  let suma = 0;
  for (const letra of h.id) suma += letra.charCodeAt(0);
  return grupo[suma % grupo.length];
}

function urlImagen(imagen, ancho) {
  return `https://images.unsplash.com/${imagen.foto}?auto=format&fit=crop&w=${ancho}&q=70`;
}

// Pone la foto dentro de una portada. Si falla, deja la portada geométrica.
function agregarFotoPortada(portada, h) {
  const imagen = imagenDeHallazgo(h);
  if (!imagen) return;
  const img = document.createElement("img");
  img.className = "oi-cover-foto";
  img.src = urlImagen(imagen, 640);
  img.alt = "";
  img.loading = "lazy";
  img.title = `Foto: ${imagen.autor} / Unsplash`;
  img.addEventListener("error", () => {
    img.remove();
    portada.classList.remove("oi-cover-con-foto");
  });
  portada.classList.add("oi-cover-con-foto");
  portada.prepend(img);
}
