# Outside-In

Sitio de Desiree Solano. Fase 1: HTML, CSS y JavaScript simples, sin
dependencias ni build, pensado para GitHub Pages. Este archivo documenta la
estructura de datos para cuando construyamos la automatización (Fase 2).

**No publicar el sitio en internet hasta que la automatización semanal esté
funcionando** (regla del proyecto, ver `CLAUDE.md`).

## Antes de publicar

- [ ] Apagar el modo vista previa (`MODO_VISTA_PREVIA = false` en `js/config.js`).
- [ ] Confirmar que la automatización semanal esté funcionando — la página
      "Detrás de Outside-In" la describe como algo que ya está activo, así
      que tiene que serlo de verdad antes de publicar.

## Estructura de archivos

- `index.html` — estructura del sitio.
- `detras-de-outside-in.html` — página "Detrás de Outside-In".
- `css/estilos.css` — todo el diseño visual.
- `js/config.js` — el interruptor único `MODO_VISTA_PREVIA`.
- `js/vista-previa.js` — datos de ejemplo que se usan solo mientras el
  interruptor esté en `true`. Nunca se usan datos reales de aquí.
- `js/textos.js` — textos fijos de la interfaz, en español e inglés.
- `js/datos.js` — contenido: carta de bienvenida, industrias, temas y
  hallazgos. **Este es el archivo que la automatización va a actualizar.**
- `js/contador.js` — números reales del contador "en vivo" (revisados → seleccionados → publicados) y la fecha de la última búsqueda (`actualizado`). La búsqueda semanal lo actualiza.
- `hallazgo.html` + `js/pagina-hallazgo.js` — página completa de cada hallazgo.
- `js/radar.js` — estudios detectados que todavía no se convirtieron en
  hallazgos. Está separado de `datos.js` a propósito, para que la
  automatización pueda escribir aquí sin tocar los hallazgos ya publicados.
- `js/app.js` — toda la lógica de `index.html` (nada de contenido ni de colores aquí).
- `js/pagina-detras.js` — la lógica (bien chica) de `detras-de-outside-in.html`.

## Campos de un hallazgo (`HALLAZGOS` en `js/datos.js`)

| Campo | Qué es |
|---|---|
| `id` | Identificador único del hallazgo (texto, por ejemplo `"h1"`). |
| `industria` | `id` de una de las industrias en `INDUSTRIAS`, o `null`. |
| `tema` | `id` de uno de los temas en `TEMAS`, o `null`. |
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
| `subtema` | Subtema dentro del tema paraguas (ver `criterios-deteccion.md`), o `null`. |
| `publicado` | Fecha en que el hallazgo se publicó en Outside-In, `"AAAA-MM-DD"`. Define la etiqueta "Nuevo" (últimos 7 días). |
| `contexto_es` / `contexto_en` | Sobre el estudio: quién lo hizo, muestra, geografía y fechas del trabajo de campo. |
| `puntos_es` / `puntos_en` | Lista de 3 a 6 cifras o hallazgos clave, con palabras propias. Se muestran en la página completa del hallazgo. |
| `lecturaEstado` | `"pendiente"` mientras Desiree no escriba su lectura; `"publicada"` cuando la escribe. |
| `estado` | `"PUBLICADO"` para hallazgos publicados. `"BORRADOR"` solo si una lectura de Desiree está en revisión. |

Cada hallazgo tiene su página completa en `hallazgo.html?id=<id>` (lógica en
`js/pagina-hallazgo.js`). `implicancia_es` / `implicancia_en` ("Mi lectura")
la escribe solo Desiree: si está en `null`, la web muestra "Mi lectura: en camino".

Reglas que ya están aplicadas en el sitio y que la automatización debe
respetar:

- Si un campo no se puede verificar, se deja vacío — nunca se inventa.
- `tema` e `industria` son opcionales, pero un hallazgo necesita al menos
  uno de los dos (nunca los dos en `null`):
  - Solo `tema` o solo `industria` → es una **lectura individual** y
    aparece en la sección "Entender".
  - `tema` **e** `industria` → es una **conexión** y aparece en la
    sección "Conectar".
- Un hallazgo con `esEjemplo: false` es lo único que cuenta como "real": solo
  esos hallazgos mueven la fecha de "Actualizado el...", la etiqueta "Nuevo"
  y el cálculo de "estudios revisados".
- "Nuevo" se calcula solo: un hallazgo es reciente si `fecha` está dentro de
  los últimos 7 días (ver `esReciente()` en `js/app.js`).
- El contador "en vivo" (botón del menú y cierre de "Así automaticé
  Outside-In") muestra revisados → seleccionados → publicados. Hoy solo
  existe con datos de vista previa, porque todavía no hay una forma real de
  contar "seleccionados" (estudios que pasaron la curaduría pero no se
  publicaron). La Fase 2 necesita registrar ese número para que el
  contador funcione con datos reales (`tieneDatosEnVivo()` en `js/app.js`
  es el único lugar que hay que actualizar).

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

## Fotos
- `img/`: fotos de Desiree (portada, "Así automaticé", "Detrás de Outside-In" y "Mi mirada").
- `js/imagenes.js`: fotos de portada de cada hallazgo, gratuitas de Unsplash. Se eligen por id del hallazgo o, si no hay, por industria o tema. Un hallazgo también puede traer su propio campo `imagen: { foto: "photo-XXXX", autor: "Nombre" }`. Si la foto no carga, vuelve la portada geométrica.
