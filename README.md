# Outside-In

Sitio de Desiree Solano. Fase 1: HTML, CSS y JavaScript simples, sin
dependencias ni build, pensado para GitHub Pages. Este archivo documenta la
estructura de datos para cuando construyamos la automatización (Fase 2).

**No publicar el sitio en internet hasta que la automatización semanal esté
funcionando** (regla del proyecto, ver `CLAUDE.md`).

## Antes de publicar

- [ ] Apagar el modo vista previa.
- [ ] Confirmar que la automatización semanal esté funcionando — la página
      "Detrás de Outside-In" la describe como algo que ya está activo, así
      que tiene que serlo de verdad antes de publicar.

## Estructura de archivos

- `index.html` — estructura del sitio.
- `css/estilos.css` — todo el diseño visual.
- `js/textos.js` — textos fijos de la interfaz, en español e inglés.
- `js/datos.js` — contenido: carta de bienvenida, industrias, temas y
  hallazgos. **Este es el archivo que la automatización va a actualizar.**
- `js/radar.js` — estudios detectados que todavía no se convirtieron en
  hallazgos. Está separado de `datos.js` a propósito, para que la
  automatización pueda escribir aquí sin tocar los hallazgos ya publicados.
- `js/app.js` — toda la lógica (nada de contenido ni de colores aquí).

## Campos de un hallazgo (`HALLAZGOS` en `js/datos.js`)

| Campo | Qué es |
|---|---|
| `id` | Identificador único del hallazgo (texto, por ejemplo `"h1"`). |
| `industria` | `id` de una de las industrias en `INDUSTRIAS`. |
| `tema` | `id` de uno de los temas en `TEMAS`. |
| `esEjemplo` | `true` si es un hallazgo de relleno (no real), `false` si es un hallazgo real y publicado. **La automatización siempre debe escribir `false` aquí.** |
| `fecha` | Fecha de publicación, formato `"AAAA-MM-DD"` (por ejemplo `"2026-03-10"`). `null` mientras `esEjemplo` sea `true`. |
| `anio` | Año como texto, para mostrar en la ficha (por ejemplo `"2026"`). |
| `fuente` | Nombre de la fuente (por ejemplo `"McKinsey"`). |
| `estudio_es` / `estudio_en` | Nombre del estudio, en español e inglés. |
| `link` | Enlace verificable a la fuente original. Nunca inventar uno. |
| `region_es` / `region_en` | Región a la que aplica el hallazgo. |
| `hallazgo_es` / `hallazgo_en` | El título/resumen de "lo que dicen los datos", con palabras propias (nunca copiar párrafos del informe). |
| `dato_clave_es` / `dato_clave_en` | La cifra o dato puntual más importante del hallazgo. |
| `implicancia_es` / `implicancia_en` | "Mi lectura": el análisis de Desiree sobre ese hallazgo. |
| `estado` | `"BORRADOR"` hasta que Desiree lo apruebe. Nunca se publica sin su aprobación. |

Reglas que ya están aplicadas en el sitio y que la automatización debe
respetar:

- Si un campo no se puede verificar, se deja vacío — nunca se inventa.
- Un hallazgo con `esEjemplo: false` es lo único que cuenta como "real": solo
  esos hallazgos mueven la fecha de "Actualizado el...", la etiqueta "Nuevo"
  y el color de la matriz.
- "Nuevo" se calcula solo: un hallazgo es reciente si `fecha` está dentro de
  los últimos 7 días (ver `esReciente()` en `js/app.js`).

## Campos de un estudio del radar (`RADAR_ESTUDIOS` en `js/radar.js`)

| Campo | Qué es |
|---|---|
| `id` | Identificador único del estudio. |
| `titulo_es` / `titulo_en` | Título del estudio, en español e inglés. |
| `fuente` | Nombre de la fuente. |
| `fecha_detectado` | Fecha en que el sistema lo detectó, formato `"AAAA-MM-DD"`. |

Si `RADAR_ESTUDIOS` está vacío (`[]`), la sección "En mi radar" no aparece en
el sitio. Un estudio del radar es un borrador de investigación, no un
hallazgo: cuando Desiree decide publicarlo, se convierte en un objeto nuevo
dentro de `HALLAZGOS` (con `esEjemplo: false`) y se puede quitar de aquí.
