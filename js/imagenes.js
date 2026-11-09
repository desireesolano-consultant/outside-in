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
  // Fotos fijadas el 9-nov-2026 para que los estudios ya publicados conserven la suya al sumar fotos a los grupos.
  "h-2026-10-deloitte-cambio": { foto: "photo-1758873269013-d914addd5d3b", autor: "Vitaly Gariev" },
  "h-2026-10-sia-cambio": { foto: "photo-1517245386807-bb43f82c33c4", autor: "Headway" },
  "h-2026-10-edelman-confianza": { foto: "photo-1758611972678-bc3b29b4718f", autor: "Vitaly Gariev" },
  "h-2026-10-gallagher-comunicacion": { foto: "photo-1551836022-b06985bceb24", autor: "Amy Hirschi" },
  "h-2026-10-pwc-hopes-fears": { foto: "photo-1764452008254-eed469a4fad3", autor: "Chirayu Trivedi" },
  "h-2026-10-ey-ceo": { foto: "photo-1758626099012-2904337e9c60", autor: "Jo Lin" },
  "h-2026-10-kpmg-ceo-eeuu": { foto: "photo-1553877522-43269d4ea984", autor: "charlesdeluvio" },
  "h-2026-10-jll-latam-ia": { foto: "photo-1677442136019-21780ecad995", autor: "Steve A Johnson" },
  "h-2026-11-gallup-compromiso-eeuu": { foto: "photo-1568992688065-536aad8a12f6", autor: "Redd Francisco" },
  "h-2026-11-gallup-ia-beneficios": { foto: "photo-1758626104169-6835c0bd03e3", autor: "Jo Lin" },
  "h-2026-11-bcg-ia-trabajo": { foto: "photo-1677442135131-4d7c123aef1c", autor: "Steve A Johnson" },
  "h-2026-11-kornferry-workforce": { foto: "photo-1573164574572-cb89e39749b4", autor: "Christina @ wocintechchat.com" },
  "h-2026-11-deloitte-genz": { foto: "photo-1758520144437-f068ecaf0d83", autor: "Vitaly Gariev" },
  "h-2026-11-gallup-sogw": { foto: "photo-1758873269811-4e62e346b4b7", autor: "Vitaly Gariev" },
};

