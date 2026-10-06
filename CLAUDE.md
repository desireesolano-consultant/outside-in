# CLAUDE.md

## Sobre mí
- Soy Desiree Solano, consultora especializada en comunicación organizacional, gestión del cambio y transformación.
- Soy principiante en programación: explícame siempre en español simple qué haces y por qué, antes de hacerlo.
- Háblame siempre en español peruano, de tú.

## Objetivo del proyecto
- Sitio web llamado "Outside-In", firmado por mí, que funciona como portafolio profesional.
- Demuestra que estoy informada de lo que pasa en distintas industrias, más allá de un cliente específico, y muestra cómo pienso como consultora.
- Público: reclutadores, gerentes de consultoría y líderes de negocio.

## Estructura del sitio
- Portada con titular clicable (Entender / Conectar / Anticipar), carta de bienvenida completa en "Sobre Outside-In", y mi correo y LinkedIn debajo de mi presentación.
- "Entender": mis lecturas individuales, cuando un hallazgo tiene solo tema o solo industria.
- "Conectar": frase interactiva con desplegables de tema e industria; muestra los hallazgos que cruzan ambos (una "conexión").
- "Anticipar": estudios que detecté y todavía estoy leyendo (el radar). No se muestra si no hay ninguno.
- "Así automaticé Outside-In": cómo funciona el sistema, con enlace a la página completa "Detrás de Outside-In".
- Fichas de hallazgo, con dos partes separadas visualmente: "Lo que dicen los datos" (con fuente) e "Implicancia para el negocio" (mi análisis).
- Botón para cambiar todo el contenido entre español e inglés.

## Industrias
- Primera versión: salud y farmacéutica (Life Sciences en inglés), servicios financieros (banca, pagos y seguros), consumo masivo.

## Temas
- Gestión del cambio, IA y personas, liderazgo-cultura-comunicación.

## Fuentes
- EY, Accenture, Deloitte, KPMG, McKinsey, Gartner, PwC y JPMorgan.
- JPMorgan se presenta como institución financiera, no como consultora.
- Solo usar información pública. De Gartner, solo lo publicado abiertamente (notas de prensa y resúmenes).

## Reglas de datos (lo más importante)
- NUNCA inventar datos, cifras, porcentajes, estudios, fechas ni links. NUNCA.
- Cada hallazgo debe tener: fuente, nombre del estudio, año, link verificable, hallazgo, dato clave y región. Tema e industria son opcionales, pero debe tener al menos uno de los dos (solo uno = lectura individual, en "Entender"; los dos = conexión, en "Conectar").
- Si un dato no se puede verificar, no se incluye. Es preferible dejar un campo vacío que inventarlo.
- Resumir con palabras propias; nunca copiar párrafos de los informes.
- Las implicancias son mi análisis: puedes proponer borradores, pero deben marcarse como "BORRADOR" hasta que yo los apruebe.
- Nada se publica sin mi aprobación.

## Diseño
- Estilo sobrio y profesional, como una publicación de consultora. Que se vea bien en celular y computadora.
- Todo el contenido debe existir en español e inglés.

## Plan técnico
- Fase 1: sitio en HTML, CSS y JavaScript simples, con los datos en archivos separados del diseño, publicado en GitHub Pages.
- Fase 2: script que busque informes nuevos y use la API de Claude para proponer hallazgos.
- Fase 3: ejecución semanal con GitHub Actions, con mi aprobación antes de publicar.
- Nunca guardar claves de API en archivos del proyecto.
- La carta de bienvenida dice que el sitio se actualiza cada semana. No publicar el sitio en internet hasta que la automatización semanal esté funcionando.
