// Datos de EJEMPLO que se usan solo cuando MODO_VISTA_PREVIA es true
// (ver js/config.js). Ninguno de estos números es real — son solo para
// poder ver cómo se comportan las señales de vida del sitio antes de que
// haya hallazgos de verdad.

const VISTA_PREVIA = {
  fecha_es: "lunes 5 de octubre",
  fecha_en: "Monday, October 5",
  estudiosRevisados: 38,
  hallazgosNuevosSemana: 3,

  funnelSemana: {
    revisados: 38,
    seleccionados: 5,
    publicados: 2,
  },

  funnelDesdeInicio: {
    revisados: 412,
    seleccionados: 47,
    publicados: 23,
  },

  // ids de HALLAZGOS que muestran la insignia "Nuevo" en vez de "EJEMPLO"
  // en las tarjetas de "Entender" y "Aterrizar".
  hallazgosNuevosIds: ["h1", "h4"],

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
