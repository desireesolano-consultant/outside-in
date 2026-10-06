// Datos de EJEMPLO que se usan solo cuando MODO_VISTA_PREVIA es true
// (ver js/config.js). Ninguno de estos números es real — son solo para
// poder ver cómo se comportan las señales de vida del sitio antes de que
// haya hallazgos de verdad.

const VISTA_PREVIA = {
  fecha_es: "lunes 5 de octubre",
  fecha_en: "Monday, October 5",
  estudiosRevisados: 38,
  hallazgosNuevosSemana: 3,

  funnel: {
    revisados: 38,
    seleccionados: 5,
    publicados: 2,
  },

  // ids de HALLAZGOS que muestran la insignia "Nuevo" en vez de "EJEMPLO"
  // en las tarjetas de "Hallazgos recientes".
  hallazgosNuevosIds: ["h1", "h4"],

  // Intensidad de ejemplo para cada casilla del mapa de tendencias
  // (industria|tema -> cantidad de hallazgos).
  intensidadMapa: {
    "servicios_financieros|gestion_cambio": 3,
    "servicios_financieros|ia_personas": 1,
    "servicios_financieros|liderazgo_cultura": 0,
    "consumo_masivo|gestion_cambio": 0,
    "consumo_masivo|ia_personas": 2,
    "consumo_masivo|liderazgo_cultura": 4,
    "life_sciences|gestion_cambio": 1,
    "life_sciences|ia_personas": 5,
    "life_sciences|liderazgo_cultura": 0,
  },

  // Casillas que además muestran el punto "Nuevo".
  celdasNuevas: ["life_sciences|ia_personas", "consumo_masivo|liderazgo_cultura"],

  radar: [
    {
      id: "r1",
      titulo_es: "[EJEMPLO] Estudio sobre adopción de IA en banca",
      titulo_en: "[EXAMPLE] Study on AI adoption in banking",
      fuente: "McKinsey",
      fecha_detectado: "2026-10-03",
    },
    {
      id: "r2",
      titulo_es: "[EJEMPLO] Reporte de cultura organizacional en retail",
      titulo_en: "[EXAMPLE] Organizational culture report in retail",
      fuente: "Deloitte",
      fecha_detectado: "2026-10-02",
    },
    {
      id: "r3",
      titulo_es: "[EJEMPLO] Encuesta de liderazgo en consumo masivo",
      titulo_en: "[EXAMPLE] Leadership survey in consumer goods",
      fuente: "PwC",
      fecha_detectado: "2026-10-01",
    },
    {
      id: "r4",
      titulo_es: "[EJEMPLO] Ranking de transformación digital en life sciences",
      titulo_en: "[EXAMPLE] Digital transformation ranking in life sciences",
      fuente: "Accenture",
      fecha_detectado: "2026-09-29",
    },
  ],
};
