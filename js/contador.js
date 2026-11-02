// Contador "en vivo": revisados -> seleccionados -> publicados.
// Son números REALES, contados en el registro de estudios revisados
// (outside-in/registro-revisados.md en el Proyecto de Desiree).
// La búsqueda semanal actualiza este archivo cada vez que corre.
//
// - revisados: estudios que el sistema revisó contra los criterios.
// - seleccionados: estudios que pasaron los criterios (incluye el radar).
// - publicados: estudios publicados como hallazgo en la web.

const CONTADOR = {
  actualizado: "2026-11-02",
  semana: {
    revisados: 0,
    seleccionados: 0,
    publicados: 0,
  },
  desdeInicio: {
    revisados: 68,
    seleccionados: 26,
    publicados: 17,
  },
};
