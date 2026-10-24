// =====================================================================
// "Mi mirada": las columnas de Desirée.
// Cada columna es un artículo suyo, que parte de cruzar la data de
// distintos estudios. Solo ella las escribe.
//
// Para publicar una columna, agrega un bloque como este (la más nueva
// primero):
//
//   {
//     id: "c-2026-11-ejemplo",
//     publicado: "2026-11-02",
//     tema: "ia_personas",                 // id de TEMAS en datos.js
//     titulo_es: "Título en español",
//     titulo_en: "Title in English",
//     link: "https://www.linkedin.com/pulse/...", // dónde se lee completa
//     foto: "photo-1606836591695-4d58a73eba1e",   // código de Unsplash
//   },
//
// Mientras la lista esté vacía, la portada muestra las próximas columnas
// por tema, con la etiqueta "Muy pronto".
// =====================================================================

const COLUMNAS = [];
