// =====================================================================
// INSIGHTS de Outside-In: "cruces" entre estudios.
// Formato aprobado por Desiree el 6-nov-2026 (v5, manuales/guia-diseno.md §5):
// portada, patrón en cinco pasos (interactivo), cruces de un vistazo,
// pestañas por cruce (texto + gráfico de barras), postura de cada estudio,
// alcance breve, preguntas en franja azul y tabla de fuentes.
// Regla: cada cruce enfrenta datos de estudios DISTINTOS, cada cifra
// lleva su sujeto completo y cada comparación lleva una nota sobre qué
// mide cada estudio. Los insights NO llevan "Mi mirada".
// Cada estudio citado se toma de HALLAZGOS (js/datos.js) por su id.
// =====================================================================

const INSIGHTS = [
  {
    "id": "i-2026-10-ia-roles",
    "numero": "01",
    "publicado": "2026-10-23",
    "tema": "ia_personas",
    "industrias": [
      "consumo_masivo",
      "life_sciences",
      "servicios_financieros"
    ],
    "estudios": [
      "h-2026-10-deloitte-consumo-ia",
      "h-2026-10-bain-life-sciences",
      "h-2026-10-pwc-fs-cambio"
    ],
    "titulo_es": "Las organizaciones despliegan la IA",
    "titulo2_es": "sin definir cómo se integra en el trabajo de sus equipos.",
    "titulo_en": "Organizations are rolling out AI",
    "titulo2_en": "without defining how it fits into their teams’ work.",
    "resumen_es": "Deloitte, Bain y PwC estudian tres industrias distintas. Leídos en conjunto, muestran que los equipos usan poco la IA cuando la empresa no define cómo encaja en su trabajo.",
    "resumen_en": "Deloitte, Bain and PwC study three different industries. Read together, they show that teams make little use of AI when the company does not define how it fits into their work.",
    "bajada_es": "Deloitte, Bain y PwC analizan la adopción de la IA en tres industrias. Por caminos distintos, llegan a la misma conclusión: las empresas amplían el acceso a la IA, pero no definen para qué tareas usarla, qué se espera de cada persona ni qué pasa con su puesto. El resultado es un uso limitado a lo que se exige y, donde se anticipan recortes, temor.",
    "bajada_en": "Deloitte, Bain and PwC analyze AI adoption in three industries. By different paths, they reach the same conclusion: companies are expanding access to AI, but do not define which tasks to use it for, what is expected of each person or what happens to their job. The result is use limited to what is required and, where cuts are expected, fear.",
    "tesis_es": "El freno de la IA no está en la disposición de las personas, sino en que la empresa no define cómo se usa en cada puesto ni qué pasa con el trabajo de quien la usa.",
    "tesis_en": "What holds AI back is not people’s willingness, but the fact that companies do not define how it is used in each job or what happens to the work of those who use it.",
    "portada": [
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "industria": "consumo_masivo",
        "dato_es": "19%",
        "dato_en": "19%",
        "texto_es": "de los colaboradores no técnicos usa la IA solo cuando se le exige, según sus líderes",
        "texto_en": "of non-technical employees use AI only when required, according to their leaders"
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "industria": "servicios_financieros",
        "dato_es": "43%",
        "dato_en": "43%",
        "texto_es": "de los ejecutivos observa que sus equipos usan la IA solo cuando se les exige",
        "texto_en": "of executives see their teams use AI only when required"
      }
    ],
    "coinciden_titulo_es": "Lo que se repite en tres industrias",
    "coinciden_titulo_en": "What repeats across three industries",
    "coinciden_intro_es": "En industrias distintas, los tres estudios describen las mismas cinco etapas: las empresas dan acceso a la IA, pero no cambian los puestos ni explican qué cambia en cada rol; los equipos responden con temor y la usan solo cuando se les exige.",
    "coinciden_intro_en": "In different industries, the three studies describe the same five stages: companies give access to AI, but do not change jobs or explain what changes in each role; teams respond with fear and use it only when required.",
    "cadena": [
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "dato": "30% → 60%",
        "titulo_es": "El acceso se duplica",
        "titulo_en": "Access doubles",
        "texto_es": "En un año, la proporción de colaboradores de consumo masivo con acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60%.",
        "texto_en": "In one year, the share of consumer goods employees with access to approved AI tools rose from under 30% to about 60%."
      },
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "dato": "82%",
        "titulo_es": "El trabajo sigue igual",
        "titulo_en": "Work stays the same",
        "texto_es": "de las empresas de consumo masivo no ha rediseñado sus puestos en torno a la IA. Su respuesta más frecuente es capacitar (54%).",
        "texto_en": "of consumer goods companies have not redesigned their jobs around AI. Their most common response is training (54%)."
      },
      {
        "id": "h-2026-10-bain-life-sciences",
        "dato": "7%",
        "titulo_es": "La explicación es la excepción",
        "titulo_en": "Explanation is the exception",
        "texto_es": "de las empresas farmacéuticas y de salud que recién exploran la IA explica a sus equipos cómo cambiarán sus roles.",
        "texto_en": "of pharmaceutical and health companies just exploring AI explain to their teams how their roles will change."
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "dato": "44%",
        "titulo_es": "Aparece el temor",
        "titulo_en": "Fear appears",
        "texto_es": "de los ejecutivos de servicios financieros observa que sus colaboradores temen perder el empleo o que la IA cambie su rol.",
        "texto_en": "of financial services executives see their employees fear losing their jobs or having AI change their roles."
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "dato": "43%",
        "titulo_es": "El uso se vuelve obligación",
        "titulo_en": "Use becomes obligation",
        "texto_es": "de esos mismos ejecutivos observa que sus equipos usan la IA solo cuando se les exige.",
        "texto_en": "of those same executives see their teams use AI only when required."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "El trabajo no se rediseña al ritmo de la IA",
        "titulo_en": "Work is not being redesigned at the pace of AI",
        "lados": [
          {
            "id": "h-2026-10-bain-life-sciences",
            "industria": "life_sciences",
            "dato_es": "20%",
            "dato_en": "20%",
            "texto_es": "de las empresas que ya usan la IA en toda su operación convirtió su visión sobre el trabajo en decisiones para toda la organización",
            "texto_en": "of companies already using AI across their operations have turned their vision of work into organization-wide decisions",
            "v": 20
          },
          {
            "id": "h-2026-10-pwc-fs-ia",
            "industria": "servicios_financieros",
            "dato_es": "≈ 2 de 10",
            "dato_en": "≈ 2 in 10",
            "texto_es": "Firmas que calcularon el impacto de la IA y analizaron cómo rediseñar sus procesos: la mitad del 42% que hizo ese cálculo",
            "texto_en": "Firms that estimated AI's impact and analyzed how to redesign their processes: half of the 42% that made that estimate",
            "v": 21
          }
        ],
        "lectura_es": "En salud y farmacéutica, incluso las empresas que ya usan la IA en toda su operación tienen pendiente convertir su visión en decisiones sobre el trabajo. En servicios financieros, las firmas calculan cuánto personal podrían reducir, pero solo la mitad de las que hicieron ese cálculo analizó cómo se reorganizarán sus procesos.\n\nEn ambos sectores, el impacto de la IA se mide antes de definir cómo se trabajará. Deloitte encuentra el mismo pendiente en consumo masivo, donde 82% de las empresas no ha rediseñado sus puestos.",
        "lectura_en": "In pharmaceuticals and health, even companies already using AI across their operations have yet to turn their vision into decisions about work. In financial services, firms estimate how much staff they could cut, but only half of those that made that estimate have analyzed how their processes will be reorganized.\n\nIn both sectors, AI's impact is measured before defining how work will be done. Deloitte finds the same gap in consumer goods, where 82% of companies have not redesigned their jobs.",
        "nota_es": "Bain mide solo a las empresas más avanzadas de su sector; PwC, al total de firmas encuestadas. Que incluso las más avanzadas se ubiquen en ese nivel refuerza la coincidencia.",
        "nota_en": "Bain measures only the most advanced companies in its sector; PwC, all firms surveyed. That even the most advanced sit at that level reinforces the agreement.",
        "tarjeta_es": "El trabajo no se rediseña al ritmo de la IA",
        "tarjeta_en": "Work is not being redesigned at the pace of AI",
        "resumen_es": "En dos industrias, cerca de 2 de cada 10 empresas pasó del plan al rediseño del trabajo.",
        "resumen_en": "In two industries, about 2 in 10 companies have moved from planning to redesigning work.",
        "eje_es": "Empresas que ya convirtieron su plan en rediseño del trabajo",
        "eje_en": "Companies that have already turned their plan into work redesign",
        "sub_es": "En dos industrias, cerca de 2 de cada 10 empresas pasó del plan al rediseño del trabajo",
        "sub_en": "In two industries, about 2 in 10 companies have moved from planning to redesigning work"
      }
    ],
    "difieren_intro_es": "Al comparar los estudios aparecen diferencias que ninguno muestra por separado.",
    "difieren_intro_en": "Comparing the studies reveals differences that none of them shows on its own.",
    "difieren": [
      {
        "titulo_es": "Donde se anticipan recortes, el uso de la IA se limita a lo que se exige",
        "titulo_en": "Where cuts are expected, AI use is limited to what is required",
        "lados": [
          {
            "id": "h-2026-10-deloitte-consumo-ia",
            "industria": "consumo_masivo",
            "dato_es": "19%",
            "dato_en": "19%",
            "texto_es": "de los colaboradores no técnicos usa la IA solo cuando se le exige, según sus líderes. Otro 69% está entusiasmado o abierto a explorarla.",
            "texto_en": "of non-technical employees use AI only when required, according to their leaders. Another 69% are enthusiastic or open to exploring it.",
            "v": 19
          },
          {
            "id": "h-2026-10-pwc-fs-cambio",
            "industria": "servicios_financieros",
            "dato_es": "43%",
            "dato_en": "43%",
            "texto_es": "de los ejecutivos observa que sus equipos usan la IA solo cuando se les exige. 8 de cada 10 prevé una plantilla al menos 20% menor en cinco años.",
            "texto_en": "of executives see their teams use AI only when required. 8 in 10 expect a workforce at least 20% smaller within five years.",
            "v": 43
          }
        ],
        "lectura_es": "En consumo masivo, los líderes describen equipos mayoritariamente dispuestos y un uso por obligación minoritario. En servicios financieros el contexto es otro: el sector ya proyecta una reducción de personal de gran escala, y 44% de sus ejecutivos observa temor entre los colaboradores.\n\nCuando la organización anticipa recortes y no explica qué trabajo permanece, el uso se reduce al mínimo exigido.",
        "lectura_en": "In consumer goods, leaders describe teams that are mostly willing and a minority using AI out of obligation. In financial services the context is different: the sector already projects a large-scale workforce reduction, and 44% of its executives see fear among employees.\n\nWhen the organization anticipates cuts and does not explain what work remains, use falls to the required minimum.",
        "nota_es": "Las cifras no se miden de la misma forma: Deloitte estima la proporción de colaboradores; PwC, la proporción de ejecutivos que observa esa conducta en sus equipos. La comparación indica una diferencia de clima entre sectores, no una proporción exacta.",
        "nota_en": "The figures are not measured the same way: Deloitte estimates the share of employees; PwC, the share of executives who see that behavior in their teams. The comparison points to a difference in climate between sectors, not an exact proportion.",
        "tarjeta_es": "Donde se anticipan recortes, el uso de la IA se limita a lo que se exige",
        "tarjeta_en": "Where cuts are expected, AI use is limited to what is required",
        "resumen_es": "El uso por obligación es minoritario en consumo masivo y mucho más frecuente en servicios financieros.",
        "resumen_en": "Use out of obligation is a minority in consumer goods and far more common in financial services.",
        "sub_es": "La disposición de las personas responde menos a la herramienta que a lo que la IA significa para su empleo.",
        "sub_en": "People's willingness responds less to the tool than to what AI means for their jobs.",
        "eje_es": "Uso de la IA solo cuando se exige",
        "eje_en": "AI used only when required"
      },
      {
        "titulo_es": "Explicar cómo cambia un rol requiere haberlo redefinido antes",
        "titulo_en": "Explaining how a role changes requires having redefined it first",
        "lados": [
          {
            "id": "h-2026-10-bain-life-sciences",
            "industria": "life_sciences",
            "dato_es": "80%",
            "dato_en": "80%",
            "texto_es": "de las empresas que usan la IA en toda su operación explica a sus equipos cómo cambiarán sus roles, frente a 7% de las que recién la exploran",
            "texto_en": "of companies using AI across their operations explain to their teams how their roles will change, compared with 7% of those just exploring it",
            "v": 80
          },
          {
            "id": "h-2026-10-deloitte-consumo-ia",
            "industria": "consumo_masivo",
            "dato_es": "82%",
            "dato_en": "82%",
            "texto_es": "de las empresas no ha rediseñado sus puestos en torno a la IA; la respuesta más frecuente es capacitar a los colaboradores (54%)",
            "texto_en": "of companies have not redesigned their jobs around AI; the most common response is training employees (54%)",
            "v": 82
          }
        ],
        "lectura_es": "En salud y farmacéutica, explicar a los equipos cómo cambiarán sus roles es lo que más distingue a las empresas que usan la IA en toda su operación. En consumo masivo, la mayoría todavía no llega a ese punto: no rediseñó los puestos y concentra su esfuerzo en capacitar.\n\nPara explicar a un equipo cómo cambia su rol, la empresa primero tiene que decidir qué tareas asumirá la IA y cuáles seguirán a cargo de las personas.",
        "lectura_en": "In pharmaceuticals and health, explaining to teams how their roles will change is what most distinguishes companies using AI across their operations. In consumer goods, most have not yet reached that point: they have not redesigned jobs and focus their efforts on training.\n\nTo explain to a team how its role changes, the company must first decide which tasks AI will take on and which will remain with people.",
        "nota_es": "Bain describe a las empresas más avanzadas de su sector; Deloitte, al conjunto de la industria de consumo masivo.",
        "nota_en": "Bain describes the most advanced companies in its sector; Deloitte, the consumer goods industry as a whole.",
        "tarjeta_es": "Explicar cómo cambia un rol requiere haberlo redefinido antes",
        "tarjeta_en": "Explaining how a role changes requires having redefined it first",
        "resumen_es": "Las empresas más avanzadas explican el cambio de rol; la mayoría todavía no rediseñó los puestos.",
        "resumen_en": "The most advanced companies explain role changes; most have not yet redesigned jobs.",
        "sub_es": "La capacitación enseña a usar la herramienta, pero no dice qué cambia en cada puesto.",
        "sub_en": "Training teaches how to use the tool, but does not say what changes in each job.",
        "eje_es": "Explicación del rol frente a rediseño del puesto",
        "eje_en": "Explaining the role versus redesigning the job"
      }
    ],
    "dicen": [
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "postura_es": "Se entrega la herramienta, pero no se rediseña el trabajo.",
        "postura_en": "The tool is delivered, but work is not redesigned.",
        "dato_es": "82%",
        "dato_en": "82%",
        "frase_es": "de las empresas de consumo masivo no ha rediseñado sus puestos en torno a la IA, aunque en un año duplicó el acceso de sus colaboradores.",
        "frase_en": "of consumer goods companies have not redesigned their jobs around AI, even though they doubled employee access in one year."
      },
      {
        "id": "h-2026-10-bain-life-sciences",
        "postura_es": "Explicar cómo cambian los roles permite pasar de las pruebas a toda la operación.",
        "postura_en": "Explaining how roles change allows companies to move from pilots to their entire operation.",
        "dato_es": "80% vs. 7%",
        "dato_en": "80% vs. 7%",
        "frase_es": "80% de las empresas que usan la IA en toda su operación explica cómo cambiarán los roles; entre las que siguen en fase de prueba, 7%.",
        "frase_en": "80% of companies using AI across their operations explain how roles will change; among those still in the testing phase, 7%."
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "postura_es": "Sin claridad sobre cada rol, la IA genera temor y se usa por obligación.",
        "postura_en": "Without clarity on each role, AI creates fear and is used out of obligation.",
        "dato_es": "44%",
        "dato_en": "44%",
        "frase_es": "de los ejecutivos de servicios financieros en EE.UU. observa que sus colaboradores temen perder el empleo o que la IA cambie su rol.",
        "frase_en": "of US financial services executives see their employees fear losing their jobs or having AI change their roles."
      }
    ],
    "alcance_titulo_es": "Los tres estudios encuestan a ejecutivos, no a colaboradores.",
    "alcance_titulo_en": "All three studies survey executives, not employees.",
    "alcance_es": "Deloitte encuestó a 963 líderes de empresas de consumo masivo; Bain, a 133 ejecutivos del sector farmacéutico y de salud; PwC, a 1,004 ejecutivos de servicios financieros de EE.UU. Por eso, lo que estos estudios dicen sobre la disposición, el temor o el uso de los equipos es la percepción de sus líderes, no la voz de los propios colaboradores. Esa voz es la pieza pendiente para completar este cruce.",
    "alcance_en": "Deloitte surveyed 963 leaders at consumer goods companies; Bain, 133 executives in pharmaceuticals and health; PwC, 1,004 US financial services executives. As a result, what these studies say about teams' willingness, fear or use is their leaders' perception, not the voice of employees themselves. That voice is the missing piece to complete this analysis.",
    "mirada_es": null,
    "mirada_en": null,
    "preguntas_es": [
      "¿Qué sabe hoy cada equipo sobre cómo cambiará su trabajo con la IA, más allá del acceso a la herramienta?",
      "¿Qué puestos se han redefinido antes de comunicar la estrategia de IA?",
      "¿Qué se comunica a los equipos cuando la organización ya proyecta una reducción de personal?",
      "¿Cómo se mide la experiencia de los colaboradores con la IA, más allá de la percepción de sus líderes?"
    ],
    "preguntas_en": [
      "What does each team know today about how its work will change with AI, beyond access to the tool?",
      "Which jobs have been redefined before the AI strategy is communicated?",
      "What is communicated to teams when the organization already projects a workforce reduction?",
      "How is employees' experience with AI measured, beyond their leaders' perception?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, tres industrias",
    "patron_titulo_en": "Five steps, three industries",
    "patron_intro_es": "Las empresas dan acceso a la IA, pero no cambian los puestos ni explican qué cambia en cada rol. Selecciona cada paso para ver el dato.",
    "patron_intro_en": "Companies give access to AI, but do not change jobs or explain what changes in each role. Select each step to see the data.",
    "alcance_corto_es": "Los tres encuestan a ejecutivos, no a colaboradores: Deloitte, a 963 líderes; Bain, a 133 ejecutivos; PwC, a 1,004 ejecutivos. Lo que dicen sobre los equipos es la percepción de sus líderes.",
    "alcance_corto_en": "All three survey executives, not employees: Deloitte, 963 leaders; Bain, 133 executives; PwC, 1,004 executives. What they say about teams is their leaders' perception.",
    "muestras": {
      "Deloitte AI Institute": {
        "es": "963 líderes",
        "en": "963 leaders"
      },
      "Bain & Company": {
        "es": "133 ejecutivos",
        "en": "133 executives"
      },
      "PwC": {
        "es": "1,004 ejecutivos",
        "en": "1,004 executives"
      }
    }
  },
  {
    "id": "i-2026-11-ia-direccion-equipos",
    "numero": "02",
    "publicado": "2026-11-16",
    "tema": "ia_personas",
    "industrias": [],
    "estudios": [
      "h-2026-11-deloitte-directorios-ia",
      "h-2026-11-accenture-pulso-cambio",
      "h-2026-11-bcg-ia-trabajo",
      "h-2026-11-mckinsey-estado-ia"
    ],
    "titulo_es": "La IA se decide en la dirección.",
    "titulo2_es": "Su efecto en los equipos todavía no entra en esa agenda.",
    "titulo_en": "AI is decided at the top.",
    "titulo2_en": "Its effect on teams has not yet made it onto that agenda.",
    "resumen_es": "Deloitte, Accenture, BCG y McKinsey miran la IA desde el directorio, la alta dirección y los equipos. Leídos en conjunto, muestran que la organización avanza con la tecnología antes de definir qué cambia para las personas que la usan.",
    "resumen_en": "Deloitte, Accenture, BCG and McKinsey look at AI from the board, senior leadership and teams. Read together, they show that organizations move ahead with the technology before defining what changes for the people who use it.",
    "bajada_es": "Cuatro estudios recientes analizan la IA desde distintos niveles de la organización. Coinciden en que pocas empresas tienen una estrategia sobre su efecto en las personas o rediseñan sus procesos. Al mismo tiempo, los equipos reportan más ritmo, más carga y poca claridad, mientras el directorio dedica poca atención a su bienestar.",
    "bajada_en": "Four recent studies analyze AI from different levels of the organization. They agree that few companies have a strategy for its effect on people or are redesigning their processes. At the same time, teams report a faster pace, a heavier load and little clarity, while boards give little attention to their well-being.",
    "tesis_es": "Las organizaciones deciden e invierten en IA desde la dirección, pero la experiencia de quienes la usan cada día, con más ritmo, más carga y poca claridad, todavía no forma parte de la agenda que la gobierna.",
    "tesis_en": "Organizations decide on and invest in AI from the top, but the experience of those who use it every day, with a faster pace, a heavier load and little clarity, is not yet part of the agenda that governs it.",
    "portada": [
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "industria": null,
        "etiqueta_es": "Mandos medios y colaboradores",
        "etiqueta_en": "Middle managers and employees",
        "dato_es": "47%",
        "dato_en": "47%",
        "texto_es": "de los mandos medios y colaboradores que usan IA reporta al menos un efecto negativo, como estrés o más carga",
        "texto_en": "of middle managers and individual contributors who use AI report at least one negative effect, such as stress or a heavier workload"
      },
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "industria": null,
        "etiqueta_es": "Directorios",
        "etiqueta_en": "Boards",
        "dato_es": "9%",
        "dato_en": "9%",
        "texto_es": "es la frecuencia con que el bienestar de los empleados aparece cuando el directorio discute el efecto de la tecnología en la fuerza laboral",
        "texto_en": "is how often employee well-being comes up when the board discusses technology's effect on the workforce"
      }
    ],
    "coinciden_titulo_es": "Lo que se repite en cuatro estudios",
    "coinciden_titulo_en": "What repeats across four studies",
    "coinciden_intro_es": "Desde distintos niveles de la organización, los cuatro estudios describen las mismas cinco etapas: no hay estrategia sobre las personas, los procesos no se rediseñan, la comunicación no llega con claridad, la exigencia sube y la experiencia se vuelve más difícil en la base.",
    "coinciden_intro_en": "From different levels of the organization, the four studies describe the same five stages: there is no people strategy, processes are not redesigned, communication does not land clearly, demands rise and the experience becomes harder at the base.",
    "cadena": [
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "dato": "16%",
        "titulo_es": "Falta la estrategia sobre las personas",
        "titulo_en": "The people strategy is missing",
        "texto_es": "de los miembros de directorios y altos ejecutivos dice que su organización ya tiene una estrategia establecida sobre el impacto de la tecnología en su fuerza laboral.",
        "texto_en": "of board members and senior executives say their organization already has an established strategy for technology's impact on its workforce."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "dato": "15%",
        "titulo_es": "El trabajo no se rediseña",
        "titulo_en": "Work is not redesigned",
        "texto_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta mientras la IA se extiende en la organización.",
        "texto_en": "of C-suite leaders are redesigning their processes end to end as AI spreads across the organization."
      },
      {
        "id": "h-2026-11-bcg-ia-trabajo",
        "dato": "33%",
        "titulo_es": "La comunicación no llega con claridad",
        "titulo_en": "Communication does not land clearly",
        "texto_es": "de los encuestados indica que la dirección comunica con claridad sobre la IA. Entre los empleados de primera línea, solo 36% se siente preparado para usarla.",
        "texto_en": "of respondents say leadership communicates clearly about AI. Among frontline employees, only 36% feel prepared to use it."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "dato": "50%",
        "titulo_es": "Sube la exigencia",
        "titulo_en": "Demands rise",
        "texto_es": "de los empleados señala que la IA elevó la velocidad esperada del trabajo y la necesidad de revisar lo que produce.",
        "texto_en": "of employees say AI has raised the expected pace of work and the need to review what it produces."
      },
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "dato": "47% vs. 31%",
        "titulo_es": "La experiencia se divide",
        "titulo_en": "The experience splits",
        "texto_es": "47% de los mandos medios y colaboradores que usan IA reporta al menos un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior.",
        "texto_en": "47% of middle managers and individual contributors who use AI report at least one negative effect, compared with 31% of executives and senior managers."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Pocas organizaciones definieron qué cambia en el trabajo",
        "titulo_en": "Few organizations have defined what changes in work",
        "lados": [
          {
            "id": "h-2026-11-deloitte-directorios-ia",
            "industria": null,
            "etiqueta_es": "Directorios",
            "etiqueta_en": "Boards",
            "dato_es": "16%",
            "dato_en": "16%",
            "texto_es": "de los miembros de directorios y altos ejecutivos dice que su organización tiene una estrategia establecida sobre el impacto de la tecnología en su fuerza laboral",
            "texto_en": "of board members and senior executives say their organization has an established strategy for technology's impact on its workforce",
            "v": 16
          },
          {
            "id": "h-2026-11-accenture-pulso-cambio",
            "industria": null,
            "etiqueta_es": "Alta dirección",
            "etiqueta_en": "C-suite",
            "dato_es": "15%",
            "dato_en": "15%",
            "texto_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta",
            "texto_en": "of C-suite leaders are redesigning their processes end to end",
            "v": 15
          }
        ],
        "lectura_es": "Desde el directorio, Deloitte encuentra que la estrategia sobre el efecto de la tecnología en las personas existe en una minoría de organizaciones; otro 51% todavía la está desarrollando. Desde la alta dirección, Accenture encuentra una proporción casi idéntica de líderes que rediseña sus procesos de punta a punta.\n\nLeídos juntos, los dos estudios describen el mismo punto de partida: la IA ya está en marcha, pero en más de 8 de cada 10 organizaciones todavía no se decidió cómo cambia el trabajo ni qué se espera de las personas.",
        "lectura_en": "From the board, Deloitte finds that a strategy for technology's effect on people exists in a minority of organizations; another 51% are still developing one. From the C-suite, Accenture finds an almost identical share of leaders redesigning their processes end to end.\n\nRead together, the two studies describe the same starting point: AI is already under way, but in more than 8 in 10 organizations it has not yet been decided how work changes or what is expected of people.",
        "nota_es": "Deloitte mide la proporción de organizaciones con una estrategia establecida, según sus directores y altos ejecutivos; Accenture, la proporción de líderes de alta dirección que rediseña procesos. Son medidas distintas de un mismo avance pendiente, no la misma cifra.",
        "nota_en": "Deloitte measures the share of organizations with an established strategy, according to their directors and senior executives; Accenture, the share of C-suite leaders redesigning processes. They are different measures of the same pending step, not the same figure.",
        "tarjeta_es": "Pocas organizaciones definieron qué cambia en el trabajo",
        "tarjeta_en": "Few organizations have defined what changes in work",
        "resumen_es": "Desde el directorio y desde la alta dirección, menos de 2 de cada 10 pasó de la tecnología a la definición del trabajo.",
        "resumen_en": "From the board and from the C-suite, fewer than 2 in 10 have moved from technology to defining work.",
        "eje_es": "Organizaciones o líderes que ya definieron cómo cambia el trabajo",
        "eje_en": "Organizations or leaders that have already defined how work changes",
        "sub_es": "Menos de 2 de cada 10 pasó de la tecnología a la definición del trabajo",
        "sub_en": "Fewer than 2 in 10 have moved from technology to defining work"
      }
    ],
    "difieren_intro_es": "Al comparar los estudios aparecen diferencias que ninguno muestra por separado.",
    "difieren_intro_en": "Comparing the studies reveals differences that none of them shows on its own.",
    "difieren": [
      {
        "titulo_es": "El costo para las personas casi no llega al directorio",
        "titulo_en": "The cost to people barely reaches the board",
        "lados": [
          {
            "id": "h-2026-11-mckinsey-estado-ia",
            "industria": null,
            "etiqueta_es": "Mandos medios y colaboradores",
            "etiqueta_en": "Middle managers and employees",
            "dato_es": "47%",
            "dato_en": "47%",
            "texto_es": "de los mandos medios y colaboradores que usan IA reporta al menos un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior",
            "texto_en": "of middle managers and individual contributors who use AI report at least one negative effect, compared with 31% of executives and senior managers",
            "v": 47
          },
          {
            "id": "h-2026-11-deloitte-directorios-ia",
            "industria": null,
            "etiqueta_es": "Directorios",
            "etiqueta_en": "Boards",
            "dato_es": "9%",
            "dato_en": "9%",
            "texto_es": "de las conversaciones del directorio sobre tecnología y fuerza laboral se centra en el bienestar de los empleados, frente a 42% en la productividad",
            "texto_en": "of board conversations about technology and the workforce focus on employee well-being, compared with 42% on productivity",
            "v": 9
          }
        ],
        "lectura_es": "En los equipos, McKinsey encuentra que casi la mitad de los mandos medios y colaboradores que usan IA ya reporta efectos negativos, 16 puntos más que entre los ejecutivos. En el directorio, Deloitte encuentra que la conversación sobre tecnología y personas se concentra en la productividad y casi no aborda el bienestar ni la confianza de los empleados (6%).\n\nLa diferencia indica que los efectos de la IA se sienten con más fuerza en los niveles que ejecutan el trabajo, mientras el órgano que supervisa la transformación los discute poco.",
        "lectura_en": "Within teams, McKinsey finds that almost half of middle managers and individual contributors who use AI already report negative effects, 16 points more than among executives. On the board, Deloitte finds that the conversation about technology and people centers on productivity and barely addresses employee well-being or trust (6%).\n\nThe difference indicates that AI's effects are felt most strongly at the levels that carry out the work, while the body that oversees the transformation rarely discusses them.",
        "nota_es": "Las cifras no miden lo mismo: McKinsey mide la proporción de personas que reporta un efecto negativo; Deloitte, el peso de cada tema en las conversaciones del directorio. La comparación muestra una distancia de atención entre niveles, no una relación directa entre ambos datos.",
        "nota_en": "The figures do not measure the same thing: McKinsey measures the share of people reporting a negative effect; Deloitte, the weight of each topic in board conversations. The comparison shows a gap in attention between levels, not a direct relationship between the two figures.",
        "tarjeta_es": "El costo para las personas casi no llega al directorio",
        "tarjeta_en": "The cost to people barely reaches the board",
        "resumen_es": "Los efectos negativos de la IA crecen en la base, mientras el bienestar ocupa un lugar menor en la agenda del directorio.",
        "resumen_en": "AI's negative effects grow at the base, while well-being holds a minor place on the board agenda.",
        "sub_es": "Los efectos de la IA se sienten más en quienes ejecutan el trabajo que en quienes lo supervisan.",
        "sub_en": "AI's effects are felt more by those who carry out the work than by those who oversee it.",
        "eje_es": "Efectos negativos en los equipos frente a atención del directorio al bienestar",
        "eje_en": "Negative effects on teams versus board attention to well-being"
      },
      {
        "titulo_es": "La productividad sube junto con la carga",
        "titulo_en": "Productivity rises along with the load",
        "lados": [
          {
            "id": "h-2026-11-accenture-pulso-cambio",
            "industria": null,
            "etiqueta_es": "Empleados",
            "etiqueta_en": "Employees",
            "dato_es": "82%",
            "dato_en": "82%",
            "texto_es": "de los empleados afirma que la IA aumentó su productividad; al mismo tiempo, 50% señala que elevó la velocidad esperada y la revisión del trabajo",
            "texto_en": "of employees say AI has increased their productivity; at the same time, 50% say it has raised the expected pace and the review of work",
            "v": 82
          },
          {
            "id": "h-2026-11-bcg-ia-trabajo",
            "industria": null,
            "etiqueta_es": "Usuarios frecuentes",
            "etiqueta_en": "Frequent users",
            "dato_es": "41%",
            "dato_en": "41%",
            "texto_es": "de los usuarios frecuentes de IA reporta una mayor carga mental asociada a su uso; 66% recibe poca o ninguna orientación sobre cómo usar el tiempo que ahorra",
            "texto_en": "of frequent AI users report a heavier mental load associated with its use; 66% receive little or no guidance on how to use the time they save",
            "v": 41
          }
        ],
        "lectura_es": "Accenture muestra que la gran mayoría de los empleados percibe una mejora de productividad con la IA. BCG agrega el otro lado: cuatro de cada diez usuarios frecuentes siente más carga mental, y la mayoría no recibe orientación sobre qué hacer con el tiempo ahorrado.\n\nLa productividad y la carga conviven. Cuando la organización no define cómo se usa el tiempo liberado, la ganancia se traduce en más ritmo y más revisión, no en mejor trabajo.",
        "lectura_en": "Accenture shows that the vast majority of employees perceive a productivity gain from AI. BCG adds the other side: four in ten frequent users feel a heavier mental load, and most receive no guidance on what to do with the time saved.\n\nProductivity and load coexist. When the organization does not define how freed-up time is used, the gain turns into a faster pace and more review, not better work.",
        "nota_es": "Accenture mide a empleados de organizaciones grandes en 21 países; BCG, a usuarios frecuentes de IA en 14 mercados. Ambas cifras provienen de los propios trabajadores, pero de muestras distintas.",
        "nota_en": "Accenture measures employees at large organizations in 21 countries; BCG, frequent AI users in 14 markets. Both figures come from workers themselves, but from different samples.",
        "tarjeta_es": "La productividad sube junto con la carga",
        "tarjeta_en": "Productivity rises along with the load",
        "resumen_es": "La mayoría trabaja más rápido, y una parte importante siente más carga mental.",
        "resumen_en": "Most work faster, and a significant share feel a heavier mental load.",
        "sub_es": "Sin una definición sobre el tiempo ahorrado, la ganancia de productividad se convierte en más exigencia.",
        "sub_en": "Without a decision on the time saved, the productivity gain becomes greater demands.",
        "eje_es": "Productividad percibida frente a carga mental",
        "eje_en": "Perceived productivity versus mental load"
      }
    ],
    "dicen": [
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "postura_es": "La IA entra al directorio antes que su efecto en las personas.",
        "postura_en": "AI reaches the board before its effect on people does.",
        "dato_es": "16%",
        "dato_en": "16%",
        "frase_es": "de las organizaciones tiene una estrategia establecida sobre el impacto de la tecnología en su fuerza laboral, según sus directores y altos ejecutivos.",
        "frase_en": "of organizations have an established strategy for technology's impact on their workforce, according to their directors and senior executives."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "postura_es": "La IA se extiende sin rediseñar los procesos.",
        "postura_en": "AI spreads without processes being redesigned.",
        "dato_es": "15%",
        "dato_en": "15%",
        "frase_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta, mientras 50% de los empleados percibe más velocidad y más revisión del trabajo.",
        "frase_en": "of C-suite leaders are redesigning their processes end to end, while 50% of employees perceive a faster pace and more review of work."
      },
      {
        "id": "h-2026-11-bcg-ia-trabajo",
        "postura_es": "Los equipos usan la IA sin formación suficiente ni comunicación clara.",
        "postura_en": "Teams use AI without enough training or clear communication.",
        "dato_es": "33%",
        "dato_en": "33%",
        "frase_es": "de los encuestados indica que la dirección comunica con claridad sobre la IA; 74% de los empleados de primera línea ya la usa con regularidad.",
        "frase_en": "of respondents say leadership communicates clearly about AI; 74% of frontline employees already use it regularly."
      },
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "postura_es": "La IA se vive peor en la base que en la cima.",
        "postura_en": "AI is experienced worse at the base than at the top.",
        "dato_es": "47% vs. 31%",
        "dato_en": "47% vs. 31%",
        "frase_es": "47% de los mandos medios y colaboradores que usan IA reporta un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior.",
        "frase_en": "47% of middle managers and individual contributors who use AI report a negative effect, compared with 31% of executives and senior managers."
      }
    ],
    "alcance_titulo_es": "Un estudio mira desde el directorio; tres suman la voz de los equipos.",
    "alcance_titulo_en": "One study looks from the board; three add the voice of teams.",
    "alcance_es": "Deloitte encuestó a 806 miembros de directorios y altos ejecutivos de 53 países; Accenture, a 3,000 líderes de alta dirección y 3,000 empleados de 21 países; BCG, a 11,749 líderes, mandos medios y empleados de primera línea de 14 mercados; McKinsey, a 1,719 personas de todos los niveles de 97 países. A diferencia del cruce anterior, aquí la experiencia de los equipos se mide con su propia voz y no solo con la percepción de sus líderes.",
    "alcance_en": "Deloitte surveyed 806 board members and senior executives in 53 countries; Accenture, 3,000 C-suite leaders and 3,000 employees in 21 countries; BCG, 11,749 leaders, middle managers and frontline employees in 14 markets; McKinsey, 1,719 people at all levels in 97 countries. Unlike the previous cross-read, the experience of teams here is measured in their own voice, not only through their leaders' perception.",
    "mirada_es": null,
    "mirada_en": null,
    "preguntas_es": [
      "¿Qué información recibe el directorio sobre la experiencia de los equipos que ya usan IA, más allá de la productividad?",
      "¿Qué decisiones se tomaron sobre cómo usar el tiempo que la IA libera en cada equipo?",
      "¿Qué saben los mandos medios sobre cómo cambia su rol y el de sus equipos?",
      "¿Cómo se mide la carga de trabajo y el bienestar de quienes usan la IA todos los días?"
    ],
    "preguntas_en": [
      "What information does the board receive about the experience of teams already using AI, beyond productivity?",
      "What decisions have been made about how to use the time AI frees up in each team?",
      "What do middle managers know about how their role and their teams' roles are changing?",
      "How are the workload and well-being of those who use AI every day measured?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, cuatro estudios",
    "patron_titulo_en": "Five steps, four studies",
    "patron_intro_es": "La IA se decide en la dirección, pero el trabajo no se rediseña y la experiencia de los equipos queda fuera de la agenda. Cada paso muestra su dato.",
    "patron_intro_en": "AI is decided at the top, but work is not redesigned and the experience of teams stays off the agenda. Each step shows its data point.",
    "alcance_corto_es": "Un estudio mira desde el directorio (Deloitte, 806 directores y altos ejecutivos) y tres suman la voz de los equipos: Accenture, 3,000 líderes y 3,000 empleados; BCG, 11,749 personas de todos los niveles; McKinsey, 1,719 personas de todos los niveles.",
    "alcance_corto_en": "One study looks from the board (Deloitte, 806 directors and senior executives) and three add the voice of teams: Accenture, 3,000 leaders and 3,000 employees; BCG, 11,749 people at all levels; McKinsey, 1,719 people at all levels.",
    "muestras": {
      "Deloitte": {
        "es": "806 directores y altos ejecutivos",
        "en": "806 directors and senior executives"
      },
      "Accenture": {
        "es": "3,000 líderes y 3,000 empleados",
        "en": "3,000 leaders and 3,000 employees"
      },
      "BCG": {
        "es": "11,749 personas",
        "en": "11,749 people"
      },
      "McKinsey & Company": {
        "es": "1,719 personas",
        "en": "1,719 people"
      }
    }
  }
];
