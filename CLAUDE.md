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
- Menú: Qué es Outside-In · Estudios · Insights · Mi mirada · Sobre mí, más la lupa (buscador) y el botón English.
- Portada (index.html): a la izquierda "¿List@ para ponerte al día?", título "Outside-In.", bajada corta, botones, línea de última actualización y firma "Creado, diseñado y automatizado por Desirée Solano"; a la derecha un carrusel 3D lento con los 6 hallazgos más recientes que tienen cifra (fuente, cifra, frase completa y fecha).
- Historia al bajar (index.html#historia): la ventana que se agranda y cuenta qué es Outside-In en frases.
- Estudios (index.html#estudios): carrusel ordenado del estudio más nuevo al menos nuevo (por la fecha del estudio), con fecha de publicación, antigüedad ("hace 2 semanas") y etiqueta "Nuevo" para lo que sumó la última búsqueda. Botón "Filtrar" que abre un panel con tema, industria y antigüedad. Pestañas "Todos los estudios" y "Recién detectados" (el radar; no se muestra si está vacío).
- Insights (index.html#insights): el insight más reciente de js/insights.js; cada insight tiene su página (insight.html).
- Mi mirada (index.html#mirada): mis columnas y "Juntando las piezas" (mi estudio de estudios trimestral).
- Sobre mí (index.html#yo): mi foto, presentación, correo, LinkedIn y recomendaciones.
- "Qué es Outside-In" (que-es.html): por qué existe, cómo está estructurado, cómo funciona (línea de tiempo semanal), criterios y por qué se llama así. Enlaza a "Detrás de Outside-In".
- Cada estudio tiene su página completa (hallazgo.html): bajada, 4-5 párrafos, cifras clave, una cita breve, preguntas abiertas, sobre el estudio, link al original y el espacio "Mi mirada".
- "Mi mirada" es mi análisis. Si todavía no lo escribí, se muestra "Mi lectura: en camino".
- La línea de actualización usa js/contador.js, HALLAZGOS e INSIGHTS.
- Todo el contenido existe en español e inglés. Los textos fijos de index.html y que-es.html se traducen en js/traduccion.js; si cambias un texto en español, actualiza también su traducción ahí.

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
