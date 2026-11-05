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
//     link: "columna-ejemplo.html",        // página de la columna en esta web (o un link externo)
//     foto: "photo-1606836591695-4d58a73eba1e",   // código de Unsplash
//   },
//
// Mientras la lista esté vacía, la portada muestra las próximas columnas
// por tema, con la etiqueta "Muy pronto".
// =====================================================================

const COLUMNAS = [
  {
    id: "c-2026-11-cambiarlo-todo",
    publicado: "2026-11-02",
    tema: "gestion_cambio",
    titulo_es: "Cambiarlo todo, comunicarlo todo: el exceso que agota a las organizaciones",
    titulo_en: "Change everything, communicate everything: the excess wearing organizations out",
    link: "columna-cambiarlo-todo.html",
    foto: "photo-1517048676732-d65bc937f952",
  },
];