// Grupos de fotos por industria y por tema (para hallazgos nuevos).
// "general" es el respaldo cuando un grupo ya usó todas sus fotos.
// Para sumar variedad, agrega fotos gratuitas de Unsplash (no Unsplash+) vistas en unsplash.com.
const IMAGENES_POR_CATEGORIA = {
  life_sciences: [
    { foto: "photo-1614935151651-0bea6508db6b", autor: "Julia Koblitz" },
    { foto: "photo-1532187863486-abf9dbad1b69", autor: "Louis Reed" },
    { foto: "photo-1602052577122-f73b9710adba", autor: "Trnava University" },
    { foto: "photo-1580281657527-47f249e8f4df", autor: "National Cancer Institute" },
    { foto: "photo-1576091358783-a212ec293ff3", autor: "National Cancer Institute" },
    { foto: "photo-1576671081837-49000212a370", autor: "National Cancer Institute" },
    { foto: "photo-1576091160550-2173dba999ef", autor: "National Cancer Institute" },
    { foto: "photo-1765031092161-a9ebe556117e", autor: "Bernd Dittrich" },
    { foto: "photo-1778078983840-a36cd3ebd892", autor: "Barnaby Woodrow" },
    { foto: "photo-1656331797721-b593b8f00297", autor: "D koi" },
  ],
  servicios_financieros: [
    { foto: "photo-1486406146926-c627a92ad1ab", autor: "Sean Pollock" },
    { foto: "photo-1563013544-824ae1b704d3", autor: "rupixen" },
    { foto: "photo-1601597111158-2fceff292cdc", autor: "Eduardo Soares" },
    { foto: "photo-1713947506242-8fcae733d158", autor: "Vitaly Gariev" },
    { foto: "photo-1523839699072-5ec088b61a21", autor: "Erol Ahmed" },
    { foto: "photo-1565347878134-064b9185ced8", autor: "Christian Wiediger" },
    { foto: "photo-1501167786227-4cba60f6d58f", autor: "Etienne Martin" },
    { foto: "photo-1607863680198-23d4b2565df0", autor: "Andre Taissin" },
  ],
  consumo_masivo: [
    { foto: "photo-1670684684445-a4504dca0bbc", autor: "Jack Lee" },
    { foto: "photo-1601598851547-4302969d0614", autor: "Eduardo Soares" },
    { foto: "photo-1601600576337-c1d8a0d1373c", autor: "Eduardo Soares" },
    { foto: "photo-1753354868590-81ed82047c4f", autor: "Vitaly Gariev" },
    { foto: "photo-1753354868577-39c8302a1a2b", autor: "Vitaly Gariev" },
    { foto: "photo-1753354868617-96dc9184320f", autor: "Vitaly Gariev" },
    { foto: "photo-1641029956071-272caab5857a", autor: "sq lim" },
    { foto: "photo-1526152505827-d2f3b5b4a52a", autor: "Bernard Hermant" },
    { foto: "photo-1739300293398-468ba82fd418", autor: "Ninthgrid" },
    { foto: "photo-1601598853072-3969239a6b9e", autor: "Eduardo Soares" },
  ],
  gestion_cambio: [
    { foto: "photo-1517048676732-d65bc937f952", autor: "Dylan Gillis" },
    { foto: "photo-1542744173-8e7e53415bb0", autor: "Campaign Creators" },
    { foto: "photo-1517245386807-bb43f82c33c4", autor: "Headway" },
    { foto: "photo-1758873269013-d914addd5d3b", autor: "Vitaly Gariev" },
    { foto: "photo-1758691736872-61a1f75fe2d5", autor: "Vitaly Gariev" },
    { foto: "photo-1758873269035-aae0e1fd3422", autor: "Vitaly Gariev" },
    { foto: "photo-1541746972996-4e0b0f43e02a", autor: "Mario Gogh" },
    { foto: "photo-1603201667141-5a2d4c673378", autor: "Cherrydeck" },
    { foto: "photo-1758519288905-38b7b00c1023", autor: "Vitaly Gariev" },
    { foto: "photo-1521791136064-7986c2920216", autor: "Cytonn Photography" },
    { foto: "photo-1758518730384-be3d205838e8", autor: "Vitaly Gariev" },
  ],
  ia_personas: [
    { foto: "photo-1694903089438-bf28d4697d9a", autor: "Igor Omilaev" },
    { foto: "photo-1677442135131-4d7c123aef1c", autor: "Steve A Johnson" },
    { foto: "photo-1553877522-43269d4ea984", autor: "charlesdeluvio" },
    { foto: "photo-1758626101945-ed0068aad9f9", autor: "Jo Lin" },
    { foto: "photo-1758626104169-6835c0bd03e3", autor: "Jo Lin" },
    { foto: "photo-1758626099012-2904337e9c60", autor: "Jo Lin" },
    { foto: "photo-1764452008254-eed469a4fad3", autor: "Chirayu Trivedi" },
    { foto: "photo-1677442136019-21780ecad995", autor: "Steve A Johnson" },
    { foto: "photo-1653566031504-17467a0429b0", autor: "UK Black Tech" },
    { foto: "photo-1758873268695-1b55590e507a", autor: "Vitaly Gariev" },
    { foto: "photo-1596722350768-24e1bd412882", autor: "Amy Hirschi" },
    { foto: "photo-1646583288948-24548aedffd8", autor: "Markus Spiske" },
    { foto: "photo-1770171323762-7b9a517a7094", autor: "Zach M" },
    { foto: "photo-1724754608848-cdd8d5cd8538", autor: "Swello" },
    { foto: "photo-1706466614967-f4f14a3d9d08", autor: "Neeqolah Creative Works" },
  ],
  liderazgo_cultura: [
    { foto: "photo-1758691737543-09a1b2b715fa", autor: "Vitaly Gariev" },
    { foto: "photo-1573164574572-cb89e39749b4", autor: "Christina @ wocintechchat.com" },
    { foto: "photo-1758518731706-be5d5230e5a5", autor: "Vitaly Gariev" },
    { foto: "photo-1582213782179-e0d53f98f2ca", autor: "Hannah Busing" },
    { foto: "photo-1600880292089-90a7e086ee0c", autor: "krakenimages" },
    { foto: "photo-1758518727653-5650fd9e146c", autor: "Vitaly Gariev" },
    { foto: "photo-1758611972678-bc3b29b4718f", autor: "Vitaly Gariev" },
    { foto: "photo-1551836022-b06985bceb24", autor: "Amy Hirschi" },
    { foto: "photo-1758520144437-f068ecaf0d83", autor: "Vitaly Gariev" },
    { foto: "photo-1758873269811-4e62e346b4b7", autor: "Vitaly Gariev" },
    { foto: "photo-1568992688065-536aad8a12f6", autor: "Redd Francisco" },
    { foto: "photo-1522071820081-009f0129c71c", autor: "Annie Spratt" },
  ],
  general: [
    { foto: "photo-1568992687947-868a62a9f521", autor: "Redd Francisco" },
    { foto: "photo-1551135049-8a33b5883817", autor: "Sebastian Herrmann" },
    { foto: "photo-1758518728641-8668e601cce1", autor: "Vitaly Gariev" },
    { foto: "photo-1681949103006-70066fb25dfe", autor: "Sable Flow" },
    { foto: "photo-1521737852567-6949f3f9f2b5", autor: "Annie Spratt" },
    { foto: "photo-1543269865-cbf427effbad", autor: "Brooke Cagle" },
  ],
};

