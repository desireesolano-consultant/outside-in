# CLAUDE.md

## Sobre mí
- Soy Desiree Solano, consultora especializada en comunicación organizacional, gestión del cambio y transformación.
- Soy principiante en programación: explícame siempre en español simple qué haces y por qué, antes de hacerlo.
- Háblame siempre en español peruano, de tú.

## Objetivo del proyecto
- Sitio web llamado "Outside-In", firmado por mí, que funciona como portafolio profesional: https://desireesolano-consultant.github.io/outside-in/
- Reúne hallazgos de estudios públicos sobre lo que está cambiando en las organizaciones y muestra cómo pienso como consultora.
- Público: reclutadores, gerentes de consultoría y líderes de negocio.
- La magia de Outside-In es que se renueva sola: una búsqueda automática semanal publica estudios nuevos.

## Estructura del sitio
- Portada con titular clicable (Entender / Conectar / Anticipar), mi foto, mi presentación, mi correo y LinkedIn.
- Buscador en el encabezado (lupa): busca estudios por tema, industria, fuente o palabra.
- "Sobre Outside-In": carta de bienvenida, mis fotos y la guía "Cómo leer Outside-In" (qué es Entender, Conectar y Anticipar).
- "Entender": los estudios uno por uno, cuando un hallazgo tiene solo tema o solo industria.
- "Conectar": frase interactiva con desplegables de tema e industria; muestra los hallazgos que cruzan ambos.
- "Anticipar": estudios detectados que todavía no tienen hallazgo publicado (el radar). No se muestra si no hay ninguno.
- "Así automaticé Outside-In": cómo funciona el sistema, con enlace a la página "Detrás de Outside-In".
- Cada estudio tiene su página completa (hallazgo.html): bajada, 4-5 párrafos, cifras clave, una cita breve, preguntas abiertas, sobre el estudio, link al original y el espacio "Mi mirada".
- "Mi mirada" es mi análisis. Si todavía no lo escribí, se muestra "Mi lectura: en camino".
- Contador "En vivo" (js/contador.js) con la fecha de la última búsqueda y sus números.
- Botón para cambiar todo el contenido entre español e inglés.

## Industrias
- Salud y farmacéutica (Life Sciences en inglés), servicios financieros (banca, pagos y seguros), consumo masivo.

## Temas (paraguas con subtemas)
- Gestión del cambio y transformación: adopción, hábitos, M&A, agile.
- IA y personas.
- Liderazgo, cultura y comunicación: seguridad psicológica, propósito, comunicación interna, marca empleadora, propuesta de valor al colaborador.

## Fuentes y criterios
- Los manuales viven en el proyecto "Desi Coding" de Claude: outside-in/criterios-deteccion.md, outside-in/fuentes-deteccion.md y outside-in/registro-revisados.md. Son la referencia oficial.
- Geografía: América (Norte, Centro y Sur) primero; también estudios globales o multirregión grandes.
- Fuentes de peso: consultoras, consultoras de personas, instituciones financieras (por ejemplo JPMorgan, Mastercard, Visa), cámaras como AmCham e institutos de investigación. JPMorgan se presenta como institución financiera, no como consultora.
- No se usan proveedores de software, salvo las excepciones que yo apruebe.
- Muestras grandes: al menos 1,000 trabajadores o 100 ejecutivos.
- Solo estudios PÚBLICOS. Descargas con formulario están bien; estudios pagos, nunca.

## Reglas de datos (lo más importante)
- NUNCA inventar datos, cifras, porcentajes, estudios, fechas ni links. NUNCA.
- Cada hallazgo debe tener: fuente, nombre del estudio, año, link verificable a la fuente original, hallazgo, dato clave y región. Debe tener tema, industria o ambos (solo uno = Entender; los dos = Conectar).
- Si un dato no se puede verificar, no se incluye. Es preferible dejar un campo vacío que inventarlo.
- Resumir con palabras propias; nunca copiar párrafos. Como mucho una cita textual de menos de 15 palabras por estudio.
- Los artículos de cada estudio se escriben en voz editorial experta, en tercera persona. No son mi voz ni mi opinión.
- "Mi mirada" (implicancia) es solo mía: nunca la escribas por mí. Va en null con lecturaEstado "pendiente" hasta que yo la dé.

## Publicación
- Se publican solos, sin mi aprobación, los estudios que cumplen TODOS los criterios y están verificados en su fuente original.
- Pasan por mi aprobación: excepciones a alguna regla, estudios solo vistos en prensa, fuentes nuevas y cualquier caso dudoso.
- Cada semana queda un documento en el proyecto (outside-in/candidatos/AAAA-MM-DD.md) con lo publicado, lo que requiere mi aprobación y lo descartado.

## Diseño
- Estilo sobrio y profesional, como una publicación de consultora. Que se vea bien en celular y computadora.
- Todo el contenido debe existir en español e inglés.
- Mis fotos están en img/. Las portadas de los estudios son fotos gratuitas de Unsplash (js/imagenes.js).

## Plan técnico
- Sitio en HTML, CSS y JavaScript simples, sin compilar, con los datos en archivos separados del diseño (js/datos.js, js/radar.js, js/contador.js), publicado en GitHub Pages desde la rama main del repositorio desireesolano-consultant/outside-in.
- La búsqueda semanal es una tarea programada de Claude que corre los lunes a las 8:47 (hora de Buenos Aires), publica directo en main y me avisa.
- Nunca guardar claves de API en archivos del proyecto.
