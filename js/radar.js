// "En mi radar": estudios que Desiree detectó y todavía está leyendo,
// antes de convertirlos en hallazgos publicados (ver HALLAZGOS en datos.js).
// Este archivo está separado a propósito: en la Fase 2, el script de
// automatización solo necesita escribir aquí, sin tocar datos.js.
//
// Si este array está vacío, la sección "En mi radar" no se muestra
// (ver app.js). Campos de cada estudio, documentados en web/README.md (repositorio privado):
//   id, titulo_es, titulo_en, fuente, fecha_detectado ("AAAA-MM-DD")

const RADAR_ESTUDIOS = [
  {
    id: "r-2026-10-deloitte-coo",
    titulo_es: "Prioridades del COO en la transformación con agentes de IA",
    titulo_en: "COO priorities in agentic AI transformation",
    fuente: "Deloitte",
    fecha_detectado: "2026-10-07",
  },
  {
    id: "r-2026-10-ey-medtech",
    titulo_es: "Pulse of the MedTech Industry 2026",
    titulo_en: "Pulse of the MedTech Industry 2026",
    fuente: "EY",
    fecha_detectado: "2026-10-21",
  },
];
