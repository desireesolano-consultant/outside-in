// Contador "en vivo": revisados -> seleccionados -> publicados.
// Son números REALES, contados en el registro de estudios revisados
// (outside-in/registro-revisados.md en el Proyecto de Desiree).
// La búsqueda semanal actualiza este archivo cada vez que corre.
//
// - revisados: estudios que el sistema revisó contra los criterios.
// - seleccionados: estudios que pasaron los criterios (incluye el radar).
// - publicados: estudios publicados como hallazgo en la web.

const CONTADOR = {
  actualizado: "2026-11-23",
  semana: {
    revisados: 15,
    seleccionados: 2,
    publicados: 2,
  },
  desdeInicio: {
    revisados: 113,
    seleccionados: 38,
    publicados: 35,
  },
};