// Reparte las fotos para que NO se repitan entre estudios:
// - Se recorren los estudios del más antiguo al más nuevo (por "publicado"),
//   así los ya publicados conservan su foto y cada tanda nueva toma fotos
//   que todavía no se usaron. Cada lunes la web se ve renovada.
// - Si el grupo de su tema o industria ya usó todas sus fotos, se toma una
//   del grupo "general"; solo si todo está usado se repite.
let ASIGNACION_FOTOS = null;

function sumaLetras(texto) {
  let suma = 0;
  for (const letra of texto) suma += letra.charCodeAt(0);
  return suma;
}

function calcularAsignacionFotos() {
  const asignadas = {};
  const usadas = new Set();
  const lista = typeof HALLAZGOS !== "undefined" ? HALLAZGOS.slice() : [];
  // Las fotos elegidas a mano quedan reservadas.
  lista.forEach((h) => {
    const propia = (h.imagen && h.imagen.foto) ? h.imagen : IMAGENES_POR_HALLAZGO[h.id];
    if (propia) { asignadas[h.id] = propia; usadas.add(propia.foto); }
  });
  lista
    .filter((h) => !asignadas[h.id])
    .sort((a, b) => String(a.publicado || a.fecha || "").localeCompare(String(b.publicado || b.fecha || "")) || a.id.localeCompare(b.id))
    .forEach((h) => {
      const grupos = [IMAGENES_POR_CATEGORIA[h.industria], IMAGENES_POR_CATEGORIA[h.tema], IMAGENES_POR_CATEGORIA.general].filter(Boolean);
      const inicio = sumaLetras(h.id);
      let elegida = null;
      for (const grupo of grupos) {
        for (let k = 0; k < grupo.length && !elegida; k++) {
          const foto = grupo[(inicio + k) % grupo.length];
          if (!usadas.has(foto.foto)) elegida = foto;
        }
        if (elegida) break;
      }
      if (!elegida) { const g = grupos[0]; elegida = g[inicio % g.length]; }
      asignadas[h.id] = elegida;
      usadas.add(elegida.foto);
    });
  return asignadas;
}

function imagenDeHallazgo(h) {
  if (h.imagen && h.imagen.foto) return h.imagen;
  if (IMAGENES_POR_HALLAZGO[h.id]) return IMAGENES_POR_HALLAZGO[h.id];
  if (!ASIGNACION_FOTOS) ASIGNACION_FOTOS = calcularAsignacionFotos();
  if (ASIGNACION_FOTOS[h.id]) return ASIGNACION_FOTOS[h.id];
  const grupo = IMAGENES_POR_CATEGORIA[h.industria] || IMAGENES_POR_CATEGORIA[h.tema];
  return grupo ? grupo[sumaLetras(h.id) % grupo.length] : null;
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
